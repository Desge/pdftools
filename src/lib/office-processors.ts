// ─── Office & Web Document Processors ───
// Word→PDF, Excel→PDF, HTML→PDF, Markdown→PDF, EPUB→PDF
// All pure client-side — no server upload.

import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { downloadBlob } from "./pdf-render";
import type { ProcessResult, ToolProcessor } from "./tool-processors";
import DOMPurify from "dompurify";

// ─── Dynamic imports (lazy-loaded, never imported at top level to avoid SSR issues) ───
async function getMammoth() {
  const m = await import("mammoth");
  return m.default;
}
async function getXLSX() {
  return import("xlsx");
}
async function getHtml2Pdf() {
  return import("html2pdf.js");
}

// ─── Word processor ───

/** DOCX → PDF: parse with mammoth, render HTML → PDF via html2pdf.js */
export const wordToPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 Word file.");
  const file = files[0];
  onProgress?.("Parsing Word document...");
  const buf = await file.arrayBuffer();
  const mammoth = await getMammoth();
  const { value: html } = await mammoth.convertToHtml({ arrayBuffer: buf });
  onProgress?.("Converting to PDF...");
  const html2pdf = await getHtml2Pdf();
  const container = document.createElement("div");
  container.innerHTML = DOMPurify.sanitize(html);
  container.style.padding = "40px";
  container.style.fontFamily = "Times New Roman, serif";
  container.style.fontSize = "12pt";
  container.style.lineHeight = "1.5";
  container.style.color = "#000";
  document.body.appendChild(container);
  const pdfBlob: Blob = await html2pdf.default()
    .from(container)
    .set({ margin: [10, 10, 10, 10], filename: file.name.replace(/\.docx?$/i, "") + ".pdf", html2canvas: { scale: 2, useCORS: true } })
    .outputPdf("blob");
  document.body.removeChild(container);
  const arr = await pdfBlob.arrayBuffer();
  const baseName = file.name.replace(/\.docx?$/i, "");
  return {
    message: "Word document converted to PDF.",
    data: new Uint8Array(arr),
    filename: `${baseName}.pdf`,
  };
};

// ─── Excel processor ───

/** XLSX → PDF: parse with SheetJS, render as HTML table → PDF */
export const excelToPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 Excel file.");
  const file = files[0];
  onProgress?.("Parsing spreadsheet...");
  const buf = await file.arrayBuffer();
  const XLSX = await getXLSX();
  const wb = XLSX.read(buf, { type: "array" });
  const sheetName = wb.SheetNames[0];
  const sheet = wb.Sheets[sheetName];
  const html = XLSX.utils.sheet_to_html(sheet, { editable: false });
  onProgress?.("Converting to PDF...");
  const html2pdf = await getHtml2Pdf();
  const container = document.createElement("div");
  container.innerHTML = DOMPurify.sanitize(html);
  container.style.padding = "10px";
  container.style.fontSize = "10pt";
  document.body.appendChild(container);
  const pdfBlob: Blob = await html2pdf.default()
    .from(container)
    .set({ margin: 5, filename: file.name.replace(/\.xlsx?$/i, "") + ".pdf", html2canvas: { scale: 2 }, jsPDF: { orientation: "landscape", unit: "mm", format: "a4" } })
    .outputPdf("blob");
  document.body.removeChild(container);
  const arr = await pdfBlob.arrayBuffer();
  const baseName = file.name.replace(/\.xlsx?$/i, "");
  return {
    message: `Spreadsheet "${sheetName}" converted to PDF.`,
    data: new Uint8Array(arr),
    filename: `${baseName}.pdf`,
  };
};

// ─── HTML processor ───

/** HTML → PDF */
export const htmlToPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 HTML file.");
  const file = files[0];
  onProgress?.("Loading HTML...");
  const text = await file.text();
  onProgress?.("Converting to PDF...");
  const html2pdf = await getHtml2Pdf();
  const container = document.createElement("div");
  container.innerHTML = DOMPurify.sanitize(text);
  container.style.padding = "20px";
  container.style.fontFamily = "system-ui, sans-serif";
  document.body.appendChild(container);
  const pdfBlob: Blob = await html2pdf.default()
    .from(container)
    .set({ margin: 10, filename: file.name.replace(/\.html?$/i, "") + ".pdf", html2canvas: { scale: 2 } })
    .outputPdf("blob");
  document.body.removeChild(container);
  const arr = await pdfBlob.arrayBuffer();
  const baseName = file.name.replace(/\.html?$/i, "");
  return {
    message: "HTML converted to PDF.",
    data: new Uint8Array(arr),
    filename: `${baseName}.pdf`,
  };
};

// ─── Markdown processor ───

/** Markdown → PDF: simple approach — convert to HTML then PDF */
export const markdownToPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 Markdown file.");
  const file = files[0];
  onProgress?.("Processing Markdown...");
  const md = await file.text();

  // Use marked for robust Markdown → HTML conversion
  const { marked } = await import("marked");
  const html = await marked.parse(md);

  onProgress?.("Converting to PDF...");
  const html2pdf = await getHtml2Pdf();
  const container = document.createElement("div");
  container.innerHTML = DOMPurify.sanitize(html);
  container.style.padding = "30px";
  container.style.fontFamily = "system-ui, -apple-system, sans-serif";
  container.style.fontSize = "11pt";
  container.style.lineHeight = "1.6";
  container.style.color = "#1a1a1a";
  container.style.maxWidth = "700px";
  container.style.margin = "0 auto";
  document.body.appendChild(container);
  const pdfBlob: Blob = await html2pdf.default()
    .from(container)
    .set({ margin: 15, filename: file.name.replace(/\.md$/i, "") + ".pdf", html2canvas: { scale: 2 } })
    .outputPdf("blob");
  document.body.removeChild(container);
  const arr = await pdfBlob.arrayBuffer();
  const baseName = file.name.replace(/\.md$/i, "");
  return {
    message: "Markdown converted to PDF.",
    data: new Uint8Array(arr),
    filename: `${baseName}.pdf`,
  };
};

// ─── HEIC processor ───

/** HEIC/HEIF → PDF: decode HEIC to PNG via heic2any, embed in PDF */
export const heicToPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length === 0) throw new Error("Please select at least 1 HEIC/HEIF file.");
  onProgress?.(`Decoding ${files.length} HEIC file(s)...`);

  const { default: heic2any } = await import("heic2any");
  const doc = await PDFDocument.create();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    onProgress?.(`Converting ${file.name} (${i + 1}/${files.length})...`);

    // heic2any converts HEIC → PNG blob
    const pngBlob = await heic2any({ blob: file, toType: "image/png" });
    const singleBlob = Array.isArray(pngBlob) ? pngBlob[0] : pngBlob;
    const arrBuf = await singleBlob.arrayBuffer();

    const image = await doc.embedPng(arrBuf);
    const page = doc.addPage([image.width, image.height]);
    page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
  }

  const result = await doc.save();
  return {
    message: `Converted ${files.length} HEIC file(s) to a single PDF.`,
    data: result,
    filename: files.length === 1
      ? files[0].name.replace(/\.(heic|heif)$/i, "") + ".pdf"
      : "heic-images.pdf",
  };
};

// ─── EPUB processor (basic, best-effort) ───

/** EPUB → PDF: renders EPUB sections to Canvas → embeds in PDF */
export const epubToPdfProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 EPUB file.");
  const file = files[0];
  onProgress?.("Parsing EPUB...");

  // EPUB is a ZIP of HTML files. We use epubjs to render content.
  // epubjs needs DOM, so we create a hidden iframe.
  const epubUrl = URL.createObjectURL(file);
  const iframe = document.createElement("iframe");
  iframe.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:800px;height:1000px;";
  iframe.sandbox.add("allow-same-origin", "allow-scripts");
  document.body.appendChild(iframe);

  try {
    const { default: ePub } = await import("epubjs");
    // epubjs expects the iframe document to be ready
    await new Promise((r) => { iframe.onload = r; iframe.src = "about:blank"; });

    const book = ePub(epubUrl);
    const rendition = book.renderTo(iframe.contentDocument!.body, {
      width: 800,
      height: 1000,
    });

    await rendition.display();
    onProgress?.("Rendering EPUB pages...");

    // Get spine items and render each to Canvas then PDF
    const spine = book.spine as any;
    const doc = await PDFDocument.create();

    // epubjs spine is accessible via book.spine
    const sections = book.spine as unknown as { href: string }[];
    if (!sections || sections.length === 0) {
      throw new Error("Could not read EPUB contents.");
    }

    const maxPages = Math.min(sections.length, 20); // Limit to 20 pages for MVP

    for (let i = 0; i < maxPages; i++) {
      onProgress?.(`Rendering page ${i + 1}/${maxPages}...`);
      await rendition.display(sections[i].href);
      // Wait for render
      await new Promise((r) => setTimeout(r, 500));

      // Screen-capture the iframe
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(iframe.contentDocument!.body, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
      });

      const pngDataUrl = canvas.toDataURL("image/png");
      const pngBytes = Uint8Array.from(atob(pngDataUrl.split(",")[1]), (c) => c.charCodeAt(0));
      const image = await doc.embedPng(pngBytes);
      const page = doc.addPage([image.width, image.height]);
      page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
    }

    const result = await doc.save();
    const baseName = file.name.replace(/\.epub$/i, "");
    return {
      message: `EPUB converted to PDF (${maxPages} section${maxPages !== 1 ? "s" : ""}).`,
      data: result,
      filename: `${baseName}.pdf`,
    };
  } finally {
    document.body.removeChild(iframe);
    URL.revokeObjectURL(epubUrl);
  }
};

// ─── PDF → DOCX processor ───

/** PDF → DOCX: extract text via pdfjs-dist and generate a Word document via docx */
export const pdfToWordProcessor: ToolProcessor = async (files, onProgress) => {
  if (files.length !== 1) throw new Error("Please select exactly 1 PDF file.");
  const file = files[0];
  onProgress?.("Loading PDF...");
  const buf = await file.arrayBuffer();

  onProgress?.("Extracting text from PDF...");
  const { default: pdfjsLib } = await import("pdfjs-dist");
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  const pageTexts: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    onProgress?.(`Reading page ${i}/${pdf.numPages}...`);
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ");
    pageTexts.push(pageText);
  }

  onProgress?.("Building Word document...");
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, PageBreak } = await import("docx");

  const children: import("docx").Paragraph[] = [];

  for (let i = 0; i < pageTexts.length; i++) {
    const text = pageTexts[i].trim();

    // Page heading
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: i > 0 ? 400 : 0, after: 200 },
        children: [new TextRun({ text: `Page ${i + 1}`, bold: true, size: 28 })],
      })
    );

    // Page content
    if (text) {
      children.push(
        new Paragraph({
          spacing: { after: 400 },
          children: [new TextRun({ text, size: 24 })],
        })
      );
    } else {
      children.push(
        new Paragraph({
          spacing: { after: 400 },
          children: [new TextRun({ text: "[No extractable text on this page]", italics: true, color: "888888", size: 24 })],
        })
      );
    }

    // Page break (except after last page)
    if (i < pageTexts.length - 1) {
      children.push(new Paragraph({ children: [new PageBreak()] }));
    }
  }

  const doc = new Document({
    sections: [{
      properties: {},
      children,
    }],
  });

  onProgress?.("Generating DOCX file...");
  const blob = await Packer.toBlob(doc);
  const arr = await blob.arrayBuffer();

  const baseName = file.name.replace(/\.pdf$/i, "");
  return {
    message: `PDF converted to Word document (${pageTexts.length} page${pageTexts.length !== 1 ? "s" : ""}).`,
    data: new Uint8Array(arr),
    filename: `${baseName}.docx`,
  };
};

// ─── Markdown → PDF implemented above using marked lib ───

