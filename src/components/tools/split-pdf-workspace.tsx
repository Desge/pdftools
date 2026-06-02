// ─── Split PDF Workspace ───
// Offers advanced split options: every page, by range, extract pages, every N pages.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import {
  splitPDF,
  splitPDFByRange,
  extractPDFPages,
  splitPDFEveryN,
} from "@/lib/pdf-utils";
import { createZipAndDownload } from "@/lib/zip-utils";
import { downloadBlob } from "@/lib/pdf-render";

type SplitMode = "every-page" | "by-range" | "extract-pages" | "every-n";

export function SplitPdfWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);
  const ws = dict.workspace;

  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<SplitMode>("every-page");
  const [rangeInput, setRangeInput] = useState("");
  const [pagesInput, setPagesInput] = useState("");
  const [nInput, setNInput] = useState("2");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [result, setResult] = useState<{
    message: string;
    files?: { name: string; data: Uint8Array; mime: string }[];
    data?: Uint8Array;
    filename?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ─── Helpers ───

  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setResult(null);
    setError(null);
  }, []);

  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setProgress(null);
  }, []);

  // ─── Parse range input like "1-3,4-6,7-10" ───
  const parseRanges = (input: string): { start: number; end: number }[] => {
    const parts = input.split(",").map((s) => s.trim());
    const ranges: { start: number; end: number }[] = [];
    for (const part of parts) {
      const match = part.match(/^(\d+)\s*-\s*(\d+)$/);
      if (!match) {
        throw new Error(ws.invalidRange);
      }
      const start = parseInt(match[1], 10);
      const end = parseInt(match[2], 10);
      if (start > end) {
        throw new Error(ws.invalidRange);
      }
      ranges.push({ start, end });
    }
    if (ranges.length === 0) throw new Error(ws.invalidRange);
    return ranges;
  };

  // ─── Parse page numbers input like "1,3,5,7" ───
  const parsePageNumbers = (input: string): number[] => {
    const parts = input.split(",").map((s) => s.trim());
    const nums: number[] = [];
    for (const part of parts) {
      const n = parseInt(part, 10);
      if (isNaN(n) || n < 1) {
        throw new Error(ws.invalidRange);
      }
      nums.push(n);
    }
    if (nums.length === 0) throw new Error(ws.invalidRange);
    return nums;
  };

  // ─── Process ───
  const handleProcess = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setProgress(ws.loadingFiles);
    setError(null);
    setResult(null);

    try {
      const buffer = await file.arrayBuffer();
      const baseName = file.name.replace(/\.pdf$/i, "");

      setProgress("Splitting pages...");

      if (mode === "every-page") {
        const pages = await splitPDF(buffer);
        setResult({
          message: `Split into ${pages.length} individual pages.`,
          files: pages.map((data, i) => ({
            name: `${baseName}_page_${i + 1}.pdf`,
            data,
            mime: "application/pdf",
          })),
        });
      } else if (mode === "by-range") {
        const ranges = parseRanges(rangeInput);
        const results = await splitPDFByRange(buffer, ranges);
        setResult({
          message: `Split into ${results.length} range file${results.length !== 1 ? "s" : ""}.`,
          files: results.map((data, i) => ({
            name: `${baseName}_range_${i + 1}.pdf`,
            data,
            mime: "application/pdf",
          })),
        });
      } else if (mode === "extract-pages") {
        const pageNums = parsePageNumbers(pagesInput);
        const extracted = await extractPDFPages(buffer, pageNums);
        const pageLabel = pageNums.length === 1 ? "page" : "pages";
        setResult({
          message: `Extracted ${pageNums.length} ${pageLabel}.`,
          data: extracted,
          filename: `${baseName}_extracted.pdf`,
        });
      } else if (mode === "every-n") {
        const n = parseInt(nInput, 10);
        if (isNaN(n) || n < 1) {
          throw new Error("N must be at least 1.");
        }
        const results = await splitPDFEveryN(buffer, n);
        setResult({
          message: `Split into ${results.length} file${results.length !== 1 ? "s" : ""} (every ${n} page${n !== 1 ? "s" : ""}).`,
          files: results.map((data, i) => ({
            name: `${baseName}_part_${i + 1}.pdf`,
            data,
            mime: "application/pdf",
          })),
        });
      }

      setProgress(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : ws.unexpectedError);
      setProgress(null);
    } finally {
      setProcessing(false);
    }
  }, [file, mode, rangeInput, pagesInput, nInput, ws]);

  // ─── Download ───
  const handleDownload = useCallback(() => {
    if (!result) return;
    if (result.data && result.filename) {
      downloadBlob(result.data, result.filename);
    } else if (result.files) {
      if (result.files.length === 1) {
        downloadBlob(result.files[0].data, result.files[0].name, result.files[0].mime);
      } else {
        createZipAndDownload(result.files, `${file?.name.replace(/\.pdf$/i, "") || "split"}.zip`);
      }
    }
  }, [result, file]);

  // ─── Radio option ───
  const modeOptions: { value: SplitMode; label: string }[] = [
    { value: "every-page", label: ws.splitEveryPage },
    { value: "by-range", label: ws.splitByRange },
    { value: "extract-pages", label: ws.extractPages },
    { value: "every-n", label: ws.splitEveryN },
  ];

  return (
    <div>
      {/* Privacy badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {ws.privacyBadge}
        </span>
        {file && (
          <button
            onClick={handleClear}
            className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
          >
            {ws.reset}
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
                  {(file.size / 1024).toFixed(1)} {ws.kb}
                </p>
              </div>
            </div>
          </div>

          {/* Split mode selection */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {ws.splitMode}
            </p>
            <div className="flex flex-wrap gap-2">
              {modeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setMode(opt.value)}
                  className={`rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-all ${
                    mode === opt.value
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mode-specific inputs */}
          {mode === "by-range" && (
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {ws.rangePlaceholder}
              </label>
              <input
                type="text"
                value={rangeInput}
                onChange={(e) => setRangeInput(e.target.value)}
                placeholder={ws.rangePlaceholder}
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-purple-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-purple-500"
              />
            </div>
          )}

          {mode === "extract-pages" && (
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {ws.pagesPlaceholder}
              </label>
              <input
                type="text"
                value={pagesInput}
                onChange={(e) => setPagesInput(e.target.value)}
                placeholder={ws.pagesPlaceholder}
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-purple-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-purple-500"
              />
            </div>
          )}

          {mode === "every-n" && (
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {ws.nPlaceholder}
              </label>
              <input
                type="number"
                min={1}
                value={nInput}
                onChange={(e) => setNInput(e.target.value)}
                placeholder={ws.nPlaceholder}
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-purple-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:border-purple-500"
              />
            </div>
          )}

          {/* Process button */}
          <button
            onClick={handleProcess}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            {ws.processFiles}
          </button>
        </div>
      )}

      {/* Processing state */}
      {processing && (
        <div className="flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            {ws.processing}
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
            {ws.done}
          </h3>
          <p className="mb-4 text-sm text-green-700 dark:text-green-500">
            {result.message}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {result.files && result.files.length > 1 && (
              <button
                onClick={handleDownload}
                className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
              >
                {ws.downloadAll(result.files.length)}
              </button>
            )}
            {((result.data && result.filename) ||
              (result.files && result.files.length === 1)) && (
              <button
                onClick={handleDownload}
                className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
              >
                {ws.downloadAgain}
              </button>
            )}
            <button
              onClick={handleClear}
              className="rounded-xl border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
            >
              {ws.startOver}
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 text-center dark:border-red-800 dark:bg-red-950/20">
          <div className="mb-3 text-3xl">❌</div>
          <h3 className="mb-2 text-lg font-semibold text-red-800 dark:text-red-400">
            {ws.error}
          </h3>
          <p className="mb-4 text-sm text-red-700 dark:text-red-500">{error}</p>
          <button
            onClick={handleClear}
            className="rounded-xl border-2 border-red-300 bg-white px-6 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 dark:border-red-700 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-red-950"
          >
            {ws.tryAgain}
          </button>
        </div>
      )}

      {/* Empty hint */}
      {!file && !processing && !result && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {ws.selectHint}
        </p>
      )}
    </div>
  );
}
