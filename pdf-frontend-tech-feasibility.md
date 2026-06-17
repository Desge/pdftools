# PDF 工具站 — 纯前端技术实现能力边界报告

> 研究日期：2026-05-30 | 基于 npm registry、GitHub、真实项目参考

---

## 一、核心库总览

| 库 | 版本 | 体积 | 作用 | 纯前端 |
|----|------|------|------|--------|
| **pdf-lib** | 1.17.1 | ~300KB min | PDF 创建/修改/合并/拆分/表单/加密 | ✅ |
| **pdfjs-dist** | 6.0.227 | ~3MB (core+worker) | PDF 渲染到 Canvas / 文本提取 | ✅ |
| **tesseract.js** | 7.0.0 | ~4MB (core) + 语言包 | OCR 文字识别 | ✅ (WASM) |
| **mammoth** | 1.12.0 | ~500KB | DOCX → HTML 转换 | ✅ |
| **xlsx** (SheetJS) | 0.18.5 | ~2MB | XLSX/XLS 读写 | ✅ |
| **epubjs** | 0.3.93 | ~1MB | EPUB 解析和渲染 | ✅ |
| **jszip** | 3.10.1 | ~100KB | ZIP 解压（EPUB/DOCX 基础） | ✅ |
| **html2pdf.js** | 0.14.0 | ~200KB | HTML → PDF (wrapper of html2canvas+jspdf) | ✅ |
| **jspdf** | 2.5+ | ~300KB | 编程式创建 PDF | ✅ |
| **html2canvas** | 1.4+ | ~1MB | DOM → Canvas 截图 | ✅ |
| **heiccon** | 0.2.0 | 按需加载 | HEIC/HEIF → 14 种格式 | ✅ |
| **LibreOffice WASM** | 2.6.0 (matbee) | ~30MB WASM | 全格式 Office 互转 | ✅⚠️ |

---

## 二、逐功能可行性矩阵

### ✅ = 纯前端可行 | ⚠️ = 可行但有条件 | ❌ = 纯前端不可行 | 🔶 = 需要服务端

### 2.1 组织 PDF（Organize）

| 功能 | 可行性 | 实现方案 | 关键 API | 注意事项 |
|------|--------|---------|---------|----------|
| **Merge PDF** | ✅ | `pdf-lib` | `PDFDocument.create()` + `copyPages()` + `addPage()` | 完美支持，保留文本/字体/图片 |
| **Split PDF** | ✅ | `pdf-lib` | `copyPages(pdf, [i])` 逐页拆出为新文档 | 简单可靠 |
| **Extract Pages** | ✅ | `pdf-lib` | `copyPages(pdf, [0,2,5])` 指定页提取 | — |
| **Delete Pages** | ✅ | `pdf-lib` | `removePage(index)` | — |
| **Reorder Pages** | ✅ | `pdf-lib` | `insertPage()` + `removePage()` | 拖拽预览需 pdfjs-dist 生成缩略图 |
| **Rotate Pages** | ✅ | `pdf-lib` | `page.setRotation(angle)` | — |
| **Reverse Pages** | ✅ | `pdf-lib` | 循环取反序 addPage | — |
| **Duplicate Pages** | ✅ | `pdf-lib` | `copyPages()` 同一源文档复制 | — |

> **小结**：组织类 8/8 全部可行，pdf-lib 是完美工具。

### 2.2 优化 PDF（Optimize）

| 功能 | 可行性 | 实现方案 | 关键 API | 注意事项 |
|------|--------|---------|---------|----------|
| **Compress PDF** | ✅ | pdfjs-dist 渲染页 → Canvas → JPEG/WebP → pdf-lib 重新嵌入 | `page.render()` → `canvas.toBlob('image/jpeg',quality)` → `pdfDoc.embedJpg()` | 这是**重新栅格化**方式，会丢失文本可选性，但文件大幅缩小。原始质量压缩需服务端Ghostscript |
| **Resize Pages** | ✅ | `pdf-lib` | `page.setSize(w,h)` + `scaleContent()` | 简单页面缩放 |
| **Grayscale PDF** | ✅ | pdfjs-dist → Canvas 灰度滤镜 → pdf-lib | Canvas 像素操作 | 全部转为黑白 |

> **小结**：压缩可行但为"重新栅格化"方式（文本变图片），原始 PDF 的无损压缩需要服务端。

### 2.3 转换 PDF（Convert）—— 核心矩阵

#### 2.3.1 PDF → 其他格式

| 目标格式 | 可行性 | 实现方案 | 质量 |
|---------|--------|---------|------|
| **PDF → JPG** | ✅ | pdfjs-dist 渲染到 Canvas → `canvas.toBlob('image/jpeg')` | ⭐⭐⭐⭐⭐ 完美 |
| **PDF → PNG** | ✅ | 同上，`toBlob('image/png')` | ⭐⭐⭐⭐⭐ 完美 |
| **PDF → WebP** | ✅ | 同上，`toBlob('image/webp')` | ⭐⭐⭐⭐ Chrome/Safari 支持 |
| **PDF → AVIF** | ⚠️ | Canvas → `toBlob('image/avif')` | ⭐⭐ 仅 Chrome 96+ 支持 |
| **PDF → Text** | ⚠️ | pdfjs-dist `getTextContent()` | ⭐⭐⭐ 文本提取碎片化，需自行拼接，扫描件 PDF 无法提取 |
| **PDF → Word (DOCX)** | ⚠️ | 文本提取 → mammoth 逆向不适用 / LibreOffice WASM | ⭐⭐ 格式会丢失。更佳方案：LibreOffice WASM |
| **PDF → Excel (XLSX)** | ⚠️ | 文本提取+表格识别 → xlsx 库写入 | ⭐⭐ 表格识别难。LibreOffice WASM 更好 |
| **PDF → PPTX** | ⚠️ | pdfjs-dist 每页存图 → pptx 嵌入 | ⭐⭐ 每页变图片。LibreOffice WASM 更好 |
| **PDF → EPUB** | ❌ | — | 无法。需服务端 Pandoc/Calibre。或有 `bookracy-convertor` 逆向但质量差 |
| **PDF → MOBI/AZW3** | ❌ | — | 无法。需服务端 Calibre |
| **PDF → Markdown** | ⚠️ | pdfjs-dist 提取文本后格式化 | ⭐⭐ 丢失结构 |

#### 2.3.2 其他格式 → PDF

| 源格式 | 可行性 | 实现方案 | 质量 |
|--------|--------|---------|------|
| **JPG → PDF** | ✅ | pdf-lib `embedJpg()` + `addPage()` | ⭐⭐⭐⭐⭐ |
| **PNG → PDF** | ✅ | pdf-lib `embedPng()` | ⭐⭐⭐⭐⭐ |
| **WebP → PDF** | ✅ | Canvas 转 JPG/PNG → pdf-lib embed | ⭐⭐⭐⭐ |
| **BMP → PDF** | ✅ | Canvas 解码 → pdf-lib embed | ⭐⭐⭐⭐ |
| **GIF → PDF** | ✅ | Canvas 首帧 → pdf-lib embed | ⭐⭐⭐ |
| **TIFF → PDF** | ⚠️ | 浏览器不支持 TIFF，需 `utif` 库解码 | ⭐⭐⭐ |
| **HEIC → PDF** | ✅ | `heiccon` 库解码 → pdf-lib embed | ⭐⭐⭐⭐ |
| **SVG → PDF** | ⚠️ | Canvas 渲染 SVG → pdf-lib embed | ⭐⭐⭐ 丢失矢量性 |
| **Word (DOCX) → PDF** | ✅⚠️ | 两种方案见下文 | ⭐⭐⭐⭐ |
| **Excel (XLSX) → PDF** | ✅⚠️ | 两种方案见下文 | ⭐⭐⭐⭐ |
| **PPTX → PDF** | ✅⚠️ | 两种方案见下文 | ⭐⭐⭐⭐ |
| **HTML → PDF** | ✅ | `html2pdf.js` (html2canvas+jspdf) | ⭐⭐⭐ 分页问题 |
| **Markdown → PDF** | ✅ | marked→HTML → html2pdf.js | ⭐⭐⭐ |
| **EPUB → PDF** | ⚠️ | epubjs 渲染 → 逐页 Canvas → pdf-lib | ⭐⭐ 排版偏移 |
| **CSV → PDF** | ✅ | PapaParse 解析 → 表格绘制到 pdf-lib | ⭐⭐⭐ |
| **JSON → PDF** | ✅ | 格式化文本 → pdf-lib `drawText()` | ⭐⭐⭐ |
| **XML → PDF** | ✅ | 格式化文本 → pdf-lib `drawText()` | ⭐⭐⭐ |

#### Office 文档 → PDF 的两种方案对比

| 方案 | 技术栈 | 体积 | 质量 | 优点 | 缺点 |
|------|--------|------|------|------|------|
| **A: 渲染方案** | mammoth (DOCX→HTML) → html2pdf.js → PDF | ~3MB | ⭐⭐⭐ | 轻量，快速 | 复杂格式丢失，分页不准 |
| **B: LibreOffice WASM** | `@matbee/libreoffice-converter` | ~30MB | ⭐⭐⭐⭐⭐ | 完美保真，官方渲染 | 体积大，需SharedArrayBuffer |

> **建议**：MVP 先用方案 A 覆盖 DOCX/TXT，后续可选加载方案 B 提供高质量转换。

### 2.4 编辑 PDF（Edit）

| 功能 | 可行性 | 实现方案 | 关键 API | 注意事项 |
|------|--------|---------|---------|----------|
| **Add Text to PDF** | ✅ | `pdf-lib` | `page.drawText()` + 嵌入字体 | ✅ 可指定位置、大小、颜色 |
| **Add Image to PDF** | ✅ | `pdf-lib` | `page.drawImage()` | png/jpg 嵌入 |
| **Add Shapes** | ✅ | `pdf-lib` | `page.drawRectangle()` `drawLine()` `drawCircle()` | ✅ |
| **Draw SVG** | ✅ | `pdf-lib` | `page.drawSvgPath()` | ✅ |
| **Watermark** | ✅ | `pdf-lib` | `page.drawText()` + 透明度 | 文字/图片水印均可 |
| **Page Numbers** | ✅ | `pdf-lib` | `page.drawText()` 遍历页 | ✅ |
| **Crop PDF** | ✅ | `pdf-lib` | `page.setCropBox()` | ✅ |
| **Resize PDF** | ✅ | `pdf-lib` | `page.setSize()` + `scaleContent()` | ✅ |
| **Headers/Footers** | ✅ | `pdf-lib` | `page.drawText()` 循环各页 | ✅ |
| **Edit Metadata** | ✅ | `pdf-lib` | `setTitle()` `setAuthor()` `setKeywords()` 等 | ✅ |
| **Flatten PDF** | ✅ | `pdf-lib` | `form.flatten()` | ✅ 固化表单 |
| **Remove Annotations** | ✅ | `pdf-lib` | 低级 API 操作 | 中等复杂度 |
| **Edit Existing Text** | ❌ | — | — | ⚠️ pdf-lib **不支持读取/修改已有文本**。只能覆盖绘制新文本 |
| **Text Redaction** | ⚠️ | 低级 API 操作内容流 | 极复杂 | 可靠红删需服务端 |

> **关键限制**：pdf-lib 无法读取和修改 PDF 中已存在的文本内容。要"编辑"已有文本，只能：①在旧文本上方绘制白色矩形→②绘制新文本。或②用 pdfjs-dist 渲染→修改→重新生成 PDF。

### 2.5 PDF 安全（Security）

| 功能 | 可行性 | 实现方案 | 关键 API |
|------|--------|---------|---------|
| **Unlock PDF** | ⚠️ | `pdf-lib` + PDFDocument.load 如果知道密码的话 | 需提供密码 |
| **Protect PDF (加密)** | ✅ | `pdf-lib` | `pdfDoc.encrypt({ userPassword, ownerPassword, ... })` |
| **Sign PDF** | ⚠️ | `pdf-lib` 可添加数字签名结构 | 需证书私钥 |

> **pdf-lib 加密支持**：v1.17.1 支持 AES-128/AES-256 加密，可设置用户/所有者密码和权限（打印、修改、复制等）。

### 2.6 PDF 表单（Forms）

| 功能 | 可行性 | 实现方案 | 关键 API |
|------|--------|---------|---------|
| **Create Form Fields** | ✅ | `pdf-lib` | `form.createTextField()` `createCheckBox()` 等 |
| **Fill Form Fields** | ✅ | `pdf-lib` | `form.getTextField('name').setText('value')` |
| **Read Form Fields** | ✅ | `pdf-lib` | `form.getFields()` 遍历 |
| **Flatten Form** | ✅ | `pdf-lib` | `form.flatten()` |
| **Auto-detect Form Fields** | ❌ | — | 需 AI/OCR 识别，纯前端不可行 |

> **限制**：`copyPages()` 合并带表单的 PDF 后，表单字段可能丢失（已知 bug #1205）。

### 2.7 OCR & AI 功能

| 功能 | 可行性 | 实现方案 | 注意事项 |
|------|--------|---------|---------|
| **OCR PDF (英文)** | ✅ | pdfjs-dist 渲染页 → Canvas → tesseract.js `worker.recognize()` | ⭐⭐⭐⭐ 英文准确率高 |
| **OCR PDF (中文)** | ⚠️✅ | 同上 + `chi_sim` 语言包 | ⭐⭐⭐ 中文准确率低于英文，速度慢，语言包 ~15MB |
| **OCR PDF (日/韩/阿)** | ⚠️ | 同上 + 对应语言包 | 语言包体积大，速度更慢 |
| **AI Summarize** | ⚠️ | 提取文本 → 调用 API (OpenAI/Claude) | ⚠️ 文本离开浏览器（但仅文本，非文件） |
| **AI Translate** | ⚠️ | 同上 | ⚠️ 文本离开浏览器 |
| **AI Chat with PDF** | ⚠️ | 文本提取 → RAG → API | ⚠️ 文本离开浏览器 |

> **tesseract.js v7 关键信息**：
> - 纯 JS/WASM，100+ 语言
> - 首次加载需下载 ~15MB (eng) + 语言包
> - 不支持直接 OCR PDF，需先渲染为图片
> - 浏览器中首次 createWorker 需几秒（下载+初始化）
> - 建议预创建 worker 并复用

### 2.8 其他工具

| 功能 | 可行性 | 实现方案 |
|------|--------|---------|
| **Compare PDF** | ⚠️ | pdfjs-dist 渲染双方 → Canvas 逐像素对比 | 简单视觉对比可行，深度对比需服务端 |
| **Repair PDF** | ⚠️ | pdf-lib 可尝试加载损坏文件 | 效果有限 |
| **Scan to PDF** | ✅ | MediaDevices API 拍照 → Canvas → pdf-lib embed | ✅ 手机摄像头 |
| **PDF to PDF/A** | ❌ | — | pdf-lib 不支持 PDF/A 合规验证/转换 |
| **Convert to Grayscale** | ✅ | Canvas 像素操作 | ✅ |

---

## 三、真实世界纯前端 PDF 工具站参考

已有成功实现纯前端 PDF 工具的参考项目：

| 项目 | 工具数 | 技术栈 | 特点 |
|------|--------|--------|------|
| **pdfuck.com** | 40+ | Next.js + pdf-lib + pdfjs-dist | 2026年2月上线，中文隐私定位 |
| **PDF4.dev** | 24 | pdf-lib + pdfjs-dist | 22/24工具纯前端，有技术博客 |
| **en.sotool.top** | 20+ | Vue 3 + pdf-lib + pdfjs-dist + mammoth + xlsx | 开源，含Office转换 |
| **ModernPDF.app** | 28 | WebAssembly + AI analysis | $4/月，隐私定位 |
| **PDFCraft** | 80+ | Next.js + pdf-lib + pdf.js + tesseract.js | 开源 MIT，含OCR |
| **Tooliest** | 15 | pdf-lib | 纯前端启动，DEV.to 教程 |
| **ZeroCloudPDF** | — | 纯前端 JS | 免费，对比分析文章 |
| **imgready.app** | — | Squoosh WASM | 图片压缩/转换，纯前端 |

> 这些项目证明：纯前端 PDF 工具在商业上是**完全可行的**。

---

## 四、技术架构设计建议

### 4.1 推荐栈

```
前端框架: Next.js 16 (SSG 静态导出)
UI:       Tailwind CSS v4
PDF结构:  pdf-lib (合并/拆分/编辑/表单/加密)
PDF渲染:  pdfjs-dist (渲染到Canvas / 文本提取)
图片处理: Canvas API + heiccon (HEIC解码)
Office文档: mammoth (DOCX→HTML) + xlsx (XLSX解析) + html2pdf.js (HTML→PDF)
电子书:   epubjs (EPUB渲染)
OCR:      tesseract.js (按需懒加载)
压缩:     JSZip (创建/解压)
结构化数据: JSON-LD (SEO)
部署:     Cloudflare Pages / Vercel (免费层)
```

### 4.2 分层加载策略

```
Tier 0 (首屏必需 ~300KB):
  - Next.js core + Tailwind CSS
  - Landing page components

Tier 1 (工具页核心 ~3MB, 按路由懒加载):
  - pdf-lib (~300KB) → 组织/编辑类工具
  - pdfjs-dist (~3MB) → 渲染/转换类工具

Tier 2 (可选增强, 按需加载):
  - mammoth (~500KB) → DOCX 工具
  - xlsx (~2MB) → Excel 工具
  - epubjs (~1MB) → EPUB 工具
  - heiccon (~500KB) → HEIC 工具

Tier 3 (重量级, 用户明确触发):
  - tesseract.js (~15MB+语言包) → OCR 工具
  - @matbee/libreoffice-converter (~30MB) → Office 高质量转换
```

### 4.3 Web Worker 架构

```typescript
// 所有重计算必须在 Worker 中执行，保持主线程不卡
const worker = new Worker('/workers/pdf-worker.js');

// Worker 内部：
// - pdfjs-dist 渲染页面
// - pdf-lib PDF 操作
// - Canvas 图片处理
// - tesseract.js OCR

// 主线程只负责 UI 更新和进度显示
```

### 4.4 关键性能限制

| 限制 | 影响 | 缓解措施 |
|------|------|---------|
| 浏览器内存 | 大 PDF (>100MB) 可能崩溃 | 分页处理、进度提示、文件大小警告 |
| 单线程 | 大文件处理时 UI 冻结 | Web Worker 强制分离 |
| WASM 加载时间 | 首次使用工具需等几秒 | 预加载、loading 骨架屏 |
| 移动端性能 | 手机处理慢 3-5 倍 | 文件大小限制（移动端建议 <20MB） |
| SharedArrayBuffer | LibreOffice WASM 需要 | 需设置 COOP/COEP 头 |

---

## 五、由易到难的 MVP 工具实施路线

### ✅ 第一梯队（极简，1-3 天/工具）：仅需 pdf-lib
- Merge PDF、Split PDF、Extract Pages、Delete Pages
- Reorder Pages、Rotate PDF、Reverse PDF
- Add Page Numbers、Crop PDF、Resize PDF
- Edit Metadata、Flatten PDF
- JPG/PNG to PDF、Protect PDF (加密)

### ✅ 第二梯队（需 pdfjs-dist 渲染，3-5 天/工具）
- PDF to JPG、PDF to PNG、PDF to WebP
- Compress PDF (重新栅格化)
- Watermark (文字+图片)
- Grayscale PDF

### ⚠️ 第三梯队（需额外库，5-10 天/工具）
- DOCX/HTML to PDF（mammoth + html2pdf）
- Word/Excel/PPT to PDF（LibreOffice WASM 或 简易方案）
- PDF to Text（pdfjs-dist 文本提取）
- Markdown to PDF
- HEIC to PDF

### 🔶 第四梯队（需 tesseract.js 或 API，10+ 天/工具）
- OCR PDF（英文优先，中文按需）
- AI Summarize（需调用 API，文本离开浏览器）
- Translate PDF（需调用 API）

### ❌ MVP 不做（需服务端）
- PDF to EPUB/MOBI（需 Pandoc/Calibre）
- PDF to DOCX 高质量（需 LibreOffice 或商业库）
- PDF to PDF/A 合规
- 深度文本编辑/替换
- 高级 PDF Compare

---

## 六、核心结论

### 能做的（纯前端 ✅）：约 **25+ 个工具**

覆盖 iLovePDF 功能矩阵的 **~75%**：
- 所有组织类（Merge/Split/Reorder/Extract/Delete/Rotate）
- 核心转换类（PDF↔JPG/PNG/WebP、Office→PDF 简易版、HTML→PDF）
- 编辑类（加水印、页码、裁剪、元数据、页眉页脚）
- 安全类（加密、解密、表单填/创/读）
- OCR（英文）
- 图片转换（HEIC、WebP、AVIF）

### 不能做的（纯前端 ❌）：需要服务端 fallback

- 高质量的 PDF↔Office 格式保真转换
- PDF↔EPUB/MOBI 电子书转换
- PDF 已有文本编辑/替换/搜索
- PDF/A 合规验证
- 高级 PDF 对比
- 无密码情况下的 PDF 解锁

### 最重要的策略建议

> **"25+ 纯前端工具 + 200+ 格式转换程序化页面 + Privacy-First 定位 = 足够差异化的 MVP"**

你不需要覆盖 iLovePDF 的 100% 功能。你只需要：
1. 用 25 个纯前端工具覆盖最高频的 80% 需求
2. 用 Privacy-First 做差异化（零上传 = 核心卖点）
3. 用 200+ 格式转换长尾页面抢搜索流量
4. 把需要服务端的 20% 功能标记为"即将推出"或提供在线模式（付费）

---

## 附录：关键 npm 包版本清单

| 包 | 版本 | npm 周下载 | 备注 |
|----|------|-----------|------|
| `pdf-lib` | 1.17.1 | 200万+ | PDF 操作首选 |
| `pdfjs-dist` | 6.0.227 | 300万+ | Mozilla 官方 |
| `mammoth` | 1.12.0 | 80万+ | DOCX→HTML |
| `xlsx` | 0.18.5 | 200万+ | Excel 读写 |
| `tesseract.js` | 7.0.0 | 50万+ | OCR 100+语言 |
| `epubjs` | 0.3.93 | — | EPUB 渲染 |
| `jszip` | 3.10.1 | 500万+ | ZIP 处理 |
| `html2pdf.js` | 0.14.0 | 80万+ | HTML→PDF |
| `heiccon` | 0.2.0 | — | HEIC 转换 14格式 |
| `@matbee/libreoffice-converter` | 2.6.0 | 少量 | LibreOffice WASM |
