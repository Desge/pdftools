// ─── Tool Workspace ───
// Client component: handles file upload, processing, progress, and download.
// Maps tool slug → real pdf-lib / pdfjs-dist processing.
"use client";

import { useState, useCallback } from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { runToolProcessor, downloadResult, hasProcessor } from "@/lib/tool-processors";

export interface ToolWorkspaceProps {
  slug: string;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
}

export function ToolWorkspace({
  slug,
  accept = ".pdf",
  multiple = true,
  maxSizeMB = 100,
}: ToolWorkspaceProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [result, setResult] = useState<{
    message: string;
    ready: boolean;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [resultData, setResultData] = useState<Awaited<ReturnType<typeof runToolProcessor>> | null>(null);

  const handleFiles = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
    setResult(null);
    setError(null);
    setResultData(null);
  }, []);

  const handleProcess = useCallback(async () => {
    if (files.length === 0) return;

    setProcessing(true);
    setProgress("Loading files...");
    setError(null);
    setResult(null);

    try {
      const data = await runToolProcessor(slug, files, (msg) => {
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
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      setProgress(null);
    } finally {
      setProcessing(false);
    }
  }, [files, slug]);

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

  const isImplemented = hasProcessor(slug);

  // ─── File input config per tool ───
  const fileConfig = getFileConfig(slug) ?? { accept, multiple };

  return (
    <div>
      {/* Privacy badge */}
      <div className="mb-4 flex items-center justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Your files stay on your device — no upload
        </span>
      </div>

      {/* Dropzone (hidden during processing / after success) */}
      {!processing && !result && (
        <FileDropzone
          onFiles={handleFiles}
          accept={fileConfig.accept}
          multiple={fileConfig.multiple}
          maxSizeMB={maxSizeMB}
        />
      )}

      {/* Processing state */}
      {processing && (
        <div className="flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            Processing...
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
            Done!
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
                Download All ({resultData.files.length} files)
              </button>
            )}

            {/* Re-download single file */}
            {(resultData?.data || resultData?.dataUrl) && (
              <button
                onClick={handleDownloadAll}
                className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
              >
                Download Again
              </button>
            )}

            {/* Start over */}
            <button
              onClick={handleClear}
              className="rounded-xl border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
            >
              Start Over
            </button>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 text-center dark:border-red-800 dark:bg-red-950/20">
          <div className="mb-3 text-3xl">❌</div>
          <h3 className="mb-2 text-lg font-semibold text-red-800 dark:text-red-400">
            Error
          </h3>
          <p className="mb-4 text-sm text-red-700 dark:text-red-500">{error}</p>
          <button
            onClick={handleClear}
            className="rounded-xl border-2 border-red-300 bg-white px-6 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 dark:border-red-700 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-red-950"
          >
            Try Again
          </button>
        </div>
      )}

      {/* File list (before processing) */}
      {files.length > 0 && !processing && !result && !error && (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Selected ({files.length} file{files.length !== 1 ? "s" : ""})
            </h3>
            <button
              onClick={handleClear}
              className="text-xs text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
            >
              Clear
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
                <span className="ml-2 shrink-0 text-xs text-gray-500">
                  {(file.size / 1024).toFixed(0)} KB
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
              ? "Process Files"
              : "Try (Preview)"}
          </button>

          {!isImplemented && (
            <p className="mt-3 text-center text-xs text-amber-600 dark:text-amber-400">
              ⚠️ This tool is in preview mode. Full implementation coming soon.
            </p>
          )}
        </div>
      )}

      {/* Empty hint (no files yet) */}
      {files.length === 0 && !processing && !result && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {isImplemented
            ? "Select files above to get started."
            : "🚧 This tool implementation is coming soon. The file handling infrastructure is ready."}
        </p>
      )}
    </div>
  );
}

// ─── File config per tool ───
function getFileConfig(slug: string): { accept: string; multiple: boolean } | null {
  const configs: Record<string, { accept: string; multiple: boolean }> = {
    "merge-pdf": { accept: ".pdf", multiple: true },
    "split-pdf": { accept: ".pdf", multiple: false },
    "compress-pdf": { accept: ".pdf", multiple: false },
    "pdf-to-jpg": { accept: ".pdf", multiple: false },
    "pdf-to-png": { accept: ".pdf", multiple: false },
    "pdf-to-text": { accept: ".pdf", multiple: false },
    "pdf-to-word": { accept: ".pdf", multiple: false },
    "jpg-to-pdf": { accept: ".jpg,.jpeg,.png,.webp,.heic", multiple: true },
    "rotate-pdf": { accept: ".pdf", multiple: false },
    "watermark-pdf": { accept: ".pdf", multiple: false },
    "page-numbers": { accept: ".pdf", multiple: false },
    "edit-pdf": { accept: ".pdf", multiple: false },
    "organize-pdf": { accept: ".pdf", multiple: false },
    "crop-pdf": { accept: ".pdf", multiple: false },
    "protect-pdf": { accept: ".pdf", multiple: false },
    "unlock-pdf": { accept: ".pdf", multiple: false },
    "html-to-pdf": { accept: ".html,.htm", multiple: false },
    "markdown-to-pdf": { accept: ".md,.markdown", multiple: false },
    "heic-to-pdf": { accept: ".heic,.heif", multiple: true },
    "word-to-pdf": { accept: ".docx,.doc", multiple: false },
    "excel-to-pdf": { accept: ".xlsx,.xls", multiple: false },
    "epub-to-pdf": { accept: ".epub", multiple: false },
    "ocr-pdf": { accept: ".pdf", multiple: false },
  };
  return configs[slug] ?? null;
}
