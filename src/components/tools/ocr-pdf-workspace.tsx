// ─── OCR PDF Workspace ───
// Performs Optical Character Recognition on scanned PDFs.
// Uses pdfjs-dist to render pages, then tesseract.js for OCR.
// Supports English, Chinese+English, and Japanese+English with progress tracking.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import { downloadBlob } from "@/lib/pdf-render";

type LangOption = "eng" | "chi_sim+eng" | "jpn+eng";
type OutputFormat = "text" | "pdf-with-text-layer";

interface OcrProgress {
  page: number;
  totalPages: number;
  percent: number;
  status: string;
}

export function OcrPdfWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState<LangOption>("eng");
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("text");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<OcrProgress | null>(null);
  const [result, setResult] = useState<{ text: string; filename: string } | null>(null);

  // ─── Handle file selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setError(null);
    setResult(null);
  }, []);

  // ─── Clear all ───
  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
    setProgress(null);
    setResult(null);
  }, []);

  // ─── Process OCR ───
  const handleProcess = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    setResult(null);
    setProgress({ page: 0, totalPages: 0, percent: 0, status: dict.workspace.ocrInitializing });

    try {
      // Dynamic imports
      const { createWorker, createScheduler } = await import("tesseract.js");
      const pdfjsLib = await import("pdfjs-dist");

      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      const pageCount = pdf.numPages;

      setProgress({ page: 0, totalPages: pageCount, percent: 0, status: dict.workspace.ocrLoadingEngine });

      // Create worker with progress logging
      const worker = await createWorker(language, 1, {
        logger: (m: { status: string; progress?: number }) => {
          if (m.status === "recognizing text") {
            setProgress((prev) =>
              prev
                ? {
                    ...prev,
                    percent: Math.round((m.progress || 0) * 100),
                    status: `OCR: ${Math.round((m.progress || 0) * 100)}%`,
                  }
                : prev
            );
          } else if (
            m.status === "loading tesseract core" ||
            m.status === "initializing tesseract" ||
            m.status === "loading language traineddata"
          ) {
            setProgress((prev) =>
              prev ? { ...prev, status: dict.workspace.ocrLoadingEngine } : prev
            );
          }
        },
      });

      const allText: string[] = [];
      const encoder = new TextEncoder();

      for (let i = 1; i <= pageCount; i++) {
        setProgress({
          page: i,
          totalPages: pageCount,
          percent: 0,
          status: `Processing page ${i}/${pageCount}...`,
        });

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });

        // Render page to canvas
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await (page.render as any)({ canvasContext: ctx, viewport }).promise;

        // Run OCR on the rendered image
        const { data } = await worker.recognize(canvas);

        allText.push(`--- Page ${i} ---\n${data.text.trim()}`);
      }

      await worker.terminate();

      const fullText = allText.join("\n\n");
      const baseName = file.name.replace(/\.pdf$/i, "");
      const filename = `${baseName}_ocr.txt`;

      setResult({ text: fullText, filename });

      // Auto-download text result
      downloadBlob(encoder.encode(fullText), filename, "text/plain");

      setProgress(null);
      setProcessing(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : dict.workspace.ocrError
      );
      setProgress(null);
      setProcessing(false);
    }
  }, [file, language, outputFormat]);

  // ─── Language label ───
  const langLabel = (l: LangOption): string => {
    switch (l) {
      case "eng":
        return dict.workspace.ocrLangEn;
      case "chi_sim+eng":
        return dict.workspace.ocrLangZh;
      case "jpn+eng":
        return dict.workspace.ocrLangJa;
    }
  };

  // ─── Output format label ───
  const formatLabel = (f: OutputFormat): string => {
    switch (f) {
      case "text":
        return dict.workspace.ocrFormatText;
      case "pdf-with-text-layer":
        return dict.workspace.ocrFormatPdf;
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
      {!file && !processing && (
        <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />
      )}

      {/* File info + options */}
      {file && !processing && !result && !error && (
        <div className="mt-4 space-y-4">
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

          {/* Language selection */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.ocrLanguage}
            </p>
            <div className="flex gap-2">
              {(["eng", "chi_sim+eng", "jpn+eng"] as LangOption[]).map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setLanguage(opt)}
                    className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                      language === opt
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                    }`}
                  >
                    {langLabel(opt)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Output format selection */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.ocrOutputFormat}
            </p>
            <div className="flex gap-2">
              {(["text", "pdf-with-text-layer"] as OutputFormat[]).map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setOutputFormat(opt)}
                    className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                      outputFormat === opt
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                    }`}
                  >
                    {formatLabel(opt)}
                  </button>
                )
              )}
            </div>
            {outputFormat === "pdf-with-text-layer" && (
              <p className="mt-2 text-[11px] text-gray-400">
                <em>Currently outputs plain text. PDF with text layer coming soon.</em>
              </p>
            )}
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

      {/* Processing state with progress */}
      {processing && (
        <div className="mt-4 flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            {dict.workspace.processing}
          </p>
          {progress && (
            <div className="mt-3 space-y-2">
              <p className="text-sm text-purple-500">{progress.status}</p>
              {progress.totalPages > 0 && (
                <p className="text-xs text-purple-400">
                  Page {progress.page} of {progress.totalPages}
                </p>
              )}
              {/* Progress bar */}
              <div className="h-2 w-64 overflow-hidden rounded-full bg-purple-200 dark:bg-purple-800">
                <div
                  className="h-full rounded-full bg-purple-600 transition-all duration-300"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
              <p className="text-xs text-purple-400">{progress.percent}%</p>
            </div>
          )}
        </div>
      )}

      {/* Result state */}
      {result && !processing && (
        <div className="mt-4 rounded-2xl border-2 border-green-200 bg-green-50/50 p-6 text-center dark:border-green-800 dark:bg-green-950/20">
          <div className="mb-3 text-3xl">✅</div>
          <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-400">
            {dict.workspace.done}
          </h3>
          <p className="mb-4 text-sm text-green-700 dark:text-green-500">
            OCR complete! Text has been downloaded as{" "}
            <strong>{result.filename}</strong>.
          </p>
          <div className="mb-4 max-h-60 overflow-auto rounded-lg bg-white p-4 text-left text-xs text-gray-700 dark:bg-gray-900 dark:text-gray-300">
            <pre className="whitespace-pre-wrap">{result.text.slice(0, 1000)}</pre>
            {result.text.length > 1000 && (
              <p className="mt-2 text-gray-400">
                ... {result.text.length - 1000} more characters
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleClear}
              className="rounded-xl border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
            >
              {dict.workspace.startOver}
            </button>
          </div>
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
      {!file && !processing && !result && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}
