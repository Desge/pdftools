// ─── Watermark PDF Workspace ───
// Custom PDF watermarking with text input, opacity slider, font size selection,
// font family selector, rotation, position, color picker, and preview
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { addTextWatermark } from "@/lib/pdf-utils";
import { downloadBlob } from "@/lib/pdf-render";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { t } from "@/lib/i18n";

const FONT_SIZES = [30, 40, 50, 60, 70];

export function WatermarkPdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [watermarkText, setWatermarkText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.15);
  const [fontSize, setFontSize] = useState(50);
  const [fontFamily, setFontFamily] = useState<"helvetica" | "times" | "courier">("helvetica");
  const [rotation, setRotation] = useState(45);
  const [position, setPosition] = useState<"center" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "tile">("center");
  const [watermarkColor, setWatermarkColor] = useState("#808080");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Preview state
  const [pages, setPages] = useState<{ dataUrl: string; originalWidth: number; originalHeight: number }[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(false);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  // ─── Handle file selection ───
  const handleFile = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setError(null);
    setLoading(true);

    try {
      const pdfjs = await getPdfjs();
      const buf = await files[0].arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const SCALE = 1;
      const renderedPages: { dataUrl: string; originalWidth: number; originalHeight: number }[] = [];

      for (let i = 1; i <= Math.min(pdf.numPages, 1); i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: SCALE });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await (page.render as any)({ canvasContext: ctx, viewport }).promise;
        renderedPages.push({
          dataUrl: canvas.toDataURL("image/jpeg", 0.85),
          originalWidth: viewport.width,
          originalHeight: viewport.height,
        });
      }

      setPages(renderedPages);
      setActivePage(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.failedToLoad);
    }
    setLoading(false);
  }, []);

  // ─── Draw watermark preview on canvas ───
  useEffect(() => {
    const canvas = previewCanvasRef.current;
    if (!canvas || pages.length === 0) return;

    const current = pages[activePage];
    if (!current) return;

    canvas.width = current.originalWidth;
    canvas.height = current.originalHeight;

    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, current.originalWidth, current.originalHeight);

      // Apply watermark text preview
      if (watermarkText.trim()) {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Set font
        let fontStyle = "sans-serif";
        if (fontFamily === "times") fontStyle = "serif";
        else if (fontFamily === "courier") fontStyle = "monospace";
        ctx.font = `${fontSize}px ${fontStyle}`;
        ctx.fillStyle = watermarkColor;

        // Apply rotation
        const cx = current.originalWidth / 2;
        const cy = current.originalHeight / 2;
        const textWidth = ctx.measureText(watermarkText).width;

        if (position === "tile") {
          const spacingX = textWidth + 60;
          const spacingY = fontSize * 3;
          for (let x = 0; x < current.originalWidth + spacingX; x += spacingX) {
            for (let y = 0; y < current.originalHeight + spacingY; y += spacingY) {
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate((rotation * Math.PI) / 180);
              ctx.fillText(watermarkText, 0, 0);
              ctx.restore();
            }
          }
        } else {
          let tx = cx, ty = cy;
          switch (position) {
            case "top-left":
              tx = textWidth / 2 + 40;
              ty = 40 + fontSize / 2;
              break;
            case "top-right":
              tx = current.originalWidth - textWidth / 2 - 40;
              ty = 40 + fontSize / 2;
              break;
            case "bottom-left":
              tx = textWidth / 2 + 40;
              ty = current.originalHeight - 40 - fontSize / 2;
              break;
            case "bottom-right":
              tx = current.originalWidth - textWidth / 2 - 40;
              ty = current.originalHeight - 40 - fontSize / 2;
              break;
            case "center":
            default:
              tx = cx;
              ty = cy;
              break;
          }

          ctx.save();
          ctx.translate(tx, ty);
          ctx.rotate((rotation * Math.PI) / 180);
          ctx.fillText(watermarkText, 0, 0);
          ctx.restore();
        }

        ctx.restore();
      }
    };
    img.src = current.dataUrl;
  }, [pages, activePage, watermarkText, opacity, fontSize, fontFamily, rotation, position, watermarkColor]);

  // ─── Process watermark ───
  const handleProcess = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);

    try {
      const buffer = await file.arrayBuffer();
      const result = await addTextWatermark(buffer, watermarkText, opacity, fontSize, fontFamily, rotation, position, watermarkColor);
      const baseName = file.name.replace(/\.pdf$/i, "");
      downloadBlob(result, `${baseName}_watermarked.pdf`);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.processingFailed);
    }
    setProcessing(false);
  }, [file, watermarkText, opacity, fontSize, fontFamily, rotation, position, watermarkColor]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
    setPages([]);
    setActivePage(0);
  }, []);

  // ─── Position options ───
  const positionOptions: { value: typeof position; label: string }[] = [
    { value: "center", label: dict.workspace.positionCenter },
    { value: "top-left", label: dict.workspace.positionTopLeft },
    { value: "top-right", label: dict.workspace.positionTopRight },
    { value: "bottom-left", label: dict.workspace.positionBottomLeft },
    { value: "bottom-right", label: dict.workspace.positionBottomRight },
    { value: "tile", label: dict.workspace.positionTile },
  ];

  // ─── Render ───
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {dict.workspace.noUploadEdit}
        </span>
        {file && (
          <button
            onClick={handleClear}
            className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
          >
            {dict.workspace.reset}
          </button>
        )}
      </div>

      {/* Dropzone */}
      {!file && <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />}

      {/* Controls */}
      {file && (
        <div className="space-y-4">
          {/* File info */}
          <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">{file.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} {dict.workspace.mb}
                </p>
              </div>
            </div>
          </div>

          {/* Watermark text input */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
              {dict.workspace.watermarkText}
            </label>
            <input
              type="text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
            />
          </div>

          {/* Controls grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Font family */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.watermarkFontFamily}
              </label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value as "helvetica" | "times" | "courier")}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                <option value="helvetica">{dict.workspace.fontSansSerif}</option>
                <option value="times">{dict.workspace.fontSerif}</option>
                <option value="courier">{dict.workspace.fontMonospace}</option>
              </select>
            </div>

            {/* Rotation angle */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.watermarkRotation}
              </label>
              <input
                type="number"
                min={0}
                max={360}
                value={rotation}
                onChange={(e) => setRotation(Math.min(360, Math.max(0, Number(e.target.value) || 0)))}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

            {/* Position */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.watermarkPosition}
              </label>
              <div className="grid grid-cols-3 gap-1">
                {positionOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setPosition(opt.value)}
                    className={`rounded-lg px-2 py-1.5 text-[11px] font-medium transition-colors ${
                      position === opt.value
                        ? "bg-purple-600 text-white"
                        : "border border-gray-300 bg-white text-gray-600 hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.watermarkColor}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={watermarkColor}
                  onChange={(e) => setWatermarkColor(e.target.value)}
                  className="h-9 w-9 cursor-pointer rounded-lg border border-gray-300 p-0.5"
                />
                <span className="text-xs text-gray-500">{watermarkColor}</span>
              </div>
            </div>
          </div>

          {/* Opacity slider */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
              {dict.workspace.watermarkOpacity}: {opacity.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.01"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>0.05</span>
              <span>0.50</span>
            </div>
          </div>

          {/* Font size selection */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
              {dict.workspace.watermarkSize}
            </label>
            <div className="flex flex-wrap gap-2">
              {FONT_SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    fontSize === size
                      ? "bg-purple-600 text-white shadow-sm"
                      : "border border-gray-300 bg-white text-gray-600 hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          {loading && (
            <div className="flex items-center justify-center rounded-xl bg-gray-50 py-16 dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
                <span className="text-sm text-gray-500">{dict.workspace.loadingPages}</span>
              </div>
            </div>
          )}

          {pages.length > 0 && !loading && (
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.previewOnly}
              </label>
              <div className="overflow-auto rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-950">
                <canvas
                  ref={previewCanvasRef}
                  className="mx-auto block max-w-full"
                  style={{ height: "auto" }}
                />
              </div>
              <p className="mt-1 text-[10px] text-gray-400">{dict.workspace.previewWarning}</p>
            </div>
          )}

          {/* Process button */}
          <button
            onClick={handleProcess}
            disabled={processing || !watermarkText.trim()}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? dict.workspace.processing : dict.workspace.processFiles}
          </button>

          {processing && (
            <div className="flex items-center justify-center gap-3 text-sm text-purple-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
              {dict.workspace.processing}
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button onClick={handleClear} className="mt-2 text-xs font-medium text-red-600 hover:underline">
            {dict.workspace.tryAgain}
          </button>
        </div>
      )}
    </div>
  );
}
