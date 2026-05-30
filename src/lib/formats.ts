// ─── Format Definitions & Conversion Matrix ───
import type { FormatDef, ConversionPair } from "./types";

// ─── All supported formats ───
export const FORMATS: FormatDef[] = [
  // Documents
  { ext: "pdf", name: "PDF", mime: "application/pdf", category: "document" },
  { ext: "txt", name: "Plain Text", mime: "text/plain", category: "document" },
  { ext: "rtf", name: "Rich Text", mime: "application/rtf", category: "document" },
  { ext: "odt", name: "OpenDocument", mime: "application/vnd.oasis.opendocument.text", category: "document" },

  // Office
  { ext: "docx", name: "Word", mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", category: "office" },
  { ext: "xlsx", name: "Excel", mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", category: "office" },
  { ext: "pptx", name: "PowerPoint", mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation", category: "office" },

  // Web
  { ext: "html", name: "HTML", mime: "text/html", category: "web" },
  { ext: "md", name: "Markdown", mime: "text/markdown", category: "web" },
  { ext: "xml", name: "XML", mime: "application/xml", category: "data" },
  { ext: "json", name: "JSON", mime: "application/json", category: "data" },
  { ext: "csv", name: "CSV", mime: "text/csv", category: "data" },
  { ext: "latex", name: "LaTeX", mime: "application/x-latex", category: "document" },

  // Images
  { ext: "jpg", name: "JPEG", mime: "image/jpeg", category: "image" },
  { ext: "png", name: "PNG", mime: "image/png", category: "image" },
  { ext: "webp", name: "WebP", mime: "image/webp", category: "image" },
  { ext: "avif", name: "AVIF", mime: "image/avif", category: "image" },
  { ext: "bmp", name: "BMP", mime: "image/bmp", category: "image" },
  { ext: "gif", name: "GIF", mime: "image/gif", category: "image" },
  { ext: "tiff", name: "TIFF", mime: "image/tiff", category: "image" },
  { ext: "heic", name: "HEIC", mime: "image/heic", category: "image" },
  { ext: "svg", name: "SVG", mime: "image/svg+xml", category: "vector" },
  { ext: "ico", name: "ICO", mime: "image/x-icon", category: "image" },

  // Ebooks
  { ext: "epub", name: "EPUB", mime: "application/epub+zip", category: "ebook" },
  { ext: "mobi", name: "MOBI", mime: "application/x-mobipocket-ebook", category: "ebook" },
  { ext: "azw3", name: "AZW3", mime: "application/vnd.amazon.ebook", category: "ebook" },
  { ext: "fb2", name: "FB2", mime: "application/x-fictionbook+xml", category: "ebook" },
];

// ─── Format lookup helpers ───
const formatMap = new Map(FORMATS.map((f) => [f.ext, f]));
export const getFormat = (ext: string): FormatDef | undefined => formatMap.get(ext);

// ─── Quality rating for conversion pairs ───
// 5 = perfect client-side, 4 = good, 3 = acceptable, 2 = poor, 1 = server needed
function rateQuality(from: FormatDef, to: FormatDef): number {
  // PDF → image = perfect
  if (from.ext === "pdf" && to.category === "image") return 5;
  // Image → PDF = perfect
  if (from.category === "image" && to.ext === "pdf") return 5;
  // PDF → PDF = identity
  if (from.ext === "pdf" && to.ext === "pdf") return 5;
  // Image → image = good (via Canvas)
  if (from.category === "image" && to.category === "image") return 4;
  // HTML/MD → PDF = good
  if ((from.ext === "html" || from.ext === "md") && to.ext === "pdf") return 4;
  // DOCX → PDF = acceptable (mammoth path)
  if (from.ext === "docx" && to.ext === "pdf") return 3;
  // XLSX → PDF = acceptable
  if (from.ext === "xlsx" && to.ext === "pdf") return 3;
  // PDF → text-based = ok
  if (from.ext === "pdf" && (to.ext === "txt" || to.ext === "html" || to.ext === "md")) return 3;
  // Text → PDF = good
  if ((from.ext === "txt" || from.ext === "csv" || from.ext === "json" || from.ext === "xml") && to.ext === "pdf") return 4;
  // Ebook conversions = need server
  if (from.category === "ebook" || to.category === "ebook") return 1;
  // Office → Office = need server
  if (from.category === "office" && to.category === "office") return 1;
  if (from.category === "office" && to.category === "document" && to.ext !== "pdf") return 1;
  // Data ↔ Data = good
  if (from.category === "data" && to.category === "data") return 4;
  // Default
  return 2;
}

// ─── Generate all valid PDF-centric conversion pairs ───
export function generatePDFConversions(): ConversionPair[] {
  const pdfFormat = FORMATS.find((f) => f.ext === "pdf")!;
  const others = FORMATS.filter((f) => f.ext !== "pdf");
  const pairs: ConversionPair[] = [];

  for (const other of others) {
    // pdf → other
    const toSlug = `pdf-to-${other.ext}`;
    const toQuality = rateQuality(pdfFormat, other);
    pairs.push({
      slug: toSlug,
      from: pdfFormat,
      to: other,
      clientSide: toQuality >= 3,
      quality: toQuality,
    });

    // other → pdf
    const fromSlug = `${other.ext}-to-pdf`;
    const fromQuality = rateQuality(other, pdfFormat);
    pairs.push({
      slug: fromSlug,
      from: other,
      to: pdfFormat,
      clientSide: fromQuality >= 3,
      quality: fromQuality,
    });
  }

  return pairs;
}

// ─── Generate cross-format (non-PDF) conversion pairs ───
export function generateCrossConversions(): ConversionPair[] {
  const nonPdfFormats = FORMATS.filter((f) => f.ext !== "pdf");
  const pairs: ConversionPair[] = [];

  for (let i = 0; i < nonPdfFormats.length; i++) {
    for (let j = 0; j < nonPdfFormats.length; j++) {
      if (i === j) continue;
      const from = nonPdfFormats[i];
      const to = nonPdfFormats[j];
      const quality = rateQuality(from, to);
      // Only include pairs that are at least partially feasible
      if (quality >= 2 || from.category === to.category) {
        pairs.push({
          slug: `${from.ext}-to-${to.ext}`,
          from,
          to,
          clientSide: quality >= 3,
          quality,
        });
      }
    }
  }

  return pairs;
}

// ─── All conversion pairs ───
export const ALL_CONVERSIONS: ConversionPair[] = [
  ...generatePDFConversions(),
  ...generateCrossConversions(),
];

// ─── Size presets ───
export const SIZE_PRESETS: Record<string, { width: number; height: number }> = {
  a4: { width: 595, height: 842 },
  letter: { width: 612, height: 792 },
  legal: { width: 612, height: 1008 },
  a3: { width: 842, height: 1191 },
  a5: { width: 420, height: 595 },
};
