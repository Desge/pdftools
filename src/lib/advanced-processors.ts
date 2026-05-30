// ─── Advanced Processors: Edit / Organize / Crop / OCR ───
import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";
import type { ToolProcessor } from "./tool-processors";

// ======================================================================
// 1. EDIT PDF — Add text, images, shapes, freehand annotations
// ======================================================================

export const editPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to edit.");
  const file = files[0];
  onProgress?.("Loading PDF...");
  const buffer = await file.arrayBuffer();
  const doc = await PDFDocument.load(buffer);
  const pages = doc.getPages();
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);

  // Apply edits to every page
  // In a full UI this would be interactive — here we demo all capabilities
  for (const page of pages) {
    const { width, height } = page.getSize();

    // 1. Add text at top-right corner (demo)
    page.drawText("PDFlikes Edit", {
      x: width - 160,
      y: height - 25,
      size: 12,
      font: helveticaBold,
      color: rgb(0.49, 0.23, 0.93), // purple
      opacity: 0.7,
    });

    // 2. Add a rectangle border (demo annotation)
    page.drawRectangle({
      x: 10,
      y: 10,
      width: width - 20,
      height: height - 20,
      borderColor: rgb(0.49, 0.23, 0.93),
      borderWidth: 1,
      opacity: 0.3,
    });

    // 3. Add a line separator at bottom (demo)
    page.drawLine({
      start: { x: 20, y: 40 },
      end: { x: width - 20, y: 40 },
      color: rgb(0.8, 0.8, 0.8),
      thickness: 0.5,
    });

    // 4. Add page number watermark at bottom center
    const pageIdx = pages.indexOf(page) + 1;
    page.drawText(`— ${pageIdx} / ${pages.length} —`, {
      x: width / 2 - 40,
      y: 20,
      size: 8,
      font: helvetica,
      color: rgb(0.7, 0.7, 0.7),
    });
  }

  const result = await doc.save();
  const baseName = file.name.replace(/\.pdf$/i, "");
  return {
    message: `PDF edited (demo: added text, border, page numbers to all pages). Interactive editing coming in next version.`,
    data: result,
    filename: `${baseName}_edited.pdf`,
  };
};


// ======================================================================
// 2. ORGANIZE PDF — Delete/add/reorder pages with thumbnail preview
// ======================================================================

export const organizePdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to organize.");
  const file = files[0];
  onProgress?.("Loading PDF...");
  const buffer = await file.arrayBuffer();
  const doc = await PDFDocument.load(buffer);
  const pageCount = doc.getPageCount();

  // For MVP: generate a "reorganized" version by moving last page to front
  // Full drag-drop UI will be a client-side component upgrade later
  onProgress?.(`Reorganizing ${pageCount} pages...`);

  // Demo: reverse page order
  const pages = doc.getPages();
  const newDoc = await PDFDocument.create();

  // Remove all pages in reverse and add to new doc (effectively reverses order)
  const copiedPages = await newDoc.copyPages(doc, doc.getPageIndices());
  // Add in reverse order
  for (let i = copiedPages.length - 1; i >= 0; i--) {
    newDoc.addPage(copiedPages[i]);
  }

  const result = await newDoc.save();
  const baseName = file.name.replace(/\.pdf$/i, "");
  return {
    message: `Reorganized ${pageCount} pages (reversed order). Drag-drop reorder UI coming in next version.`,
    data: result,
    filename: `${baseName}_organized.pdf`,
  };
};


// ======================================================================
// 3. CROP PDF — Crop margins or specific regions
// ======================================================================

export const cropPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file to crop.");
  const file = files[0];
  onProgress?.("Loading PDF...");
  const buffer = await file.arrayBuffer();
  const doc = await PDFDocument.load(buffer);
  const pages = doc.getPages();

  // For MVP: auto-crop 10% from all sides (margin trim)
  // Full interactive crop UI with visual selector coming later
  const trimRatio = 0.05; // 5% off each side
  onProgress?.(`Trimming margins from ${pages.length} pages...`);

  for (const page of pages) {
    const { width, height } = page.getSize();
    const marginX = width * trimRatio;
    const marginY = height * trimRatio;

    // Set crop box (the visible area)
    page.setCropBox(marginX, marginY, width - marginX * 2, height - marginY * 2);
  }

  const result = await doc.save();
  const baseName = file.name.replace(/\.pdf$/i, "");
  return {
    message: `Cropped ${pages.length} pages (5% margin removed from all sides). Visual crop tool coming in next version.`,
    data: result,
    filename: `${baseName}_cropped.pdf`,
  };
};


// ======================================================================
// 4. OCR PDF — Extract text from scanned PDFs via tesseract.js
// ======================================================================

export const ocrPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file for OCR.");
  const file = files[0];
  onProgress?.("Initializing OCR engine...");

  // Dynamically import tesseract (heavy dep, ~15MB)
  const { createWorker } = await import("tesseract.js");

  // Also need pdfjs-dist to render pages
  const pdfjsLib = await import("pdfjs-dist");
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

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
