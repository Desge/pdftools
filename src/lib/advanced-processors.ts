// ─── Advanced Processors: OCR ───
import { getPdfjs } from "./pdfjs-singleton";
import type { ToolProcessor } from "./tool-processors";

// ======================================================================
// OCR PDF — Extract text from scanned PDFs via tesseract.js
// ======================================================================

export const ocrPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file for OCR.");
  const file = files[0];
  onProgress?.("Initializing OCR engine...");

  // Dynamically import tesseract (heavy dep, ~15MB)
  const { createWorker } = await import("tesseract.js");

  // Also need pdfjs-dist to render pages
  const pdfjsLib = await getPdfjs();

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  const pageCount = pdf.numPages;

  // Create OCR worker for English
  onProgress?.("Downloading English language data (first time may take a moment)...");
  const worker = await createWorker("eng", 1, {
    logger: (m: { status: string; progress?: number }) => {
      if (m.status === "recognizing text") {
        onProgress?.(`OCR: ${Math.round((m.progress || 0) * 100)}%`);
      } else if (m.status === "loading tesseract core" || m.status === "initializing tesseract") {
        onProgress?.("Loading OCR engine...");
      }
    },
  });

  const allText: string[] = [];

  for (let i = 1; i <= pageCount; i++) {
    onProgress?.(`Processing page ${i}/${pageCount}...`);
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 2.0 });

    // Render page to canvas
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d")!;
    await (page.render as any)({ canvasContext: ctx, viewport }).promise;

    // Run OCR on the rendered image
    const { data } = await worker.recognize(canvas);

    allText.push(`--- Page ${i} ---\n${data.text.trim()}`);
  }

  await worker.terminate();

  const fullText = allText.join("\n\n");
  const encoder = new TextEncoder();
  const baseName = file.name.replace(/\.pdf$/i, "");

  return {
    message: `OCR complete! Recognized text from ${pageCount} page(s) — ${fullText.length.toLocaleString()} characters.`,
    data: encoder.encode(fullText),
    filename: `${baseName}_ocr.txt`,
  };
};
