// ─── Compress PDF Workspace ───
// Offers 3 compression levels: Light, Standard, Maximum
// Uses pdf-render's compressPDF with configurable quality/scale.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import { compressPDF, downloadBlob } from "@/lib/pdf-render";

type CompressionLevel = "light" | "standard" | "maximum";

interface LevelConfig {
  quality: number;
  scale: number;
}

const LEVEL_CONFIGS: Record<CompressionLevel, LevelConfig> = {
  light: { quality: 0.7, scale: 1.5 },
  standard: { quality: 0.45, scale: 2.0 },
  maximum: { quality: 0.2, scale: 1.5 },
};

export function CompressPdfWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);
  const cl = dict.workspace.compressLevels;

  const [file, setFile] = useState<File | null>(null);
  const [level, setLevel] = useState<CompressionLevel>("standard");
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

  // ─── Compress ───
  const handleCompress = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setProgress(dict.workspace.loadingFiles);
    setError(null);
    setResult(null);

    try {
      const buffer = await file.arrayBuffer();
      const origSize = buffer.byteLength;
      const config = LEVEL_CONFIGS[level];
      setProgress("Compressing...");

      const compressed = await compressPDF(buffer, {
        quality: config.quality,
        format: "image/jpeg",
        scale: config.scale,
      });

      const newSize = compressed.byteLength;
      const reduction = ((1 - newSize / origSize) * 100).toFixed(1);
      const baseName = file.name.replace(/\.pdf$/i, "");
      const message = `${dict.workspace.done} Compressed from ${(origSize / 1024 / 1024).toFixed(1)}MB to ${(newSize / 1024 / 1024).toFixed(1)}MB (${reduction}% reduction).`;

      setResult({
        message,
        data: compressed,
        filename: `${baseName}_compressed.pdf`,
      });
      setProgress(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.unexpectedError);
      setProgress(null);
    } finally {
      setProcessing(false);
    }
  }, [file, level, dict]);

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

  // ─── Level labels ───
  const levelLabel = (lvl: CompressionLevel): string => {
    switch (lvl) {
      case "light": return cl.light;
      case "standard": return cl.standard;
      case "maximum": return cl.maximum;
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

          {/* Compression level selection */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {cl.label}
            </p>
            <div className="flex gap-2">
              {(["light", "standard", "maximum"] as CompressionLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                    level === lvl
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                  }`}
                >
                  {levelLabel(lvl)}
                </button>
              ))}
            </div>
          </div>

          {/* Compress button */}
          <button
            onClick={handleCompress}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            Compress ({levelLabel(level)})
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
