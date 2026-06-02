// ─── Tool Processors ───
// Maps each tool slug → actual PDF processing logic.
// Every processor receives (files: File[]) and returns processed data + download info.

import {
  mergePDFs,
  splitPDF,
  imagesToPDF,
  addPageNumbers,
} from "./pdf-utils";
import {
  compressPDF,
  pdfToJPG,
  pdfToPNG,
  extractText,
  downloadBlob,
  downloadDataUrl,
} from "./pdf-render";
import { createZipAndDownload } from "./zip-utils";

// ─── Result type ───
export interface ProcessResult {
  /** Human-readable summary */
  message: string;
  /** If single file output */
  data?: Uint8Array;
  /** Data URL for image outputs */
  dataUrl?: string;
  /** If multiple files output (split, jpg pages) */
  files?: { name: string; data: Uint8Array; mime: string }[];
  /** Suggested download filename */
  filename?: string;
}

// ─── Processor type ───
export type ToolProcessor = (
  files: File[],
  onProgress?: (msg: string) => void,
  onProgressPercent?: (percent: number) => void
) => Promise<ProcessResult>;

// ─── Helpers ───
async function filesToBuffers(files: File[]): Promise<ArrayBuffer[]> {
  return Promise.all(files.map((f) => f.arrayBuffer()));
}

// ─── Processors ───

/** Merge PDF — combines multiple PDFs into one */
const mergeProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length < 2) throw new Error("Please select at least 2 PDF files to merge.");
  onProgress?.(`Loading ${files.length} files...`);
  onProgressPercent?.(10);
  const buffers = await filesToBuffers(files);
  onProgress?.("Merging PDFs...");
  onProgressPercent?.(50);
  const result = await mergePDFs(buffers);
  onProgressPercent?.(100);
  return {
    message: `Successfully merged ${files.length} PDF files into one.`,
    data: result,
    filename: "merged.pdf",
  };
};

/** Split PDF — produces one file per page */
const splitProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to split.");
  onProgress?.("Loading PDF...");
  onProgressPercent?.(20);
  const buffer = await files[0].arrayBuffer();
  onProgress?.("Splitting pages...");
  onProgressPercent?.(50);
  const pages = await splitPDF(buffer);
  onProgressPercent?.(100);
  const baseName = files[0].name.replace(/\.pdf$/i, "");
  return {
    message: `Split into ${pages.length} individual pages.`,
    files: pages.map((data, i) => ({
      name: `${baseName}_page_${i + 1}.pdf`,
      data,
      mime: "application/pdf",
    })),
  };
};

/** Compress PDF — re-renders pages at lower quality */
const compressProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to compress.");
  onProgress?.("Loading PDF...");
  onProgressPercent?.(10);
  const buffer = await files[0].arrayBuffer();
  const origSize = buffer.byteLength;
  onProgress?.("Compressing (this may take a moment for large files)...");
  onProgressPercent?.(40);
  const result = await compressPDF(buffer, { quality: 0.45, format: "image/jpeg" });
  onProgressPercent?.(100);
  const newSize = result.byteLength;
  const reduction = ((1 - newSize / origSize) * 100).toFixed(1);
  const baseName = files[0].name.replace(/\.pdf$/i, "");
  return {
    message: `Compressed from ${(origSize / 1024 / 1024).toFixed(1)}MB to ${(newSize / 1024 / 1024).toFixed(1)}MB (${reduction}% reduction).`,
    data: result,
    filename: `${baseName}_compressed.pdf`,
  };
};

/** PDF to JPG — renders each page as a JPEG */
const pdfToJpgProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to convert.");
  onProgress?.("Loading PDF...");
  onProgressPercent?.(15);
  const buffer = await files[0].arrayBuffer();
  onProgress?.("Converting to JPG...");
  onProgressPercent?.(40);
  const results = await pdfToJPG(buffer, { scale: 2.0, quality: 0.9 });
  onProgressPercent?.(100);
  const baseName = files[0].name.replace(/\.pdf$/i, "");

  if (results.length === 1) {
    return {
      message: "Converted 1 page to JPG.",
      dataUrl: results[0].dataUrl,
      filename: `${baseName}.jpg`,
    };
  }

  // Multiple pages — return data URLs
  return {
    message: `Converted ${results.length} pages to JPG images.`,
    files: results.map((r, i) => ({
      name: `${baseName}_page_${r.pageNum}.jpg`,
      data: new Uint8Array(
        atob(r.dataUrl.split(",")[1])
          .split("")
          .map((c) => c.charCodeAt(0))
      ),
      mime: "image/jpeg",
    })),
  };
};

/** PDF to PNG */
const pdfToPngProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to convert.");
  onProgress?.("Loading PDF...");
  onProgressPercent?.(15);
  const buffer = await files[0].arrayBuffer();
  onProgress?.("Converting to PNG...");
  onProgressPercent?.(40);
  const results = await pdfToPNG(buffer, { scale: 2.0 });
  onProgressPercent?.(100);
  const baseName = files[0].name.replace(/\.pdf$/i, "");

  if (results.length === 1) {
    return {
      message: "Converted 1 page to PNG.",
      dataUrl: results[0].dataUrl,
      filename: `${baseName}.png`,
    };
  }

  return {
    message: `Converted ${results.length} pages to PNG images.`,
    files: results.map((r, i) => ({
      name: `${baseName}_page_${r.pageNum}.png`,
      data: new Uint8Array(
        atob(r.dataUrl.split(",")[1])
          .split("")
          .map((c) => c.charCodeAt(0))
      ),
      mime: "image/png",
    })),
  };
};

/** JPG/PNG to PDF */
const imagesToPdfProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length === 0) throw new Error("Please select at least 1 image file.");
  onProgress?.(`Loading ${files.length} images...`);
  onProgressPercent?.(15);
  const buffers = await filesToBuffers(files);
  onProgress?.("Converting to PDF...");
  onProgressPercent?.(60);
  const result = await imagesToPDF(buffers, true);
  onProgressPercent?.(100);
  return {
    message: `Converted ${files.length} image(s) to a single PDF.`,
    data: result,
    filename: "images.pdf",
  };
};

/** Add page numbers */
const pageNumbersProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file.");
  onProgress?.("Loading PDF...");
  onProgressPercent?.(20);
  const buffer = await files[0].arrayBuffer();
  onProgress?.("Adding page numbers...");
  onProgressPercent?.(50);
  const result = await addPageNumbers(buffer);
  onProgressPercent?.(100);
  const baseName = files[0].name.replace(/\.pdf$/i, "");
  return {
    message: "Page numbers added.",
    data: result,
    filename: `${baseName}_numbered.pdf`,
  };
};

/** PDF to Text */
const pdfToTextProcessor: ToolProcessor = async (files, onProgress, onProgressPercent) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file.");
  onProgress?.("Extracting text...");
  onProgressPercent?.(30);
  const buffer = await files[0].arrayBuffer();
  const text = await extractText(buffer);
  onProgressPercent?.(100);
  const baseName = files[0].name.replace(/\.pdf$/i, "");
  const encoder = new TextEncoder();
  return {
    message: `Extracted ${text.length.toLocaleString()} characters of text.`,
    data: encoder.encode(text),
    filename: `${baseName}.txt`,
  };
};

// ─── Processor Registry ───
export const TOOL_PROCESSORS: Record<string, ToolProcessor> = {
  "merge-pdf": mergeProcessor,
  "split-pdf": splitProcessor,
  "compress-pdf": compressProcessor,
  "pdf-to-jpg": pdfToJpgProcessor,
  "pdf-to-png": pdfToPngProcessor,
  "jpg-to-pdf": imagesToPdfProcessor,
  "page-numbers": pageNumbersProcessor,
  "pdf-to-text": pdfToTextProcessor,
};

// ─── Lazy processors (imported on-demand to avoid SSR deps) ───
const lazyProcessors: Record<string, () => Promise<ToolProcessor>> = {
  "word-to-pdf": async () => (await import("./office-processors")).wordToPdfProcessor,
  "excel-to-pdf": async () => (await import("./office-processors")).excelToPdfProcessor,
  "html-to-pdf": async () => (await import("./office-processors")).htmlToPdfProcessor,
  "markdown-to-pdf": async () => (await import("./office-processors")).markdownToPdfProcessor,
  "heic-to-pdf": async () => (await import("./office-processors")).heicToPdfProcessor,
  "ocr-pdf": async () => (await import("./advanced-processors")).ocrPdfProcessor,
  "pdf-to-word": async () => (await import("./office-processors")).pdfToWordProcessor,
};

/** Check if a tool has a processor implemented (including lazy) */
export function hasProcessor(slug: string): boolean {
  return slug in TOOL_PROCESSORS || slug in lazyProcessors;
}

/** Run the processor for a tool */
export async function runToolProcessor(
  slug: string,
  files: File[],
  onProgress?: (msg: string) => void,
  onProgressPercent?: (percent: number) => void
): Promise<ProcessResult> {
  const processor = TOOL_PROCESSORS[slug];
  if (processor) return processor(files, onProgress, onProgressPercent);

  const lazyLoader = lazyProcessors[slug];
  if (lazyLoader) {
    const p = await lazyLoader();
    return p(files, onProgress, onProgressPercent);
  }

  throw new Error(`Tool "${slug}" is not yet implemented. Stay tuned!`);
}

/** Download the result after processing */
export function downloadResult(result: ProcessResult): void {
  if (result.data && result.filename) {
    downloadBlob(result.data, result.filename);
    return;
  }
  if (result.dataUrl && result.filename) {
    downloadDataUrl(result.dataUrl, result.filename);
    return;
  }
  if (result.files && result.files.length === 1) {
    const f = result.files[0];
    downloadBlob(f.data, f.name, f.mime);
    return;
  }
  if (result.files && result.files.length > 1) {
    // Bundle into ZIP for multi-file downloads
    const baseName = result.filename?.replace(/\.zip$/i, "") || "download";
    createZipAndDownload(result.files, `${baseName}.zip`);
  }
}
