import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "무료 온라인 PDF 도구",
    description: "브라우저에서 완전히 실행되는 무료 온라인 PDF 도구입니다. PDF 병합, 분할, 압축, 변환 및 편집 — 업로드 불필요, 가입 불필요, 100% 비공개."
},
  header: {
    mergePdf: "PDF 병합",
    splitPdf: "PDF 분할",
    compressPdf: "PDF 압축",
    convert: "변환",
    allTools: "모든 도구"
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
    badgeOffline: "오프라인 작동"
},
  tools: {
    heading: "모든 PDF 도구",
    countLabel: (n) => `${n}개 도구 사용 가능 — 선택하여 시작하세요`
},
  toolItems: {
    "merge-pdf": {
      title: "PDF 병합",
      description: "원하는 순서로 PDF를 결합하는 가장 쉬운 PDF 병합 도구입니다.",
      longDescription: "여러 PDF 파일을 하나의 문서로 병합합니다. PDF를 업로드하고 원하는 순서로 정렬한 후 병합된 결과를 다운로드하세요. 모든 처리는 브라우저에서 로컬로 실행됩니다."
},
    "split-pdf": {
      title: "PDF 분할",
      description: "한 페이지 또는 전체 세트를 분리하여 독립적인 PDF 파일로 쉽게 변환합니다.",
      longDescription: "PDF 문서를 개별 페이지로 분할하거나 특정 페이지 범위를 추출합니다. 페이지별, 범위별로 분할하거나 모든 페이지를 개별 파일로 추출할 수 있습니다. 100% 브라우저 기반."
},
    "organize-pdf": {
      title: "PDF 정리",
      description: "PDF 페이지를 정렬, 삭제 또는 추가합니다. 드래그 앤 드롭으로 재정렬하세요.",
      longDescription: "PDF 페이지를 원하는 대로 재정렬합니다. 원하지 않는 페이지를 삭제하거나, 새 페이지를 추가하거나, 간단한 드래그 앤 드롭 인터페이스로 기존 페이지를 재정렬할 수 있습니다. 모든 처리는 로컬에서 이루어집니다."
},
    "compress-pdf": {
      title: "PDF 압축",
      description: "파일 크기를 줄이면서 PDF 품질을 최적화합니다.",
      longDescription: "품질 손실을 최소화하면서 PDF 파일 크기를 줄입니다. 이메일 첨부 파일 및 웹 업로드에 적합합니다. 최대 압축부터 최고 품질까지 압축 수준을 선택할 수 있습니다. 모든 처리는 브라우저에서 이루어집니다."
},
    "pdf-to-word": {
      title: "PDF를 Word로",
      description: "PDF 파일을 편집 가능한 DOC 및 DOCX 문서로 쉽게 변환합니다.",
      longDescription: "PDF에서 텍스트 콘텐츠를 추출하여 Word(DOCX) 파일로 저장합니다. ⚠️ 참고: 이 도구는 텍스트만 추출하며 원본 서식, 이미지, 표 레이아웃을 보존하지 않습니다. 텍스트 콘텐츠 추출 및 재편집에 적합합니다."
},
    "pdf-to-jpg": {
      title: "PDF를 JPG로",
      description: "각 PDF 페이지를 JPG로 변환하거나 PDF에 포함된 모든 이미지를 추출합니다.",
      longDescription: "PDF 페이지를 고품질 JPG 이미지로 변환합니다. 원하는 해상도와 품질 수준을 선택하세요. 소셜 미디어에서 PDF 콘텐츠를 공유하거나 프레젠테이션에 삽입하기에 적합합니다. 100% 브라우저 기반."
},
    "jpg-to-pdf": {
      title: "JPG를 PDF로",
      description: "JPG 이미지를 몇 초 만에 PDF로 변환합니다. 방향과 여백을 쉽게 조정하세요.",
      longDescription: "하나 이상의 JPG/JPEG 이미지를 PDF 문서로 변환합니다. 이미지를 순서대로 정렬하고 페이지 크기와 방향을 선택하세요. 모든 처리는 브라우저에서 로컬로 이루어집니다."
},
    "pdf-to-png": {
      title: "PDF를 PNG로",
      description: "PDF 페이지를 고품질의 무손실 PNG 이미지로 변환합니다.",
      longDescription: "투명도를 지원하는 무손실 PNG 이미지로 PDF 페이지를 추출합니다. 그래픽, 스크린샷 및 픽셀 완벽한 재현이 필요한 콘텐츠에 이상적입니다. 완전히 브라우저 기반입니다."
},
    "pdf-to-image": {
      title: "PDF를 이미지로",
      description: "PDF 페이지를 JPG 또는 PNG 이미지로 변환합니다. 품질과 해상도를 선택하세요.",
      longDescription: "PDF의 모든 페이지를 고품질 이미지로 변환합니다. JPG(조정 가능한 품질, 작은 파일) 또는 PNG(무손실, 그래픽에 적합) 중에서 선택하세요. 선명한 결과를 위해 해상도를 조정하세요. 모든 처리는 브라우저에서 로컬로 이루어집니다."
},
    "pdf-to-text": {
      title: "PDF를 텍스트로",
      description: "PDF 문서에서 텍스트 콘텐츠를 추출합니다.",
      longDescription: "PDF 파일에서 텍스트 콘텐츠를 추출합니다. 콘텐츠 재사용, 데이터 추출 또는 PDF 검색 가능하게 만들기에 적합합니다. 브라우저에서 로컬로 작동합니다."
},
    "word-to-pdf": {
      title: "Word를 PDF로",
      description: "DOC 및 DOCX 파일을 PDF로 변환하여 읽기 쉽게 만듭니다.",
      longDescription: "Microsoft Word 문서(DOCX)를 PDF 형식으로 변환하여 쉽게 공유하고 인쇄할 수 있습니다. 서식, 이미지 및 레이아웃을 유지합니다."
},
    "excel-to-pdf": {
      title: "Excel을 PDF로",
      description: "Excel 스프레드시트를 PDF로 변환하여 읽기 쉽게 만듭니다.",
      longDescription: "Microsoft Excel 스프레드시트(XLSX)를 PDF로 변환합니다. 표 서식, 차트 및 데이터 레이아웃을 유지하여 전문적으로 공유할 수 있습니다."
},
    "edit-pdf": {
      title: "PDF 편집",
      description: "PDF 문서에 텍스트, 이미지, 도형 또는 주석을 추가합니다.",
      longDescription: "PDF에 텍스트, 이미지, 도형 및 주석을 추가합니다. 추가된 콘텐츠의 글꼴 크기, 색상 및 위치를 변경할 수 있습니다. 참고: 기존 PDF 텍스트 편집에는 서버 측 처리가 필요합니다."
},
    "watermark-pdf": {
      title: "워터마크 추가",
      description: "PDF에 텍스트 또는 이미지 워터마크를 즉시 추가합니다. 글꼴, 투명도 및 위치를 선택하세요.",
      longDescription: "PDF 문서에 사용자 지정 텍스트 또는 이미지 워터마크를 추가합니다. 불투명도, 회전, 위치 및 반복을 제어할 수 있습니다. 브랜딩, 저작권 보호 또는 문서 상태 표시에 적합합니다. 100% 클라이언트 측."
},
    "rotate-pdf": {
      title: "PDF 회전",
      description: "PDF 페이지를 원하는 방향으로 회전합니다. 여러 PDF를 한 번에 회전할 수도 있습니다!",
      longDescription: "개별 페이지 또는 전체 PDF 문서를 회전합니다. 90°, 180° 또는 270° 회전 중에서 선택하세요. 모든 처리는 브라우저에서 즉시 이루어집니다."
},
    "page-numbers": {
      title: "페이지 번호 추가",
      description: "PDF에 페이지 번호를 쉽게 추가합니다. 위치, 크기 및 글꼴을 선택하세요.",
      longDescription: "PDF 문서에 사용자 지정 가능한 페이지 번호를 추가합니다. 위치(상단/하단, 왼쪽/중앙/오른쪽), 시작 번호, 글꼴 크기 및 스타일을 선택하세요. 모든 처리는 브라우저 기반입니다."
},
    "crop-pdf": {
      title: "PDF 자르기",
      description: "PDF 문서의 여백을 자르거나 특정 영역을 선택합니다.",
      longDescription: "PDF 페이지 자르기 — 불필요한 여백 제거, 공백 자르기 또는 특정 영역 선택. 동일한 자르기를 모든 페이지에 적용하거나 페이지별로 사용자 지정할 수 있습니다."
},
    "protect-pdf": {
      title: "PDF 보호",
      description: "비밀번호로 PDF 파일을 보호합니다. 무단 액세스를 방지하기 위해 PDF를 암호화합니다.",
      longDescription: "AES 암호화를 사용하여 PDF 파일에 비밀번호 보호를 추가합니다. 사용자 비밀번호(열기용)와 소유자 비밀번호(권한용)를 설정합니다. 인쇄, 복사 및 수정 권한을 제어합니다. 모든 암호화는 로컬에서 이루어집니다."
},
    "unlock-pdf": {
      title: "잠금 해제",
      description: "PDF 비밀번호 보안을 제거하여 PDF를 자유롭게 사용할 수 있습니다.",
      longDescription: "PDF 파일에서 비밀번호 보호를 제거합니다(비밀번호를 알아야 함). 편집, 인쇄 또는 복사를 위해 PDF 잠금을 해제합니다. 처리는 완전히 클라이언트 측에서 이루어집니다."
},
    "html-to-pdf": {
      title: "HTML을 PDF로",
      description: "HTML 웹페이지를 PDF로 변환합니다. URL을 붙여넣고 클릭 한 번으로 변환하세요.",
      longDescription: "HTML 웹 페이지를 PDF 문서로 변환합니다. URL을 붙여넣거나 HTML 코드를 직접 입력하세요. 웹 기사, 영수증 또는 문서를 PDF로 저장하기에 적합합니다."
},
    "markdown-to-pdf": {
      title: "Markdown을 PDF로",
      description: "Markdown 파일을 아름답게 포맷된 PDF 문서로 변환합니다.",
      longDescription: "Markdown 문서를 잘 포맷된 PDF 파일로 변환합니다. 헤더, 코드 블록, 테이블 및 이미지를 지원합니다. 문서, README 파일 및 기술 문서 작성에 적합합니다. 100% 브라우저 기반."
},
    "heic-to-pdf": {
      title: "HEIC를 PDF로",
      description: "iPhone HEIC 사진을 몇 초 만에 PDF로 변환합니다. 업로드가 필요 없습니다.",
      longDescription: "iPhone 및 iPad 사진(HEIC/HEIF 형식)을 PDF로 변환합니다. 사진을 문서로 공유하기에 적합합니다. 모든 처리는 브라우저에서 이루어집니다."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "스캔된 PDF를 검색 가능하고 선택 가능한 문서로 변환합니다.",
      longDescription: "OCR(광학 문자 인식)을 사용하여 스캔된 PDF 및 이미지에서 텍스트를 추출합니다. 스캔된 문서를 검색 가능하고 복사 가능하게 만듭니다. 영어 OCR은 로컬에서 실행되며 추가 언어를 사용할 수 있습니다."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "PDF 서명",
      description: "PDF 문서에 손글씨 또는 타이핑 서명을 추가합니다.",
      longDescription: "그리기, 입력 또는 업로드 방식으로 서명을 만들고 PDF의 모든 페이지에 배치할 수 있습니다. 마우스/터치 그리기, 글꼴 선택 기능이 있는 텍스트 서명, 서명 이미지 업로드를 지원합니다. 위치 조정, 크기 변경 및 서명된 PDF 다운로드 — 모두 브라우저에서 처리됩니다."
},
    "pdf-to-ppt": {
      title: "PDF를 PPT로",
      description: "PDF 파일을 편집 가능한 PowerPoint 프레젠테이션으로 변환합니다.",
      longDescription: "PDF 문서를 PowerPoint(PPTX) 형식으로 변환하여 쉽게 편집하고 발표할 수 있습니다. 이 변환은 서버 측 처리가 필요하며 향후 업데이트에서 제공될 예정입니다."
},
    "pdf-to-excel": {
      title: "PDF를 Excel로",
      description: "PDF 테이블에서 데이터를 추출하여 Excel 스프레드시트로 변환합니다.",
      longDescription: "PDF의 테이블과 데이터를 Excel(XLSX) 스프레드시트로 변환합니다. 이 변환은 서버 측 처리가 필요하며 향후 업데이트에서 제공될 예정입니다."
}
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
    relatedTools: "관련 도구"
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
    previewWarning: "미리보기 모드입니다. 브라우저 기반 버전에서는 일부 작업이 제한될 수 있습니다.",
    selectHint: "위에서 파일을 선택하여 시작하세요.",
    comingSoon: "이 도구는 브라우저 버전에서 사용할 수 없습니다. 도구 목록에서 사용 가능한 PDF 도구를 선택하세요.",
    pages: "페이지",
    mb: "MB",
    kb: "KB",
    loadingFiles: "파일 로딩 중...",
    unexpectedError: "예상치 못한 오류가 발생했습니다.",
    largeFileWarning: "파일이 커서 처리 시간이 더 오래 걸릴 수 있습니다",
    // Edit PDF workspace
    reset: "재설정",
    loadingPages: "PDF 페이지 로딩 중...",
    textMode: "✏️ 텍스트",
    selectMode: "👆 선택",
    enterTextPlaceholder: "추가할 텍스트 입력...",
    textModeTip: "페이지의 아무 곳이나 클릭하여 텍스트를 배치하세요. 선택 모드로 전환하여 주석을 삭제할 수 있습니다.",
    selectModeTip: "주석을 클릭하여 삭제하세요. 텍스트 모드로 전환하여 더 많은 텍스트를 추가하세요.",
    addTextFirst: "먼저 텍스트 주석을 추가하세요",
    annotationsCount: (n) => `주석 (${n}개)`,
    clearPage: "페이지 지우기",
    selectAllAnnotations: "전체 선택",
    undo: "↩ 실행 취소",
    redo: "↪ 다시 실행",
    fontSizeLabel: "글꼴 크기",
    fontSmall: "작게",
    fontMedium: "중간",
    fontLarge: "크게",
    applyEdits: (n) => `편집 적용 및 다운로드 (${n}개 주석)`,
    applyingEdits: "편집 적용 중...",
    page: "페이지",
    prev: "◀ 이전",
    next: "다음 ▶",
    failedToLoad: "PDF를 불러오지 못했습니다",
    processingFailed: "처리 실패",
    noUploadEdit: "업로드 불필요 — 모든 편집은 로컬에서 이루어집니다",
    // Crop PDF workspace
    fullPage: "전체 페이지",
    autoMargin: "자동 여백",
    cropRegion: "자르기 영역",
    dragToResize: "— 모서리를 드래그하여 크기 조정, 중앙을 드래그하여 이동",
    cropAllPages: (n) => `모든 ${n}페이지에 자르기 적용`,
    cropSinglePage: "현재 페이지 자르기",
    croppingPages: "페이지 자르는 중...",
    noUploadCrop: "업로드 불필요 — 모든 자르기는 로컬에서 이루어집니다",
    presetA4: "A4",
    presetLetter: "레터",
    presetSquare: "정사각형",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "페이지 탭을 전환하여 각 페이지를 미리보기하세요.",
    applyToAllPages: "모든 페이지에 적용",
    cropX: "X",
    cropY: "Y",
    cropWidth: "너비",
    cropHeight: "높이",
    // Sign PDF workspace
    signDrawTab: "그리기",
    signTypeTab: "입력",
    signUploadTab: "업로드",
    signClearSignature: "서명 지우기",
    signPlaceOnPage: "PDF를 클릭하여 서명을 배치하세요. 드래그하여 위치 이동.",
    signSignAndDownload: "서명 및 다운로드",
    signFontSelector: "서명 스타일",
    signDrawHint: "마우스나 터치로 아래에 서명을 그리세요",
    signTypeHint: "아래에 서명 텍스트를 입력하세요",
    // Organize PDF workspace
    pagesCount: (n) => `${n}페이지`,
    dragReorderClickDelete: "— 드래그하여 순서 변경, 클릭하여 삭제",
    removePage: "페이지 삭제",
    saveNewOrder: (n) => `새 순서 저장 (${n}페이지)`,
    reorganizingPages: "페이지 재정렬 중...",
    noUploadOrganize: "업로드 불필요 — 브라우저에서 페이지 드래그 앤 드롭",
    // Rotate PDF workspace
    rotateAngle: "회전 각도",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "워터마크 텍스트",
    watermarkOpacity: "불투명도",
    watermarkSize: "글꼴 크기",
    watermarkFontFamily: "글꼴 패밀리",
    watermarkRotation: "회전 각도(°)",
    watermarkPosition: "위치",
    watermarkColor: "색상",
    fontSerif: "세리프",
    fontSansSerif: "산세리프",
    fontMonospace: "고정폭",
    positionCenter: "중앙",
    positionTopLeft: "좌측 상단",
    positionTopRight: "우측 상단",
    positionBottomLeft: "좌측 하단",
    positionBottomRight: "우측 하단",
    positionTile: "타일 / 반복",
    // Protect/Unlock PDF workspace
    enterPassword: "비밀번호 입력",
    confirmPassword: "비밀번호 확인",
    passwordMismatch: "비밀번호가 일치하지 않습니다",
    showPassword: "표시",
    hidePassword: "숨기기",
    protectPdf: "PDF 보호",
    unlockPdf: "잠금 해제",
    pdfNotEncrypted: "이 PDF는 암호화되지 않았습니다",
    unsupportedEncryption: "지원되지 않는 암호화 유형",
    incorrectPassword: "비밀번호가 올바르지 않습니다",
    // Compress PDF workspace
    compressLevels: {
      label: "압축 수준",
      light: "가벼움",
      standard: "표준",
      maximum: "최대",
    },
    // Split PDF workspace
    splitMode: "분할 모드",
    splitEveryPage: "모든 페이지 분할",
    splitByRange: "범위로 분할",
    extractPages: "페이지 추출",
    splitEveryN: "N페이지마다 분할",
    rangePlaceholder: "예: 1-3,4-6,7-10",
    pagesPlaceholder: "예: 1,3,5,7",
    nPlaceholder: "예: 2",
    invalidRange: "범위 형식이 잘못되었습니다",
    // Merge PDF workspace
    mergeOrder: "병합 순서",
    dragToReorder: "드래그하여 병합 순서 재정렬",
    mergeAndDownload: "병합 & 다운로드",
    mergingFiles: "파일 병합 중...",
    addMore: "파일 더 추가",
    removeFile: "파일 제거",
    needAtLeastTwo: "병합하려면 PDF 파일을 2개 이상 추가하세요",
    files: "개 파일",
    // Shared option labels
    pageSize: "페이지 크기",
    a4: "A4",
    letter: "Letter",
    original: "원본 크기",
    orientation: "방향",
    auto: "자동",
    portrait: "세로",
    landscape: "가로",
    margins: "여백",
    marginNone: "없음",
    marginNarrow: "좁게",
    marginMedium: "중간",
    marginWide: "넓게",
    marginSmall: "작게",
    marginLarge: "크게",
    remove: "제거",
    paperSize: "용지 크기",
    // Page Numbers workspace
    position: "위치",
    startNumber: "시작 번호",
    formatDigits: "1, 2, 3",
    formatPageX: "페이지 1, 페이지 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "페이지 번호를 추가하는 중 오류가 발생했습니다.",
    // Word to PDF workspace
    parsingWord: "Word 문서를 분석 중...",
    // Excel to PDF workspace
    parsingSpreadsheet: "스프레드시트를 분석 중...",
    // HTML to PDF workspace
    loadingHtml: "HTML을 불러오는 중...",
    renderScale: "렌더링 배율",
    // Markdown to PDF workspace
    processingMarkdown: "Markdown을 처리 중...",
    codeHighlight: "코드 하이라이트",
    on: "켜기",
    off: "끄기",
    // HEIC to PDF workspace
    decodingHeic: "HEIC 파일을 디코딩 중...",
    // OCR PDF workspace
    ocrInitializing: "초기화 중...",
    ocrLoadingEngine: "OCR 엔진을 로딩 중...",
    ocrLanguage: "언어",
    ocrLangEn: "영어",
    ocrLangZh: "중국어 + 영어",
    ocrLangJa: "일본어 + 영어",
    ocrOutputFormat: "출력 형식",
    ocrFormatText: "일반 텍스트",
    ocrFormatPdf: "텍스트 레이어가 있는 PDF",
    ocrProgress: (page, total) => `${page}/${total} 페이지`,
    ocrError: "OCR 처리 중 오류가 발생했습니다.",
    // PDF to Word workspace
    buildingWord: "Word 문서를 작성 중...",
    generatingDocx: "DOCX 파일을 생성 중...",
    pageSeparator: "페이지 구분선",
    separatorPageBreak: "페이지 나누기",
    separatorContinuous: "연속",
    includePageNumbers: "페이지 번호 포함",
    pdfToWordError: "Word로 변환하는 중 오류가 발생했습니다.",
    // Protect PDF workspace
    encryptionAlgorithm: "암호화",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128비트",
    encryptAes256Desc: "PDF 2.0 — 최대 보안",
    encryptRc4Desc: "구형 PDF 리더와 호환",
    permissions: "권한",
    allowPrinting: "인쇄 허용",
    allowCopying: "텍스트 복사 허용",
    allowModifying: "수정 허용",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "가이드 및 튜토리얼",
    description: "이미지 및 PDF 처리를 위한 단계별 튜토리얼과 가이드입니다. 팁, 요령 및 모범 사례를 배워보세요.",
    browseGuides: "가이드 보기",
    readGuide: "가이드 읽기 →",
    backToGuides: "← 가이드로 돌아가기",
    breadcrumbGuides: "가이드",
  },
  convert: {
    converter: "변환기",
    free: "무료 온라인",
    noUpload: "업로드 불필요 — 모든 처리는 브라우저에서 이루어집니다",
    subtitle: (from, to) => `${from} (${from.toUpperCase()}) 파일을 ${to} (${to.toUpperCase()}) 형식으로 무료 온라인 변환,`,
    browserBased: "브라우저 기반",
    experimental: "실험적",
    comingSoon: "지원되지 않는 변환",
    comingSoonDesc: "이 변환 유형은 서버 측 처리가 필요하며 현재 브라우저 버전에서는 사용할 수 없습니다.",
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
    subtitleGeneric: "PDF와 다양한 형식 간 변환. 무료, 업로드 불필요, 브라우저에서 완료.",
    relatedConversions: "관련 변환"
},
  category: {
    all: "전체",
    organize: "PDF 정리",
    optimize: "PDF 최적화",
    convert: "PDF 변환",
    edit: "PDF 편집",
    security: "PDF 보안",
    intelligence: "PDF 인텔리전스",
    workflow: "워크플로우"
},
  dropzone: {
    dropHere: "파일을 여기에 놓으세요",
    dragDropHere: "파일을 드래그 앤 드롭하세요",
    orClickBrowse: "또는 클릭하여 찾아보기",
    filesUpTo: "파일, 최대",
    multipleSupported: "(여러 파일 지원)",
    fileExceed: "파일이 크기 제한을 초과했습니다:",
    invalidFileType: "잘못된 파일 형식입니다. 올바른 PDF 파일을 업로드해 주세요."
},
  toolCard: {
    new: "신규",
    pro: "프로"
},
  pdfToImage: {
    title: "PDF를 이미지로 변환",
    description: "PDF 페이지를 JPG 또는 PNG 이미지로 변환합니다. 품질과 해상도를 선택할 수 있습니다.",
    formatLabel: "출력 형식",
    qualityLabel: "JPEG 품질",
    scaleLabel: "해상도",
    pngOption: "PNG (무손실)",
    jpgOption: "JPG (작은 용량)",
    convertBtn: "이미지로 변환",
    preview: "개의 이미지가 생성되었습니다",
    pageLabel: "페이지",
    downloadPage: "다운로드",
    downloadAll: "모두 다운로드",
    noFile: "위에서 PDF 파일을 선택하여 페이지를 이미지로 변환하세요.",
    renderingPages: "PDF 페이지 렌더링 중..."
},
  footer: {
    product: "제품",
    popularTools: "인기 도구",
    convert: "변환",
    company: "회사",
    privacy: "개인정보",
    privacyLine: "모든 PDF 처리는 브라우저에서 완전히 이루어집니다. 파일이 서버에 업로드되지 않습니다.",
    home: "홈",
    allTools: "모든 도구",
    pricing: "가격",
    about: "정보",
    terms: "약관",
    contact: "문의",
    alsoTry: "다음도 시도해보세요:",
    imageTools: "🖼️ 이미지 도구",
    unitConverter: "🔄 단위 변환기",
    copyright: "모든 PDF 처리는 브라우저에서 완전히 이루어집니다. 파일이 서버에 업로드되지 않습니다. 100% 비공개."
},
pages: {
  pricing: {
    title: "가격",
    subtitle: "간단하고 투명하게 — 모든 PDF 도구는 100% 무료입니다.",
    freeTier: "무료",
    freeDesc: "모든 PDF 도구를 비용 없이 이용하세요. 숨은 수수료나 구독 없이, 브라우저에서 바로 강력한 PDF 처리를 무료로 사용할 수 있습니다.",
    freeFeature1: "20개 이상의 모든 PDF 도구 포함",
    freeFeature2: "가입이나 등록 불필요",
    freeFeature3: "파일 크기 제한 없음",
    freeFeature4: "100% 브라우저 기반 — 업로드 불필요, 서버 불필요",
    proTier: "Pro",
    proDesc: "고급 사용자를 위한 확장 기능은 무료 브라우저 버전에 포함되어 있지 않습니다.",
    ocrNote: "OCR(광학 문자 인식)은 서버급 처리가 필요하며 무료 브라우저 버전에 포함되어 있지 않습니다.",
    faqQ1: "도구가 무료인 이유는 무엇인가요?",
    faqA1: "필수적인 PDF 도구는 모든 사람이 이용할 수 있어야 한다고 믿습니다. 브라우저 기반 접근 방식은 파일이 기기를 떠나지 않기 때문에 비용을 낮게 유지합니다. 이를 통해 최소한의 광고로 지원되는 완전 무료 도구를 제공할 수 있습니다.",
    faqQ2: "Pro가 출시되면 어떻게 되나요?",
    faqA2: "Pro가 출시되어도 모든 현재 무료 도구는 계속 완전히 무료로 유지됩니다. Pro는 OCR, 더 높은 변환 품질, 배치 처리와 같은 고급 기능을 필요로 하는 사용자에게 추가합니다. 기존 기능이 유료화되지 않습니다."
  },
  about: {
    title: "toolconv 소개",
    subtitle: "브라우저에서 완전히 실행되는 프라이버시 우선 PDF 도구입니다.",
    missionTitle: "우리의 사명",
    missionDesc: "toolconv는 간단한 사명으로 만들어졌습니다: 개인 정보를 존중하는 강력하고 전문적인 품질의 PDF 도구를 제공하는 것입니다. 파일 처리는 다른 사람의 서버가 아닌 사용자의 기기에서 이루어져야 한다고 믿습니다. 우리가 구축하는 모든 도구는 클라이언트 측 JavaScript를 사용하여 브라우저에서 완전히 실행됩니다 — 파일이 컴퓨터를 떠나지 않습니다.",
    value1Title: "🔒 100% 비공개",
    value1Desc: "파일이 브라우저에서 로컬로 처리됩니다. 업로드, 저장 또는 공유되지 않습니다. 데이터에 대한 서버 액세스가 전혀 없습니다.",
    value2Title: "🖥️ 브라우저 기반",
    value2Desc: "다운로드나 설치가 필요 없습니다. 모든 것이 최신 브라우저에서 직접 작동합니다. WebAssembly와 클라이언트 측 JavaScript로 구동됩니다.",
    value3Title: "💰 완전 무료",
    value3Desc: "모든 도구는 제한 없이 무료로 사용할 수 있으며 가입이나 숨은 비용이 없습니다. PDF 도구를 모든 사람이 이용할 수 있어야 한다고 믿습니다.",
    value4Title: "🌍 오프라인 작동",
    value4Desc: "한 번 로드되면 많은 도구가 인터넷 연결 없이도 작동할 수 있습니다. 여행자, 원격 근무자 및 데이터 프라이버시에 관심이 있는 분들에게 적합합니다.",
    storyTitle: "우리의 이야기",
    storyDesc: "toolconv는 간단한 관찰에서 시작되었습니다: 대부분의 '무료' 온라인 PDF 도구는 실제로 파일을 서버에 업로드하고, 원격으로 처리하며, 종종 데이터를 판매하거나 기능을 비싼 구독 뒤에 잠급니다. 더 나은 대안을 구축하고 싶었습니다 — 모든 처리가 클라이언트 측에서 이루어지고, 프라이버시가 아키텍처에 내장되며, 강력한 PDF 도구가 모든 사람에게 무료로 유지되는 것입니다. 오늘날 toolconv는 전 세계 사용자에게 20개 이상의 브라우저 기반 PDF 도구를 제공하며, 모두 100% 무료이고 프라이버시 우선입니다."
  },
  privacy: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트: 2026년 6월 1일",
    intro: "toolconv에서 개인정보는 최우선 사항입니다. 이 정책은 서비스 이용 시 데이터 처리 방식을 설명합니다.",
    s1Title: "1. 데이터 업로드 없음",
    s1Content: "모든 PDF 처리는 클라이언트 측 JavaScript를 사용하여 브라우저에서 완전히 이루어집니다. 파일이 당사 서버에 업로드되지 않습니다 — 처음부터 끝까지 기기에 남아 있습니다. 문서에 대한 서버 측 액세스 권한이 없으며 로컬 머신 외부에서 파일을 저장, 처리 또는 전송하지 않습니다.",
    s2Title: "2. 쿠키 없음 (분석 제외)",
    s2Content: "핵심 사이트 운영을 위해 기능적 쿠키를 사용하지 않습니다. 이 사이트에서 사용되는 유일한 쿠키는 광고 개인화 및 보고를 위한 Google AdSense의 쿠키입니다. 이는 Google의 개인정보 처리방침의 적용을 받는 타사 쿠키입니다. 브라우저 설정을 통해 쿠키 기본 설정을 관리할 수 있습니다.",
    s3Title: "3. 분석 및 광고",
    s3Content: "이 사이트는 Google AdSense를 사용하며, 관련 광고를 제공하기 위해 방문에 대한 데이터(조회한 페이지 및 광고 상호작용 등)를 수집하고 사용할 수 있습니다. Google AdSense는 쿠키 및 유사 기술을 사용합니다. 자세한 내용은 policies.google.com/privacy의 Google 개인정보 처리방침을 검토하세요. 당사는 개인 분석 데이터를 수집하거나 저장하지 않습니다 — 서버 로그, AdSense 외부의 추적 스크립트, Google Analytics와 같은 분석 플랫폼이 없습니다.",
    s4Title: "4. 계정 불필요",
    s4Content: "사용자 계정이나 등록이 필요하지 않습니다. 가입 절차, 이메일 수집, 사용자 프로필이 없습니다. 즉, 본질적으로 귀하에 대한 개인 식별 정보를 수집하지 않습니다. 도구 사용은 완전히 익명입니다.",
    s5Title: "5. 타사 링크",
    s5Content: "당사 사이트에는 타사 사이트에 대한 링크가 포함될 수 있습니다(예: 자매 프로젝트 image.toolconv.com 및 unit.toolconv.com, 또는 Google AdSense 광고). 이러한 외부 사이트의 개인정보 보호 관행에 대해 책임을 지지 않습니다. 이용하기 전에 개인정보 처리방침을 검토하시기 바랍니다.",
    contact: "이 개인정보 처리방침에 대해 문의사항이 있으시면 support@toolconv.com으로 연락해 주십시오."
  },
  terms: {
    title: "서비스 이용약관",
    lastUpdated: "최종 업데이트: 2026년 6월 1일",
    intro: "toolconv에 오신 것을 환영합니다. 당사 웹사이트와 도구를 사용함으로써 다음 약관에 동의하게 됩니다. 주의 깊게 읽어 주십시오.",
    s1Title: "1. 무료 사용",
    s1Content: "toolconv의 모든 도구는 무료로 제공됩니다. 지불이 필요하지 않으며 구독이 필요하지 않습니다. 향후 프리미엄 기능을 도입할 권리를 보유하지만, 기존의 모든 무료 도구는 계속 무료로 유지됩니다.",
    s2Title: "2. 개인정보 보호 약속",
    s2Content: "귀하의 개인정보는 당사 서비스의 기초입니다. 모든 파일 처리는 귀하의 브라우저에서 로컬로 이루어집니다. 당사는 귀하의 파일에 액세스할 수 없으며 저장, 처리 또는 전송하지 않습니다. 자세한 내용은 개인정보 처리방침을 참조하십시오.",
    s3Title: "3. 허용되는 사용",
    s3Content: "귀하는 합법적인 목적과 본 약관에 따라서만 toolconv를 사용하는 데 동의합니다. 불법 콘텐츠 처리, 타인의 지적 재산권 침해 또는 서비스 방해 시도에 도구를 사용할 수 없습니다.",
    s4Title: "4. 보증 부인",
    s4Content: "toolconv는 명시적이거나 묵시적인 보증 없이 '있는 그대로' 제공됩니다. 정확성과 신뢰성을 위해 노력하지만 도구가 오류 없이 중단 없이 작동한다고 보장하지 않습니다. 출력 품질은 입력 파일에 따라 다를 수 있습니다. 사용자의 재량에 따라 사용하십시오.",
    s5Title: "5. 책임 제한",
    s5Content: "toolconv 및 그 운영자는 도구 사용 또는 사용 불가능으로 인해 발생하는 손해에 대해 책임을 지지 않습니다. 여기에는 데이터 손실, 업무 중단 또는 간접 손해가 포함되지만 이에 국한되지 않습니다. 당사의 전체 책임은 관련 법률이 허용하는 최대 범위로 제한됩니다.",
    s6Title: "6. 연락처",
    s6Content: "본 약관에 관한 문의사항은 support@toolconv.com으로 연락해 주십시오."
  },
  contact: {
    title: "문의하기",
    subtitle: "여러분의 의견을 듣고 싶습니다. 질문, 제안 또는 피드백이 있으시면 연락해 주세요.",
    emailTitle: "📧 이메일 지원",
    emailDesc: "질문, 버그 신고 또는 일반 문의:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 기능 요청",
    featureDesc: "새로운 도구나 개선에 대한 아이디어가 있으신가요? 귀 기울여 듣겠습니다! 제안을 보내주시면 향후 업데이트에서 고려하겠습니다.",
    responseTitle: "⏱️ 응답 시간",
    responseDesc: "보통 영업일 기준 24시간 이내에 답변을 드립니다. 여러분의 시간을 소중히 여기며 가능한 한 빨리 답변드리겠습니다."
  }
}
};
export default dict;
