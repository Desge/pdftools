// ─── Crop PDF Workspace ───
// Visual crop region selector with draggable handles + apply to all pages
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";

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

// ─── Inline pdfjs import ───
let pdfjsLib: typeof import("pdfjs-dist") | null = null;
async function getPdfjs() {
  if (!pdfjsLib) {
    pdfjsLib = await import("pdfjs-dist");
    (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${(pdfjsLib as any).version}/pdf.worker.min.mjs`;
  }
  return pdfjsLib;
}

// ─── Component ───
export function CropPdfWorkspace() {
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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        setCropBox({
          x: 20,
          y: 20,
          width: first.originalWidth - 40,
          height: first.originalHeight - 40,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load PDF");
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

  // Preset crop sizes
  const applyPreset = (preset: string) => {
    if (!pages[activePage]) return;
    const w = pages[activePage].originalWidth;
    const h = pages[activePage].originalHeight;

    const presets: Record<string, CropBox> = {
      "A4": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(w * 1.26) },
      "Letter": { x: Math.round(w * 0.05), y: Math.round(h * 0.05), width: Math.round(w * 0.90), height: Math.round(w * 1.17) },
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

      for (let i = 0; i < pageCount; i++) {
        const page = doc.getPage(i);
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
      setError(err instanceof Error ? err.message : "Processing failed");
    }
    setProcessing(false);
  }, [file, cropBox, pages, activePage]);

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
          No upload — all cropping happens locally
        </span>
        {file && (
          <button onClick={handleClear} className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">Reset</button>
        )}
      </div>

      {/* Dropzone */}
      {!file && <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />}

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center rounded-xl bg-gray-50 py-20 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 animate-spin rounded-full border-3 border-purple-200 border-t-purple-600" />
            <span className="text-sm text-gray-500">Loading PDF pages...</span>
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
                  Page {i + 1}
                </button>
              ))}
            </div>

            <div className="ml-auto flex flex-wrap gap-1">
              {["A4", "Letter", "Square", "Full Page", "Auto Margin"].map((p) => (
                <button
                  key={p}
                  onClick={() => applyPreset(p)}
                  className="rounded-lg border border-gray-300 px-2.5 py-1 text-xs text-gray-600 hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-purple-600"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Preview info */}
          {cropBox && (
            <div className="rounded-lg bg-purple-50 px-3 py-2 text-xs text-purple-700 dark:bg-purple-950/30 dark:text-purple-400">
              Crop region: {Math.round(cropBox.x)}×{Math.round(cropBox.y)} + {Math.round(cropBox.width)}×{Math.round(cropBox.height)} px
              — drag corners to resize, drag center to move
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
          <div className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50/50 px-4 py-2.5 text-sm dark:border-purple-800 dark:bg-purple-950/20">
            <span className="text-purple-700 dark:text-purple-400">
              📐 Crop will be applied to <strong>all {pages.length} pages</strong>.
              {pages.length > 1 && " Switch page tabs to preview each."}
            </span>
          </div>

          {/* Process */}
          <button
            onClick={handleProcess}
            disabled={processing}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? "Processing..." : `Apply Crop to All ${pages.length} Pages`}
          </button>

          {processing && (
            <div className="flex items-center justify-center gap-3 text-sm text-purple-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
              Cropping pages...
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button onClick={handleClear} className="mt-2 text-xs font-medium text-red-600 hover:underline">Try Again</button>
        </div>
      )}
    </div>
  );
}
