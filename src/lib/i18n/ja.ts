import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "無料オンライン PDF ツール",
    description: "完全無料のオンライン PDF ツール。すべての処理はブラウザ内で実行されます。PDF の結合、分割、圧縮、変換、編集 — アップロード不要、サインアップ不要、100％プライベート。"
},
  header: {
    mergePdf: "PDF を結合",
    splitPdf: "PDF を分割",
    compressPdf: "PDF を圧縮",
    convert: "変換",
    allTools: "すべてのツール"
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
    badgeOffline: "オフラインでも動作"
},
  tools: {
    heading: "すべての PDF ツール",
    countLabel: (n) => `${n}個のツールが利用可能 — 選択して開始してください`
},
  toolItems: {
    "merge-pdf": {
      title: "PDF を結合",
      description: "希望の順序でPDFを結合できる、最も簡単なPDF結合ツール。",
      longDescription: "複数のPDFファイルを1つのドキュメントに結合します。PDFをアップロードして順序を並べ替え、結合結果をダウンロードするだけです。すべての処理はブラウザ上でローカルに実行されます。"
},
    "split-pdf": {
      title: "PDF を分割",
      description: "1ページまたは複数ページを分割して、独立したPDFファイルに簡単変換。",
      longDescription: "PDFドキュメントを個別のページに分割したり、特定のページ範囲を抽出します。ページごと、範囲ごと、またはすべてのページを個別ファイルとして抽出できます。100%ブラウザベース。"
},
    "organize-pdf": {
      title: "PDF を整理",
      description: "PDFページの並べ替え、削除、追加。ドラッグ＆ドロップで並び替え。",
      longDescription: "PDFページを自由に並べ替え。不要なページの削除、新しいページの追加、ドラッグ＆ドロップでの並び替えが簡単に行えます。すべてローカル処理。"
},
    "compress-pdf": {
      title: "PDF を圧縮",
      description: "ファイルサイズを削減しつつ、PDF品質を最適化。",
      longDescription: "品質を大きく損なうことなくPDFファイルサイズを削減。メール添付やWebアップロードに最適です。圧縮レベルを選択可能。処理はすべてブラウザ内で完了。"
},
    "pdf-to-word": {
      title: "PDF から Word",
      description: "PDFファイルを編集可能なDOC/DOCXドキュメントに簡単変換。",
      longDescription: "PDFからテキストコンテンツを抽出してWord（DOCX）ファイルとして保存します。⚠️ 注意：このツールはテキストのみの抽出を行い、元の書式、画像、テーブルレイアウトは保持しません。テキストコンテンツの抽出と再編集に最適です。"
},
    "pdf-to-jpg": {
      title: "PDF から JPG",
      description: "各PDFページをJPGに変換、またはPDF内の画像を抽出。",
      longDescription: "PDFページを高品質なJPG画像に変換。解像度と品質レベルを選択可能。ソーシャルメディアでの共有やプレゼンテーションへの埋め込みに最適。100%ブラウザベース。"
},
    "jpg-to-pdf": {
      title: "JPG から PDF",
      description: "JPG画像を数秒でPDFに変換。向きと余白を簡単調整。",
      longDescription: "1つまたは複数のJPG/JPEG画像をPDFドキュメントに変換。画像の順序、ページサイズ、向きを選択可能。すべてブラウザ上でローカル処理。"
},
    "pdf-to-png": {
      title: "PDF から PNG",
      description: "PDFページを高品質でロスレスのPNG画像に変換。",
      longDescription: "PDFページを透明対応のロスレスPNG画像として抽出。グラフィック、スクリーンショット、ピクセル完全な再現が必要なコンテンツに最適。完全ブラウザベース。"
},
    "pdf-to-image": {
      title: "PDF から画像",
      description: "PDFページをJPGまたはPNG画像に変換。品質と解像度を選択。",
      longDescription: "PDFの全ページを高品質画像に変換。JPG（調整可能な品質、ファイル小）またはPNG（ロスレス、グラフィックに最適）を選択。鮮明な結果を得るために解像度を調整。すべてブラウザでローカル処理。"
},
    "pdf-to-text": {
      title: "PDF からテキスト",
      description: "PDFドキュメントからテキストを抽出。",
      longDescription: "PDFファイルからテキストコンテンツを抽出。コンテンツの再利用、データ抽出、PDFの検索可能化に最適。ブラウザ上でローカル実行。"
},
    "word-to-pdf": {
      title: "Word から PDF",
      description: "DOC/DOCXファイルをPDFに変換して読みやすく。",
      longDescription: "Microsoft Word文書（DOCX）をPDF形式に変換。書式、画像、レイアウトを保持。共有や印刷に最適。"
},
    "excel-to-pdf": {
      title: "Excel から PDF",
      description: "ExcelスプレッドシートをPDFに変換して読みやすく。",
      longDescription: "Microsoft Excelスプレッドシート（XLSX）をPDFに変換。テーブル書式、グラフ、データレイアウトを保持。プロフェッショナルな共有に最適。"
},
    "edit-pdf": {
      title: "PDF を編集",
      description: "PDFにテキスト、画像、図形、注釈を追加。",
      longDescription: "PDFにテキスト、画像、図形、注釈を追加。追加したコンテンツのフォントサイズ、色、位置を変更可能。注意：既存PDFテキストの編集にはサーバー側処理が必要。"
},
    "watermark-pdf": {
      title: "透かしを追加",
      description: "PDFにテキストや画像の透かしを瞬時に追加。書体、透明度、位置を選択。",
      longDescription: "PDFドキュメントにカスタムテキストまたは画像の透かしを追加。不透明度、回転、位置、繰り返しを制御。ブランディングや著作権保護に最適。100%クライアント側処理。"
},
    "rotate-pdf": {
      title: "PDF を回転",
      description: "PDFページを必要な向きに回転。複数のPDFを一度に回転も可能！",
      longDescription: "個別ページまたはPDF全体を回転。90°、180°、270°から選択。すべてブラウザ内で即時処理。アップロードの待ち時間なし。"
},
    "page-numbers": {
      title: "ページ番号を追加",
      description: "PDFに簡単にページ番号を追加。位置、寸法、書体を選択。",
      longDescription: "PDFドキュメントにカスタマイズ可能なページ番号を追加。位置（上下、左/中央/右）、開始番号、フォントサイズ、スタイルを選択。すべてブラウザベース処理。"
},
    "crop-pdf": {
      title: "PDF をトリミング",
      description: "PDFの余白をトリミングまたは特定領域を選択。",
      longDescription: "PDFページをトリミング — 不要な余白の削除、空白のトリミング、特定領域の選択。全ページに同じトリミングを適用するか、ページごとにカスタマイズ。"
},
    "protect-pdf": {
      title: "PDF を保護",
      description: "パスワードでPDFを保護。不正アクセスを防止するために暗号化。",
      longDescription: "AES暗号化を使用してPDFファイルにパスワード保護を追加。ユーザーパスワード（開く用）と所有者パスワード（権限用）を設定。印刷、コピー、変更の権限を制御。すべてローカル暗号化。"
},
    "unlock-pdf": {
      title: "ロック解除",
      description: "PDFのパスワードセキュリティを解除。",
      longDescription: "PDFファイルからパスワード保護を解除（パスワードの入力が必要）。編集、印刷、コピー用にロックを解除。処理は完全にクライアント側。"
},
    "html-to-pdf": {
      title: "HTML から PDF",
      description: "HTML WebページをPDFに変換。URLを貼り付けてワンクリック変換。",
      longDescription: "HTML WebページをPDFドキュメントに変換。URLを貼り付けるかHTMLコードを直接入力。Web記事や領収書をPDFとして保存に最適。"
},
    "markdown-to-pdf": {
      title: "Markdown から PDF",
      description: "Markdownファイルを美しく書式設定されたPDFに変換。",
      longDescription: "Markdown文書を整形されたPDFファイルに変換。見出し、コードブロック、テーブル、画像をサポート。ドキュメント作成や技術文書に最適。100%ブラウザベース。"
},
    "heic-to-pdf": {
      title: "HEIC から PDF",
      description: "iPhoneのHEIC写真を数秒でPDFに変換。アップロード不要。",
      longDescription: "iPhone/iPadの写真（HEIC/HEIF形式）をPDFに変換。写真をドキュメントとして共有するのに最適。すべてブラウザ内で処理。ファイルはデバイスから送信されません。"
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "スキャンされた PDF を検索可能で選択可能なドキュメントに変換します。",
      longDescription: "OCR（光学文字認識）を使用してスキャンされた PDF や画像からテキストを抽出します。スキャンされたドキュメントを検索可能でコピー可能にします。英語 OCR はローカルで動作し、追加言語も利用できます。"
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "PDFに署名",
      description: "PDF文書に手書きまたはテキストの署名を追加します。",
      longDescription: "署名を描画、入力、またはアップロードし、PDFの任意のページに配置できます。マウス/タッチ描画、フォント選択によるテキスト署名、署名画像のアップロードに対応。位置調整とサイズ変更が可能で、署名済みPDFをダウンロード — すべてブラウザ内で。"
},
    "pdf-to-ppt": {
      title: "PDFからPPT",
      description: "PDFファイルを編集可能なPowerPointプレゼンテーションに変換します。",
      longDescription: "PDF文書をPowerPoint（PPTX）形式に変換して編集やプレゼンテーションに活用。この変換はサーバー側処理が必要で、将来のアップデートで利用可能になります。"
},
    "pdf-to-excel": {
      title: "PDFからExcel",
      description: "PDFテーブルからデータを抽出し、Excelスプレッドシートに変換します。",
      longDescription: "PDFのテーブルやデータをExcel（XLSX）スプレッドシートに変換します。この変換はサーバー側処理が必要で、将来のアップデートで利用可能になります。"
}
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
    relatedTools: "関連ツール"
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
    previewWarning: "プレビューモードです。ブラウザ版では一部の操作が制限される場合があります。",
    selectHint: "上のファイルを選択して開始してください。",
    comingSoon: "このツールはブラウザ版では利用できません。ツール一覧から利用可能な PDF ツールを選択してください。",
    pages: "ページ",
    mb: "MB",
    kb: "KB",
    loadingFiles: "ファイルを読み込み中...",
    unexpectedError: "予期しないエラーが発生しました。",
    largeFileWarning: "ファイルが大きいため、処理に時間がかかる場合があります",
    // Edit PDF workspace
    reset: "リセット",
    loadingPages: "PDFページを読み込み中...",
    textMode: "✏️ テキスト",
    selectMode: "👆 選択",
    enterTextPlaceholder: "追加するテキストを入力...",
    textModeTip: "ページの任意の場所をクリックしてテキストを配置。選択モードに切り替えて注釈を削除できます。",
    selectModeTip: "注釈をクリックして削除。テキストモードに切り替えてテキストを追加。",
    addTextFirst: "先にテキスト注釈を追加してください",
    annotationsCount: (n) => `注釈 (${n}件)`,
    clearPage: "ページをクリア",
    selectAllAnnotations: "すべて選択",
    undo: "↩ 元に戻す",
    redo: "↪ やり直し",
    fontSizeLabel: "フォントサイズ",
    fontSmall: "小",
    fontMedium: "中",
    fontLarge: "大",
    applyEdits: (n) => `編集を適用してダウンロード (${n}件の注釈)`,
    applyingEdits: "編集を適用中...",
    page: "ページ",
    prev: "◀ 前へ",
    next: "次へ ▶",
    failedToLoad: "PDFの読み込みに失敗しました",
    processingFailed: "処理に失敗しました",
    noUploadEdit: "アップロード不要 — すべての編集はローカルで行われます",
    // Crop PDF workspace
    fullPage: "全ページ",
    autoMargin: "自動マージン",
    cropRegion: "切り抜き領域",
    dragToResize: "— 角をドラッグしてサイズ変更、中央をドラッグして移動",
    cropAllPages: (n) => `全${n}ページにトリミングを適用`,
    cropSinglePage: "現在のページをトリミング",
    croppingPages: "ページをトリミング中...",
    noUploadCrop: "アップロード不要 — すべてのトリミングはローカルで行われます",
    presetA4: "A4",
    presetLetter: "レター",
    presetSquare: "正方形",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "ページタブを切り替えて各ページをプレビュー。",
    applyToAllPages: "すべてのページに適用",
    cropX: "X",
    cropY: "Y",
    cropWidth: "幅",
    cropHeight: "高さ",
    // Sign PDF workspace
    signDrawTab: "描画",
    signTypeTab: "入力",
    signUploadTab: "アップロード",
    signClearSignature: "署名をクリア",
    signPlaceOnPage: "PDFをクリックして署名を配置。ドラッグで位置調整。",
    signSignAndDownload: "署名してダウンロード",
    signFontSelector: "署名スタイル",
    signDrawHint: "マウスまたはタッチで下に署名を描画",
    signTypeHint: "下に署名テキストを入力",
    // Organize PDF workspace
    pagesCount: (n) => `${n}ページ`,
    dragReorderClickDelete: "— ドラッグして並べ替え、クリックして削除",
    removePage: "ページを削除",
    saveNewOrder: (n) => `新しい順序を保存 (${n}ページ)`,
    reorganizingPages: "ページを並べ替え中...",
    noUploadOrganize: "アップロード不要 — ブラウザ内でページをドラッグ＆ドロップ",
    // Rotate PDF workspace
    rotateAngle: "回転角度",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "透かしテキスト",
    watermarkOpacity: "不透明度",
    watermarkSize: "フォントサイズ",
    watermarkFontFamily: "フォントファミリー",
    watermarkRotation: "回転角度（度）",
    watermarkPosition: "位置",
    watermarkColor: "色",
    fontSerif: "セリフ",
    fontSansSerif: "サンセリフ",
    fontMonospace: "等幅",
    positionCenter: "中央",
    positionTopLeft: "左上",
    positionTopRight: "右上",
    positionBottomLeft: "左下",
    positionBottomRight: "右下",
    positionTile: "タイル / 繰り返し",
    // Protect/Unlock PDF workspace
    enterPassword: "パスワードを入力",
    confirmPassword: "パスワードを確認",
    passwordMismatch: "パスワードが一致しません",
    showPassword: "表示",
    hidePassword: "非表示",
    protectPdf: "PDFを保護",
    unlockPdf: "ロック解除",
    pdfNotEncrypted: "このPDFは暗号化されていません",
    unsupportedEncryption: "サポートされていない暗号化タイプ",
    incorrectPassword: "パスワードが正しくありません",
    // Compress PDF workspace
    compressLevels: {
      label: "圧縮レベル",
      light: "軽い",
      standard: "標準",
      maximum: "最大",
    },
    // Split PDF workspace
    splitMode: "分割モード",
    splitEveryPage: "各ページを分割",
    splitByRange: "範囲で分割",
    extractPages: "ページを抽出",
    splitEveryN: "Nページごとに分割",
    rangePlaceholder: "例：1-3,4-6,7-10",
    pagesPlaceholder: "例：1,3,5,7",
    nPlaceholder: "例：2",
    invalidRange: "範囲の形式が無効です",
    // Merge PDF workspace
    mergeOrder: "結合順序",
    dragToReorder: "ドラッグして結合順序を並べ替え",
    mergeAndDownload: "結合してダウンロード",
    mergingFiles: "ファイルを結合中...",
    addMore: "ファイルを追加",
    removeFile: "ファイルを削除",
    needAtLeastTwo: "結合するには少なくとも2つのPDFファイルを追加してください",
    files: "ファイル",
    // Shared option labels
    pageSize: "ページサイズ",
    a4: "A4",
    letter: "Letter",
    original: "オリジナル",
    orientation: "向き",
    auto: "自動",
    portrait: "縦向き",
    landscape: "横向き",
    margins: "余白",
    marginNone: "なし",
    marginNarrow: "狭い",
    marginMedium: "中",
    marginWide: "広い",
    marginSmall: "小",
    marginLarge: "大",
    remove: "削除",
    paperSize: "用紙サイズ",
    // Page Numbers workspace
    position: "位置",
    startNumber: "開始番号",
    formatDigits: "1, 2, 3",
    formatPageX: "ページ 1, ページ 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "ページ番号の追加中にエラーが発生しました。",
    // Word to PDF workspace
    parsingWord: "Word 文書を解析中...",
    // Excel to PDF workspace
    parsingSpreadsheet: "スプレッドシートを解析中...",
    // HTML to PDF workspace
    loadingHtml: "HTML を読み込み中...",
    renderScale: "レンダリングスケール",
    // Markdown to PDF workspace
    processingMarkdown: "Markdown を処理中...",
    codeHighlight: "コードハイライト",
    on: "オン",
    off: "オフ",
    // HEIC to PDF workspace
    decodingHeic: "HEIC ファイルをデコード中...",
    // OCR PDF workspace
    ocrInitializing: "初期化中...",
    ocrLoadingEngine: "OCR エンジンを読み込み中...",
    ocrLanguage: "言語",
    ocrLangEn: "英語",
    ocrLangZh: "中国語 + 英語",
    ocrLangJa: "日本語 + 英語",
    ocrOutputFormat: "出力形式",
    ocrFormatText: "プレーンテキスト",
    ocrFormatPdf: "テキストレイヤー付き PDF",
    ocrProgress: (page, total) => `ページ ${page}/${total}`,
    ocrError: "OCR 処理中にエラーが発生しました。",
    // PDF to Word workspace
    buildingWord: "Word 文書を構築中...",
    generatingDocx: "DOCX ファイルを生成中...",
    pageSeparator: "ページ区切り",
    separatorPageBreak: "改ページ",
    separatorContinuous: "連続",
    includePageNumbers: "ページ番号を含める",
    pdfToWordError: "Word への変換中にエラーが発生しました。",
    // Protect PDF workspace
    encryptionAlgorithm: "暗号化",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128ビット",
    encryptAes256Desc: "PDF 2.0 — 最高のセキュリティ",
    encryptRc4Desc: "古いPDFリーダーと互換性あり",
    permissions: "アクセス許可",
    allowPrinting: "印刷を許可",
    allowCopying: "テキストのコピーを許可",
    allowModifying: "変更を許可",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "ガイドとチュートリアル",
    description: "画像・PDF処理のステップバイステップチュートリアルとガイド。ヒント、コツ、ベストプラクティスを学びましょう。",
    browseGuides: "ガイドを閲覧",
    readGuide: "ガイドを読む →",
    backToGuides: "← ガイドに戻る",
    breadcrumbGuides: "ガイド",
  },
  convert: {
    converter: "コンバーター",
    free: "無料オンライン",
    noUpload: "アップロード不要 — すべての処理はブラウザ内で行われます",
    subtitle: (from, to) => `${from} (${from.toUpperCase()}) ファイルを ${to} (${to.toUpperCase()}) 形式に無料でオンライン変換、`,
    browserBased: "ブラウザベース",
    experimental: "実験的",
    comingSoon: "未対応の変換",
    comingSoonDesc: "この変換タイプはサーバー側の処理が必要なため、現在のブラウザ版では利用できません。",
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
    subtitleGeneric: "PDFとさまざまな形式を相互変換。無料、アップロード不要、ブラウザで完結。",
    relatedConversions: "関連変換"
},
  category: {
    all: "すべて",
    organize: "PDFを整理",
    optimize: "PDFを最適化",
    convert: "PDFを変換",
    edit: "PDFを編集",
    security: "PDFセキュリティ",
    intelligence: "PDFインテリジェンス",
    workflow: "ワークフロー"
},
  dropzone: {
    dropHere: "ここにファイルをドロップ",
    dragDropHere: "ファイルをドラッグ＆ドロップ",
    orClickBrowse: "またはクリックして参照",
    filesUpTo: "ファイル、最大",
    multipleSupported: "（複数ファイル対応）",
    fileExceed: "ファイルがサイズ制限を超えています：",
    invalidFileType: "ファイル形式が正しくありません。有効なPDFファイルをアップロードしてください。"
},
  toolCard: {
    new: "新規",
    pro: "プロ"
},
  pdfToImage: {
    title: "PDF を画像に変換",
    description: "PDF ページを JPG または PNG 画像に変換します。品質と解像度を選択可能。",
    formatLabel: "出力形式",
    qualityLabel: "JPEG 品質",
    scaleLabel: "解像度",
    pngOption: "PNG（ロスレス）",
    jpgOption: "JPG（小容量）",
    convertBtn: "画像に変換",
    preview: "枚の画像を生成しました",
    pageLabel: "ページ",
    downloadPage: "ダウンロード",
    downloadAll: "すべてダウンロード",
    noFile: "上の PDF ファイルを選択して、ページを画像に変換してください。",
    renderingPages: "PDF ページをレンダリング中..."
},
  footer: {
    product: "製品",
    popularTools: "人気のツール",
    convert: "変換",
    company: "会社",
    privacy: "プライバシー",
    privacyLine: "すべての PDF 処理はブラウザ内で完全に実行されます。ファイルがサーバーにアップロードされることはありません。",
    home: "ホーム",
    allTools: "すべてのツール",
    pricing: "料金",
    about: "概要",
    terms: "利用規約",
    contact: "お問い合わせ",
    alsoTry: "こちらもお試し：",
    imageTools: "🖼️ 画像ツール",
    unitConverter: "🔄 単位変換",
    copyright: "すべての PDF 処理はブラウザ内で完全に実行されます。ファイルがサーバーにアップロードされることはありません。100% プライベート。"
},
pages: {
  pricing: {
    title: "料金",
    subtitle: "シンプルで透明 — すべての PDF ツールは 100% 無料です。",
    freeTier: "無料",
    freeDesc: "すべての PDF ツールを無料でご利用いただけます。隠れた料金もサブスクリプションもなく、ブラウザ上で強力な PDF 処理を無料で。",
    freeFeature1: "20以上の全PDFツールを含む",
    freeFeature2: "サインアップや登録は不要",
    freeFeature3: "ファイルサイズ制限なし",
    freeFeature4: "100% ブラウザベース — アップロード不要、サーバー不要",
    proTier: "Pro",
    proDesc: "パワーユーザー向けの高度な機能は、無料のブラウザ版には含まれていません。",
    ocrNote: "OCR（光学文字認識）にはサーバーグレードの処理が必要で、無料のブラウザ版には含まれていません。",
    faqQ1: "なぜツールは無料ですか？",
    faqA1: "不可欠なPDFツールは誰でも利用できるべきだと考えています。ブラウザベースのアプローチにより、ファイルがデバイスから離れることがないため、コストを低く抑えられます。これにより、最小限の広告でサポートされた完全無料のツールを提供できます。",
    faqQ2: "Proがリリースされるとどうなりますか？",
    faqA2: "Proがリリースされても、現在の無料ツールはすべて完全に無料のままです。ProではOCR、高品質変換、バッチ処理などの高度な機能が追加されます。既存の機能が有料化されることはありません。"
  },
  about: {
    title: "toolconvについて",
    subtitle: "ブラウザ上で完全に動作するプライバシー優先のPDFツール。",
    missionTitle: "私たちの使命",
    missionDesc: "toolconvは、プライバシーを尊重するプロフェッショナル品質のPDFツールを提供するというシンプルな使命で作られました。ファイル処理はユーザーのデバイス上で行われるべきであり、他人のサーバー上で行われるべきではないと考えています。私たちが構築するすべてのツールは、クライアントサイドJavaScriptを使用してブラウザ上で完全に動作します — ファイルがコンピューターから離れることはありません。",
    value1Title: "🔒 100% プライベート",
    value1Desc: "ファイルはブラウザ上でローカル処理されます。アップロードも保存も共有もされません。データへのサーバーアクセスはゼロです。",
    value2Title: "🖥️ ブラウザベース",
    value2Desc: "ダウンロードもインストールも不要。すべてがモダンブラウザ上で直接動作します。WebAssemblyとクライアントサイドJavaScriptで動作。",
    value3Title: "💰 完全無料",
    value3Desc: "すべてのツールは制限なく無料で使用でき、サインアップや隠れたコストもありません。PDFツールを誰にでもアクセスしやすくすることを信じています。",
    value4Title: "🌍 オフライン対応",
    value4Desc: "一度読み込めば、多くのツールはインターネット接続なしでも動作します。旅行者やリモートワーカー、データプライバシーを気にする方に最適。",
    storyTitle: "私たちのストーリー",
    storyDesc: "toolconvはシンプルな気づきから始まりました：ほとんどの「無料」オンラインPDFツールは実際にファイルをサーバーにアップロードし、リモートで処理し、データを販売したり機能を高額なサブスクリプションの後ろにロックしています。より良い代替案を構築したいと考えました — すべての処理がクライアント側で行われ、プライバシーがアーキテクチャに組み込まれ、強力なPDFツールが誰でも無料で使えるものを。現在、toolconvは世界中のユーザーに20以上のブラウザベースのPDFツールを提供しており、すべて100%無料でプライバシー優先です。"
  },
  privacy: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日：2026年6月1日",
    intro: "toolconvでは、お客様のプライバシーを最優先に考えています。このポリシーは、お客様が当社サービスをご利用になる際のデータの取り扱いについて説明します。",
    s1Title: "1. データアップロードなし",
    s1Content: "すべてのPDF処理は、クライアントサイドJavaScriptを使用してブラウザ上で完全に実行されます。お客様のファイルが当社のサーバーにアップロードされることは決してありません — 最初から最後までお客様のデバイス上に残ります。お客様のドキュメントにサーバー側からアクセスすることはなく、ローカルマシン以外でファイルを保存、処理、送信することもありません。",
    s2Title: "2. Cookieなし（分析を除く）",
    s2Content: "コアサイトの運用に関して機能的なCookieは使用していません。このサイトで使用される唯一のCookieは、広告のパーソナライゼーションとレポートのためのGoogle AdSenseからのものです。これらはGoogleのプライバシーポリシーの対象となるサードパーティCookieです。ブラウザの設定でCookieの設定を管理できます。",
    s3Title: "3. 分析と広告",
    s3Content: "このサイトはGoogle AdSenseを使用しており、関連する広告を提供するために、お客様の訪問に関するデータ（表示されたページや広告とのやり取りなど）を収集および使用する場合があります。Google AdSenseはCookieと類似技術を使用しています。詳細については、policies.google.com/privacy のGoogleプライバシーポリシーをご確認ください。当社自身は個人分析データを収集または保存しません — サーバーログ、AdSense以外の追跡スクリプト、Google Analyticsなどの分析プラットフォームはありません。",
    s4Title: "4. アカウント不要",
    s4Content: "ユーザーアカウントや登録は必要ありません。サインアッププロセス、メール収集、ユーザープロファイルはありません。つまり、お客様に関する個人を特定できる情報を本質的に収集しません。ツールの使用は完全に匿名です。",
    s5Title: "5. サードパーティリンク",
    s5Content: "当サイトにはサードパーティサイトへのリンクが含まれる場合があります（例：関連プロジェクトのimage.toolconv.comやunit.toolconv.com、Google AdSense広告）。これらの外部サイトのプライバシー慣行については責任を負いません。ご利用になる前にプライバシーポリシーをご確認ください。",
    contact: "このプライバシーポリシーに関するご質問は、support@toolconv.comまでお問い合わせください。"
  },
  terms: {
    title: "利用規約",
    lastUpdated: "最終更新日：2026年6月1日",
    intro: "toolconvへようこそ。当社のウェブサイトおよびツールを使用することにより、以下の条件に同意したものとみなされます。よくお読みください。",
    s1Title: "1. 無料利用",
    s1Content: "toolconv上のすべてのツールは無料で提供されます。支払いは不要で、サブスクリプションも必要ありません。将来、プレミアム機能を導入する権利を留保しますが、既存の無料ツールはすべて無料のままです。",
    s2Title: "2. プライバシーの約束",
    s2Content: "お客様のプライバシーは当社サービスの基本です。すべてのファイル処理はブラウザ上でローカルに行われます。当社はお客様のファイルにアクセスできず、保存、処理、送信も行いません。詳細については、プライバシーポリシーをご覧ください。",
    s3Title: "3. 許容される利用",
    s3Content: "お客様は、合法的な目的のため、および本規約に従ってのみtoolconvを使用することに同意します。違法なコンテンツの処理、他人の知的財産権の侵害、またはサービスを妨害する試みにツールを使用してはなりません。",
    s4Title: "4. 保証の否認",
    s4Content: "toolconvは、明示的または黙示的な保証なしに「現状有姿」で提供されます。正確性と信頼性に努めていますが、ツールがエラーなく中断なく動作することを保証しません。出力品質は入力ファイルによって異なる場合があります。自己責任でご使用ください。",
    s5Title: "5. 責任の制限",
    s5Content: "toolconvおよびその運営者は、ツールの使用または使用不能から生じるいかなる損害についても責任を負いません。これにはデータ損失、業務の中断、または間接的損害が含まれますが、これらに限定されません。当社の全責任は、適用法で許容される最大範囲に制限されます。",
    s6Title: "6. お問い合わせ",
    s6Content: "本規約に関するご質問は、support@toolconv.comまでお問い合わせください。"
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "ご質問、ご提案、フィードバックがございましたら、お気軽にお問い合わせください。",
    emailTitle: "📧 メールサポート",
    emailDesc: "ご質問、バグ報告、一般的なお問い合わせ：",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 機能リクエスト",
    featureDesc: "新しいツールや改善のアイデアがありますか？ぜひお聞かせください！ご提案をお送りいただければ、今後のアップデートで検討します。",
    responseTitle: "⏱️ 応答時間",
    responseDesc: "通常、営業日内の24時間以内に返信します。お客様の時間を尊重し、できるだけ早くご返信いたします。"
  }
}
};
export default dict;
