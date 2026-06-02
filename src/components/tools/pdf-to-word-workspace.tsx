// ─── PDF to Word Workspace ───
// Extracts text from PDF and generates a Word (DOCX) document.
// Uses pdfjs-dist to extract text, docx library to build the Word file.
// Supports page separator style and page number inclusion options.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import { downloadBlob } from "@/lib/pdf-render";

type PageSeparator = "page-break" | "continuous";
type IncludePageNumbers = boolean;

export function PdfToWordWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [file, setFile] = useState<File | null>(null);
  const [pageSeparator, setPageSeparator] = useState<PageSeparator>("page-break");
  const [includePageNumbers, setIncludePageNumbers] = useState<IncludePageNumbers>(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const [result, setResult] = useState<{ pageCount: number; filename: string } | null>(null);

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

  // ─── Process: PDF → DOCX ───
  const handleProcess = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);
    setResult(null);
    setProgress("Loading PDF...");

    try {
      const pdfjsLib = await import("pdfjs-dist");
      const { Document: DocxDocument, Packer, Paragraph, TextRun, HeadingLevel, PageBreak } = await import("docx");

      const buffer = await file.arrayBuffer();
      setProgress("Extracting text from PDF...");
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      const pageCount = pdf.numPages;
      const pageTexts: string[] = [];

      for (let i = 1; i <= pageCount; i++) {
        setProgress(`Reading page ${i}/${pageCount}...`);
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ");
        pageTexts.push(pageText);
      }

      setProgress(dict.workspace.buildingWord);

      const children: import("docx").Paragraph[] = [];

      for (let i = 0; i < pageTexts.length; i++) {
        const text = pageTexts[i].trim();

        // Page heading (if includePageNumbers is true)
        if (includePageNumbers) {
          children.push(
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              spacing: { before: i > 0 ? 400 : 0, after: 200 },
              children: [new TextRun({ text: `Page ${i + 1}`, bold: true, size: 28 })],
            })
          );
        }

        // Page content
        if (text) {
          children.push(
            new Paragraph({
              spacing: { after: 400 },
              children: [new TextRun({ text, size: 24 })],
            })
          );
        } else {
          children.push(
            new Paragraph({
              spacing: { after: 400 },
              children: [
                new TextRun({
                  text: "[No extractable text on this page]",
                  italics: true,
                  color: "888888",
                  size: 24,
                }),
              ],
            })
          );
        }

        // Page separator (except after last page)
        if (i < pageTexts.length - 1) {
          if (pageSeparator === "page-break") {
            children.push(new Paragraph({ children: [new PageBreak()] }));
          } else {
            // Continuous — just a horizontal rule-like separator
            children.push(
              new Paragraph({
                spacing: { before: 200, after: 200 },
                border: {
                  bottom: { style: "single", size: 6, color: "CCCCCC", space: 1 },
                },
                children: [],
              })
            );
          }
        }
      }

      const doc = new DocxDocument({
        sections: [
          {
            properties: {},
            children,
          },
        ],
      });

      setProgress(dict.workspace.generatingDocx);
      const blob = await Packer.toBlob(doc);
      const arr = await blob.arrayBuffer();

      const baseName = file.name.replace(/\.pdf$/i, "");
      const filename = `${baseName}.docx`;

      downloadBlob(new Uint8Array(arr), filename);

      setResult({ pageCount, filename });
      setProgress(null);
      setProcessing(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : dict.workspace.pdfToWordError
      );
      setProgress(null);
      setProcessing(false);
    }
  }, [file, pageSeparator, includePageNumbers]);

  // ─── Separator label ───
  const separatorLabel = (s: PageSeparator): string => {
    switch (s) {
      case "page-break":
        return dict.workspace.separatorPageBreak;
      case "continuous":
        return dict.workspace.separatorContinuous;
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
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-lg dark:bg-orange-900/30">
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

          {/* Page separator */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.pageSeparator}
            </p>
            <div className="flex gap-2">
              {(["page-break", "continuous"] as PageSeparator[]).map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setPageSeparator(opt)}
                    className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                      pageSeparator === opt
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                    }`}
                  >
                    {separatorLabel(opt)}
                  </button>
                )
              )}
            </div>
            {pageSeparator === "page-break" && (
              <p className="mt-2 text-[11px] text-gray-400">
                Each page starts on a new page in Word
              </p>
            )}
            {pageSeparator === "continuous" && (
              <p className="mt-2 text-[11px] text-gray-400">
                Pages flow continuously with a separator line
              </p>
            )}
          </div>

          {/* Include page numbers toggle */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {dict.workspace.includePageNumbers}
              </p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={includePageNumbers}
                  onChange={(e) => setIncludePageNumbers(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700" />
              </label>
            </div>
          </div>

          {/* Note */}
          <p className="text-xs text-gray-400">
            ⚠️ This tool extracts text only. Formatting, images, and tables are
            not preserved.
          </p>

          {/* Process button */}
          <button
            onClick={handleProcess}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            Convert to Word
          </button>
        </div>
      )}

      {/* Processing state */}
      {processing && (
        <div className="mt-4 flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            {dict.workspace.processing}
          </p>
          {progress && (
            <p className="mt-2 text-sm text-purple-500">{progress}</p>
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
            Converted {result.pageCount} page{result.pageCount !== 1 ? "s" : ""} to Word document.
            File downloaded as <strong>{result.filename}</strong>.
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
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}
