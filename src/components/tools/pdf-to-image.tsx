// ─── PDF to Image Workspace ───
// Interactive PDF-to-image converter: choose format (PNG/JPG), quality, and scale.
// Uses PDF.js to render each page to Canvas and export as downloadable images.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { t } from "@/lib/i18n";
import { downloadDataUrl } from "@/lib/pdf-render";
import { createZipAndDownload } from "@/lib/zip-utils";

type OutputFormat = "image/png" | "image/jpeg";

interface PageResult {
  dataUrl: string;
  pageNum: number;
  width: number;
  height: number;
  sizeKB: number;
}

export function PdfToImage() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);
  const pt = dict.pdfToImage;

  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<OutputFormat>("image/jpeg");
  const [quality, setQuality] = useState(0.9);
  const [scale, setScale] = useState(2);
  const [pages, setPages] = useState<PageResult[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(true);

  // ─── Handle file selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setPages([]);
    setError(null);
  }, []);

  // ─── Convert PDF to images ───
  const handleConvert = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    setPages([]);
    setProgress(pt.renderingPages);

    try {
      const pdfjsLib = await getPdfjs();
      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      const totalPages = pdf.numPages;

      const results: PageResult[] = [];

      for (let i = 1; i <= totalPages; i++) {
        setProgress(`${pt.pageLabel} ${i}/${totalPages}...`);
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;

        // Render PDF page to canvas
        await (page.render as any)({ canvasContext: ctx, viewport }).promise;

        // Export as data URL in chosen format
        const mimeType = format;
        const dataUrl =
          format === "image/jpeg"
            ? canvas.toDataURL(mimeType, quality)
            : canvas.toDataURL(mimeType);

        // Estimate size from base64 length
        const base64Len = dataUrl.split(",")[1]?.length || 0;
        const sizeKB = Math.round((base64Len * 0.75) / 1024);

        results.push({
          dataUrl,
          pageNum: i,
          width: viewport.width,
          height: viewport.height,
          sizeKB,
        });
      }

      setPages(results);
      setProgress(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while converting the PDF."
      );
    } finally {
      setProcessing(false);
      setProgress(null);
    }
  }, [file, format, quality, scale, pt]);

  // ─── Download a single page ───
  const handleDownloadPage = useCallback(
    (pageResult: PageResult) => {
      const ext = format === "image/png" ? "png" : "jpg";
      const baseName = file?.name.replace(/\.pdf$/i, "") || "page";
      downloadDataUrl(
        pageResult.dataUrl,
        `${baseName}_page_${pageResult.pageNum}.${ext}`
      );
    },
    [file, format]
  );

  // ─── Download all pages as ZIP ───
  const handleDownloadAll = useCallback(() => {
    const ext = format === "image/png" ? "png" : "jpg";
    const baseName = file?.name.replace(/\\.pdf$/i, "") || "pages";
    const zipFiles = pages.map((p) => ({
      name: `${baseName}_page_${p.pageNum}.${ext}`,
      data: new Uint8Array(
        atob(p.dataUrl.split(",")[1])
          .split("")
          .map((c) => c.charCodeAt(0))
      ),
      mime: format === "image/png" ? "image/png" : "image/jpeg",
    }));
    createZipAndDownload(zipFiles, `${baseName}.zip`);
  }, [pages, file, format]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setPages([]);
    setError(null);
    setProgress(null);
  }, []);

  // ─── Quality description ───
  const qualityLabel = (q: number): string => {
    if (q >= 0.95) return "100%";
    if (q >= 0.8) return "90%";
    if (q >= 0.6) return "70%";
    if (q >= 0.4) return "50%";
    return "30%";
  };

  // ─── Scale label ───
  const scaleLabel = (s: number): string => {
    if (s === 0.5) return "0.5× (Half)";
    if (s === 1) return "1× (Original)";
    if (s === 1.5) return "1.5×";
    if (s === 2) return "2× (HD)";
    if (s === 3) return "3× (Retina)";
    if (s === 4) return "4× (Ultra HD)";
    return `${s}×`;
  };

  const ext = format === "image/png" ? "png" : "jpg";

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
      {file && !processing && pages.length === 0 && !error && (
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

          {/* Format selection */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {pt.formatLabel}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setFormat("image/jpeg")}
                className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                  format === "image/jpeg"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                }`}
              >
                {pt.jpgOption}
              </button>
              <button
                onClick={() => setFormat("image/png")}
                className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                  format === "image/png"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                }`}
              >
                {pt.pngOption}
              </button>
            </div>
          </div>

          {/* Quality slider (JPEG only) */}
          {format === "image/jpeg" && (
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {pt.qualityLabel}
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
          )}

          {/* Scale / resolution */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {pt.scaleLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {[0.5, 1, 1.5, 2, 3, 4].map((s) => (
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
            {pt.convertBtn}
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

      {/* Results: page previews */}
      {pages.length > 0 && !processing && (
        <div className="space-y-4">
          {/* Success banner */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50/50 p-4 text-center dark:border-green-800 dark:bg-green-950/20">
            <div className="mb-1 text-2xl">✅</div>
            <h3 className="text-sm font-semibold text-green-800 dark:text-green-400">
              {dict.workspace.done}
            </h3>
            <p className="mt-1 text-xs text-green-700 dark:text-green-500">
              {pages.length} {dict.workspace.pages} → {pages.length} .{ext}{" "}
              {pt.preview}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleDownloadAll}
              className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
            >
              {pt.downloadAll} ({pages.length})
            </button>

            <button
              onClick={handleClear}
              className="rounded-xl border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
            >
              {dict.workspace.startOver}
            </button>
          </div>

          {/* Toggle preview visibility */}
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {showPreview ? "▼" : "▶"}{" "}
            {showPreview ? "Hide previews" : "Show previews"}
          </button>

          {/* Page previews grid */}
          {showPreview && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((p) => (
                <div
                  key={p.pageNum}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.dataUrl}
                      alt={`Page ${p.pageNum}`}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Page info + download */}
                  <div className="flex items-center justify-between border-t border-gray-100 px-3 py-2 dark:border-gray-800">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {pt.pageLabel} {p.pageNum}
                      </span>
                      <span className="ms-2">
                        {p.width}×{p.height}
                      </span>
                      <span className="ms-2">{p.sizeKB} KB</span>
                    </div>
                    <button
                      onClick={() => handleDownloadPage(p)}
                      className="rounded-lg bg-purple-100 px-2.5 py-1 text-xs font-semibold text-purple-700 transition-colors hover:bg-purple-200 dark:bg-purple-900/40 dark:text-purple-400 dark:hover:bg-purple-900/60"
                      title={pt.downloadPage}
                    >
                      ⬇
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Empty hint (when no file selected and no results) */}
      {!file && pages.length === 0 && !processing && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {pt.noFile}
        </p>
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
    </div>
  );
}
