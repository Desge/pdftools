// ─── PDF Processing Worker ───
// This file runs in a Web Worker context via pdfjs-dist
// It offloads heavy PDF rendering from the main UI thread

import * as pdfjsLib from "pdfjs-dist";

// Configure the worker to use the bundled version
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

/**
 * Render a PDF page to an image data URL at the given scale.
 */
async function renderPage(
  pdf: pdfjsLib.PDFDocumentProxy,
  pageNum: number,
  scale: number
): Promise<string> {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale });

  // Use OffscreenCanvas (available in modern browsers and Workers)
  const canvas = new OffscreenCanvas(viewport.width, viewport.height);
  const ctx = canvas.getContext("2d")!;

  await (page.render as (params: Record<string, unknown>) => { promise: Promise<unknown> })({
    canvasContext: ctx,
    viewport,
  }).promise;

  const blob = await canvas.convertToBlob({ type: "image/png" });
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

/**
 * Extract text content from a PDF.
 */
async function extractText(pdf: pdfjsLib.PDFDocumentProxy): Promise<{
  text: string;
  pages: number;
}> {
  const texts: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    texts.push(pageText);
  }

  return {
    text: texts.join("\n\n"),
    pages: pdf.numPages,
  };
}

// ─── Worker Message Handler ───
type WorkerMessage =
  | { type: "render"; data: ArrayBuffer; pageNum: number; scale: number; id: string }
  | { type: "extractText"; data: ArrayBuffer; id: string };

type WorkerResponse =
  | { type: "renderResult"; imageDataUrl: string; id: string; pageNum: number }
  | { type: "textResult"; text: string; pages: number; id: string }
  | { type: "error"; message: string; id: string };

self.onmessage = async (e: MessageEvent<WorkerMessage>) => {
  const msg = e.data;

  try {
    if (msg.type === "render") {
      const pdf = await pdfjsLib.getDocument({ data: msg.data }).promise;
      const imageDataUrl = await renderPage(pdf, msg.pageNum, msg.scale);
      self.postMessage({
        type: "renderResult",
        imageDataUrl,
        id: msg.id,
        pageNum: msg.pageNum,
      } satisfies WorkerResponse);
    }

    if (msg.type === "extractText") {
      const pdf = await pdfjsLib.getDocument({ data: msg.data }).promise;
      const result = await extractText(pdf);
      self.postMessage({
        type: "textResult",
        text: result.text,
        pages: result.pages,
        id: msg.id,
      } satisfies WorkerResponse);
    }
  } catch (err) {
    self.postMessage({
      type: "error",
      message: err instanceof Error ? err.message : "Unknown error",
      id: msg.id,
    } satisfies WorkerResponse);
  }
};

export {};
