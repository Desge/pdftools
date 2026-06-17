import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "免费在线 PDF 工具",
    description: "完全免费的在线 PDF 工具，所有处理均在浏览器中完成。合并、拆分、压缩、转换、编辑 PDF — 无需上传、无需注册、100% 保护隐私。"
},
  header: {
    mergePdf: "合并 PDF",
    splitPdf: "拆分 PDF",
    compressPdf: "压缩 PDF",
    convert: "格式转换",
    allTools: "全部工具"
},
  hero: {
    line1: "你需要的所有 PDF 工具，",
    line2: "就在浏览器中",
    subtitle: "所有工具 100% 免费。无需上传、无需注册、没有限制。文件永远不会离开你的设备 — 所有处理均在你的浏览器中本地完成，最大程度保护隐私。",
    ctaMerge: "合并 PDF →",
    ctaCompress: "压缩 PDF",
    ctaAll: "全部工具 ↓",
    badgeNoUpload: "零上传",
    badgeFree: "完全免费",
    badgeNoReg: "无需注册",
    badgeOffline: "离线可用"
},
  tools: {
    heading: "全部 PDF 工具",
    countLabel: (n) => `共 ${n} 个工具可用 — 点击开始使用`
},
  toolItems: {
    "merge-pdf": {
      title: "合并 PDF",
      description: "按你想要的顺序合并 PDF，最简单的 PDF 合并工具。",
      longDescription: "将多个 PDF 文件合并为一个文档。只需上传你的 PDF 文件，按需排列顺序，然后下载合并结果。所有处理都在你的浏览器本地完成 — 文件永远不会离开你的设备。"
},
    "split-pdf": {
      title: "拆分 PDF",
      description: "分离单页或整组页面，轻松转换为独立的 PDF 文件。",
      longDescription: "将 PDF 文档拆分为单独的页面或提取指定页面范围。可按页拆分、按范围拆分或提取每一页为独立文件。100% 基于浏览器 — 无需上传。"
},
    "organize-pdf": {
      title: "整理 PDF",
      description: "对 PDF 页面进行排序、删除或添加。拖放即可重新排序。",
      longDescription: "按你的喜好重新排列 PDF 页面。删除不需要的页面、添加新页面或通过简单的拖放界面重新排序。所有处理均在本地完成。"
},
    "compress-pdf": {
      title: "压缩 PDF",
      description: "减小文件大小，同时优化 PDF 质量。",
      longDescription: "压缩 PDF 以减小文件大小，同时保持较高质量的视觉效果。非常适合电子邮件附件和网络上传。选择压缩级别 — 从最大压缩到最佳质量。处理完全在浏览器中完成。"
},
    "pdf-to-word": {
      title: "PDF 转 Word",
      description: "轻松将 PDF 文件转换为易于编辑的 DOC 和 DOCX 文档。",
      longDescription: "将 PDF 中的文本内容提取为 Word（DOCX）文件。⚠️ 注意：此工具仅提取纯文本，不支持保留原始格式、图片和表格布局。适合提取文字内容进行二次编辑。"
},
    "pdf-to-jpg": {
      title: "PDF 转 JPG",
      description: "将每个 PDF 页面转换为 JPG 图片，或提取 PDF 中包含的所有图片。",
      longDescription: "将 PDF 页面转换为高质量的 JPG 图片。选择你需要的分辨率和质量级别。非常适合在社交媒体上分享 PDF 内容或嵌入到演示文稿中。100% 基于浏览器。"
},
    "jpg-to-pdf": {
      title: "JPG 转 PDF",
      description: "将 JPG 图片快速转换为 PDF。轻松调整方向和边距。",
      longDescription: "将一个或多个 JPG/JPEG 图片转换为 PDF 文档。按顺序排列图片，选择页面大小和方向。所有处理都在你的浏览器中本地完成。"
},
    "pdf-to-png": {
      title: "PDF 转 PNG",
      description: "将 PDF 页面转换为高质量、无损的 PNG 图片。",
      longDescription: "将 PDF 页面提取为无损 PNG 图片，支持透明度。非常适合图形、截图和要求像素级完美再现的内容。完全基于浏览器。"
},
    "pdf-to-image": {
      title: "PDF 转图片",
      description: "将 PDF 页面转换为 JPG 或 PNG 图片。选择质量和分辨率。",
      longDescription: "将 PDF 的每一页转换为高质量的图片。可选择 JPG（可调节质量，文件更小）或 PNG（无损，适合图形）。调整分辨率以获得清晰的效果。所有处理都在你的浏览器中本地完成 — 无需上传。"
},
    "pdf-to-text": {
      title: "PDF 转文本",
      description: "从 PDF 文档中提取文本内容。",
      longDescription: "从 PDF 文件中提取文本内容。非常适合重新利用内容、数据提取或使 PDF 可搜索。在浏览器中本地运行。"
},
    "word-to-pdf": {
      title: "Word 转 PDF",
      description: "将 DOC 和 DOCX 文件转换为 PDF，便于阅读。",
      longDescription: "将 Microsoft Word 文档（DOCX）转换为 PDF 格式，便于共享和打印。保留格式、图片和布局。"
},
    "excel-to-pdf": {
      title: "Excel 转 PDF",
      description: "将 Excel 电子表格转换为 PDF，便于阅读。",
      longDescription: "将 Microsoft Excel 电子表格（XLSX）转换为 PDF。保留表格格式、图表和数据布局，适合专业共享。"
},
    "edit-pdf": {
      title: "编辑 PDF",
      description: "向 PDF 文档添加文本、图片、形状或标注。",
      longDescription: "向 PDF 添加文本、图片、形状和标注。更改添加内容的字体大小、颜色和位置。注意：编辑现有 PDF 文本需要服务器端处理。"
},
    "watermark-pdf": {
      title: "添加水印",
      description: "在 PDF 上快速添加文字或图片水印。选择字体、透明度和位置。",
      longDescription: "向 PDF 文档添加自定义文字或图片水印。控制透明度、旋转、位置和重复。非常适合品牌宣传、版权保护或文档状态标记。100% 客户端处理。"
},
    "rotate-pdf": {
      title: "旋转 PDF",
      description: "按需旋转 PDF 页面。你甚至可以一次旋转多个 PDF！",
      longDescription: "旋转单个页面或整个 PDF 文档。可选择 90°、180° 或 270° 旋转。所有处理均在浏览器中即时完成 — 无需等待上传。"
},
    "page-numbers": {
      title: "添加页码",
      description: "轻松为 PDF 添加页码。选择位置、尺寸和字体样式。",
      longDescription: "为 PDF 文档添加可自定义的页码。选择位置（顶部/底部、左/中/右）、起始编号、字体大小和样式。所有处理均基于浏览器。"
},
    "crop-pdf": {
      title: "裁剪 PDF",
      description: "裁剪 PDF 文档的边距或选择特定区域。",
      longDescription: "裁剪 PDF 页面 — 去除不需要的边距、修剪空白区域或选择特定区域。可将相同的裁剪应用于所有页面或逐页自定义。"
},
    "protect-pdf": {
      title: "加密 PDF",
      description: "使用密码保护 PDF 文件。加密 PDF 文档以防止未经授权的访问。",
      longDescription: "使用 AES 加密为 PDF 文件添加密码保护。设置用户密码（用于打开）和所有者密码（用于权限）。控制打印、复制和修改权限。所有加密均在本地完成。"
},
    "unlock-pdf": {
      title: "解锁 PDF",
      description: "移除 PDF 密码保护，让你自由使用 PDF。",
      longDescription: "移除 PDF 文件的密码保护（你必须知道密码）。解锁 PDF 以进行编辑、打印或复制。处理完全在客户端进行。"
},
    "html-to-pdf": {
      title: "HTML 转 PDF",
      description: "将 HTML 网页转换为 PDF。只需粘贴 URL 即可一键转换。",
      longDescription: "将 HTML 网页转换为 PDF 文档。直接粘贴 URL 或输入 HTML 代码。非常适合将网页文章、收据或文档保存为 PDF。"
},
    "markdown-to-pdf": {
      title: "Markdown 转 PDF",
      description: "将 Markdown 文件转换为格式精美的 PDF 文档。",
      longDescription: "将 Markdown 文档转换为格式精美的 PDF 文件。支持标题、代码块、表格和图片。非常适合文档、README 文件和技术写作。100% 基于浏览器。"
},
    "heic-to-pdf": {
      title: "HEIC 转 PDF",
      description: "将 iPhone HEIC 照片快速转换为 PDF。无需上传。",
      longDescription: "将 iPhone 和 iPad 照片（HEIC/HEIF 格式）转换为 PDF。非常适合将照片作为文档分享。所有处理都在你的浏览器中完成 — 文件永远不会离开你的设备。"
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "将扫描的 PDF 转换为可搜索和可选择的文档。",
      longDescription: "使用 OCR（光学字符识别）从扫描的 PDF 和图片中提取文本。使扫描的文档可搜索和可复制。英文 OCR 在本地运行；其他语言也可用。"
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "签名 PDF",
      description: "在 PDF 文档中添加手写或打字签名。",
      longDescription: "通过绘制、打字或上传的方式创建签名，并将其放置在 PDF 的任意页面上。支持鼠标/触摸绘制、字体选择的打字签名或上传签名图片。可定位、调整大小并下载已签名的 PDF — 全部在浏览器中完成。"
},
    "pdf-to-ppt": {
      title: "PDF 转 PPT",
      description: "将 PDF 文件转换为可编辑的 PowerPoint 演示文稿。",
      longDescription: "将 PDF 文档转换为 PowerPoint (PPTX) 格式，便于编辑和演示。此转换需要服务端处理，将在后续版本中上线。"
},
    "pdf-to-excel": {
      title: "PDF 转 Excel",
      description: "从 PDF 表格中提取数据并转换为 Excel 电子表格。",
      longDescription: "将 PDF 中的表格和数据转换为 Excel (XLSX) 电子表格。此转换需要服务端处理，将在后续版本中上线。"
}
},
  toolPage: {
    breadcrumbHome: "首页",
    howItWorks: "使用步骤",
    step1Title: "选择文件",
    step1Desc: "拖放文件或点击浏览选择。",
    step2Title: "本地处理",
    step2Desc: "你的浏览器使用 JavaScript 在本地处理文件，无需上传。",
    step3Title: "下载结果",
    step3Desc: "即时下载处理完成的文件。原始文件保持不变。",
    faqHeading: "常见问题",
    faqQFree: "这个工具免费吗？",
    faqAFree: "是的，这个工具完全免费使用。无需注册、没有限制、也无任何隐藏费用。所有处理均在浏览器中本地完成 — 绝不会上传任何内容。",
    faqQSafe: "我的文件安全吗？",
    faqASafe: "你的文件永远不会离开你的设备。所有处理均在你的浏览器中使用客户端 JavaScript 本地完成。文件永远不会上传到任何服务器，你的隐私得到完全保护。",
    faqQSignup: "需要注册账号吗？",
    faqASignup: "无需注册。你可以立即使用此工具，无需创建账号或提供任何个人信息。",
    relatedTools: "相关工具"
},
  workspace: {
    privacyBadge: "文件留在你的设备上 — 零上传",
    processing: "处理中...",
    done: "完成！",
    downloadAll: (n) => `下载全部 (${n} 个文件)`,
    downloadAgain: "重新下载",
    startOver: "重新开始",
    error: "错误",
    tryAgain: "再试一次",
    selected: (n) => `已选择 (${n} 个文件)`,
    clear: "清空",
    processFiles: "开始处理",
    previewOnly: "预览模式",
    previewWarning: "预览模式。浏览器版本中的部分操作可能受限。",
    selectHint: "请在上方选择文件开始使用。",
    comingSoon: "此工具在浏览器版本中不可用。请从工具列表选择已可用的 PDF 工具。",
    pages: "页",
    mb: "MB",
    kb: "KB",
    loadingFiles: "正在加载文件...",
    unexpectedError: "发生意外错误。",
    largeFileWarning: "文件较大，处理可能需要更长时间",
    // Edit PDF workspace
    reset: "重置",
    loadingPages: "正在加载 PDF 页面...",
    textMode: "✏️ 文本",
    selectMode: "👆 选择",
    enterTextPlaceholder: "输入要添加的文本...",
    textModeTip: "点击页面任意位置放置文本。切换到选择模式可删除标注。",
    selectModeTip: "点击标注可将其删除。切换到文本模式可添加更多文本。",
    addTextFirst: "请先添加文本标注",
    annotationsCount: (n) => `标注 (${n} 个)`,
    clearPage: "清空页面",
    selectAllAnnotations: "全选",
    undo: "↩ 撤销",
    redo: "↪ 重做",
    fontSizeLabel: "字体大小",
    fontSmall: "小",
    fontMedium: "中",
    fontLarge: "大",
    applyEdits: (n) => `应用编辑并下载 (${n} 个标注)`,
    applyingEdits: "正在应用编辑...",
    page: "页",
    prev: "◀ 上一页",
    next: "下一页 ▶",
    failedToLoad: "加载 PDF 失败",
    processingFailed: "处理失败",
    noUploadEdit: "零上传 — 所有编辑均在本地完成",
    // Crop PDF workspace
    fullPage: "整页",
    autoMargin: "自动边距",
    cropRegion: "裁剪区域",
    dragToResize: "— 拖动角点调整大小，拖动中心移动",
    cropAllPages: (n) => `裁剪全部 ${n} 页`,
    cropSinglePage: "裁剪当前页面",
    croppingPages: "正在裁剪页面...",
    noUploadCrop: "零上传 — 所有裁剪均在本地完成",
    presetA4: "A4",
    presetLetter: "信纸",
    presetSquare: "方形",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "切换页面标签预览每一页。",
    applyToAllPages: "应用到所有页面",
    cropX: "X",
    cropY: "Y",
    cropWidth: "宽度",
    cropHeight: "高度",
    // Sign PDF workspace
    signDrawTab: "绘制",
    signTypeTab: "打字",
    signUploadTab: "上传",
    signClearSignature: "清除签名",
    signPlaceOnPage: "点击 PDF 页面放置签名。拖动可调整位置。",
    signSignAndDownload: "签名并下载",
    signFontSelector: "签名样式",
    signDrawHint: "使用鼠标或触摸在下方绘制签名",
    signTypeHint: "在下方输入签名文本",
    // Organize PDF workspace
    pagesCount: (n) => `${n} 页`,
    dragReorderClickDelete: "— 拖动排序，点击删除",
    removePage: "删除页面",
    saveNewOrder: (n) => `保存新顺序 (${n} 页)`,
    reorganizingPages: "正在重新排列页面...",
    noUploadOrganize: "零上传 — 在浏览器中拖放页面",
    // Rotate PDF workspace
    rotateAngle: "旋转角度",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "水印文本",
    watermarkOpacity: "透明度",
    watermarkSize: "字体大小",
    watermarkFontFamily: "字体系列",
    watermarkRotation: "旋转角度（度）",
    watermarkPosition: "位置",
    watermarkColor: "颜色",
    fontSerif: "衬线字体",
    fontSansSerif: "无衬线字体",
    fontMonospace: "等宽字体",
    positionCenter: "居中",
    positionTopLeft: "左上",
    positionTopRight: "右上",
    positionBottomLeft: "左下",
    positionBottomRight: "右下",
    positionTile: "平铺 / 重复",
    // Protect/Unlock PDF workspace
    enterPassword: "输入密码",
    confirmPassword: "确认密码",
    passwordMismatch: "密码不匹配",
    showPassword: "显示",
    hidePassword: "隐藏",
    protectPdf: "加密保护",
    unlockPdf: "解锁",
    pdfNotEncrypted: "此 PDF 未加密",
    unsupportedEncryption: "不支持的加密类型",
    incorrectPassword: "密码错误",
    // Compress PDF workspace
    compressLevels: {
      label: "压缩级别",
      light: "轻度",
      standard: "标准",
      maximum: "最大",
    },
    // Split PDF workspace
    splitMode: "拆分模式",
    splitEveryPage: "每页拆分",
    splitByRange: "按范围拆分",
    extractPages: "提取页面",
    splitEveryN: "每N页拆分",
    rangePlaceholder: "例如：1-3,4-6,7-10",
    pagesPlaceholder: "例如：1,3,5,7",
    nPlaceholder: "例如：2",
    invalidRange: "范围格式无效",
    // Merge PDF workspace
    mergeOrder: "合并顺序",
    dragToReorder: "拖动以重新排列合并顺序",
    mergeAndDownload: "合并 & 下载",
    mergingFiles: "正在合并文件...",
    addMore: "添加更多文件",
    removeFile: "移除文件",
    needAtLeastTwo: "请添加至少 2 个 PDF 文件进行合并",
    files: "个文件",
    // Shared option labels
    pageSize: "页面大小",
    a4: "A4",
    letter: "Letter",
    original: "原始大小",
    orientation: "方向",
    auto: "自动",
    portrait: "纵向",
    landscape: "横向",
    margins: "页边距",
    marginNone: "无",
    marginNarrow: "窄",
    marginMedium: "中",
    marginWide: "宽",
    marginSmall: "小",
    marginLarge: "大",
    remove: "移除",
    paperSize: "纸张大小",
    // Page Numbers workspace
    position: "位置",
    startNumber: "起始编号",
    formatDigits: "1, 2, 3",
    formatPageX: "第1页, 第2页",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "添加页码时发生错误。",
    // Word to PDF workspace
    parsingWord: "正在解析 Word 文档...",
    // Excel to PDF workspace
    parsingSpreadsheet: "正在解析电子表格...",
    // HTML to PDF workspace
    loadingHtml: "正在加载 HTML...",
    renderScale: "渲染缩放",
    // Markdown to PDF workspace
    processingMarkdown: "正在处理 Markdown...",
    codeHighlight: "代码高亮",
    on: "开",
    off: "关",
    // HEIC to PDF workspace
    decodingHeic: "正在解码 HEIC 文件...",
    // OCR PDF workspace
    ocrInitializing: "正在初始化...",
    ocrLoadingEngine: "正在加载 OCR 引擎...",
    ocrLanguage: "语言",
    ocrLangEn: "英语",
    ocrLangZh: "中文 + 英语",
    ocrLangJa: "日语 + 英语",
    ocrOutputFormat: "输出格式",
    ocrFormatText: "纯文本",
    ocrFormatPdf: "带文字层的 PDF",
    ocrProgress: (page, total) => `第 ${page}/${total} 页`,
    ocrError: "OCR 处理过程中发生错误。",
    // PDF to Word workspace
    buildingWord: "正在构建 Word 文档...",
    generatingDocx: "正在生成 DOCX 文件...",
    pageSeparator: "页分隔符",
    separatorPageBreak: "分页符",
    separatorContinuous: "连续",
    includePageNumbers: "包含页码",
    pdfToWordError: "转换为 Word 时发生错误。",
    // Protect PDF workspace
    encryptionAlgorithm: "加密算法",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128位",
    encryptAes256Desc: "PDF 2.0 — 最高安全级别",
    encryptRc4Desc: "兼容旧版 PDF 阅读器",
    permissions: "权限设置",
    allowPrinting: "允许打印",
    allowCopying: "允许复制文本",
    allowModifying: "允许修改",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "指南与教程",
    description: "图像和PDF处理的分步教程和指南。学习技巧、窍门和最佳实践。",
    browseGuides: "浏览指南",
    readGuide: "阅读指南 →",
    backToGuides: "← 返回指南",
    breadcrumbGuides: "指南",
  },
  convert: {
    converter: "转换器",
    free: "免费在线",
    noUpload: "无需上传 — 所有处理均在浏览器中完成",
    subtitle: (from, to) => `将 ${from} (${from.toUpperCase()}) 格式在线免费转换为 ${to} (${to.toUpperCase()})，`,
    browserBased: "浏览器端",
    experimental: "实验性",
    comingSoon: "不支持的转换",
    comingSoonDesc: "此转换类型需要服务端处理，当前浏览器版本不可用。",
    about: (from, to) => `关于 ${from} 和 ${to}`,
    category: "分类",
    mime: "MIME",
    faqIsFree: (from, to) => `${from} 转 ${to} 转换器是否免费？`,
    faqIsFreeAns: "转换器完全免费使用，无需注册、没有限制。",
    faqQuality: "转换会保留质量吗？",
    faqQualityAns4: "是的，我们的转换可保持出色质量，输出将高度还原原文件。",
    faqQualityAns3: "质量通常不错，但复杂格式可能会被简化。",
    faqQualityAns2: "此转换类型存在限制，我们建议您验证输出质量。",
    quality: "质量",
    subtitleGeneric: "在各种格式与 PDF 之间互相转换。免费、无需上传，浏览器内完成。",
    relatedConversions: "相关转换"
},
  category: {
    all: "全部",
    organize: "PDF 组织",
    optimize: "PDF 优化",
    convert: "PDF 转换",
    edit: "PDF 编辑",
    security: "PDF 安全",
    intelligence: "PDF 智能",
    workflow: "工作流"
},
  dropzone: {
    dropHere: "将文件拖放到这里",
    dragDropHere: "拖放文件到此处",
    orClickBrowse: "或点击浏览",
    filesUpTo: "文件，最大",
    multipleSupported: "（支持多文件）",
    fileExceed: "文件超出大小限制：",
    invalidFileType: "文件格式不正确，请上传有效的PDF文件。"
},
  toolCard: {
    new: "新",
    pro: "专业"
},
  pdfToImage: {
    title: "PDF 转图片",
    description: "将 PDF 页面转换为 JPG 或 PNG 图片。可调节质量和分辨率。",
    formatLabel: "输出格式",
    qualityLabel: "JPEG 质量",
    scaleLabel: "分辨率",
    pngOption: "PNG（无损）",
    jpgOption: "JPG（更小）",
    convertBtn: "转换为图片",
    preview: "张图片已生成",
    pageLabel: "页",
    downloadPage: "下载",
    downloadAll: "全部下载",
    noFile: "请在上方选择 PDF 文件以将其页面转换为图片。",
    renderingPages: "正在渲染 PDF 页面..."
},
  footer: {
    product: "产品",
    popularTools: "热门工具",
    convert: "格式转换",
    company: "公司",
    privacy: "隐私",
    privacyLine: "所有 PDF 处理均在浏览器中完成。你的文件永远不会上传到任何服务器。100% 隐私保护。",
    home: "首页",
    allTools: "全部工具",
    pricing: "定价",
    about: "关于",
    terms: "条款",
    contact: "联系",
    alsoTry: "更多工具：",
    imageTools: "🖼️ 图片工具",
    unitConverter: "🔄 单位换算",
    copyright: "所有 PDF 处理均在浏览器中完成。你的文件永远不会上传到任何服务器。100% 隐私保护。"
},
pages: {
  pricing: {
    title: "定价",
    subtitle: "简单透明 — 所有 PDF 工具 100% 免费。",
    freeTier: "免费版",
    freeDesc: "免费使用所有 PDF 工具。无隐藏费用、无订阅，在你的浏览器中即可完成强大的 PDF 处理。",
    freeFeature1: "包含 20+ 种 PDF 工具",
    freeFeature2: "无需注册或登录",
    freeFeature3: "无文件大小限制",
    freeFeature4: "100% 基于浏览器 — 无需上传，无需服务器",
    proTier: "专业版",
    proDesc: "面向高级用户的增强功能不属于免费浏览器版本。",
    ocrNote: "OCR（光学字符识别）需要服务端级别处理，不包含在免费浏览器版本中。",
    faqQ1: "为什么这些工具是免费的？",
    faqA1: "我们相信基础的 PDF 工具应该对所有人免费开放。我们的基于浏览器的方法将成本保持在较低水平，因为文件永远不会离开你的设备。这使得我们可以通过少量广告支持，提供完全免费的工具。",
    faqQ2: "专业版推出后会怎样？",
    faqA2: "专业版推出后，所有当前的免费工具将保持完全免费。专业版将增加 OCR、更高质量的转换和批处理等高级功能。现有功能不会转移到付费墙后。"
  },
  about: {
    title: "关于 toolconv",
    subtitle: "在浏览器中运行的隐私优先 PDF 工具。",
    missionTitle: "我们的使命",
    missionDesc: "toolconv 的使命很简单：提供尊重用户隐私的专业级 PDF 工具。我们认为文件处理应该在用户的设备上进行，而不是在别人的服务器上。我们构建的每个工具都在你的浏览器中使用客户端 JavaScript 运行——你的文件永远不会离开你的电脑。",
    value1Title: "🔒 100% 隐私",
    value1Desc: "你的文件在浏览器中本地处理。绝不会上传、存储或共享。零服务器访问你的数据。",
    value2Title: "🖥️ 基于浏览器",
    value2Desc: "无需下载，无需安装。一切都在你的现代浏览器中直接运行。由 WebAssembly 和客户端 JavaScript 驱动。",
    value3Title: "💰 完全免费",
    value3Desc: "所有工具免费使用，无限制、无需注册、无隐藏费用。我们相信 PDF 工具应该对所有人开放。",
    value4Title: "🌍 离线可用",
    value4Desc: "加载后，许多工具可在无网络连接的情况下工作。非常适合旅行者、远程工作者和关心数据隐私的人。",
    storyTitle: "我们的故事",
    storyDesc: "toolconv 始于一个简单的观察：大多数「免费」在线 PDF 工具实际上会将你的文件上传到他们的服务器，进行远程处理，然后出售你的数据或将功能锁定在高价订阅后面。我们想构建一个更好的替代方案——所有处理都在客户端完成，隐私是架构的核心，强大的 PDF 工具对所有人免费。如今，toolconv 为全球用户提供 20+ 种基于浏览器的 PDF 工具，全部 100% 免费且隐私优先。"
  },
  privacy: {
    title: "隐私政策",
    lastUpdated: "最后更新：2026 年 6 月 1 日",
    intro: "在 toolconv，你的隐私是我们的首要任务。本政策说明你在使用我们服务时我们如何处理你的数据。",
    s1Title: "1. 无数据上传",
    s1Content: "所有 PDF 处理完全在你的浏览器中使用客户端 JavaScript 完成。你的文件永远不会上传到我们的服务器——它们自始至终保留在你的设备上。我们无法在服务器端访问你的文档，也绝不会在你的本地机器之外存储、处理或传输你的文件。",
    s2Title: "2. 无 Cookie（分析除外）",
    s2Content: "我们不在核心网站运营中使用功能性 Cookie。本网站仅使用 Google AdSense 的 Cookie 用于广告个性化和报告。这些是第三方 Cookie，受 Google 隐私政策的约束。你可以通过浏览器设置管理你的 Cookie 偏好。",
    s3Title: "3. 分析与广告",
    s3Content: "本网站使用 Google AdSense，它可能会收集和使用关于你访问的数据（例如浏览的页面和广告互动）来提供相关广告。Google AdSense 使用 Cookie 和类似技术。有关更多信息，请查看 policies.google.com/privacy 上的 Google 隐私政策。我们自身不收集或存储任何个人分析数据——没有服务器日志，没有超过 AdSense 的跟踪脚本，也没有像 Google Analytics 这样的分析平台。",
    s4Title: "4. 无需账号",
    s4Content: "我们不需要用户账号或注册。没有注册过程、没有电子邮件收集、没有用户资料。这意味着我们本质上不会收集关于你的个人身份信息。你对工具的使用是完全匿名的。",
    s5Title: "5. 第三方链接",
    s5Content: "我们的网站可能包含指向第三方网站的链接（例如，兄弟项目 image.toolconv.com 和 unit.toolconv.com，或 Google AdSense 广告）。我们不对这些外部网站的隐私实践负责。我们鼓励你在使用前查看他们的隐私政策。",
    contact: "如果你对本隐私政策有任何疑问，请通过 support@toolconv.com 联系我们。"
  },
  terms: {
    title: "服务条款",
    lastUpdated: "最后更新：2026 年 6 月 1 日",
    intro: "欢迎使用 toolconv。使用我们的网站和工具即表示你同意以下条款。请仔细阅读。",
    s1Title: "1. 免费使用",
    s1Content: "toolconv 上的所有工具均免费提供。无需付费，无需订阅。我们保留将来推出付费功能的权利，但所有现有免费工具将保持免费。",
    s2Title: "2. 隐私承诺",
    s2Content: "你的隐私是我们服务的基石。所有文件处理都在你的浏览器中本地完成。我们无法访问你的文件，也不会存储、处理或传输它们。详情请参阅我们的隐私政策。",
    s3Title: "3. 允许使用",
    s3Content: "你同意仅出于合法目的并根据这些条款使用 toolconv。你不得使用我们的工具处理非法内容、侵犯他人知识产权或试图破坏我们的服务。",
    s4Title: "4. 无担保",
    s4Content: "toolconv 按「现状」提供，不附带任何明示或暗示的担保。虽然我们力求准确和可靠，但无法保证工具无错误或不间断。输出质量可能因输入文件而异。请自行决定使用。",
    s5Title: "5. 责任限制",
    s5Content: "toolconv 及其运营者不对因使用或无法使用我们的工具而产生的任何损害承担责任，包括但不限于数据丢失、业务中断或任何间接损害。我们的全部责任限于适用法律允许的最大范围。",
    s6Title: "6. 联系方式",
    s6Content: "如有关于这些条款的问题，请联系 support@toolconv.com。我们很乐意解答你的任何疑问。"
  },
  contact: {
    title: "联系我们",
    subtitle: "我们很乐意收到你的来信。如有任何问题、建议或反馈，请与我们联系。",
    emailTitle: "📧 邮件支持",
    emailDesc: "如有问题、错误报告或一般咨询：",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 功能建议",
    featureDesc: "有关于新工具或改进的想法？洗耳恭听！向我们发送你的建议，我们将在未来的更新中考虑。",
    responseTitle: "⏱️ 响应时间",
    responseDesc: "我们通常在工作日的 24 小时内回复。我们重视你的时间，会尽快回复你。"
  }
}
};
export default dict;
