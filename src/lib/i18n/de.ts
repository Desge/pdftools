import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Kostenlose Online-PDF-Tools",
    description: "Kostenlose Online-PDF-Tools, die vollständig in Ihrem Browser laufen. PDFs zusammenführen, teilen, komprimieren, konvertieren und bearbeiten — kein Hochladen, keine Anmeldung, 100% privat."
},
  header: {
    mergePdf: "PDF zusammenführen",
    splitPdf: "PDF teilen",
    compressPdf: "PDF komprimieren",
    convert: "Konvertieren",
    allTools: "Alle Tools"
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
    badgeOffline: "Funktioniert offline"
},
  tools: {
    heading: "Alle PDF-Tools",
    countLabel: (n) => `${n} Tool${n !== 1 ? "s" : ""} verfügbar — wählen Sie eines aus, um zu starten`
},
  toolItems: {
    "merge-pdf": {
      title: "PDF zusammenführen",
      description: "Kombinieren Sie PDFs in der gewünschten Reihenfolge mit dem einfachsten PDF-Merger.",
      longDescription: "Führen Sie mehrere PDF-Dateien in einem einzigen Dokument zusammen. Laden Sie Ihre PDFs hoch, ordnen Sie sie in der gewünschten Reihenfolge an und laden Sie das zusammengeführte Ergebnis herunter. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser."
},
    "split-pdf": {
      title: "PDF teilen",
      description: "Trennen Sie eine Seite oder eine ganze Gruppe zur einfachen Konvertierung in unabhängige PDF-Dateien.",
      longDescription: "Teilen Sie ein PDF-Dokument in einzelne Seiten oder extrahieren Sie bestimmte Seitenbereiche. Wählen Sie zwischen Teilen nach Seite, Bereich oder extrahieren Sie jede Seite als separate Datei. 100% browserbasiert."
},
    "organize-pdf": {
      title: "PDF organisieren",
      description: "Sortieren, löschen oder hinzufügen Sie Seiten zu Ihrem PDF. Per Drag & Drop umordnen.",
      longDescription: "Ordnen Sie die Seiten Ihres PDFs nach Belieben neu an. Löschen Sie unerwünschte Seiten, fügen Sie neue Seiten hinzu oder ordnen Sie vorhandene Seiten per Drag & Drop um. Alle Verarbeitung erfolgt lokal."
},
    "compress-pdf": {
      title: "PDF komprimieren",
      description: "Reduzieren Sie die Dateigröße bei optimierter PDF-Qualität.",
      longDescription: "Komprimieren Sie Ihr PDF, um die Dateigröße ohne signifikanten Qualitätsverlust zu reduzieren. Ideal für E-Mail-Anhänge und Web-Uploads. Wählen Sie Ihre Komprimierungsstufe. Die Verarbeitung erfolgt vollständig in Ihrem Browser."
},
    "pdf-to-word": {
      title: "PDF zu Word",
      description: "Konvertieren Sie Ihre PDF-Dateien einfach in bearbeitbare DOC- und DOCX-Dokumente.",
      longDescription: "Extrahieren Sie Textinhalte aus PDF und speichern Sie diese als Word (DOCX)-Datei. ⚠️ Hinweis: Dieses Tool extrahiert nur Text und bewahrt NICHT die ursprüngliche Formatierung, Bilder oder Tabellenlayouts. Ideal zum Extrahieren von Textinhalten für die weitere Bearbeitung."
},
    "pdf-to-jpg": {
      title: "PDF zu JPG",
      description: "Konvertieren Sie jede PDF-Seite in ein JPG oder extrahieren Sie alle Bilder aus einem PDF.",
      longDescription: "Konvertieren Sie PDF-Seiten in hochwertige JPG-Bilder. Wählen Sie Ihre gewünschte Auflösung und Qualitätsstufe. Perfekt zum Teilen von PDF-Inhalten in sozialen Medien oder zum Einbetten in Präsentationen. 100% browserbasiert."
},
    "jpg-to-pdf": {
      title: "JPG zu PDF",
      description: "Konvertieren Sie JPG-Bilder in Sekundenschnelle in PDF. Passen Sie Ausrichtung und Ränder einfach an.",
      longDescription: "Konvertieren Sie ein oder mehrere JPG/JPEG-Bilder in ein PDF-Dokument. Ordnen Sie die Bilder in der Reihenfolge an, wählen Sie Seitengröße und Ausrichtung. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser."
},
    "pdf-to-png": {
      title: "PDF zu PNG",
      description: "Konvertieren Sie PDF-Seiten in hochwertige, verlustfreie PNG-Bilder.",
      longDescription: "Extrahieren Sie PDF-Seiten als verlustfreie PNG-Bilder mit Transparenzunterstützung. Ideal für Grafiken, Screenshots und Inhalte, die eine pixelgenaue Wiedergabe erfordern. Vollständig browserbasiert."
},
    "pdf-to-image": {
      title: "PDF zu Bild",
      description: "Konvertieren Sie PDF-Seiten in JPG- oder PNG-Bilder. Wählen Sie Qualität und Auflösung.",
      longDescription: "Konvertieren Sie jede Seite Ihres PDFs in hochwertige Bilder. Wählen Sie zwischen JPG (einstellbare Qualität für kleinere Dateien) oder PNG (verlustfrei, perfekt für Grafiken). Passen Sie die Auflösung für gestochen scharfe Ergebnisse an. Alles in Ihrem Browser."
},
    "pdf-to-text": {
      title: "PDF zu Text",
      description: "Extrahieren Sie Textinhalte aus PDF-Dokumenten.",
      longDescription: "Extrahieren Sie den Textinhalt aus Ihren PDF-Dateien. Ideal zur Wiederverwendung von Inhalten, Datenextraktion oder um PDFs durchsuchbar zu machen. Funktioniert lokal in Ihrem Browser."
},
    "word-to-pdf": {
      title: "Word zu PDF",
      description: "Machen Sie DOC- und DOCX-Dateien durch Konvertierung in PDF leicht lesbar.",
      longDescription: "Konvertieren Sie Microsoft Word-Dokumente (DOCX) in das PDF-Format für einfaches Teilen und Drucken. Bewahren Sie Formatierung, Bilder und Layout."
},
    "excel-to-pdf": {
      title: "Excel zu PDF",
      description: "Machen Sie Excel-Tabellen durch Konvertierung in PDF leicht lesbar.",
      longDescription: "Konvertieren Sie Microsoft Excel-Tabellen (XLSX) in PDF. Bewahren Sie Tabellenformatierung, Diagramme und Datenlayout für professionelles Teilen."
},
    "edit-pdf": {
      title: "PDF bearbeiten",
      description: "Fügen Sie Text, Bilder, Formen oder Anmerkungen zu einem PDF-Dokument hinzu.",
      longDescription: "Fügen Sie Text, Bilder, Formen und Anmerkungen zu Ihrem PDF hinzu. Ändern Sie Schriftgröße, Farbe und Position des hinzugefügten Inhalts. Hinweis: Die Bearbeitung vorhandener PDF-Textinhalte erfordert serverseitige Verarbeitung."
},
    "watermark-pdf": {
      title: "Wasserzeichen hinzufügen",
      description: "Stempeln Sie Text oder Bilder in Sekundenschnelle auf Ihr PDF. Wählen Sie Typografie, Transparenz und Position.",
      longDescription: "Fügen Sie benutzerdefinierte Text- oder Bildwasserzeichen zu Ihren PDF-Dokumenten hinzu. Kontrollieren Sie Deckkraft, Rotation, Position und Wiederholung. Perfekt für Branding, Urheberrechtsschutz oder Dokumentenstatusmarkierung. 100% clientseitig."
},
    "rotate-pdf": {
      title: "PDF drehen",
      description: "Drehen Sie Ihre PDF-Seiten nach Bedarf. Sie können sogar mehrere PDFs auf einmal drehen!",
      longDescription: "Drehen Sie einzelne Seiten oder ganze PDF-Dokumente. Wählen Sie 90°, 180° oder 270° Drehung. Die gesamte Verarbeitung erfolgt sofort in Ihrem Browser."
},
    "page-numbers": {
      title: "Seitenzahlen hinzufügen",
      description: "Fügen Sie PDFs ganz einfach Seitenzahlen hinzu. Wählen Sie Position, Maße und Typografie.",
      longDescription: "Fügen Sie Ihren PDF-Dokumenten anpassbare Seitenzahlen hinzu. Wählen Sie Position (oben/unten, links/mitte/rechts), Startnummer, Schriftgröße und Stil. Alle browserbasierte Verarbeitung."
},
    "crop-pdf": {
      title: "PDF zuschneiden",
      description: "Schneiden Sie Ränder von PDF-Dokumenten zu oder wählen Sie bestimmte Bereiche aus.",
      longDescription: "Schneiden Sie Ihre PDF-Seiten zu — entfernen Sie unerwünschte Ränder, beschneiden Sie Leerräume oder wählen Sie bestimmte Regionen aus. Wenden Sie denselben Zuschnitt auf alle Seiten an oder passen Sie ihn pro Seite an."
},
    "protect-pdf": {
      title: "PDF schützen",
      description: "Schützen Sie PDF-Dateien mit einem Passwort. Verschlüsseln Sie PDF-Dokumente, um unbefugten Zugriff zu verhindern.",
      longDescription: "Fügen Sie Ihren PDF-Dateien mit AES-Verschlüsselung Passwortschutz hinzu. Legen Sie Benutzerpasswort (zum Öffnen) und Besitzerpasswort (für Berechtigungen) fest. Kontrollieren Sie Druck-, Kopier- und Änderungsberechtigungen. Die gesamte Verschlüsselung erfolgt lokal."
},
    "unlock-pdf": {
      title: "Entsperren",
      description: "Entfernen Sie den PDF-Passwortschutz und nutzen Sie Ihre PDFs frei.",
      longDescription: "Entfernen Sie den Passwortschutz von Ihren PDF-Dateien (Sie müssen das Passwort kennen). Entsperren Sie Ihr PDF zum Bearbeiten, Drucken oder Kopieren. Die Verarbeitung erfolgt vollständig clientseitig."
},
    "html-to-pdf": {
      title: "HTML zu PDF",
      description: "Konvertieren Sie HTML-Webseiten in PDF. Fügen Sie einfach eine URL ein und konvertieren Sie sie mit einem Klick.",
      longDescription: "Konvertieren Sie HTML-Webseiten in PDF-Dokumente. Fügen Sie einfach eine URL ein oder geben Sie HTML-Code direkt ein. Perfekt zum Speichern von Webartikeln, Quittungen oder Dokumentation als PDF."
},
    "markdown-to-pdf": {
      title: "Markdown zu PDF",
      description: "Konvertieren Sie Markdown-Dateien in wunderschön formatierte PDF-Dokumente.",
      longDescription: "Konvertieren Sie Ihre Markdown-Dokumente in gut formatierte PDF-Dateien. Unterstützt Überschriften, Code-Blöcke, Tabellen und Bilder. Perfekt für Dokumentation, README-Dateien und technisches Schreiben. 100% browserbasiert."
},
    "heic-to-pdf": {
      title: "HEIC zu PDF",
      description: "Konvertieren Sie iPhone HEIC-Fotos in Sekundenschnelle in PDF. Kein Upload nötig.",
      longDescription: "Konvertieren Sie iPhone- und iPad-Fotos (HEIC/HEIF-Format) in PDF. Perfekt zum Teilen von Fotos als Dokumente. Die gesamte Verarbeitung erfolgt in Ihrem Browser."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "Konvertieren Sie gescannte PDFs in durchsuchbare und auswählbare Dokumente.",
      longDescription: "Extrahieren Sie Text aus gescannten PDFs und Bildern mit OCR (Optische Zeichenerkennung). Machen Sie gescannte Dokumente durchsuchbar und kopierbar. Englische OCR läuft lokal; zusätzliche Sprachen verfügbar."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "PDF signieren",
      description: "Fügen Sie handschriftliche oder getippte Signaturen zu Ihren PDF-Dokumenten hinzu.",
      longDescription: "Zeichnen, tippen oder laden Sie Ihre Unterschrift hoch und platzieren Sie sie auf jeder Seite Ihres PDFs. Unterstützt Zeichnen mit Maus/Touch, Texteingabe mit Schriftartauswahl oder Hochladen eines Signaturbilds. Positionieren, skalieren und herunterladen — alles in Ihrem Browser."
},
    "pdf-to-ppt": {
      title: "PDF zu PPT",
      description: "Konvertieren Sie Ihre PDF-Dateien in bearbeitbare PowerPoint-Präsentationen.",
      longDescription: "Konvertieren Sie PDF-Dokumente in das PowerPoint-Format (PPTX) für einfache Bearbeitung und Präsentation. Diese Konvertierung erfordert serverseitige Verarbeitung und wird in einem zukünftigen Update verfügbar sein."
},
    "pdf-to-excel": {
      title: "PDF zu Excel",
      description: "Extrahieren Sie Daten aus PDF-Tabellen und konvertieren Sie sie in Excel-Tabellen.",
      longDescription: "Konvertieren Sie PDF-Tabellen und -Daten in Excel-Tabellen (XLSX). Diese Konvertierung erfordert serverseitige Verarbeitung und wird in einem zukünftigen Update verfügbar sein."
}
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
    relatedTools: "Verwandte Tools"
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
    largeFileWarning: "Große Datei — die Verarbeitung kann länger dauern",
    // Edit PDF workspace
    reset: "Zurücksetzen",
    loadingPages: "Lade PDF-Seiten...",
    textMode: "✏️ Text",
    selectMode: "👆 Auswählen",
    enterTextPlaceholder: "Text zum Hinzufügen eingeben...",
    textModeTip: "Klicken Sie auf eine beliebige Stelle auf der Seite, um Ihren Text zu platzieren. Wechseln Sie in den Auswahlmodus, um Anmerkungen zu löschen.",
    selectModeTip: "Klicken Sie auf eine Anmerkung, um sie zu löschen. Wechseln Sie in den Textmodus, um weiteren Text hinzuzufügen.",
    addTextFirst: "Fügen Sie zuerst Textanmerkungen hinzu",
    annotationsCount: (n) => `Anmerkungen (${n} insgesamt)`,
    clearPage: "Seite löschen",
    selectAllAnnotations: "Alle auswählen",
    undo: "↩ Rückgängig",
    redo: "↪ Wiederholen",
    fontSizeLabel: "Schriftgröße",
    fontSmall: "Klein",
    fontMedium: "Mittel",
    fontLarge: "Groß",
    applyEdits: (n) => `Änderungen anwenden und herunterladen (${n} Anmerkung${n !== 1 ? "en" : ""})`,
    applyingEdits: "Änderungen werden angewendet...",
    page: "Seite",
    prev: "◀ Zurück",
    next: "Weiter ▶",
    failedToLoad: "Fehler beim Laden des PDF",
    processingFailed: "Verarbeitung fehlgeschlagen",
    noUploadEdit: "Kein Upload — alle Bearbeitungen erfolgen lokal",
    // Crop PDF workspace
    fullPage: "Ganze Seite",
    autoMargin: "Automatischer Rand",
    cropRegion: "Zuschneidebereich",
    dragToResize: "— Ecken zum Größen ändern ziehen, Mitte zum Verschieben",
    cropAllPages: (n) => `Zuschneiden auf alle ${n} Seiten anwenden`,
    cropSinglePage: "Aktuelle Seite zuschneiden",
    croppingPages: "Seiten werden zugeschnitten...",
    noUploadCrop: "Kein Upload — alles Zuschneiden erfolgt lokal",
    presetA4: "A4",
    presetLetter: "Letter",
    presetSquare: "Quadrat",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "Wechseln Sie die Seitenregisterkarten, um jede Seite anzuzeigen.",
    applyToAllPages: "Auf alle Seiten anwenden",
    cropX: "X",
    cropY: "Y",
    cropWidth: "Breite",
    cropHeight: "Höhe",
    // Sign PDF workspace
    signDrawTab: "Zeichnen",
    signTypeTab: "Tippen",
    signUploadTab: "Hochladen",
    signClearSignature: "Unterschrift löschen",
    signPlaceOnPage: "Klicken Sie auf das PDF, um Ihre Unterschrift zu platzieren. Ziehen Sie zum Verschieben.",
    signSignAndDownload: "Signieren und herunterladen",
    signFontSelector: "Unterschriftsstil",
    signDrawHint: "Zeichnen Sie Ihre Unterschrift unten mit Maus oder Touch",
    signTypeHint: "Geben Sie Ihre Unterschrift unten ein",
    // Organize PDF workspace
    pagesCount: (n) => `${n} Seite${n !== 1 ? "n" : ""}`,
    dragReorderClickDelete: "— ziehen zum Neuanordnen, klicken zum Löschen",
    removePage: "Seite entfernen",
    saveNewOrder: (n) => `Neue Reihenfolge speichern (${n} Seiten)`,
    reorganizingPages: "Seiten werden neu angeordnet...",
    noUploadOrganize: "Kein Upload — Seiten per Drag & Drop im Browser",
    // Rotate PDF workspace
    rotateAngle: "Drehwinkel",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "Wasserzeichentext",
    watermarkOpacity: "Deckkraft",
    watermarkSize: "Schriftgröße",
    watermarkFontFamily: "Schriftfamilie",
    watermarkRotation: "Drehung (°)",
    watermarkPosition: "Position",
    watermarkColor: "Farbe",
    fontSerif: "Serife",
    fontSansSerif: "Serifenlos",
    fontMonospace: "Monospace",
    positionCenter: "Zentriert",
    positionTopLeft: "Oben links",
    positionTopRight: "Oben rechts",
    positionBottomLeft: "Unten links",
    positionBottomRight: "Unten rechts",
    positionTile: "Kacheln / Wiederholen",
    // Protect/Unlock PDF workspace
    enterPassword: "Passwort eingeben",
    confirmPassword: "Passwort bestätigen",
    passwordMismatch: "Passwörter stimmen nicht überein",
    showPassword: "Anzeigen",
    hidePassword: "Verbergen",
    protectPdf: "PDF schützen",
    unlockPdf: "Entsperren",
    pdfNotEncrypted: "Dieses PDF ist nicht verschlüsselt",
    unsupportedEncryption: "Nicht unterstützter Verschlüsselungstyp",
    incorrectPassword: "Falsches Passwort",
    // Compress PDF workspace
    compressLevels: {
      label: "Komprimierungsstufe",
      light: "Leicht",
      standard: "Standard",
      maximum: "Maximal",
    },
    // Split PDF workspace
    splitMode: "Aufteilungsmodus",
    splitEveryPage: "Jede Seite aufteilen",
    splitByRange: "Nach Bereich aufteilen",
    extractPages: "Seiten extrahieren",
    splitEveryN: "Alle N Seiten aufteilen",
    rangePlaceholder: "z.B. 1-3,4-6,7-10",
    pagesPlaceholder: "z.B. 1,3,5,7",
    nPlaceholder: "z.B. 2",
    invalidRange: "Ungültiges Bereichsformat",
    // Merge PDF workspace
    mergeOrder: "Reihenfolge zusammenführen",
    dragToReorder: "Ziehen, um die Zusammenführungsreihenfolge zu ändern",
    mergeAndDownload: "Zusammenführen und herunterladen",
    mergingFiles: "Dateien werden zusammengeführt...",
    addMore: "Weitere Dateien hinzufügen",
    removeFile: "Datei entfernen",
    needAtLeastTwo: "Füge mindestens 2 PDF-Dateien zum Zusammenführen hinzu",
    files: "Dateien",
    // Shared option labels
    pageSize: "Seitengröße",
    a4: "A4",
    letter: "Letter",
    original: "Original",
    orientation: "Ausrichtung",
    auto: "Automatisch",
    portrait: "Hochformat",
    landscape: "Querformat",
    margins: "Ränder",
    marginNone: "Keine",
    marginNarrow: "Schmal",
    marginMedium: "Mittel",
    marginWide: "Breit",
    marginSmall: "Klein",
    marginLarge: "Groß",
    remove: "Entfernen",
    paperSize: "Papiergröße",
    // Page Numbers workspace
    position: "Position",
    startNumber: "Startnummer",
    formatDigits: "1, 2, 3",
    formatPageX: "Seite 1, Seite 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "Beim Hinzufügen von Seitenzahlen ist ein Fehler aufgetreten.",
    // Word to PDF workspace
    parsingWord: "Word-Dokument wird analysiert...",
    // Excel to PDF workspace
    parsingSpreadsheet: "Tabellenkalkulation wird analysiert...",
    // HTML to PDF workspace
    loadingHtml: "HTML wird geladen...",
    renderScale: "Render-Skalierung",
    // Markdown to PDF workspace
    processingMarkdown: "Markdown wird verarbeitet...",
    codeHighlight: "Code-Hervorhebung",
    on: "Ein",
    off: "Aus",
    // HEIC to PDF workspace
    decodingHeic: "HEIC-Dateien werden dekodiert...",
    // OCR PDF workspace
    ocrInitializing: "Initialisiere...",
    ocrLoadingEngine: "OCR-Engine wird geladen...",
    ocrLanguage: "Sprache",
    ocrLangEn: "Englisch",
    ocrLangZh: "Chinesisch + Englisch",
    ocrLangJa: "Japanisch + Englisch",
    ocrOutputFormat: "Ausgabeformat",
    ocrFormatText: "Reiner Text",
    ocrFormatPdf: "PDF mit Textebene",
    ocrProgress: (page, total) => `Seite ${page}/${total}`,
    ocrError: "Bei der OCR-Verarbeitung ist ein Fehler aufgetreten.",
    // PDF to Word workspace
    buildingWord: "Word-Dokument wird erstellt...",
    generatingDocx: "DOCX-Datei wird generiert...",
    pageSeparator: "Seitentrenner",
    separatorPageBreak: "Seitenumbruch",
    separatorContinuous: "Fortlaufend",
    includePageNumbers: "Seitenzahlen einschließen",
    pdfToWordError: "Bei der Konvertierung in Word ist ein Fehler aufgetreten.",
    // Protect PDF workspace
    encryptionAlgorithm: "Verschlüsselung",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128 Bit",
    encryptAes256Desc: "PDF 2.0 — Maximale Sicherheit",
    encryptRc4Desc: "Kompatibel mit älteren PDF-Readern",
    permissions: "Berechtigungen",
    allowPrinting: "Drucken erlauben",
    allowCopying: "Text kopieren erlauben",
    allowModifying: "Ändern erlauben",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "Anleitungen & Tutorials",
    description: "Schritt-für-Schritt-Anleitungen für die Bild- und PDF-Verarbeitung. Lernen Sie Tipps, Tricks und bewährte Methoden.",
    browseGuides: "Anleitungen durchsuchen",
    readGuide: "Anleitung lesen →",
    backToGuides: "← Zurück zu den Anleitungen",
    breadcrumbGuides: "Anleitungen",
  },
  convert: {
    converter: "Konverter",
    free: "Kostenlos online",
    noUpload: "kein Upload erforderlich — die gesamte Verarbeitung erfolgt in Ihrem Browser",
    subtitle: (from, to) => `Konvertieren Sie ${from} (${from.toUpperCase()})-Dateien in das ${to} (${to.toUpperCase()})-Format online, kostenlos und`,
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
    subtitleGeneric: "Konvertieren Sie PDF in verschiedene Formate und zurück. Kostenlos, kein Upload, im Browser.",
    relatedConversions: "Verwandte Konvertierungen"
},
  category: {
    all: "Alle",
    organize: "PDF organisieren",
    optimize: "PDF optimieren",
    convert: "PDF konvertieren",
    edit: "PDF bearbeiten",
    security: "PDF-Sicherheit",
    intelligence: "PDF-Intelligenz",
    workflow: "Workflows"
},
  dropzone: {
    dropHere: "Dateien hier ablegen",
    dragDropHere: "Dateien per Drag & Drop hier ablegen",
    orClickBrowse: "oder klicken zum Durchsuchen",
    filesUpTo: "Dateien, bis zu",
    multipleSupported: "(mehrere Dateien unterstützt)",
    fileExceed: "Datei(en) überschreitet(ten) die Größenbeschränkung:",
    invalidFileType: "Ungültiges Dateiformat. Bitte laden Sie eine gültige PDF-Datei hoch."
},
  toolCard: {
    new: "Neu",
    pro: "Pro"
},
  pdfToImage: {
    title: "PDF zu Bild",
    description: "Wandeln Sie PDF-Seiten in JPG- oder PNG-Bilder um. Wählen Sie Qualität und Auflösung.",
    formatLabel: "Ausgabeformat",
    qualityLabel: "JPEG-Qualität",
    scaleLabel: "Auflösung",
    pngOption: "PNG (Verlustfrei)",
    jpgOption: "JPG (Kleiner)",
    convertBtn: "In Bilder umwandeln",
    preview: "Bilder erstellt",
    pageLabel: "Seite",
    downloadPage: "Herunterladen",
    downloadAll: "Alle herunterladen",
    noFile: "Wählen Sie oben eine PDF-Datei aus, um deren Seiten in Bilder umzuwandeln.",
    renderingPages: "PDF-Seiten werden gerendert..."
},
  footer: {
    product: "Produkt",
    popularTools: "Beliebte Tools",
    convert: "Konvertieren",
    company: "Unternehmen",
    privacy: "Datenschutz",
    privacyLine: "Die gesamte PDF-Verarbeitung erfolgt vollständig in Ihrem Browser. Ihre Dateien werden niemals auf einen Server hochgeladen.",
    home: "Startseite",
    allTools: "Alle Tools",
    pricing: "Preise",
    about: "Über uns",
    terms: "AGB",
    contact: "Kontakt",
    alsoTry: "Auch probieren：",
    imageTools: "🖼️ Bild-Tools",
    unitConverter: "🔄 Einheitenumrechner",
    copyright: "Die gesamte PDF-Verarbeitung erfolgt vollständig in Ihrem Browser. Ihre Dateien werden niemals auf einen Server hochgeladen. 100% Datenschutz."
},
pages: {
  pricing: {
    title: "Preise",
    subtitle: "Einfach und transparent — alle PDF-Werkzeuge sind 100% kostenlos.",
    freeTier: "Kostenlos",
    freeDesc: "Nutzen Sie alle PDF-Werkzeuge kostenlos. Keine versteckten Gebühren, kein Abonnement — nur leistungsstarke, kostenlose PDF-Verarbeitung direkt in Ihrem Browser.",
    freeFeature1: "Alle 20+ PDF-Werkzeuge inklusive",
    freeFeature2: "Keine Anmeldung oder Registrierung erforderlich",
    freeFeature3: "Keine Dateigrößenbeschränkungen",
    freeFeature4: "100% browserbasiert — kein Hochladen, keine Server",
    proTier: "Pro (Demnächst verfügbar)",
    proDesc: "Erweiterte Funktionen für Power-User, die mehr benötigen. Bleiben Sie dran!",
    ocrNote: "OCR (Optische Zeichenerkennung) wird als Pro-Funktion verfügbar sein. Konvertieren Sie gescannte PDFs mit professioneller Genauigkeit in durchsuchbaren Text.",
    faqQ1: "Warum sind die Werkzeuge kostenlos?",
    faqA1: "Wir glauben, dass grundlegende PDF-Werkzeuge für alle zugänglich sein sollten. Unser browserbasierter Ansatz hält die Kosten niedrig, da Dateien Ihr Gerät nie verlassen. So können wir alle Werkzeuge völlig kostenlos anbieten, unterstützt durch minimale Werbung.",
    faqQ2: "Was passiert, wenn Pro startet?",
    faqA2: "Wenn Pro startet, bleiben alle aktuellen kostenlosen Werkzeuge vollständig kostenlos. Pro wird erweiterte Funktionen wie OCR, höhere Konvertierungsqualität und Batch-Verarbeitung für Benutzer hinzufügen, die sie benötigen. Keine bestehende Funktionalität wird hinter eine Bezahlschranke verschoben."
  },
  about: {
    title: "Über toolconv",
    subtitle: "Datenschutzorientierte PDF-Werkzeuge, die vollständig in Ihrem Browser laufen.",
    missionTitle: "Unsere Mission",
    missionDesc: "toolconv wurde mit einer einfachen Mission entwickelt: leistungsstarke, professionelle PDF-Werkzeuge bereitzustellen, die Ihre Privatsphäre respektieren. Wir glauben, dass Dateiverarbeitung auf Ihrem Gerät erfolgen sollte, nicht auf dem Server eines anderen. Jedes von uns entwickelte Werkzeug läuft vollständig in Ihrem Browser mit clientseitigem JavaScript — Ihre Dateien verlassen nie Ihren Computer.",
    value1Title: "🔒 100% Privat",
    value1Desc: "Ihre Dateien werden lokal in Ihrem Browser verarbeitet. Sie werden nie hochgeladen, gespeichert oder geteilt. Kein Serverzugriff auf Ihre Daten.",
    value2Title: "🖥️ Browserbasiert",
    value2Desc: "Kein Herunterladen, keine Installation. Alles funktioniert direkt in Ihrem modernen Browser. Angetrieben von WebAssembly und clientseitigem JavaScript.",
    value3Title: "💰 Völlig Kostenlos",
    value3Desc: "Alle Werkzeuge sind ohne Einschränkungen, Anmeldungen oder versteckte Kosten kostenlos nutzbar. Wir setzen uns dafür ein, PDF-Werkzeuge für alle zugänglich zu machen.",
    value4Title: "🌍 Funktioniert Offline",
    value4Desc: "Einmal geladen, können viele Werkzeuge ohne Internetverbindung arbeiten. Perfekt für Reisende, Remote-Mitarbeiter und alle, die Wert auf Datenschutz legen.",
    storyTitle: "Unsere Geschichte",
    storyDesc: "toolconv begann mit einer einfachen Beobachtung: Die meisten 'kostenlosen' Online-PDF-Werkzeuge laden Ihre Dateien tatsächlich auf ihre Server hoch, verarbeiten sie remote und verkaufen oft Ihre Daten oder sperren Funktionen hinter teuren Abonnements. Wir wollten eine bessere Alternative schaffen — eine, bei der alle Verarbeitung clientseitig erfolgt, bei der Datenschutz in die Architektur integriert ist und bei der leistungsstarke PDF-Werkzeuge für alle kostenlos bleiben. Heute bedient toolconv Benutzer weltweit mit über 20 browserbasierten PDF-Werkzeugen, alle 100% kostenlos und datenschutzorientiert."
  },
  privacy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 1. Juni 2026",
    intro: "Bei toolconv hat Ihre Privatsphäre höchste Priorität. Diese Richtlinie erklärt, wie wir Ihre Daten verarbeiten, wenn Sie unsere Dienste nutzen.",
    s1Title: "1. Kein Daten-Upload",
    s1Content: "Die gesamte PDF-Verarbeitung erfolgt vollständig in Ihrem Browser mit clientseitigem JavaScript. Ihre Dateien werden niemals auf unsere Server hochgeladen — sie bleiben von Anfang bis Ende auf Ihrem Gerät. Wir haben keinen serverseitigen Zugriff auf Ihre Dokumente und speichern, verarbeiten oder übertragen Ihre Dateien nie über Ihren lokalen Rechner hinaus.",
    s2Title: "2. Keine Cookies (außer Analyse)",
    s2Content: "Wir verwenden keine funktionalen Cookies für den Kernbetrieb der Website. Die einzigen auf dieser Website verwendeten Cookies stammen von Google AdSense für Anzeigenpersonalisierung und Berichterstattung. Dies sind Drittanbieter-Cookies, die der Datenschutzerklärung von Google unterliegen. Sie können Ihre Cookie-Einstellungen über Ihre Browsereinstellungen verwalten.",
    s3Title: "3. Analyse und Werbung",
    s3Content: "Diese Website verwendet Google AdSense, das Daten über Ihren Besuch (wie besuchte Seiten und Anzeigeninteraktionen) sammeln und verwenden kann, um relevante Werbung zu schalten. Google AdSense verwendet Cookies und ähnliche Technologien. Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter policies.google.com/privacy. Wir selbst sammeln oder speichern keine persönlichen Analysedaten — keine Serverprotokolle, keine Tracking-Skripte über AdSense hinaus und keine Analyseplattformen wie Google Analytics.",
    s4Title: "4. Kein Konto erforderlich",
    s4Content: "Wir benötigen keine Benutzerkonten oder Registrierung. Es gibt keinen Anmeldeprozess, keine E-Mail-Erfassung und keine Benutzerprofile. Das bedeutet, dass wir grundsätzlich keine personenbezogenen Daten über Sie sammeln. Ihre Nutzung unserer Werkzeuge ist völlig anonym.",
    s5Title: "5. Drittanbieter-Links",
    s5Content: "Unsere Website kann Links zu Drittanbieter-Websites enthalten (z. B. Schwesterprojekte wie image.toolconv.com und unit.toolconv.com oder Google AdSense-Anzeigen). Wir sind nicht verantwortlich für die Datenschutzpraktiken dieser externen Websites. Wir empfehlen Ihnen, deren Datenschutzerklärungen zu lesen, bevor Sie mit ihnen interagieren.",
    contact: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter support@toolconv.com."
  },
  terms: {
    title: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: 1. Juni 2026",
    intro: "Willkommen bei toolconv. Durch die Nutzung unserer Website und Werkzeuge stimmen Sie den folgenden Bedingungen zu. Bitte lesen Sie sie sorgfältig.",
    s1Title: "1. Kostenlose Nutzung",
    s1Content: "Alle Werkzeuge auf toolconv werden kostenlos zur Verfügung gestellt. Es ist keine Zahlung und kein Abonnement erforderlich. Wir behalten uns das Recht vor, in Zukunft Premium-Funktionen einzuführen, aber alle bestehenden kostenlosen Werkzeuge bleiben kostenlos.",
    s2Title: "2. Datenschutzverpflichtung",
    s2Content: "Ihre Privatsphäre ist grundlegend für unseren Dienst. Die gesamte Dateiverarbeitung erfolgt lokal in Ihrem Browser. Wir haben keinen Zugriff auf Ihre Dateien und speichern, verarbeiten oder übertragen sie nicht. Ausführliche Informationen finden Sie in unserer Datenschutzerklärung.",
    s3Title: "3. Zulässige Nutzung",
    s3Content: "Sie stimmen zu, toolconv nur für rechtmäßige Zwecke und gemäß diesen Bedingungen zu nutzen. Sie dürfen unsere Werkzeuge nicht zur Verarbeitung illegaler Inhalte, zur Verletzung des geistigen Eigentums anderer oder zum Versuch der Störung unseres Dienstes verwenden.",
    s4Title: "4. Keine Gewährleistung",
    s4Content: "toolconv wird 'wie besehen' ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Obwohl wir uns um Genauigkeit und Zuverlässigkeit bemühen, garantieren wir nicht, dass die Werkzeuge fehlerfrei oder ununterbrochen sind. Die Ausgabequalität kann je nach Eingabedatei variieren. Nutzung auf eigenes Risiko.",
    s5Title: "5. Haftungsbeschränkung",
    s5Content: "toolconv und seine Betreiber haften nicht für Schäden, die aus der Nutzung oder Unmöglichkeit der Nutzung unserer Werkzeuge entstehen, einschließlich, aber nicht beschränkt auf Datenverlust, Geschäftsunterbrechung oder indirekte Schäden. Unsere gesamte Haftung ist auf das maximal nach geltendem Recht zulässige Maß beschränkt.",
    s6Title: "6. Kontakt",
    s6Content: "Bei Fragen zu diesen Bedingungen wenden Sie sich bitte an support@toolconv.com. Wir klären gerne alle Ihre Anliegen."
  },
  contact: {
    title: "Kontaktieren Sie Uns",
    subtitle: "Wir freuen uns, von Ihnen zu hören. Kontaktieren Sie uns bei Fragen, Anregungen oder Feedback.",
    emailTitle: "📧 E-Mail-Support",
    emailDesc: "Für Fragen, Fehlerberichte oder allgemeine Anfragen:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 Funktionsanfragen",
    featureDesc: "Haben Sie eine Idee für ein neues Werkzeug oder eine Verbesserung? Wir sind ganz Ohr! Senden Sie uns Ihre Vorschläge und wir werden sie für zukünftige Updates berücksichtigen.",
    responseTitle: "⏱️ Antwortzeit",
    responseDesc: "Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen. Wir schätzen Ihre Zeit und werden uns so schnell wie möglich bei Ihnen melden."
  }
}
};
export default dict;