// ─── PDF Render Utilities (pdfjs-dist based) ───
// Handles: compress PDF, PDF→image, text extraction
// Uses pdfjs-dist via lazy singleton (see pdfjs-singleton.ts).

import { getPdfjs } from "./pdfjs-singleton";
import type * as PdfjsType from "pdfjs-dist";
import { PDFDocument } from "pdf-lib";

interface RenderOptions {
  scale?: number; // default 2.0 for good quality
  format?: "image/jpeg" | "image/png" | "image/webp";
  quality?: number; // 0-1, only for jpeg/webp
}

/**
 * Render a single PDF page to a Canvas → return data URL.
 */
async function renderPageToDataUrl(
  page: PdfjsType.PDFPageProxy,
  opts: RenderOptions = {}
): Promise<string> {
  const { scale = 2.0, format = "image/jpeg", quality = 0.85 } = opts;
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement("canvas");
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const ctx = canvas.getContext("2d")!;

  await page.render({ canvasContext: ctx, viewport } as any).promise;

  return canvas.toDataURL(format, quality);
}

/**
 * Convert a data URL to an ArrayBuffer (for embedding in pdf-lib).
 */
function dataUrlToArrayBuffer(dataUrl: string): ArrayBuffer {
  const [header, b64] = dataUrl.split(",");
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Compress a PDF by re-rendering each page through Canvas as JPEG/WebP.
 * Reduces file size significantly (50-90%) but rasterizes content (text → image).
 */
export async function compressPDF(
  pdfBuffer: ArrayBuffer,
  opts: { quality?: number; format?: "image/jpeg" | "image/webp"; scale?: number } = {}
): Promise<Uint8Array> {
  const pdfjsLib = await getPdfjs();
  const { quality = 0.45, format = "image/jpeg", scale = 2.0 } = opts;
  const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  const newDoc = await PDFDocument.create();

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const dataUrl = await renderPageToDataUrl(page, { scale, format, quality });
    const imgBuffer = dataUrlToArrayBuffer(dataUrl);
    const image = format === "image/jpeg"
      ? await newDoc.embedJpg(imgBuffer)
      : await newDoc.embedPng(imgBuffer);
    const newPage = newDoc.addPage([image.width, image.height]);
    newPage.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  }

  return newDoc.save();
}

/**
 * Convert PDF pages to JPG images. Returns one data URL per page.
 */
export async function pdfToJPG(
  pdfBuffer: ArrayBuffer,
  opts: { scale?: number; quality?: number } = {}
): Promise<{ dataUrl: string; pageNum: number; pages: number }[]> {
  const pdfjsLib = await getPdfjs();
  const { scale = 2.0, quality = 0.9 } = opts;
  const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  const results: { dataUrl: string; pageNum: number; pages: number }[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const dataUrl = await renderPageToDataUrl(page, {
      scale,
      format: "image/jpeg",
      quality,
    });
    results.push({ dataUrl, pageNum: i, pages: pdf.numPages });
  }

  return results;
}

/**
 * Convert PDF pages to PNG images (lossless). Returns one data URL per page.
 */
export async function pdfToPNG(
  pdfBuffer: ArrayBuffer,
  opts: { scale?: number } = {}
): Promise<{ dataUrl: string; pageNum: number; pages: number }[]> {
  const pdfjsLib = await getPdfjs();
  const { scale = 2.0 } = opts;
  const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  const results: { dataUrl: string; pageNum: number; pages: number }[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const dataUrl = await renderPageToDataUrl(page, {
      scale,
      format: "image/png",
    });
    results.push({ dataUrl, pageNum: i, pages: pdf.numPages });
  }

  return results;
}

/**
 * Extract text from a PDF.
 */
export async function extractText(pdfBuffer: ArrayBuffer): Promise<string> {
  const pdfjsLib = await getPdfjs();
  const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  const texts: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    texts.push(pageText);
  }

  return texts.join("\n\n--- Page Break ---\n\n");
}

/**
 * Get PDF page count (quick, no rendering).
 */
export async function getPageCount(pdfBuffer: ArrayBuffer): Promise<number> {
  const pdfjsLib = await getPdfjs();
  const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  return pdf.numPages;
}

// ─── Download helper ───
export function downloadBlob(
  bytes: Uint8Array | Blob,
  filename: string,
  mimeType = "application/pdf"
): void {
  const blob = bytes instanceof Blob
    ? bytes
    : new Blob([bytes as unknown as BlobPart], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadDataUrl(dataUrl: string, filename: string): void {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
