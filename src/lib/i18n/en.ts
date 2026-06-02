import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Free Online PDF Tools",
    description: "Free online PDF tools that run entirely in your browser. Merge, split, compress, convert, and edit PDFs — no upload, no sign-up, 100% private."
},
  header: {
    mergePdf: "Merge PDF",
    splitPdf: "Split PDF",
    compressPdf: "Compress PDF",
    convert: "Convert",
    allTools: "All Tools"
},
  hero: {
    line1: "Every PDF tool you need,",
    line2: "right in your browser",
    subtitle: "All tools are 100% free. No upload, no sign-up, no limits. Your files never leave your device — everything runs locally in your browser for maximum privacy.",
    ctaMerge: "Merge PDF →",
    ctaCompress: "Compress PDF",
    ctaAll: "All Tools ↓",
    badgeNoUpload: "No file upload",
    badgeFree: "100% Free",
    badgeNoReg: "No registration",
    badgeOffline: "Works offline"
},
  tools: {
    heading: "All PDF Tools",
    countLabel: (n) => `${n} tool${n !== 1 ? "s" : ""} available — pick one to get started`
},
  toolItems: {
    "merge-pdf": {
      title: "Merge PDF",
      description: "Combine PDFs in the order you want with the easiest PDF merger available.",
      longDescription: "Merge multiple PDF files into a single document. Simply upload your PDFs, arrange them in the desired order, and download the merged result. All processing happens locally in your browser — your files never leave your device."
},
    "split-pdf": {
      title: "Split PDF",
      description: "Separate one page or a whole set for easy conversion into independent PDF files.",
      longDescription: "Split a PDF document into individual pages or extract specific page ranges. Choose to split by page, by range, or extract every page as a separate file. 100% browser-based — no upload required."
},
    "organize-pdf": {
      title: "Organize PDF",
      description: "Sort, delete, or add pages to your PDF. Drag and drop to reorder.",
      longDescription: "Rearrange pages of your PDF however you like. Delete unwanted pages, add new pages, or reorder existing ones with a simple drag-and-drop interface. All processing happens locally."
},
    "compress-pdf": {
      title: "Compress PDF",
      description: "Reduce file size while optimizing for maximal PDF quality.",
      longDescription: "Compress your PDF to reduce file size without significant quality loss. Great for email attachments and web uploads. Choose your compression level — from maximum compression to best quality. Processing is done entirely in your browser."
},
    "pdf-to-word": {
      title: "PDF to Word",
      description: "Easily convert your PDF files into easy to edit DOC and DOCX documents.",
      longDescription: "Extract text content from PDF and save as Word (DOCX) file. ⚠️ Note: This tool performs text-only extraction — it does NOT preserve original formatting, images, or table layouts. Best suited for extracting text content for further editing."
},
    "pdf-to-jpg": {
      title: "PDF to JPG",
      description: "Convert each PDF page into a JPG or extract all images contained in a PDF.",
      longDescription: "Convert PDF pages to high-quality JPG images. Choose your desired resolution and quality level. Perfect for sharing PDF content on social media or embedding in presentations. 100% browser-based."
},
    "jpg-to-pdf": {
      title: "JPG to PDF",
      description: "Convert JPG images to PDF in seconds. Easily adjust orientation and margins.",
      longDescription: "Convert one or multiple JPG/JPEG images into a PDF document. Arrange images in order, choose page size and orientation. All processing happens locally in your browser."
},
    "pdf-to-png": {
      title: "PDF to PNG",
      description: "Convert PDF pages to high-quality, lossless PNG images.",
      longDescription: "Extract PDF pages as lossless PNG images with transparency support. Ideal for graphics, screenshots, and content that requires pixel-perfect reproduction. Entirely browser-based."
},
    "pdf-to-image": {
      title: "PDF to Image",
      description: "Convert PDF pages to JPG or PNG images. Choose quality and resolution.",
      longDescription: "Convert every page of your PDF to high-quality images. Choose between JPG (adjustable quality for smaller files) or PNG (lossless, perfect for graphics). Adjust the resolution for crisp results. All processing happens locally in your browser — no upload needed."
},
    "pdf-to-text": {
      title: "PDF to Text",
      description: "Extract text content from PDF documents.",
      longDescription: "Extract the text content from your PDF files. Great for repurposing content, data extraction, or making PDFs searchable. Works locally in your browser."
},
    "word-to-pdf": {
      title: "Word to PDF",
      description: "Make DOC and DOCX files easy to read by converting them to PDF.",
      longDescription: "Convert Microsoft Word documents (DOCX) to PDF format for easy sharing and printing. Preserve formatting, images, and layout."
},
    "excel-to-pdf": {
      title: "Excel to PDF",
      description: "Make Excel spreadsheets easy to read by converting them to PDF.",
      longDescription: "Convert Microsoft Excel spreadsheets (XLSX) to PDF. Preserve table formatting, charts, and data layout for professional sharing."
},
    "edit-pdf": {
      title: "Edit PDF",
      description: "Add text, images, shapes or annotations to a PDF document.",
      longDescription: "Add text, images, shapes, and annotations to your PDF. Change font size, color, and position of added content. Note: editing existing PDF text requires server-side processing."
},
    "watermark-pdf": {
      title: "Add Watermark",
      description: "Stamp text or images over your PDF in seconds. Choose typography, transparency, and position.",
      longDescription: "Add custom text or image watermarks to your PDF documents. Control opacity, rotation, position, and repetition. Perfect for branding, copyright protection, or document status marking. 100% client-side."
},
    "rotate-pdf": {
      title: "Rotate PDF",
      description: "Rotate your PDF pages the way you need them. You can even rotate multiple PDFs at once!",
      longDescription: "Rotate individual pages or entire PDF documents. Choose 90°, 180°, or 270° rotation. All processing happens instantly in your browser — no upload wait time."
},
    "page-numbers": {
      title: "Add Page Numbers",
      description: "Add page numbers into PDFs with ease. Choose position, dimensions, and typography.",
      longDescription: "Add customizable page numbers to your PDF documents. Select position (top/bottom, left/center/right), starting number, font size, and style. All browser-based processing."
},
    "crop-pdf": {
      title: "Crop PDF",
      description: "Crop margins of PDF documents or select specific areas.",
      longDescription: "Crop your PDF pages — remove unwanted margins, trim whitespace, or select specific regions. Apply the same crop to all pages or customize per page."
},
    "protect-pdf": {
      title: "Protect PDF",
      description: "Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.",
      longDescription: "Add password protection to your PDF files using AES encryption. Set user password (to open) and owner password (for permissions). Control printing, copying, and modification permissions. All encryption happens locally."
},
    "unlock-pdf": {
      title: "Unlock PDF",
      description: "Remove PDF password security, giving you the freedom to use your PDFs as you want.",
      longDescription: "Remove password protection from your PDF files (you must know the password). Unlock your PDF for editing, printing, or copying. Processing is entirely client-side."
},
    "html-to-pdf": {
      title: "HTML to PDF",
      description: "Convert webpages in HTML to PDF. Just paste a URL and convert it to PDF with a click.",
      longDescription: "Convert HTML web pages to PDF documents. Simply paste a URL or enter HTML code directly. Perfect for saving web articles, receipts, or documentation as PDF."
},
    "markdown-to-pdf": {
      title: "Markdown to PDF",
      description: "Convert Markdown files to beautifully formatted PDF documents.",
      longDescription: "Convert your Markdown documents to well-formatted PDF files. Supports headers, code blocks, tables, and images. Perfect for documentation, README files, and tech writing. 100% browser-based."
},
    "heic-to-pdf": {
      title: "HEIC to PDF",
      description: "Convert iPhone HEIC photos to PDF in seconds. No upload needed.",
      longDescription: "Convert iPhone and iPad photos (HEIC/HEIF format) to PDF. Perfect for sharing photos as documents. All processing happens right in your browser — files never leave your device."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "Convert scanned PDFs into searchable and selectable documents.",
      longDescription: "Extract text from scanned PDFs and images using OCR (Optical Character Recognition). Make scanned documents searchable and copyable. English OCR runs locally; additional languages available."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "Sign PDF",
      description: "Add handwritten or typed signatures to your PDF documents.",
      longDescription: "Draw, type, or upload your signature and place it on any page of your PDF. Supports drawing with mouse/touch, typing with font selection, or uploading a signature image. Position, resize, and download the signed PDF — all in your browser."
},
    "pdf-to-ppt": {
      title: "PDF to PPT",
      description: "Convert your PDF files to editable PowerPoint presentations.",
      longDescription: "Convert PDF documents to PowerPoint (PPTX) format for easy editing and presenting. This conversion requires server-side processing and will be available in a future update."
},
    "pdf-to-excel": {
      title: "PDF to Excel",
      description: "Extract data from PDF tables and convert to Excel spreadsheets.",
      longDescription: "Convert PDF tables and data to Excel (XLSX) spreadsheets. This conversion requires server-side processing and will be available in a future update."
}
},
  toolPage: {
    breadcrumbHome: "Home",
    howItWorks: "How It Works",
    step1Title: "Select Files",
    step1Desc: "Drag & drop your files or click to browse.",
    step2Title: "Process Locally",
    step2Desc: "Your browser processes the files using client-side JavaScript. Nothing is uploaded.",
    step3Title: "Download Result",
    step3Desc: "Get your processed file instantly. Your original files remain unchanged.",
    faqHeading: "Frequently Asked Questions",
    faqQFree: "Is this tool free to use?",
    faqAFree: "Yes, this tool is 100% free to use. No sign-up, no limits, and no hidden fees. All processing happens locally in your browser — nothing is ever uploaded.",
    faqQSafe: "Is my file safe?",
    faqASafe: "Your files never leave your device. All processing is done locally in your browser using client-side JavaScript. Your files are never uploaded to any server, so your privacy is completely protected.",
    faqQSignup: "Do I need to create an account?",
    faqASignup: "No sign-up required. You can use this tool immediately without creating an account or providing any personal information.",
    relatedTools: "Related Tools"
},
  workspace: {
    privacyBadge: "Your files stay on your device — no upload",
    processing: "Processing...",
    done: "Done!",
    downloadAll: (n) => `Download All (${n} files)`,
    downloadAgain: "Download Again",
    startOver: "Start Over",
    error: "Error",
    tryAgain: "Try Again",
    selected: (n) => `Selected (${n} file${n !== 1 ? "s" : ""})`,
    clear: "Clear",
    processFiles: "Process Files",
    previewOnly: "Try (Preview)",
    previewWarning: "⚠️ This tool is in preview mode. Full implementation coming soon.",
    selectHint: "Select files above to get started.",
    comingSoon: "🚧 This tool implementation is coming soon. The file handling infrastructure is ready.",
    pages: "pages",
    mb: "MB",
    kb: "KB",
    loadingFiles: "Loading files...",
    unexpectedError: "An unexpected error occurred.",
    largeFileWarning: "Large file — processing may take longer",
    // Edit PDF workspace
    reset: "Reset",
    loadingPages: "Loading PDF pages...",
    textMode: "✏️ Text",
    selectMode: "👆 Select",
    enterTextPlaceholder: "Enter text to add...",
    textModeTip: "Click anywhere on the page to place your text. Switch to Select mode to delete annotations.",
    selectModeTip: "Click on an annotation to delete it. Switch to Text mode to add more text.",
    addTextFirst: "Add text annotations first",
    annotationsCount: (n) => `Annotations (${n} total)`,
    clearPage: "Clear page",
    selectAllAnnotations: "Select All",
    undo: "↩ Undo",
    redo: "↪ Redo",
    fontSizeLabel: "Font Size",
    fontSmall: "Small",
    fontMedium: "Medium",
    fontLarge: "Large",
    applyEdits: (n) => `Apply Edits & Download (${n} annotation${n !== 1 ? "s" : ""})`,
    applyingEdits: "Applying edits...",
    page: "Page",
    prev: "◀ Prev",
    next: "Next ▶",
    failedToLoad: "Failed to load PDF",
    processingFailed: "Processing failed",
    noUploadEdit: "No upload — all editing happens locally",
    // Crop PDF workspace
    fullPage: "Full Page",
    autoMargin: "Auto Margin",
    cropRegion: "Crop region",
    dragToResize: "— drag corners to resize, drag center to move",
    cropAllPages: (n) => `Apply Crop to All ${n} Pages`,
    cropSinglePage: "Crop Current Page",
    croppingPages: "Cropping pages...",
    noUploadCrop: "No upload — all cropping happens locally",
    presetA4: "A4",
    presetLetter: "Letter",
    presetSquare: "Square",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "Switch page tabs to preview each.",
    applyToAllPages: "Apply to all pages",
    cropX: "X",
    cropY: "Y",
    cropWidth: "Width",
    cropHeight: "Height",
    // Sign PDF workspace
    signDrawTab: "Draw",
    signTypeTab: "Type",
    signUploadTab: "Upload",
    signClearSignature: "Clear Signature",
    signPlaceOnPage: "Click on the PDF to place your signature. Drag to reposition.",
    signSignAndDownload: "Sign & Download",
    signFontSelector: "Signature Style",
    signDrawHint: "Draw your signature below using mouse or touch",
    signTypeHint: "Type your signature below",
    // Organize PDF workspace
    pagesCount: (n) => `${n} page${n !== 1 ? "s" : ""}`,
    dragReorderClickDelete: "— drag to reorder, click to delete",
    removePage: "Remove page",
    saveNewOrder: (n) => `Save New Order (${n} pages)`,
    reorganizingPages: "Reorganizing pages...",
    noUploadOrganize: "No upload — drag & drop pages right in your browser",
    // Rotate PDF workspace
    rotateAngle: "Rotation Angle",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "Watermark Text",
    watermarkOpacity: "Opacity",
    watermarkSize: "Font Size",
    watermarkFontFamily: "Font Family",
    watermarkRotation: "Rotation (deg)",
    watermarkPosition: "Position",
    watermarkColor: "Color",
    fontSerif: "Serif",
    fontSansSerif: "Sans-Serif",
    fontMonospace: "Monospace",
    positionCenter: "Center",
    positionTopLeft: "Top-Left",
    positionTopRight: "Top-Right",
    positionBottomLeft: "Bottom-Left",
    positionBottomRight: "Bottom-Right",
    positionTile: "Tile / Repeat",
    // Protect/Unlock PDF workspace
    enterPassword: "Enter password",
    confirmPassword: "Confirm password",
    passwordMismatch: "Passwords do not match",
    showPassword: "Show",
    hidePassword: "Hide",
    protectPdf: "Protect PDF",
    unlockPdf: "Unlock PDF",
    pdfNotEncrypted: "This PDF is not encrypted",
    unsupportedEncryption: "Unsupported encryption type",
    incorrectPassword: "Incorrect password",
    // Compress PDF workspace
    compressLevels: {
      label: "Compression Level",
      light: "Light",
      standard: "Standard",
      maximum: "Maximum",
    },
    // Split PDF workspace
    splitMode: "Split Mode",
    splitEveryPage: "Split Every Page",
    splitByRange: "Split by Range",
    extractPages: "Extract Pages",
    splitEveryN: "Split Every N Pages",
    rangePlaceholder: "e.g., 1-3,4-6,7-10",
    pagesPlaceholder: "e.g., 1,3,5,7",
    nPlaceholder: "e.g., 2",
    invalidRange: "Invalid range format",
    // Merge PDF workspace
    mergeOrder: "Merge Order",
    dragToReorder: "Drag to reorder merge sequence",
    mergeAndDownload: "Merge & Download",
    mergingFiles: "Merging files...",
    addMore: "Add more files",
    removeFile: "Remove file",
    needAtLeastTwo: "Add at least 2 PDF files to merge",
    files: "files",
    // Shared option labels
    pageSize: "Page Size",
    a4: "A4",
    letter: "Letter",
    original: "Original",
    orientation: "Orientation",
    auto: "Auto",
    portrait: "Portrait",
    landscape: "Landscape",
    margins: "Margins",
    marginNone: "None",
    marginNarrow: "Narrow",
    marginMedium: "Medium",
    marginWide: "Wide",
    marginSmall: "Small",
    marginLarge: "Large",
    remove: "Remove",
    paperSize: "Paper Size",
    // Page Numbers workspace
    position: "Position",
    startNumber: "Start Number",
    formatDigits: "1, 2, 3",
    formatPageX: "Page 1, Page 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "An error occurred while adding page numbers.",
    // Word to PDF workspace
    parsingWord: "Parsing Word document...",
    // Excel to PDF workspace
    parsingSpreadsheet: "Parsing spreadsheet...",
    // HTML to PDF workspace
    loadingHtml: "Loading HTML...",
    renderScale: "Render Scale",
    // Markdown to PDF workspace
    processingMarkdown: "Processing Markdown...",
    codeHighlight: "Code Highlighting",
    on: "On",
    off: "Off",
    // HEIC to PDF workspace
    decodingHeic: "Decoding HEIC files...",
    // OCR PDF workspace
    ocrInitializing: "Initializing...",
    ocrLoadingEngine: "Loading OCR engine...",
    ocrLanguage: "Language",
    ocrLangEn: "English",
    ocrLangZh: "Chinese + English",
    ocrLangJa: "Japanese + English",
    ocrOutputFormat: "Output Format",
    ocrFormatText: "Plain Text",
    ocrFormatPdf: "PDF with Text Layer",
    ocrProgress: (page, total) => `Page ${page}/${total}`,
    ocrError: "An error occurred during OCR processing.",
    // PDF to Word workspace
    buildingWord: "Building Word document...",
    generatingDocx: "Generating DOCX file...",
    pageSeparator: "Page Separator",
    separatorPageBreak: "Page Break",
    separatorContinuous: "Continuous",
    includePageNumbers: "Include Page Numbers",
    pdfToWordError: "An error occurred while converting to Word.",
    // Protect PDF workspace
    encryptionAlgorithm: "Encryption",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128-bit",
    encryptAes256Desc: "PDF 2.0 — Maximum security",
    encryptRc4Desc: "Compatible with older PDF readers",
    permissions: "Permissions",
    allowPrinting: "Allow Printing",
    allowCopying: "Allow Copying Text",
    allowModifying: "Allow Modifying",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "Guides & Tutorials",
    description: "Step-by-step tutorials and guides for image and PDF processing. Learn tips, tricks, and best practices.",
    browseGuides: "Browse Guides",
    readGuide: "Read Guide →",
    backToGuides: "← Back to Guides",
    breadcrumbGuides: "Guides",
  },
  convert: {
    converter: "Converter",
    free: "Free Online",
    noUpload: "no upload required — all processing happens in your browser",
    subtitle: (from, to) => `Convert ${from} (${from.toUpperCase()}) files to ${to} (${to.toUpperCase()}) format online, free, and`,
    browserBased: "Browser-based",
    experimental: "Experimental",
    comingSoon: "⚠️ Coming Soon",
    comingSoonDesc: "This conversion type requires server-side processing and will be available in a future update. Stay tuned!",
    about: (from, to) => `About ${from} and ${to}`,
    category: "Category",
    mime: "MIME",
    faqIsFree: (from, to) => `Is this ${from} to ${to} converter free?`,
    faqIsFreeAns: "is completely free to use. No sign-up, no limits.",
    faqQuality: "Will the quality be preserved?",
    faqQualityAns4: "Yes, our conversion maintains excellent quality. The output will closely match the original.",
    faqQualityAns3: "Quality is generally good, though complex formatting may be simplified.",
    faqQualityAns2: "This conversion type has limitations. We recommend verifying the output.",
    quality: "Quality",
    subtitleGeneric: "Convert PDF to and from various formats. Free, no upload, works in your browser.",
    relatedConversions: "Related Conversions"
},
  category: {
    all: "All",
    organize: "Organize PDF",
    optimize: "Optimize PDF",
    convert: "Convert PDF",
    edit: "Edit PDF",
    security: "PDF Security",
    intelligence: "PDF Intelligence",
    workflow: "Workflows"
},
  dropzone: {
    dropHere: "Drop files here",
    dragDropHere: "Drag & drop files here",
    orClickBrowse: "or click to browse",
    filesUpTo: "files, up to",
    multipleSupported: "(multiple files supported)",
    fileExceed: "File(s) exceed size limit:",
    invalidFileType: "Invalid file format. Please upload a valid PDF file."
},
  toolCard: {
    new: "New",
    pro: "Pro"
},
  pdfToImage: {
    title: "PDF to Image",
    description: "Convert PDF pages to JPG or PNG images. Choose quality and resolution.",
    formatLabel: "Output Format",
    qualityLabel: "JPEG Quality",
    scaleLabel: "Resolution",
    pngOption: "PNG (Lossless)",
    jpgOption: "JPG (Smaller)",
    convertBtn: "Convert to Images",
    preview: "images generated",
    pageLabel: "Page",
    downloadPage: "Download",
    downloadAll: "Download All",
    noFile: "Select a PDF file above to convert its pages to images.",
    renderingPages: "Rendering PDF pages..."
},
  footer: {
    product: "Product",
    popularTools: "Popular Tools",
    convert: "Convert",
    company: "Company",
    privacy: "Privacy",
    privacyLine: "All PDF processing happens entirely in your browser. Your files are never uploaded to any server.",
    home: "Home",
    allTools: "All Tools",
    pricing: "Pricing",
    about: "About",
    terms: "Terms",
    contact: "Contact",
    alsoTry: "Also try:",
    imageTools: "🖼️ Image Tools",
    unitConverter: "🔄 Unit Converter",
    copyright: "All PDF processing happens entirely in your browser. Your files are never uploaded to any server. · 100% Privacy."
},
pages: {
  pricing: {
    title: "Pricing",
    subtitle: "Simple and transparent — all PDF tools are 100% free.",
    freeTier: "Free",
    freeDesc: "Access all PDF tools at no cost. No hidden fees, no subscription — just free, powerful PDF processing right in your browser.",
    freeFeature1: "All 20+ PDF tools included",
    freeFeature2: "No sign-up or registration required",
    freeFeature3: "No file size limits",
    freeFeature4: "100% browser-based — no upload, no servers",
    proTier: "Pro (Coming Soon)",
    proDesc: "Advanced features for power users who need more. Stay tuned!",
    ocrNote: "OCR (Optical Character Recognition) will be available as a Pro feature. Convert scanned PDFs into searchable text with server-grade accuracy.",
    faqQ1: "Why are the tools free?",
    faqA1: "We believe essential PDF tools should be accessible to everyone. Our browser-based approach keeps costs low since files never leave your device. This allows us to offer all tools completely free, supported by minimal advertising.",
    faqQ2: "What happens when Pro launches?",
    faqA2: "When Pro launches, all current free tools will remain completely free. Pro will add advanced features like OCR, higher conversion quality, and batch processing for users who need them. No existing functionality will move behind a paywall."
  },
  about: {
    title: "About toolconv",
    subtitle: "Privacy-first PDF tools that run entirely in your browser.",
    missionTitle: "Our Mission",
    missionDesc: "toolconv was created with a simple mission: provide powerful, professional-quality PDF tools that respect your privacy. We believe file processing should happen on your device, not on someone else's server. Every tool we build runs entirely in your browser using client-side JavaScript — your files never leave your computer.",
    value1Title: "🔒 100% Private",
    value1Desc: "Your files are processed locally in your browser. They are never uploaded, never stored, never shared. Zero server-side access to your data.",
    value2Title: "🖥️ Browser-Based",
    value2Desc: "No downloads, no installations. Everything works directly in your modern browser. Powered by WebAssembly and client-side JavaScript.",
    value3Title: "💰 Completely Free",
    value3Desc: "All tools are free to use with no limits, no sign-ups, and no hidden costs. We believe in making PDF tools accessible to everyone.",
    value4Title: "🌍 Works Offline",
    value4Desc: "Once loaded, many tools can work without an internet connection. Perfect for travelers, remote workers, and anyone concerned about data privacy.",
    storyTitle: "Our Story",
    storyDesc: "toolconv started with a simple observation: most \"free\" online PDF tools actually upload your files to their servers, process them remotely, and often sell your data or lock features behind expensive subscriptions. We wanted to build a better alternative — one where all processing happens client-side, where privacy is baked into the architecture, and where powerful PDF tools remain free for everyone. Today, toolconv serves users worldwide with 20+ browser-based PDF tools, all 100% free and privacy-first."
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: June 1, 2026",
    intro: "At toolconv, your privacy is our top priority. This policy explains how we handle your data when you use our services.",
    s1Title: "1. No Data Upload",
    s1Content: "All PDF processing happens entirely in your browser using client-side JavaScript. Your files are never uploaded to our servers — they stay on your device from start to finish. We have no server-side access to your documents, and we never store, process, or transmit your files beyond your local machine.",
    s2Title: "2. No Cookies (Except Analytics)",
    s2Content: "We do not use functional cookies for core site operation. The only cookies used on this site are from Google AdSense for ad personalization and reporting. These are third-party cookies subject to Google's Privacy Policy. You can manage your cookie preferences through your browser settings.",
    s3Title: "3. Analytics & Advertising",
    s3Content: "This site uses Google AdSense, which may collect and use data about your visit (such as pages viewed and ad interactions) to serve relevant advertisements. Google AdSense uses cookies and similar technologies. For more information, please review Google's Privacy Policy at policies.google.com/privacy. We do not collect or store any personal analytics data ourselves — no server logs, no tracking scripts beyond AdSense, and no analytics platforms like Google Analytics.",
    s4Title: "4. No Account Required",
    s4Content: "We do not require user accounts or registration. There is no sign-up process, no email collection, and no user profiles. This means we inherently collect no personally identifiable information about you. Your use of our tools is completely anonymous.",
    s5Title: "5. Third-Party Links",
    s5Content: "Our site may contain links to third-party sites (e.g., sibling projects like image.toolconv.com and unit.toolconv.com, or Google AdSense ads). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before engaging with them.",
    contact: "If you have any questions about this privacy policy, please contact us at support@toolconv.com."
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: June 1, 2026",
    intro: "Welcome to toolconv. By using our website and tools, you agree to the following terms. Please read them carefully.",
    s1Title: "1. Free Use",
    s1Content: "All tools on toolconv are provided free of charge. No payment is required, and no subscription is needed. We reserve the right to introduce premium features in the future, but all existing free tools will remain free.",
    s2Title: "2. Privacy Commitment",
    s2Content: "Your privacy is fundamental to our service. All file processing happens locally in your browser. We do not have access to your files, and we do not store, process, or transmit them. For full details, see our Privacy Policy.",
    s3Title: "3. Acceptable Use",
    s3Content: "You agree to use toolconv only for lawful purposes and in accordance with these terms. You may not use our tools to process illegal content, infringe on others' intellectual property, or attempt to disrupt our service.",
    s4Title: "4. No Warranty",
    s4Content: "toolconv is provided 'as is' without any warranty, express or implied. While we strive for accuracy and reliability, we do not guarantee that the tools will be error-free or uninterrupted. Output quality may vary depending on the input files. Use at your own discretion.",
    s5Title: "5. Limitation of Liability",
    s5Content: "toolconv and its operators shall not be liable for any damages arising from the use or inability to use our tools, including but not limited to data loss, business interruption, or any indirect damages. Our entire liability is limited to the maximum extent permitted by applicable law.",
    s6Title: "6. Contact",
    s6Content: "For questions about these terms, please reach out to support@toolconv.com. We're happy to clarify any concerns."
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you. Get in touch with any questions, suggestions, or feedback.",
    emailTitle: "📧 Email Support",
    emailDesc: "For questions, bug reports, or general inquiries:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 Feature Requests",
    featureDesc: "Have an idea for a new tool or improvement? We're all ears! Send us your suggestions and we'll consider them for future updates.",
    responseTitle: "⏱️ Response Time",
    responseDesc: "We typically respond within 24 hours on business days. We value your time and will get back to you as quickly as possible."
  }
}
};
export default dict;
