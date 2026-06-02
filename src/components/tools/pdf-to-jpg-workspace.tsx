// ─── PDF to JPG Workspace ───
// Interactive PDF-to-JPG converter with quality slider and resolution scale options.
// Uses PDF.js to render each page to Canvas → exports as JPG → bundles into ZIP.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { t } from "@/lib/i18n";
import { createZipAndDownload } from "@/lib/zip-utils";

const SCALE_OPTIONS = [1, 1.5, 2, 3];

export function PdfToJpgWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(0.9);
  const [scale, setScale] = useState(2);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [result, setResult] = useState<{ totalPages: number; zipName: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ─── Handle file selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setResult(null);
    setError(null);
  }, []);

  // ─── Convert PDF to JPG pages → ZIP ───
  const handleConvert = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setProgress(dict.workspace.loadingFiles);
    setError(null);
    setResult(null);

    try {
      const pdfjsLib = await getPdfjs();
      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      const totalPages = pdf.numPages;
      const baseName = file.name.replace(/\.pdf$/i, "") || "document";

      const zipFiles: { name: string; data: Uint8Array; mime: string }[] = [];

      for (let i = 1; i <= totalPages; i++) {
        setProgress(`Page ${i}/${totalPages}...`);
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;

        await (page.render as any)({ canvasContext: ctx, viewport }).promise;

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        const raw = atob(dataUrl.split(",")[1]);
        const bytes = new Uint8Array(raw.length);
        for (let j = 0; j < raw.length; j++) {
          bytes[j] = raw.charCodeAt(j);
        }

        zipFiles.push({
          name: `${baseName}_page_${i}.jpg`,
          data: bytes,
          mime: "image/jpeg",
        });
      }

      setResult({ totalPages, zipName: `${baseName}.zip` });
      setProgress(null);

      // Trigger ZIP download
      await createZipAndDownload(zipFiles, `${baseName}.zip`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while converting the PDF to JPG."
      );
      setProgress(null);
    } finally {
      setProcessing(false);
    }
  }, [file, quality, scale, dict]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setProgress(null);
  }, []);

  // ─── Quality label ───
  const qualityLabel = (q: number): string => {
    if (q >= 0.95) return "100%";
    if (q >= 0.8) return "90%";
    if (q >= 0.6) return "70%";
    if (q >= 0.4) return "50%";
    return "30%";
  };

  // ─── Scale label ───
  const scaleLabel = (s: number): string => {
    if (s === 1) return "1× (Original)";
    if (s === 1.5) return "1.5×";
    if (s === 2) return "2× (HD)";
    if (s === 3) return "3× (Retina)";
    return `${s}×`;
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
      {file && !processing && !result && !error && (
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

          {/* Quality slider */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Quality
              </p>
              <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                {qualityLabel(quality)}
              </span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.05"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
              className="w-full accent-purple-600"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-400">
              <span>Smaller</span>
              <span>Better</span>
            </div>
          </div>

          {/* Resolution scale */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Resolution
            </p>
            <div className="flex flex-wrap gap-2">
              {SCALE_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setScale(s)}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                    scale === s
                      ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                      : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                  }`}
                >
                  {scaleLabel(s)}
                </button>
              ))}
            </div>
          </div>

          {/* Convert button */}
          <button
            onClick={handleConvert}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            Convert to JPG
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

      {/* Result / Success state */}
      {result && !processing && (
        <div className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-6 text-center dark:border-green-800 dark:bg-green-950/20">
          <div className="mb-3 text-3xl">✅</div>
          <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-400">
            {dict.workspace.done}
          </h3>
          <p className="mb-4 text-sm text-green-700 dark:text-green-500">
            {result.totalPages} pages converted → JPG · ZIP downloaded
          </p>

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
          Upload a PDF to convert each page to a JPG image
        </p>
      )}
    </div>
  );
}
