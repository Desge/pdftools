// ─── Page Numbers Workspace ───
// Interactive PDF page-numbering tool: 9-grid position, start number, font size, format.
// Uses pdf-lib to draw page number text on each page.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import { downloadBlob } from "@/lib/pdf-render";

type Position =
  | "top-left" | "top-center" | "top-right"
  | "middle-left" | "middle-center" | "middle-right"
  | "bottom-left" | "bottom-center" | "bottom-right";

type FormatStyle = "digits" | "pageX" | "xOfN" | "X";

const POSITIONS: { value: Position; label: string; col: number; row: number }[] = [
  { value: "top-left", label: "↖", col: 0, row: 0 },
  { value: "top-center", label: "↑", col: 1, row: 0 },
  { value: "top-right", label: "↗", col: 2, row: 0 },
  { value: "middle-left", label: "←", col: 0, row: 1 },
  { value: "middle-center", label: "●", col: 1, row: 1 },
  { value: "middle-right", label: "→", col: 2, row: 1 },
  { value: "bottom-left", label: "↙", col: 0, row: 2 },
  { value: "bottom-center", label: "↓", col: 1, row: 2 },
  { value: "bottom-right", label: "↘", col: 2, row: 2 },
];

const FORMAT_OPTIONS: { value: FormatStyle; label: string }[] = [
  { value: "digits", label: "1, 2, 3" },
  { value: "pageX", label: "Page 1, Page 2" },
  { value: "xOfN", label: "1 / N, 2 / N" },
  { value: "X", label: "— 1 —, — 2 —" },
];

export function PageNumbersWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<Position>("bottom-center");
  const [startAt, setStartAt] = useState(1);
  const [fontSize, setFontSize] = useState(10);
  const [formatStyle, setFormatStyle] = useState<FormatStyle>("digits");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ─── Handle file selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setError(null);
  }, []);

  // ─── Process: add page numbers ───
  const handleProcess = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);

    try {
      const { PDFDocument, rgb, StandardFonts } = await import("pdf-lib");
      const buffer = await file.arrayBuffer();
      const doc = await PDFDocument.load(buffer);
      const pages = doc.getPages();
      const totalPages = pages.length;
      const font = await doc.embedFont(StandardFonts.Helvetica);

      // Determine margins based on font size
      const margin = fontSize * 1.5;

      for (let i = 0; i < totalPages; i++) {
        const page = pages[i];
        const { width, height } = page.getSize();
        const pageNum = startAt + i;

        let text: string;
        switch (formatStyle) {
          case "pageX":
            text = `Page ${pageNum}`;
            break;
          case "xOfN":
            text = `${pageNum} / ${totalPages}`;
            break;
          case "X":
            text = `— ${pageNum} —`;
            break;
          case "digits":
          default:
            text = `${pageNum}`;
            break;
        }

        const textWidth = font.widthOfTextAtSize(text, fontSize);

        // Calculate x,y based on the 9-grid position
        let x: number, y: number;

        // Column (horizontal position)
        const col = POSITIONS.find((p) => p.value === position)?.col ?? 1;
        switch (col) {
          case 0:
            x = margin;
            break;
          case 1:
            x = width / 2 - textWidth / 2;
            break;
          case 2:
            x = width - textWidth - margin;
            break;
          default:
            x = margin;
        }

        // Row (vertical position)
        const row = POSITIONS.find((p) => p.value === position)?.row ?? 2;
        switch (row) {
          case 0:
            y = height - margin;
            break;
          case 1:
            y = height / 2 - fontSize / 3;
            break;
          case 2:
            y = margin;
            break;
          default:
            y = margin;
        }

        page.drawText(text, {
          x,
          y,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        });
      }

      const pdfBytes = await doc.save();
      const baseName = file.name.replace(/\.pdf$/i, "") || "document";
      downloadBlob(new Uint8Array(pdfBytes), `${baseName}_numbered.pdf`);
      setProcessing(false);

      // Auto-clear after success
      setFile(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : dict.workspace.addPageNumbersError
      );
      setProcessing(false);
    }
  }, [file, position, startAt, fontSize, formatStyle]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
  }, []);

  // ─── Format style label ───
  const formatStyleLabel = (f: FormatStyle): string => {
    switch (f) {
      case "digits":
        return dict.workspace.formatDigits;
      case "pageX":
        return dict.workspace.formatPageX;
      case "xOfN":
        return dict.workspace.formatXOfN;
      case "X":
        return dict.workspace.formatDashX;
    }
  };

  return (
    <div>
      {/* Privacy badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {dict.workspace.privacyBadge}
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
      {!file && (
        <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />
      )}

      {/* File info + options */}
      {file && !processing && !error && (
        <div className="space-y-4">
          {/* File info */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-lg dark:bg-red-900/30">
                📄
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {file.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(file.size / 1024).toFixed(1)} {dict.workspace.kb}
                </p>
              </div>
            </div>
          </div>

          {/* Position (9-grid) */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.position}
            </p>
            <div className="grid grid-cols-3 gap-1.5">
              {POSITIONS.map((pos) => (
                <button
                  key={pos.value}
                  onClick={() => setPosition(pos.value)}
                  className={`rounded-lg px-3 py-2.5 text-center text-sm font-semibold transition-all ${
                    position === pos.value
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                      : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                  }`}
                  title={pos.value}
                >
                  {pos.label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-center text-[11px] text-gray-400">
              {position.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </p>
          </div>

          {/* Start number */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.startNumber}
            </label>
            <input
              type="number"
              min={1}
              max={9999}
              value={startAt}
              onChange={(e) =>
                setStartAt(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Font size */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {dict.workspace.fontSizeLabel}
              </p>
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                {fontSize}pt
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={24}
              step={1}
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>8pt</span>
              <span>24pt</span>
            </div>
          </div>

          {/* Format style */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Format
            </p>
            <div className="flex gap-2">
              {FORMAT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFormatStyle(opt.value)}
                  className={`flex-1 rounded-xl px-3 py-3 text-center text-xs font-semibold transition-all ${
                    formatStyle === opt.value
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                  }`}
                >
                  {formatStyleLabel(opt.value)}
                </button>
              ))}
            </div>
          </div>

          {/* Process button */}
          <button
            onClick={handleProcess}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            {dict.workspace.processFiles}
          </button>
        </div>
      )}

      {/* Processing state */}
      {processing && (
        <div className="flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            {dict.workspace.processing}
          </p>
          <p className="mt-2 text-sm text-purple-500">{dict.workspace.processing}</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="mt-4 rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 text-center dark:border-red-800 dark:bg-red-950/20">
          <div className="mb-3 text-3xl">❌</div>
          <h3 className="mb-2 text-lg font-semibold text-red-800 dark:text-red-400">
            {dict.workspace.error}
          </h3>
          <p className="mb-4 text-sm text-red-700 dark:text-red-500">{error}</p>
          <button
            onClick={handleClear}
            className="rounded-xl border-2 border-red-300 bg-white px-6 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 dark:border-red-700 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-red-950"
          >
            {dict.workspace.tryAgain}
          </button>
        </div>
      )}

      {/* Empty hint */}
      {!file && !processing && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}
