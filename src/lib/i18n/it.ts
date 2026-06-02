import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Strumenti PDF gratuiti online",
    description: "Strumenti PDF online gratuiti che funzionano interamente nel tuo browser. Unisci, dividi, comprimi, converti e modifica PDF — senza caricamenti, senza registrazione, 100% privato."
},
  header: {
    mergePdf: "Unisci PDF",
    splitPdf: "Dividi PDF",
    compressPdf: "Comprimi PDF",
    convert: "Converti",
    allTools: "Tutti gli strumenti"
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
    badgeOffline: "Funziona offline"
},
  tools: {
    heading: "Tutti gli strumenti PDF",
    countLabel: (n) => `${n} strument${n !== 1 ? "i" : "o"} disponibil${n !== 1 ? "i" : "e"} — scegli uno per iniziare`
},
  toolItems: {
    "merge-pdf": {
      title: "Unisci PDF",
      description: "Combina PDF nell'ordine che desideri con il più semplice unificatore di PDF disponibile.",
      longDescription: "Unisci più file PDF in un unico documento. Carica i tuoi PDF, disponili nell'ordine desiderato e scarica il risultato. Tutta l'elaborazione avviene localmente nel tuo browser."
},
    "split-pdf": {
      title: "Dividi PDF",
      description: "Separa una pagina o un intero set per una facile conversione in file PDF indipendenti.",
      longDescription: "Dividi un documento PDF in pagine individuali o estrai intervalli di pagine specifici. Scegli di dividere per pagina, per intervallo o estrarre ogni pagina come file separato. 100% basato su browser."
},
    "organize-pdf": {
      title: "Organizza PDF",
      description: "Ordina, elimina o aggiungi pagine al tuo PDF. Trascina e rilascia per riordinare.",
      longDescription: "Riordina le pagine del tuo PDF come preferisci. Elimina pagine indesiderate, aggiungi nuove pagine o riordina quelle esistenti con una semplice interfaccia drag-and-drop. Tutta l'elaborazione avviene localmente."
},
    "compress-pdf": {
      title: "Comprimi PDF",
      description: "Riduci la dimensione del file ottimizzando la qualità del PDF.",
      longDescription: "Comprimi il tuo PDF per ridurre la dimensione del file senza perdita significativa di qualità. Ideale per allegati email e caricamenti web. Scegli il tuo livello di compressione. L'elaborazione avviene interamente nel tuo browser."
},
    "pdf-to-word": {
      title: "PDF in Word",
      description: "Converti facilmente i tuoi file PDF in documenti DOC e DOCX modificabili.",
      longDescription: "Estrai il contenuto testuale dal PDF e salvalo come file Word (DOCX). ⚠️ Nota: Questo strumento esegue l'estrazione del solo testo e NON preserva la formattazione originale, le immagini o il layout delle tabelle. Ideale per estrarre contenuto testuale per la modifica successiva."
},
    "pdf-to-jpg": {
      title: "PDF in JPG",
      description: "Converti ogni pagina PDF in JPG o estrai tutte le immagini contenute in un PDF.",
      longDescription: "Converti pagine PDF in immagini JPG di alta qualità. Scegli la risoluzione e il livello di qualità desiderati. Perfetto per condividere contenuti PDF sui social media o incorporarli in presentazioni. 100% basato su browser."
},
    "jpg-to-pdf": {
      title: "JPG in PDF",
      description: "Converti immagini JPG in PDF in pochi secondi. Regola facilmente orientamento e margini.",
      longDescription: "Converti una o più immagini JPG/JPEG in un documento PDF. Disponi le immagini in ordine, scegli dimensione e orientamento della pagina. Tutta l'elaborazione avviene localmente nel tuo browser."
},
    "pdf-to-png": {
      title: "PDF in PNG",
      description: "Converti pagine PDF in immagini PNG di alta qualità senza perdita.",
      longDescription: "Estrai pagine PDF come immagini PNG senza perdita con supporto della trasparenza. Ideale per grafica, screenshot e contenuti che richiedono riproduzione perfetta dei pixel. Completamente basato su browser."
},
    "pdf-to-image": {
      title: "PDF in Immagine",
      description: "Converti pagine PDF in immagini JPG o PNG. Scegli qualità e risoluzione.",
      longDescription: "Converti ogni pagina del tuo PDF in immagini di alta qualità. Scegli tra JPG (qualità regolabile per file più piccoli) o PNG (senza perdita, perfetto per grafica). Regola la risoluzione per risultati nitidi. Tutto localmente nel tuo browser."
},
    "pdf-to-text": {
      title: "PDF in Testo",
      description: "Estrai il contenuto testuale da documenti PDF.",
      longDescription: "Estrai il contenuto testuale dai tuoi file PDF. Ideale per riutilizzare contenuti, estrarre dati o rendere i PDF ricercabili. Funziona localmente nel tuo browser."
},
    "word-to-pdf": {
      title: "Word in PDF",
      description: "Rendi i file DOC e DOCX facili da leggere convertendoli in PDF.",
      longDescription: "Converti documenti Microsoft Word (DOCX) in formato PDF per una facile condivisione e stampa. Preserva formattazione, immagini e layout."
},
    "excel-to-pdf": {
      title: "Excel in PDF",
      description: "Rendi i fogli di calcolo Excel facili da leggere convertendoli in PDF.",
      longDescription: "Converti fogli di calcolo Microsoft Excel (XLSX) in PDF. Preserva la formattazione delle tabelle, i grafici e il layout dei dati per una condivisione professionale."
},
    "edit-pdf": {
      title: "Modifica PDF",
      description: "Aggiungi testo, immagini, forme o annotazioni a un documento PDF.",
      longDescription: "Aggiungi testo, immagini, forme e annotazioni al tuo PDF. Modifica dimensione del carattere, colore e posizione del contenuto aggiunto. Nota: la modifica del testo PDF esistente richiede elaborazione lato server."
},
    "watermark-pdf": {
      title: "Aggiungi filigrana",
      description: "Applica testo o immagini sul tuo PDF in pochi secondi. Scegli tipografia, trasparenza e posizione.",
      longDescription: "Aggiungi filigrane di testo o immagine personalizzate ai tuoi documenti PDF. Controlla opacità, rotazione, posizione e ripetizione. Perfetto per branding, protezione del copyright o marcatura dello stato dei documenti. 100% lato cliente."
},
    "rotate-pdf": {
      title: "Ruota PDF",
      description: "Ruota le pagine del PDF come desideri. Puoi persino ruotare più PDF contemporaneamente!",
      longDescription: "Ruota pagine singole o interi documenti PDF. Scegli rotazione di 90°, 180° o 270°. Tutta l'elaborazione avviene istantaneamente nel tuo browser."
},
    "page-numbers": {
      title: "Aggiungi numeri di pagina",
      description: "Aggiungi facilmente numeri di pagina ai PDF. Scegli posizione, dimensioni e tipografia.",
      longDescription: "Aggiungi numeri di pagina personalizzabili ai tuoi documenti PDF. Seleziona posizione (alto/basso, sinistra/centro/destra), numero iniziale, dimensione e stile del carattere. Tutta l'elaborazione basata su browser."
},
    "crop-pdf": {
      title: "Ritaglia PDF",
      description: "Ritaglia margini di documenti PDF o seleziona aree specifiche.",
      longDescription: "Ritaglia le tue pagine PDF — rimuovi margini indesiderati, taglia spazi bianchi o seleziona regioni specifiche. Applica lo stesso ritaglio a tutte le pagine o personalizza per pagina."
},
    "protect-pdf": {
      title: "Proteggi PDF",
      description: "Proteggi file PDF con una password. Crittografa documenti PDF per impedire accessi non autorizzati.",
      longDescription: "Aggiungi protezione tramite password ai tuoi file PDF usando crittografia AES. Imposta password utente (per aprire) e password proprietario (per permessi). Controlla i permessi di stampa, copia e modifica. Tutta la crittografia avviene localmente."
},
    "unlock-pdf": {
      title: "Sblocca PDF",
      description: "Rimuovi la sicurezza della password dal PDF, dandoti la libertà di usare i tuoi PDF come desideri.",
      longDescription: "Rimuovi la protezione tramite password dai tuoi file PDF (devi conoscere la password). Sblocca il tuo PDF per modificarlo, stamparlo o copiarlo. L'elaborazione è interamente lato cliente."
},
    "html-to-pdf": {
      title: "HTML in PDF",
      description: "Converti pagine web HTML in PDF. Basta incollare un URL e convertirlo in PDF con un clic.",
      longDescription: "Converti pagine web HTML in documenti PDF. Basta incollare un URL o inserire direttamente codice HTML. Perfetto per salvare articoli web, ricevute o documentazione come PDF."
},
    "markdown-to-pdf": {
      title: "Markdown in PDF",
      description: "Converti file Markdown in documenti PDF magnificamente formattati.",
      longDescription: "Converti i tuoi documenti Markdown in file PDF ben formattati. Supporta intestazioni, blocchi di codice, tabelle e immagini. Perfetto per documentazione, file README e scrittura tecnica. 100% basato su browser."
},
    "heic-to-pdf": {
      title: "HEIC in PDF",
      description: "Converti foto HEIC dell'iPhone in PDF in pochi secondi. Nessun caricamento necessario.",
      longDescription: "Converti foto di iPhone e iPad (formato HEIC/HEIF) in PDF. Perfetto per condividere foto come documenti. Tutta l'elaborazione avviene nel tuo browser."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "Converti PDF scansionati in documenti ricercabili e selezionabili.",
      longDescription: "Estrai testo da PDF e immagini scansionati usando OCR (Riconoscimento Ottico dei Caratteri). Rendi i documenti scansionati ricercabili e copiabili. L'OCR in inglese funziona localmente; lingue aggiuntive disponibili."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "Firma PDF",
      description: "Aggiungi firme scritte a mano o digitate ai tuoi documenti PDF.",
      longDescription: "Disegna, digita o carica la tua firma e posizionala su qualsiasi pagina del tuo PDF. Supporta il disegno con mouse/touch, la digitazione con selezione del font o il caricamento di un'immagine della firma. Posiziona, ridimensiona e scarica il PDF firmato — tutto nel tuo browser."
},
    "pdf-to-ppt": {
      title: "PDF in PPT",
      description: "Converti i tuoi file PDF in presentazioni PowerPoint modificabili.",
      longDescription: "Converti documenti PDF in formato PowerPoint (PPTX) per una facile modifica e presentazione. Questa conversione richiede elaborazione lato server e sarà disponibile in un futuro aggiornamento."
},
    "pdf-to-excel": {
      title: "PDF in Excel",
      description: "Estrai dati dalle tabelle PDF e convertili in fogli di calcolo Excel.",
      longDescription: "Converti tabelle e dati PDF in fogli di calcolo Excel (XLSX). Questa conversione richiede elaborazione lato server e sarà disponibile in un futuro aggiornamento."
}
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
    relatedTools: "Strumenti correlati"
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
    largeFileWarning: "File grande — l'elaborazione potrebbe richiedere più tempo",
    // Edit PDF workspace
    reset: "Reimposta",
    loadingPages: "Caricamento pagine PDF...",
    textMode: "✏️ Testo",
    selectMode: "👆 Seleziona",
    enterTextPlaceholder: "Inserisci il testo da aggiungere...",
    textModeTip: "Clicca in un punto qualsiasi della pagina per posizionare il testo. Passa alla modalità Seleziona per eliminare le annotazioni.",
    selectModeTip: "Clicca su un'annotazione per eliminarla. Passa alla modalità Testo per aggiungere altro testo.",
    addTextFirst: "Aggiungi prima le annotazioni di testo",
    annotationsCount: (n) => `Annotazioni (${n} totale)`,
    clearPage: "Cancella pagina",
    selectAllAnnotations: "Seleziona tutto",
    undo: "↩ Annulla",
    redo: "↪ Ripeti",
    fontSizeLabel: "Dimensione carattere",
    fontSmall: "Piccolo",
    fontMedium: "Medio",
    fontLarge: "Grande",
    applyEdits: (n) => `Applica modifiche e scarica (${n} annotazione${n !== 1 ? "i" : ""})`,
    applyingEdits: "Applicazione modifiche...",
    page: "Pagina",
    prev: "◀ Prec",
    next: "Succ ▶",
    failedToLoad: "Caricamento PDF fallito",
    processingFailed: "Elaborazione fallita",
    noUploadEdit: "Nessun caricamento — tutta la modifica avviene localmente",
    // Crop PDF workspace
    fullPage: "Pagina intera",
    autoMargin: "Margine automatico",
    cropRegion: "Area di ritaglio",
    dragToResize: "— trascina gli angoli per ridimensionare, trascina il centro per spostare",
    cropAllPages: (n) => `Applica ritaglio a tutte le ${n} pagine`,
    cropSinglePage: "Ritaglia pagina corrente",
    croppingPages: "Ritaglio pagine in corso...",
    noUploadCrop: "Nessun caricamento — tutto il ritaglio avviene localmente",
    presetA4: "A4",
    presetLetter: "Lettera",
    presetSquare: "Quadrato",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "Cambia scheda per visualizzare in anteprima ogni pagina.",
    applyToAllPages: "Applica a tutte le pagine",
    cropX: "X",
    cropY: "Y",
    cropWidth: "Larghezza",
    cropHeight: "Altezza",
    // Sign PDF workspace
    signDrawTab: "Disegna",
    signTypeTab: "Digita",
    signUploadTab: "Carica",
    signClearSignature: "Cancella firma",
    signPlaceOnPage: "Clicca sul PDF per posizionare la firma. Trascina per riposizionare.",
    signSignAndDownload: "Firma e scarica",
    signFontSelector: "Stile firma",
    signDrawHint: "Disegna la tua firma qui sotto con mouse o tocco",
    signTypeHint: "Digita la tua firma qui sotto",
    // Organize PDF workspace
    pagesCount: (n) => `${n} pagin${n !== 1 ? "e" : "a"}`,
    dragReorderClickDelete: "— trascina per riordinare, clicca per eliminare",
    removePage: "Rimuovi pagina",
    saveNewOrder: (n) => `Salva nuovo ordine (${n} pagine)`,
    reorganizingPages: "Riordino pagine...",
    noUploadOrganize: "Nessun caricamento — trascina e rilascia le pagine nel browser",
    // Rotate PDF workspace
    rotateAngle: "Angolo di rotazione",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "Testo filigrana",
    watermarkOpacity: "Opacità",
    watermarkSize: "Dimensione carattere",
    watermarkFontFamily: "Famiglia di font",
    watermarkRotation: "Rotazione (°)",
    watermarkPosition: "Posizione",
    watermarkColor: "Colore",
    fontSerif: "Serif",
    fontSansSerif: "Sans-Serif",
    fontMonospace: "Monospace",
    positionCenter: "Centro",
    positionTopLeft: "In alto a sinistra",
    positionTopRight: "In alto a destra",
    positionBottomLeft: "In basso a sinistra",
    positionBottomRight: "In basso a destra",
    positionTile: "Affianca / Ripeti",
    // Protect/Unlock PDF workspace
    enterPassword: "Inserire password",
    confirmPassword: "Confermare password",
    passwordMismatch: "Le password non corrispondono",
    showPassword: "Mostra",
    hidePassword: "Nascondi",
    protectPdf: "Proteggi PDF",
    unlockPdf: "Sblocca",
    pdfNotEncrypted: "Questo PDF non è crittografato",
    unsupportedEncryption: "Tipo di crittografia non supportato",
    incorrectPassword: "Password errata",
    // Compress PDF workspace
    compressLevels: {
      label: "Livello di compressione",
      light: "Leggero",
      standard: "Standard",
      maximum: "Massimo",
    },
    // Split PDF workspace
    splitMode: "Modalità divisione",
    splitEveryPage: "Dividi ogni pagina",
    splitByRange: "Dividi per intervallo",
    extractPages: "Estrai pagine",
    splitEveryN: "Dividi ogni N pagine",
    rangePlaceholder: "es.: 1-3,4-6,7-10",
    pagesPlaceholder: "es.: 1,3,5,7",
    nPlaceholder: "es.: 2",
    invalidRange: "Formato intervallo non valido",
    // Merge PDF workspace
    mergeOrder: "Ordine di unione",
    dragToReorder: "Trascina per riordinare la sequenza di unione",
    mergeAndDownload: "Unisci e scarica",
    mergingFiles: "Unione dei file in corso...",
    addMore: "Aggiungi altri file",
    removeFile: "Rimuovi file",
    needAtLeastTwo: "Aggiungi almeno 2 file PDF da unire",
    files: "file",
    // Shared option labels
    pageSize: "Dimensioni pagina",
    a4: "A4",
    letter: "Letter",
    original: "Dimensioni originali",
    orientation: "Orientamento",
    auto: "Automatico",
    portrait: "Verticale",
    landscape: "Orizzontale",
    margins: "Margini",
    marginNone: "Nessuno",
    marginNarrow: "Stretto",
    marginMedium: "Medio",
    marginWide: "Largo",
    marginSmall: "Piccolo",
    marginLarge: "Grande",
    remove: "Rimuovi",
    paperSize: "Dimensioni carta",
    // Page Numbers workspace
    position: "Posizione",
    startNumber: "Numero iniziale",
    formatDigits: "1, 2, 3",
    formatPageX: "Pagina 1, Pagina 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "Errore durante l'aggiunta dei numeri di pagina",
    // Word to PDF workspace
    parsingWord: "Analisi del documento Word in corso...",
    // Excel to PDF workspace
    parsingSpreadsheet: "Analisi del foglio di calcolo in corso...",
    // HTML to PDF workspace
    loadingHtml: "Caricamento HTML in corso...",
    renderScale: "Scala di rendering",
    // Markdown to PDF workspace
    processingMarkdown: "Elaborazione Markdown in corso...",
    codeHighlight: "Evidenziazione del codice",
    on: "On",
    off: "Off",
    // HEIC to PDF workspace
    decodingHeic: "Decodifica file HEIC in corso...",
    // OCR PDF workspace
    ocrInitializing: "Inizializzazione in corso...",
    ocrLoadingEngine: "Caricamento motore OCR in corso...",
    ocrLanguage: "Lingua",
    ocrLangEn: "Inglese",
    ocrLangZh: "Cinese + Inglese",
    ocrLangJa: "Giapponese + Inglese",
    ocrOutputFormat: "Formato di output",
    ocrFormatText: "Testo semplice",
    ocrFormatPdf: "PDF con livello di testo",
    ocrProgress: (page, total) => `Pagina ${page}/${total}`,
    ocrError: "Errore durante l'elaborazione OCR",
    // PDF to Word workspace
    buildingWord: "Creazione del documento Word in corso...",
    generatingDocx: "Generazione del file DOCX in corso...",
    pageSeparator: "Separatore di pagina",
    separatorPageBreak: "Interruzione di pagina",
    separatorContinuous: "Continuo",
    includePageNumbers: "Includi numeri di pagina",
    pdfToWordError: "Errore durante la conversione in Word",
    // Protect PDF workspace
    encryptionAlgorithm: "Crittografia",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128 bit",
    encryptAes256Desc: "PDF 2.0 — Massima sicurezza",
    encryptRc4Desc: "Compatibile con vecchi lettori PDF",
    permissions: "Autorizzazioni",
    allowPrinting: "Consenti stampa",
    allowCopying: "Consenti copia testo",
    allowModifying: "Consenti modifica",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "Guide e Tutorial",
    description: "Tutorial passo passo e guide per l'elaborazione di immagini e PDF. Scopri consigli, trucchi e migliori pratiche.",
    browseGuides: "Sfoglia le Guide",
    readGuide: "Leggi la Guida →",
    backToGuides: "← Torna alle Guide",
    breadcrumbGuides: "Guide",
  },
  convert: {
    converter: "Convertitore",
    free: "Gratuito online",
    noUpload: "nessun caricamento richiesto — tutta l'elaborazione avviene nel tuo browser",
    subtitle: (from, to) => `Converti file ${from} (${from.toUpperCase()}) in formato ${to} (${to.toUpperCase()}) online, gratuitamente e`,
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
    subtitleGeneric: "Converti PDF da e verso vari formati. Gratuito, nessun caricamento, funziona nel browser.",
    relatedConversions: "Conversioni correlate"
},
  category: {
    all: "Tutte",
    organize: "Organizza PDF",
    optimize: "Ottimizza PDF",
    convert: "Converti PDF",
    edit: "Modifica PDF",
    security: "Sicurezza PDF",
    intelligence: "Intelligenza PDF",
    workflow: "Flussi di lavoro"
},
  dropzone: {
    dropHere: "Rilascia i file qui",
    dragDropHere: "Trascina e rilascia i file qui",
    orClickBrowse: "o clicca per sfogliare",
    filesUpTo: "file, fino a",
    multipleSupported: "(file multipli supportati)",
    fileExceed: "File che superano il limite di dimensione:",
    invalidFileType: "Formato file non valido. Carica un file PDF valido."
},
  toolCard: {
    new: "Nuovo",
    pro: "Pro"
},
  pdfToImage: {
    title: "PDF in Immagine",
    description: "Converti le pagine PDF in immagini JPG o PNG. Scegli qualità e risoluzione.",
    formatLabel: "Formato di output",
    qualityLabel: "Qualità JPEG",
    scaleLabel: "Risoluzione",
    pngOption: "PNG (Senza perdita)",
    jpgOption: "JPG (Più piccolo)",
    convertBtn: "Converti in immagini",
    preview: "immagini generate",
    pageLabel: "Pagina",
    downloadPage: "Scarica",
    downloadAll: "Scarica tutto",
    noFile: "Seleziona un file PDF sopra per convertire le sue pagine in immagini.",
    renderingPages: "Rendering pagine PDF..."
},
  footer: {
    product: "Prodotto",
    popularTools: "Strumenti popolari",
    convert: "Converti",
    company: "Azienda",
    privacy: "Privacy",
    privacyLine: "Tutta l'elaborazione PDF avviene interamente nel tuo browser. I tuoi file non vengono mai caricati su alcun server.",
    home: "Home",
    allTools: "Tutti gli strumenti",
    pricing: "Prezzi",
    about: "Informazioni",
    terms: "Termini",
    contact: "Contatto",
    alsoTry: "Prova anche：",
    imageTools: "🖼️ Strumenti per immagini",
    unitConverter: "🔄 Convertitore di unità",
    copyright: "Tutta l'elaborazione PDF avviene interamente nel tuo browser. I tuoi file non vengono mai caricati su alcun server. 100% Privacy."
},
pages: {
  pricing: {
    title: "Prezzi",
    subtitle: "Semplice e trasparente — tutti gli strumenti PDF sono gratuiti al 100%.",
    freeTier: "Gratuito",
    freeDesc: "Accedi a tutti gli strumenti PDF senza costi. Nessuna tariffa nascosta, nessun abbonamento — solo elaborazione PDF potente e gratuita direttamente nel tuo browser.",
    freeFeature1: "Tutti i 20+ strumenti PDF inclusi",
    freeFeature2: "Nessuna registrazione o iscrizione richiesta",
    freeFeature3: "Nessun limite di dimensione file",
    freeFeature4: "100% basato sul browser — nessun upload, nessun server",
    proTier: "Pro (In Arrivo)",
    proDesc: "Funzionalità avanzate per utenti che necessitano di più. Restate sintonizzati!",
    ocrNote: "L'OCR (Riconoscimento Ottico dei Caratteri) sarà disponibile come funzionalità Pro. Converti PDF scansionati in testo ricercabile con precisione professionale.",
    faqQ1: "Perché gli strumenti sono gratuiti?",
    faqA1: "Crediamo che gli strumenti PDF essenziali debbano essere accessibili a tutti. Il nostro approccio basato sul browser mantiene i costi bassi poiché i file non lasciano mai il tuo dispositivo. Questo ci consente di offrire tutti gli strumenti completamente gratuiti, supportati da pubblicità minima.",
    faqQ2: "Cosa succede quando Pro verrà lanciato?",
    faqA2: "Quando Pro verrà lanciato, tutti gli attuali strumenti gratuiti rimarranno completamente gratuiti. Pro aggiungerà funzionalità avanzate come OCR, qualità di conversione superiore ed elaborazione batch per gli utenti che ne hanno bisogno. Nessuna funzionalità esistente verrà spostata dietro un paywall."
  },
  about: {
    title: "Informazioni su toolconv",
    subtitle: "Strumenti PDF incentrati sulla privacy che funzionano interamente nel tuo browser.",
    missionTitle: "La Nostra Missione",
    missionDesc: "toolconv è stato creato con una missione semplice: fornire strumenti PDF potenti e di qualità professionale che rispettino la tua privacy. Crediamo che l'elaborazione dei file dovrebbe avvenire sul tuo dispositivo, non sul server di qualcun altro. Ogni strumento che costruiamo funziona interamente nel tuo browser utilizzando JavaScript lato client — i tuoi file non lasciano mai il tuo computer.",
    value1Title: "🔒 100% Privato",
    value1Desc: "I tuoi file vengono elaborati localmente nel tuo browser. Non vengono mai caricati, archiviati o condivisi. Accesso zero del server ai tuoi dati.",
    value2Title: "🖥️ Basato sul Browser",
    value2Desc: "Nessun download, nessuna installazione. Tutto funziona direttamente nel tuo browser moderno. Alimentato da WebAssembly e JavaScript lato client.",
    value3Title: "💰 Completamente Gratuito",
    value3Desc: "Tutti gli strumenti sono gratuiti senza limiti, iscrizioni o costi nascosti. Crediamo nel rendere gli strumenti PDF accessibili a tutti.",
    value4Title: "🌍 Funziona Offline",
    value4Desc: "Una volta caricati, molti strumenti possono funzionare senza connessione Internet. Perfetto per viaggiatori, lavoratori remoti e chiunque sia preoccupato per la privacy dei dati.",
    storyTitle: "La Nostra Storia",
    storyDesc: "toolconv è nato da una semplice osservazione: la maggior parte degli strumenti PDF online 'gratuiti' in realtà caricano i tuoi file sui loro server, li elaborano in remoto e spesso vendono i tuoi dati o bloccano le funzionalità dietro costosi abbonamenti. Volevamo costruire un'alternativa migliore — dove tutta l'elaborazione avviene lato client, dove la privacy è integrata nell'architettura e dove potenti strumenti PDF rimangono gratuiti per tutti. Oggi, toolconv serve utenti in tutto il mondo con oltre 20 strumenti PDF basati sul browser, tutti gratuiti al 100% e incentrati sulla privacy."
  },
  privacy: {
    title: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: 1 giugno 2026",
    intro: "In toolconv, la tua privacy è la nostra massima priorità. Questa informativa spiega come gestiamo i tuoi dati quando utilizzi i nostri servizi.",
    s1Title: "1. Nessun Caricamento di Dati",
    s1Content: "Tutta l'elaborazione PDF avviene interamente nel tuo browser utilizzando JavaScript lato client. I tuoi file non vengono mai caricati sui nostri server — rimangono sul tuo dispositivo dall'inizio alla fine. Non abbiamo accesso lato server ai tuoi documenti e non memorizziamo, elaboriamo o trasmettiamo mai i tuoi file al di fuori della tua macchina locale.",
    s2Title: "2. Nessun Cookie (Tranne Analisi)",
    s2Content: "Non utilizziamo cookie funzionali per il funzionamento del sito principale. Gli unici cookie utilizzati su questo sito provengono da Google AdSense per la personalizzazione degli annunci e il reporting. Questi sono cookie di terze parti soggetti all'Informativa sulla Privacy di Google. Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser.",
    s3Title: "3. Analisi e Pubblicità",
    s3Content: "Questo sito utilizza Google AdSense, che può raccogliere e utilizzare dati sulla tua visita (come pagine visualizzate e interazioni pubblicitarie) per mostrare annunci pertinenti. Google AdSense utilizza cookie e tecnologie simili. Per maggiori informazioni, consulta l'Informativa sulla Privacy di Google su policies.google.com/privacy. Noi stessi non raccogliamo né memorizziamo dati analitici personali — nessun log del server, script di tracciamento oltre AdSense o piattaforme di analisi come Google Analytics.",
    s4Title: "4. Nessun Account Richiesto",
    s4Content: "Non richiediamo account utente o registrazione. Non c'è processo di iscrizione, raccolta di email o profili utente. Ciò significa che intrinsecamente non raccogliamo informazioni personali identificabili su di te. Il tuo utilizzo dei nostri strumenti è completamente anonimo.",
    s5Title: "5. Link di Terze Parti",
    s5Content: "Il nostro sito può contenere link a siti di terze parti (ad esempio, progetti fratelli come image.toolconv.com e unit.toolconv.com, o annunci Google AdSense). Non siamo responsabili per le pratiche sulla privacy di questi siti esterni. Ti invitiamo a rivedere le loro informative sulla privacy prima di interagire con essi.",
    contact: "Se hai domande su questa informativa sulla privacy, contattaci all'indirizzo support@toolconv.com."
  },
  terms: {
    title: "Termini di Servizio",
    lastUpdated: "Ultimo aggiornamento: 1 giugno 2026",
    intro: "Benvenuto su toolconv. Utilizzando il nostro sito web e i nostri strumenti, accetti i seguenti termini. Per favore, leggili attentamente.",
    s1Title: "1. Utilizzo Gratuito",
    s1Content: "Tutti gli strumenti su toolconv sono forniti gratuitamente. Nessun pagamento è richiesto e nessun abbonamento è necessario. Ci riserviamo il diritto di introdurre funzionalità premium in futuro, ma tutti gli attuali strumenti gratuiti rimarranno gratuiti.",
    s2Title: "2. Impegno per la Privacy",
    s2Content: "La tua privacy è fondamentale per il nostro servizio. Tutta l'elaborazione dei file avviene localmente nel tuo browser. Non abbiamo accesso ai tuoi file e non li memorizziamo, elaboriamo o trasmettiamo. Per i dettagli completi, consulta la nostra Informativa sulla Privacy.",
    s3Title: "3. Utilizzo Accettabile",
    s3Content: "Accetti di utilizzare toolconv solo per scopi leciti e in conformità con questi termini. Non puoi utilizzare i nostri strumenti per elaborare contenuti illegali, violare la proprietà intellettuale altrui o tentare di interrompere il nostro servizio.",
    s4Title: "4. Nessuna Garanzia",
    s4Content: "toolconv è fornito 'così com'è' senza alcuna garanzia, esplicita o implicita. Pur impegnandoci per accuratezza e affidabilità, non garantiamo che gli strumenti siano privi di errori o ininterrotti. La qualità dell'output può variare a seconda dei file di input. Utilizza a tua discrezione.",
    s5Title: "5. Limitazione di Responsabilità",
    s5Content: "toolconv e i suoi operatori non saranno responsabili per eventuali danni derivanti dall'uso o dall'impossibilità di utilizzare i nostri strumenti, inclusi a titolo esemplificativo perdita di dati, interruzione dell'attività o qualsiasi danno indiretto. La nostra intera responsabilità è limitata alla massima misura consentita dalla legge applicabile.",
    s6Title: "6. Contatto",
    s6Content: "Per domande su questi termini, contatta support@toolconv.com. Saremo lieti di chiarire qualsiasi dubbio."
  },
  contact: {
    title: "Contattaci",
    subtitle: "Ci farebbe piacere sentirti. Mettiti in contatto per qualsiasi domanda, suggerimento o feedback.",
    emailTitle: "📧 Supporto via Email",
    emailDesc: "Per domande, segnalazioni di bug o richieste generali:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 Richieste di Funzionalità",
    featureDesc: "Hai un'idea per un nuovo strumento o un miglioramento? Siamo tutto orecchi! Inviaci i tuoi suggerimenti e li prenderemo in considerazione per futuri aggiornamenti.",
    responseTitle: "⏱️ Tempo di Risposta",
    responseDesc: "Di solito rispondiamo entro 24 ore nei giorni lavorativi. Apprezziamo il tuo tempo e ti risponderemo il più rapidamente possibile."
  }
}
};
export default dict;