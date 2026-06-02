// ─── Word to PDF Workspace ───
// Converts DOCX files to PDF using mammoth→DOMPurify→html2pdf.js
// Options: paper size (A4/Letter), margins (narrow/medium/wide)
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import { downloadBlob } from "@/lib/pdf-render";

type PaperSize = "a4" | "letter";
type Margin = "narrow" | "medium" | "wide";

const PAPER_SIZES: Record<PaperSize, { format: string; unit: string }> = {
  a4: { format: "a4", unit: "mm" },
  letter: { format: "letter", unit: "mm" },
};

const MARGIN_VALUES: Record<Margin, number> = {
  narrow: 5,
  medium: 10,
  wide: 20,
};

export function WordToPdfWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [file, setFile] = useState<File | null>(null);
  const [paperSize, setPaperSize] = useState<PaperSize>("a4");
  const [margin, setMargin] = useState<Margin>("medium");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [result, setResult] = useState<{ message: string; data: Uint8Array; filename: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ─── Handle file selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setResult(null);
    setError(null);
  }, []);

  // ─── Convert Word to PDF ───
  const handleProcess = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setProgress(dict.workspace.parsingWord);
    setError(null);
    setResult(null);

    try {
      const buf = await file.arrayBuffer();
      const { default: mammoth } = await import("mammoth");
      setProgress("Converting to PDF...");
      const { value: html } = await mammoth.convertToHtml({ arrayBuffer: buf });

      const DOMPurify = (await import("dompurify")).default;
      const sanitized = DOMPurify.sanitize(html);

      const container = document.createElement("div");
      container.innerHTML = sanitized;
      container.style.padding = `${MARGIN_VALUES[margin]}px`;
      container.style.fontFamily = "Times New Roman, serif";
      container.style.fontSize = "12pt";
      container.style.lineHeight = "1.5";
      container.style.color = "#000";
      document.body.appendChild(container);

      const html2pdf = await import("html2pdf.js");
      const pdfBlob: Blob = await html2pdf
        .default()
        .from(container)
        .set({
          margin: MARGIN_VALUES[margin],
          filename: file.name.replace(/\.docx?$/i, "") + ".pdf",
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { ...PAPER_SIZES[paperSize] },
        })
        .outputPdf("blob");

      document.body.removeChild(container);
      const arr = await pdfBlob.arrayBuffer();
      const baseName = file.name.replace(/\.docx?$/i, "");

      setResult({
        message: `Converted "${file.name}" to PDF (${PAPER_SIZES[paperSize].format.toUpperCase()}, ${margin} margin).`,
        data: new Uint8Array(arr),
        filename: `${baseName}.pdf`,
      });
      setProgress(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.unexpectedError);
      setProgress(null);
    } finally {
      setProcessing(false);
    }
  }, [file, paperSize, margin, dict]);

  // ─── Download ───
  const handleDownload = useCallback(() => {
    if (result) {
      downloadBlob(result.data, result.filename);
    }
  }, [result]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setProgress(null);
  }, []);

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
        <FileDropzone
          onFiles={handleFile}
          accept=".docx,.doc"
          multiple={false}
        />
      )}

      {/* File info + options */}
      {file && !processing && !result && !error && (
        <div className="space-y-4">
          {/* File info */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-lg dark:bg-blue-900/30">
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

          {/* Options panel */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Options
            </p>

            {/* Paper size */}
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.paperSize}
              </label>
              <div className="flex gap-2">
                {(["a4", "letter"] as PaperSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setPaperSize(size)}
                    className={`flex-1 rounded-lg px-3 py-2 text-center text-xs font-semibold transition-all ${
                      paperSize === size
                        ? "bg-purple-600 text-white shadow-sm"
                        : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600"
                    }`}
                  >
                    {size === "a4" ? dict.workspace.a4 : dict.workspace.letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Margins */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                {dict.workspace.margins}
              </label>
              <div className="flex gap-2">
                {(["narrow", "medium", "wide"] as Margin[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMargin(m)}
                    className={`flex-1 rounded-lg px-3 py-2 text-center text-xs font-semibold transition-all ${
                      margin === m
                        ? "bg-purple-600 text-white shadow-sm"
                        : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600"
                    }`}
                  >
                    {m === "narrow" ? dict.workspace.marginNarrow : m === "medium" ? dict.workspace.marginMedium : dict.workspace.marginWide}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Process button */}
          <button
            onClick={handleProcess}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            Convert to PDF
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
          {progress && (
            <p className="mt-2 text-sm text-purple-500">{progress}</p>
          )}
        </div>
      )}

      {/* Result */}
      {result && !processing && (
        <div className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-6 text-center dark:border-green-800 dark:bg-green-950/20">
          <div className="mb-3 text-3xl">✅</div>
          <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-400">
            {dict.workspace.done}
          </h3>
          <p className="mb-4 text-sm text-green-700 dark:text-green-500">
            {result.message}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleDownload}
              className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
            >
              {dict.workspace.downloadAgain}
            </button>
            <button
              onClick={handleClear}
              className="rounded-xl border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
            >
              {dict.workspace.startOver}
            </button>
          </div>
        </div>
      )}

      {/* Error */}
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
      {!file && !processing && !result && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}
