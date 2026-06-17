import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "أدوات PDF مجانية عبر الإنترنت",
    description: "أدوات PDF مجانية عبر الإنترنت تعمل بالكامل في متصفحك. دمج، تقسيم، ضغط، تحرير وتحويل PDF — بدون رفع، بدون تسجيل، خصوصية 100%."
},
  header: {
    mergePdf: "دمج PDF",
    splitPdf: "تقسيم PDF",
    compressPdf: "ضغط PDF",
    convert: "تحويل",
    allTools: "جميع الأدوات"
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
    badgeOffline: "يعمل بدون إنترنت"
},
  tools: {
    heading: "جميع أدوات PDF",
    countLabel: (n) => `${n} أداة متاحة — اختر واحدة للبدء`
},
  toolItems: {
    "merge-pdf": {
      title: "دمج PDF",
      description: "ادمج ملفات PDF بالترتيب الذي تريده باستخدام أسهل أداة دمج PDF متاحة.",
      longDescription: "ادمج ملفات PDF متعددة في مستند واحد. ما عليك سوى رفع ملفات PDF وترتيبها بالترتيب المطلوب وتنزيل النتيجة المدمجة. تتم جميع المعالجة محليًا في متصفحك."
},
    "split-pdf": {
      title: "تقسيم PDF",
      description: "افصل صفحة واحدة أو مجموعة كاملة لتحويلها بسهولة إلى ملفات PDF مستقلة.",
      longDescription: "قم بتقسيم مستند PDF إلى صفحات فردية أو استخراج نطاقات صفحات محددة. اختر التقسيم حسب الصفحة أو حسب النطاق أو استخراج كل صفحة كملف منفصل. 100% قائم على المتصفح."
},
    "organize-pdf": {
      title: "تنظيم PDF",
      description: "قم بفرز أو حذف أو إضافة صفحات إلى PDF. اسحب وأفلت لإعادة الترتيب.",
      longDescription: "أعد ترتيب صفحات PDF كما تريد. احذف الصفحات غير المرغوب فيها أو أضف صفحات جديدة أو أعد ترتيب الصفحات الموجودة بواجهة سحب وإفلات بسيطة. تتم جميع المعالجة محليًا."
},
    "compress-pdf": {
      title: "ضغط PDF",
      description: "قلل حجم الملف مع تحسين جودة PDF القصوى.",
      longDescription: "اضغط PDF لتقليل حجم الملف دون فقدان كبير في الجودة. مثالي لمرفقات البريد الإلكتروني والتحميل عبر الويب. اختر مستوى الضغط. تتم المعالجة بالكامل في متصفحك."
},
    "pdf-to-word": {
      title: "PDF إلى Word",
      description: "حول ملفات PDF بسهولة إلى مستندات DOC و DOCX قابلة للتحرير.",
      longDescription: "استخرج محتوى النص من PDF واحفظه كملف Word (DOCX). ⚠️ ملاحظة: هذه الأداة تقوم باستخراج النص فقط ولا تحافظ على التنسيق الأصلي أو الصور أو تخطيط الجداول. مناسبة لاستخراج المحتوى النصي للتحرير الإضافي."
},
    "pdf-to-jpg": {
      title: "PDF إلى JPG",
      description: "حول كل صفحة PDF إلى JPG أو استخرج جميع الصور الموجودة في PDF.",
      longDescription: "حول صفحات PDF إلى صور JPG عالية الجودة. اختر الدقة ومستوى الجودة المطلوبين. مثالي لمشاركة محتوى PDF على وسائل التواصل الاجتماعي أو تضمينه في العروض التقديمية. 100% قائم على المتصفح."
},
    "jpg-to-pdf": {
      title: "JPG إلى PDF",
      description: "حول صور JPG إلى PDF في ثوان. اضبط الاتجاه والهوامش بسهولة.",
      longDescription: "حول صورة JPG/JPEG واحدة أو متعددة إلى مستند PDF. رتب الصور بالترتيب واختر حجم الصفحة واتجاهها. تتم جميع المعالجة محليًا في متصفحك."
},
    "pdf-to-png": {
      title: "PDF إلى PNG",
      description: "حول صفحات PDF إلى صور PNG عالية الجودة بدون فقدان.",
      longDescription: "استخرج صفحات PDF كصور PNG بدون فقدان مع دعم الشفافية. مثالي للرسومات ولقطات الشاشة والمحتوى الذي يتطلب إعادة إنتاج مثالية للبكسل. قائم بالكامل على المتصفح."
},
    "pdf-to-image": {
      title: "PDF إلى صورة",
      description: "حول صفحات PDF إلى صور JPG أو PNG. اختر الجودة والدقة.",
      longDescription: "حول كل صفحة من PDF إلى صور عالية الجودة. اختر بين JPG (جودة قابلة للتعديل لملفات أصغر) أو PNG (بدون فقدان، مثالي للرسومات). اضبط الدقة للحصول على نتائج واضحة. كل ذلك محليًا في متصفحك."
},
    "pdf-to-text": {
      title: "PDF إلى نص",
      description: "استخرج المحتوى النصي من مستندات PDF.",
      longDescription: "استخرج المحتوى النصي من ملفات PDF. مثالي لإعادة استخدام المحتوى أو استخراج البيانات أو جعل PDF قابلاً للبحث. يعمل محليًا في متصفحك."
},
    "word-to-pdf": {
      title: "Word إلى PDF",
      description: "اجعل ملفات DOC و DOCX سهلة القراءة عن طريق تحويلها إلى PDF.",
      longDescription: "حول مستندات Microsoft Word (DOCX) إلى تنسيق PDF للمشاركة والطباعة بسهولة. حافظ على التنسيق والصور والتخطيط."
},
    "excel-to-pdf": {
      title: "Excel إلى PDF",
      description: "اجعل جداول بيانات Excel سهلة القراءة عن طريق تحويلها إلى PDF.",
      longDescription: "حول جداول بيانات Microsoft Excel (XLSX) إلى PDF. حافظ على تنسيق الجدول والرسوم البيانية وتخطيط البيانات للمشاركة المهنية."
},
    "edit-pdf": {
      title: "تحرير PDF",
      description: "أضف نصًا أو صورًا أو أشكالاً أو تعليقات توضيحية إلى مستند PDF.",
      longDescription: "أضف نصًا وصورًا وأشكالاً وتعليقات توضيحية إلى PDF. غير حجم الخط ولون وموضع المحتوى المضاف. ملاحظة: تحرير نص PDF الموجود يتطلب معالجة من جانب الخادم."
},
    "watermark-pdf": {
      title: "إضافة علامة مائية",
      description: "اختم النص أو الصور على PDF في ثوان. اختر الخط والشفافية والموضع.",
      longDescription: "أضف علامات مائية نصية أو صورية مخصصة إلى مستندات PDF. تحكم في الشفافية والتدوير والموضع والتكرار. مثالي للعلامات التجارية وحماية حقوق النشر أو وضع علامات حالة المستند. 100% من جانب العميل."
},
    "rotate-pdf": {
      title: "تدوير PDF",
      description: "قم بتدوير صفحات PDF بالطريقة التي تريدها. يمكنك حتى تدوير عدة PDF في وقت واحد!",
      longDescription: "قم بتدوير الصفحات الفردية أو مستندات PDF بأكملها. اختر تدوير 90° أو 180° أو 270°. تتم جميع المعالجة فورًا في متصفحك."
},
    "page-numbers": {
      title: "إضافة أرقام الصفحات",
      description: "أضف أرقام الصفحات إلى PDF بسهولة. اختر الموضع والأبعاد والخط.",
      longDescription: "أضف أرقام صفحات قابلة للتخصيص إلى مستندات PDF. اختر الموضع (أعلى/أسفل، يسار/وسط/يمين) ورقم البداية وحجم الخط ونمطه. جميع المعالجة قائمة على المتصفح."
},
    "crop-pdf": {
      title: "قص PDF",
      description: "قص هوامش مستندات PDF أو حدد مناطق محددة.",
      longDescription: "قص صفحات PDF — أزل الهوامش غير المرغوب فيها أو قص المسافات البيضاء أو حدد مناطق محددة. طبق نفس القص على جميع الصفحات أو خصص لكل صفحة."
},
    "protect-pdf": {
      title: "حماية PDF",
      description: "احمِ ملفات PDF بكلمة مرور. شفر مستندات PDF لمنع الوصول غير المصرح به.",
      longDescription: "أضف حماية بكلمة مرور لملفات PDF باستخدام تشفير AES. عيّن كلمة مرور المستخدم (لفتح) وكلمة مرور المالك (للأذونات). تحكم في أذونات الطباعة والنسخ والتعديل. كل التشفير يحدث محليًا."
},
    "unlock-pdf": {
      title: "إلغاء القفل",
      description: "أزل أمان كلمة مرور PDF، مما يمنحك حرية استخدام PDF كما تريد.",
      longDescription: "أزل الحماية بكلمة المرور من ملفات PDF (يجب أن تعرف كلمة المرور). افتح قفل PDF للتحرير أو الطباعة أو النسخ. المعالجة بالكامل من جانب العميل."
},
    "html-to-pdf": {
      title: "HTML إلى PDF",
      description: "حول صفحات الويب HTML إلى PDF. ما عليك سوى لصق URL وتحويله إلى PDF بنقرة واحدة.",
      longDescription: "حول صفحات الويب HTML إلى مستندات PDF. ما عليك سوى لصق URL أو إدخال كود HTML مباشرة. مثالي لحفظ المقالات أو الإيصالات أو الوثائق كـ PDF."
},
    "markdown-to-pdf": {
      title: "Markdown إلى PDF",
      description: "حول ملفات Markdown إلى مستندات PDF منسقة بشكل جميل.",
      longDescription: "حول مستندات Markdown إلى ملفات PDF جيدة التنسيق. يدعم الرؤوس وكتل الكود والجداول والصور. مثالي للتوثيق وملفات README والكتابة التقنية. 100% قائم على المتصفح."
},
    "heic-to-pdf": {
      title: "HEIC إلى PDF",
      description: "حول صور HEIC من iPhone إلى PDF في ثوان. لا حاجة للرفع.",
      longDescription: "حول صور iPhone و iPad (تنسيق HEIC/HEIF) إلى PDF. مثالي لمشاركة الصور كمستندات. تتم جميع المعالجة في متصفحك."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "تحويل ملفات PDF الممسوحة ضوئياً إلى مستندات قابلة للبحث والاختيار.",
      longDescription: "استخراج النص من ملفات PDF والصور الممسوحة ضوئياً باستخدام OCR (التعرف البصري على الأحرف). اجعل المستندات الممسوحة ضوئياً قابلة للبحث والنسخ. يعمل OCR باللغة الإنجليزية محلياً؛ لغات إضافية متاحة."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "توقيع PDF",
      description: "أضف توقيعات مكتوبة بخط اليد أو مطبوعة إلى مستندات PDF الخاصة بك.",
      longDescription: "ارسم أو اكتب أو حمّل توقيعك وضعه على أي صفحة من PDF. يدعم الرسم بالماوس/اللمس، الكتابة مع اختيار الخط، أو تحميل صورة توقيع. حدد الموضع، غيّر الحجم، وحمل الPDF الموقّع — كل ذلك في متصفحك."
},
    "pdf-to-ppt": {
      title: "PDF إلى PPT",
      description: "حول ملفات PDF الخاصة بك إلى عروض PowerPoint قابلة للتحرير.",
      longDescription: "حول مستندات PDF إلى تنسيق PowerPoint (PPTX) للتحرير والعرض بسهولة. هذا التحويل يتطلب معالجة من جانب الخادم وسيكون متاحاً في تحديث مستقبلي."
},
    "pdf-to-excel": {
      title: "PDF إلى Excel",
      description: "استخرج البيانات من جداول PDF وحولها إلى جداول بيانات Excel.",
      longDescription: "حول جداول وبيانات PDF إلى جداول بيانات Excel (XLSX). هذا التحويل يتطلب معالجة من جانب الخادم وسيكون متاحاً في تحديث مستقبلي."
}
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
    relatedTools: "أدوات ذات صلة"
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
    previewWarning: "وضع المعاينة. قد تكون بعض الإجراءات محدودة في الإصدار المعتمد على المتصفح.",
    selectHint: "اختر الملفات أعلاه للبدء.",
    comingSoon: "هذه الأداة غير متاحة في إصدار المتصفح. اختر أداة PDF متاحة من القائمة.",
    pages: "صفحات",
    mb: "م.ب",
    kb: "ك.ب",
    loadingFiles: "جارٍ تحميل الملفات...",
    unexpectedError: "حدث خطأ غير متوقع.",
    largeFileWarning: "ملف كبير — قد تستغرق المعالجة وقتًا أطول",
    // Edit PDF workspace
    reset: "إعادة تعيين",
    loadingPages: "جارٍ تحميل صفحات PDF...",
    textMode: "✏️ نص",
    selectMode: "👆 اختيار",
    enterTextPlaceholder: "أدخل النص لإضافته...",
    textModeTip: "انقر في أي مكان على الصفحة لوضع النص. قم بالتبديل إلى وضع الاختيار لحذف التعليقات التوضيحية.",
    selectModeTip: "انقر على تعليق توضيحي لحذفه. قم بالتبديل إلى وضع النص لإضافة المزيد من النص.",
    addTextFirst: "أضف التعليقات التوضيحية النصية أولاً",
    annotationsCount: (n) => `التعليقات (${n})`,
    clearPage: "مسح الصفحة",
    selectAllAnnotations: "تحديد الكل",
    undo: "↩ تراجع",
    redo: "↪ إعادة",
    fontSizeLabel: "حجم الخط",
    fontSmall: "صغير",
    fontMedium: "متوسط",
    fontLarge: "كبير",
    applyEdits: (n) => `تطبيق التعديلات والتنزيل (${n} تعليق)`,
    applyingEdits: "جارٍ تطبيق التعديلات...",
    page: "صفحة",
    prev: "◀ السابق",
    next: "التالي ▶",
    failedToLoad: "فشل تحميل PDF",
    processingFailed: "فشلت المعالجة",
    noUploadEdit: "بدون رفع — كل التحرير يتم محليًا",
    // Crop PDF workspace
    fullPage: "الصفحة كاملة",
    autoMargin: "هامش تلقائي",
    cropRegion: "منطقة القص",
    dragToResize: "— اسحب الزوايا لتغيير الحجم، اسحب المركز للتحريك",
    cropAllPages: (n) => `تطبيق القص على كل ${n} صفحات`,
    cropSinglePage: "قص الصفحة الحالية",
    croppingPages: "جارٍ قص الصفحات...",
    noUploadCrop: "بدون رفع — كل القص يتم محليًا",
    presetA4: "A4",
    presetLetter: "خطاب",
    presetSquare: "مربع",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "بدّل بين علامات التبويب لمعاينة كل صفحة.",
    applyToAllPages: "تطبيق على جميع الصفحات",
    cropX: "X",
    cropY: "Y",
    cropWidth: "العرض",
    cropHeight: "الارتفاع",
    // Sign PDF workspace
    signDrawTab: "رسم",
    signTypeTab: "كتابة",
    signUploadTab: "رفع",
    signClearSignature: "مسح التوقيع",
    signPlaceOnPage: "انقر على PDF لوضع توقيعك. اسحب لتغيير الموضع.",
    signSignAndDownload: "توقيع وتنزيل",
    signFontSelector: "نمط التوقيع",
    signDrawHint: "ارسم توقيعك أدناه باستخدام الماوس أو اللمس",
    signTypeHint: "اكتب توقيعك أدناه",
    // Organize PDF workspace
    pagesCount: (n) => `${n} صفحة`,
    dragReorderClickDelete: "— اسحب لإعادة الترتيب، انقر للحذف",
    removePage: "إزالة الصفحة",
    saveNewOrder: (n) => `حفظ الترتيب الجديد (${n} صفحات)`,
    reorganizingPages: "جارٍ إعادة ترتيب الصفحات...",
    noUploadOrganize: "بدون رفع — اسحب وأفلت الصفحات في متصفحك",
    // Rotate PDF workspace
    rotateAngle: "زاوية الدوران",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "نص العلامة المائية",
    watermarkOpacity: "الشفافية",
    watermarkSize: "حجم الخط",
    watermarkFontFamily: "عائلة الخط",
    watermarkRotation: "الدوران (درجة)",
    watermarkPosition: "الموضع",
    watermarkColor: "اللون",
    fontSerif: "Serif",
    fontSansSerif: "Sans-Serif",
    fontMonospace: "Monospace",
    positionCenter: "الوسط",
    positionTopLeft: "أعلى اليسار",
    positionTopRight: "أعلى اليمين",
    positionBottomLeft: "أسفل اليسار",
    positionBottomRight: "أسفل اليمين",
    positionTile: "تكرار / بلاطة",
    // Protect/Unlock PDF workspace
    enterPassword: "أدخل كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    passwordMismatch: "كلمات المرور غير متطابقة",
    showPassword: "إظهار",
    hidePassword: "إخفاء",
    protectPdf: "حماية PDF",
    unlockPdf: "إلغاء القفل",
    pdfNotEncrypted: "هذا PDF غير مشفر",
    unsupportedEncryption: "نوع تشفير غير مدعوم",
    incorrectPassword: "كلمة المرور غير صحيحة",
    // Compress PDF workspace
    compressLevels: {
      label: "مستوى الضغط",
      light: "خفيف",
      standard: "قياسي",
      maximum: "أقصى",
    },
    // Split PDF workspace
    splitMode: "وضع التقسيم",
    splitEveryPage: "تقسيم كل صفحة",
    splitByRange: "تقسيم حسب النطاق",
    extractPages: "استخراج الصفحات",
    splitEveryN: "تقسيم كل N صفحة",
    rangePlaceholder: "مثال: 1-3,4-6,7-10",
    pagesPlaceholder: "مثال: 1,3,5,7",
    nPlaceholder: "مثال: 2",
    invalidRange: "تنسيق النطاق غير صالح",
    // Merge PDF workspace
    mergeOrder: "ترتيب الدمج",
    dragToReorder: "اسحب لإعادة ترتيب تسلسل الدمج",
    mergeAndDownload: "دمج وتنزيل",
    mergingFiles: "جار دمج الملفات...",
    addMore: "إضافة المزيد من الملفات",
    removeFile: "إزالة الملف",
    needAtLeastTwo: "أضف ملفي PDF على الأقل للدمج",
    files: "ملفات",
    // Shared option labels
    pageSize: "حجم الصفحة",
    a4: "A4",
    letter: "Letter",
    original: "الحجم الأصلي",
    orientation: "الاتجاه",
    auto: "تلقائي",
    portrait: "عمودي",
    landscape: "أفقي",
    margins: "الهوامش",
    marginNone: "بلا",
    marginNarrow: "ضيق",
    marginMedium: "متوسط",
    marginWide: "واسع",
    marginSmall: "صغير",
    marginLarge: "كبير",
    remove: "إزالة",
    paperSize: "حجم الورق",
    // Page Numbers workspace
    position: "الموضع",
    startNumber: "رقم البداية",
    formatDigits: "1, 2, 3",
    formatPageX: "الصفحة 1, الصفحة 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "حدث خطأ أثناء إضافة أرقام الصفحات",
    // Word to PDF workspace
    parsingWord: "جارٍ تحليل مستند Word...",
    // Excel to PDF workspace
    parsingSpreadsheet: "جارٍ تحليل جدول البيانات...",
    // HTML to PDF workspace
    loadingHtml: "جارٍ تحميل HTML...",
    renderScale: "مقياس العرض",
    // Markdown to PDF workspace
    processingMarkdown: "جارٍ معالجة Markdown...",
    codeHighlight: "إبراز الكود",
    on: "تشغيل",
    off: "إيقاف",
    // HEIC to PDF workspace
    decodingHeic: "جارٍ فك تشفير ملف HEIC...",
    // OCR PDF workspace
    ocrInitializing: "جارٍ التهيئة...",
    ocrLoadingEngine: "جارٍ تحميل محرك OCR...",
    ocrLanguage: "اللغة",
    ocrLangEn: "الإنجليزية",
    ocrLangZh: "الصينية + الإنجليزية",
    ocrLangJa: "اليابانية + الإنجليزية",
    ocrOutputFormat: "تنسيق الإخراج",
    ocrFormatText: "نص عادي",
    ocrFormatPdf: "PDF مع طبقة نص",
    ocrProgress: (page, total) => `الصفحة ${page}/${total}`,
    ocrError: "حدث خطأ أثناء معالجة OCR",
    // PDF to Word workspace
    buildingWord: "جارٍ إنشاء مستند Word...",
    generatingDocx: "جارٍ إنشاء ملف DOCX...",
    pageSeparator: "فاصل الصفحات",
    separatorPageBreak: "فاصل صفحات",
    separatorContinuous: "مستمر",
    includePageNumbers: "تضمين أرقام الصفحات",
    pdfToWordError: "حدث خطأ أثناء التحويل إلى Word",
    // Protect PDF workspace
    encryptionAlgorithm: "التشفير",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128 بت",
    encryptAes256Desc: "PDF 2.0 — أقصى أمان",
    encryptRc4Desc: "متوافق مع قارئات PDF القديمة",
    permissions: "الأذونات",
    allowPrinting: "السماح بالطباعة",
    allowCopying: "السماح بنسخ النص",
    allowModifying: "السماح بالتعديل",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "الأدلة والدروس التعليمية",
    description: "دروس وأدلة خطوة بخطوة لمعالجة الصور وPDF. تعلم النصائح والحيل وأفضل الممارسات.",
    browseGuides: "تصفح الأدلة",
    readGuide: "اقرأ الدليل →",
    backToGuides: "← العودة إلى الأدلة",
    breadcrumbGuides: "الأدلة",
  },
  convert: {
    converter: "محول",
    free: "مجاني عبر الإنترنت",
    noUpload: "لا حاجة للرفع — كل المعالجة تتم في متصفحك",
    subtitle: (from, to) => `تحويل ملفات ${from} (${from.toUpperCase()}) إلى صيغة ${to} (${to.toUpperCase()}) عبر الإنترنت، مجانًا و`,
    browserBased: "قائم على المتصفح",
    experimental: "تجريبي",
    comingSoon: "تحويل غير مدعوم",
    comingSoonDesc: "يتطلب هذا النوع من التحويل معالجة من جانب الخادم، وهو غير متاح في إصدار المتصفح الحالي.",
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
    subtitleGeneric: "تحويل PDF من وإلى صيغ مختلفة. مجاني، بدون رفع، يعمل في المتصفح.",
    relatedConversions: "تحويلات ذات صلة"
},
  category: {
    all: "الكل",
    organize: "تنظيم PDF",
    optimize: "تحسين PDF",
    convert: "تحويل PDF",
    edit: "تحرير PDF",
    security: "أمان PDF",
    intelligence: "ذكاء PDF",
    workflow: "سير العمل"
},
  dropzone: {
    dropHere: "أسقط الملفات هنا",
    dragDropHere: "اسحب وأفلت الملفات هنا",
    orClickBrowse: "أو انقر للتصفح",
    filesUpTo: "ملفات، حتى",
    multipleSupported: "(يدعم ملفات متعددة)",
    fileExceed: "الملف(ات) يتجاوز حد الحجم:",
    invalidFileType: "تنسيق ملف غير صالح. يرجى تحميل ملف PDF صالح."
},
  toolCard: {
    new: "جديد",
    pro: "احترافي"
},
  pdfToImage: {
    title: "PDF إلى صورة",
    description: "حول صفحات PDF إلى صور JPG أو PNG. اختر الجودة والدقة.",
    formatLabel: "تنسيق الإخراج",
    qualityLabel: "جودة JPEG",
    scaleLabel: "الدقة",
    pngOption: "PNG (بدون فقدان)",
    jpgOption: "JPG (أصغر حجماً)",
    convertBtn: "تحويل إلى صور",
    preview: "صورة تم إنشاؤها",
    pageLabel: "صفحة",
    downloadPage: "تحميل",
    downloadAll: "تحميل الكل",
    noFile: "اختر ملف PDF أعلاه لتحويل صفحاته إلى صور.",
    renderingPages: "جارٍ عرض صفحات PDF..."
},
  footer: {
    product: "المنتج",
    popularTools: "الأدوات الشائعة",
    convert: "تحويل",
    company: "الشركة",
    privacy: "الخصوصية",
    privacyLine: "جميع معالجة PDF تتم بالكامل في متصفحك. ملفاتك لا يتم رفعها أبدًا إلى أي خادم.",
    home: "الرئيسية",
    allTools: "جميع الأدوات",
    pricing: "الأسعار",
    about: "حول",
    terms: "الشروط",
    contact: "اتصل بنا",
    alsoTry: "جرب أيضًا：",
    imageTools: "🖼️ أدوات الصور",
    unitConverter: "🔄 محول الوحدات",
    copyright: "جميع معالجة PDF تتم بالكامل في متصفحك. ملفاتك لا يتم رفعها أبدًا إلى أي خادم. 100% خصوصية."
},
pages: {
  pricing: {
    title: "الأسعار",
    subtitle: "بسيطة وشفافة — جميع أدوات PDF مجانية 100%.",
    freeTier: "مجاني",
    freeDesc: "يمكنك الوصول إلى جميع أدوات PDF بدون أي تكلفة. لا رسوم مخفية، لا اشتراك — فقط معالجة PDF قوية ومجانية مباشرة في متصفحك.",
    freeFeature1: "جميع أدوات PDF الـ 20+ مشمولة",
    freeFeature2: "لا حاجة للتسجيل أو الاشتراك",
    freeFeature3: "لا حدود لحجم الملف",
    freeFeature4: "100% قائم على المتصفح — بدون رفع، بدون خوادم",
    proTier: "احترافي",
    proDesc: "الميزات المتقدمة للمستخدمين المحترفين ليست جزءًا من إصدار المتصفح المجاني.",
    ocrNote: "يتطلب OCR (التعرف الضوئي على الأحرف) معالجة على الخادم ولا يتضمنه إصدار المتصفح المجاني.",
    faqQ1: "لماذا الأدوات مجانية؟",
    faqA1: "نعتقد أن أدوات PDF الأساسية يجب أن تكون في متناول الجميع. نهجنا القائم على المتصفح يبقي التكاليف منخفضة لأن الملفات لا تغادر جهازك أبداً. هذا يتيح لنا تقديم جميع الأدوات مجاناً تماماً، مدعومة بإعلانات بسيطة.",
    faqQ2: "ماذا سيحدث عند إطلاق الإصدار الاحترافي؟",
    faqA2: "عند إطلاق الإصدار الاحترافي، ستبقى جميع الأدوات المجانية الحالية مجانية تماماً. سيضيف الإصدار الاحترافي ميزات متقدمة مثل OCR وجودة تحويل أعلى ومعالجة دفعة للمستخدمين الذين يحتاجونها. لن يتم نقل أي وظيفة حالية خلف حاجز دفع."
  },
  about: {
    title: "حول toolconv",
    subtitle: "أدوات PDF تركز على الخصوصية وتعمل بالكامل في متصفحك.",
    missionTitle: "مهمتنا",
    missionDesc: "تم إنشاء toolconv بمهمة بسيطة: توفير أدوات PDF قوية واحترافية تحترم خصوصيتك. نعتقد أن معالجة الملفات يجب أن تحدث على جهازك، وليس على خادم شخص آخر. كل أداة نبنيها تعمل بالكامل في متصفحك باستخدام JavaScript من جانب العميل — ملفاتك لا تغادر جهاز الكمبيوتر الخاص بك أبداً.",
    value1Title: "🔒 100% خصوصية",
    value1Desc: "تتم معالجة ملفاتك محلياً في متصفحك. لا يتم رفعها أو تخزينها أو مشاركتها أبداً. لا وصول للخادم لبياناتك.",
    value2Title: "🖥️ قائم على المتصفح",
    value2Desc: "لا تنزيلات، لا تثبيتات. كل شيء يعمل مباشرة في متصفحك الحديث. مدعوم بـ WebAssembly و JavaScript من جانب العميل.",
    value3Title: "💰 مجاني بالكامل",
    value3Desc: "جميع الأدوات مجانية الاستخدام بدون حدود أو اشتراكات أو تكاليف خفية. نؤمن بجعل أدوات PDF في متناول الجميع.",
    value4Title: "🌍 يعمل دون اتصال",
    value4Desc: "بمجرد تحميلها، يمكن للعديد من الأدوات العمل بدون اتصال بالإنترنت. مثالي للمسافرين والعاملين عن بعد وأي شخص يهتم بخصوصية البيانات.",
    storyTitle: "قصتنا",
    storyDesc: "بدأ toolconv بملاحظة بسيطة: معظم أدوات PDF المجانية على الإنترنت في الواقع ترفع ملفاتك إلى خوادمها، وتعالجها عن بعد، وغالباً ما تبيع بياناتك أو تقفل الميزات خلف اشتراكات باهظة. أردنا بناء بديل أفضل — حيث تتم جميع المعالجة من جانب العميل، حيث تكون الخصوصية جزءاً من البنية التحتية، وحيث تبقى أدوات PDF القوية مجانية للجميع. اليوم، يخدم toolconv مستخدمين حول العالم بأكثر من 20 أداة PDF قائمة على المتصفح، جميعها مجانية 100% وتركز على الخصوصية."
  },
  privacy: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: 1 يونيو 2026",
    intro: "في toolconv، خصوصيتك هي أولويتنا القصوى. تشرح هذه السياسة كيفية تعاملنا مع بياناتك عند استخدام خدماتنا.",
    s1Title: "1. بدون رفع بيانات",
    s1Content: "تتم جميع معالجة PDF بالكامل في متصفحك باستخدام JavaScript من جانب العميل. لا يتم رفع ملفاتك أبداً إلى خوادمنا — تبقى على جهازك من البداية إلى النهاية. ليس لدينا وصول من جانب الخادم إلى مستنداتك، ولا نقوم أبداً بتخزين أو معالجة أو نقل ملفاتك خارج جهازك المحلي.",
    s2Title: "2. بدون ملفات تعريف ارتباط (باستثناء التحليلات)",
    s2Content: "لا نستخدم ملفات تعريف ارتباط وظيفية لتشغيل الموقع الأساسي. ملفات تعريف الارتباط الوحيدة المستخدمة في هذا الموقع هي من Google AdSense لتخصيص الإعلانات والتقارير. هذه ملفات تعريف ارتباط تابعة لجهات خارجية تخضع لسياسة خصوصية Google. يمكنك إدارة تفضيلات ملفات تعريف الارتباط الخاصة بك من خلال إعدادات المتصفح.",
    s3Title: "3. التحليلات والإعلانات",
    s3Content: "يستخدم هذا الموقع Google AdSense، والذي قد يجمع ويستخدم بيانات حول زيارتك (مثل الصفحات التي تم عرضها وتفاعلات الإعلانات) لعرض إعلانات ذات صلة. يستخدم Google AdSense ملفات تعريف الارتباط والتقنيات المماثلة. لمزيد من المعلومات، يرجى مراجعة سياسة خصوصية Google على policies.google.com/privacy. نحن لا نقوم بجمع أو تخزين أي بيانات تحليلية شخصية بأنفسنا — لا سجلات خادم، ولا نصوص تتبع تتجاوز AdSense، ولا منصات تحليلات مثل Google Analytics.",
    s4Title: "4. لا حاجة لحساب",
    s4Content: "لا نطلب حسابات مستخدمين أو تسجيل. لا توجد عملية اشتراك، ولا جمع للبريد الإلكتروني، ولا ملفات تعريف للمستخدمين. هذا يعني أننا بطبيعتنا لا نجمع أي معلومات تعريف شخصية عنك. استخدامك لأدواتنا مجهول تماماً.",
    s5Title: "5. روابط جهات خارجية",
    s5Content: "قد يحتوي موقعنا على روابط لمواقع خارجية (مثل المشاريع الشقيقة image.toolconv.com و unit.toolconv.com، أو إعلانات Google AdSense). نحن لسنا مسؤولين عن ممارسات الخصوصية لهذه المواقع الخارجية. نشجعك على مراجعة سياسات الخصوصية الخاصة بهم قبل التعامل معهم.",
    contact: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على support@toolconv.com."
  },
  terms: {
    title: "شروط الخدمة",
    lastUpdated: "آخر تحديث: 1 يونيو 2026",
    intro: "مرحباً بك في toolconv. باستخدام موقعنا وأدواتنا، فإنك توافق على الشروط التالية. يرجى قراءتها بعناية.",
    s1Title: "1. الاستخدام المجاني",
    s1Content: "جميع الأدوات في toolconv مقدمة مجاناً. لا حاجة للدفع ولا حاجة للاشتراك. نحتفظ بالحق في تقديم ميزات متميزة في المستقبل، ولكن جميع الأدوات المجانية الحالية ستبقى مجانية.",
    s2Title: "2. التزام الخصوصية",
    s2Content: "خصوصيتك أساسية لخدمتنا. جميع معالجة الملفات تتم محلياً في متصفحك. ليس لدينا إمكانية الوصول إلى ملفاتك، ولا نقوم بتخزينها أو معالجتها أو نقلها. للحصول على التفاصيل الكاملة، انظر سياسة الخصوصية الخاصة بنا.",
    s3Title: "3. الاستخدام المقبول",
    s3Content: "أنت توافق على استخدام toolconv فقط للأغراض القانونية ووفقاً لهذه الشروط. لا يجوز لك استخدام أدواتنا لمعالجة محتوى غير قانوني، أو انتهاك الملكية الفكرية للآخرين، أو محاولة تعطيل خدمتنا.",
    s4Title: "4. بدون ضمان",
    s4Content: "يتم تقديم toolconv 'كما هو' بدون أي ضمان، صريح أو ضمني. بينما نسعى للدقة والموثوقية، لا نضمن أن الأدوات ستكون خالية من الأخطاء أو متواصلة. قد تختلف جودة الإخراج اعتماداً على ملفات الإدخال. الاستخدام حسب تقديرك الخاص.",
    s5Title: "5. تحديد المسؤولية",
    s5Content: "لن يكون toolconv ومشغليه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام أدواتنا، بما في ذلك على سبيل المثال لا الحصر فقدان البيانات، أو انقطاع الأعمال، أو أي أضرار غير مباشرة. مسؤوليتنا الكاملة محدودة بالحد الأقصى المسموح به بموجب القانون المعمول به.",
    s6Title: "6. الاتصال",
    s6Content: "للأسئلة حول هذه الشروط، يرجى التواصل مع support@toolconv.com. يسعدنا توضيح أي استفسارات."
  },
  contact: {
    title: "اتصل بنا",
    subtitle: "يسعدنا سماع رأيك. تواصل معنا لأي أسئلة أو اقتراحات أو ملاحظات.",
    emailTitle: "📧 دعم البريد الإلكتروني",
    emailDesc: "للاستفسارات أو تقارير الأخطاء أو الاستفسارات العامة:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 طلبات الميزات",
    featureDesc: "هل لديك فكرة لأداة جديدة أو تحسين؟ نحن مستمعون! أرسل لنا اقتراحاتك وسننظر فيها للتحديثات المستقبلية.",
    responseTitle: "⏱️ وقت الاستجابة",
    responseDesc: "نرد عادةً في غضون 24 ساعة في أيام العمل. نحن نقدر وقتك وسنعود إليك في أسرع وقت ممكن."
  }
}
};
export default dict;
