// ─── Edit PDF Workspace ───
// Interactive PDF editor: add text annotations on pages, then apply and download
"use client";

import { useState, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { t } from "@/lib/i18n";

// ─── Types ───
interface Annotation {
  pageIndex: number;
  x: number; // PDF coordinate (bottom-left origin)
  y: number; // PDF coordinate (bottom-left origin)
  text: string;
  fontSize: number;
  color: string; // hex e.g. "#000000"
}

interface PageState {
  index: number;
  dataUrl: string;
  originalWidth: number;  // canvas width at render scale
  originalHeight: number; // canvas height at render scale
  pdfWidth: number;       // actual PDF page width (pts)
  pdfHeight: number;      // actual PDF page height (pts)
}

const FONT_SIZES = [12, 16, 20, 24, 28, 36];
const COLORS = [
  { label: "Black", value: "#000000" },
  { label: "Red", value: "#e11d48" },
  { label: "Blue", value: "#2563eb" },
  { label: "Green", value: "#16a34a" },
  { label: "Purple", value: "#7c3aed" },
  { label: "Orange", value: "#ea580c" },
  { label: "Teal", value: "#0d9488" },
  { label: "Pink", value: "#db2777" },
];

const RENDER_SCALE = 1.5;
const MAX_HISTORY = 50;

// ─── Helper: hex → pdf-lib rgb ───
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}

// ─── Component ───
export function EditPdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageState[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [tool, setTool] = useState<"text" | "select">("text");
  const [textInput, setTextInput] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState("#000000");
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Undo/redo history
  const [history, setHistory] = useState<Annotation[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Selection state for Select All
  const [selectedAnnotationIndices, setSelectedAnnotationIndices] = useState<Set<number>>(new Set());

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [imageNaturalSize, setImageNaturalSize] = useState<{ w: number; h: number } | null>(null);

  // ─── History management ───
  const pushHistory = useCallback((newAnnotations: Annotation[]) => {
    setHistory((prev) => {
      const trimmed = prev.slice(0, historyIndex + 1);
      const next = [...trimmed, [...newAnnotations]];
      if (next.length > MAX_HISTORY) next.shift();
      return next;
    });
    setHistoryIndex((prev) => Math.min(prev + 1, MAX_HISTORY - 1));
  }, [historyIndex]);

  const handleUndo = useCallback(() => {
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    setAnnotations(history[newIndex] ? [...history[newIndex]] : []);
  }, [historyIndex, history]);

  const handleRedo = useCallback(() => {
    if (historyIndex >= history.length - 1) return;
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    setAnnotations(history[newIndex] ? [...history[newIndex]] : []);
  }, [historyIndex, history]);

  // ─── Load PDF and render pages ───
  const handleFile = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setLoading(true);
    setError(null);
    setResult(null);
    setAnnotations([]);
    setHistory([]);
    setHistoryIndex(-1);
    setActivePage(0);

    try {
      const pdfjs = await getPdfjs();
      const buf = await f.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const renderedPages: PageState[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: RENDER_SCALE });
        const rawViewport = page.getViewport({ scale: 1 });
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
          pdfWidth: rawViewport.width,
          pdfHeight: rawViewport.height,
        });
      }

      setPages(renderedPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.failedToLoad);
    }
    setLoading(false);
  }, []);

  // ─── Track image natural size after load ───
  const onImageLoad = useCallback(() => {
    if (imageRef.current) {
      setImageNaturalSize({
        w: imageRef.current.naturalWidth,
        h: imageRef.current.naturalHeight,
      });
    }
  }, []);

  // ─── Get click position in PDF coordinates ───
  const getPdfPosition = useCallback(
    (clientX: number, clientY: number): { x: number; y: number } | null => {
      const img = imageRef.current;
      const overlay = overlayRef.current;
      if (!img || !overlay || pages.length === 0) return null;

      const page = pages[activePage];
      const rect = overlay.getBoundingClientRect();

      // Position relative to overlay in CSS pixels
      const cssX = clientX - rect.left;
      const cssY = clientY - rect.top;

      // Scale from CSS display size to natural image size
      const displayW = rect.width;
      const displayH = rect.height;
      const natW = imageNaturalSize?.w ?? page.originalWidth;
      const natH = imageNaturalSize?.h ?? page.originalHeight;
      const scaleX = natW / displayW;
      const scaleY = natH / displayH;

      const imageX = cssX * scaleX;
      const imageY = cssY * scaleY;

      // Convert image coords to PDF coords (flip Y axis)
      // Image origin: top-left. PDF origin: bottom-left.
      const pdfX = imageX / RENDER_SCALE;
      const pdfY = (page.pdfHeight * RENDER_SCALE - imageY) / RENDER_SCALE;

      return { x: pdfX, y: pdfY };
    },
    [pages, activePage, imageNaturalSize]
  );

  // ─── Handle click on overlay ───
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (tool !== "text" || !textInput.trim()) return;
      const pos = getPdfPosition(e.clientX, e.clientY);
      if (!pos) return;

      const annotation: Annotation = {
        pageIndex: activePage,
        x: pos.x,
        y: pos.y,
        text: textInput.trim(),
        fontSize,
        color: textColor,
      };

      setAnnotations((prev) => {
        const next = [...prev, annotation];
        pushHistory(next);
        return next;
      });
      setTextInput("");
    },
    [tool, textInput, fontSize, textColor, activePage, getPdfPosition, pushHistory]
  );

  // ─── Remove annotation ───
  const removeAnnotation = useCallback((index: number) => {
    setAnnotations((prev) => {
      const next = prev.filter((_, i) => i !== index);
      pushHistory(next);
      return next;
    });
  }, [pushHistory]);

  // ─── Clear page annotations ───
  const clearPageAnnotations = useCallback(() => {
    setAnnotations((prev) => {
      const next = prev.filter((a) => a.pageIndex !== activePage);
      pushHistory(next);
      return next;
    });
  }, [activePage, pushHistory]);

  // ─── Select all annotations on current page ───
  const selectAllAnnotations = useCallback(() => {
    const currentIndices = annotations
      .map((a, i) => (a.pageIndex === activePage ? i : -1))
      .filter((i) => i >= 0);
    
    if (currentIndices.length === 0) return;
    
    setSelectedAnnotationIndices((prev) => {
      // If all current page annotations are already selected, deselect all
      const allSelected = currentIndices.every((i) => prev.has(i));
      if (allSelected) {
        return new Set();
      }
      // Select all annotations on current page
      const next = new Set(prev);
      currentIndices.forEach((i) => next.add(i));
      return next;
    });
  }, [annotations, activePage]);

  // ─── Convert PDF coord to display coord for overlay rendering ───
  const pdfToDisplay = useCallback(
    (pdfX: number, pdfY: number): { x: number; y: number } | null => {
      const page = pages[activePage];
      const overlay = overlayRef.current;
      const img = imageRef.current;
      if (!page || !overlay || !img) return null;

      const rect = overlay.getBoundingClientRect();
      const displayW = rect.width;
      const displayH = rect.height;
      const natW = imageNaturalSize?.w ?? page.originalWidth;
      const natH = imageNaturalSize?.h ?? page.originalHeight;
      const scaleX = displayW / natW;
      const scaleY = displayH / natH;

      // PDF coords → image coords (flip Y, apply render scale)
      const imageX = pdfX * RENDER_SCALE;
      const imageY = page.pdfHeight * RENDER_SCALE - pdfY * RENDER_SCALE;

      // Image coords → CSS display coords
      const cssX = imageX * scaleX;
      const cssY = imageY * scaleY;

      return { x: cssX, y: cssY };
    },
    [pages, activePage, imageNaturalSize]
  );

  // ─── Apply edits to PDF ───
  const handleProcess = useCallback(async () => {
    if (!file || pages.length === 0) return;
    setProcessing(true);
    setError(null);

    try {
      const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const doc = await PDFDocument.load(buf);
      const helvetica = await doc.embedFont(StandardFonts.Helvetica);

      // Group annotations by page
      const pageAnnotations = new Map<number, Annotation[]>();
      for (const ann of annotations) {
        const existing = pageAnnotations.get(ann.pageIndex) || [];
        existing.push(ann);
        pageAnnotations.set(ann.pageIndex, existing);
      }

      for (const [pageIdx, anns] of pageAnnotations) {
        const page = doc.getPage(pageIdx);
        for (const ann of anns) {
          const { r, g, b } = hexToRgb(ann.color);
          page.drawText(ann.text, {
            x: ann.x,
            y: ann.y,
            size: ann.fontSize,
            font: helvetica,
            color: rgb(r, g, b),
          });
        }
      }

      const resultBytes = await doc.save();
      setResult(resultBytes);
      downloadBlob(resultBytes, file.name.replace(/\.pdf$/i, "") + "_edited.pdf");
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.processingFailed);
    }
    setProcessing(false);
  }, [file, pages, annotations]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setPages([]);
    setActivePage(0);
    setAnnotations([]);
    setHistory([]);
    setHistoryIndex(-1);
    setResult(null);
    setError(null);
    setImageNaturalSize(null);
  }, []);

  // ─── Get current page annotations ───
  const currentAnnotations = annotations.filter((a) => a.pageIndex === activePage);

  // Font size presets
  const FONT_SIZE_PRESETS = [
    { label: dict.workspace.fontSmall, value: 12 },
    { label: dict.workspace.fontMedium, value: 20 },
    { label: dict.workspace.fontLarge, value: 28 },
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
          <button onClick={handleClear} className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
            {dict.workspace.reset}
          </button>
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

      {/* Editor UI */}
      {pages.length > 0 && !loading && (
        <div className="space-y-4">
          {/* ─── Mini Toolbar (top of canvas area) ─── */}
          <div className="flex flex-wrap items-center justify-between gap-1 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1.5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-1">
              <button
                onClick={handleUndo}
                disabled={historyIndex <= 0}
                className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-200 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-30 dark:text-gray-400 dark:hover:bg-gray-700"
                title={dict.workspace.undo}
              >
                ↩
              </button>
              <button
                onClick={handleRedo}
                disabled={historyIndex >= history.length - 1}
                className="rounded px-2 py-1 text-xs text-gray-500 hover:bg-gray-200 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-30 dark:text-gray-400 dark:hover:bg-gray-700"
                title={dict.workspace.redo}
              >
                ↪
              </button>
              <span className="mx-1 h-4 w-px bg-gray-300 dark:bg-gray-600" />
              <span className="text-[10px] text-gray-400">
                {history.length > 0 ? `${historyIndex + 1}/${history.length}` : "0/0"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="hidden text-[10px] text-gray-400 sm:inline">{dict.workspace.page} {activePage + 1}</span>
              <span className="hidden text-[10px] text-gray-400 sm:inline">·</span>
              <span className="text-[10px] text-gray-400">{currentAnnotations.length}</span>
            </div>
          </div>

          {/* ─── Toolbar ─── */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            {/* Tool selector */}
            <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-800">
              <button
                onClick={() => setTool("text")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  tool === "text"
                    ? "bg-white text-purple-700 shadow-sm dark:bg-gray-700 dark:text-purple-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {dict.workspace.textMode}
              </button>
              <button
                onClick={() => setTool("select")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  tool === "select"
                    ? "bg-white text-purple-700 shadow-sm dark:bg-gray-700 dark:text-purple-400"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {dict.workspace.selectMode}
              </button>
            </div>

            <div className="h-5 w-px bg-gray-200 dark:bg-gray-700" />

            {/* Text input */}
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={dict.workspace.enterTextPlaceholder}
              className="min-w-[140px] flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-xs text-gray-700 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
            />

            <div className="h-5 w-px bg-gray-200 dark:bg-gray-700" />

            {/* Font size selector */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gray-500 dark:text-gray-400">{dict.workspace.fontSizeLabel}</span>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="rounded-lg border border-gray-300 px-2 py-1.5 text-xs text-gray-700 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                {FONT_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}px
                  </option>
                ))}
              </select>
              <div className="ml-1 flex gap-0.5">
                {FONT_SIZE_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setFontSize(preset.value)}
                    className={`rounded px-1.5 py-1 text-[10px] transition-colors ${
                      fontSize === preset.value
                        ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                        : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-5 w-px bg-gray-200 dark:bg-gray-700" />

            {/* Color picker */}
            <div className="flex items-center gap-1">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setTextColor(c.value)}
                  className={`h-6 w-6 rounded-full border-2 transition-all ${
                    textColor === c.value
                      ? "border-gray-800 ring-2 ring-purple-400 ring-offset-1 dark:border-white dark:ring-purple-500"
                      : "border-transparent hover:scale-110"
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.label}
                  aria-label={c.label}
                />
              ))}
              {/* Native color picker for custom colors */}
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="h-6 w-6 cursor-pointer rounded-full border-0 p-0"
                title="Custom color"
              />
            </div>

            <div className="h-5 w-px bg-gray-200 dark:bg-gray-700" />

            {/* Select All / Clear buttons */}
            {currentAnnotations.length > 0 && (
              <>
                <button
                  onClick={selectAllAnnotations}
                  className="rounded-lg border border-red-200 px-2.5 py-1 text-xs text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/20"
                >
                  {dict.workspace.selectAllAnnotations} ({currentAnnotations.length})
                </button>
                <button
                  onClick={clearPageAnnotations}
                  className="rounded-lg border border-gray-300 px-2.5 py-1 text-xs text-gray-600 hover:border-red-300 hover:text-red-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-red-600"
                >
                  {dict.workspace.clearPage}
                </button>
              </>
            )}
          </div>

          {/* ─── Page Navigation ─── */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1">
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

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActivePage((p) => Math.max(0, p - 1))}
                disabled={activePage === 0}
                className="rounded-lg border border-gray-300 px-2.5 py-1 text-xs text-gray-600 hover:border-purple-300 hover:text-purple-600 disabled:opacity-40 disabled:cursor-not-allowed dark:border-gray-700 dark:text-gray-400 dark:hover:border-purple-600"
              >
                {dict.workspace.prev}
              </button>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {activePage + 1} / {pages.length}
              </span>
              <button
                onClick={() => setActivePage((p) => Math.min(pages.length - 1, p + 1))}
                disabled={activePage === pages.length - 1}
                className="rounded-lg border border-gray-300 px-2.5 py-1 text-xs text-gray-600 hover:border-purple-300 hover:text-purple-600 disabled:opacity-40 disabled:cursor-not-allowed dark:border-gray-700 dark:text-gray-400 dark:hover:border-purple-600"
              >
                {dict.workspace.next}
              </button>
            </div>
          </div>

          {/* ─── Preview Area ─── */}
          <div
            ref={containerRef}
            className="relative overflow-auto rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-950"
            style={{ maxHeight: "65vh" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imageRef}
              src={pages[activePage]?.dataUrl}
              alt={`${dict.workspace.page} ${activePage + 1}`}
              onLoad={onImageLoad}
              width={800}
              height={600}
              className="block w-full"
              draggable={false}
            />

            {/* Interactive overlay for click-to-place and annotation display */}
            <div
              ref={overlayRef}
              onMouseDown={handleOverlayClick}
              className="absolute inset-0 cursor-crosshair"
              style={tool === "text" ? { cursor: "crosshair" } : { cursor: "default", pointerEvents: "none" }}
            >
              {/* Render annotations on current page */}
              {currentAnnotations.map((ann, i) => {
                const pos = pdfToDisplay(ann.x, ann.y);
                if (!pos) return null;
                return (
                  <div
                    key={`${ann.pageIndex}-${i}-${ann.text}-${ann.x}-${ann.y}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 select-none"
                    style={{
                      left: pos.x,
                      top: pos.y,
                    }}
                  >
                    {/* Annotation label with delete button */}
                    <div className="group relative">
                      <span
                        className="whitespace-nowrap font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
                        style={{
                          fontSize: `${ann.fontSize * 0.75}px`,
                          color: ann.color,
                        }}
                      >
                        {ann.text}
                      </span>
                      {tool === "select" && (
                        <button
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            removeAnnotation(
                              annotations.findIndex(
                                (a) => a.pageIndex === ann.pageIndex && a.x === ann.x && a.y === ann.y && a.text === ann.text
                              )
                            );
                          }}
                          className="absolute -top-2 -right-2 hidden h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white shadow-sm group-hover:flex"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ─── Tooltip ─── */}
          <div className="rounded-lg bg-purple-50 px-3 py-2 text-xs text-purple-700 dark:bg-purple-950/30 dark:text-purple-400">
            {tool === "text"
              ? dict.workspace.textModeTip
              : dict.workspace.selectModeTip}
          </div>

          {/* ─── Annotations Summary ─── */}
          {annotations.length > 0 && (
            <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {dict.workspace.annotationsCount(annotations.length)}
                </h3>
                <button
                  onClick={clearPageAnnotations}
                  className="text-xs text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                >
                  {dict.workspace.clearPage}
                </button>
              </div>
              <div className="max-h-24 space-y-1 overflow-y-auto">
                {annotations.map((ann, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-md bg-gray-50 px-2 py-1 text-xs dark:bg-gray-800"
                  >
                    <span className="truncate text-gray-700 dark:text-gray-300">
                      <span className="font-medium" style={{ color: ann.color }}>
                        {ann.text}
                      </span>
                      <span className="ms-1 text-gray-400">
                        (p{ann.pageIndex + 1}, {ann.fontSize}px)
                      </span>
                    </span>
                    <button
                      onClick={() => removeAnnotation(i)}
                      className="ms-2 shrink-0 text-gray-400 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── Process Button ─── */}
          <button
            onClick={handleProcess}
            disabled={processing || annotations.length === 0}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing
              ? dict.workspace.processing
              : annotations.length === 0
                ? dict.workspace.addTextFirst
                : dict.workspace.applyEdits(annotations.length)}
          </button>

          {processing && (
            <div className="flex items-center justify-center gap-3 text-sm text-purple-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
              {dict.workspace.applyingEdits}
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
