import type { ToolMeta } from "./types";

export interface PdfToolGuideContent {
  steps: { name: string; text: string }[];
  example: string;
  settings: string[];
  limitations: string[];
  troubleshooting: string[];
  faqs: { q: string; a: string }[];
}

const CONTENT: Record<string, PdfToolGuideContent> = {
  "merge-pdf": {
    steps: [
      { name: "Upload PDFs", text: "Select two or more PDF files from your device." },
      { name: "Arrange order", text: "Drag files into the exact order you want them to appear in the final document." },
      { name: "Merge locally", text: "Combine the files in your browser and download the merged PDF." },
    ],
    example: "Combine a signed contract, invoice, and appendix into one PDF before sending it to a client or uploading it to a portal.",
    settings: [
      "File order controls the page order in the final merged PDF.",
      "Page orientation and page size are preserved from each source file.",
      "Encrypted PDFs may need to be unlocked before they can be merged.",
    ],
    limitations: [
      "Very large PDF sets depend on available browser memory.",
      "Files with advanced forms or signatures may lose interactive behavior after merging.",
      "Password-protected files must be unlocked before local processing can read them.",
    ],
    troubleshooting: [
      "If pages appear in the wrong order, reorder files before merging again.",
      "If a file fails, try unlocking or repairing that PDF first.",
      "If the browser slows down, merge fewer large files at a time.",
    ],
    faqs: [
      { q: "Can I merge PDFs without uploading them?", a: "Yes. The merge workflow runs in your browser for supported PDF files." },
      { q: "Will bookmarks or forms be preserved?", a: "Basic pages are preserved. Advanced bookmarks, forms, or signatures may not behave the same after merging." },
    ],
  },
  "compress-pdf": {
    steps: [
      { name: "Upload a PDF", text: "Choose the PDF file you want to make smaller." },
      { name: "Pick compression", text: "Select a compression level that balances size and visual quality." },
      { name: "Download result", text: "Review the reduced file size and download the optimized PDF." },
    ],
    example: "Reduce a 12 MB presentation PDF to a smaller attachment that fits an email limit while keeping text and charts readable.",
    settings: [
      "Higher compression usually makes smaller files but may reduce image quality.",
      "Documents made mostly of scanned images benefit more than text-only PDFs.",
      "Output size depends on the original images, fonts, and embedded objects.",
    ],
    limitations: [
      "Already-optimized PDFs may not shrink much further.",
      "Heavy compression can make photos or scans look softer.",
      "Some embedded objects cannot be reduced by browser-only compression.",
    ],
    troubleshooting: [
      "If the PDF is still too large, try a stronger compression level.",
      "If scans look blurry, use a lighter compression setting.",
      "If the file barely changes, the original PDF may already be optimized.",
    ],
    faqs: [
      { q: "Why did my PDF not shrink?", a: "Text-heavy or already-optimized PDFs often have little redundant data left to remove." },
      { q: "Does compression change the text?", a: "The goal is to reduce size while keeping readable content, but always review important documents before sharing." },
    ],
  },
  "split-pdf": {
    steps: [
      { name: "Upload a PDF", text: "Select the document you want to separate." },
      { name: "Choose pages", text: "Split every page or enter the page ranges you need." },
      { name: "Export files", text: "Download the extracted pages as separate PDF files." },
    ],
    example: "Extract pages 3-5 from a long report to send only the budget section to a teammate.",
    settings: [
      "Page ranges let you export only the pages you need.",
      "Split-all mode creates one PDF per page.",
      "Range order follows the page numbers you enter.",
    ],
    limitations: [
      "Page numbers refer to PDF page order, not printed numbers shown inside the document.",
      "Password-protected files must be unlocked first.",
      "Large documents can take longer to split on low-memory devices.",
    ],
    troubleshooting: [
      "If you extract the wrong page, check whether the PDF has cover pages or roman numerals.",
      "If output is blank, try opening the source PDF in another viewer to confirm the pages render.",
      "If export is slow, split a smaller range at a time.",
    ],
    faqs: [
      { q: "Can I extract just one page?", a: "Yes. Enter a single page number or select the page in the split interface." },
      { q: "Does splitting upload my PDF?", a: "No. Supported split operations run locally in your browser." },
    ],
  },
  "pdf-to-jpg": {
    steps: [
      { name: "Upload PDF", text: "Choose the PDF whose pages you want to convert." },
      { name: "Select quality", text: "Pick a resolution and JPG quality suitable for your use case." },
      { name: "Export images", text: "Download each page as a JPG image or bundle the results." },
    ],
    example: "Turn a one-page flyer PDF into a JPG preview for a website thumbnail or social media post.",
    settings: [
      "Resolution controls pixel dimensions and sharpness.",
      "JPG quality controls file size and visible compression.",
      "Higher resolution is better for print previews, while lower resolution is better for web thumbnails.",
    ],
    limitations: [
      "JPG does not support transparency.",
      "Very high resolution exports can use significant browser memory.",
      "Selectable text becomes pixels in the exported image.",
    ],
    troubleshooting: [
      "If text looks soft, increase resolution before exporting.",
      "If files are too large, lower JPG quality or resolution.",
      "If transparency matters, use PDF to PNG instead.",
    ],
    faqs: [
      { q: "Should I choose JPG or PNG?", a: "Use JPG for smaller photo-like previews and PNG for lossless graphics or transparency." },
      { q: "Can I convert every page?", a: "Yes. The converter can export PDF pages as individual image files." },
    ],
  },
  "jpg-to-pdf": {
    steps: [
      { name: "Upload JPG images", text: "Select one or more JPG files from your device." },
      { name: "Set order and layout", text: "Arrange images and choose page orientation, margins, or fit behavior when available." },
      { name: "Create PDF", text: "Generate a PDF locally and download the result." },
    ],
    example: "Combine photographed receipts into a single PDF expense packet before submitting a reimbursement request.",
    settings: [
      "Image order becomes the page order in the PDF.",
      "Page size and orientation affect how each image is placed.",
      "Margins help prevent content from touching the page edge.",
    ],
    limitations: [
      "Low-resolution photos will remain low resolution inside the PDF.",
      "Large image batches can create large PDFs.",
      "Rotated phone photos may need correction before conversion.",
    ],
    troubleshooting: [
      "If pages appear sideways, rotate the image before creating the PDF.",
      "If the PDF is too large, compress images first.",
      "If an image is cropped, change fit or margin settings.",
    ],
    faqs: [
      { q: "Can I put multiple JPGs in one PDF?", a: "Yes. Upload multiple images and arrange them in the order you want." },
      { q: "Will the images be uploaded?", a: "No. The JPG to PDF workflow runs locally in your browser for supported files." },
    ],
  },
  "organize-pdf": {
    steps: [
      { name: "Upload PDF", text: "Open the PDF you want to rearrange." },
      { name: "Reorder pages", text: "Drag pages into a new order, delete unwanted pages, or add pages when available." },
      { name: "Save PDF", text: "Export the reorganized document as a new PDF." },
    ],
    example: "Move a signature page to the end of a contract packet and remove blank scanner pages before sending the file.",
    settings: [
      "Drag order controls the final document sequence.",
      "Delete removes pages from the exported copy, not from your original file.",
      "Added pages are inserted into the selected location in the page list.",
    ],
    limitations: [
      "Advanced interactive elements may not behave exactly the same after rebuilding the PDF.",
      "Very large documents can take time to render thumbnails.",
      "Password-protected PDFs must be unlocked before organization.",
    ],
    troubleshooting: [
      "If thumbnails are slow, wait for rendering to finish before dragging.",
      "If a page is missing, check whether it was deleted before export.",
      "If the output fails, try organizing fewer pages at once.",
    ],
    faqs: [
      { q: "Can I delete pages from a PDF?", a: "Yes. Delete unwanted pages and export a new cleaned PDF." },
      { q: "Does this change my original file?", a: "No. The tool creates a new PDF download and does not modify your original file on disk." },
    ],
  },
};

export function getPdfToolGuideContent(tool: ToolMeta): PdfToolGuideContent {
  return CONTENT[tool.slug] ?? {
    steps: [
      { name: "Upload file", text: "Choose the PDF or related file from your device." },
      { name: "Review settings", text: "Adjust the available options for the output you need." },
      { name: "Download result", text: "Process the file in your browser and download the result." },
    ],
    example: `${tool.title} is useful for quick PDF work when you need a browser-based tool without creating an account.`,
    settings: [
      "Available options depend on the selected PDF workflow.",
      "Browser-side processing keeps supported files on your device.",
      "Output quality depends on the original file and selected settings.",
    ],
    limitations: [
      "Large files depend on available browser memory.",
      "Encrypted or damaged PDFs may need to be unlocked or repaired first.",
      "Advanced PDF features such as forms, signatures, or layers may have limited browser support.",
    ],
    troubleshooting: [
      "If a file fails, open it in a PDF viewer first to confirm it is valid.",
      "If processing is slow, try a smaller file or close other heavy tabs.",
      "If output is not as expected, review the settings and process the original file again.",
    ],
    faqs: [
      { q: `Is ${tool.title} free?`, a: "Yes. The core PDF tool is free to use in your browser." },
      { q: "Are my files uploaded?", a: "Supported PDF workflows run locally in your browser whenever possible." },
    ],
  };
}
