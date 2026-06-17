// ─── Guides / Tutorials Data ───
// SEO-focused PDF tutorials in 12 languages

export interface GuideContent {
  title: string;
  description: string;
  paragraphs: string[];
  keywords: string[];
}

export interface GuideEntry {
  slug: string;
  label: string;
  content: Record<string, GuideContent>;
}

export const GUIDES: GuideEntry[] = [
  // ──────────────────────────────────────────
  // Guide 1: How to Merge PDF Files
  // ──────────────────────────────────────────
  {
    slug: "how-to-merge-pdf",
    label: "MERGE",
    content: {
      en: {
        title: "How to Merge PDF Files: Combine Documents Effortlessly",
        description: "Learn how to merge multiple PDF files into a single document. Step-by-step guide with tips on ordering, batch merging, and organizing your PDFs efficiently.",
        keywords: ["merge PDF files", "combine PDF", "PDF merger", "merge PDF online", "combine PDF documents", "free PDF merger"],
        paragraphs: [
          "Merging PDF files is a common task for anyone who works with digital documents. Whether you are combining chapters of a report or consolidating scanned contracts, merging saves time and keeps files organized.",
          "To merge PDFs online, simply upload your files and arrange them in your preferred order. Drag and drop each document to reorder, then click merge to combine them into a single PDF instantly.",
          "Most PDF merger tools support selecting specific pages from each file before merging. You can also rotate individual pages if some documents have mixed orientations, ensuring a consistent final output.",
          "For large documents, consider merging in batches of 5-10 files to avoid browser memory issues. Always ensure your PDFs are finalized before merging, as correcting individual files first is easier than editing a combined document.",
          "Browser-based PDF merging is the most private approach. Since all processing happens locally in your browser, your sensitive documents never leave your device. No uploads, no server storage, and no file size limits imposed by external infrastructure.",
        ],
      },
      zh: {
        title: "如何合并 PDF 文件：轻松组合文档",
        description: "学习如何将多个 PDF 文件合并为一个文档。包含排序、批量合并和高效组织 PDF 的逐步指南与技巧。",
        keywords: ["合并PDF文件", "合并PDF", "PDF合并工具", "在线合并PDF", "合并PDF文档", "免费PDF合并"],
        paragraphs: [
          "合并 PDF 文件是处理数字文档时的常见任务。无论是整合报告章节还是合并扫描合同，合并操作都能节省时间并保持文档整洁。",
          "在线合并 PDF 非常简单：上传文件并按偏好顺序排列。通过拖放调整文档顺序，然后点击合并按钮即可立即组合成一个 PDF。",
          "大多数 PDF 合并工具支持在合并前从每个文件中选择特定页面。如果文档方向混合，你还可以旋转个别页面，确保输出一致。",
          "处理大型文档时，建议每次合并 5-10 个文件以避免浏览器内存问题。合并前确保 PDF 已最终定稿，先单独修正文件比编辑合并后的文档更简单。",
          "基于浏览器的 PDF 合并是最隐私的方式。所有处理在浏览器本地完成，敏感文档不会离开你的设备。无需上传，无服务器存储，也没有外部基础设施的文件大小限制。",
        ],
      },
      ja: {
        title: "PDFファイルを結合する方法：簡単に文書を統合",
        description: "複数のPDFファイルを1つの文書に結合する方法を学びます。順序の並べ替え、一括結合、効率的な整理のためのステップバイステップガイド。",
        keywords: ["PDFファイルを結合", "PDFを統合", "PDF結合ツール", "オンラインでPDFを結合", "PDF文書を結合", "無料PDF結合"],
        paragraphs: [
          "PDFファイルの結合は、デジタル文書を扱う際の一般的な作業です。レポートの章を統合する場合でも、スキャンした契約書をまとめる場合でも、結合作業は時間を節約しファイルを整理します。",
          "オンラインでPDFを結合するには、ファイルをアップロードして順序を並べ替えるだけです。ドラッグ＆ドロップで文書を並べ替え、結合ボタンをクリックすると即座に1つのPDFに統合されます。",
          "ほとんどのPDF結合ツールは、結合前に各ファイルから特定のページを選択できます。ページの向きが混在している場合は、個別のページを回転させて出力を統一することも可能です。",
          "大規模な文書の場合は、ブラウザのメモリ問題を避けるため、5〜10ファイルずつ結合することをお勧めします。結合前にPDFが最終版であることを確認し、個別ファイルの修正を先に行いましょう。",
          "ブラウザベースのPDF結合は最もプライベートな方法です。すべての処理はブラウザ内でローカルに行われるため、機密文書がデバイスから離れることはありません。アップロード不要、サーバー保管なし、ファイルサイズ制限もありません。",
        ],
      },
      ko: {
        title: "PDF 파일 병합 방법: 문서를 손쉽게 결합하기",
        description: "여러 PDF 파일을 하나의 문서로 병합하는 방법을 알아보세요. 순서 정렬, 일괄 병합 및 효율적인 구성을 위한 단계별 가이드입니다.",
        keywords: ["PDF 파일 병합", "PDF 결합", "PDF 병합기", "온라인 PDF 병합", "PDF 문서 결합", "무료 PDF 병합"],
        paragraphs: [
          "PDF 파일 병합은 디지털 문서를 다루는 모든 사람에게 흔한 작업입니다. 보고서 장을 통합하거나 스캔한 계약서를 정리할 때 병합은 시간을 절약하고 파일을 체계적으로 유지합니다.",
          "온라인으로 PDF를 병합하려면 파일을 업로드하고 원하는 순서로 정렬하기만 하면 됩니다. 드래그 앤 드롭으로 문서를 재정렬하고 병합 버튼을 클릭하면 즉시 하나의 PDF로 결합됩니다.",
          "대부분의 PDF 병합 도구는 병합 전에 각 파일에서 특정 페이지를 선택할 수 있습니다. 페이지 방향이 혼합된 경우 개별 페이지를 회전하여 일관된 출력을 보장할 수 있습니다.",
          "대용량 문서의 경우 브라우저 메모리 문제를 피하기 위해 5-10개씩 배치로 병합하는 것이 좋습니다. 병합 전에 PDF가 최종 버전인지 확인하고 개별 파일을 먼저 수정하세요.",
          "브라우저 기반 PDF 병합은 가장 개인정보 보호 방식입니다. 모든 처리가 브라우저에서 로컬로 이루어지므로 민감한 문서가 장치를 떠나지 않습니다. 업로드 불필요, 서버 저장 없음, 파일 크기 제한도 없습니다.",
        ],
      },
      es: {
        title: "Cómo Fusionar Archivos PDF: Combina Documentos Fácilmente",
        description: "Aprende a fusionar varios archivos PDF en un solo documento. Guía paso a paso con consejos sobre ordenación, fusión por lotes y organización eficiente de tus PDF.",
        keywords: ["fusionar archivos PDF", "combinar PDF", "fusionador PDF", "fusionar PDF online", "combinar documentos PDF", "fusionador PDF gratuito"],
        paragraphs: [
          "Fusionar archivos PDF es una tarea común para quienes trabajan con documentos digitales. Ya sea combinando capítulos de un informe o consolidando contratos escaneados, fusionar ahorra tiempo y mantiene los archivos organizados.",
          "Para fusionar PDF en línea, simplemente sube tus archivos y ordénalos según tu preferencia. Arrastra y suelta cada documento para reordenarlo y haz clic en fusionar para combinarlos en un solo PDF al instante.",
          "La mayoría de las herramientas de fusión permiten seleccionar páginas específicas de cada archivo antes de fusionar. También puedes rotar páginas individuales si hay orientaciones mixtas, asegurando una salida consistente.",
          "Para documentos grandes, fusiona en lotes de 5-10 archivos para evitar problemas de memoria del navegador. Asegúrate de que los PDF estén finalizados antes de fusionar, ya que corregir archivos individuales es más sencillo.",
          "La fusión de PDF basada en navegador es el método más privado. Todo el procesamiento ocurre localmente en tu navegador, por lo que tus documentos sensibles nunca salen de tu dispositivo. Sin subidas, sin almacenamiento en servidores y sin límites de tamaño.",
        ],
      },
      fr: {
        title: "Comment Fusionner des Fichiers PDF : Combinez des Documents Facilement",
        description: "Apprenez à fusionner plusieurs fichiers PDF en un seul document. Guide pas à pas avec des conseils sur l'ordre, la fusion par lots et l'organisation efficace de vos PDF.",
        keywords: ["fusionner fichiers PDF", "combiner PDF", "fusionneur PDF", "fusionner PDF en ligne", "combiner documents PDF", "fusionneur PDF gratuit"],
        paragraphs: [
          "La fusion de fichiers PDF est une tâche courante pour ceux qui travaillent avec des documents numériques. Que vous combiniez des chapitres d'un rapport ou consolidiez des contrats scannés, la fusion fait gagner du temps et maintient les fichiers organisés.",
          "Pour fusionner des PDF en ligne, téléchargez vos fichiers et ordonnez-les selon votre préférence. Glissez-déposez chaque document pour le réorganiser et cliquez sur fusionner pour les combiner instantanément en un seul PDF.",
          "La plupart des outils de fusion permettent de sélectionner des pages spécifiques de chaque fichier avant la fusion. Vous pouvez également faire pivoter des pages individuelles en cas d'orientations mixtes, assurant une sortie cohérente.",
          "Pour les documents volumineux, fusionnez par lots de 5 à 10 fichiers pour éviter les problèmes de mémoire du navigateur. Assurez-vous que les PDF sont finalisés avant la fusion, car corriger des fichiers individuels est plus simple.",
          "La fusion de PDF basée sur le navigateur est l'approche la plus privée. Tout le traitement se fait localement dans votre navigateur, vos documents sensibles ne quittent jamais votre appareil. Sans téléchargement, sans stockage serveur et sans limite de taille.",
        ],
      },
      de: {
        title: "PDF-Dateien zusammenführen: Dokumente mühelos kombinieren",
        description: "Erfahren Sie, wie Sie mehrere PDF-Dateien zu einem einzigen Dokument zusammenführen. Schritt-für-Schritt-Anleitung mit Tipps zur Sortierung, Stapelzusammenführung und effizienten Organisation.",
        keywords: ["PDF-Dateien zusammenführen", "PDF kombinieren", "PDF-Zusammenführung", "PDF online zusammenführen", "PDF-Dokumente kombinieren", "kostenlose PDF-Zusammenführung"],
        paragraphs: [
          "Das Zusammenführen von PDF-Dateien ist eine häufige Aufgabe für alle, die mit digitalen Dokumenten arbeiten. Ob Sie Kapitel eines Berichts kombinieren oder gescannte Verträge zusammenführen, das Zusammenführen spart Zeit und hält Dateien organisiert.",
          "Um PDFs online zusammenzuführen, laden Sie Ihre Dateien hoch und ordnen Sie sie in der gewünschten Reihenfolge an. Ziehen Sie jedes Dokument per Drag & Drop und klicken Sie auf Zusammenführen, um sie sofort zu einem einzigen PDF zu kombinieren.",
          "Die meisten Zusammenführungswerkzeuge ermöglichen die Auswahl bestimmter Seiten aus jeder Datei vor dem Zusammenführen. Sie können auch einzelne Seiten drehen, wenn die Ausrichtungen gemischt sind, um eine konsistente Ausgabe zu gewährleisten.",
          "Bei großen Dokumenten führen Sie 5-10 Dateien in Stapeln zusammen, um Speicherprobleme im Browser zu vermeiden. Stellen Sie sicher, dass die PDFs vor dem Zusammenführen endgültig sind, da einzelne Dateien leichter zu korrigieren sind.",
          "Browserbasierte PDF-Zusammenführung ist der privateste Ansatz. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser, sodass vertrauliche Dokumente Ihr Gerät nie verlassen. Kein Hochladen, keine Serverspeicherung und keine Dateigrößenbeschränkungen.",
        ],
      },
      pt: {
        title: "Como Mesclar Arquivos PDF: Combine Documentos com Facilidade",
        description: "Aprenda a mesclar vários arquivos PDF em um único documento. Guia passo a passo com dicas sobre ordenação, mesclagem em lote e organização eficiente dos seus PDFs.",
        keywords: ["mesclar arquivos PDF", "combinar PDF", "mesclador PDF", "mesclar PDF online", "combinar documentos PDF", "mesclador PDF gratuito"],
        paragraphs: [
          "Mesclar arquivos PDF é uma tarefa comum para quem trabalha com documentos digitais. Quer esteja combinando capítulos de um relatório ou consolidando contratos digitalizados, a mesclagem economiza tempo e mantém os arquivos organizados.",
          "Para mesclar PDFs online, basta carregar seus arquivos e organizá-los na ordem desejada. Arraste e solte cada documento para reordenar e clique em mesclar para combiná-los instantaneamente em um único PDF.",
          "A maioria das ferramentas de mesclagem permite selecionar páginas específicas de cada arquivo antes de mesclar. Você também pode girar páginas individuais se houver orientações mistas, garantindo uma saída consistente.",
          "Para documentos grandes, mescle em lotes de 5 a 10 arquivos para evitar problemas de memória do navegador. Certifique-se de que os PDFs estejam finalizados antes de mesclar, pois corrigir arquivos individuais é mais simples.",
          "A mesclagem de PDF baseada em navegador é a abordagem mais privada. Todo o processamento ocorre localmente no seu navegador, então seus documentos confidenciais nunca saem do seu dispositivo. Sem uploads, sem armazenamento em servidores e sem limites de tamanho.",
        ],
      },
      ru: {
        title: "Как Объединить PDF-файлы: Легко Комбинируйте Документы",
        description: "Узнайте, как объединить несколько PDF-файлов в один документ. Пошаговое руководство с советами по упорядочиванию, пакетному объединению и эффективной организации PDF.",
        keywords: ["объединить PDF файлы", "склеить PDF", "объединитель PDF", "объединить PDF онлайн", "склеить PDF документы", "бесплатное объединение PDF"],
        paragraphs: [
          "Объединение PDF-файлов — распространенная задача для тех, кто работает с цифровыми документами. Будь то объединение глав отчета или консолидация отсканированных контрактов, объединение экономит время и поддерживает порядок в файлах.",
          "Чтобы объединить PDF онлайн, просто загрузите файлы и расположите их в нужном порядке. Перетаскивайте документы для изменения порядка и нажмите кнопку объединения, чтобы мгновенно создать единый PDF.",
          "Большинство инструментов объединения позволяют выбирать определенные страницы из каждого файла перед объединением. Вы также можете поворачивать отдельные страницы при смешанной ориентации для обеспечения единообразного вывода.",
          "Для больших документов объединяйте по 5-10 файлов в пакетах, чтобы избежать проблем с памятью браузера. Убедитесь, что PDF готовы к объединению, так как исправлять отдельные файлы проще, чем редактировать объединенный документ.",
          "Браузерное объединение PDF — самый приватный подход. Вся обработка происходит локально в вашем браузере, поэтому конфиденциальные документы никогда не покидают ваше устройство. Без загрузки, без хранения на сервере и без ограничений размера файлов.",
        ],
      },
      ar: {
        title: "كيفية دمج ملفات PDF: ادمج المستندات بسهولة",
        description: "تعلم كيفية دمج عدة ملفات PDF في مستند واحد. دليل خطوة بخطوة مع نصائح حول الترتيب والدمج المجمع وتنظيم ملفات PDF بكفاءة.",
        keywords: ["دمج ملفات PDF", "جمع PDF", "أداة دمج PDF", "دمج PDF اونلاين", "دمج مستندات PDF", "أداة دمج PDF مجانية"],
        paragraphs: [
          "يعد دمج ملفات PDF مهمة شائعة لأي شخص يعمل مع المستندات الرقمية. سواء كنت تجمع فصول تقرير أو توحد عقوداً ممسوحة ضوئياً، فإن الدمج يوفر الوقت ويحافظ على تنظيم الملفات.",
          "لدمج PDF عبر الإنترنت، ما عليك سوى تحميل ملفاتك وترتيبها بالترتيب المفضل لديك. اسحب وأفلت كل مستند لإعادة الترتيب ثم انقر على دمج لدمجها في PDF واحد فوراً.",
          "تتيح معظم أدوات الدمج اختيار صفحات محددة من كل ملف قبل الدمج. يمكنك أيضاً تدوير الصفحات الفردية إذا كانت الاتجاهات مختلطة، مما يضمن مخرجات متسقة.",
          "للمستندات الكبيرة، قم بالدمج على دفعات من 5-10 ملفات لتجنب مشاكل ذاكرة المتصفح. تأكد من أن ملفات PDF نهائية قبل الدمج، حيث أن تصحيح الملفات الفردية أسهل من تحرير مستند مدمج.",
          "دمج PDF المستند إلى المتصفح هو أكثر الطرق خصوصية. تتم جميع المعالجة محلياً في متصفحك، لذا فإن مستنداتك الحساسة لا تغادر جهازك أبداً. بدون رفع، بدون تخزين خادم، وبدون حدود لحجم الملف.",
        ],
      },
      hi: {
        title: "PDF फ़ाइलों को मर्ज कैसे करें: आसानी से दस्तावेज़ों को संयोजित करें",
        description: "एकाधिक PDF फ़ाइलों को एक दस्तावेज़ में मर्ज करना सीखें। क्रमबद्ध करने, बैच मर्ज करने और कुशलतापूर्वक व्यवस्थित करने पर चरण-दर-चरण गाइड।",
        keywords: ["PDF फ़ाइलें मर्ज करें", "PDF संयोजित करें", "PDF मर्जर", "ऑनलाइन PDF मर्ज करें", "PDF दस्तावेज़ संयोजित करें", "मुफ्त PDF मर्जर"],
        paragraphs: [
          "PDF फ़ाइलों को मर्ज करना डिजिटल दस्तावेज़ों के साथ काम करने वालों के लिए एक सामान्य कार्य है। चाहे आप रिपोर्ट के अध्यायों को जोड़ रहे हों या स्कैन किए गए अनुबंधों को समेकित कर रहे हों, मर्ज करने से समय बचता है और फ़ाइलें व्यवस्थित रहती हैं।",
          "ऑनलाइन PDF मर्ज करने के लिए, बस अपनी फ़ाइलें अपलोड करें और उन्हें पसंदीदा क्रम में व्यवस्थित करें। प्रत्येक दस्तावेज़ को पुनर्व्यवस्थित करने के लिए खींचें और छोड़ें और तुरंत एक PDF में संयोजित करने के लिए मर्ज पर क्लिक करें।",
          "अधिकांश मर्ज टूल आपको मर्ज करने से पहले प्रत्येक फ़ाइल से विशिष्ट पृष्ठ चुनने की सुविधा देते हैं। यदि मिश्रित ओरिएंटेशन हैं तो आप अलग-अलग पृष्ठों को घुमा भी सकते हैं, जिससे एक समान आउटपुट सुनिश्चित होता है।",
          "बड़े दस्तावेज़ों के लिए, ब्राउज़र मेमोरी समस्याओं से बचने के लिए 5-10 फ़ाइलों के बैच में मर्ज करें। मर्ज करने से पहले सुनिश्चित करें कि PDF अंतिम रूप में हैं, क्योंकि अलग-अलग फ़ाइलों को सही करना आसान है।",
          "ब्राउज़र-आधारित PDF मर्जिंग सबसे निजी तरीका है। सभी प्रसंस्करण आपके ब्राउज़र में स्थानीय रूप से होता है, इसलिए आपके संवेदनशील दस्तावेज़ कभी भी आपके डिवाइस को नहीं छोड़ते। बिना अपलोड, बिना सर्वर स्टोरेज, और बिना फ़ाइल आकार सीमा के।",
        ],
      },
      it: {
        title: "Come Unire File PDF: Combina Documenti Senza Sforzo",
        description: "Impara come unire più file PDF in un unico documento. Guida passo passo con consigli su ordinamento, unione batch e organizzazione efficiente dei tuoi PDF.",
        keywords: ["unire file PDF", "combinare PDF", "unione PDF", "unire PDF online", "combinare documenti PDF", "unione PDF gratuita"],
        paragraphs: [
          "Unire file PDF è un'attività comune per chi lavora con documenti digitali. Che tu stia combinando capitoli di un rapporto o consolidando contratti scansionati, l'unione fa risparmiare tempo e mantiene i file organizzati.",
          "Per unire PDF online, carica i tuoi file e ordinali secondo la tua preferenza. Trascina e rilascia ogni documento per riordinarlo e fai clic su unisci per combinarli istantaneamente in un unico PDF.",
          "La maggior parte degli strumenti di unione consente di selezionare pagine specifiche da ciascun file prima di unire. Puoi anche ruotare singole pagine in caso di orientamenti misti, garantendo un output coerente.",
          "Per documenti grandi, unisci in lotti di 5-10 file per evitare problemi di memoria del browser. Assicurati che i PDF siano definitivi prima di unire, poiché correggere i singoli file è più semplice.",
          "L'unione PDF basata sul browser è l'approccio più privato. Tutta l'elaborazione avviene localmente nel tuo browser, quindi i tuoi documenti sensibili non lasciano mai il tuo dispositivo. Senza caricamenti, senza archiviazione su server e senza limiti di dimensione.",
        ],
      },
    },
  },

  // ──────────────────────────────────────────
  // Guide 2: How to Compress PDF Files
  // ──────────────────────────────────────────
  {
    slug: "how-to-compress-pdf",
    label: "SIZE",
    content: {
      en: {
        title: "How to Compress PDF Files: Reduce Size Without Losing Quality",
        description: "Learn how to compress PDF files to reduce file size for email, web uploads, and storage. Step-by-step guide with practical tips for optimal compression.",
        keywords: ["compress PDF", "reduce PDF file size", "PDF compression", "shrink PDF", "smaller PDF file", "free PDF compressor"],
        paragraphs: [
          "PDF compression is essential when you need to share documents via email or upload them to websites with size limits. Large PDF files can be frustratingly slow to send and consume valuable storage space on your devices.",
          "The most effective way to compress a PDF is to optimize the images inside it. PDFs with high-resolution photos or scanned pages can be reduced significantly by lowering image resolution to 150-200 DPI, which is sufficient for screen viewing.",
          "Remove unnecessary elements like embedded fonts that are already available on most systems. You can also delete unused objects, metadata, and bookmarks that bloat the file. Many PDF compressors handle these optimizations automatically.",
          "Online PDF compression tools process files entirely in your browser. This means your documents stay private and never get uploaded to external servers. Simply drag and drop your PDF, choose a compression level, and download the optimized file.",
          "For best results, use a balanced compression setting. Maximum compression can reduce file size by up to 80% but may slightly reduce image quality. Light compression preserves full quality while still reducing size by 20-40%. Choose based on your needs.",
        ],
      },
      zh: {
        title: "如何压缩 PDF 文件：在不损失质量的情况下减小文件大小",
        description: "学习如何压缩 PDF 文件以减小文件大小，便于通过电子邮件发送、网页上传和存储。包含优化压缩的实用技巧。",
        keywords: ["压缩PDF", "减小PDF文件大小", "PDF压缩", "缩小PDF", "更小的PDF文件", "免费PDF压缩工具"],
        paragraphs: [
          "当需要通过电子邮件发送文档或上传到有大小限制的网站时，PDF 压缩至关重要。大型 PDF 文件发送缓慢且占用设备宝贵的存储空间。",
          "压缩 PDF 最有效的方法是优化其中的图像。包含高分辨率照片或扫描页面的 PDF，通过将图像分辨率降低到 150-200 DPI（屏幕查看足够的分辨率），可以显著减小文件大小。",
          "删除不必要的元素，如大多数系统已自带的嵌入式字体。你还可以删除未使用的对象、元数据和书签。许多 PDF 压缩工具会自动处理这些优化。",
          "在线 PDF 压缩工具完全在浏览器中处理文件。这意味着你的文档保持私密，永远不会上传到外部服务器。只需拖放 PDF，选择压缩级别，然后下载优化后的文件。",
          "为获得最佳效果，使用平衡的压缩设置。最大压缩可将文件大小减少高达 80%，但可能会略微降低图像质量。轻度压缩保留完整质量，同时仍减小 20-40% 的大小。根据需求选择。",
        ],
      },
      ja: {
        title: "PDFファイルを圧縮する方法：品質を落とさずにサイズを削減",
        description: "メールやウェブアップロード、保存用にPDFファイルのサイズを圧縮する方法を学びます。最適な圧縮のための実践的なヒントをご紹介します。",
        keywords: ["PDFを圧縮", "PDFファイルサイズ削減", "PDF圧縮", "PDFを縮小", "小さなPDFファイル", "無料PDF圧縮ツール"],
        paragraphs: [
          "PDF圧縮は、メールで文書を送信したり、サイズ制限のあるウェブサイトにアップロードする際に不可欠です。大きなPDFファイルは送信に時間がかかり、デバイスのストレージ容量を圧迫します。",
          "PDFを圧縮する最も効果的な方法は、内部の画像を最適化することです。高解像度の写真やスキャンページを含むPDFは、画像解像度を150〜200 DPI（画面表示に十分）に下げることで大幅に削減できます。",
          "ほとんどのシステムですでに利用可能な埋め込みフォントなど、不要な要素を削除します。未使用のオブジェクト、メタデータ、ブックマークも削除できます。多くのPDF圧縮ツールはこれらの最適化を自動的に実行します。",
          "オンラインPDF圧縮ツールはブラウザ内で完全に処理します。つまり、文書はプライベートなままで、外部サーバーにアップロードされることはありません。PDFをドラッグ＆ドロップし、圧縮レベルを選択して、最適化されたファイルをダウンロードするだけです。",
          "最良の結果を得るには、バランスの取れた圧縮設定を使用してください。最大圧縮ではファイルサイズを最大80%削減できますが、画質がわずかに低下する可能性があります。軽い圧縮では品質を完全に維持しながらも20〜40%のサイズ削減が可能です。ニーズに応じて選択してください。",
        ],
      },
      ko: {
        title: "PDF 파일 압축 방법: 품질 저하 없이 크기 줄이기",
        description: "이메일, 웹 업로드 및 저장을 위해 PDF 파일 크기를 압축하는 방법을 알아보세요. 최적의 압축을 위한 실용적인 팁이 포함된 단계별 가이드입니다.",
        keywords: ["PDF 압축", "PDF 파일 크기 줄이기", "PDF 압축하기", "PDF 축소", "더 작은 PDF 파일", "무료 PDF 압축기"],
        paragraphs: [
          "PDF 압축은 이메일로 문서를 보내거나 크기 제한이 있는 웹사이트에 업로드할 때 필수적입니다. 큰 PDF 파일은 전송 속도가 느리고 장치의 저장 공간을 많이 차지합니다.",
          "PDF를 압축하는 가장 효과적인 방법은 내부 이미지를 최적화하는 것입니다. 고해상도 사진이나 스캔 페이지가 포함된 PDF는 이미지 해상도를 150-200 DPI(화면 보기에 충분)로 낮추면 크기를 크게 줄일 수 있습니다.",
          "대부분의 시스템에 이미 있는 포함된 글꼴과 같은 불필요한 요소를 제거하세요. 사용하지 않는 개체, 메타데이터 및 책갈피도 삭제할 수 있습니다. 많은 PDF 압축 도구가 이러한 최적화를 자동으로 처리합니다.",
          "온라인 PDF 압축 도구는 브라우저에서 완전히 처리합니다. 즉, 문서가 비공개로 유지되며 외부 서버에 업로드되지 않습니다. PDF를 드래그 앤 드롭하고 압축 수준을 선택한 다음 최적화된 파일을 다운로드하기만 하면 됩니다.",
          "최상의 결과를 위해 균형 잡힌 압축 설정을 사용하세요. 최대 압축은 파일 크기를 최대 80%까지 줄일 수 있지만 이미지 품질이 약간 저하될 수 있습니다. 가벼운 압축은 품질을 완전히 유지하면서도 20-40%의 크기를 줄입니다. 필요에 따라 선택하세요.",
        ],
      },
      es: {
        title: "Cómo Comprimir Archivos PDF: Reducir el Tamaño Sin Perder Calidad",
        description: "Aprende a comprimir archivos PDF para reducir su tamaño para correo electrónico, cargas web y almacenamiento. Guía paso a paso con consejos prácticos para una compresión óptima.",
        keywords: ["comprimir PDF", "reducir tamaño de archivo PDF", "compresión PDF", "encoger PDF", "archivo PDF más pequeño", "compresor PDF gratuito"],
        paragraphs: [
          "La compresión de PDF es esencial cuando necesitas compartir documentos por correo electrónico o subirlos a sitios web con límites de tamaño. Los archivos PDF grandes son lentos de enviar y consumen valioso espacio de almacenamiento.",
          "La forma más efectiva de comprimir un PDF es optimizar las imágenes que contiene. Los PDF con fotos de alta resolución o páginas escaneadas se pueden reducir significativamente bajando la resolución de imagen a 150-200 DPI, suficiente para visualización en pantalla.",
          "Elimina elementos innecesarios como fuentes incrustadas que ya están disponibles en la mayoría de sistemas. También puedes eliminar objetos no utilizados, metadatos y marcadores. Muchos compresores PDF manejan estas optimizaciones automáticamente.",
          "Las herramientas de compresión PDF en línea procesan los archivos completamente en tu navegador. Esto significa que tus documentos permanecen privados y nunca se suben a servidores externos. Simplemente arrastra tu PDF, elige un nivel de compresión y descarga el archivo optimizado.",
          "Para mejores resultados, usa una configuración de compresión equilibrada. La compresión máxima puede reducir el tamaño hasta un 80%, pero puede disminuir ligeramente la calidad de imagen. La compresión ligera preserva la calidad completa mientras reduce el tamaño entre un 20-40%. Elige según tus necesidades.",
        ],
      },
      fr: {
        title: "Comment Comprimer des Fichiers PDF : Réduire la Taille sans Perte de Qualité",
        description: "Apprenez à compresser des fichiers PDF pour réduire leur taille pour les e-mails, les téléchargements web et le stockage. Guide pas à pas avec des conseils pratiques pour une compression optimale.",
        keywords: ["compresser PDF", "réduire la taille d'un fichier PDF", "compression PDF", "réduire PDF", "fichier PDF plus petit", "compresseur PDF gratuit"],
        paragraphs: [
          "La compression de PDF est essentielle lorsque vous devez partager des documents par e-mail ou les télécharger sur des sites web avec des limites de taille. Les fichiers PDF volumineux sont lents à envoyer et consomment un espace de stockage précieux.",
          "La façon la plus efficace de compresser un PDF est d'optimiser les images qu'il contient. Les PDF avec des photos haute résolution ou des pages scannées peuvent être considérablement réduits en abaissant la résolution d'image à 150-200 DPI, suffisante pour un affichage à l'écran.",
          "Supprimez les éléments inutiles comme les polices intégrées déjà disponibles sur la plupart des systèmes. Vous pouvez également supprimer les objets inutilisés, les métadonnées et les signets. De nombreux compresseurs PDF gèrent ces optimisations automatiquement.",
          "Les outils de compression PDF en ligne traitent les fichiers entièrement dans votre navigateur. Ainsi, vos documents restent privés et ne sont jamais téléchargés sur des serveurs externes. Glissez-déposez votre PDF, choisissez un niveau de compression et téléchargez le fichier optimisé.",
          "Pour de meilleurs résultats, utilisez un réglage de compression équilibré. La compression maximale peut réduire la taille jusqu'à 80 % mais peut légèrement diminuer la qualité d'image. La compression légère préserve la qualité totale tout en réduisant la taille de 20 à 40 %. Choisissez selon vos besoins.",
        ],
      },
      de: {
        title: "PDF-Dateien komprimieren: Größe reduzieren ohne Qualitätsverlust",
        description: "Erfahren Sie, wie Sie PDF-Dateien komprimieren, um die Größe für E-Mail, Web-Uploads und Speicherung zu reduzieren. Schritt-für-Schritt-Anleitung mit praktischen Tipps.",
        keywords: ["PDF komprimieren", "PDF-Dateigröße reduzieren", "PDF-Kompression", "PDF verkleinern", "kleinere PDF-Datei", "kostenloser PDF-Kompressor"],
        paragraphs: [
          "PDF-Kompression ist wichtig, wenn Sie Dokumente per E-Mail versenden oder auf Websites mit Größenbeschränkungen hochladen müssen. Große PDF-Dateien sind langsam zu versenden und verbrauchen wertvollen Speicherplatz.",
          "Der effektivste Weg, ein PDF zu komprimieren, ist die Optimierung der enthaltenen Bilder. PDFs mit hochauflösenden Fotos oder gescannten Seiten können erheblich verkleinert werden, indem die Bildauflösung auf 150-200 DPI reduziert wird, was für die Bildschirmanzeige ausreicht.",
          "Entfernen Sie unnötige Elemente wie eingebettete Schriftarten, die auf den meisten Systemen bereits verfügbar sind. Sie können auch ungenutzte Objekte, Metadaten und Lesezeichen löschen. Viele PDF-Kompressoren führen diese Optimierungen automatisch durch.",
          "Online-PDF-Komprimierungswerkzeuge verarbeiten Dateien vollständig in Ihrem Browser. Ihre Dokumente bleiben privat und werden nie auf externe Server hochgeladen. Ziehen Sie einfach Ihr PDF per Drag & Drop, wählen Sie eine Komprimierungsstufe und laden Sie die optimierte Datei herunter.",
          "Verwenden Sie für beste Ergebnisse eine ausgewogene Komprimierungseinstellung. Maximale Komprimierung kann die Größe um bis zu 80 % reduzieren, kann aber die Bildqualität leicht beeinträchtigen. Leichte Komprimierung bewahrt die volle Qualität und reduziert die Größe dennoch um 20-40 %. Wählen Sie je nach Bedarf.",
        ],
      },
      pt: {
        title: "Como Comprimir Arquivos PDF: Reduzir o Tamanho Sem Perder Qualidade",
        description: "Aprenda a comprimir arquivos PDF para reduzir o tamanho para e-mail, uploads na web e armazenamento. Guia passo a passo com dicas práticas para compressão ideal.",
        keywords: ["comprimir PDF", "reduzir tamanho de arquivo PDF", "compressão PDF", "encolher PDF", "arquivo PDF menor", "compressor PDF gratuito"],
        paragraphs: [
          "A compressão de PDF é essencial quando você precisa compartilhar documentos por e-mail ou enviá-los para sites com limites de tamanho. Arquivos PDF grandes são lentos para enviar e consomem espaço de armazenamento valioso.",
          "A maneira mais eficaz de comprimir um PDF é otimizar as imagens contidas nele. PDFs com fotos de alta resolução ou páginas digitalizadas podem ser significativamente reduzidos diminuindo a resolução da imagem para 150-200 DPI, suficiente para visualização em tela.",
          "Remova elementos desnecessários como fontes incorporadas já disponíveis na maioria dos sistemas. Você também pode excluir objetos não utilizados, metadados e marcadores. Muitos compressores PDF lidam com essas otimizações automaticamente.",
          "Ferramentas de compressão PDF online processam arquivos inteiramente no seu navegador. Seus documentos permanecem privados e nunca são enviados para servidores externos. Basta arrastar seu PDF, escolher um nível de compressão e baixar o arquivo otimizado.",
          "Para melhores resultados, use uma configuração de compressão equilibrada. A compressão máxima pode reduzir o tamanho em até 80%, mas pode diminuir ligeiramente a qualidade da imagem. A compressão leve preserva a qualidade total enquanto reduz o tamanho em 20-40%. Escolha conforme suas necessidades.",
        ],
      },
      ru: {
        title: "Как Сжать PDF-файлы: Уменьшить Размер Без Потери Качества",
        description: "Узнайте, как сжимать PDF-файлы для уменьшения размера для электронной почты, веб-загрузок и хранения. Пошаговое руководство с практическими советами.",
        keywords: ["сжать PDF", "уменьшить размер PDF файла", "сжатие PDF", "сжать PDF файл", "уменьшить PDF", "бесплатный компрессор PDF"],
        paragraphs: [
          "Сжатие PDF необходимо, когда нужно отправить документы по электронной почте или загрузить на сайты с ограничениями по размеру. Большие PDF-файлы медленно отправляются и занимают ценное место на устройствах.",
          "Самый эффективный способ сжать PDF — оптимизировать изображения внутри него. PDF-файлы с фотографиями высокого разрешения или отсканированными страницами можно значительно уменьшить, снизив разрешение изображений до 150-200 DPI, что достаточно для просмотра на экране.",
          "Удалите ненужные элементы, такие как встроенные шрифты, уже доступные в большинстве систем. Также можно удалить неиспользуемые объекты, метаданные и закладки. Многие компрессоры PDF выполняют эти оптимизации автоматически.",
          "Онлайн-инструменты сжатия PDF обрабатывают файлы полностью в вашем браузере. Ваши документы остаются конфиденциальными и никогда не загружаются на внешние серверы. Просто перетащите PDF, выберите уровень сжатия и загрузите оптимизированный файл.",
          "Для наилучших результатов используйте сбалансированные настройки сжатия. Максимальное сжатие может уменьшить размер до 80%, но может немного снизить качество изображения. Легкое сжатие сохраняет полное качество, уменьшая размер на 20-40%. Выбирайте в зависимости от потребностей.",
        ],
      },
      ar: {
        title: "كيفية ضغط ملفات PDF: تقليل الحجم بدون فقدان الجودة",
        description: "تعلم كيفية ضغط ملفات PDF لتقليل حجمها للبريد الإلكتروني والتحميل على الويب والتخزين. دليل خطوة بخطوة مع نصائح عملية للضغط الأمثل.",
        keywords: ["ضغط PDF", "تقليل حجم ملف PDF", "ضغط PDF", "تصغير PDF", "ملف PDF أصغر", "ضاغط PDF مجاني"],
        paragraphs: [
          "يعد ضغط PDF ضرورياً عندما تحتاج إلى مشاركة المستندات عبر البريد الإلكتروني أو تحميلها على مواقع ويب ذات حدود للحجم. ملفات PDF الكبيرة بطيئة في الإرسال وتستهلك مساحة تخزين ثمينة.",
          "الطريقة الأكثر فعالية لضغط PDF هي تحسين الصور الموجودة بداخله. يمكن تقليل ملفات PDF التي تحتوي على صور عالية الدقة أو صفحات ممسوحة ضوئياً بشكل كبير عن طريق خفض دقة الصورة إلى 150-200 DPI، وهو ما يكفي لعرضها على الشاشة.",
          "قم بإزالة العناصر غير الضرورية مثل الخطوط المضمنة المتوفرة بالفعل في معظم الأنظمة. يمكنك أيضاً حذف الكائنات غير المستخدمة والبيانات الوصفية والإشارات المرجعية. العديد من ضواغط PDF تتعامل مع هذه التحسينات تلقائياً.",
          "تقوم أدوات ضغط PDF عبر الإنترنت بمعالجة الملفات بالكامل في متصفحك. تبقى مستنداتك خاصة ولا يتم تحميلها أبداً على خوادم خارجية. ما عليك سوى سحب PDF وإفلاته واختيار مستوى الضغط وتنزيل الملف المحسن.",
          "للحصول على أفضل النتائج، استخدم إعداد ضغط متوازن. يمكن للضغط الأقصى تقليل الحجم بنسبة تصل إلى 80% ولكنه قد يقلل جودة الصورة قليلاً. يحافظ الضغط الخفيف على الجودة الكاملة مع تقليل الحجم بنسبة 20-40%. اختر وفقاً لاحتياجاتك.",
        ],
      },
      hi: {
        title: "PDF फ़ाइलों को कंप्रेस कैसे करें: गुणवत्ता खोए बिना आकार कम करें",
        description: "ईमेल, वेब अपलोड और स्टोरेज के लिए PDF फ़ाइलों का आकार कम करने के लिए कंप्रेस करना सीखें। इष्टतम संपीड़न के लिए व्यावहारिक सुझावों के साथ चरण-दर-चरण गाइड।",
        keywords: ["PDF कंप्रेस करें", "PDF फ़ाइल आकार कम करें", "PDF संपीड़न", "PDF छोटा करें", "छोटी PDF फ़ाइल", "मुफ्त PDF कंप्रेसर"],
        paragraphs: [
          "PDF संपीड़न तब आवश्यक है जब आपको ईमेल के माध्यम से दस्तावेज़ साझा करने या आकार सीमा वाली वेबसाइटों पर अपलोड करने की आवश्यकता होती है। बड़ी PDF फ़ाइलें भेजने में धीमी होती हैं और डिवाइस पर बहुमूल्य स्टोरेज स्थान लेती हैं।",
          "PDF को कंप्रेस करने का सबसे प्रभावी तरीका इसमें मौजूद छवियों को अनुकूलित करना है। उच्च-रिज़ॉल्यूशन फ़ोटो या स्कैन किए गए पृष्ठों वाली PDF को छवि रिज़ॉल्यूशन को 150-200 DPI (स्क्रीन देखने के लिए पर्याप्त) तक कम करके काफी कम किया जा सकता है।",
          "अनावश्यक तत्वों जैसे एम्बेडेड फ़ॉन्ट जो अधिकांश सिस्टम पर पहले से उपलब्ध हैं, को हटाएँ। आप अप्रयुक्त ऑब्जेक्ट, मेटाडेटा और बुकमार्क भी हटा सकते हैं। कई PDF कंप्रेसर इन अनुकूलन को स्वचालित रूप से संभालते हैं।",
          "ऑनलाइन PDF संपीड़न उपकरण फ़ाइलों को पूरी तरह से आपके ब्राउज़र में प्रोसेस करते हैं। इसका मतलब है कि आपके दस्तावेज़ निजी रहते हैं और कभी भी बाहरी सर्वर पर अपलोड नहीं होते। बस अपनी PDF खींचें और छोड़ें, संपीड़न स्तर चुनें और अनुकूलित फ़ाइल डाउनलोड करें।",
          "सर्वोत्तम परिणामों के लिए, संतुलित संपीड़न सेटिंग का उपयोग करें। अधिकतम संपीड़न फ़ाइल आकार को 80% तक कम कर सकता है लेकिन छवि गुणवत्ता को थोड़ा कम कर सकता है। हल्का संपीड़न पूर्ण गुणवत्ता बनाए रखते हुए आकार को 20-40% कम करता है। अपनी आवश्यकताओं के अनुसार चुनें।",
        ],
      },
      it: {
        title: "Come Comprimere i File PDF: Ridurre le Dimensioni Senza Perdere Qualità",
        description: "Impara a comprimere i file PDF per ridurre le dimensioni per email, upload web e archiviazione. Guida passo passo con consigli pratici per una compressione ottimale.",
        keywords: ["comprimere PDF", "ridurre dimensione file PDF", "compressione PDF", "rimpicciolire PDF", "file PDF più piccolo", "compressore PDF gratuito"],
        paragraphs: [
          "La compressione PDF è essenziale quando devi condividere documenti via email o caricarli su siti web con limiti di dimensione. I file PDF grandi sono lenti da inviare e consumano prezioso spazio di archiviazione.",
          "Il modo più efficace per comprimere un PDF è ottimizzare le immagini al suo interno. I PDF con foto ad alta risoluzione o pagine scansionate possono essere notevolmente ridotti abbassando la risoluzione dell'immagine a 150-200 DPI, sufficiente per la visualizzazione su schermo.",
          "Rimuovi elementi non necessari come i font incorporati già disponibili sulla maggior parte dei sistemi. Puoi anche eliminare oggetti inutilizzati, metadati e segnalibri. Molti compressori PDF gestiscono queste ottimizzazioni automaticamente.",
          "Gli strumenti di compressione PDF online elaborano i file interamente nel tuo browser. I tuoi documenti rimangono privati e non vengono mai caricati su server esterni. Basta trascinare il PDF, scegliere un livello di compressione e scaricare il file ottimizzato.",
          "Per risultati ottimali, utilizza un'impostazione di compressione bilanciata. La compressione massima può ridurre le dimensioni fino all'80% ma può leggermente diminuire la qualità dell'immagine. La compressione leggera preserva la qualità totale riducendo le dimensioni del 20-40%. Scegli in base alle tue esigenze.",
        ],
      },
    },
  },

  // ──────────────────────────────────────────
  // Guide 3: How to Split PDF Files
  // ──────────────────────────────────────────
  {
    slug: "how-to-split-pdf",
    label: "SPLIT",
    content: {
      en: {
        title: "How to Split PDF Files: Separate Pages Easily",
        description: "Learn how to split PDF files into multiple documents. Extract specific pages, divide by page ranges, or split every page into separate files. Step-by-step guide.",
        keywords: ["split PDF", "separate PDF pages", "extract pages from PDF", "PDF splitter", "divide PDF", "split PDF file into multiple"],
        paragraphs: [
          "Splitting a PDF into multiple files is useful when you need to extract specific pages or divide a large document into smaller, more manageable sections. This guide covers various splitting methods for different needs.",
          "The most common approach is splitting by page range. You can extract pages 1-10 for one file and 11-20 for another, perfect for separating chapters of a book or sections of a report. Most tools let you specify ranges with a simple input format.",
          "Another method is extracting every page as an individual file. This is ideal when you need to distribute pages separately, such as sending individual invoices or separating scanned document pages. One click creates separate PDFs for each page.",
          "For selective extraction, use a splitter that lets you pick specific pages by number. You can also extract just the pages you need while discarding the rest. This is useful for pulling out a few key pages from a large contract or manual.",
          "Advanced splitting features include splitting at specific bookmarks or after every N pages automatically. Some tools even offer optical character recognition (OCR) to split scanned PDFs at blank pages or specific text markers.",
        ],
      },
      zh: {
        title: "如何拆分 PDF 文件：轻松分离页面",
        description: "学习如何将 PDF 文件拆分为多个文档。提取特定页面、按页面范围分割或将每个页面分成单独的文件。逐步指南。",
        keywords: ["拆分PDF", "分离PDF页面", "从PDF提取页面", "PDF分割器", "划分PDF", "将PDF文件拆分为多个"],
        paragraphs: [
          "将 PDF 拆分为多个文件在需要提取特定页面或将大型文档分成更小、更易管理的部分时非常有用。本指南涵盖了不同需求下的各种拆分方法。",
          "最常见的方法是按页面范围拆分。你可以将 1-10 页提取为一个文件，11-20 页提取为另一个文件，非常适合分隔书籍章节或报告部分。大多数工具支持简单的范围输入格式。",
          "另一种方法是提取每一页作为单独的文件。当需要单独分发页面时（如发送单独的发票或分离扫描文档页面），这种方法非常理想。一键即可为每个页面创建单独的 PDF。",
          "对于选择性提取，使用支持按页码选取特定页面的分割工具。你也可以只提取需要的页面，丢弃其余的页面。这在从大型合同或手册中提取几个关键页面时非常有用。",
          "高级拆分功能包括按指定书签拆分或每 N 页自动拆分。一些工具甚至提供光学字符识别（OCR）功能，可在空白页或特定文本标记处拆分扫描的 PDF。",
        ],
      },
      ja: {
        title: "PDFファイルを分割する方法：簡単にページを分離",
        description: "PDFファイルを複数の文書に分割する方法を学びます。特定のページを抽出したり、ページ範囲で分割したり、各ページを個別のファイルに分割する方法をご紹介します。",
        keywords: ["PDFを分割", "PDFページを分離", "PDFからページを抽出", "PDFスプリッター", "PDFを分割", "PDFファイルを複数に分割"],
        paragraphs: [
          "PDFを複数のファイルに分割すると、特定のページを抽出したり、大きな文書をより小さく管理しやすい部分に分割する必要がある場合に便利です。このガイドではさまざまな分割方法を紹介します。",
          "最も一般的な方法は、ページ範囲による分割です。1〜10ページを1つのファイルに、11〜20ページを別のファイルに抽出でき、書籍の章やレポートのセクションを分けるのに最適です。ほとんどのツールは簡単な入力形式で範囲を指定できます。",
          "別の方法として、各ページを個別のファイルとして抽出する方法があります。個別の請求書を送信したり、スキャンした文書ページを分離する場合に理想的です。ワンクリックで各ページの個別PDFを作成します。",
          "選択的抽出には、番号で特定のページを選択できる分割ツールを使用します。必要なページだけを抽出し、残りを破棄することもできます。これは大きな契約書やマニュアルから重要なページを取り出す場合に便利です。",
          "高度な分割機能には、特定のブックマークで分割したり、Nページごとに自動分割する機能があります。一部のツールは光学式文字認識（OCR）を提供し、スキャンしたPDFを空白ページや特定のテキストマーカーで分割できます。",
        ],
      },
      ko: {
        title: "PDF 파일 분할 방법: 페이지를 쉽게 분리하기",
        description: "PDF 파일을 여러 문서로 분할하는 방법을 알아보세요. 특정 페이지 추출, 페이지 범위별 분할 또는 각 페이지를 별도 파일로 분할하는 방법을 알려드립니다.",
        keywords: ["PDF 분할", "PDF 페이지 분리", "PDF에서 페이지 추출", "PDF 분할기", "PDF 나누기", "PDF 파일을 여러 개로 분할"],
        paragraphs: [
          "PDF를 여러 파일로 분할하는 것은 특정 페이지를 추출하거나 큰 문서를 더 작고 관리하기 쉬운 부분으로 나눌 필요가 있을 때 유용합니다. 이 가이드는 다양한 분할 방법을 다룹니다.",
          "가장 일반적인 방법은 페이지 범위별 분할입니다. 1-10페이지를 한 파일로, 11-20페이지를 다른 파일로 추출할 수 있어 책의 장이나 보고서 섹션을 분리하는 데 완벽합니다. 대부분의 도구는 간단한 입력 형식으로 범위를 지정할 수 있습니다.",
          "또 다른 방법은 각 페이지를 개별 파일로 추출하는 것입니다. 개별 송장을 보내거나 스캔한 문서 페이지를 분리해야 할 때 이상적입니다. 한 번의 클릭으로 각 페이지에 대한 개별 PDF가 생성됩니다.",
          "선택적 추출을 위해 번호로 특정 페이지를 선택할 수 있는 분할기를 사용하세요. 필요한 페이지만 추출하고 나머지는 버릴 수도 있습니다. 이는 대규모 계약서나 매뉴얼에서 몇 가지 주요 페이지를 추출할 때 유용합니다.",
          "고급 분할 기능에는 특정 책갈피에서 분할하거나 N페이지마다 자동으로 분할하는 기능이 포함됩니다. 일부 도구는 광학 문자 인식(OCR)을 제공하여 스캔한 PDF를 빈 페이지나 특정 텍스트 마커에서 분할할 수 있습니다.",
        ],
      },
      es: {
        title: "Cómo Dividir Archivos PDF: Separa Páginas Fácilmente",
        description: "Aprende a dividir archivos PDF en varios documentos. Extrae páginas específicas, divide por rangos de páginas o separa cada página en archivos individuales. Guía paso a paso.",
        keywords: ["dividir PDF", "separar páginas PDF", "extraer páginas de PDF", "divisor PDF", "partir PDF", "dividir archivo PDF en varios"],
        paragraphs: [
          "Dividir un PDF en varios archivos es útil cuando necesitas extraer páginas específicas o dividir un documento grande en secciones más pequeñas y manejables. Esta guía cubre varios métodos de división según tus necesidades.",
          "El enfoque más común es dividir por rango de páginas. Puedes extraer las páginas 1-10 para un archivo y 11-20 para otro, perfecto para separar capítulos de un libro o secciones de un informe. La mayoría de herramientas permiten especificar rangos con un formato simple.",
          "Otro método es extraer cada página como un archivo individual. Esto es ideal cuando necesitas distribuir páginas por separado, como enviar facturas individuales o separar páginas de documentos escaneados. Un clic crea PDFs separados para cada página.",
          "Para extracción selectiva, usa un divisor que te permita elegir páginas específicas por número. También puedes extraer solo las páginas que necesitas y descartar el resto. Esto es útil para extraer páginas clave de un contrato o manual extenso.",
          "Las funciones avanzadas incluyen dividir en marcadores específicos o automáticamente después de cada N páginas. Algunas herramientas ofrecen reconocimiento óptico de caracteres (OCR) para dividir PDF escaneados en páginas en blanco o marcadores de texto específicos.",
        ],
      },
      fr: {
        title: "Comment Diviser des Fichiers PDF : Séparez des Pages Facilement",
        description: "Apprenez à diviser des fichiers PDF en plusieurs documents. Extrayez des pages spécifiques, divisez par plages de pages ou séparez chaque page en fichiers individuels. Guide pas à pas.",
        keywords: ["diviser PDF", "séparer pages PDF", "extraire pages d'un PDF", "diviseur PDF", "fractionner PDF", "diviser fichier PDF en plusieurs"],
        paragraphs: [
          "Diviser un PDF en plusieurs fichiers est utile lorsque vous devez extraire des pages spécifiques ou diviser un grand document en sections plus petites et plus faciles à gérer. Ce guide couvre plusieurs méthodes de division.",
          "L'approche la plus courante consiste à diviser par plage de pages. Vous pouvez extraire les pages 1-10 pour un fichier et 11-20 pour un autre, parfait pour séparer des chapitres d'un livre ou des sections d'un rapport. La plupart des outils permettent de spécifier des plages simplement.",
          "Une autre méthode consiste à extraire chaque page en tant que fichier individuel. C'est idéal pour distribuer des pages séparément, comme envoyer des factures individuelles ou séparer des pages de documents scannés. Un clic crée des PDF séparés pour chaque page.",
          "Pour une extraction sélective, utilisez un diviseur qui vous permet de choisir des pages spécifiques par numéro. Vous pouvez également extraire uniquement les pages nécessaires et jeter le reste. Utile pour extraire quelques pages clés d'un contrat ou d'un manuel volumineux.",
          "Les fonctions avancées incluent la division à des signets spécifiques ou automatiquement après chaque N pages. Certains outils offrent la reconnaissance optique de caractères (OCR) pour diviser les PDF scannés au niveau de pages blanches ou de marqueurs de texte spécifiques.",
        ],
      },
      de: {
        title: "PDF-Dateien aufteilen: Seiten einfach trennen",
        description: "Erfahren Sie, wie Sie PDF-Dateien in mehrere Dokumente aufteilen. Extrahieren Sie bestimmte Seiten, teilen Sie nach Seitenbereichen oder trennen Sie jede Seite in separate Dateien. Schritt-für-Schritt-Anleitung.",
        keywords: ["PDF aufteilen", "PDF-Seiten trennen", "Seiten aus PDF extrahieren", "PDF-Trenner", "PDF teilen", "PDF-Datei in mehrere aufteilen"],
        paragraphs: [
          "Das Aufteilen einer PDF in mehrere Dateien ist nützlich, wenn Sie bestimmte Seiten extrahieren oder ein großes Dokument in kleinere, besser handhabbare Abschnitte unterteilen müssen. Diese Anleitung behandelt verschiedene Teilungsmethoden.",
          "Der gebräuchlichste Ansatz ist die Aufteilung nach Seitenbereichen. Sie können die Seiten 1-10 für eine Datei und 11-20 für eine andere extrahieren, perfekt zum Trennen von Buchkapiteln oder Berichtsabschnitten. Die meisten Tools erlauben die Angabe von Bereichen in einem einfachen Format.",
          "Eine andere Methode ist das Extrahieren jeder Seite als einzelne Datei. Dies ist ideal, wenn Sie Seiten einzeln verteilen müssen, z.B. beim Versenden einzelner Rechnungen oder Trennen gescannter Dokumentseiten. Ein Klick erstellt separate PDFs für jede Seite.",
          "Für die selektive Extraktion verwenden Sie einen Trenner, mit dem Sie bestimmte Seiten nach Nummer auswählen können. Sie können auch nur die benötigten Seiten extrahieren und den Rest verwerfen. Dies ist nützlich, um einige Schlüsselseiten aus einem großen Vertrag oder Handbuch zu extrahieren.",
          "Zu den erweiterten Funktionen gehören das Aufteilen an bestimmten Lesezeichen oder automatisch nach jeder N-ten Seite. Einige Tools bieten sogar optische Zeichenerkennung (OCR) zum Aufteilen gescannter PDFs an leeren Seiten oder bestimmten Textmarkierungen.",
        ],
      },
      pt: {
        title: "Como Dividir Arquivos PDF: Separe Páginas Facilmente",
        description: "Aprenda a dividir arquivos PDF em vários documentos. Extraia páginas específicas, divida por intervalos de páginas ou separe cada página em arquivos individuais. Guia passo a passo.",
        keywords: ["dividir PDF", "separar páginas PDF", "extrair páginas de PDF", "divisor PDF", "partir PDF", "dividir arquivo PDF em vários"],
        paragraphs: [
          "Dividir um PDF em vários arquivos é útil quando você precisa extrair páginas específicas ou dividir um documento grande em seções menores e mais gerenciáveis. Este guia aborda vários métodos de divisão.",
          "A abordagem mais comum é dividir por intervalo de páginas. Você pode extrair as páginas 1-10 para um arquivo e 11-20 para outro, perfeito para separar capítulos de um livro ou seções de um relatório. A maioria das ferramentas permite especificar intervalos com formato simples.",
          "Outro método é extrair cada página como um arquivo individual. Isso é ideal quando você precisa distribuir páginas separadamente, como enviar faturas individuais ou separar páginas de documentos digitalizados. Um clique cria PDFs separados para cada página.",
          "Para extração seletiva, use um divisor que permita escolher páginas específicas por número. Você também pode extrair apenas as páginas necessárias e descartar o restante. Útil para extrair algumas páginas-chave de um contrato ou manual extenso.",
          "Recursos avançados incluem divisão em marcadores específicos ou automaticamente a cada N páginas. Algumas ferramentas oferecem reconhecimento óptico de caracteres (OCR) para dividir PDFs digitalizados em páginas em branco ou marcadores de texto específicos.",
        ],
      },
      ru: {
        title: "Как Разделить PDF-файлы: Легко Отделяйте Страницы",
        description: "Узнайте, как разделить PDF-файлы на несколько документов. Извлекайте определенные страницы, делите по диапазонам страниц или разделяйте каждую страницу в отдельный файл. Пошаговое руководство.",
        keywords: ["разделить PDF", "отделить страницы PDF", "извлечь страницы из PDF", "разделитель PDF", "разбить PDF", "разделить PDF файл на несколько"],
        paragraphs: [
          "Разделение PDF на несколько файлов полезно, когда нужно извлечь определенные страницы или разделить большой документ на более мелкие, удобные части. Это руководство охватывает различные методы разделения.",
          "Самый распространенный подход — разделение по диапазону страниц. Вы можете извлечь страницы 1-10 в один файл и 11-20 в другой, что идеально для разделения глав книги или разделов отчета. Большинство инструментов позволяют указывать диапазоны простым форматом.",
          "Другой метод — извлечение каждой страницы в отдельный файл. Это идеально, когда нужно распространять страницы по отдельности, например, отправлять отдельные счета или разделять страницы отсканированных документов. Один клик создает отдельные PDF для каждой страницы.",
          "Для выборочного извлечения используйте разделитель, позволяющий выбирать конкретные страницы по номеру. Вы также можете извлечь только нужные страницы, отбрасывая остальные. Это полезно для извлечения нескольких ключевых страниц из большого контракта или руководства.",
          "Расширенные функции включают разделение по определенным закладкам или автоматически после каждых N страниц. Некоторые инструменты предлагают оптическое распознавание символов (OCR) для разделения отсканированных PDF по пустым страницам или определенным текстовым маркерам.",
        ],
      },
      ar: {
        title: "كيفية تقسيم ملفات PDF: فصل الصفحات بسهولة",
        description: "تعلم كيفية تقسيم ملفات PDF إلى مستندات متعددة. استخراج صفحات محددة، أو التقسيم حسب نطاقات الصفحات، أو فصل كل صفحة إلى ملف منفصل. دليل خطوة بخطوة.",
        keywords: ["تقسيم PDF", "فصل صفحات PDF", "استخراج صفحات من PDF", "مقسّم PDF", "تجزئة PDF", "تقسيم ملف PDF إلى عدة"],
        paragraphs: [
          "يعد تقسيم PDF إلى عدة ملفات مفيداً عندما تحتاج إلى استخراج صفحات محددة أو تقسيم مستند كبير إلى أقسام أصغر يسهل إدارتها. يغطي هذا الدليل طرق التقسيم المختلفة.",
          "النهج الأكثر شيوعاً هو التقسيم حسب نطاق الصفحات. يمكنك استخراج الصفحات 1-10 في ملف و11-20 في ملف آخر، وهو مثالي لفصل فصول كتاب أو أقسام تقرير. تتيح معظم الأدوات تحديد النطاقات بتنسيق إدخال بسيط.",
          "طريقة أخرى هي استخراج كل صفحة كملف منفصل. هذا مثالي عندما تحتاج إلى توزيع الصفحات بشكل منفصل، مثل إرسال فواتير فردية أو فصل صفحات مستند ممسوح ضوئياً. بنقرة واحدة يتم إنشاء ملفات PDF منفصلة لكل صفحة.",
          "لاستخراج انتقائي، استخدم مقسماً يتيح لك اختيار صفحات محددة حسب الرقم. يمكنك أيضاً استخراج الصفحات التي تحتاجها فقط وتجاهل الباقي. هذا مفيد لاستخراج بعض الصفحات الرئيسية من عقد أو دليل كبير.",
          "تشمل ميزات التقسيم المتقدمة التقسيم عند إشارات مرجعية محددة أو تلقائياً بعد كل N صفحة. توفر بعض الأدوات التعرف البصري على الأحرف (OCR) لتقسيم PDF الممسوحة ضوئياً عند الصفحات الفارغة أو علامات نصية محددة.",
        ],
      },
      hi: {
        title: "PDF फ़ाइलों को विभाजित कैसे करें: आसानी से पृष्ठ अलग करें",
        description: "PDF फ़ाइलों को कई दस्तावेज़ों में विभाजित करना सीखें। विशिष्ट पृष्ठ निकालें, पृष्ठ श्रेणियों द्वारा विभाजित करें, या प्रत्येक पृष्ठ को अलग फ़ाइल में बाँटें। चरण-दर-चरण गाइड।",
        keywords: ["PDF विभाजित करें", "PDF पृष्ठ अलग करें", "PDF से पृष्ठ निकालें", "PDF स्प्लिटर", "PDF बाँटें", "PDF फ़ाइल को कई में विभाजित करें"],
        paragraphs: [
          "PDF को कई फ़ाइलों में विभाजित करना तब उपयोगी होता है जब आपको विशिष्ट पृष्ठ निकालने या बड़े दस्तावेज़ को छोटे, अधिक प्रबंधनीय भागों में विभाजित करने की आवश्यकता होती है। यह गाइड विभिन्न विभाजन विधियों को कवर करता है।",
          "सबसे सामान्य तरीका पृष्ठ श्रेणी द्वारा विभाजन है। आप पृष्ठ 1-10 को एक फ़ाइल के लिए और 11-20 को दूसरे के लिए निकाल सकते हैं, जो किताब के अध्यायों या रिपोर्ट के अनुभागों को अलग करने के लिए एकदम सही है। अधिकांश उपकरण सरल इनपुट प्रारूप के साथ श्रेणियाँ निर्दिष्ट करने देते हैं।",
          "दूसरी विधि प्रत्येक पृष्ठ को एक अलग फ़ाइल के रूप में निकालना है। यह तब आदर्श होता है जब आपको पृष्ठों को अलग-अलग वितरित करने की आवश्यकता होती है, जैसे अलग-अलग चालान भेजना या स्कैन किए गए दस्तावेज़ पृष्ठों को अलग करना। एक क्लिक प्रत्येक पृष्ठ के लिए अलग PDF बनाता है।",
          "चयनात्मक निष्कर्षण के लिए, एक स्प्लिटर का उपयोग करें जो आपको संख्या द्वारा विशिष्ट पृष्ठ चुनने देता है। आप केवल आवश्यक पृष्ठ निकाल सकते हैं और बाकी को हटा सकते हैं। यह बड़े अनुबंध या मैनुअल से कुछ महत्वपूर्ण पृष्ठ निकालने के लिए उपयोगी है।",
          "उन्नत विभाजन सुविधाओं में विशिष्ट बुकमार्क पर विभाजित करना या प्रत्येक N पृष्ठों के बाद स्वचालित रूप से विभाजित करना शामिल है। कुछ उपकरण ऑप्टिकल कैरेक्टर रिकॉग्निशन (OCR) प्रदान करते हैं ताकि स्कैन किए गए PDF को खाली पृष्ठों या विशिष्ट टेक्स्ट मार्करों पर विभाजित किया जा सके।",
        ],
      },
      it: {
        title: "Come Dividere i File PDF: Separa le Pagine Facilmente",
        description: "Impara a dividere i file PDF in più documenti. Estrai pagine specifiche, dividi per intervalli di pagine o separa ogni pagina in file individuali. Guida passo passo.",
        keywords: ["dividere PDF", "separare pagine PDF", "estrarre pagine da PDF", "divisore PDF", "frazionare PDF", "dividere file PDF in più"],
        paragraphs: [
          "Dividere un PDF in più file è utile quando devi estrarre pagine specifiche o suddividere un documento grande in sezioni più piccole e gestibili. Questa guida copre vari metodi di divisione.",
          "L'approccio più comune è la divisione per intervallo di pagine. Puoi estrarre le pagine 1-10 per un file e 11-20 per un altro, perfetto per separare capitoli di un libro o sezioni di un rapporto. La maggior parte degli strumenti permette di specificare intervalli con un formato semplice.",
          "Un altro metodo è estrarre ogni pagina come file individuale. Ideale quando devi distribuire pagine separatamente, come inviare fatture individuali o separare pagine di documenti scansionati. Un clic crea PDF separati per ogni pagina.",
          "Per l'estrazione selettiva, usa un divisore che ti permetta di scegliere pagine specifiche per numero. Puoi anche estrarre solo le pagine necessarie e scartare il resto. Utile per estrarre alcune pagine chiave da un contratto o manuale voluminoso.",
          "Le funzionalità avanzate includono la divisione in corrispondenza di segnalibri specifici o automaticamente dopo ogni N pagine. Alcuni strumenti offrono il riconoscimento ottico dei caratteri (OCR) per dividere PDF scansionati in corrispondenza di pagine vuote o marcatori di testo specifici.",
        ],
      },
    },
  },
  {
    slug: "how-to-merge-pdf-without-uploading",
    label: "PRIV",
    content: {
      en: {
        title: "How to Merge PDF Files Without Uploading Them",
        description: "A privacy-focused workflow for combining contracts, reports, scans, and invoices entirely in your browser.",
        keywords: ["merge PDF without uploading", "private PDF merger", "browser PDF merge", "secure PDF tools"],
        paragraphs: [
          "PDF merging often involves sensitive documents: contracts, invoices, HR files, bank statements, or unpublished client work. A browser-based merger is useful because it can combine files locally without transferring the originals to a remote conversion server.",
          "Start by preparing the source PDFs on your device. Rename files in the order you expect to combine them, such as 01-cover.pdf, 02-contract.pdf, and 03-appendix.pdf. This makes it easier to verify the final order before exporting.",
          "Open the merge tool, add the PDFs, then drag them into the correct order. If the tool supports page previews, scan the first and last page of each file before merging so you do not accidentally place an appendix before the main document.",
          "After downloading the merged PDF, open it locally and check page count, bookmarks, page orientation, and file size. For legal or client-facing documents, keep a copy of the original source PDFs so you can rebuild the combined file if a page needs to change.",
          "Local processing protects file contents, but it does not replace document hygiene. Remove hidden metadata when necessary, avoid public computers for confidential files, and do not share the finished PDF through untrusted links.",
        ],
      },
    },
  },
  {
    slug: "how-to-reduce-pdf-size-for-email",
    label: "EMAIL",
    content: {
      en: {
        title: "How to Reduce PDF File Size for Email",
        description: "Practical PDF compression settings for Gmail, Outlook, application portals, and client attachments.",
        keywords: ["reduce PDF size for email", "email PDF attachment limit", "compress PDF for Gmail", "small PDF file"],
        paragraphs: [
          "Email services and application portals often reject attachments over 10-25 MB. Reducing a PDF for email is mostly about optimizing images, removing unnecessary data, and choosing a file size that stays comfortably below the limit.",
          "If your PDF contains scanned pages or photos, image compression will usually save the most space. A scanned document at 300 DPI may look good for printing, but 150-200 DPI is often enough for reading on screens and sending by email.",
          "Use balanced compression first. Maximum compression can make signatures, stamps, charts, and small text harder to read. If the file is still too large, reduce page image resolution before lowering quality too aggressively.",
          "Check the final PDF before sending. Open it at 100 percent zoom, inspect pages with small text, and confirm that important visual details such as seals, screenshots, and diagrams remain legible.",
          "For very large files, split the PDF into logical sections instead of forcing harsh compression. Sending a contract and appendices as separate attachments can preserve quality while staying under size limits.",
        ],
      },
    },
  },
  {
    slug: "pdf-to-jpg-vs-pdf-to-png",
    label: "IMG",
    content: {
      en: {
        title: "PDF to JPG vs PDF to PNG: Which Format Should You Choose?",
        description: "Compare JPG and PNG exports for PDF pages, including file size, screenshots, text clarity, transparency, and sharing.",
        keywords: ["PDF to JPG vs PNG", "convert PDF pages to images", "PDF image export", "JPG or PNG for PDF"],
        paragraphs: [
          "Exporting PDF pages as images is useful for previews, thumbnails, social posts, documentation, and systems that do not accept PDF uploads. The main choice is usually JPG or PNG, and the right answer depends on what the page contains.",
          "Choose JPG for photo-heavy pages, presentation slides, scanned documents, and preview images where file size matters. JPG compression keeps files small, which is helpful for web pages, emails, and content management systems.",
          "Choose PNG for pages with sharp text, interface screenshots, charts, line art, or transparent elements. PNG is often larger, but it preserves crisp edges and avoids compression artifacts around small labels.",
          "If you are exporting a document page for reading, test both formats at the same width. JPG may blur small text at low quality, while PNG may be unnecessarily heavy for photographic pages.",
          "For website thumbnails, export a JPG or WebP preview and link to the original PDF for full detail. For instructional screenshots where text must stay readable, PNG is usually safer.",
        ],
      },
    },
  },
  {
    slug: "organize-pdf-before-sending-contract",
    label: "DOC",
    content: {
      en: {
        title: "How to Organize PDF Pages Before Sending a Contract",
        description: "A practical checklist for reordering, rotating, deleting, and verifying PDF pages before client or legal delivery.",
        keywords: ["organize PDF pages", "prepare contract PDF", "reorder PDF pages", "PDF contract checklist"],
        paragraphs: [
          "Contracts often collect pages from multiple sources: cover letters, signature pages, exhibits, scanned IDs, and appendices. Organizing the PDF before sending it helps prevent confusion and reduces the risk of missing or duplicated pages.",
          "Start with page order. Put the main agreement first, followed by signature pages, schedules, exhibits, and supporting documents. If your recipient expects a specific order, mirror their checklist exactly.",
          "Rotate scanned pages so every page reads in the same direction. Mixed orientation is common when pages are scanned from different devices, and it can make signing or reviewing the contract frustrating.",
          "Remove blank pages, duplicate scans, internal notes, and draft pages. Then check page numbers and references inside the contract. If an exhibit is referenced as Exhibit B, make sure it appears in the merged PDF with the same label.",
          "Before delivery, open the final PDF in a separate viewer and scan the document from beginning to end. Confirm the file name, page count, visible signatures, and attachment size before sending.",
        ],
      },
    },
  },
  {
    slug: "why-pdf-to-word-loses-formatting",
    label: "WORD",
    content: {
      en: {
        title: "Why Some PDF to Word Conversions Lose Formatting",
        description: "Understand why fonts, columns, tables, headers, and scanned pages can break when converting PDF files to Word.",
        keywords: ["PDF to Word loses formatting", "PDF conversion formatting", "convert PDF to DOCX", "PDF layout problems"],
        paragraphs: [
          "PDF and Word are built for different jobs. A PDF preserves a fixed visual page, while Word stores editable document structure. When a converter turns PDF pages into Word content, it has to guess which text belongs to paragraphs, tables, columns, headers, and footnotes.",
          "Fonts are a common source of mismatch. If the original PDF uses embedded or custom fonts that are not available in Word, the converted document may substitute another font and change line breaks or page spacing.",
          "Tables and multi-column layouts are also difficult. A PDF may position every word independently on the page, while Word expects rows, cells, and flowable paragraphs. Complex invoices, brochures, and academic papers can therefore need manual cleanup.",
          "Scanned PDFs add another layer. They are images of text, not real selectable text, unless OCR has been applied. OCR can recognize characters, but it may still struggle with stamps, handwriting, skewed pages, or low-resolution scans.",
          "For best results, start with a clean digital PDF, avoid heavy compression before conversion, and check whether you actually need editable Word output. If the goal is review or signing, keeping the PDF format may preserve the document more reliably.",
        ],
      },
    },
  },
];

/** Find a guide by its slug */
export function getGuide(slug: string): GuideEntry | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function hasGuideLocale(guide: GuideEntry, locale: string): boolean {
  return Boolean(guide.content[locale]);
}

export function getGuideLocales(guide: GuideEntry): string[] {
  return Object.keys(guide.content);
}
