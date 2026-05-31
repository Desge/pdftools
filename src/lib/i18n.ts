// ─── i18n: English & Chinese dictionaries ───
// All text strings used across the site. Add more languages by creating new objects.

export type Locale = "en" | "zh";
export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["en", "zh"];

export interface LangDict {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  header: {
    mergePdf: string;
    splitPdf: string;
    compressPdf: string;
    convert: string;
    allTools: string;
  };
  hero: {
    line1: string;
    line2: string;
    subtitle: string;
    ctaMerge: string;
    ctaCompress: string;
    ctaAll: string;
    badgeNoUpload: string;
    badgeFree: string;
    badgeNoReg: string;
    badgeOffline: string;
  };
  tools: {
    heading: string;
    countLabel: (n: number) => string;
  };
  toolPage: {
    breadcrumbHome: string;
    howItWorks: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    faqHeading: string;
    relatedTools: string;
  };
  workspace: {
    privacyBadge: string;
    processing: string;
    done: string;
    downloadAll: (n: number) => string;
    downloadAgain: string;
    startOver: string;
    error: string;
    tryAgain: string;
    selected: (n: number) => string;
    clear: string;
    processFiles: string;
    previewOnly: string;
    previewWarning: string;
    selectHint: string;
    comingSoon: string;
    pages: string;
    mb: string;
    kb: string;
    loadingFiles: string;
    unexpectedError: string;
  };
  home: {
    breadcrumbHome: string;
  };
  convert: {
    converter: string;
    free: string;
    noUpload: string;
    subtitle: (from: string, to: string) => string;
    browserBased: string;
    experimental: string;
    comingSoon: string;
    comingSoonDesc: string;
    about: (from: string, to: string) => string;
    category: string;
    mime: string;
    faqIsFree: (from: string, to: string) => string;
    faqIsFreeAns: string;
    faqQuality: string;
    faqQualityAns4: string;
    faqQualityAns3: string;
    faqQualityAns2: string;
    quality: string;
    relatedConversions: string;
  };
  category: Record<string, [string, string]>;
  footer: {
    product: string;
    popularTools: string;
    convert: string;
    company: string;
    privacy: string;
    privacyLine: string;
  };
}

// ─── English ───
const en: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Free Online PDF Tools",
    description: "Free online PDF tools that run entirely in your browser. Merge, split, compress, convert, and edit PDFs — no upload, no sign-up, 100% private.",
  },
  header: {
    mergePdf: "Merge PDF",
    splitPdf: "Split PDF",
    compressPdf: "Compress PDF",
    convert: "Convert",
    allTools: "All Tools",
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
    badgeOffline: "Works offline",
  },
  tools: {
    heading: "All PDF Tools",
    countLabel: (n) => `${n} tool${n !== 1 ? "s" : ""} available — pick one to get started`,
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
    relatedTools: "Related Tools",
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
  },
  home: {
    breadcrumbHome: "Home",
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
    relatedConversions: "Related Conversions",
  },
  category: {},
  footer: {
    product: "Product",
    popularTools: "Popular Tools",
    convert: "Convert",
    company: "Company",
    privacy: "Privacy",
    privacyLine: "All PDF processing happens entirely in your browser. Your files are never uploaded to any server.",
  },
};

// ─── 中文 ───
const zh: LangDict = {
  site: {
    name: "toolconv",
    tagline: "免费在线 PDF 工具",
    description: "完全免费的在线 PDF 工具，所有处理均在浏览器中完成。合并、拆分、压缩、转换、编辑 PDF — 无需上传、无需注册、100% 保护隐私。",
  },
  header: {
    mergePdf: "合并 PDF",
    splitPdf: "拆分 PDF",
    compressPdf: "压缩 PDF",
    convert: "格式转换",
    allTools: "全部工具",
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
    badgeOffline: "离线可用",
  },
  tools: {
    heading: "全部 PDF 工具",
    countLabel: (n) => `共 ${n} 个工具可用 — 点击开始使用`,
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
    relatedTools: "相关工具",
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
    previewWarning: "⚠️ 此工具处于预览模式，完整功能即将上线。",
    selectHint: "请在上方选择文件开始使用。",
    comingSoon: "🚧 此工具即将上线，文件处理基础架构已就绪。",
    pages: "页",
    mb: "MB",
    kb: "KB",
    loadingFiles: "正在加载文件...",
    unexpectedError: "发生意外错误。",
  },
  home: {
    breadcrumbHome: "首页",
  },
  convert: {
    converter: "转换器",
    free: "免费在线",
    noUpload: "无需上传 — 所有处理均在浏览器中完成",
    subtitle: (from, to) => `将 ${from} (${from.toUpperCase()}) 格式在线免费转换为 ${to} (${to.toUpperCase()})，`,
    browserBased: "浏览器端",
    experimental: "实验性",
    comingSoon: "⚠️ 即将上线",
    comingSoonDesc: "此转换类型需要服务端处理，将在后续版本中上线。敬请期待！",
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
    relatedConversions: "相关转换",
  },
  category: {},
  footer: {
    product: "产品",
    popularTools: "热门工具",
    convert: "格式转换",
    company: "公司",
    privacy: "隐私",
    privacyLine: "所有 PDF 处理均在浏览器中完成。你的文件永远不会上传到任何服务器。100% 隐私保护。",
  },
};

// ─── Dictionary map ───
const dicts: Record<Locale, LangDict> = { en, zh };

/** Get the dictionary for a locale. Falls back to English. */
export function t(locale: string): LangDict {
  return dicts[locale as Locale] ?? dicts.en;
}

/** Get locale from path prefix */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(seg as Locale) ? (seg as Locale) : DEFAULT_LOCALE;
}
