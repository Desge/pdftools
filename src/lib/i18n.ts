// ─── i18n: English & Chinese dictionaries ───
// All text strings used across the site. Add more languages by creating new objects.

export type Locale = "en" | "zh" | "ja" | "ko" | "es" | "fr" | "de" | "pt" | "ru" | "ar" | "hi" | "it";
export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["en", "zh", "ja", "ko", "es", "fr", "de", "pt", "ru", "ar", "hi", "it"];

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
    faqQFree: string;
    faqAFree: string;
    faqQSafe: string;
    faqASafe: string;
    faqQSignup: string;
    faqASignup: string;
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
    faqQFree: "Is this tool free to use?",
    faqAFree: "Yes, this tool is 100% free to use. No sign-up, no limits, and no hidden fees. All processing happens locally in your browser — nothing is ever uploaded.",
    faqQSafe: "Is my file safe?",
    faqASafe: "Your files never leave your device. All processing is done locally in your browser using client-side JavaScript. Your files are never uploaded to any server, so your privacy is completely protected.",
    faqQSignup: "Do I need to create an account?",
    faqASignup: "No sign-up required. You can use this tool immediately without creating an account or providing any personal information.",
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
    faqQFree: "这个工具免费吗？",
    faqAFree: "是的，这个工具完全免费使用。无需注册、没有限制、也无任何隐藏费用。所有处理均在浏览器中本地完成 — 绝不会上传任何内容。",
    faqQSafe: "我的文件安全吗？",
    faqASafe: "你的文件永远不会离开你的设备。所有处理均在你的浏览器中使用客户端 JavaScript 本地完成。文件永远不会上传到任何服务器，你的隐私得到完全保护。",
    faqQSignup: "需要注册账号吗？",
    faqASignup: "无需注册。你可以立即使用此工具，无需创建账号或提供任何个人信息。",
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

// ─── 日本語 ───
const ja: LangDict = {
  site: {
    name: "toolconv",
    tagline: "無料オンライン PDF ツール",
    description: "完全無料のオンライン PDF ツール。すべての処理はブラウザ内で実行されます。PDF の結合、分割、圧縮、変換、編集 — アップロード不要、サインアップ不要、100％プライベート。",
  },
  header: {
    mergePdf: "PDF を結合",
    splitPdf: "PDF を分割",
    compressPdf: "PDF を圧縮",
    convert: "変換",
    allTools: "すべてのツール",
  },
  hero: {
    line1: "必要なPDFツールがすべて、",
    line2: "あなたのブラウザに",
    subtitle: "すべてのツールは100％無料です。アップロード不要、サインアップ不要、制限なし。ファイルがデバイスから送信されることはありません — すべての処理はブラウザ上でローカルに実行され、最大限のプライバシーを保ちます。",
    ctaMerge: "PDF を結合 →",
    ctaCompress: "PDF を圧縮",
    ctaAll: "すべてのツール ↓",
    badgeNoUpload: "ファイルアップロード不要",
    badgeFree: "100％無料",
    badgeNoReg: "登録不要",
    badgeOffline: "オフラインでも動作",
  },
  tools: {
    heading: "すべての PDF ツール",
    countLabel: (n) => `${n}個のツールが利用可能 — 選択して開始してください`,
  },
  toolPage: {
    breadcrumbHome: "ホーム",
    howItWorks: "使い方",
    step1Title: "ファイルを選択",
    step1Desc: "ファイルをドラッグ＆ドロップするか、クリックして参照します。",
    step2Title: "ローカルで処理",
    step2Desc: "ブラウザがクライアントサイド JavaScript を使用してファイルを処理します。何もアップロードされません。",
    step3Title: "結果をダウンロード",
    step3Desc: "処理済みファイルを即座に取得。元のファイルは変更されません。",
    faqHeading: "よくある質問",
    faqQFree: "このツールは無料で使えますか？",
    faqAFree: "はい、このツールは完全に無料で使用できます。サインアップ不要、制限なし、隠れた料金もありません。すべての処理はブラウザ上でローカルに実行され、何もアップロードされません。",
    faqQSafe: "ファイルは安全ですか？",
    faqASafe: "ファイルがデバイスから送信されることはありません。すべての処理はブラウザ上でクライアントサイド JavaScript を使用してローカルに実行されます。ファイルがサーバーにアップロードされることはないため、プライバシーは完全に保護されています。",
    faqQSignup: "アカウントを作成する必要がありますか？",
    faqASignup: "サインアップは不要です。アカウントを作成したり個人情報を提供したりすることなく、すぐにこのツールを使用できます。",
    relatedTools: "関連ツール",
  },
  workspace: {
    privacyBadge: "ファイルはデバイス上に留まります — アップロードなし",
    processing: "処理中...",
    done: "完了！",
    downloadAll: (n) => `すべてダウンロード (${n}ファイル)`,
    downloadAgain: "再ダウンロード",
    startOver: "最初からやり直す",
    error: "エラー",
    tryAgain: "再試行",
    selected: (n) => `選択中 (${n}ファイル)`,
    clear: "クリア",
    processFiles: "ファイルを処理",
    previewOnly: "試用 (プレビュー)",
    previewWarning: "⚠️ このツールはプレビューモードです。近日中に完全実装がリリースされます。",
    selectHint: "上のファイルを選択して開始してください。",
    comingSoon: "🚧 このツールの実装は準備中です。ファイル処理基盤は既に整っています。",
    pages: "ページ",
    mb: "MB",
    kb: "KB",
    loadingFiles: "ファイルを読み込み中...",
    unexpectedError: "予期しないエラーが発生しました。",
  },
  home: {
    breadcrumbHome: "ホーム",
  },
  convert: {
    converter: "コンバーター",
    free: "無料オンライン",
    noUpload: "アップロード不要 — すべての処理はブラウザ内で行われます",
    subtitle: (from, to) => `${from} (${from.toUpperCase()}) ファイルを ${to} (${to.toUpperCase()}) 形式に無料でオンライン変換、` ,
    browserBased: "ブラウザベース",
    experimental: "実験的",
    comingSoon: "⚠️ 近日公開",
    comingSoonDesc: "この変換タイプはサーバー側の処理が必要なため、今後のアップデートで利用可能になります。お楽しみに！",
    about: (from, to) => `${from} と ${to} について`,
    category: "カテゴリ",
    mime: "MIME",
    faqIsFree: (from, to) => `この ${from} から ${to} へのコンバーターは無料ですか？`,
    faqIsFreeAns: "は完全に無料で使用できます。サインアップ不要、制限なし。",
    faqQuality: "品質は保持されますか？",
    faqQualityAns4: "はい、当社の変換は優れた品質を維持します。出力は元のファイルに非常に近いものになります。",
    faqQualityAns3: "品質は概ね良好ですが、複雑なフォーマットは簡略化される場合があります。",
    faqQualityAns2: "この変換タイプには制限があります。出力を確認することをお勧めします。",
    quality: "品質",
    relatedConversions: "関連変換",
  },
  category: {},
  footer: {
    product: "製品",
    popularTools: "人気のツール",
    convert: "変換",
    company: "会社",
    privacy: "プライバシー",
    privacyLine: "すべての PDF 処理はブラウザ内で完全に実行されます。ファイルがサーバーにアップロードされることはありません。",
  },
};

// ─── 한국어 ───
const ko: LangDict = {
  site: {
    name: "toolconv",
    tagline: "무료 온라인 PDF 도구",
    description: "브라우저에서 완전히 실행되는 무료 온라인 PDF 도구입니다. PDF 병합, 분할, 압축, 변환 및 편집 — 업로드 불필요, 가입 불필요, 100% 비공개.",
  },
  header: {
    mergePdf: "PDF 병합",
    splitPdf: "PDF 분할",
    compressPdf: "PDF 압축",
    convert: "변환",
    allTools: "모든 도구",
  },
  hero: {
    line1: "필요한 모든 PDF 도구를,",
    line2: "브라우저에서 바로",
    subtitle: "모든 도구는 100% 무료입니다. 업로드 불필요, 가입 불필요, 제한 없음. 파일이 기기를 떠나지 않습니다 — 모든 처리가 브라우저에서 로컬로 실행되어 최대한의 프라이버시를 보장합니다.",
    ctaMerge: "PDF 병합 →",
    ctaCompress: "PDF 압축",
    ctaAll: "모든 도구 ↓",
    badgeNoUpload: "파일 업로드 불필요",
    badgeFree: "100% 무료",
    badgeNoReg: "회원가입 불필요",
    badgeOffline: "오프라인 작동",
  },
  tools: {
    heading: "모든 PDF 도구",
    countLabel: (n) => `${n}개 도구 사용 가능 — 선택하여 시작하세요`,
  },
  toolPage: {
    breadcrumbHome: "홈",
    howItWorks: "사용 방법",
    step1Title: "파일 선택",
    step1Desc: "파일을 드래그 앤 드롭하거나 클릭하여 찾아보세요.",
    step2Title: "로컬에서 처리",
    step2Desc: "브라우저가 클라이언트 측 JavaScript를 사용하여 파일을 처리합니다. 업로드되는 데이터는 없습니다.",
    step3Title: "결과 다운로드",
    step3Desc: "처리된 파일을 즉시 다운로드하세요. 원본 파일은 그대로 유지됩니다.",
    faqHeading: "자주 묻는 질문",
    faqQFree: "이 도구는 무료인가요?",
    faqAFree: "네, 이 도구는 100% 무료로 사용할 수 있습니다. 가입 불필요, 제한 없음, 숨은 비용도 없습니다. 모든 처리는 브라우저에서 로컬로 실행되며 어떤 것도 업로드되지 않습니다.",
    faqQSafe: "내 파일은 안전한가요?",
    faqASafe: "파일이 기기를 떠나지 않습니다. 모든 처리는 브라우저에서 클라이언트 측 JavaScript를 사용하여 로컬로 수행됩니다. 파일이 서버에 업로드되지 않으므로 개인정보가 완전히 보호됩니다.",
    faqQSignup: "계정을 만들어야 하나요?",
    faqASignup: "가입이 필요하지 않습니다. 계정을 만들거나 개인 정보를 제공할 필요 없이 즉시 이 도구를 사용할 수 있습니다.",
    relatedTools: "관련 도구",
  },
  workspace: {
    privacyBadge: "파일이 기기에 그대로 유지됩니다 — 업로드 없음",
    processing: "처리 중...",
    done: "완료!",
    downloadAll: (n) => `모두 다운로드 (${n}개 파일)`,
    downloadAgain: "다시 다운로드",
    startOver: "처음부터 다시",
    error: "오류",
    tryAgain: "다시 시도",
    selected: (n) => `선택됨 (${n}개 파일)`,
    clear: "지우기",
    processFiles: "파일 처리",
    previewOnly: "사용해보기 (미리보기)",
    previewWarning: "⚠️ 이 도구는 미리보기 모드입니다. 전체 구현이 곧 제공됩니다.",
    selectHint: "위에서 파일을 선택하여 시작하세요.",
    comingSoon: "🚧 이 도구의 구현이 곧 제공됩니다. 파일 처리 인프라는 준비되어 있습니다.",
    pages: "페이지",
    mb: "MB",
    kb: "KB",
    loadingFiles: "파일 로딩 중...",
    unexpectedError: "예기치 않은 오류가 발생했습니다.",
  },
  home: {
    breadcrumbHome: "홈",
  },
  convert: {
    converter: "변환기",
    free: "무료 온라인",
    noUpload: "업로드 불필요 — 모든 처리는 브라우저에서 이루어집니다",
    subtitle: (from, to) => `${from} (${from.toUpperCase()}) 파일을 ${to} (${to.toUpperCase()}) 형식으로 무료 온라인 변환,` ,
    browserBased: "브라우저 기반",
    experimental: "실험적",
    comingSoon: "⚠️ 곧 제공",
    comingSoonDesc: "이 변환 유형은 서버 측 처리가 필요하며 향후 업데이트에서 사용할 수 있습니다. 기대해 주세요!",
    about: (from, to) => `${from} 및 ${to} 정보`,
    category: "카테고리",
    mime: "MIME",
    faqIsFree: (from, to) => `이 ${from}에서 ${to}로의 변환기는 무료인가요?`,
    faqIsFreeAns: "는 완전히 무료로 사용할 수 있습니다. 가입 불필요, 제한 없음.",
    faqQuality: "품질이 유지되나요?",
    faqQualityAns4: "네, 당사의 변환은 우수한 품질을 유지합니다. 출력물이 원본과 매우 유사합니다.",
    faqQualityAns3: "품질은 일반적으로 좋지만 복잡한 서식은 단순화될 수 있습니다.",
    faqQualityAns2: "이 변환 유형에는 제한 사항이 있습니다. 출력을 확인하는 것이 좋습니다.",
    quality: "품질",
    relatedConversions: "관련 변환",
  },
  category: {},
  footer: {
    product: "제품",
    popularTools: "인기 도구",
    convert: "변환",
    company: "회사",
    privacy: "개인정보",
    privacyLine: "모든 PDF 처리는 브라우저에서 완전히 이루어집니다. 파일이 서버에 업로드되지 않습니다.",
  },
};

// ─── Español ───
const es: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Herramientas PDF gratuitas en línea",
    description: "Herramientas PDF en línea gratuitas que se ejecutan completamente en su navegador. Combine, divida, comprima, convierta y edite PDF — sin carga, sin registro, 100% privado.",
  },
  header: {
    mergePdf: "Combinar PDF",
    splitPdf: "Dividir PDF",
    compressPdf: "Comprimir PDF",
    convert: "Convertir",
    allTools: "Todas las herramientas",
  },
  hero: {
    line1: "Todas las herramientas PDF que necesitas,",
    line2: "directamente en tu navegador",
    subtitle: "Todas las herramientas son 100% gratuitas. Sin carga, sin registro, sin límites. Tus archivos nunca salen de tu dispositivo — todo se ejecuta localmente en tu navegador para máxima privacidad.",
    ctaMerge: "Combinar PDF →",
    ctaCompress: "Comprimir PDF",
    ctaAll: "Todas las herramientas ↓",
    badgeNoUpload: "Sin carga de archivos",
    badgeFree: "100% Gratuito",
    badgeNoReg: "Sin registro",
    badgeOffline: "Funciona sin conexión",
  },
  tools: {
    heading: "Todas las herramientas PDF",
    countLabel: (n) => `${n} herramienta${n !== 1 ? "s" : ""} disponible${n !== 1 ? "s" : ""} — elige una para empezar`,
  },
  toolPage: {
    breadcrumbHome: "Inicio",
    howItWorks: "Cómo funciona",
    step1Title: "Seleccionar archivos",
    step1Desc: "Arrastra y suelta tus archivos o haz clic para explorar.",
    step2Title: "Procesar localmente",
    step2Desc: "Tu navegador procesa los archivos usando JavaScript del lado del cliente. No se sube nada.",
    step3Title: "Descargar resultado",
    step3Desc: "Obtén tu archivo procesado al instante. Tus archivos originales permanecen sin cambios.",
    faqHeading: "Preguntas frecuentes",
    faqQFree: "¿Esta herramienta es gratuita?",
    faqAFree: "Sí, esta herramienta es 100% gratuita. Sin registro, sin límites y sin cargos ocultos. Todo el procesamiento ocurre localmente en tu navegador — nunca se sube nada.",
    faqQSafe: "¿Mi archivo está seguro?",
    faqASafe: "Tus archivos nunca salen de tu dispositivo. Todo el procesamiento se realiza localmente en tu navegador usando JavaScript del lado del cliente. Tus archivos nunca se suben a ningún servidor, por lo que tu privacidad está completamente protegida.",
    faqQSignup: "¿Necesito crear una cuenta?",
    faqASignup: "No se requiere registro. Puedes usar esta herramienta inmediatamente sin crear una cuenta ni proporcionar información personal.",
    relatedTools: "Herramientas relacionadas",
  },
  workspace: {
    privacyBadge: "Tus archivos permanecen en tu dispositivo — sin carga",
    processing: "Procesando...",
    done: "¡Listo!",
    downloadAll: (n) => `Descargar todo (${n} archivo${n !== 1 ? "s" : ""})`,
    downloadAgain: "Descargar de nuevo",
    startOver: "Empezar de nuevo",
    error: "Error",
    tryAgain: "Intentar de nuevo",
    selected: (n) => `Seleccionado (${n} archivo${n !== 1 ? "s" : ""})`,
    clear: "Limpiar",
    processFiles: "Procesar archivos",
    previewOnly: "Probar (Vista previa)",
    previewWarning: "⚠️ Esta herramienta está en modo de vista previa. La implementación completa llegará pronto.",
    selectHint: "Selecciona archivos arriba para empezar.",
    comingSoon: "🚧 La implementación de esta herramienta llegará pronto. La infraestructura de manejo de archivos está lista.",
    pages: "páginas",
    mb: "MB",
    kb: "KB",
    loadingFiles: "Cargando archivos...",
    unexpectedError: "Ocurrió un error inesperado.",
  },
  home: {
    breadcrumbHome: "Inicio",
  },
  convert: {
    converter: "Convertidor",
    free: "Gratuito en línea",
    noUpload: "sin carga requerida — todo el procesamiento ocurre en tu navegador",
    subtitle: (from, to) => `Convierta archivos ${from} (${from.toUpperCase()}) a formato ${to} (${to.toUpperCase()}) en línea, gratis y` ,
    browserBased: "Basado en navegador",
    experimental: "Experimental",
    comingSoon: "⚠️ Próximamente",
    comingSoonDesc: "Este tipo de conversión requiere procesamiento del lado del servidor y estará disponible en una futura actualización. ¡Mantente atento!",
    about: (from, to) => `Acerca de ${from} y ${to}`,
    category: "Categoría",
    mime: "MIME",
    faqIsFree: (from, to) => `¿Este convertidor de ${from} a ${to} es gratuito?`,
    faqIsFreeAns: "es completamente gratuito. Sin registro, sin límites.",
    faqQuality: "¿Se conservará la calidad?",
    faqQualityAns4: "Sí, nuestra conversión mantiene una calidad excelente. El resultado será muy similar al original.",
    faqQualityAns3: "La calidad generalmente es buena, aunque los formatos complejos pueden simplificarse.",
    faqQualityAns2: "Este tipo de conversión tiene limitaciones. Recomendamos verificar el resultado.",
    quality: "Calidad",
    relatedConversions: "Conversiones relacionadas",
  },
  category: {},
  footer: {
    product: "Producto",
    popularTools: "Herramientas populares",
    convert: "Convertir",
    company: "Empresa",
    privacy: "Privacidad",
    privacyLine: "Todo el procesamiento de PDF ocurre completamente en tu navegador. Tus archivos nunca se suben a ningún servidor.",
  },
};

// ─── Français ───
const fr: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Outils PDF gratuits en ligne",
    description: "Des outils PDF en ligne gratuits qui fonctionnent entièrement dans votre navigateur. Fusionnez, divisez, compressez, convertissez et éditez des PDF — sans téléchargement, sans inscription, 100% privé.",
  },
  header: {
    mergePdf: "Fusionner PDF",
    splitPdf: "Diviser PDF",
    compressPdf: "Compresser PDF",
    convert: "Convertir",
    allTools: "Tous les outils",
  },
  hero: {
    line1: "Tous les outils PDF dont vous avez besoin,",
    line2: "directement dans votre navigateur",
    subtitle: "Tous les outils sont 100% gratuits. Pas de téléchargement, pas d'inscription, pas de limites. Vos fichiers ne quittent jamais votre appareil — tout s'exécute localement dans votre navigateur pour une confidentialité maximale.",
    ctaMerge: "Fusionner PDF →",
    ctaCompress: "Compresser PDF",
    ctaAll: "Tous les outils ↓",
    badgeNoUpload: "Aucun fichier à télécharger",
    badgeFree: "100% Gratuit",
    badgeNoReg: "Aucune inscription",
    badgeOffline: "Fonctionne hors ligne",
  },
  tools: {
    heading: "Tous les outils PDF",
    countLabel: (n) => `${n} outil${n !== 1 ? "s" : ""} disponible${n !== 1 ? "s" : ""} — choisissez-en un pour commencer`,
  },
  toolPage: {
    breadcrumbHome: "Accueil",
    howItWorks: "Comment ça fonctionne",
    step1Title: "Sélectionner des fichiers",
    step1Desc: "Glissez-déposez vos fichiers ou cliquez pour parcourir.",
    step2Title: "Traiter localement",
    step2Desc: "Votre navigateur traite les fichiers en utilisant JavaScript côté client. Rien n'est téléchargé.",
    step3Title: "Télécharger le résultat",
    step3Desc: "Obtenez votre fichier traité instantanément. Vos fichiers originaux restent inchangés.",
    faqHeading: "Questions fréquentes",
    faqQFree: "Cet outil est-il gratuit ?",
    faqAFree: "Oui, cet outil est 100% gratuit. Pas d'inscription, pas de limites et pas de frais cachés. Tout le traitement se fait localement dans votre navigateur — rien n'est jamais téléchargé.",
    faqQSafe: "Mon fichier est-il en sécurité ?",
    faqASafe: "Vos fichiers ne quittent jamais votre appareil. Tout le traitement est effectué localement dans votre navigateur à l'aide de JavaScript côté client. Vos fichiers ne sont jamais téléchargés sur un serveur, votre confidentialité est donc totalement protégée.",
    faqQSignup: "Dois-je créer un compte ?",
    faqASignup: "Aucune inscription requise. Vous pouvez utiliser cet outil immédiatement sans créer de compte ni fournir d'informations personnelles.",
    relatedTools: "Outils associés",
  },
  workspace: {
    privacyBadge: "Vos fichiers restent sur votre appareil — pas de téléchargement",
    processing: "Traitement en cours...",
    done: "Terminé !",
    downloadAll: (n) => `Tout télécharger (${n} fichier${n !== 1 ? "s" : ""})`,
    downloadAgain: "Télécharger à nouveau",
    startOver: "Recommencer",
    error: "Erreur",
    tryAgain: "Réessayer",
    selected: (n) => `Sélectionné (${n} fichier${n !== 1 ? "s" : ""})`,
    clear: "Effacer",
    processFiles: "Traiter les fichiers",
    previewOnly: "Essayer (Aperçu)",
    previewWarning: "⚠️ Cet outil est en mode aperçu. L'implémentation complète arrive bientôt.",
    selectHint: "Sélectionnez des fichiers ci-dessus pour commencer.",
    comingSoon: "🚧 L'implémentation de cet outil arrive bientôt. L'infrastructure de gestion des fichiers est prête.",
    pages: "pages",
    mb: "Mo",
    kb: "Ko",
    loadingFiles: "Chargement des fichiers...",
    unexpectedError: "Une erreur inattendue s'est produite.",
  },
  home: {
    breadcrumbHome: "Accueil",
  },
  convert: {
    converter: "Convertisseur",
    free: "Gratuit en ligne",
    noUpload: "aucun téléchargement requis — tout le traitement se fait dans votre navigateur",
    subtitle: (from, to) => `Convertissez des fichiers ${from} (${from.toUpperCase()}) au format ${to} (${to.toUpperCase()}) en ligne, gratuitement et` ,
    browserBased: "Basé sur le navigateur",
    experimental: "Expérimental",
    comingSoon: "⚠️ Bientôt disponible",
    comingSoonDesc: "Ce type de conversion nécessite un traitement côté serveur et sera disponible dans une future mise à jour. Restez à l'écoute !",
    about: (from, to) => `À propos de ${from} et ${to}`,
    category: "Catégorie",
    mime: "MIME",
    faqIsFree: (from, to) => `Ce convertisseur de ${from} vers ${to} est-il gratuit ?`,
    faqIsFreeAns: "est complètement gratuit. Pas d'inscription, pas de limites.",
    faqQuality: "La qualité sera-t-elle préservée ?",
    faqQualityAns4: "Oui, notre conversion maintient une excellente qualité. Le résultat sera très proche de l'original.",
    faqQualityAns3: "La qualité est généralement bonne, bien que les formats complexes puissent être simplifiés.",
    faqQualityAns2: "Ce type de conversion a des limites. Nous vous recommandons de vérifier le résultat.",
    quality: "Qualité",
    relatedConversions: "Conversions associées",
  },
  category: {},
  footer: {
    product: "Produit",
    popularTools: "Outils populaires",
    convert: "Convertir",
    company: "Société",
    privacy: "Confidentialité",
    privacyLine: "Tout le traitement PDF se fait entièrement dans votre navigateur. Vos fichiers ne sont jamais téléchargés sur un serveur.",
  },
};

// ─── Deutsch ───
const de: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Kostenlose Online-PDF-Tools",
    description: "Kostenlose Online-PDF-Tools, die vollständig in Ihrem Browser laufen. PDFs zusammenführen, teilen, komprimieren, konvertieren und bearbeiten — kein Hochladen, keine Anmeldung, 100% privat.",
  },
  header: {
    mergePdf: "PDF zusammenführen",
    splitPdf: "PDF teilen",
    compressPdf: "PDF komprimieren",
    convert: "Konvertieren",
    allTools: "Alle Tools",
  },
  hero: {
    line1: "Jedes PDF-Tool, das Sie brauchen,",
    line2: "direkt in Ihrem Browser",
    subtitle: "Alle Tools sind 100% kostenlos. Kein Hochladen, keine Anmeldung, keine Grenzen. Ihre Dateien verlassen niemals Ihr Gerät — alles läuft lokal in Ihrem Browser für maximale Privatsphäre.",
    ctaMerge: "PDF zusammenführen →",
    ctaCompress: "PDF komprimieren",
    ctaAll: "Alle Tools ↓",
    badgeNoUpload: "Kein Datei-Upload",
    badgeFree: "100% Kostenlos",
    badgeNoReg: "Keine Registrierung",
    badgeOffline: "Funktioniert offline",
  },
  tools: {
    heading: "Alle PDF-Tools",
    countLabel: (n) => `${n} Tool${n !== 1 ? "s" : ""} verfügbar — wählen Sie eines aus, um zu starten`,
  },
  toolPage: {
    breadcrumbHome: "Startseite",
    howItWorks: "So funktioniert es",
    step1Title: "Dateien auswählen",
    step1Desc: "Ziehen Sie Ihre Dateien per Drag & Drop oder klicken Sie zum Durchsuchen.",
    step2Title: "Lokal verarbeiten",
    step2Desc: "Ihr Browser verarbeitet die Dateien mit clientseitigem JavaScript. Nichts wird hochgeladen.",
    step3Title: "Ergebnis herunterladen",
    step3Desc: "Erhalten Sie Ihre verarbeitete Datei sofort. Ihre Originaldateien bleiben unverändert.",
    faqHeading: "Häufig gestellte Fragen",
    faqQFree: "Ist dieses Tool kostenlos nutzbar?",
    faqAFree: "Ja, dieses Tool ist 100% kostenlos nutzbar. Keine Anmeldung, keine Grenzen und keine versteckten Gebühren. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser — es wird niemals etwas hochgeladen.",
    faqQSafe: "Ist meine Datei sicher?",
    faqASafe: "Ihre Dateien verlassen niemals Ihr Gerät. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser mit clientseitigem JavaScript. Ihre Dateien werden niemals auf einen Server hochgeladen, sodass Ihre Privatsphäre vollständig geschützt ist.",
    faqQSignup: "Muss ich ein Konto erstellen?",
    faqASignup: "Keine Anmeldung erforderlich. Sie können dieses Tool sofort nutzen, ohne ein Konto zu erstellen oder persönliche Daten anzugeben.",
    relatedTools: "Verwandte Tools",
  },
  workspace: {
    privacyBadge: "Ihre Dateien bleiben auf Ihrem Gerät — kein Upload",
    processing: "Verarbeitung...",
    done: "Fertig!",
    downloadAll: (n) => `Alle herunterladen (${n} Datei${n !== 1 ? "en" : ""})`,
    downloadAgain: "Erneut herunterladen",
    startOver: "Neu beginnen",
    error: "Fehler",
    tryAgain: "Erneut versuchen",
    selected: (n) => `Ausgewählt (${n} Datei${n !== 1 ? "en" : ""})`,
    clear: "Löschen",
    processFiles: "Dateien verarbeiten",
    previewOnly: "Testen (Vorschau)",
    previewWarning: "⚠️ Dieses Tool ist im Vorschaumodus. Die vollständige Implementierung kommt bald.",
    selectHint: "Wählen Sie oben Dateien aus, um zu starten.",
    comingSoon: "🚧 Die Implementierung dieses Tools kommt bald. Die Dateiverarbeitungs-Infrastruktur ist bereit.",
    pages: "Seiten",
    mb: "MB",
    kb: "KB",
    loadingFiles: "Dateien werden geladen...",
    unexpectedError: "Ein unerwarteter Fehler ist aufgetreten.",
  },
  home: {
    breadcrumbHome: "Startseite",
  },
  convert: {
    converter: "Konverter",
    free: "Kostenlos online",
    noUpload: "kein Upload erforderlich — die gesamte Verarbeitung erfolgt in Ihrem Browser",
    subtitle: (from, to) => `Konvertieren Sie ${from} (${from.toUpperCase()})-Dateien in das ${to} (${to.toUpperCase()})-Format online, kostenlos und` ,
    browserBased: "Browserbasiert",
    experimental: "Experimentell",
    comingSoon: "⚠️ Bald verfügbar",
    comingSoonDesc: "Dieser Konvertierungstyp erfordert serverseitige Verarbeitung und wird in einem zukünftigen Update verfügbar sein. Bleiben Sie dran!",
    about: (from, to) => `Über ${from} und ${to}`,
    category: "Kategorie",
    mime: "MIME",
    faqIsFree: (from, to) => `Ist dieser ${from}-zu-${to}-Konverter kostenlos?`,
    faqIsFreeAns: "ist völlig kostenlos nutzbar. Keine Anmeldung, keine Grenzen.",
    faqQuality: "Wird die Qualität erhalten bleiben?",
    faqQualityAns4: "Ja, unsere Konvertierung erhält eine ausgezeichnete Qualität. Die Ausgabe wird dem Original sehr nahe kommen.",
    faqQualityAns3: "Die Qualität ist im Allgemeinen gut, obwohl komplexe Formatierungen vereinfacht werden können.",
    faqQualityAns2: "Dieser Konvertierungstyp hat Einschränkungen. Wir empfehlen, die Ausgabe zu überprüfen.",
    quality: "Qualität",
    relatedConversions: "Verwandte Konvertierungen",
  },
  category: {},
  footer: {
    product: "Produkt",
    popularTools: "Beliebte Tools",
    convert: "Konvertieren",
    company: "Unternehmen",
    privacy: "Datenschutz",
    privacyLine: "Die gesamte PDF-Verarbeitung erfolgt vollständig in Ihrem Browser. Ihre Dateien werden niemals auf einen Server hochgeladen.",
  },
};

// ─── Português ───
const pt: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Ferramentas PDF gratuitas online",
    description: "Ferramentas PDF online gratuitas que funcionam inteiramente no seu navegador. Mescle, divida, comprima, converta e edite PDFs — sem upload, sem cadastro, 100% privado.",
  },
  header: {
    mergePdf: "Mesclar PDF",
    splitPdf: "Dividir PDF",
    compressPdf: "Comprimir PDF",
    convert: "Converter",
    allTools: "Todas as ferramentas",
  },
  hero: {
    line1: "Todas as ferramentas PDF que você precisa,",
    line2: "direto no seu navegador",
    subtitle: "Todas as ferramentas são 100% gratuitas. Sem upload, sem cadastro, sem limites. Seus arquivos nunca saem do seu dispositivo — tudo é executado localmente no seu navegador para máxima privacidade.",
    ctaMerge: "Mesclar PDF →",
    ctaCompress: "Comprimir PDF",
    ctaAll: "Todas as ferramentas ↓",
    badgeNoUpload: "Sem upload de arquivos",
    badgeFree: "100% Gratuito",
    badgeNoReg: "Sem registro",
    badgeOffline: "Funciona offline",
  },
  tools: {
    heading: "Todas as ferramentas PDF",
    countLabel: (n) => `${n} ferramenta${n !== 1 ? "s" : ""} disponíve${n !== 1 ? "is" : "l"} — escolha uma para começar`,
  },
  toolPage: {
    breadcrumbHome: "Início",
    howItWorks: "Como funciona",
    step1Title: "Selecionar arquivos",
    step1Desc: "Arraste e solte seus arquivos ou clique para procurar.",
    step2Title: "Processar localmente",
    step2Desc: "Seu navegador processa os arquivos usando JavaScript do lado do cliente. Nada é enviado.",
    step3Title: "Baixar resultado",
    step3Desc: "Obtenha seu arquivo processado instantaneamente. Seus arquivos originais permanecem inalterados.",
    faqHeading: "Perguntas frequentes",
    faqQFree: "Esta ferramenta é gratuita?",
    faqAFree: "Sim, esta ferramenta é 100% gratuita. Sem cadastro, sem limites e sem taxas ocultas. Todo o processamento acontece localmente no seu navegador — nada é enviado.",
    faqQSafe: "Meu arquivo está seguro?",
    faqASafe: "Seus arquivos nunca saem do seu dispositivo. Todo o processamento é feito localmente no seu navegador usando JavaScript do lado do cliente. Seus arquivos nunca são enviados para nenhum servidor, portanto sua privacidade está completamente protegida.",
    faqQSignup: "Preciso criar uma conta?",
    faqASignup: "Nenhum cadastro é necessário. Você pode usar esta ferramenta imediatamente sem criar uma conta ou fornecer informações pessoais.",
    relatedTools: "Ferramentas relacionadas",
  },
  workspace: {
    privacyBadge: "Seus arquivos permanecem no seu dispositivo — sem upload",
    processing: "Processando...",
    done: "Pronto!",
    downloadAll: (n) => `Baixar tudo (${n} arquivo${n !== 1 ? "s" : ""})`,
    downloadAgain: "Baixar novamente",
    startOver: "Recomeçar",
    error: "Erro",
    tryAgain: "Tentar novamente",
    selected: (n) => `Selecionado (${n} arquivo${n !== 1 ? "s" : ""})`,
    clear: "Limpar",
    processFiles: "Processar arquivos",
    previewOnly: "Experimentar (Prévia)",
    previewWarning: "⚠️ Esta ferramenta está em modo de prévia. A implementação completa chegará em breve.",
    selectHint: "Selecione os arquivos acima para começar.",
    comingSoon: "🚧 A implementação desta ferramenta chegará em breve. A infraestrutura de manipulação de arquivos está pronta.",
    pages: "páginas",
    mb: "MB",
    kb: "KB",
    loadingFiles: "Carregando arquivos...",
    unexpectedError: "Ocorreu um erro inesperado.",
  },
  home: {
    breadcrumbHome: "Início",
  },
  convert: {
    converter: "Conversor",
    free: "Gratuito online",
    noUpload: "sem upload necessário — todo o processamento acontece no seu navegador",
    subtitle: (from, to) => `Converta arquivos ${from} (${from.toUpperCase()}) para o formato ${to} (${to.toUpperCase()}) online, grátis e` ,
    browserBased: "Baseado em navegador",
    experimental: "Experimental",
    comingSoon: "⚠️ Em breve",
    comingSoonDesc: "Este tipo de conversão requer processamento no servidor e estará disponível em uma futura atualização. Fique ligado!",
    about: (from, to) => `Sobre ${from} e ${to}`,
    category: "Categoria",
    mime: "MIME",
    faqIsFree: (from, to) => `Este conversor de ${from} para ${to} é gratuito?`,
    faqIsFreeAns: "é completamente gratuito. Sem cadastro, sem limites.",
    faqQuality: "A qualidade será preservada?",
    faqQualityAns4: "Sim, nossa conversão mantém excelente qualidade. A saída será muito próxima do original.",
    faqQualityAns3: "A qualidade geralmente é boa, embora formatações complexas possam ser simplificadas.",
    faqQualityAns2: "Este tipo de conversão tem limitações. Recomendamos verificar a saída.",
    quality: "Qualidade",
    relatedConversions: "Conversões relacionadas",
  },
  category: {},
  footer: {
    product: "Produto",
    popularTools: "Ferramentas populares",
    convert: "Converter",
    company: "Empresa",
    privacy: "Privacidade",
    privacyLine: "Todo o processamento de PDF acontece inteiramente no seu navegador. Seus arquivos nunca são enviados para nenhum servidor.",
  },
};

// ─── Русский ───
const ru: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Бесплатные онлайн PDF-инструменты",
    description: "Бесплатные онлайн PDF-инструменты, работающие полностью в вашем браузере. Объединяйте, разделяйте, сжимайте, конвертируйте и редактируйте PDF — без загрузки, без регистрации, 100% конфиденциально.",
  },
  header: {
    mergePdf: "Объединить PDF",
    splitPdf: "Разделить PDF",
    compressPdf: "Сжать PDF",
    convert: "Конвертировать",
    allTools: "Все инструменты",
  },
  hero: {
    line1: "Все PDF-инструменты, которые вам нужны,",
    line2: "прямо в вашем браузере",
    subtitle: "Все инструменты 100% бесплатны. Без загрузки, без регистрации, без ограничений. Ваши файлы никогда не покидают ваше устройство — всё выполняется локально в вашем браузере для максимальной конфиденциальности.",
    ctaMerge: "Объединить PDF →",
    ctaCompress: "Сжать PDF",
    ctaAll: "Все инструменты ↓",
    badgeNoUpload: "Без загрузки файлов",
    badgeFree: "100% Бесплатно",
    badgeNoReg: "Без регистрации",
    badgeOffline: "Работает офлайн",
  },
  tools: {
    heading: "Все PDF-инструменты",
    countLabel: (n) => `${n} инструмент${n % 10 === 1 && n % 100 !== 11 ? "" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "а" : "ов"} доступно — выберите, чтобы начать`,
  },
  toolPage: {
    breadcrumbHome: "Главная",
    howItWorks: "Как это работает",
    step1Title: "Выбрать файлы",
    step1Desc: "Перетащите файлы или нажмите, чтобы выбрать.",
    step2Title: "Обработка локально",
    step2Desc: "Ваш браузер обрабатывает файлы с помощью JavaScript на стороне клиента. Ничего не загружается.",
    step3Title: "Скачать результат",
    step3Desc: "Получите обработанный файл мгновенно. Ваши исходные файлы остаются без изменений.",
    faqHeading: "Часто задаваемые вопросы",
    faqQFree: "Этот инструмент бесплатный?",
    faqAFree: "Да, этот инструмент полностью бесплатен. Без регистрации, без ограничений и без скрытых платежей. Вся обработка происходит локально в вашем браузере — ничего никогда не загружается.",
    faqQSafe: "Безопасны ли мои файлы?",
    faqASafe: "Ваши файлы никогда не покидают ваше устройство. Вся обработка выполняется локально в вашем браузере с использованием JavaScript на стороне клиента. Ваши файлы никогда не загружаются на сервер, поэтому ваша конфиденциальность полностью защищена.",
    faqQSignup: "Нужно ли создавать аккаунт?",
    faqASignup: "Регистрация не требуется. Вы можете использовать этот инструмент немедленно без создания учетной записи или предоставления личной информации.",
    relatedTools: "Связанные инструменты",
  },
  workspace: {
    privacyBadge: "Ваши файлы остаются на вашем устройстве — без загрузки",
    processing: "Обработка...",
    done: "Готово!",
    downloadAll: (n) => `Скачать все (${n} файл${n % 10 === 1 && n % 100 !== 11 ? "" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "а" : "ов"})`,
    downloadAgain: "Скачать снова",
    startOver: "Начать заново",
    error: "Ошибка",
    tryAgain: "Попробовать снова",
    selected: (n) => `Выбрано (${n} файл${n % 10 === 1 && n % 100 !== 11 ? "" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "а" : "ов"})`,
    clear: "Очистить",
    processFiles: "Обработать файлы",
    previewOnly: "Попробовать (Предпросмотр)",
    previewWarning: "⚠️ Этот инструмент в режиме предпросмотра. Полная реализация скоро появится.",
    selectHint: "Выберите файлы выше, чтобы начать.",
    comingSoon: "🚧 Реализация этого инструмента скоро появится. Инфраструктура обработки файлов готова.",
    pages: "страниц",
    mb: "МБ",
    kb: "КБ",
    loadingFiles: "Загрузка файлов...",
    unexpectedError: "Произошла неожиданная ошибка.",
  },
  home: {
    breadcrumbHome: "Главная",
  },
  convert: {
    converter: "Конвертер",
    free: "Бесплатно онлайн",
    noUpload: "загрузка не требуется — вся обработка происходит в вашем браузере",
    subtitle: (from, to) => `Конвертируйте файлы ${from} (${from.toUpperCase()}) в формат ${to} (${to.toUpperCase()}) онлайн, бесплатно и` ,
    browserBased: "На основе браузера",
    experimental: "Экспериментальный",
    comingSoon: "⚠️ Скоро",
    comingSoonDesc: "Этот тип конвертации требует серверной обработки и будет доступен в будущем обновлении. Следите за новостями!",
    about: (from, to) => `О ${from} и ${to}`,
    category: "Категория",
    mime: "MIME",
    faqIsFree: (from, to) => `Этот конвертер из ${from} в ${to} бесплатный?`,
    faqIsFreeAns: "полностью бесплатен. Без регистрации, без ограничений.",
    faqQuality: "Сохранится ли качество?",
    faqQualityAns4: "Да, наше преобразование сохраняет отличное качество. Результат будет очень близок к оригиналу.",
    faqQualityAns3: "Качество обычно хорошее, хотя сложное форматирование может быть упрощено.",
    faqQualityAns2: "Этот тип преобразования имеет ограничения. Рекомендуем проверить результат.",
    quality: "Качество",
    relatedConversions: "Связанные преобразования",
  },
  category: {},
  footer: {
    product: "Продукт",
    popularTools: "Популярные инструменты",
    convert: "Конвертировать",
    company: "Компания",
    privacy: "Конфиденциальность",
    privacyLine: "Вся обработка PDF происходит полностью в вашем браузере. Ваши файлы никогда не загружаются на сервер.",
  },
};

// ─── العربية ───
const ar: LangDict = {
  site: {
    name: "toolconv",
    tagline: "أدوات PDF مجانية عبر الإنترنت",
    description: "أدوات PDF مجانية عبر الإنترنت تعمل بالكامل في متصفحك. دمج، تقسيم، ضغط، تحرير وتحويل PDF — بدون رفع، بدون تسجيل، خصوصية 100%.",
  },
  header: {
    mergePdf: "دمج PDF",
    splitPdf: "تقسيم PDF",
    compressPdf: "ضغط PDF",
    convert: "تحويل",
    allTools: "جميع الأدوات",
  },
  hero: {
    line1: "كل أدوات PDF التي تحتاجها،",
    line2: "مباشرة في متصفحك",
    subtitle: "جميع الأدوات مجانية 100%. بدون رفع، بدون تسجيل، بدون حدود. ملفاتك لا تغادر جهازك أبدًا — كل شيء يعمل محليًا في متصفحك لأقصى خصوصية.",
    ctaMerge: "دمج PDF →",
    ctaCompress: "ضغط PDF",
    ctaAll: "جميع الأدوات ↓",
    badgeNoUpload: "بدون رفع ملفات",
    badgeFree: "100% مجاني",
    badgeNoReg: "بدون تسجيل",
    badgeOffline: "يعمل بدون إنترنت",
  },
  tools: {
    heading: "جميع أدوات PDF",
    countLabel: (n) => `${n} أداة متاحة — اختر واحدة للبدء`,
  },
  toolPage: {
    breadcrumbHome: "الرئيسية",
    howItWorks: "كيف يعمل",
    step1Title: "اختيار الملفات",
    step1Desc: "اسحب وأفلت ملفاتك أو انقر للتصفح.",
    step2Title: "المعالجة محليًا",
    step2Desc: "يقوم متصفحك بمعالجة الملفات باستخدام JavaScript من جانب العميل. لا يتم رفع أي شيء.",
    step3Title: "تنزيل النتيجة",
    step3Desc: "احصل على ملفك المعالج فورًا. ملفاتك الأصلية تبقى دون تغيير.",
    faqHeading: "الأسئلة الشائعة",
    faqQFree: "هل هذه الأداة مجانية؟",
    faqAFree: "نعم، هذه الأداة مجانية 100%. بدون تسجيل، بدون حدود، وبدون رسوم مخفية. جميع المعالجة تتم محليًا في متصفحك — لا يتم رفع أي شيء أبدًا.",
    faqQSafe: "هل ملفاتي آمنة؟",
    faqASafe: "ملفاتك لا تغادر جهازك أبدًا. جميع المعالجة تتم محليًا في متصفحك باستخدام JavaScript من جانب العميل. ملفاتك لا يتم رفعها أبدًا إلى أي خادم، لذا فإن خصوصيتك محمية بالكامل.",
    faqQSignup: "هل أحتاج إلى إنشاء حساب؟",
    faqASignup: "لا يلزم التسجيل. يمكنك استخدام هذه الأداة فورًا دون إنشاء حساب أو تقديم أي معلومات شخصية.",
    relatedTools: "أدوات ذات صلة",
  },
  workspace: {
    privacyBadge: "ملفاتك تبقى على جهازك — بدون رفع",
    processing: "جارٍ المعالجة...",
    done: "تم!",
    downloadAll: (n) => `تنزيل الكل (${n} ملفات)`,
    downloadAgain: "تنزيل مرة أخرى",
    startOver: "البدء من جديد",
    error: "خطأ",
    tryAgain: "حاول مرة أخرى",
    selected: (n) => `المحدد (${n} ملفات)`,
    clear: "مسح",
    processFiles: "معالجة الملفات",
    previewOnly: "تجربة (معاينة)",
    previewWarning: "⚠️ هذه الأداة في وضع المعاينة. التنفيذ الكامل قريبًا.",
    selectHint: "اختر الملفات أعلاه للبدء.",
    comingSoon: "🚧 تنفيذ هذه الأداة قادم قريبًا. البنية التحتية لمعالجة الملفات جاهزة.",
    pages: "صفحات",
    mb: "م.ب",
    kb: "ك.ب",
    loadingFiles: "جارٍ تحميل الملفات...",
    unexpectedError: "حدث خطأ غير متوقع.",
  },
  home: {
    breadcrumbHome: "الرئيسية",
  },
  convert: {
    converter: "محول",
    free: "مجاني عبر الإنترنت",
    noUpload: "لا حاجة للرفع — كل المعالجة تتم في متصفحك",
    subtitle: (from, to) => `تحويل ملفات ${from} (${from.toUpperCase()}) إلى صيغة ${to} (${to.toUpperCase()}) عبر الإنترنت، مجانًا و` ,
    browserBased: "قائم على المتصفح",
    experimental: "تجريبي",
    comingSoon: "⚠️ قريبًا",
    comingSoonDesc: "هذا النوع من التحويل يتطلب معالجة من جانب الخادم وسيكون متاحًا في تحديث مستقبلي. ترقبوا!",
    about: (from, to) => `حول ${from} و ${to}`,
    category: "التصنيف",
    mime: "MIME",
    faqIsFree: (from, to) => `هل محول ${from} إلى ${to} مجاني؟`,
    faqIsFreeAns: "مجاني تمامًا. بدون تسجيل، بدون حدود.",
    faqQuality: "هل سيتم الحفاظ على الجودة؟",
    faqQualityAns4: "نعم، تحويلنا يحافظ على جودة ممتازة. سيكون الناتج مشابهًا جدًا للأصلي.",
    faqQualityAns3: "الجودة جيدة بشكل عام، على الرغم من أن التنسيقات المعقدة قد يتم تبسيطها.",
    faqQualityAns2: "هذا النوع من التحويل له حدود. نوصي بالتحقق من الناتج.",
    quality: "الجودة",
    relatedConversions: "تحويلات ذات صلة",
  },
  category: {},
  footer: {
    product: "المنتج",
    popularTools: "الأدوات الشائعة",
    convert: "تحويل",
    company: "الشركة",
    privacy: "الخصوصية",
    privacyLine: "جميع معالجة PDF تتم بالكامل في متصفحك. ملفاتك لا يتم رفعها أبدًا إلى أي خادم.",
  },
};

// ─── हिन्दी ───
const hi: LangDict = {
  site: {
    name: "toolconv",
    tagline: "मुफ़्त ऑनलाइन PDF टूल्स",
    description: "मुफ़्त ऑनलाइन PDF टूल्स जो पूरी तरह से आपके ब्राउज़र में चलते हैं। PDF को मर्ज करें, विभाजित करें, संपीड़ित करें, रूपांतरित करें और संपादित करें — कोई अपलोड नहीं, कोई साइन-अप नहीं, 100% निजी।",
  },
  header: {
    mergePdf: "PDF मर्ज करें",
    splitPdf: "PDF विभाजित करें",
    compressPdf: "PDF संपीड़ित करें",
    convert: "रूपांतरित करें",
    allTools: "सभी टूल्स",
  },
  hero: {
    line1: "आपको जितने भी PDF टूल चाहिए,",
    line2: "सीधे आपके ब्राउज़र में",
    subtitle: "सभी टूल्स 100% मुफ़्त हैं। कोई अपलोड नहीं, कोई साइन-अप नहीं, कोई सीमा नहीं। आपकी फ़ाइलें कभी आपके डिवाइस से बाहर नहीं जातीं — सब कुछ आपके ब्राउज़र में स्थानीय रूप से चलता है, अधिकतम गोपनीयता के लिए।",
    ctaMerge: "PDF मर्ज करें →",
    ctaCompress: "PDF संपीड़ित करें",
    ctaAll: "सभी टूल्स ↓",
    badgeNoUpload: "कोई फ़ाइल अपलोड नहीं",
    badgeFree: "100% मुफ़्त",
    badgeNoReg: "कोई पंजीकरण नहीं",
    badgeOffline: "ऑफ़लाइन काम करता है",
  },
  tools: {
    heading: "सभी PDF टूल्स",
    countLabel: (n) => `${n} टूल उपलब्ध — शुरू करने के लिए एक चुनें`,
  },
  toolPage: {
    breadcrumbHome: "होम",
    howItWorks: "यह कैसे काम करता है",
    step1Title: "फ़ाइलें चुनें",
    step1Desc: "अपनी फ़ाइलें खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें।",
    step2Title: "स्थानीय रूप से प्रक्रिया करें",
    step2Desc: "आपका ब्राउज़र क्लाइंट-साइड JavaScript का उपयोग करके फ़ाइलों को प्रोसेस करता है। कुछ भी अपलोड नहीं होता।",
    step3Title: "परिणाम डाउनलोड करें",
    step3Desc: "अपनी प्रोसेस की गई फ़ाइल तुरंत प्राप्त करें। आपकी मूल फ़ाइलें अपरिवर्तित रहती हैं।",
    faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
    faqQFree: "क्या यह टूल मुफ़्त है?",
    faqAFree: "हाँ, यह टूल 100% मुफ़्त है। कोई साइन-अप नहीं, कोई सीमा नहीं, और कोई छिपी फीस नहीं। सारी प्रोसेसिंग आपके ब्राउज़र में स्थानीय रूप से होती है — कभी कुछ अपलोड नहीं होता।",
    faqQSafe: "क्या मेरी फ़ाइल सुरक्षित है?",
    faqASafe: "आपकी फ़ाइलें कभी आपके डिवाइस से बाहर नहीं जातीं। सारी प्रोसेसिंग क्लाइंट-साइड JavaScript का उपयोग करके आपके ब्राउज़र में स्थानीय रूप से की जाती है। आपकी फ़ाइलें कभी किसी सर्वर पर अपलोड नहीं होतीं, इसलिए आपकी गोपनीयता पूरी तरह सुरक्षित है।",
    faqQSignup: "क्या मुझे खाता बनाने की आवश्यकता है?",
    faqASignup: "कोई साइन-अप आवश्यक नहीं है। आप खाता बनाए बिना या कोई व्यक्तिगत जानकारी दिए बिना तुरंत इस टूल का उपयोग कर सकते हैं।",
    relatedTools: "संबंधित टूल्स",
  },
  workspace: {
    privacyBadge: "आपकी फ़ाइलें आपके डिवाइस पर रहती हैं — कोई अपलोड नहीं",
    processing: "प्रोसेस हो रहा है...",
    done: "हो गया!",
    downloadAll: (n) => `सभी डाउनलोड करें (${n} फ़ाइलें)`,
    downloadAgain: "फिर से डाउनलोड करें",
    startOver: "फिर से शुरू करें",
    error: "त्रुटि",
    tryAgain: "पुनः प्रयास करें",
    selected: (n) => `चयनित (${n} फ़ाइलें)`,
    clear: "साफ़ करें",
    processFiles: "फ़ाइलों को प्रोसेस करें",
    previewOnly: "आज़माएँ (पूर्वावलोकन)",
    previewWarning: "⚠️ यह टूल पूर्वावलोकन मोड में है। पूर्ण कार्यान्वयन जल्द आ रहा है।",
    selectHint: "शुरू करने के लिए ऊपर फ़ाइलें चुनें।",
    comingSoon: "🚧 इस टूल का कार्यान्वयन जल्द आ रहा है। फ़ाइल हैंडलिंग इंफ्रास्ट्रक्चर तैयार है।",
    pages: "पेज",
    mb: "MB",
    kb: "KB",
    loadingFiles: "फ़ाइलें लोड हो रही हैं...",
    unexpectedError: "एक अप्रत्याशित त्रुटि हुई।",
  },
  home: {
    breadcrumbHome: "होम",
  },
  convert: {
    converter: "कन्वर्टर",
    free: "मुफ़्त ऑनलाइन",
    noUpload: "कोई अपलोड आवश्यक नहीं — सारी प्रोसेसिंग आपके ब्राउज़र में होती है",
    subtitle: (from, to) => `${from} (${from.toUpperCase()}) फ़ाइलों को ${to} (${to.toUpperCase()}) फ़ॉर्मेट में ऑनलाइन मुफ़्त में बदलें, और` ,
    browserBased: "ब्राउज़र-आधारित",
    experimental: "प्रायोगिक",
    comingSoon: "⚠️ जल्द आ रहा है",
    comingSoonDesc: "इस रूपांतरण प्रकार के लिए सर्वर-साइड प्रोसेसिंग की आवश्यकता है और यह भविष्य के अपडेट में उपलब्ध होगा। बने रहें!",
    about: (from, to) => `${from} और ${to} के बारे में`,
    category: "श्रेणी",
    mime: "MIME",
    faqIsFree: (from, to) => `क्या यह ${from} से ${to} कन्वर्टर मुफ़्त है?`,
    faqIsFreeAns: "पूरी तरह से मुफ़्त है। कोई साइन-अप नहीं, कोई सीमा नहीं।",
    faqQuality: "क्या गुणवत्ता बनी रहेगी?",
    faqQualityAns4: "हाँ, हमारा रूपांतरण उत्कृष्ट गुणवत्ता बनाए रखता है। आउटपुट मूल के बहुत करीब होगा।",
    faqQualityAns3: "गुणवत्ता आमतौर पर अच्छी होती है, हालांकि जटिल फ़ॉर्मेटिंग को सरल बनाया जा सकता है।",
    faqQualityAns2: "इस रूपांतरण प्रकार की सीमाएँ हैं। हम आउटपुट को सत्यापित करने की सलाह देते हैं।",
    quality: "गुणवत्ता",
    relatedConversions: "संबंधित रूपांतरण",
  },
  category: {},
  footer: {
    product: "उत्पाद",
    popularTools: "लोकप्रिय टूल्स",
    convert: "रूपांतरित करें",
    company: "कंपनी",
    privacy: "गोपनीयता",
    privacyLine: "सभी PDF प्रोसेसिंग पूरी तरह से आपके ब्राउज़र में होती है। आपकी फ़ाइलें कभी किसी सर्वर पर अपलोड नहीं होतीं।",
  },
};

// ─── Italiano ───
const it: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Strumenti PDF gratuiti online",
    description: "Strumenti PDF online gratuiti che funzionano interamente nel tuo browser. Unisci, dividi, comprimi, converti e modifica PDF — senza caricamenti, senza registrazione, 100% privato.",
  },
  header: {
    mergePdf: "Unisci PDF",
    splitPdf: "Dividi PDF",
    compressPdf: "Comprimi PDF",
    convert: "Converti",
    allTools: "Tutti gli strumenti",
  },
  hero: {
    line1: "Tutti gli strumenti PDF di cui hai bisogno,",
    line2: "direttamente nel tuo browser",
    subtitle: "Tutti gli strumenti sono 100% gratuiti. Nessun caricamento, nessuna registrazione, nessun limite. I tuoi file non lasciano mai il tuo dispositivo — tutto viene eseguito localmente nel tuo browser per la massima privacy.",
    ctaMerge: "Unisci PDF →",
    ctaCompress: "Comprimi PDF",
    ctaAll: "Tutti gli strumenti ↓",
    badgeNoUpload: "Nessun caricamento file",
    badgeFree: "100% Gratuito",
    badgeNoReg: "Nessuna registrazione",
    badgeOffline: "Funziona offline",
  },
  tools: {
    heading: "Tutti gli strumenti PDF",
    countLabel: (n) => `${n} strument${n !== 1 ? "i" : "o"} disponibil${n !== 1 ? "i" : "e"} — scegli uno per iniziare`,
  },
  toolPage: {
    breadcrumbHome: "Home",
    howItWorks: "Come funziona",
    step1Title: "Seleziona file",
    step1Desc: "Trascina e rilascia i tuoi file o clicca per sfogliare.",
    step2Title: "Elabora localmente",
    step2Desc: "Il tuo browser elabora i file utilizzando JavaScript lato client. Niente viene caricato.",
    step3Title: "Scarica il risultato",
    step3Desc: "Ottieni il tuo file elaborato all'istante. I tuoi file originali rimangono invariati.",
    faqHeading: "Domande frequenti",
    faqQFree: "Questo strumento è gratuito?",
    faqAFree: "Sì, questo strumento è 100% gratuito. Nessuna registrazione, nessun limite e nessun costo nascosto. Tutta l'elaborazione avviene localmente nel tuo browser — non viene mai caricato nulla.",
    faqQSafe: "I miei file sono al sicuro?",
    faqASafe: "I tuoi file non lasciano mai il tuo dispositivo. Tutta l'elaborazione viene eseguita localmente nel tuo browser utilizzando JavaScript lato client. I tuoi file non vengono mai caricati su alcun server, quindi la tua privacy è completamente protetta.",
    faqQSignup: "Devo creare un account?",
    faqASignup: "Nessuna registrazione richiesta. Puoi utilizzare questo strumento immediatamente senza creare un account o fornire informazioni personali.",
    relatedTools: "Strumenti correlati",
  },
  workspace: {
    privacyBadge: "I tuoi file restano sul tuo dispositivo — nessun caricamento",
    processing: "Elaborazione in corso...",
    done: "Fatto!",
    downloadAll: (n) => `Scarica tutto (${n} file)`,
    downloadAgain: "Scarica di nuovo",
    startOver: "Ricominciare",
    error: "Errore",
    tryAgain: "Riprova",
    selected: (n) => `Selezionato (${n} file)`,
    clear: "Cancella",
    processFiles: "Elabora file",
    previewOnly: "Prova (Anteprima)",
    previewWarning: "⚠️ Questo strumento è in modalità anteprima. L'implementazione completa arriverà presto.",
    selectHint: "Seleziona i file sopra per iniziare.",
    comingSoon: "🚧 L'implementazione di questo strumento arriverà presto. L'infrastruttura di gestione dei file è pronta.",
    pages: "pagine",
    mb: "MB",
    kb: "KB",
    loadingFiles: "Caricamento file...",
    unexpectedError: "Si è verificato un errore imprevisto.",
  },
  home: {
    breadcrumbHome: "Home",
  },
  convert: {
    converter: "Convertitore",
    free: "Gratuito online",
    noUpload: "nessun caricamento richiesto — tutta l'elaborazione avviene nel tuo browser",
    subtitle: (from, to) => `Converti file ${from} (${from.toUpperCase()}) in formato ${to} (${to.toUpperCase()}) online, gratuitamente e` ,
    browserBased: "Basato su browser",
    experimental: "Sperimentale",
    comingSoon: "⚠️ In arrivo",
    comingSoonDesc: "Questo tipo di conversione richiede elaborazione lato server e sarà disponibile in un futuro aggiornamento. Rimanete sintonizzati!",
    about: (from, to) => `Informazioni su ${from} e ${to}`,
    category: "Categoria",
    mime: "MIME",
    faqIsFree: (from, to) => `Questo convertitore da ${from} a ${to} è gratuito?`,
    faqIsFreeAns: "è completamente gratuito. Nessuna registrazione, nessun limite.",
    faqQuality: "La qualità sarà preservata?",
    faqQualityAns4: "Sì, la nostra conversione mantiene un'ottima qualità. L'output sarà molto simile all'originale.",
    faqQualityAns3: "La qualità è generalmente buona, anche se la formattazione complessa potrebbe essere semplificata.",
    faqQualityAns2: "Questo tipo di conversione ha dei limiti. Ti consigliamo di verificare l'output.",
    quality: "Qualità",
    relatedConversions: "Conversioni correlate",
  },
  category: {},
  footer: {
    product: "Prodotto",
    popularTools: "Strumenti popolari",
    convert: "Converti",
    company: "Azienda",
    privacy: "Privacy",
    privacyLine: "Tutta l'elaborazione PDF avviene interamente nel tuo browser. I tuoi file non vengono mai caricati su alcun server.",
  },
};

// ─── Dictionary map ───
const dicts: Record<Locale, LangDict> = { en, zh, ja, ko, es, fr, de, pt, ru, ar, hi, it };

/** Get the dictionary for a locale. Falls back to English. */
export function t(locale: string): LangDict {
  return dicts[locale as Locale] ?? dicts.en;
}

/** Get locale from path prefix */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(seg as Locale) ? (seg as Locale) : DEFAULT_LOCALE;
}
