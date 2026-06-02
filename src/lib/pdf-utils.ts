// ─── PDF Processing Utilities ───
// Client-side wrappers for pdf-lib operations

import { PDFDocument, rgb, degrees } from "pdf-lib";

/** Merge multiple PDF files into a single PDF */
export async function mergePDFs(files: ArrayBuffer[]): Promise<Uint8Array> {
  const merged = await PDFDocument.create();

  for (const buffer of files) {
    const pdf = await PDFDocument.load(buffer);
    const indices = pdf.getPageIndices();
    const copiedPages = await merged.copyPages(pdf, indices);
    copiedPages.forEach((page) => merged.addPage(page));
  }

  return merged.save();
}

/** Split a PDF into individual page files */
export async function splitPDF(buffer: ArrayBuffer): Promise<Uint8Array[]> {
  const source = await PDFDocument.load(buffer);
  const pages: Uint8Array[] = [];

  for (let i = 0; i < source.getPageCount(); i++) {
    const doc = await PDFDocument.create();
    const [page] = await doc.copyPages(source, [i]);
    doc.addPage(page);
    pages.push(await doc.save());
  }

  return pages;
}

/** Rotate all pages of a PDF */
export async function rotatePDF(
  buffer: ArrayBuffer,
  rotation: 90 | 180 | 270
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(buffer);
  const pages = doc.getPages();
  for (const page of pages) {
    page.setRotation(degrees(page.getRotation().angle + rotation));
  }
  return doc.save();
}

/** Convert images (JPG/PNG) to a single PDF */
export async function imagesToPDF(
  images: ArrayBuffer[],
  detectFormat = false
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();

  for (const buffer of images) {
    let image;

    if (detectFormat) {
      const arr = new Uint8Array(buffer);
      const isPNG = arr[0] === 0x89 && arr[1] === 0x50;
      image = isPNG ? await doc.embedPng(buffer) : await doc.embedJpg(buffer);
    } else {
      // Try JPG first, fallback to PNG
      try {
        image = await doc.embedJpg(buffer);
      } catch {
        image = await doc.embedPng(buffer);
      }
    }

    const page = doc.addPage([image.width, image.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });
  }

  return doc.save();
}

/** Add a text watermark to all pages of a PDF */
export async function addTextWatermark(
  buffer: ArrayBuffer,
  text: string,
  opacity = 0.3,
  fontSize = 50,
  fontFamily: "helvetica" | "times" | "courier" = "helvetica",
  rotation = 45,
  position: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "tile" = "center",
  colorHex = "#808080"
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(buffer);
  const pages = doc.getPages();

  // Embed font based on family
  const { rgb, StandardFonts } = await import("pdf-lib");
  let font;
  if (fontFamily === "times") {
    font = await doc.embedFont(StandardFonts.TimesRoman);
  } else if (fontFamily === "courier") {
    font = await doc.embedFont(StandardFonts.Courier);
  } else {
    font = await doc.embedFont(StandardFonts.Helvetica);
  }

  // Parse hex color
  const r = parseInt(colorHex.slice(1, 3), 16) / 255;
  const g = parseInt(colorHex.slice(3, 5), 16) / 255;
  const b = parseInt(colorHex.slice(5, 7), 16) / 255;

  for (const page of pages) {
    const { width, height } = page.getSize();
    const textWidth = font.widthOfTextAtSize(text, fontSize);

    if (position === "tile") {
      // Tile watermark across page
      const spacingX = textWidth + 60;
      const spacingY = fontSize * 3;
      for (let x = 0; x < width; x += spacingX) {
        for (let y = 0; y < height; y += spacingY) {
          page.drawText(text, {
            x,
            y,
            size: fontSize,
            font,
            opacity,
            rotate: degrees(rotation),
            color: rgb(r, g, b),
          });
        }
      }
    } else {
      // Single position
      let x: number, y: number;
      switch (position) {
        case "top-left":
          x = 40;
          y = height - 60;
          break;
        case "top-right":
          x = width - textWidth - 40;
          y = height - 60;
          break;
        case "bottom-left":
          x = 40;
          y = 40;
          break;
        case "bottom-right":
          x = width - textWidth - 40;
          y = 40;
          break;
        case "center":
        default:
          x = width / 2 - textWidth / 2;
          y = height / 2;
          break;
      }

      page.drawText(text, {
        x,
        y,
        size: fontSize,
        font,
        opacity,
        rotate: degrees(rotation),
        color: rgb(r, g, b),
      });
    }
  }

  return doc.save();
}

/** Add page numbers to a PDF */
export async function addPageNumbers(
  buffer: ArrayBuffer,
  options?: {
    position?: "bottom-center" | "bottom-right" | "top-center";
    startAt?: number;
  }
): Promise<Uint8Array> {
  const { position = "bottom-center", startAt = 1 } = options ?? {};
  const doc = await PDFDocument.load(buffer);
  const pages = doc.getPages();

  pages.forEach((page, i) => {
    const { width } = page.getSize();
    const num = `${startAt + i}`;
    const x = position === "bottom-right" ? width - 50 : width / 2 - 10;
    const y = position?.startsWith("top") ? page.getSize().height - 30 : 30;

    page.drawText(num, { x, y, size: 10, color: rgb(0, 0, 0) });
  });

  return doc.save();
}

// ─── Advanced Split Functions ───

/** Split PDF by ranges (e.g., "1-3,4-6,7-10") — each range becomes a separate PDF */
export async function splitPDFByRange(
  buffer: ArrayBuffer,
  ranges: { start: number; end: number }[]
): Promise<Uint8Array[]> {
  const source = await PDFDocument.load(buffer);
  const totalPages = source.getPageCount();
  const result: Uint8Array[] = [];

  for (const range of ranges) {
    if (range.start < 1 || range.end > totalPages || range.start > range.end) {
      throw new Error(
        `Invalid range: ${range.start}-${range.end}. PDF has ${totalPages} pages.`
      );
    }
    const doc = await PDFDocument.create();
    const indices: number[] = [];
    for (let i = range.start - 1; i < range.end; i++) {
      indices.push(i);
    }
    const pages = await doc.copyPages(source, indices);
    pages.forEach((page) => doc.addPage(page));
    result.push(await doc.save());
  }

  return result;
}

/** Extract specific pages by number into a single PDF */
export async function extractPDFPages(
  buffer: ArrayBuffer,
  pageNumbers: number[]
): Promise<Uint8Array> {
  const source = await PDFDocument.load(buffer);
  const totalPages = source.getPageCount();
  const doc = await PDFDocument.create();

  const validIndices = pageNumbers
    .filter((p) => p >= 1 && p <= totalPages)
    .map((p) => p - 1);

  if (validIndices.length === 0) {
    throw new Error(`No valid page numbers. PDF has ${totalPages} pages.`);
  }

  const pages = await doc.copyPages(source, validIndices);
  pages.forEach((page) => doc.addPage(page));
  return doc.save();
}

/** Split a PDF into chunks of N pages each */
export async function splitPDFEveryN(
  buffer: ArrayBuffer,
  n: number
): Promise<Uint8Array[]> {
  if (n < 1) throw new Error("N must be at least 1.");
  const source = await PDFDocument.load(buffer);
  const totalPages = source.getPageCount();
  const result: Uint8Array[] = [];

  for (let start = 0; start < totalPages; start += n) {
    const end = Math.min(start + n, totalPages);
    const doc = await PDFDocument.create();
    const indices: number[] = [];
    for (let i = start; i < end; i++) {
      indices.push(i);
    }
    const pages = await doc.copyPages(source, indices);
    pages.forEach((page) => doc.addPage(page));
    result.push(await doc.save());
  }

  return result;
}
