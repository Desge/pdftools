# PDF Toolconv 迭代记录

## v2.3 — 2026-06-03 修复解锁 PDF + 链路修复

### 改动

| # | 改动 | 详情 |
|---|------|------|
| 1 | 修复解锁 PDF 功能 | pdf-lib 无法真正移除加密（复制页面方案不可靠），改用 `@pdfsmaller/pdf-decrypt`（AES-256/RC4，Web Crypto API），支持用户密码和所有者密码自动检测；新增 3 种错误提示：PDF 未加密 / 密码错误 / 不支持的加密类型 |
| 2 | Footer 死链修复 | `markdown-to-pdf` → `md-to-pdf`（convert 路由使用 ext 作为 slug） |
| 3 | 新增 convert 索引页 | `/[locale]/convert/` 页面缺失导致面包屑和 footer 链接 404，新增索引页列出所有客户端支持的格式转换 |
| 4 | 隐藏工具页面 404 | `pdf-to-ppt`、`pdf-to-excel`（requiresServer）在 dev 模式仍返回 200，页面组件增加 `requiresServer` 检查返回 404 |
| 5 | 新增 i18n key | `pdfNotEncrypted`、`unsupportedEncryption`、`subtitleGeneric` 共 3 个 key × 12 语言全覆盖 |

## v2.2 — 2026-06-02 i18n 补齐 + 入口隐藏

### 改动

| # | 改动 | 详情 |
|---|------|------|
| 1 | 隐藏 PDF to PPT / PDF to Excel 入口 | 添加 `requiresServer: true` 标记，新增 `VISIBLE_TOOLS` 过滤导出，首页/工具页/sitemap 均不渲染这两个未实现工具 |
| 2 | 11 个新 Workspace 组件 i18n 全量补齐 | types.ts 新增 50 个 key，en/zh/ja/ko/es/fr/de/pt/ru/ar/hi/it 共 12 语言全部翻译 |
| 3 | 硬编码英文替换为 dict key | jpg-to-pdf / heic-to-pdf / word-to-pdf / excel-to-pdf / html-to-pdf / markdown-to-pdf / ocr-pdf / pdf-to-word / page-numbers 9 个组件中所有选项标签、状态文本、错误消息均改为 `dict.workspace.xxx` 调用 |
| 4 | 修复加密 PDF 功能 | pdf-lib 不支持加密，改用 `@pdfsmaller/pdf-encrypt`（AES-256/RC4 128-bit，Web Crypto API）；新增加密算法选择、权限控制（打印/复制/修改）选项面板；10 个新 i18n key 12 语言全覆盖 |

## v2.0 — 2026-06-01 全面迭代

### 🔴 P0 致命修复

| # | 改动 | 详情 |
|---|------|------|
| 1 | 补齐 Footer 死链接 | 新增 5 个静态页面：pricing、about、privacy、terms、contact，12 语言全覆盖 |
| 2 | 多文件 ZIP 打包下载 | 安装 JSZip，创建 `zip-utils.ts`，拆分 PDF 和 PDF 转图片结果支持一键 ZIP 下载 |
| 3 | Console 报错修复 | AdSense `<script>` 改为 Client Component `AdSenseScript`，避免 Server Component 事件处理器报错 |

### 🟡 P1 功能增强

| # | 改动 | 详情 |
|---|------|------|
| 4 | 拆分 PDF 高级选项 | 新增 `split-pdf-workspace.tsx`：按范围拆分、提取指定页、每 N 页拆分，含输入验证和 12 语言 i18n |
| 5 | 压缩 PDF 质量选项 | 新增 `compress-pdf-workspace.tsx`：轻度(0.7)、标准(0.45)、极限(0.2) 三档压缩 |
| 6 | 合并 PDF 拖拽排序 | 新增 `merge-pdf-workspace.tsx`：拖放排序、页数预览、文件大小显示、添加更多文件 |
| 7 | PDF 转图片 ZIP 打包 | `pdf-to-image.tsx` 的 handleDownloadAll 改用 ZIP 打包 |
| 8 | PDF 转 Word 标注限制 | 12 语言 longDescription 添加 ⚠️ 纯文本提取警告 |

### 🔵 P2 SEO & 体验优化

| # | 改动 | 详情 |
|---|------|------|
| 9 | Google Site Verification | `PENDING_VERIFICATION` → `toolconv-pdf-site`，添加获取真实验证码注释 |
| 10 | OG Image 差异化 | 每个工具页 `/og/{slug}.png`，静态页 `/og/default.png`，SEO 元数据已配置 |
| 11 | Guides 替换为 PDF 教程 | 完全重写 `guides.ts`：3 个 PDF 指南（合并/压缩/拆分），12 语言，替换旧的图片工具教程 |
| 12 | 页面 title i18n | 工具页 generateMetadata 使用 `dict.toolItems[slug].title` 本地化标题 |

### 🟢 P3 体验打磨

| # | 改动 | 详情 |
|---|------|------|
| 13 | robots.txt & sitemap | 确认包含新页面，新增 about/privacy/terms/contact/guides 条目 |
| 14 | 暗色主题切换 | Header 添加 🌙/☀️ 切换按钮，localStorage 持久化，尊重系统偏好 |
| 15 | 文件上传预览 | tool-workspace 上传 PDF 后显示首页缩略图 + 页数 + 文件大小 |
| 16 | 处理进度百分比 | 处理中显示进度条 + 百分比（0-100%），7 个处理器均支持回调 |
| 17 | Workspace 交互增强 | **编辑**：撤销/重做、字号预设、8色+自定义拾色器、全选标注；**裁剪**：数值输入、16:9/4:3 预设、应用到全部页面；**水印**：字体/旋转/位置/颜色选择器、实时预览 |

### 🟣 P4 新工具

| # | 改动 | 详情 |
|---|------|------|
| 18 | 3 个新工具 | ✍️ 签名 PDF（完整功能：手绘/打字/上传签名，点击放置，拖拽移动）；📊 PDF 转 PPT（即将上线）；📈 PDF 转 Excel（即将上线） |

### 📊 构建数据

- **SSG 页面数**：1,686（+33 新增页面）
- **工具总数**：26（原 23 + 新增 3）
- **TypeScript**：零错误
- **构建状态**：✅ 通过

### 📁 新增文件

```
src/app/[locale]/(static)/pricing/page.tsx
src/app/[locale]/(static)/about/page.tsx
src/app/[locale]/(static)/privacy/page.tsx
src/app/[locale]/(static)/terms/page.tsx
src/app/[locale]/(static)/contact/page.tsx
src/components/ui/adsense-script.tsx
src/components/ui/adsense-script.tsx
src/lib/zip-utils.ts
src/components/tools/compress-pdf-workspace.tsx
src/components/tools/split-pdf-workspace.tsx
src/components/tools/merge-pdf-workspace.tsx
src/components/tools/sign-pdf-workspace.tsx
```

### 📝 待后续处理

1. Google Site Verification 需替换为 Search Console 真实验证码
2. OG 图片（`/public/og/{slug}.png`）需实际生成
3. PDF 转 PPT / PDF 转 Excel 需服务端处理后开放
4. 签名 PDF 的触摸屏体验需真机测试

---

## v2.1 — 2026-06-02 11个工具专用Workspace

### 🎯 核心改动：所有工具拥有专用交互UI

之前 11 个工具只有"上传→处理→下载"的通用流程（GenericWorkspace），用户无法调整任何参数。本次为每个工具创建了专用 Workspace 组件，提供完整的选项面板。

### 新增专用 Workspace 组件

| # | 组件 | 工具 | 交互选项 |
|---|------|------|----------|
| 1 | `pdf-to-jpg-workspace.tsx` | PDF to JPG | 质量滑块(0.1-1.0)、分辨率缩放(1×-3×) |
| 2 | `pdf-to-png-workspace.tsx` | PDF to PNG | 分辨率缩放(1×-3×) |
| 3 | `jpg-to-pdf-workspace.tsx` | JPG to PDF | 页面尺寸(A4/Letter/原始)、方向(自动/纵向/横向)、边距(无/小/中/大) |
| 4 | `page-numbers-workspace.tsx` | Add Page Numbers | 9宫格位置选择、起始编号、字号滑块(8-24pt)、格式(纯数字/第X页/X/N/—X—) |
| 5 | `word-to-pdf-workspace.tsx` | Word to PDF | 纸张尺寸(A4/Letter)、边距(窄/中/宽) |
| 6 | `excel-to-pdf-workspace.tsx` | Excel to PDF | 纸张方向(自动/纵向/横向)、边距(窄/中/宽) |
| 7 | `html-to-pdf-workspace.tsx` | HTML to PDF | 纸张尺寸(A4/Letter)、边距(窄/中/宽)、渲染缩放(1×/1.5×/2×) |
| 8 | `markdown-to-pdf-workspace.tsx` | Markdown to PDF | 纸张尺寸(A4/Letter)、边距(窄/中/宽)、代码高亮开关 |
| 9 | `heic-to-pdf-workspace.tsx` | HEIC to PDF | 页面尺寸(A4/Letter/原始)、方向(自动/纵向/横向)、边距(无/小/中/大) |
| 10 | `ocr-pdf-workspace.tsx` | OCR PDF | 语言(英文/中文+英文/日文+英文)、输出格式(纯文本/PDF带文字层) |
| 11 | `pdf-to-word-workspace.tsx` | PDF to Word | 页面分隔(分页符/连续)、页码开关 |

### 其他改动

- `tool-workspace-loader.tsx`：注册全部 11 个新组件的动态导入和路由映射
- `components/tools/index.ts`：导出全部 11 个新组件

### 📊 构建数据

- **TypeScript**：零错误
- **构建状态**：✅ 通过
