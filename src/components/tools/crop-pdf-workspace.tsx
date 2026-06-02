// ─── Crop PDF Workspace ───
// Visual crop region selector with draggable handles + apply to all pages
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { t } from "@/lib/i18n";

// ─── Types ───
interface CropBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PageState {
  index: number;
  dataUrl: string;
  originalWidth: number;
  originalHeight: number;
}

export function CropPdfWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageState[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Uint8Array | null>(null);

  // Crop box state (in pixel coordinates of the rendered canvas)
  const [cropBox, setCropBox] = useState<CropBox | null>(null);
  const [dragging, setDragging] = useState<{
    type: "move" | "resize-nw" | "resize-ne" | "resize-sw" | "resize-se";
    startX: number;
    startY: number;
    startBox: CropBox;
  } | null>(null);

  // Apply to all pages toggle
  const [applyToAllPages, setApplyToAllPages] = useState(true);

  // Numeric input sync lock to prevent loops
  const [inputValues, setInputValues] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update input values when cropBox changes
  useEffect(() => {
    if (cropBox) {
      setInputValues({
        x: Math.round(cropBox.x),
        y: Math.round(cropBox.y),
        w: Math.round(cropBox.width),
        h: Math.round(cropBox.height),
      });
    }
  }, [cropBox]);

  // Load PDF and render pages
  const handleFile = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setLoading(true);
    setError(null);
    setResult(null);
    setCropBox(null);

    try {
      const pdfjs = await getPdfjs();
      const buf = await f.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const renderedPages: PageState[] = [];

      // Use scale 1.5 for good quality crop preview
      const SCALE = 1.5;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: SCALE });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await (page.render as any)({ canvasContext: ctx, viewport }).promise;

        renderedPages.push({
          index: i - 1,
          dataUrl: canvas.toDataURL("image/jpeg", 0.85),
          originalWidth: viewport.width,
          originalHeight: viewport.height,
        });
      }

      setPages(renderedPages);

      // Set initial crop box (full page = no crop)
      if (renderedPages.length > 0) {
        const first = renderedPages[0];
        const box = {
          x: 20,
          y: 20,
          width: first.originalWidth - 40,
          height: first.originalHeight - 40,
        };
        setCropBox(box);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.failedToLoad);
    }
    setLoading(false);
  }, []);

  // Draw crop box overlay on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || pages.length === 0) return;

    const current = pages[activePage];
    if (!current) return;

    canvas.width = current.originalWidth;
    canvas.height = current.originalHeight;

    const ctx = canvas.getContext("2d")!;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      drawCropOverlay(ctx, current.originalWidth, current.originalHeight, cropBox);
    };
    img.src = current.dataUrl;
  }, [pages, activePage, cropBox]);

  // Draw dimmed overlay + crop rectangle
  function drawCropOverlay(ctx: CanvasRenderingContext2D, w: number, h: number, box: CropBox | null) {
    if (!box) return;

    // Dim areas outside crop box
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.fillRect(0, 0, w, h);
    ctx.clearRect(box.x, box.y, box.width, box.height);

    // Draw crop border
    ctx.strokeStyle = "#7c3aed";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 3]);
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    ctx.setLineDash([]);

    // Draw grid lines (rule of thirds)
    ctx.strokeStyle = "rgba(124, 58, 237, 0.25)";
    ctx.lineWidth = 0.5;
    for (let i = 1; i < 3; i++) {
      const gx = box.x + (box.width / 3) * i;
      const gy = box.y + (box.height / 3) * i;
      ctx.beginPath();
      ctx.moveTo(gx, box.y);
      ctx.lineTo(gx, box.y + box.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(box.x, gy);
      ctx.lineTo(box.x + box.width, gy);
      ctx.stroke();
    }

    // Draw corner handles
    const handleSize = 10;
    const corners = [
      { x: box.x, y: box.y },
      { x: box.x + box.width, y: box.y },
      { x: box.x, y: box.y + box.height },
      { x: box.x + box.width, y: box.y + box.height },
    ];
    ctx.fillStyle = "#7c3aed";
    corners.forEach((c) => {
      ctx.fillRect(c.x - handleSize / 2, c.y - handleSize / 2, handleSize, handleSize);
    });

    // Show dimension labels at bottom-right of crop area
    ctx.fillStyle = "rgba(124, 58, 237, 0.85)";
    ctx.font = "11px system-ui, sans-serif";
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    const label = `${Math.round(box.width)} × ${Math.round(box.height)} px`;
    ctx.fillText(label, box.x + box.width - 4, box.y + box.height - 4);
  }

  // ─── Mouse handlers on canvas ───
  const getCanvasPos = (e: React.MouseEvent<HTMLCanvasElement>): { x: number; y: number } => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const scaleX = (pages[activePage]?.originalWidth || 1) / rect.width;
    const scaleY = (pages[activePage]?.originalHeight || 1) / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const getHandleAt = (x: number, y: number, box: CropBox): "nw" | "ne" | "sw" | "se" | null => {
    const threshold = 15;
    const handles = {
      nw: { x: box.x, y: box.y },
      ne: { x: box.x + box.width, y: box.y },
      sw: { x: box.x, y: box.y + box.height },
      se: { x: box.x + box.width, y: box.y + box.height },
    };
    for (const [k, h] of Object.entries(handles)) {
      if (Math.abs(x - h.x) < threshold && Math.abs(y - h.y) < threshold) {
        return k as "nw" | "ne" | "sw" | "se";
      }
    }
    return null;
  };

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!cropBox) return;
    const pos = getCanvasPos(e);
    const handle = getHandleAt(pos.x, pos.y, cropBox);

    if (handle) {
      setDragging({ type: `resize-${handle}`, startX: pos.x, startY: pos.y, startBox: { ...cropBox } });
    } else if (
      pos.x >= cropBox.x && pos.x <= cropBox.x + cropBox.width &&
      pos.y >= cropBox.y && pos.y <= cropBox.y + cropBox.height
    ) {
      setDragging({ type: "move", startX: pos.x, startY: pos.y, startBox: { ...cropBox } });
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging || !cropBox || !canvasRef.current) return;

    const pos = getCanvasPos(e);
    const dx = pos.x - dragging.startX;
    const dy = pos.y - dragging.startY;
    const sb = dragging.startBox;
    let newBox = { ...cropBox };

    const pageW = pages[activePage]?.originalWidth || 1;
    const pageH = pages[activePage]?.originalHeight || 1;

    switch (dragging.type) {
      case "move":
        newBox.x = Math.max(0, Math.min(sb.x + dx, pageW - sb.width));
        newBox.y = Math.max(0, Math.min(sb.y + dy, pageH - sb.height));
        break;
      case "resize-nw":
        newBox.x = Math.max(0, Math.min(sb.x + dx, sb.x + sb.width - 40));
        newBox.y = Math.max(0, Math.min(sb.y + dy, sb.y + sb.height - 40));
        newBox.width = sb.width - (newBox.x - sb.x);
        newBox.height = sb.height - (newBox.y - sb.y);
        break;
      case "resize-ne":
        newBox.y = Math.max(0, Math.min(sb.y + dy, sb.y + sb.height - 40));
        newBox.width = Math.max(40, Math.min(sb.width + dx, pageW - sb.x));
        newBox.height = sb.height - (newBox.y - sb.y);
        break;
      case "resize-sw":
        newBox.x = Math.max(0, Math.min(sb.x + dx, sb.x + sb.width - 40));
        newBox.width = sb.width - (newBox.x - sb.x);
        newBox.height = Math.max(40, Math.min(sb.height + dy, pageH - sb.y));
        break;
      case "resize-se":
        newBox.width = Math.max(40, Math.min(sb.width + dx, pageW - sb.x));
        newBox.height = Math.max(40, Math.min(sb.height + dy, pageH - sb.y));
        break;
    }

    setCropBox(newBox);

    // Update cursor
    canvasRef.current.style.cursor = dragging.type === "move" ? "grabbing" : `${dragging.type.replace("resize-", "")}-resize`;
  };

  const onMouseUp = () => {
    setDragging(null);
    if (canvasRef.current) canvasRef.current.style.cursor = "crosshair";
  };

  const onMouseLeave = () => {
    setDragging(null);
  };

  // ─── Numeric input handlers ───
  const handleNumericChange = (field: "x" | "y" | "w" | "h", value: string) => {
    if (!cropBox || !pages[activePage]) return;
    const num = Math.max(0, parseInt(value) || 0);
    const pageW = pages[activePage].originalWidth;
    const pageH = pages[activePage].originalHeight;

    setInputValues((prev) => ({ ...prev, [field]: num }));

    const newBox = { ...cropBox };
    switch (field) {
      case "x":
        newBox.x = Math.min(num, pageW - newBox.width);
        break;
      case "y":
        newBox.y = Math.min(num, pageH - newBox.height);
        break;
      case "w":
        newBox.width = Math.max(40, Math.min(num, pageW - newBox.x));
        break;
      case "h":
        newBox.height = Math.max(40, Math.min(num, pageH - newBox.y));
        break;
    }
    setCropBox(newBox);
  };

  // Preset crop sizes
  const applyPreset = (preset: string) => {
    if (!pages[activePage]) return;
    const w = pages[activePage].originalWidth;
    const h = pages[activePage].originalHeight;

    const presets: Record<string, CropBox> = {
      "A4": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(w * 1.26) },
      "Letter": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(w * 1.17) },
      "16:9": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(w * 0.90 * 9 / 16) },
      "4:3": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(w * 0.90 * 3 / 4) },
      "Square": { x: Math.round(w * 0.05), y: Math.round(h * 0.15), width: Math.round(w * 0.70), height: Math.round(w * 0.70) },
      "Full Page": { x: 0, y: 0, width: w, height: h },
      "Auto Margin": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(h * 0.90) },
    };

    setCropBox(presets[preset]);
  };

  // Process crop
  const handleProcess = useCallback(async () => {
    if (!file || !cropBox) return;
    setProcessing(true);
    setError(null);

    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const doc = await PDFDocument.load(buf);
      const pageCount = doc.getPageCount();

      // Calculate crop ratios from the rendered preview
      const { originalWidth, originalHeight } = pages[activePage];
      const ratioX = cropBox.x / originalWidth;
      const ratioY = cropBox.y / originalHeight;
      const ratioW = cropBox.width / originalWidth;
      const ratioH = cropBox.height / originalHeight;

      const pagesToCrop = applyToAllPages ? Array.from({ length: pageCount }, (_, i) => i) : [activePage];

      for (const pageIdx of pagesToCrop) {
        const page = doc.getPage(pageIdx);
        const { width, height } = page.getSize();
        const cropX = width * ratioX;
        const cropY = height * ratioY;
        const cropW = width * ratioW;
        const cropH = height * ratioH;

        page.setCropBox(cropX, height - cropY - cropH, cropW, cropH);
      }

      const result = await doc.save();
      setResult(result);
      downloadBlob(result, file.name.replace(/\.pdf$/i, "") + "_cropped.pdf");
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.processingFailed);
    }
    setProcessing(false);
  }, [file, cropBox, pages, activePage, applyToAllPages]);

  const handleClear = () => {
    setFile(null);
    setPages([]);
    setActivePage(0);
    setCropBox(null);
    setResult(null);
    setError(null);
  };

  // ─── Render ───
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {dict.workspace.noUploadCrop}
        </span>
        {file && (
          <button onClick={handleClear} className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">{dict.workspace.reset}</button>
        )}
      </div>

      {/* Dropzone */}
      {!file && <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />}

      {/* Large file warning */}
      {file && file.size > 50 * 1024 * 1024 && (
        <p className="mb-3 text-xs text-amber-600 dark:text-amber-400">
          ⚠ {dict.workspace.largeFileWarning}
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center rounded-xl bg-gray-50 py-20 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-3 border-purple-200 border-t-purple-600" />
            <span className="text-sm text-gray-500">{dict.workspace.loadingPages}</span>
          </div>
        </div>
      )}

      {/* Crop UI */}
      {pages.length > 0 && !loading && (
        <div className="space-y-4">
          {/* Page selector + presets */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Page tabs */}
            <div className="flex flex-wrap items-center gap-1">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePage(i)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    i === activePage
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  {dict.workspace.page} {i + 1}
                </button>
              ))}
            </div>

            <div className="ms-auto flex flex-wrap gap-1">
              {["A4", "Letter", "16:9", "4:3", "Square", "Full Page", "Auto Margin"].map((p) => (
                <button
                  key={p}
                  onClick={() => applyPreset(p)}
                  className="rounded-lg border border-gray-300 px-2.5 py-1 text-xs text-gray-600 hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-purple-600"
                >
                  {p === "Full Page" ? dict.workspace.fullPage
                    : p === "Auto Margin" ? dict.workspace.autoMargin
                    : p === "A4" ? dict.workspace.presetA4
                    : p === "Letter" ? dict.workspace.presetLetter
                    : p === "Square" ? dict.workspace.presetSquare
                    : p === "16:9" ? dict.workspace.preset16x9
                    : p === "4:3" ? dict.workspace.preset4x3
                    : p}
                </button>
              ))}
            </div>
          </div>

          {/* Numeric crop dimension inputs */}
          {cropBox && (
            <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-3 dark:border-purple-800 dark:bg-purple-950/20">
              <div className="mb-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div>
                  <label className="mb-0.5 block text-[10px] font-medium text-purple-700 dark:text-purple-400">{dict.workspace.cropX}</label>
                  <input
                    type="number"
                    min={0}
                    value={inputValues.x}
                    onChange={(e) => handleNumericChange("x", e.target.value)}
                    className="w-full rounded-md border border-purple-300 px-2 py-1 text-xs text-gray-700 focus:border-purple-500 focus:outline-none dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label className="mb-0.5 block text-[10px] font-medium text-purple-700 dark:text-purple-400">{dict.workspace.cropY}</label>
                  <input
                    type="number"
                    min={0}
                    value={inputValues.y}
                    onChange={(e) => handleNumericChange("y", e.target.value)}
                    className="w-full rounded-md border border-purple-300 px-2 py-1 text-xs text-gray-700 focus:border-purple-500 focus:outline-none dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label className="mb-0.5 block text-[10px] font-medium text-purple-700 dark:text-purple-400">{dict.workspace.cropWidth}</label>
                  <input
                    type="number"
                    min={40}
                    value={inputValues.w}
                    onChange={(e) => handleNumericChange("w", e.target.value)}
                    className="w-full rounded-md border border-purple-300 px-2 py-1 text-xs text-gray-700 focus:border-purple-500 focus:outline-none dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>
                <div>
                  <label className="mb-0.5 block text-[10px] font-medium text-purple-700 dark:text-purple-400">{dict.workspace.cropHeight}</label>
                  <input
                    type="number"
                    min={40}
                    value={inputValues.h}
                    onChange={(e) => handleNumericChange("h", e.target.value)}
                    className="w-full rounded-md border border-purple-300 px-2 py-1 text-xs text-gray-700 focus:border-purple-500 focus:outline-none dark:border-purple-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Preview info */}
          {cropBox && (
            <div className="rounded-lg bg-purple-50 px-3 py-2 text-xs text-purple-700 dark:bg-purple-950/30 dark:text-purple-400">
              {dict.workspace.cropRegion}: {Math.round(cropBox.x)}×{Math.round(cropBox.y)} + {Math.round(cropBox.width)}×{Math.round(cropBox.height)} px {dict.workspace.dragToResize}
            </div>
          )}

          {/* Canvas preview */}
          <div
            ref={containerRef}
            className="overflow-auto rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-950"
            style={{ maxHeight: "70vh" }}
          >
            <canvas
              ref={canvasRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              className="mx-auto"
              style={{ cursor: dragging ? "grabbing" : "crosshair", maxWidth: "100%", height: "auto" }}
            />
          </div>

          {/* Apply to all pages toggle */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-purple-200 bg-purple-50/50 px-4 py-2.5 text-sm dark:border-purple-800 dark:bg-purple-950/20">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={applyToAllPages}
                onChange={(e) => setApplyToAllPages(e.target.checked)}
                className="h-4 w-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-xs font-medium text-purple-700 dark:text-purple-400">
                {dict.workspace.applyToAllPages}
              </span>
            </label>
            <span className="text-xs text-purple-600 dark:text-purple-400">
              {applyToAllPages
                ? dict.workspace.cropAllPages(pages.length)
                : dict.workspace.cropSinglePage}
            </span>
          </div>

          {/* Process */}
          <button
            onClick={handleProcess}
            disabled={processing}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing
              ? dict.workspace.processing
              : applyToAllPages
                ? dict.workspace.cropAllPages(pages.length)
                : dict.workspace.cropSinglePage}
          </button>

          {processing && (
            <div className="flex items-center justify-center gap-3 text-sm text-purple-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
              {dict.workspace.croppingPages}
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button onClick={handleClear} className="mt-2 text-xs font-medium text-red-600 hover:underline">{dict.workspace.tryAgain}</button>
        </div>
      )}
    </div>
  );
}
