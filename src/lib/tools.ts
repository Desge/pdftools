// ─── Tools Registry — THE single source of truth ───
// Adding a tool here = auto-generated route, SEO metadata, sitemap entry, homepage card
import type { ToolMeta } from "./types";

export const TOOLS: ToolMeta[] = [
  // ── Organize PDF ──
  {
    slug: "merge-pdf",
    title: "Merge PDF",
    description: "Combine PDFs in the order you want with the easiest PDF merger available.",
    longDescription: "Merge multiple PDF files into a single document. Simply upload your PDFs, arrange them in the desired order, and download the merged result. All processing happens locally in your browser — your files never leave your device.",
    keywords: ["merge pdf", "combine pdf", "pdf merger", "merge pdf files", "combine pdfs online"],
    category: "organize",
    icon: "🔗",
  },
  {
    slug: "split-pdf",
    title: "Split PDF",
    description: "Separate one page or a whole set for easy conversion into independent PDF files.",
    longDescription: "Split a PDF document into individual pages or extract specific page ranges. Choose to split by page, by range, or extract every page as a separate file. 100% browser-based — no upload required.",
    keywords: ["split pdf", "extract pdf pages", "pdf splitter", "split pdf online"],
    category: "organize",
    icon: "✂️",
  },
  {
    slug: "organize-pdf",
    title: "Organize PDF",
    description: "Sort, delete, or add pages to your PDF. Drag and drop to reorder.",
    longDescription: "Rearrange pages of your PDF however you like. Delete unwanted pages, add new pages, or reorder existing ones with a simple drag-and-drop interface. All processing happens locally.",
    keywords: ["organize pdf", "reorder pdf pages", "delete pdf pages", "arrange pdf"],
    category: "organize",
    icon: "📑",
  },

  // ── Optimize PDF ──
  {
    slug: "compress-pdf",
    title: "Compress PDF",
    description: "Reduce file size while optimizing for maximal PDF quality.",
    longDescription: "Compress your PDF to reduce file size without significant quality loss. Great for email attachments and web uploads. Choose your compression level — from maximum compression to best quality. Processing is done entirely in your browser.",
    keywords: ["compress pdf", "reduce pdf size", "pdf compressor", "compress pdf online", "shrink pdf"],
    category: "optimize",
    icon: "📦",
  },

  // ── Convert PDF ──
  {
    slug: "pdf-to-word",
    title: "PDF to Word",
    description: "Easily convert your PDF files into easy to edit DOC and DOCX documents.",
    longDescription: "Convert your PDF documents to editable Microsoft Word (DOCX) files. Extract text and formatting with high accuracy. This tool processes files locally when possible.",
    keywords: ["pdf to word", "pdf to docx", "convert pdf to word", "pdf word converter"],
    category: "convert",
    icon: "📝",
  },
  {
    slug: "pdf-to-jpg",
    title: "PDF to JPG",
    description: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
    longDescription: "Convert PDF pages to high-quality JPG images. Choose your desired resolution and quality level. Perfect for sharing PDF content on social media or embedding in presentations. 100% browser-based.",
    keywords: ["pdf to jpg", "pdf to image", "convert pdf to jpg", "pdf jpg converter"],
    category: "convert",
    icon: "🖼️",
  },
  {
    slug: "jpg-to-pdf",
    title: "JPG to PDF",
    description: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
    longDescription: "Convert one or multiple JPG/JPEG images into a PDF document. Arrange images in order, choose page size and orientation. All processing happens locally in your browser.",
    keywords: ["jpg to pdf", "image to pdf", "convert jpg to pdf", "jpg pdf converter"],
    category: "convert",
    icon: "📸",
  },
  {
    slug: "pdf-to-png",
    title: "PDF to PNG",
    description: "Convert PDF pages to high-quality, lossless PNG images.",
    longDescription: "Extract PDF pages as lossless PNG images with transparency support. Ideal for graphics, screenshots, and content that requires pixel-perfect reproduction. Entirely browser-based.",
    keywords: ["pdf to png", "convert pdf to png", "pdf png converter", "pdf to image"],
    category: "convert",
    icon: "🖼️",
  },
  {
    slug: "pdf-to-image",
    title: "PDF to Image",
    description: "Convert PDF pages to JPG or PNG images. Choose quality and resolution.",
    longDescription: "Convert every page of your PDF to high-quality images. Choose between JPG (adjustable quality for smaller files) or PNG (lossless, perfect for graphics). Adjust the resolution for crisp results. All processing happens locally in your browser — no upload needed.",
    keywords: ["pdf to image", "pdf to jpg", "pdf to png", "convert pdf to image", "pdf image converter"],
    category: "convert",
    icon: "🖼️",
    isNew: true,
  },
  {
    slug: "pdf-to-text",
    title: "PDF to Text",
    description: "Extract text content from PDF documents.",
    longDescription: "Extract the text content from your PDF files. Great for repurposing content, data extraction, or making PDFs searchable. Works locally in your browser.",
    keywords: ["pdf to text", "extract text from pdf", "pdf text extractor", "convert pdf to txt"],
    category: "convert",
    icon: "📄",
  },
  {
    slug: "word-to-pdf",
    title: "Word to PDF",
    description: "Make DOC and DOCX files easy to read by converting them to PDF.",
    longDescription: "Convert Microsoft Word documents (DOCX) to PDF format for easy sharing and printing. Preserve formatting, images, and layout.",
    keywords: ["word to pdf", "docx to pdf", "convert word to pdf", "doc to pdf"],
    category: "convert",
    icon: "📝",
  },
  {
    slug: "excel-to-pdf",
    title: "Excel to PDF",
    description: "Make Excel spreadsheets easy to read by converting them to PDF.",
    longDescription: "Convert Microsoft Excel spreadsheets (XLSX) to PDF. Preserve table formatting, charts, and data layout for professional sharing.",
    keywords: ["excel to pdf", "xlsx to pdf", "convert excel to pdf"],
    category: "convert",
    icon: "📊",
  },
  {
    slug: "pdf-to-ppt",
    title: "PDF to PPT",
    description: "Convert your PDF files to editable PowerPoint presentations.",
    longDescription: "Convert PDF documents to PowerPoint (PPTX) format for easy editing and presenting. This conversion requires server-side processing and will be available in a future update.",
    keywords: ["pdf to ppt", "pdf to powerpoint", "convert pdf to ppt", "pdf to slides"],
    category: "convert",
    icon: "📊",
    requiresServer: true,
  },
  {
    slug: "pdf-to-excel",
    title: "PDF to Excel",
    description: "Extract data from PDF tables and convert to Excel spreadsheets.",
    longDescription: "Convert PDF tables and data to Excel (XLSX) spreadsheets. This conversion requires server-side processing and will be available in a future update.",
    keywords: ["pdf to excel", "pdf to xlsx", "convert pdf to excel", "extract pdf to excel"],
    category: "convert",
    icon: "📈",
    requiresServer: true,
  },

  // ── Edit PDF ──
  {
    slug: "edit-pdf",
    title: "Edit PDF",
    description: "Add text, images, shapes or annotations to a PDF document.",
    longDescription: "Add text, images, shapes, and annotations to your PDF. Change font size, color, and position of added content. Note: editing existing PDF text requires server-side processing.",
    keywords: ["edit pdf", "annotate pdf", "pdf editor", "add text to pdf", "pdf annotation"],
    category: "edit",
    icon: "✏️",
  },
  {
    slug: "watermark-pdf",
    title: "Add Watermark",
    description: "Stamp text or images over your PDF in seconds. Choose typography, transparency, and position.",
    longDescription: "Add custom text or image watermarks to your PDF documents. Control opacity, rotation, position, and repetition. Perfect for branding, copyright protection, or document status marking. 100% client-side.",
    keywords: ["watermark pdf", "add watermark to pdf", "pdf watermark", "stamp pdf"],
    category: "edit",
    icon: "💧",
  },
  {
    slug: "rotate-pdf",
    title: "Rotate PDF",
    description: "Rotate your PDF pages the way you need them. You can even rotate multiple PDFs at once!",
    longDescription: "Rotate individual pages or entire PDF documents. Choose 90°, 180°, or 270° rotation. All processing happens instantly in your browser — no upload wait time.",
    keywords: ["rotate pdf", "rotate pdf pages", "pdf rotation", "flip pdf"],
    category: "edit",
    icon: "🔄",
  },
  {
    slug: "page-numbers",
    title: "Add Page Numbers",
    description: "Add page numbers into PDFs with ease. Choose position, dimensions, and typography.",
    longDescription: "Add customizable page numbers to your PDF documents. Select position (top/bottom, left/center/right), starting number, font size, and style. All browser-based processing.",
    keywords: ["pdf page numbers", "add page numbers", "number pdf pages", "pdf numbering"],
    category: "edit",
    icon: "🔢",
  },
  {
    slug: "crop-pdf",
    title: "Crop PDF",
    description: "Crop margins of PDF documents or select specific areas.",
    longDescription: "Crop your PDF pages — remove unwanted margins, trim whitespace, or select specific regions. Apply the same crop to all pages or customize per page.",
    keywords: ["crop pdf", "trim pdf margins", "crop pdf pages", "pdf crop tool"],
    category: "edit",
    icon: "✂️",
  },
  {
    slug: "sign-pdf",
    title: "Sign PDF",
    description: "Add handwritten or typed signatures to your PDF documents.",
    longDescription: "Draw, type, or upload your signature and place it on any page of your PDF. Supports drawing with mouse/touch, typing with font selection, or uploading a signature image. Position, resize, and download the signed PDF — all in your browser.",
    keywords: ["sign pdf", "pdf signature", "add signature to pdf", "electronic signature", "digital signature"],
    category: "edit",
    icon: "✍️",
  },

  // ── PDF Security ──
  {
    slug: "protect-pdf",
    title: "Protect PDF",
    description: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.",
    longDescription: "Add password protection to your PDF files using AES encryption. Set user password (to open) and owner password (for permissions). Control printing, copying, and modification permissions. All encryption happens locally.",
    keywords: ["protect pdf", "pdf password", "encrypt pdf", "lock pdf", "pdf security"],
    category: "security",
    icon: "🔒",
  },
  {
    slug: "unlock-pdf",
    title: "Unlock PDF",
    description: "Remove PDF password security, giving you the freedom to use your PDFs as you want.",
    longDescription: "Remove password protection from your PDF files (you must know the password). Unlock your PDF for editing, printing, or copying. Processing is entirely client-side.",
    keywords: ["unlock pdf", "remove pdf password", "pdf unlock", "decrypt pdf"],
    category: "security",
    icon: "🔓",
  },

  // ── New tools (mark as new) ──
  {
    slug: "html-to-pdf",
    title: "HTML to PDF",
    description: "Convert webpages in HTML to PDF. Just paste a URL and convert it to PDF with a click.",
    longDescription: "Convert HTML web pages to PDF documents. Simply paste a URL or enter HTML code directly. Perfect for saving web articles, receipts, or documentation as PDF.",
    keywords: ["html to pdf", "web to pdf", "convert html to pdf", "url to pdf", "webpage to pdf"],
    category: "convert",
    icon: "🌐",
    isNew: true,
  },
  {
    slug: "markdown-to-pdf",
    title: "Markdown to PDF",
    description: "Convert Markdown files to beautifully formatted PDF documents.",
    longDescription: "Convert your Markdown documents to well-formatted PDF files. Supports headers, code blocks, tables, and images. Perfect for documentation, README files, and tech writing. 100% browser-based.",
    keywords: ["markdown to pdf", "md to pdf", "convert markdown to pdf"],
    category: "convert",
    icon: "📋",
    isNew: true,
  },
  {
    slug: "heic-to-pdf",
    title: "HEIC to PDF",
    description: "Convert iPhone HEIC photos to PDF in seconds. No upload needed.",
    longDescription: "Convert iPhone and iPad photos (HEIC/HEIF format) to PDF. Perfect for sharing photos as documents. All processing happens right in your browser — files never leave your device.",
    keywords: ["heic to pdf", "heif to pdf", "iphone photo to pdf", "convert heic to pdf"],
    category: "convert",
    icon: "📱",
    isNew: true,
  },

  // ── Pro-required tools (mark for future) ──
  {
    slug: "ocr-pdf",
    title: "OCR PDF",
    description: "Convert scanned PDFs into searchable and selectable documents.",
    longDescription: "Extract text from scanned PDFs and images using OCR (Optical Character Recognition). Make scanned documents searchable and copyable. English OCR runs locally; additional languages available.",
    keywords: ["ocr pdf", "pdf ocr", "recognize text pdf", "scanned pdf to text"],
    category: "intelligence",
    icon: "🔍",
    isPro: true,
  },
];

// ─── Helper functions ───
export const getTool = (slug: string): ToolMeta | undefined =>
  TOOLS.find((t) => t.slug === slug);

export const getToolsByCategory = (category: ToolMeta["category"]): ToolMeta[] =>
  TOOLS.filter((t) => t.category === category);

export const getCategories = (): ToolMeta["category"][] => {
  const cats = new Set(TOOLS.map((t) => t.category));
  return Array.from(cats);
};

/** Tools visible to users (excludes server-required tools not yet implemented) */
export const VISIBLE_TOOLS = TOOLS.filter((t) => !t.requiresServer);

export const VISIBLE_TOOLS_COUNT = VISIBLE_TOOLS.length;
