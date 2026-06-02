import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Herramientas PDF gratuitas en línea",
    description: "Herramientas PDF en línea gratuitas que se ejecutan completamente en su navegador. Combine, divida, comprima, convierta y edite PDF — sin carga, sin registro, 100% privado."
},
  header: {
    mergePdf: "Combinar PDF",
    splitPdf: "Dividir PDF",
    compressPdf: "Comprimir PDF",
    convert: "Convertir",
    allTools: "Todas las herramientas"
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
    badgeOffline: "Funciona sin conexión"
},
  tools: {
    heading: "Todas las herramientas PDF",
    countLabel: (n) => `${n} herramienta${n !== 1 ? "s" : ""} disponible${n !== 1 ? "s" : ""} — elige una para empezar`
},
  toolItems: {
    "merge-pdf": {
      title: "Combinar PDF",
      description: "Combina PDF en el orden que quieras con el fusionador de PDF más fácil.",
      longDescription: "Fusiona múltiples archivos PDF en un solo documento. Simplemente sube tus PDF, ordénalos en el orden deseado y descarga el resultado combinado. Todo el procesamiento ocurre localmente en tu navegador."
},
    "split-pdf": {
      title: "Dividir PDF",
      description: "Separa una página o un conjunto completo para convertirlos fácilmente en archivos PDF independientes.",
      longDescription: "Divide un documento PDF en páginas individuales o extrae rangos de páginas específicos. Elige dividir por página, por rango o extraer cada página como un archivo separado. 100% basado en navegador."
},
    "organize-pdf": {
      title: "Organizar PDF",
      description: "Ordena, elimina o agrega páginas a tu PDF. Arrastra y suelta para reordenar.",
      longDescription: "Reorganiza las páginas de tu PDF como quieras. Elimina páginas no deseadas, agrega nuevas páginas o reordena las existentes con una interfaz simple de arrastrar y soltar. Todo el procesamiento ocurre localmente."
},
    "compress-pdf": {
      title: "Comprimir PDF",
      description: "Reduce el tamaño del archivo mientras optimizas la calidad del PDF.",
      longDescription: "Comprime tu PDF para reducir el tamaño del archivo sin pérdida significativa de calidad. Ideal para archivos adjuntos de correo electrónico y cargas web. Elige tu nivel de compresión. El procesamiento se realiza completamente en tu navegador."
},
    "pdf-to-word": {
      title: "PDF a Word",
      description: "Convierte fácilmente tus archivos PDF en documentos DOC y DOCX editables.",
      longDescription: "Extrae el contenido de texto del PDF y guárdalo como archivo Word (DOCX). ⚠️ Nota: Esta herramienta solo extrae texto y NO conserva el formato original, las imágenes ni la disposición de las tablas. Ideal para extraer contenido textual para su posterior edición."
},
    "pdf-to-jpg": {
      title: "PDF a JPG",
      description: "Convierte cada página PDF en un JPG o extrae todas las imágenes contenidas en un PDF.",
      longDescription: "Convierte páginas PDF a imágenes JPG de alta calidad. Elige tu resolución y nivel de calidad deseado. Perfecto para compartir contenido PDF en redes sociales o incrustar en presentaciones. 100% basado en navegador."
},
    "jpg-to-pdf": {
      title: "JPG a PDF",
      description: "Convierte imágenes JPG a PDF en segundos. Ajusta fácilmente la orientación y los márgenes.",
      longDescription: "Convierte una o múltiples imágenes JPG/JPEG en un documento PDF. Organiza las imágenes en orden, elige el tamaño de página y la orientación. Todo el procesamiento ocurre localmente en tu navegador."
},
    "pdf-to-png": {
      title: "PDF a PNG",
      description: "Convierte páginas PDF a imágenes PNG de alta calidad sin pérdida.",
      longDescription: "Extrae páginas PDF como imágenes PNG sin pérdida con soporte de transparencia. Ideal para gráficos, capturas de pantalla y contenido que requiere reproducción perfecta de píxeles. Completamente basado en navegador."
},
    "pdf-to-image": {
      title: "PDF a Imagen",
      description: "Convierte páginas PDF a imágenes JPG o PNG. Elige calidad y resolución.",
      longDescription: "Convierte cada página de tu PDF a imágenes de alta calidad. Elige entre JPG (calidad ajustable para archivos más pequeños) o PNG (sin pérdida, perfecto para gráficos). Ajusta la resolución para obtener resultados nítidos. Todo localmente en tu navegador."
},
    "pdf-to-text": {
      title: "PDF a Texto",
      description: "Extrae el contenido de texto de documentos PDF.",
      longDescription: "Extrae el contenido de texto de tus archivos PDF. Ideal para reutilizar contenido, extraer datos o hacer que los PDF sean buscables. Funciona localmente en tu navegador."
},
    "word-to-pdf": {
      title: "Word a PDF",
      description: "Haz que los archivos DOC y DOCX sean fáciles de leer convirtiéndolos a PDF.",
      longDescription: "Convierte documentos de Microsoft Word (DOCX) a formato PDF para compartir e imprimir fácilmente. Conserva el formato, las imágenes y el diseño."
},
    "excel-to-pdf": {
      title: "Excel a PDF",
      description: "Haz que las hojas de cálculo de Excel sean fáciles de leer convirtiéndolas a PDF.",
      longDescription: "Convierte hojas de cálculo de Microsoft Excel (XLSX) a PDF. Conserva el formato de tabla, los gráficos y el diseño de datos para compartir de forma profesional."
},
    "edit-pdf": {
      title: "Editar PDF",
      description: "Agrega texto, imágenes, formas o anotaciones a un documento PDF.",
      longDescription: "Agrega texto, imágenes, formas y anotaciones a tu PDF. Cambia el tamaño de fuente, color y posición del contenido agregado. Nota: editar texto PDF existente requiere procesamiento del lado del servidor."
},
    "watermark-pdf": {
      title: "Agregar marca de agua",
      description: "Sella texto o imágenes sobre tu PDF en segundos. Elige tipografía, transparencia y posición.",
      longDescription: "Agrega marcas de agua de texto o imagen personalizadas a tus documentos PDF. Controla opacidad, rotación, posición y repetición. Perfecto para branding, protección de derechos de autor o marcado de estado de documentos. 100% lado del cliente."
},
    "rotate-pdf": {
      title: "Rotar PDF",
      description: "Rota tus páginas PDF como las necesites. ¡Incluso puedes rotar múltiples PDF a la vez!",
      longDescription: "Rota páginas individuales o documentos PDF completos. Elige rotación de 90°, 180° o 270°. Todo el procesamiento ocurre instantáneamente en tu navegador."
},
    "page-numbers": {
      title: "Agregar números de página",
      description: "Agrega números de página a PDF fácilmente. Elige posición, dimensiones y tipografía.",
      longDescription: "Agrega números de página personalizables a tus documentos PDF. Selecciona posición (superior/inferior, izquierda/centro/derecha), número inicial, tamaño de fuente y estilo. Todo procesamiento basado en navegador."
},
    "crop-pdf": {
      title: "Recortar PDF",
      description: "Recorta márgenes de documentos PDF o selecciona áreas específicas.",
      longDescription: "Recorta tus páginas PDF — elimina márgenes no deseados, recorta espacios en blanco o selecciona regiones específicas. Aplica el mismo recorte a todas las páginas o personaliza por página."
},
    "protect-pdf": {
      title: "Proteger PDF",
      description: "Protege archivos PDF con una contraseña. Cifra documentos PDF para evitar acceso no autorizado.",
      longDescription: "Agrega protección con contraseña a tus archivos PDF usando cifrado AES. Establece contraseña de usuario (para abrir) y contraseña de propietario (para permisos). Controla los permisos de impresión, copia y modificación. Todo el cifrado ocurre localmente."
},
    "unlock-pdf": {
      title: "Desbloquear PDF",
      description: "Elimina la seguridad de contraseña del PDF, dándote la libertad de usar tus PDF como quieras.",
      longDescription: "Elimina la protección con contraseña de tus archivos PDF (debes conocer la contraseña). Desbloquea tu PDF para editar, imprimir o copiar. El procesamiento es completamente del lado del cliente."
},
    "html-to-pdf": {
      title: "HTML a PDF",
      description: "Convierte páginas web HTML a PDF. Simplemente pega una URL y conviértela a PDF con un clic.",
      longDescription: "Convierte páginas web HTML a documentos PDF. Simplemente pega una URL o ingresa código HTML directamente. Perfecto para guardar artículos web, recibos o documentación como PDF."
},
    "markdown-to-pdf": {
      title: "Markdown a PDF",
      description: "Convierte archivos Markdown a documentos PDF bellamente formateados.",
      longDescription: "Convierte tus documentos Markdown a archivos PDF bien formateados. Soporta encabezados, bloques de código, tablas e imágenes. Perfecto para documentación, archivos README y escritura técnica. 100% basado en navegador."
},
    "heic-to-pdf": {
      title: "HEIC a PDF",
      description: "Convierte fotos HEIC de iPhone a PDF en segundos. Sin necesidad de carga.",
      longDescription: "Convierte fotos de iPhone y iPad (formato HEIC/HEIF) a PDF. Perfecto para compartir fotos como documentos. Todo el procesamiento ocurre en tu navegador."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "Convierte PDFs escaneados en documentos buscables y seleccionables.",
      longDescription: "Extrae texto de PDFs e imágenes escaneados usando OCR (Reconocimiento Óptico de Caracteres). Haz que los documentos escaneados sean buscables y copiables. El OCR en inglés funciona localmente; idiomas adicionales disponibles."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "Firmar PDF",
      description: "Añade firmas manuscritas o escritas a tus documentos PDF.",
      longDescription: "Dibuja, escribe o sube tu firma y colócala en cualquier página de tu PDF. Admite dibujo con ratón/táctil, escritura con selección de fuente o subida de imagen de firma. Posiciona, redimensiona y descarga el PDF firmado — todo en tu navegador."
},
    "pdf-to-ppt": {
      title: "PDF a PPT",
      description: "Convierte tus archivos PDF a presentaciones de PowerPoint editables.",
      longDescription: "Convierte documentos PDF a formato PowerPoint (PPTX) para editar y presentar fácilmente. Esta conversión requiere procesamiento del lado del servidor y estará disponible en una futura actualización."
},
    "pdf-to-excel": {
      title: "PDF a Excel",
      description: "Extrae datos de tablas PDF y conviértelos a hojas de cálculo de Excel.",
      longDescription: "Convierte tablas y datos de PDF a hojas de cálculo Excel (XLSX). Esta conversión requiere procesamiento del lado del servidor y estará disponible en una futura actualización."
}
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
    relatedTools: "Herramientas relacionadas"
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
    largeFileWarning: "Archivo grande — el procesamiento puede tardar más",
    // Edit PDF workspace
    reset: "Restablecer",
    loadingPages: "Cargando páginas del PDF...",
    textMode: "✏️ Texto",
    selectMode: "👆 Seleccionar",
    enterTextPlaceholder: "Introduce el texto a añadir...",
    textModeTip: "Haz clic en cualquier lugar de la página para colocar tu texto. Cambia al modo Seleccionar para eliminar anotaciones.",
    selectModeTip: "Haz clic en una anotación para eliminarla. Cambia al modo Texto para añadir más texto.",
    addTextFirst: "Añade primero anotaciones de texto",
    annotationsCount: (n) => `Anotaciones (${n} total)`,
    clearPage: "Borrar página",
    selectAllAnnotations: "Seleccionar todo",
    undo: "↩ Deshacer",
    redo: "↪ Rehacer",
    fontSizeLabel: "Tamaño de fuente",
    fontSmall: "Pequeño",
    fontMedium: "Mediano",
    fontLarge: "Grande",
    applyEdits: (n) => `Aplicar edits y descargar (${n} anotación${n !== 1 ? "es" : ""})`,
    applyingEdits: "Aplicando edits...",
    page: "Página",
    prev: "◀ Anterior",
    next: "Siguiente ▶",
    failedToLoad: "Error al cargar el PDF",
    processingFailed: "Error de procesamiento",
    noUploadEdit: "Sin carga — toda la edición ocurre localmente",
    // Crop PDF workspace
    fullPage: "Página completa",
    autoMargin: "Margen automático",
    cropRegion: "Región de recorte",
    dragToResize: "— arrastra las esquinas para cambiar el tamaño, arrastra el centro para mover",
    cropAllPages: (n) => `Aplicar recorte a las ${n} páginas`,
    cropSinglePage: "Recortar página actual",
    croppingPages: "Recortando páginas...",
    noUploadCrop: "Sin carga — todo el recorte ocurre localmente",
    presetA4: "A4",
    presetLetter: "Carta",
    presetSquare: "Cuadrado",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "Cambia de pestaña para previsualizar cada página.",
    applyToAllPages: "Aplicar a todas las páginas",
    cropX: "X",
    cropY: "Y",
    cropWidth: "Ancho",
    cropHeight: "Alto",
    // Sign PDF workspace
    signDrawTab: "Dibujar",
    signTypeTab: "Escribir",
    signUploadTab: "Subir",
    signClearSignature: "Borrar firma",
    signPlaceOnPage: "Haz clic en el PDF para colocar tu firma. Arrastra para reposicionar.",
    signSignAndDownload: "Firmar y descargar",
    signFontSelector: "Estilo de firma",
    signDrawHint: "Dibuja tu firma abajo usando el ratón o táctil",
    signTypeHint: "Escribe tu firma abajo",
    // Organize PDF workspace
    pagesCount: (n) => `${n} página${n !== 1 ? "s" : ""}`,
    dragReorderClickDelete: "— arrastra para reordenar, haz clic para eliminar",
    removePage: "Eliminar página",
    saveNewOrder: (n) => `Guardar nuevo orden (${n} páginas)`,
    reorganizingPages: "Reorganizando páginas...",
    noUploadOrganize: "Sin carga — arrastra y suelta páginas en tu navegador",
    // Rotate PDF workspace
    rotateAngle: "Ángulo de rotación",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "Texto de marca de agua",
    watermarkOpacity: "Opacidad",
    watermarkSize: "Tamaño de fuente",
    watermarkFontFamily: "Familia de fuente",
    watermarkRotation: "Rotación (°)",
    watermarkPosition: "Posición",
    watermarkColor: "Color",
    fontSerif: "Serif",
    fontSansSerif: "Sans-Serif",
    fontMonospace: "Monospace",
    positionCenter: "Centro",
    positionTopLeft: "Superior izquierda",
    positionTopRight: "Superior derecha",
    positionBottomLeft: "Inferior izquierda",
    positionBottomRight: "Inferior derecha",
    positionTile: "Mosaico / Repetir",
    // Protect/Unlock PDF workspace
    enterPassword: "Introducir contraseña",
    confirmPassword: "Confirmar contraseña",
    passwordMismatch: "Las contraseñas no coinciden",
    showPassword: "Mostrar",
    hidePassword: "Ocultar",
    protectPdf: "Proteger PDF",
    unlockPdf: "Desbloquear",
    incorrectPassword: "Contraseña incorrecta",
    // Compress PDF workspace
    compressLevels: {
      label: "Nivel de compresión",
      light: "Ligero",
      standard: "Estándar",
      maximum: "Máximo",
    },
    // Split PDF workspace
    splitMode: "Modo de división",
    splitEveryPage: "Dividir cada página",
    splitByRange: "Dividir por rango",
    extractPages: "Extraer páginas",
    splitEveryN: "Dividir cada N páginas",
    rangePlaceholder: "ej.: 1-3,4-6,7-10",
    pagesPlaceholder: "ej.: 1,3,5,7",
    nPlaceholder: "ej.: 2",
    invalidRange: "Formato de rango no válido",
    // Merge PDF workspace
    mergeOrder: "Orden de fusión",
    dragToReorder: "Arrastra para reordenar la secuencia de fusión",
    mergeAndDownload: "Fusionar y descargar",
    mergingFiles: "Fusionando archivos...",
    addMore: "Añadir más archivos",
    removeFile: "Eliminar archivo",
    needAtLeastTwo: "Añade al menos 2 archivos PDF para fusionar",
    files: "archivos",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "Guías y Tutoriales",
    description: "Tutoriales paso a paso y guías para procesamiento de imágenes y PDF. Aprende consejos, trucos y mejores prácticas.",
    browseGuides: "Explorar Guías",
    readGuide: "Leer Guía →",
    backToGuides: "← Volver a Guías",
    breadcrumbGuides: "Guías",
  },
  convert: {
    converter: "Convertidor",
    free: "Gratuito en línea",
    noUpload: "sin carga requerida — todo el procesamiento ocurre en tu navegador",
    subtitle: (from, to) => `Convierta archivos ${from} (${from.toUpperCase()}) a formato ${to} (${to.toUpperCase()}) en línea, gratis y`,
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
    relatedConversions: "Conversiones relacionadas"
},
  category: {
    all: "Todas",
    organize: "Organizar PDF",
    optimize: "Optimizar PDF",
    convert: "Convertir PDF",
    edit: "Editar PDF",
    security: "Seguridad PDF",
    intelligence: "Inteligencia PDF",
    workflow: "Flujos de trabajo"
},
  dropzone: {
    dropHere: "Suelta los archivos aquí",
    dragDropHere: "Arrastra y suelta los archivos aquí",
    orClickBrowse: "o haz clic para explorar",
    filesUpTo: "archivos, hasta",
    multipleSupported: "(múltiples archivos compatibles)",
    fileExceed: "Los archivos superan el límite de tamaño:",
    invalidFileType: "Formato de archivo no válido. Suba un archivo PDF válido."
},
  toolCard: {
    new: "Nuevo",
    pro: "Pro"
},
  pdfToImage: {
    title: "PDF a Imagen",
    description: "Convierte páginas PDF en imágenes JPG o PNG. Elige calidad y resolución.",
    formatLabel: "Formato de salida",
    qualityLabel: "Calidad JPEG",
    scaleLabel: "Resolución",
    pngOption: "PNG (Sin pérdida)",
    jpgOption: "JPG (Más pequeño)",
    convertBtn: "Convertir a imágenes",
    preview: "imágenes generadas",
    pageLabel: "Página",
    downloadPage: "Descargar",
    downloadAll: "Descargar todo",
    noFile: "Selecciona un archivo PDF arriba para convertir sus páginas a imágenes.",
    renderingPages: "Renderizando páginas PDF..."
},
  footer: {
    product: "Producto",
    popularTools: "Herramientas populares",
    convert: "Convertir",
    company: "Empresa",
    privacy: "Privacidad",
    privacyLine: "Todo el procesamiento de PDF ocurre completamente en tu navegador. Tus archivos nunca se suben a ningún servidor.",
    home: "Inicio",
    allTools: "Todas las herramientas",
    pricing: "Precios",
    about: "Acerca de",
    terms: "Términos",
    contact: "Contacto",
    alsoTry: "También prueba：",
    imageTools: "🖼️ Herramientas de imagen",
    unitConverter: "🔄 Conversor de unidades",
    copyright: "Todo el procesamiento de PDF ocurre completamente en tu navegador. Tus archivos nunca se suben a ningún servidor. 100% Privacidad."
},
pages: {
  pricing: {
    title: "Precios",
    subtitle: "Simple y transparente — todas las herramientas PDF son 100% gratuitas.",
    freeTier: "Gratuito",
    freeDesc: "Accede a todas las herramientas PDF sin costo. Sin tarifas ocultas, sin suscripciones, solo procesamiento PDF potente y gratuito directamente en tu navegador.",
    freeFeature1: "Más de 20 herramientas PDF incluidas",
    freeFeature2: "Sin registro ni suscripción requeridos",
    freeFeature3: "Sin límites de tamaño de archivo",
    freeFeature4: "100% basado en navegador — sin subidas, sin servidores",
    proTier: "Pro (Próximamente)",
    proDesc: "Funciones avanzadas para usuarios que necesitan más. ¡Estén atentos!",
    ocrNote: "OCR (Reconocimiento Óptico de Caracteres) estará disponible como función Pro. Convierte PDF escaneados en texto buscable con precisión de nivel profesional.",
    faqQ1: "¿Por qué las herramientas son gratuitas?",
    faqA1: "Creemos que las herramientas PDF esenciales deberían ser accesibles para todos. Nuestro enfoque basado en navegador mantiene los costos bajos ya que los archivos nunca salen de tu dispositivo. Esto nos permite ofrecer todas las herramientas completamente gratis, respaldadas por publicidad mínima.",
    faqQ2: "¿Qué sucede cuando se lance Pro?",
    faqA2: "Cuando se lance Pro, todas las herramientas gratuitas actuales seguirán siendo completamente gratuitas. Pro agregará funciones avanzadas como OCR, mayor calidad de conversión y procesamiento por lotes para usuarios que las necesiten. Ninguna funcionalidad existente se moverá detrás de un muro de pago."
  },
  about: {
    title: "Acerca de toolconv",
    subtitle: "Herramientas PDF centradas en la privacidad que funcionan completamente en tu navegador.",
    missionTitle: "Nuestra Misión",
    missionDesc: "toolconv fue creado con una misión simple: proporcionar herramientas PDF potentes y de calidad profesional que respeten tu privacidad. Creemos que el procesamiento de archivos debe ocurrir en tu dispositivo, no en el servidor de otra persona. Cada herramienta que construimos funciona completamente en tu navegador usando JavaScript del lado del cliente — tus archivos nunca salen de tu computadora.",
    value1Title: "🔒 100% Privado",
    value1Desc: "Tus archivos se procesan localmente en tu navegador. Nunca se suben, almacenan ni comparten. Acceso cero del servidor a tus datos.",
    value2Title: "🖥️ Basado en Navegador",
    value2Desc: "Sin descargas, sin instalaciones. Todo funciona directamente en tu navegador moderno. Impulsado por WebAssembly y JavaScript del lado del cliente.",
    value3Title: "💰 Completamente Gratuito",
    value3Desc: "Todas las herramientas son de uso gratuito sin límites, registros ni costos ocultos. Creemos en hacer accesibles las herramientas PDF para todos.",
    value4Title: "🌍 Funciona Sin Conexión",
    value4Desc: "Una vez cargadas, muchas herramientas pueden funcionar sin conexión a internet. Perfecto para viajeros, trabajadores remotos y cualquier persona preocupada por la privacidad de datos.",
    storyTitle: "Nuestra Historia",
    storyDesc: "toolconv comenzó con una simple observación: la mayoría de las herramientas PDF en línea 'gratuitas' en realidad suben tus archivos a sus servidores, los procesan de forma remota y a menudo venden tus datos o bloquean funciones detrás de costosas suscripciones. Queríamos construir una mejor alternativa — una donde todo el procesamiento ocurra del lado del cliente, donde la privacidad esté integrada en la arquitectura y donde las herramientas PDF potentes sigan siendo gratuitas para todos. Hoy, toolconv sirve a usuarios de todo el mundo con más de 20 herramientas PDF basadas en navegador, todas 100% gratuitas y centradas en la privacidad."
  },
  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 1 de junio de 2026",
    intro: "En toolconv, tu privacidad es nuestra máxima prioridad. Esta política explica cómo manejamos tus datos cuando utilizas nuestros servicios.",
    s1Title: "1. Sin Subida de Datos",
    s1Content: "Todo el procesamiento de PDF ocurre completamente en tu navegador usando JavaScript del lado del cliente. Tus archivos nunca se suben a nuestros servidores — permanecen en tu dispositivo de principio a fin. No tenemos acceso del lado del servidor a tus documentos y nunca almacenamos, procesamos ni transmitimos tus archivos más allá de tu máquina local.",
    s2Title: "2. Sin Cookies (Excepto Análisis)",
    s2Content: "No utilizamos cookies funcionales para la operación del sitio principal. Las únicas cookies utilizadas en este sitio son de Google AdSense para personalización de anuncios e informes. Estas son cookies de terceros sujetas a la Política de Privacidad de Google. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.",
    s3Title: "3. Análisis y Publicidad",
    s3Content: "Este sitio utiliza Google AdSense, que puede recopilar y usar datos sobre tu visita (como páginas vistas e interacciones con anuncios) para mostrar anuncios relevantes. Google AdSense utiliza cookies y tecnologías similares. Para más información, revisa la Política de Privacidad de Google en policies.google.com/privacy. Nosotros no recopilamos ni almacenamos datos de análisis personales — no hay registros de servidor, scripts de seguimiento más allá de AdSense, ni plataformas de análisis como Google Analytics.",
    s4Title: "4. Sin Cuenta Requerida",
    s4Content: "No requerimos cuentas de usuario ni registro. No hay proceso de registro, recopilación de correos electrónicos ni perfiles de usuario. Esto significa que inherentemente no recopilamos información de identificación personal sobre ti. Tu uso de nuestras herramientas es completamente anónimo.",
    s5Title: "5. Enlaces de Terceros",
    s5Content: "Nuestro sitio puede contener enlaces a sitios de terceros (por ejemplo, proyectos hermanos como image.toolconv.com y unit.toolconv.com, o anuncios de Google AdSense). No somos responsables de las prácticas de privacidad de estos sitios externos. Te recomendamos revisar sus políticas de privacidad antes de interactuar con ellos.",
    contact: "Si tienes alguna pregunta sobre esta política de privacidad, contáctanos en support@toolconv.com."
  },
  terms: {
    title: "Términos del Servicio",
    lastUpdated: "Última actualización: 1 de junio de 2026",
    intro: "Bienvenido a toolconv. Al usar nuestro sitio web y herramientas, aceptas los siguientes términos. Por favor, léelos atentamente.",
    s1Title: "1. Uso Gratuito",
    s1Content: "Todas las herramientas en toolconv se proporcionan de forma gratuita. No se requiere pago ni suscripción. Nos reservamos el derecho de introducir funciones premium en el futuro, pero todas las herramientas gratuitas existentes seguirán siendo gratuitas.",
    s2Title: "2. Compromiso de Privacidad",
    s2Content: "Tu privacidad es fundamental para nuestro servicio. Todo el procesamiento de archivos ocurre localmente en tu navegador. No tenemos acceso a tus archivos y no los almacenamos, procesamos ni transmitimos. Para más detalles, consulta nuestra Política de Privacidad.",
    s3Title: "3. Uso Aceptable",
    s3Content: "Aceptas usar toolconv solo para fines legales y de acuerdo con estos términos. No puedes usar nuestras herramientas para procesar contenido ilegal, infringir la propiedad intelectual de otros o intentar interrumpir nuestro servicio.",
    s4Title: "4. Sin Garantía",
    s4Content: "toolconv se proporciona 'tal cual' sin garantía alguna, expresa o implícita. Si bien nos esforzamos por la precisión y confiabilidad, no garantizamos que las herramientas estén libres de errores o sean ininterrumpidas. La calidad de salida puede variar según los archivos de entrada. Úsalo bajo tu propio criterio.",
    s5Title: "5. Limitación de Responsabilidad",
    s5Content: "toolconv y sus operadores no serán responsables por daños derivados del uso o la imposibilidad de usar nuestras herramientas, incluidos, entre otros, pérdida de datos, interrupción del negocio o cualquier daño indirecto. Nuestra responsabilidad total se limita a la extensión máxima permitida por la ley aplicable.",
    s6Title: "6. Contacto",
    s6Content: "Para preguntas sobre estos términos, comunícate con support@toolconv.com. Estaremos encantados de aclarar cualquier duda."
  },
  contact: {
    title: "Contáctanos",
    subtitle: "Nos encantaría saber de ti. Ponte en contacto con cualquier pregunta, sugerencia o comentario.",
    emailTitle: "📧 Soporte por Correo Electrónico",
    emailDesc: "Para preguntas, informes de errores o consultas generales:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 Solicitudes de Funciones",
    featureDesc: "¿Tienes una idea para una nueva herramienta o mejora? ¡Somos todo oídos! Envíanos tus sugerencias y las consideraremos para futuras actualizaciones.",
    responseTitle: "⏱️ Tiempo de Respuesta",
    responseDesc: "Generalmente respondemos dentro de las 24 horas en días hábiles. Valoramos tu tiempo y te responderemos lo más rápido posible."
  }
}
};
export default dict;