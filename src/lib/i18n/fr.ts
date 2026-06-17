import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Outils PDF gratuits en ligne",
    description: "Des outils PDF en ligne gratuits qui fonctionnent entièrement dans votre navigateur. Fusionnez, divisez, compressez, convertissez et éditez des PDF — sans téléchargement, sans inscription, 100% privé."
},
  header: {
    mergePdf: "Fusionner PDF",
    splitPdf: "Diviser PDF",
    compressPdf: "Compresser PDF",
    convert: "Convertir",
    allTools: "Tous les outils"
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
    badgeOffline: "Fonctionne hors ligne"
},
  tools: {
    heading: "Tous les outils PDF",
    countLabel: (n) => `${n} outil${n !== 1 ? "s" : ""} disponible${n !== 1 ? "s" : ""} — choisissez-en un pour commencer`
},
  toolItems: {
    "merge-pdf": {
      title: "Fusionner PDF",
      description: "Combinez des PDF dans l'ordre de votre choix avec le plus simple des fusionneurs PDF.",
      longDescription: "Fusionnez plusieurs fichiers PDF en un seul document. Téléchargez vos PDF, organisez-les dans l'ordre souhaité et téléchargez le résultat fusionné. Tout le traitement se fait localement dans votre navigateur."
},
    "split-pdf": {
      title: "Diviser PDF",
      description: "Séparez une page ou un ensemble complet pour les convertir facilement en fichiers PDF indépendants.",
      longDescription: "Divisez un document PDF en pages individuelles ou extrayez des plages de pages spécifiques. Choisissez de diviser par page, par plage ou d'extraire chaque page en fichier séparé. 100% basé sur le navigateur."
},
    "organize-pdf": {
      title: "Organiser PDF",
      description: "Triez, supprimez ou ajoutez des pages à votre PDF. Glissez-déposez pour réorganiser.",
      longDescription: "Réorganisez les pages de votre PDF comme vous le souhaitez. Supprimez les pages indésirables, ajoutez de nouvelles pages ou réorganisez les pages existantes avec une interface glisser-déposer. Tout le traitement se fait localement."
},
    "compress-pdf": {
      title: "Compresser PDF",
      description: "Réduisez la taille du fichier tout en optimisant la qualité du PDF.",
      longDescription: "Compressez votre PDF pour réduire sa taille sans perte de qualité significative. Idéal pour les pièces jointes et les téléchargements web. Choisissez votre niveau de compression. Le traitement est entièrement effectué dans votre navigateur."
},
    "pdf-to-word": {
      title: "PDF en Word",
      description: "Convertissez facilement vos fichiers PDF en documents DOC et DOCX modifiables.",
      longDescription: "Extrayez le contenu textuel du PDF et enregistrez-le sous forme de fichier Word (DOCX). ⚠️ Remarque : Cet outil effectue une extraction de texte uniquement et NE préserve PAS la mise en forme, les images ou la disposition des tableaux. Idéal pour extraire du texte à des fins de réédition."
},
    "pdf-to-jpg": {
      title: "PDF en JPG",
      description: "Convertissez chaque page PDF en JPG ou extrayez toutes les images contenues dans un PDF.",
      longDescription: "Convertissez les pages PDF en images JPG de haute qualité. Choisissez votre résolution et votre niveau de qualité. Parfait pour partager du contenu PDF sur les réseaux sociaux ou l'intégrer dans des présentations. 100% basé sur le navigateur."
},
    "jpg-to-pdf": {
      title: "JPG en PDF",
      description: "Convertissez des images JPG en PDF en quelques secondes. Ajustez facilement l'orientation et les marges.",
      longDescription: "Convertissez une ou plusieurs images JPG/JPEG en un document PDF. Organisez les images dans l'ordre, choisissez la taille et l'orientation de la page. Tout le traitement se fait localement dans votre navigateur."
},
    "pdf-to-png": {
      title: "PDF en PNG",
      description: "Convertissez des pages PDF en images PNG de haute qualité sans perte.",
      longDescription: "Extrayez les pages PDF en images PNG sans perte avec prise en charge de la transparence. Idéal pour les graphiques, les captures d'écran et le contenu nécessitant une reproduction parfaite des pixels. Entièrement basé sur le navigateur."
},
    "pdf-to-image": {
      title: "PDF en Image",
      description: "Convertissez des pages PDF en images JPG ou PNG. Choisissez qualité et résolution.",
      longDescription: "Convertissez chaque page de votre PDF en images de haute qualité. Choisissez entre JPG (qualité ajustable pour des fichiers plus petits) ou PNG (sans perte, parfait pour les graphiques). Ajustez la résolution pour des résultats nets. Tout dans votre navigateur."
},
    "pdf-to-text": {
      title: "PDF en Texte",
      description: "Extrayez le contenu textuel de documents PDF.",
      longDescription: "Extrayez le contenu textuel de vos fichiers PDF. Idéal pour réutiliser du contenu, extraire des données ou rendre les PDF recherchables. Fonctionne localement dans votre navigateur."
},
    "word-to-pdf": {
      title: "Word en PDF",
      description: "Rendez les fichiers DOC et DOCX faciles à lire en les convertissant en PDF.",
      longDescription: "Convertissez des documents Microsoft Word (DOCX) au format PDF pour un partage et une impression faciles. Préservez le formatage, les images et la mise en page."
},
    "excel-to-pdf": {
      title: "Excel en PDF",
      description: "Rendez les feuilles de calcul Excel faciles à lire en les convertissant en PDF.",
      longDescription: "Convertissez des feuilles de calcul Microsoft Excel (XLSX) en PDF. Préservez le formatage des tableaux, les graphiques et la disposition des données pour un partage professionnel."
},
    "edit-pdf": {
      title: "Modifier PDF",
      description: "Ajoutez du texte, des images, des formes ou des annotations à un document PDF.",
      longDescription: "Ajoutez du texte, des images, des formes et des annotations à votre PDF. Modifiez la taille de la police, la couleur et la position du contenu ajouté. Remarque : la modification du texte PDF existant nécessite un traitement côté serveur."
},
    "watermark-pdf": {
      title: "Ajouter un filigrane",
      description: "Apposez du texte ou des images sur votre PDF en quelques secondes. Choisissez typographie, transparence et position.",
      longDescription: "Ajoutez des filigranes de texte ou d'image personnalisés à vos documents PDF. Contrôlez l'opacité, la rotation, la position et la répétition. Parfait pour l'image de marque, la protection des droits d'auteur ou le marquage d'état des documents. 100% côté client."
},
    "rotate-pdf": {
      title: "Pivoter PDF",
      description: "Faites pivoter vos pages PDF comme vous le souhaitez. Vous pouvez même pivoter plusieurs PDF à la fois !",
      longDescription: "Faites pivoter des pages individuelles ou des documents PDF entiers. Choisissez une rotation de 90°, 180° ou 270°. Tout le traitement se fait instantanément dans votre navigateur."
},
    "page-numbers": {
      title: "Ajouter des numéros de page",
      description: "Ajoutez facilement des numéros de page aux PDF. Choisissez position, dimensions et typographie.",
      longDescription: "Ajoutez des numéros de page personnalisables à vos documents PDF. Sélectionnez la position (haut/bas, gauche/centre/droite), le numéro de début, la taille et le style de police. Tout traitement basé sur le navigateur."
},
    "crop-pdf": {
      title: "Recadrer PDF",
      description: "Recadrez les marges des documents PDF ou sélectionnez des zones spécifiques.",
      longDescription: "Recadrez vos pages PDF — supprimez les marges indésirables, rognez les espaces blancs ou sélectionnez des régions spécifiques. Appliquez le même recadrage à toutes les pages ou personnalisez par page."
},
    "protect-pdf": {
      title: "Protéger PDF",
      description: "Protégez des fichiers PDF avec un mot de passe. Chiffrez des documents PDF pour empêcher tout accès non autorisé.",
      longDescription: "Ajoutez une protection par mot de passe à vos fichiers PDF en utilisant le chiffrement AES. Définissez un mot de passe utilisateur (pour ouvrir) et un mot de passe propriétaire (pour les permissions). Contrôlez les permissions d'impression, de copie et de modification. Tout le chiffrement se fait localement."
},
    "unlock-pdf": {
      title: "Déverrouiller PDF",
      description: "Supprimez la sécurité par mot de passe du PDF, vous donnant la liberté d'utiliser vos PDF comme vous le souhaitez.",
      longDescription: "Supprimez la protection par mot de passe de vos fichiers PDF (vous devez connaître le mot de passe). Déverrouillez votre PDF pour le modifier, l'imprimer ou le copier. Le traitement est entièrement côté client."
},
    "html-to-pdf": {
      title: "HTML en PDF",
      description: "Convertissez des pages web HTML en PDF. Collez simplement une URL et convertissez-la en PDF en un clic.",
      longDescription: "Convertissez des pages web HTML en documents PDF. Collez simplement une URL ou saisissez directement du code HTML. Parfait pour sauvegarder des articles web, des reçus ou de la documentation en PDF."
},
    "markdown-to-pdf": {
      title: "Markdown en PDF",
      description: "Convertissez des fichiers Markdown en documents PDF magnifiquement formatés.",
      longDescription: "Convertissez vos documents Markdown en fichiers PDF bien formatés. Prend en charge les en-têtes, les blocs de code, les tableaux et les images. Parfait pour la documentation, les fichiers README et l'écriture technique. 100% basé sur le navigateur."
},
    "heic-to-pdf": {
      title: "HEIC en PDF",
      description: "Convertissez des photos HEIC d'iPhone en PDF en quelques secondes. Aucun téléchargement nécessaire.",
      longDescription: "Convertissez des photos d'iPhone et d'iPad (format HEIC/HEIF) en PDF. Parfait pour partager des photos en tant que documents. Tout le traitement se fait dans votre navigateur."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "Convertissez les PDF scannés en documents consultables et sélectionnables.",
      longDescription: "Extrayez le texte des PDF et images scannés à l'aide de l'OCR (Reconnaissance Optique de Caractères). Rendez les documents scannés consultables et copiables. L'OCR en anglais fonctionne localement ; langues supplémentaires disponibles."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "Signer PDF",
      description: "Ajoutez des signatures manuscrites ou tapées à vos documents PDF.",
      longDescription: "Dessinez, tapez ou téléchargez votre signature et placez-la sur n'importe quelle page de votre PDF. Prend en charge le dessin à la souris/au toucher, la saisie avec sélection de police ou le téléchargement d'une image de signature. Positionnez, redimensionnez et téléchargez le PDF signé — tout dans votre navigateur."
},
    "pdf-to-ppt": {
      title: "PDF en PPT",
      description: "Convertissez vos fichiers PDF en présentations PowerPoint modifiables.",
      longDescription: "Convertissez des documents PDF au format PowerPoint (PPTX) pour une édition et une présentation faciles. Cette conversion nécessite un traitement côté serveur et sera disponible dans une future mise à jour."
},
    "pdf-to-excel": {
      title: "PDF en Excel",
      description: "Extrayez les données des tableaux PDF et convertissez-les en feuilles de calcul Excel.",
      longDescription: "Convertissez les tableaux et données PDF en feuilles de calcul Excel (XLSX). Cette conversion nécessite un traitement côté serveur et sera disponible dans une future mise à jour."
}
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
    relatedTools: "Outils associés"
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
    previewWarning: "Mode aperçu. Certaines actions peuvent être limitées dans cette version basée sur le navigateur.",
    selectHint: "Sélectionnez des fichiers ci-dessus pour commencer.",
    comingSoon: "Cet outil n’est pas disponible dans la version navigateur. Choisissez un outil PDF disponible dans la liste.",
    pages: "pages",
    mb: "Mo",
    kb: "Ko",
    loadingFiles: "Chargement des fichiers...",
    unexpectedError: "Une erreur inattendue est survenue.",
    largeFileWarning: "Fichier volumineux — le traitement peut prendre plus de temps",
    // Edit PDF workspace
    reset: "Réinitialiser",
    loadingPages: "Chargement des pages PDF...",
    textMode: "✏️ Texte",
    selectMode: "👆 Sélectionner",
    enterTextPlaceholder: "Entrez le texte à ajouter...",
    textModeTip: "Cliquez n'importe où sur la page pour placer votre texte. Passez en mode Sélection pour supprimer des annotations.",
    selectModeTip: "Cliquez sur une annotation pour la supprimer. Passez en mode Texte pour ajouter plus de texte.",
    addTextFirst: "Ajoutez d'abord des annotations de texte",
    annotationsCount: (n) => `Annotations (${n} au total)`,
    clearPage: "Effacer la page",
    selectAllAnnotations: "Tout sélectionner",
    undo: "↩ Annuler",
    redo: "↪ Rétablir",
    fontSizeLabel: "Taille de police",
    fontSmall: "Petit",
    fontMedium: "Moyen",
    fontLarge: "Grand",
    applyEdits: (n) => `Appliquer les modifications et télécharger (${n} annotation${n !== 1 ? "s" : ""})`,
    applyingEdits: "Application des modifications...",
    page: "Page",
    prev: "◀ Précédent",
    next: "Suivant ▶",
    failedToLoad: "Échec du chargement du PDF",
    processingFailed: "Échec du traitement",
    noUploadEdit: "Pas de téléchargement — toute l'édition se fait localement",
    // Crop PDF workspace
    fullPage: "Page entière",
    autoMargin: "Marge automatique",
    cropRegion: "Zone de recadrage",
    dragToResize: "— faites glisser les coins pour redimensionner, le centre pour déplacer",
    cropAllPages: (n) => `Appliquer le recadrage aux ${n} pages`,
    cropSinglePage: "Recadrer la page actuelle",
    croppingPages: "Recadrage des pages...",
    noUploadCrop: "Pas de téléchargement — tout le recadrage se fait localement",
    presetA4: "A4",
    presetLetter: "Lettre",
    presetSquare: "Carré",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "Changez d'onglet pour prévisualiser chaque page.",
    applyToAllPages: "Appliquer à toutes les pages",
    cropX: "X",
    cropY: "Y",
    cropWidth: "Largeur",
    cropHeight: "Hauteur",
    // Sign PDF workspace
    signDrawTab: "Dessiner",
    signTypeTab: "Taper",
    signUploadTab: "Télécharger",
    signClearSignature: "Effacer la signature",
    signPlaceOnPage: "Cliquez sur le PDF pour placer votre signature. Glissez pour repositionner.",
    signSignAndDownload: "Signer et télécharger",
    signFontSelector: "Style de signature",
    signDrawHint: "Dessinez votre signature ci-dessous avec la souris ou le tactile",
    signTypeHint: "Tapez votre signature ci-dessous",
    // Organize PDF workspace
    pagesCount: (n) => `${n} page${n !== 1 ? "s" : ""}`,
    dragReorderClickDelete: "— faites glisser pour réorganiser, cliquez pour supprimer",
    removePage: "Supprimer la page",
    saveNewOrder: (n) => `Enregistrer le nouvel ordre (${n} pages)`,
    reorganizingPages: "Réorganisation des pages...",
    noUploadOrganize: "Pas de téléchargement — glissez-déposez les pages dans votre navigateur",
    // Rotate PDF workspace
    rotateAngle: "Angle de rotation",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "Texte du filigrane",
    watermarkOpacity: "Opacité",
    watermarkSize: "Taille de police",
    watermarkFontFamily: "Famille de police",
    watermarkRotation: "Rotation (°)",
    watermarkPosition: "Position",
    watermarkColor: "Couleur",
    fontSerif: "Serif",
    fontSansSerif: "Sans-Serif",
    fontMonospace: "Monospace",
    positionCenter: "Centre",
    positionTopLeft: "Haut-gauche",
    positionTopRight: "Haut-droite",
    positionBottomLeft: "Bas-gauche",
    positionBottomRight: "Bas-droite",
    positionTile: "Mosaïque / Répéter",
    // Protect/Unlock PDF workspace
    enterPassword: "Saisir le mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    showPassword: "Afficher",
    hidePassword: "Masquer",
    protectPdf: "Protéger le PDF",
    unlockPdf: "Déverrouiller",
    pdfNotEncrypted: "Ce PDF n'est pas chiffré",
    unsupportedEncryption: "Type de chiffrement non supporté",
    incorrectPassword: "Mot de passe incorrect",
    // Compress PDF workspace
    compressLevels: {
      label: "Niveau de compression",
      light: "Léger",
      standard: "Standard",
      maximum: "Maximal",
    },
    // Split PDF workspace
    splitMode: "Mode de division",
    splitEveryPage: "Diviser chaque page",
    splitByRange: "Diviser par plage",
    extractPages: "Extraire les pages",
    splitEveryN: "Diviser toutes les N pages",
    rangePlaceholder: "ex.: 1-3,4-6,7-10",
    pagesPlaceholder: "ex.: 1,3,5,7",
    nPlaceholder: "ex.: 2",
    invalidRange: "Format de plage invalide",
    // Merge PDF workspace
    mergeOrder: "Ordre de fusion",
    dragToReorder: "Glisser-déposer pour réorganiser la séquence de fusion",
    mergeAndDownload: "Fusionner et télécharger",
    mergingFiles: "Fusion des fichiers en cours...",
    addMore: "Ajouter d'autres fichiers",
    removeFile: "Supprimer le fichier",
    needAtLeastTwo: "Ajoutez au moins 2 fichiers PDF à fusionner",
    files: "fichiers",
    // Shared option labels
    pageSize: "Taille de page",
    a4: "A4",
    letter: "Letter",
    original: "Original",
    orientation: "Orientation",
    auto: "Automatique",
    portrait: "Portrait",
    landscape: "Paysage",
    margins: "Marges",
    marginNone: "Aucune",
    marginNarrow: "Étroite",
    marginMedium: "Moyenne",
    marginWide: "Large",
    marginSmall: "Petite",
    marginLarge: "Grande",
    remove: "Supprimer",
    paperSize: "Format de papier",
    // Page Numbers workspace
    position: "Position",
    startNumber: "Numéro de départ",
    formatDigits: "1, 2, 3",
    formatPageX: "Page 1, Page 2",
    formatXOfN: "1/N",
    formatDashX: "—1—",
    addPageNumbersError: "Une erreur est survenue lors de l'ajout des numéros de page.",
    // Word to PDF workspace
    parsingWord: "Analyse du document Word...",
    // Excel to PDF workspace
    parsingSpreadsheet: "Analyse du tableur...",
    // HTML to PDF workspace
    loadingHtml: "Chargement du HTML...",
    renderScale: "Échelle de rendu",
    // Markdown to PDF workspace
    processingMarkdown: "Traitement du Markdown...",
    codeHighlight: "Coloration syntaxique",
    on: "Activé",
    off: "Désactivé",
    // HEIC to PDF workspace
    decodingHeic: "Décodage des fichiers HEIC...",
    // OCR PDF workspace
    ocrInitializing: "Initialisation...",
    ocrLoadingEngine: "Chargement du moteur OCR...",
    ocrLanguage: "Langue",
    ocrLangEn: "Anglais",
    ocrLangZh: "Chinois + Anglais",
    ocrLangJa: "Japonais + Anglais",
    ocrOutputFormat: "Format de sortie",
    ocrFormatText: "Texte brut",
    ocrFormatPdf: "PDF avec couche de texte",
    ocrProgress: (page, total) => `Page ${page}/${total}`,
    ocrError: "Une erreur est survenue lors du traitement OCR.",
    // PDF to Word workspace
    buildingWord: "Construction du document Word...",
    generatingDocx: "Génération du fichier DOCX...",
    pageSeparator: "Séparateur de page",
    separatorPageBreak: "Saut de page",
    separatorContinuous: "Continu",
    includePageNumbers: "Inclure les numéros de page",
    pdfToWordError: "Une erreur est survenue lors de la conversion en Word.",
    // Protect PDF workspace
    encryptionAlgorithm: "Chiffrement",
    encryptAes256: "AES-256",
    encryptRc4: "RC4 128 bits",
    encryptAes256Desc: "PDF 2.0 — Sécurité maximale",
    encryptRc4Desc: "Compatible avec les anciens lecteurs PDF",
    permissions: "Autorisations",
    allowPrinting: "Autoriser l'impression",
    allowCopying: "Autoriser la copie de texte",
    allowModifying: "Autoriser la modification",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "Guides et Tutoriels",
    description: "Tutoriels pas à pas et guides pour le traitement d'images et de PDF. Apprenez des astuces et bonnes pratiques.",
    browseGuides: "Parcourir les Guides",
    readGuide: "Lire le Guide →",
    backToGuides: "← Retour aux Guides",
    breadcrumbGuides: "Guides",
  },
  convert: {
    converter: "Convertisseur",
    free: "Gratuit en ligne",
    noUpload: "aucun téléchargement requis — tout le traitement se fait dans votre navigateur",
    subtitle: (from, to) => `Convertissez des fichiers ${from} (${from.toUpperCase()}) au format ${to} (${to.toUpperCase()}) en ligne, gratuitement et`,
    browserBased: "Basé sur le navigateur",
    experimental: "Expérimental",
    comingSoon: "Conversion non prise en charge",
    comingSoonDesc: "Ce type de conversion nécessite un traitement côté serveur et n’est pas disponible dans cette version navigateur.",
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
    subtitleGeneric: "Convertissez vos PDF vers et depuis divers formats. Gratuit, sans téléchargement, dans votre navigateur.",
    relatedConversions: "Conversions associées"
},
  category: {
    all: "Toutes",
    organize: "Organiser PDF",
    optimize: "Optimiser PDF",
    convert: "Convertir PDF",
    edit: "Modifier PDF",
    security: "Sécurité PDF",
    intelligence: "Intelligence PDF",
    workflow: "Flux de travail"
},
  dropzone: {
    dropHere: "Déposez les fichiers ici",
    dragDropHere: "Glissez-déposez les fichiers ici",
    orClickBrowse: "ou cliquez pour parcourir",
    filesUpTo: "fichiers, jusqu'à",
    multipleSupported: "(fichiers multiples pris en charge)",
    fileExceed: "Fichier(s) dépassant la limite de taille:",
    invalidFileType: "Format de fichier invalide. Veuillez télécharger un fichier PDF valide."
},
  toolCard: {
    new: "Nouveau",
    pro: "Pro"
},
  pdfToImage: {
    title: "PDF en Image",
    description: "Convertissez des pages PDF en images JPG ou PNG. Choisissez qualité et résolution.",
    formatLabel: "Format de sortie",
    qualityLabel: "Qualité JPEG",
    scaleLabel: "Résolution",
    pngOption: "PNG (Sans perte)",
    jpgOption: "JPG (Plus léger)",
    convertBtn: "Convertir en images",
    preview: "images générées",
    pageLabel: "Page",
    downloadPage: "Télécharger",
    downloadAll: "Tout télécharger",
    noFile: "Sélectionnez un fichier PDF ci-dessus pour convertir ses pages en images.",
    renderingPages: "Rendu des pages PDF..."
},
  footer: {
    product: "Produit",
    popularTools: "Outils populaires",
    convert: "Convertir",
    company: "Société",
    privacy: "Confidentialité",
    privacyLine: "Tout le traitement PDF se fait entièrement dans votre navigateur. Vos fichiers ne sont jamais téléchargés sur un serveur.",
    home: "Accueil",
    allTools: "Tous les outils",
    pricing: "Tarifs",
    about: "À propos",
    terms: "Conditions",
    contact: "Contact",
    alsoTry: "Essayez aussi：",
    imageTools: "🖼️ Outils d'image",
    unitConverter: "🔄 Convertisseur d'unités",
    copyright: "Tout le traitement PDF se fait entièrement dans votre navigateur. Vos fichiers ne sont jamais téléchargés sur un serveur. 100% Confidentialité."
},
pages: {
  pricing: {
    title: "Tarifs",
    subtitle: "Simple et transparent — tous les outils PDF sont 100% gratuits.",
    freeTier: "Gratuit",
    freeDesc: "Accédez à tous les outils PDF sans frais. Pas de frais cachés, pas d'abonnement, un traitement PDF puissant et gratuit directement dans votre navigateur.",
    freeFeature1: "Plus de 20 outils PDF inclus",
    freeFeature2: "Aucune inscription ni enregistrement requis",
    freeFeature3: "Aucune limite de taille de fichier",
    freeFeature4: "100% basé sur le navigateur — pas d'envoi, pas de serveurs",
    proTier: "Pro",
    proDesc: "Les fonctionnalités avancées pour utilisateurs exigeants ne font pas partie de la version gratuite du navigateur.",
    ocrNote: "L’OCR (reconnaissance optique de caractères) nécessite un traitement serveur et n’est pas inclus dans la version gratuite du navigateur.",
    faqQ1: "Pourquoi les outils sont-ils gratuits ?",
    faqA1: "Nous pensons que les outils PDF essentiels devraient être accessibles à tous. Notre approche basée sur le navigateur maintient les coûts bas puisque les fichiers ne quittent jamais votre appareil. Cela nous permet d'offrir tous les outils entièrement gratuitement, soutenus par une publicité minimale.",
    faqQ2: "Que se passe-t-il lorsque Pro sera lancé ?",
    faqA2: "Lorsque Pro sera lancé, tous les outils gratuits actuels resteront complètement gratuits. Pro ajoutera des fonctionnalités avancées comme la ROC, une qualité de conversion supérieure et un traitement par lots pour les utilisateurs qui en ont besoin. Aucune fonctionnalité existante ne sera placée derrière un paywall."
  },
  about: {
    title: "À propos de toolconv",
    subtitle: "Des outils PDF respectueux de la vie privée qui fonctionnent entièrement dans votre navigateur.",
    missionTitle: "Notre Mission",
    missionDesc: "toolconv a été créé avec une mission simple : fournir des outils PDF puissants et de qualité professionnelle qui respectent votre vie privée. Nous croyons que le traitement des fichiers devrait se faire sur votre appareil, pas sur le serveur de quelqu'un d'autre. Chaque outil que nous construisons fonctionne entièrement dans votre navigateur en utilisant JavaScript côté client — vos fichiers ne quittent jamais votre ordinateur.",
    value1Title: "🔒 100% Privé",
    value1Desc: "Vos fichiers sont traités localement dans votre navigateur. Ils ne sont jamais téléchargés, stockés ou partagés. Aucun accès serveur à vos données.",
    value2Title: "🖥️ Basé sur le Navigateur",
    value2Desc: "Pas de téléchargements, pas d'installations. Tout fonctionne directement dans votre navigateur moderne. Propulsé par WebAssembly et JavaScript côté client.",
    value3Title: "💰 Complètement Gratuit",
    value3Desc: "Tous les outils sont gratuits, sans limites, sans inscription et sans frais cachés. Nous croyons en la mise à disposition d'outils PDF accessibles à tous.",
    value4Title: "🌍 Fonctionne Hors Ligne",
    value4Desc: "Une fois chargés, de nombreux outils peuvent fonctionner sans connexion internet. Parfait pour les voyageurs, les travailleurs à distance et toute personne soucieuse de la confidentialité des données.",
    storyTitle: "Notre Histoire",
    storyDesc: "toolconv a commencé avec une simple observation : la plupart des outils PDF en ligne 'gratuits' téléchargent en réalité vos fichiers sur leurs serveurs, les traitent à distance et souvent vendent vos données ou verrouillent des fonctionnalités derrière des abonnements coûteux. Nous voulions construire une meilleure alternative — une où tout le traitement se fait côté client, où la confidentialité est intégrée à l'architecture et où des outils PDF puissants restent gratuits pour tous. Aujourd'hui, toolconv sert des utilisateurs dans le monde entier avec plus de 20 outils PDF basés sur le navigateur, tous 100% gratuits et respectueux de la vie privée."
  },
  privacy: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 1 juin 2026",
    intro: "Chez toolconv, votre vie privée est notre priorité absolue. Cette politique explique comment nous traitons vos données lorsque vous utilisez nos services.",
    s1Title: "1. Aucun Envoi de Données",
    s1Content: "Tout le traitement PDF se fait entièrement dans votre navigateur en utilisant JavaScript côté client. Vos fichiers ne sont jamais téléchargés sur nos serveurs — ils restent sur votre appareil du début à la fin. Nous n'avons aucun accès côté serveur à vos documents et nous ne stockons, traitons ni transmettons jamais vos fichiers au-delà de votre machine locale.",
    s2Title: "2. Pas de Cookies (Sauf Analytique)",
    s2Content: "Nous n'utilisons pas de cookies fonctionnels pour le fonctionnement du site principal. Les seuls cookies utilisés sur ce site proviennent de Google AdSense pour la personnalisation des annonces et les rapports. Ce sont des cookies tiers soumis à la politique de confidentialité de Google. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.",
    s3Title: "3. Analytique et Publicité",
    s3Content: "Ce site utilise Google AdSense, qui peut collecter et utiliser des données sur votre visite (telles que les pages vues et les interactions avec les annonces) pour diffuser des annonces pertinentes. Google AdSense utilise des cookies et des technologies similaires. Pour plus d'informations, veuillez consulter la politique de confidentialité de Google sur policies.google.com/privacy. Nous ne collectons ni ne stockons nous-mêmes aucune donnée d'analyse personnelle — pas de journaux serveur, pas de scripts de suivi au-delà d'AdSense, et aucune plateforme d'analyse comme Google Analytics.",
    s4Title: "4. Aucun Compte Requis",
    s4Content: "Nous n'exigeons pas de comptes utilisateur ni d'enregistrement. Il n'y a pas de processus d'inscription, de collecte d'emails ou de profils utilisateur. Cela signifie que nous ne collectons intrinsèquement aucune information personnelle identifiable vous concernant. Votre utilisation de nos outils est complètement anonyme.",
    s5Title: "5. Liens Tiers",
    s5Content: "Notre site peut contenir des liens vers des sites tiers (par exemple, des projets frères comme image.toolconv.com et unit.toolconv.com, ou des annonces Google AdSense). Nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous encourageons à consulter leurs politiques de confidentialité avant de les utiliser.",
    contact: "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à support@toolconv.com."
  },
  terms: {
    title: "Conditions d'Utilisation",
    lastUpdated: "Dernière mise à jour : 1 juin 2026",
    intro: "Bienvenue sur toolconv. En utilisant notre site web et nos outils, vous acceptez les conditions suivantes. Veuillez les lire attentivement.",
    s1Title: "1. Utilisation Gratuite",
    s1Content: "Tous les outils sur toolconv sont fournis gratuitement. Aucun paiement ni abonnement n'est requis. Nous nous réservons le droit d'introduire des fonctionnalités premium à l'avenir, mais tous les outils gratuits existants resteront gratuits.",
    s2Title: "2. Engagement de Confidentialité",
    s2Content: "Votre vie privée est fondamentale pour notre service. Tout le traitement des fichiers se fait localement dans votre navigateur. Nous n'avons pas accès à vos fichiers et nous ne les stockons, traitons ni transmettons pas. Pour plus de détails, consultez notre Politique de Confidentialité.",
    s3Title: "3. Utilisation Acceptable",
    s3Content: "Vous acceptez d'utiliser toolconv uniquement à des fins légales et conformément à ces conditions. Vous ne pouvez pas utiliser nos outils pour traiter du contenu illégal, enfreindre la propriété intellectuelle d'autrui ou tenter de perturber notre service.",
    s4Title: "4. Aucune Garantie",
    s4Content: "toolconv est fourni 'en l'état' sans aucune garantie, expresse ou implicite. Bien que nous nous efforcions d'être précis et fiables, nous ne garantissons pas que les outils seront exempts d'erreurs ou ininterrompus. La qualité de sortie peut varier selon les fichiers d'entrée. Utilisez à votre propre discrétion.",
    s5Title: "5. Limitation de Responsabilité",
    s5Content: "toolconv et ses opérateurs ne sauraient être tenus responsables des dommages résultant de l'utilisation ou de l'incapacité d'utiliser nos outils, y compris mais sans s'y limiter, la perte de données, l'interruption d'activité ou tout dommage indirect. Notre entière responsabilité est limitée à la mesure maximale permise par la loi applicable.",
    s6Title: "6. Contact",
    s6Content: "Pour toute question sur ces conditions, veuillez contacter support@toolconv.com. Nous serons ravis de clarifier vos préoccupations."
  },
  contact: {
    title: "Contactez-Nous",
    subtitle: "Nous serions ravis de vous entendre. Contactez-nous pour toute question, suggestion ou commentaire.",
    emailTitle: "📧 Support par Email",
    emailDesc: "Pour les questions, les rapports de bogues ou les demandes générales :",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 Demandes de Fonctionnalités",
    featureDesc: "Vous avez une idée pour un nouvel outil ou une amélioration ? Nous sommes tout ouïs ! Envoyez-nous vos suggestions et nous les considérerons pour les futures mises à jour.",
    responseTitle: "⏱️ Délai de Réponse",
    responseDesc: "Nous répondons généralement dans les 24 heures ouvrées. Nous apprécions votre temps et vous répondrons aussi rapidement que possible."
  }
}
};
export default dict;
