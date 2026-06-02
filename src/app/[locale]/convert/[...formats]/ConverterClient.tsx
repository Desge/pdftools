// ─── Converter Client Component ───
// Client component for conversion pages: file upload → processing → download.
"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { runToolProcessor, downloadResult, hasProcessor } from "@/lib/tool-processors";
import { t } from "@/lib/i18n";
import type { ConversionPair } from "@/lib/types";

interface ConverterClientProps {
  pair: ConversionPair;
  locale?: string;
}

/** Map a conversion slug to an accept string for the file input */
function getAcceptForPair(pair: ConversionPair): string {
  const acceptMap: Record<string, string> = {
    pdf: ".pdf",
    jpg: ".jpg,.jpeg",
    jpeg: ".jpg,.jpeg",
    png: ".png",
    webp: ".webp",
    gif: ".gif",
    bmp: ".bmp",
    tiff: ".tiff,.tif",
    svg: ".svg",
    heic: ".heic,.heif",
    docx: ".docx,.doc",
    xlsx: ".xlsx,.xls",
    pptx: ".pptx,.ppt",
    txt: ".txt",
    rtf: ".rtf",
    html: ".html,.htm",
    md: ".md,.markdown",
    csv: ".csv",
    json: ".json",
    xml: ".xml",
    epub: ".epub",
    mobi: ".mobi",
    azw3: ".azw3",
    odt: ".odt",
    latex: ".tex,.latex",
    ico: ".ico",
    avif: ".avif",
  };
  return acceptMap[pair.from.ext] ?? `.${pair.from.ext}`;
}

/** Determine whether the file dropzone should accept multiple files */
function getMultipleForPair(pair: ConversionPair): boolean {
  // Image-to-PDF conversions typically accept multiple files
  if (pair.from.category === "image" && pair.to.ext === "pdf") return true;
  return false;
}

export function ConverterClient({ pair, locale: localeProp }: ConverterClientProps) {
  // Use the provided locale or fallback
  const dict = t(localeProp ?? "en");

  // Read URL search params for sharing
  const searchParams = useSearchParams();
  const urlParam = searchParams?.get("url") ?? "";

  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    message: string;
    ready: boolean;
  } | null>(null);
  const [resultData, setResultData] = useState<Awaited<ReturnType<typeof runToolProcessor>> | null>(null);
  const [remoteUrl, setRemoteUrl] = useState(urlParam);
  const [fetchingRemote, setFetchingRemote] = useState(false);

  const handleFiles = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
    setResult(null);
    setError(null);
    setResultData(null);
  }, []);

  const handleProcess = useCallback(async () => {
    if (files.length === 0) return;

    setProcessing(true);
    setProgress(dict.workspace.loadingFiles);
    setError(null);
    setResult(null);

    try {
      const data = await runToolProcessor(pair.slug, files, (msg) => {
        setProgress(msg);
      });
      setResultData(data);
      setResult({ message: data.message, ready: true });
      setProgress(null);

      // Auto-download single-file results
      if ((data.data && data.filename) || (data.dataUrl && data.filename)) {
        downloadResult(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.unexpectedError);
      setProgress(null);
    } finally {
      setProcessing(false);
    }
  }, [files, pair.slug, dict]);

  const handleDownloadAll = useCallback(() => {
    if (resultData) downloadResult(resultData);
  }, [resultData]);

  const handleClear = useCallback(() => {
    setFiles([]);
    setResult(null);
    setError(null);
    setProgress(null);
    setResultData(null);
  }, []);

  const handleFetchRemote = useCallback(async () => {
    if (!remoteUrl) return;
    setFetchingRemote(true);
    setError(null);
    setProgress(dict.workspace.loadingFiles);
    try {
      const response = await fetch(remoteUrl);
      if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
      const blob = await response.blob();
      const fileName = remoteUrl.split("/").pop() || "file";
      const file = new File([blob], fileName, { type: blob.type });
      setFiles([file]);
      setRemoteUrl("");
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.unexpectedError);
    } finally {
      setFetchingRemote(false);
      setProgress(null);
    }
  }, [remoteUrl, dict]);

  const isImplemented = hasProcessor(pair.slug);
  const showConverter = pair.clientSide && pair.quality >= 3;

  // ─── Coming Soon state ───
  if (!showConverter) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-yellow-300 bg-yellow-50 p-12 text-center dark:border-yellow-800 dark:bg-yellow-950/20">
        <p className="mb-2 text-lg font-medium text-yellow-800 dark:text-yellow-400">
          {dict.convert.comingSoon}
        </p>
        <p className="text-sm text-yellow-700 dark:text-yellow-500">
          {dict.convert.comingSoonDesc}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Privacy badge */}
      <div className="mb-4 flex items-center justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {dict.workspace.privacyBadge}
        </span>
      </div>

      {/* Dropzone (hidden during processing / after success) */}
      {!processing && !result && (
        <FileDropzone
          onFiles={handleFiles}
          accept={getAcceptForPair(pair)}
          multiple={getMultipleForPair(pair)}
          maxSizeMB={100}
        />
      )}

      {/* URL input (when no files selected yet) */}
      {files.length === 0 && !processing && !result && !error && (
        <div className="mt-4">
          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="url"
                value={remoteUrl}
                onChange={(e) => setRemoteUrl(e.target.value)}
                placeholder="https://example.com/file.pdf"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 pe-10 text-sm text-gray-700 placeholder-gray-400 transition-colors focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:border-purple-500 dark:focus:ring-purple-900/40"
              />
              {remoteUrl && (
                <button
                  onClick={() => setRemoteUrl("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Clear URL"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <button
              onClick={handleFetchRemote}
              disabled={!remoteUrl || fetchingRemote}
              className="gradient-brand shrink-0 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {fetchingRemote ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  {dict.workspace.loadingFiles}
                </span>
              ) : (
                dict.workspace.processFiles
              )}
            </button>
          </div>
          <p className="mt-1.5 text-center text-xs text-gray-400">
            {dict.workspace.selectHint}
          </p>
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

      {/* Success state */}
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
            {/* Download button for multi-file results */}
            {resultData?.files && resultData.files.length > 1 && (
              <button
                onClick={handleDownloadAll}
                className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
              >
                {dict.workspace.downloadAll(resultData.files.length)}
              </button>
            )}

            {/* Re-download single file */}
            {(resultData?.data || resultData?.dataUrl) && (
              <button
                onClick={handleDownloadAll}
                className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
              >
                {dict.workspace.downloadAgain}
              </button>
            )}

            {/* Start over */}
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
        <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 text-center dark:border-red-800 dark:bg-red-950/20">
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

      {/* File list (before processing) */}
      {files.length > 0 && !processing && !result && !error && (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.selected(files.length)}
            </h3>
            <button
              onClick={handleClear}
              className="text-xs text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
            >
              {dict.workspace.clear}
            </button>
          </div>

          <ul className="mb-4 max-h-48 space-y-1.5 overflow-y-auto">
            {files.map((file, i) => (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-800"
              >
                <span className="truncate text-gray-700 dark:text-gray-300">
                  {file.name}
                </span>
                <span className="ms-2 shrink-0 text-xs text-gray-500">
                  {(file.size / 1024).toFixed(0)} {dict.workspace.kb}
                </span>
              </li>
            ))}
          </ul>

          {/* Process button */}
          <button
            onClick={handleProcess}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            {isImplemented
              ? dict.workspace.processFiles
              : dict.workspace.previewOnly}
          </button>

          {!isImplemented && (
            <p className="mt-3 text-center text-xs text-amber-600 dark:text-amber-400">
              {dict.workspace.previewWarning}
            </p>
          )}
        </div>
      )}

      {/* Empty hint (no files yet) */}
      {files.length === 0 && !processing && !result && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}

// Default export for next/dynamic compatibility
export default ConverterClient;
