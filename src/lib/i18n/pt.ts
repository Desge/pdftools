import type { LangDict } from "./types";

const dict: LangDict = {
  site: {
    name: "toolconv",
    tagline: "Ferramentas PDF gratuitas online",
    description: "Ferramentas PDF online gratuitas que funcionam inteiramente no seu navegador. Mescle, divida, comprima, converta e edite PDFs — sem upload, sem cadastro, 100% privado."
},
  header: {
    mergePdf: "Mesclar PDF",
    splitPdf: "Dividir PDF",
    compressPdf: "Comprimir PDF",
    convert: "Converter",
    allTools: "Todas as ferramentas"
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
    badgeOffline: "Funciona offline"
},
  tools: {
    heading: "Todas as ferramentas PDF",
    countLabel: (n) => `${n} ferramenta${n !== 1 ? "s" : ""} disponíve${n !== 1 ? "is" : "l"} — escolha uma para começar`
},
  toolItems: {
    "merge-pdf": {
      title: "Mesclar PDF",
      description: "Combine PDFs na ordem que desejar com o mais fácil mesclador de PDF disponível.",
      longDescription: "Mescle vários arquivos PDF em um único documento. Basta enviar seus PDFs, organizá-los na ordem desejada e baixar o resultado mesclado. Todo o processamento acontece localmente em seu navegador."
},
    "split-pdf": {
      title: "Dividir PDF",
      description: "Separe uma página ou um conjunto inteiro para fácil conversão em arquivos PDF independentes.",
      longDescription: "Divida um documento PDF em páginas individuais ou extraia intervalos de páginas específicos. Escolha dividir por página, por intervalo ou extrair cada página como um arquivo separado. 100% baseado em navegador."
},
    "organize-pdf": {
      title: "Organizar PDF",
      description: "Classifique, exclua ou adicione páginas ao seu PDF. Arraste e solte para reordenar.",
      longDescription: "Reorganize as páginas do seu PDF como desejar. Exclua páginas indesejadas, adicione novas páginas ou reordene as existentes com uma interface simples de arrastar e soltar. Todo o processamento acontece localmente."
},
    "compress-pdf": {
      title: "Comprimir PDF",
      description: "Reduza o tamanho do arquivo enquanto otimiza a qualidade máxima do PDF.",
      longDescription: "Comprima seu PDF para reduzir o tamanho do arquivo sem perda significativa de qualidade. Ótimo para anexos de e-mail e uploads na web. Escolha seu nível de compressão. O processamento é feito inteiramente em seu navegador."
},
    "pdf-to-word": {
      title: "PDF para Word",
      description: "Converta facilmente seus arquivos PDF em documentos DOC e DOCX editáveis.",
      longDescription: "Extraia o conteúdo de texto do PDF e salve como arquivo Word (DOCX). ⚠️ Aviso: Esta ferramenta realiza extração apenas de texto e NÃO preserva formatação original, imagens ou layout de tabelas. Ideal para extrair conteúdo textual para edição posterior."
},
    "pdf-to-jpg": {
      title: "PDF para JPG",
      description: "Converta cada página PDF em um JPG ou extraia todas as imagens contidas em um PDF.",
      longDescription: "Converta páginas PDF em imagens JPG de alta qualidade. Escolha sua resolução e nível de qualidade desejados. Perfeito para compartilhar conteúdo PDF em mídias sociais ou incorporar em apresentações. 100% baseado em navegador."
},
    "jpg-to-pdf": {
      title: "JPG para PDF",
      description: "Converta imagens JPG em PDF em segundos. Ajuste facilmente a orientação e as margens.",
      longDescription: "Converta uma ou várias imagens JPG/JPEG em um documento PDF. Organize as imagens em ordem, escolha o tamanho e a orientação da página. Todo o processamento acontece localmente em seu navegador."
},
    "pdf-to-png": {
      title: "PDF para PNG",
      description: "Converta páginas PDF em imagens PNG de alta qualidade sem perdas.",
      longDescription: "Extraia páginas PDF como imagens PNG sem perdas com suporte a transparência. Ideal para gráficos, capturas de tela e conteúdo que requer reprodução perfeita de pixels. Totalmente baseado em navegador."
},
    "pdf-to-image": {
      title: "PDF para Imagem",
      description: "Converta páginas PDF em imagens JPG ou PNG. Escolha qualidade e resolução.",
      longDescription: "Converta cada página do seu PDF em imagens de alta qualidade. Escolha entre JPG (qualidade ajustável para arquivos menores) ou PNG (sem perdas, perfeito para gráficos). Ajuste a resolução para resultados nítidos. Tudo localmente em seu navegador."
},
    "pdf-to-text": {
      title: "PDF para Texto",
      description: "Extraia o conteúdo de texto de documentos PDF.",
      longDescription: "Extraia o conteúdo de texto dos seus arquivos PDF. Ótimo para reutilizar conteúdo, extrair dados ou tornar PDFs pesquisáveis. Funciona localmente em seu navegador."
},
    "word-to-pdf": {
      title: "Word para PDF",
      description: "Torne arquivos DOC e DOCX fáceis de ler convertendo-os para PDF.",
      longDescription: "Converta documentos do Microsoft Word (DOCX) para o formato PDF para fácil compartilhamento e impressão. Preserve formatação, imagens e layout."
},
    "excel-to-pdf": {
      title: "Excel para PDF",
      description: "Torne planilhas do Excel fáceis de ler convertendo-as para PDF.",
      longDescription: "Converta planilhas do Microsoft Excel (XLSX) para PDF. Preserve formatação de tabelas, gráficos e layout de dados para compartilhamento profissional."
},
    "edit-pdf": {
      title: "Editar PDF",
      description: "Adicione texto, imagens, formas ou anotações a um documento PDF.",
      longDescription: "Adicione texto, imagens, formas e anotações ao seu PDF. Altere o tamanho da fonte, cor e posição do conteúdo adicionado. Nota: editar texto PDF existente requer processamento no servidor."
},
    "watermark-pdf": {
      title: "Adicionar marca d'água",
      description: "Carimbe texto ou imagens em seu PDF em segundos. Escolha tipografia, transparência e posição.",
      longDescription: "Adicione marcas d'água de texto ou imagem personalizadas aos seus documentos PDF. Controle opacidade, rotação, posição e repetição. Perfeito para branding, proteção de direitos autorais ou marcação de status de documentos. 100% lado do cliente."
},
    "rotate-pdf": {
      title: "Rotacionar PDF",
      description: "Gire suas páginas PDF da maneira que precisar. Você pode até girar vários PDFs de uma vez!",
      longDescription: "Gire páginas individuais ou documentos PDF inteiros. Escolha rotação de 90°, 180° ou 270°. Todo o processamento acontece instantaneamente em seu navegador."
},
    "page-numbers": {
      title: "Adicionar números de página",
      description: "Adicione números de página em PDFs com facilidade. Escolha posição, dimensões e tipografia.",
      longDescription: "Adicione números de página personalizáveis aos seus documentos PDF. Selecione posição (superior/inferior, esquerda/centro/direita), número inicial, tamanho e estilo da fonte. Todo processamento baseado em navegador."
},
    "crop-pdf": {
      title: "Cortar PDF",
      description: "Corte margens de documentos PDF ou selecione áreas específicas.",
      longDescription: "Corte suas páginas PDF — remova margens indesejadas, apare espaços em branco ou selecione regiões específicas. Aplique o mesmo corte a todas as páginas ou personalize por página."
},
    "protect-pdf": {
      title: "Proteger PDF",
      description: "Proteja arquivos PDF com uma senha. Criptografe documentos PDF para evitar acesso não autorizado.",
      longDescription: "Adicione proteção por senha aos seus arquivos PDF usando criptografia AES. Defina senha de usuário (para abrir) e senha de proprietário (para permissões). Controle permissões de impressão, cópia e modificação. Toda criptografia acontece localmente."
},
    "unlock-pdf": {
      title: "Desbloquear PDF",
      description: "Remova a segurança de senha do PDF, dando a você a liberdade de usar seus PDFs como quiser.",
      longDescription: "Remova a proteção por senha dos seus arquivos PDF (você deve saber a senha). Desbloqueie seu PDF para edição, impressão ou cópia. O processamento é inteiramente do lado do cliente."
},
    "html-to-pdf": {
      title: "HTML para PDF",
      description: "Converta páginas da web em HTML para PDF. Basta colar uma URL e convertê-la em PDF com um clique.",
      longDescription: "Converta páginas da web HTML em documentos PDF. Basta colar uma URL ou inserir código HTML diretamente. Perfeito para salvar artigos da web, recibos ou documentação como PDF."
},
    "markdown-to-pdf": {
      title: "Markdown para PDF",
      description: "Converta arquivos Markdown em documentos PDF lindamente formatados.",
      longDescription: "Converta seus documentos Markdown em arquivos PDF bem formatados. Suporta cabeçalhos, blocos de código, tabelas e imagens. Perfeito para documentação, arquivos README e redação técnica. 100% baseado em navegador."
},
    "heic-to-pdf": {
      title: "HEIC para PDF",
      description: "Converta fotos HEIC do iPhone em PDF em segundos. Sem necessidade de upload.",
      longDescription: "Converta fotos do iPhone e iPad (formato HEIC/HEIF) em PDF. Perfeito para compartilhar fotos como documentos. Todo o processamento acontece em seu navegador."
},
    "ocr-pdf": {
      title: "OCR PDF",
      description: "Converta PDFs escaneados em documentos pesquisáveis e selecionáveis.",
      longDescription: "Extraia texto de PDFs e imagens escaneados usando OCR (Reconhecimento Óptico de Caracteres). Torne documentos escaneados pesquisáveis e copiáveis. OCR em inglês funciona localmente; idiomas adicionais disponíveis."
},
    "remove-background": {
      title: "Remove Background",
      description: "Remove image backgrounds instantly using AI. Works entirely in your browser.",
      longDescription: "Remove the background from any image with a single click. Powered by a browser-based AI model (ONNX) that runs entirely on your device — no upload, no server, 100% private. Supports PNG, JPG, and WEBP images. The result is a PNG with transparent background."
},
    "sign-pdf": {
      title: "Assinar PDF",
      description: "Adicione assinaturas manuscritas ou digitadas aos seus documentos PDF.",
      longDescription: "Desenhe, digite ou carregue sua assinatura e coloque-a em qualquer página do seu PDF. Suporta desenho com mouse/toque, digitação com seleção de fonte ou upload de imagem de assinatura. Posicione, redimensione e baixe o PDF assinado — tudo no seu navegador."
},
    "pdf-to-ppt": {
      title: "PDF para PPT",
      description: "Converta seus arquivos PDF em apresentações editáveis do PowerPoint.",
      longDescription: "Converta documentos PDF para o formato PowerPoint (PPTX) para edição e apresentação fáceis. Esta conversão requer processamento no lado do servidor e estará disponível em uma atualização futura."
},
    "pdf-to-excel": {
      title: "PDF para Excel",
      description: "Extraia dados de tabelas PDF e converta para planilhas Excel.",
      longDescription: "Converta tabelas e dados de PDF para planilhas Excel (XLSX). Esta conversão requer processamento no lado do servidor e estará disponível em uma atualização futura."
}
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
    relatedTools: "Ferramentas relacionadas"
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
    largeFileWarning: "Arquivo grande — o processamento pode demorar mais",
    // Edit PDF workspace
    reset: "Redefinir",
    loadingPages: "Carregando páginas do PDF...",
    textMode: "✏️ Texto",
    selectMode: "👆 Selecionar",
    enterTextPlaceholder: "Digite o texto para adicionar...",
    textModeTip: "Clique em qualquer lugar da página para colocar seu texto. Mude para o modo Selecionar para excluir anotações.",
    selectModeTip: "Clique em uma anotação para excluí-la. Mude para o modo Texto para adicionar mais texto.",
    addTextFirst: "Adicione anotações de texto primeiro",
    annotationsCount: (n) => `Anotações (${n} no total)`,
    clearPage: "Limpar página",
    selectAllAnnotations: "Selecionar tudo",
    undo: "↩ Desfazer",
    redo: "↪ Refazer",
    fontSizeLabel: "Tamanho da fonte",
    fontSmall: "Pequeno",
    fontMedium: "Médio",
    fontLarge: "Grande",
    applyEdits: (n) => `Aplicar edições e baixar (${n} anotação${n !== 1 ? "ões" : ""})`,
    applyingEdits: "Aplicando edições...",
    page: "Página",
    prev: "◀ Anterior",
    next: "Próximo ▶",
    failedToLoad: "Falha ao carregar o PDF",
    processingFailed: "Falha no processamento",
    noUploadEdit: "Sem upload — toda edição acontece localmente",
    // Crop PDF workspace
    fullPage: "Página inteira",
    autoMargin: "Margem automática",
    cropRegion: "Região de corte",
    dragToResize: "— arraste os cantos para redimensionar, arraste o centro para mover",
    cropAllPages: (n) => `Aplicar corte a todas as ${n} páginas`,
    cropSinglePage: "Cortar página atual",
    croppingPages: "Cortando páginas...",
    noUploadCrop: "Sem upload — todo corte acontece localmente",
    presetA4: "A4",
    presetLetter: "Carta",
    presetSquare: "Quadrado",
    preset16x9: "16:9",
    preset4x3: "4:3",
    switchPageTabs: "Altere as abas de página para visualizar cada uma.",
    applyToAllPages: "Aplicar a todas as páginas",
    cropX: "X",
    cropY: "Y",
    cropWidth: "Largura",
    cropHeight: "Altura",
    // Sign PDF workspace
    signDrawTab: "Desenhar",
    signTypeTab: "Digitar",
    signUploadTab: "Carregar",
    signClearSignature: "Limpar assinatura",
    signPlaceOnPage: "Clique no PDF para colocar sua assinatura. Arraste para reposicionar.",
    signSignAndDownload: "Assinar e baixar",
    signFontSelector: "Estilo de assinatura",
    signDrawHint: "Desenhe sua assinatura abaixo usando mouse ou toque",
    signTypeHint: "Digite sua assinatura abaixo",
    // Organize PDF workspace
    pagesCount: (n) => `${n} página${n !== 1 ? "s" : ""}`,
    dragReorderClickDelete: "— arraste para reordenar, clique para excluir",
    removePage: "Remover página",
    saveNewOrder: (n) => `Salvar nova ordem (${n} páginas)`,
    reorganizingPages: "Reorganizando páginas...",
    noUploadOrganize: "Sem upload — arraste e solte páginas no seu navegador",
    // Rotate PDF workspace
    rotateAngle: "Ângulo de rotação",
    rotate90: "90°",
    rotate180: "180°",
    rotate270: "270°",
    // Watermark PDF workspace
    watermarkText: "Texto da marca d'água",
    watermarkOpacity: "Opacidade",
    watermarkSize: "Tamanho da fonte",
    watermarkFontFamily: "Família de fonte",
    watermarkRotation: "Rotação (°)",
    watermarkPosition: "Posição",
    watermarkColor: "Cor",
    fontSerif: "Serif",
    fontSansSerif: "Sans-Serif",
    fontMonospace: "Monospace",
    positionCenter: "Centro",
    positionTopLeft: "Superior esquerdo",
    positionTopRight: "Superior direito",
    positionBottomLeft: "Inferior esquerdo",
    positionBottomRight: "Inferior direito",
    positionTile: "Ladrilho / Repetir",
    // Protect/Unlock PDF workspace
    enterPassword: "Digitar senha",
    confirmPassword: "Confirmar senha",
    passwordMismatch: "As senhas não coincidem",
    showPassword: "Mostrar",
    hidePassword: "Ocultar",
    protectPdf: "Proteger PDF",
    unlockPdf: "Desbloquear",
    incorrectPassword: "Senha incorreta",
    // Compress PDF workspace
    compressLevels: {
      label: "Nível de compressão",
      light: "Leve",
      standard: "Padrão",
      maximum: "Máximo",
    },
    // Split PDF workspace
    splitMode: "Modo de divisão",
    splitEveryPage: "Dividir cada página",
    splitByRange: "Dividir por intervalo",
    extractPages: "Extrair páginas",
    splitEveryN: "Dividir a cada N páginas",
    rangePlaceholder: "ex.: 1-3,4-6,7-10",
    pagesPlaceholder: "ex.: 1,3,5,7",
    nPlaceholder: "ex.: 2",
    invalidRange: "Formato de intervalo inválido",
    // Merge PDF workspace
    mergeOrder: "Ordem de mesclagem",
    dragToReorder: "Arraste para reordenar a sequência de mesclagem",
    mergeAndDownload: "Mesclar e baixar",
    mergingFiles: "Mesclando arquivos...",
    addMore: "Adicionar mais arquivos",
    removeFile: "Remover arquivo",
    needAtLeastTwo: "Adicione pelo menos 2 arquivos PDF para mesclar",
    files: "arquivos",
  },
  home: {
    breadcrumbHome: "Home",
  },
  guides: {
    title: "Guias e Tutoriais",
    description: "Tutoriais passo a passo e guias para processamento de imagens e PDF. Aprenda dicas, truques e melhores práticas.",
    browseGuides: "Explorar Guias",
    readGuide: "Ler Guia →",
    backToGuides: "← Voltar aos Guias",
    breadcrumbGuides: "Guias",
  },
  convert: {
    converter: "Conversor",
    free: "Gratuito online",
    noUpload: "sem upload necessário — todo o processamento acontece no seu navegador",
    subtitle: (from, to) => `Converta arquivos ${from} (${from.toUpperCase()}) para o formato ${to} (${to.toUpperCase()}) online, grátis e`,
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
    relatedConversions: "Conversões relacionadas"
},
  category: {
    all: "Todas",
    organize: "Organizar PDF",
    optimize: "Otimizar PDF",
    convert: "Converter PDF",
    edit: "Editar PDF",
    security: "Segurança PDF",
    intelligence: "Inteligência PDF",
    workflow: "Fluxos de trabalho"
},
  dropzone: {
    dropHere: "Solte os arquivos aqui",
    dragDropHere: "Arraste e solte os arquivos aqui",
    orClickBrowse: "ou clique para procurar",
    filesUpTo: "arquivos, até",
    multipleSupported: "(vários arquivos compatíveis)",
    fileExceed: "Arquivo(s) excede(m) o limite de tamanho:",
    invalidFileType: "Formato de arquivo inválido. Carregue um arquivo PDF válido."
},
  toolCard: {
    new: "Novo",
    pro: "Pro"
},
  pdfToImage: {
    title: "PDF para Imagem",
    description: "Converta páginas de PDF em imagens JPG ou PNG. Escolha qualidade e resolução.",
    formatLabel: "Formato de saída",
    qualityLabel: "Qualidade JPEG",
    scaleLabel: "Resolução",
    pngOption: "PNG (Sem perdas)",
    jpgOption: "JPG (Menor)",
    convertBtn: "Converter para imagens",
    preview: "imagens geradas",
    pageLabel: "Página",
    downloadPage: "Baixar",
    downloadAll: "Baixar tudo",
    noFile: "Selecione um arquivo PDF acima para converter suas páginas em imagens.",
    renderingPages: "Renderizando páginas PDF..."
},
  footer: {
    product: "Produto",
    popularTools: "Ferramentas populares",
    convert: "Converter",
    company: "Empresa",
    privacy: "Privacidade",
    privacyLine: "Todo o processamento de PDF acontece inteiramente no seu navegador. Seus arquivos nunca são enviados para nenhum servidor.",
    home: "Início",
    allTools: "Todas as ferramentas",
    pricing: "Preços",
    about: "Sobre",
    terms: "Termos",
    contact: "Contato",
    alsoTry: "Experimente também：",
    imageTools: "🖼️ Ferramentas de imagem",
    unitConverter: "🔄 Conversor de unidades",
    copyright: "Todo o processamento de PDF acontece inteiramente no seu navegador. Seus arquivos nunca são enviados para nenhum servidor. 100% Privacidade."
},
pages: {
  pricing: {
    title: "Preços",
    subtitle: "Simples e transparente — todas as ferramentas PDF são 100% gratuitas.",
    freeTier: "Grátis",
    freeDesc: "Acesse todas as ferramentas PDF sem custo. Sem taxas ocultas, sem assinatura — apenas processamento PDF potente e gratuito diretamente no seu navegador.",
    freeFeature1: "Mais de 20 ferramentas PDF incluídas",
    freeFeature2: "Sem inscrição ou registro necessário",
    freeFeature3: "Sem limites de tamanho de arquivo",
    freeFeature4: "100% baseado no navegador — sem upload, sem servidores",
    proTier: "Pro (Em Breve)",
    proDesc: "Funcionalidades avançadas para usuários que precisam de mais. Fique ligado!",
    ocrNote: "OCR (Reconhecimento Óptico de Caracteres) estará disponível como recurso Pro. Converta PDFs escaneados em texto pesquisável com precisão profissional.",
    faqQ1: "Por que as ferramentas são gratuitas?",
    faqA1: "Acreditamos que ferramentas PDF essenciais devem ser acessíveis a todos. Nossa abordagem baseada no navegador mantém os custos baixos, pois os arquivos nunca saem do seu dispositivo. Isso nos permite oferecer todas as ferramentas completamente gratuitas, suportadas por publicidade mínima.",
    faqQ2: "O que acontece quando o Pro for lançado?",
    faqA2: "Quando o Pro for lançado, todas as ferramentas gratuitas atuais permanecerão completamente gratuitas. O Pro adicionará recursos avançados como OCR, qualidade de conversão superior e processamento em lote para usuários que precisam deles. Nenhuma funcionalidade existente será movida para trás de um paywall."
  },
  about: {
    title: "Sobre o toolconv",
    subtitle: "Ferramentas PDF focadas em privacidade que funcionam inteiramente no seu navegador.",
    missionTitle: "Nossa Missão",
    missionDesc: "o toolconv foi criado com uma missão simples: fornecer ferramentas PDF poderosas e de qualidade profissional que respeitem sua privacidade. Acreditamos que o processamento de arquivos deve acontecer no seu dispositivo, não no servidor de outra pessoa. Cada ferramenta que construímos funciona inteiramente no seu navegador usando JavaScript do lado do cliente — seus arquivos nunca saem do seu computador.",
    value1Title: "🔒 100% Privado",
    value1Desc: "Seus arquivos são processados localmente no seu navegador. Eles nunca são enviados, armazenados ou compartilhados. Acesso zero do servidor aos seus dados.",
    value2Title: "🖥️ Baseado no Navegador",
    value2Desc: "Sem downloads, sem instalações. Tudo funciona diretamente no seu navegador moderno. Alimentado por WebAssembly e JavaScript do lado do cliente.",
    value3Title: "💰 Completamente Grátis",
    value3Desc: "Todas as ferramentas são gratuitas para usar sem limites, inscrições ou custos ocultos. Acreditamos em tornar as ferramentas PDF acessíveis a todos.",
    value4Title: "🌍 Funciona Offline",
    value4Desc: "Uma vez carregadas, muitas ferramentas podem funcionar sem conexão com a internet. Perfeito para viajantes, trabalhadores remotos e qualquer pessoa preocupada com a privacidade de dados.",
    storyTitle: "Nossa História",
    storyDesc: "o toolconv começou com uma simples observação: a maioria das ferramentas PDF online 'gratuitas' na verdade enviam seus arquivos para seus servidores, processam-nos remotamente e muitas vezes vendem seus dados ou bloqueiam recursos atrás de assinaturas caras. Queríamos construir uma alternativa melhor — onde todo o processamento acontece do lado do cliente, onde a privacidade está integrada na arquitetura e onde ferramentas PDF poderosas permanecem gratuitas para todos. Hoje, o toolconv atende usuários em todo o mundo com mais de 20 ferramentas PDF baseadas no navegador, todas 100% gratuitas e focadas em privacidade."
  },
  privacy: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: 1 de junho de 2026",
    intro: "No toolconv, sua privacidade é nossa prioridade máxima. Esta política explica como lidamos com seus dados quando você usa nossos serviços.",
    s1Title: "1. Sem Upload de Dados",
    s1Content: "Todo o processamento de PDF acontece inteiramente no seu navegador usando JavaScript do lado do cliente. Seus arquivos nunca são enviados para nossos servidores — eles permanecem no seu dispositivo do início ao fim. Não temos acesso do lado do servidor aos seus documentos e nunca armazenamos, processamos ou transmitimos seus arquivos além da sua máquina local.",
    s2Title: "2. Sem Cookies (Exceto Análises)",
    s2Content: "Não usamos cookies funcionais para a operação principal do site. Os únicos cookies usados neste site são do Google AdSense para personalização de anúncios e relatórios. Estes são cookies de terceiros sujeitos à Política de Privacidade do Google. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.",
    s3Title: "3. Análises e Publicidade",
    s3Content: "Este site usa o Google AdSense, que pode coletar e usar dados sobre sua visita (como páginas visualizadas e interações com anúncios) para exibir anúncios relevantes. O Google AdSense usa cookies e tecnologias semelhantes. Para mais informações, consulte a Política de Privacidade do Google em policies.google.com/privacy. Nós mesmos não coletamos ou armazenamos dados de análise pessoais — sem logs de servidor, scripts de rastreamento além do AdSense ou plataformas de análise como Google Analytics.",
    s4Title: "4. Nenhuma Conta Necessária",
    s4Content: "Não exigimos contas de usuário ou registro. Não há processo de inscrição, coleta de e-mail ou perfis de usuário. Isso significa que inerentemente não coletamos informações pessoais identificáveis sobre você. Seu uso de nossas ferramentas é completamente anônimo.",
    s5Title: "5. Links de Terceiros",
    s5Content: "Nosso site pode conter links para sites de terceiros (por exemplo, projetos irmãos como image.toolconv.com e unit.toolconv.com, ou anúncios do Google AdSense). Não somos responsáveis pelas práticas de privacidade desses sites externos. Encorajamos você a revisar suas políticas de privacidade antes de interagir com eles.",
    contact: "Se você tiver alguma dúvida sobre esta política de privacidade, entre em contato conosco em support@toolconv.com."
  },
  terms: {
    title: "Termos de Serviço",
    lastUpdated: "Última atualização: 1 de junho de 2026",
    intro: "Bem-vindo ao toolconv. Ao usar nosso site e ferramentas, você concorda com os seguintes termos. Por favor, leia-os atentamente.",
    s1Title: "1. Uso Gratuito",
    s1Content: "Todas as ferramentas no toolconv são fornecidas gratuitamente. Nenhum pagamento é necessário e nenhuma assinatura é necessária. Reservamo-nos o direito de introduzir recursos premium no futuro, mas todas as ferramentas gratuitas existentes permanecerão gratuitas.",
    s2Title: "2. Compromisso de Privacidade",
    s2Content: "Sua privacidade é fundamental para nosso serviço. Todo o processamento de arquivos acontece localmente no seu navegador. Não temos acesso aos seus arquivos e não os armazenamos, processamos ou transmitimos. Para detalhes completos, consulte nossa Política de Privacidade.",
    s3Title: "3. Uso Aceitável",
    s3Content: "Você concorda em usar o toolconv apenas para fins legais e de acordo com estes termos. Você não pode usar nossas ferramentas para processar conteúdo ilegal, infringir a propriedade intelectual de outros ou tentar interromper nosso serviço.",
    s4Title: "4. Sem Garantia",
    s4Content: "o toolconv é fornecido 'como está' sem qualquer garantia, expressa ou implícita. Embora nos esforcemos pela precisão e confiabilidade, não garantimos que as ferramentas estejam livres de erros ou ininterruptas. A qualidade da saída pode variar dependendo dos arquivos de entrada. Use por sua própria conta e risco.",
    s5Title: "5. Limitação de Responsabilidade",
    s5Content: "o toolconv e seus operadores não serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar nossas ferramentas, incluindo, mas não se limitando a perda de dados, interrupção de negócios ou quaisquer danos indiretos. Nossa responsabilidade total é limitada à extensão máxima permitida pela lei aplicável.",
    s6Title: "6. Contato",
    s6Content: "Para perguntas sobre estes termos, entre em contato com support@toolconv.com. Teremos prazer em esclarecer quaisquer dúvidas."
  },
  contact: {
    title: "Fale Conosco",
    subtitle: "Adoraríamos ouvir de você. Entre em contato com qualquer pergunta, sugestão ou feedback.",
    emailTitle: "📧 Suporte por E-mail",
    emailDesc: "Para perguntas, relatórios de bugs ou consultas gerais:",
    supportEmail: "support@toolconv.com",
    featureTitle: "💡 Solicitações de Funcionalidades",
    featureDesc: "Tem uma ideia para uma nova ferramenta ou melhoria? Somos todos ouvidos! Envie-nos suas sugestões e as consideraremos para futuras atualizações.",
    responseTitle: "⏱️ Tempo de Resposta",
    responseDesc: "Normalmente respondemos dentro de 24 horas em dias úteis. Valorizamos seu tempo e retornaremos a você o mais rápido possível."
  }
}
};
export default dict;