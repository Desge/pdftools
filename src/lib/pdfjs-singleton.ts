// ─── PDF.js Singleton — Lazy-loaded, shared across all processors ───
// Avoids 5 separate imports and ensures worker is configured once.

let pdfjsLib: typeof import("pdfjs-dist") | null = null;

export async function getPdfjs(): Promise<typeof import("pdfjs-dist")> {
  if (pdfjsLib) return pdfjsLib;
  pdfjsLib = await import("pdfjs-dist");
  pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  return pdfjsLib;
}
