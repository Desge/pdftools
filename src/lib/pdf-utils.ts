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

/** Extract specific pages from a PDF */
export async function extractPages(
  buffer: ArrayBuffer,
  pageIndices: number[]
): Promise<Uint8Array> {
  const source = await PDFDocument.load(buffer);
  const doc = await PDFDocument.create();
  const pages = await doc.copyPages(source, pageIndices);
  pages.forEach((page) => doc.addPage(page));
  return doc.save();
}

/** Delete pages from a PDF (removes by index, sorted descending) */
export async function deletePages(
  buffer: ArrayBuffer,
  pageIndices: number[]
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(buffer);
  const sorted = [...pageIndices].sort((a, b) => b - a);
  for (const idx of sorted) {
    doc.removePage(idx);
  }
  return doc.save();
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
  opacity = 0.3
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(buffer);
  const pages = doc.getPages();

  for (const page of pages) {
    const { width, height } = page.getSize();
    page.drawText(text, {
      x: width / 2 - 100,
      y: height / 2,
      size: 50,
      opacity,
      rotate: degrees(45),
      color: rgb(0.5, 0.5, 0.5),
    });
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

/** Read PDF metadata */
export async function readMetadata(buffer: ArrayBuffer) {
  const doc = await PDFDocument.load(buffer);
  return {
    title: doc.getTitle(),
    author: doc.getAuthor(),
    subject: doc.getSubject(),
    keywords: doc.getKeywords(),
    creator: doc.getCreator(),
    producer: doc.getProducer(),
    pageCount: doc.getPageCount(),
  };
}

/** Set PDF metadata */
export async function setMetadata(
  buffer: ArrayBuffer,
  meta: {
    title?: string;
    author?: string;
    subject?: string;
    keywords?: string[];
    creator?: string;
  }
): Promise<Uint8Array> {
  const doc = await PDFDocument.load(buffer);

  if (meta.title) doc.setTitle(meta.title);
  if (meta.author) doc.setAuthor(meta.author);
  if (meta.subject) doc.setSubject(meta.subject);
  if (meta.keywords) doc.setKeywords(meta.keywords);
  if (meta.creator) doc.setCreator(meta.creator);

  return doc.save();
}
