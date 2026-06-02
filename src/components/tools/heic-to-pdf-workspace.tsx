// ─── HEIC to PDF Workspace ───
// Converts iPhone HEIC/HEIF photos to PDF with page size, orientation, and margin options.
// Uses heic2any to decode HEIC → PNG, then pdf-lib to embed into configurable PDF pages.
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { t } from "@/lib/i18n";
import { downloadBlob } from "@/lib/pdf-render";

type PageSizeOption = "A4" | "Letter" | "Original";
type OrientationOption = "auto" | "portrait" | "landscape";
type MarginOption = "none" | "small" | "medium" | "large";

const PAGE_SIZES: Record<Exclude<PageSizeOption, "Original">, [number, number]> = {
  A4: [595.28, 841.89],
  Letter: [612, 792],
};

const MARGIN_VALUES: Record<MarginOption, number> = {
  none: 0,
  small: 20,
  medium: 40,
  large: 60,
};

interface HeicPreview {
  id: string;
  name: string;
  size: number;
  blob: Blob;
}

export function HeicToPdfWorkspace() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [files, setFiles] = useState<HeicPreview[]>([]);
  const [pageSize, setPageSize] = useState<PageSizeOption>("A4");
  const [orientation, setOrientation] = useState<OrientationOption>("auto");
  const [margin, setMargin] = useState<MarginOption>("small");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string | null>(null);

  // ─── Handle file selection ───
  const handleFiles = useCallback(async (newFiles: File[]) => {
    if (newFiles.length === 0) return;

    const previews: HeicPreview[] = [];

    for (const f of newFiles) {
      const ext = f.name.split(".").pop()?.toLowerCase() || "";
      if (!["heic", "heif"].includes(ext)) continue;

      previews.push({
        id: `${f.name}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: f.name,
        size: f.size,
        blob: f,
      });
    }

    setFiles((prev) => [...prev, ...previews]);
    setError(null);
  }, []);

  // ─── Remove a file from the list ───
  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  // ─── Clear all ───
  const handleClear = useCallback(() => {
    setFiles([]);
    setError(null);
    setProgress(null);
  }, []);

  // ─── Process: HEIC → PNG → PDF ───
  const handleConvert = useCallback(async () => {
    if (files.length === 0) return;
    setProcessing(true);
    setError(null);
    setProgress("Decoding HEIC files...");

    try {
      const heic2any = (await import("heic2any")).default;
      const { PDFDocument } = await import("pdf-lib");
      const doc = await PDFDocument.create();

      for (let i = 0; i < files.length; i++) {
        const f = files[i];
        setProgress(`Converting ${f.name} (${i + 1}/${files.length})...`);

        // Decode HEIC → PNG blob via heic2any
        const pngBlob = await heic2any({ blob: f.blob, toType: "image/png" });
        const singleBlob = Array.isArray(pngBlob) ? pngBlob[0] : pngBlob;
        const imgBuffer = await singleBlob.arrayBuffer();

        // Get PNG dimensions by creating an Image
        const dataUrl = URL.createObjectURL(singleBlob);
        const { width: imgWidth, height: imgHeight } = await new Promise<{
          width: number;
          height: number;
        }>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve({ width: img.width, height: img.height });
          img.onerror = reject;
          img.src = dataUrl;
        });
        URL.revokeObjectURL(dataUrl);

        // Embed PNG into pdf-lib
        const image = await doc.embedPng(imgBuffer);

        // Determine page dimensions
        let pageWidth: number;
        let pageHeight: number;
        const marginPt = MARGIN_VALUES[margin];

        if (pageSize === "Original") {
          pageWidth = image.width + marginPt * 2;
          pageHeight = image.height + marginPt * 2;
        } else {
          const [pw, ph] = PAGE_SIZES[pageSize];
          if (
            orientation === "portrait" ||
            (orientation === "auto" && ph >= pw)
          ) {
            pageWidth = pw;
            pageHeight = ph;
          } else {
            pageWidth = ph;
            pageHeight = pw;
          }
        }

        const newPage = doc.addPage([pageWidth, pageHeight]);

        // Calculate image placement with margins
        const availableWidth = pageWidth - marginPt * 2;
        const availableHeight = pageHeight - marginPt * 2;

        const scaleX = availableWidth / image.width;
        const scaleY = availableHeight / image.height;
        const fitScale = Math.min(scaleX, scaleY, 1);

        const drawWidth = image.width * fitScale;
        const drawHeight = image.height * fitScale;
        const drawX = marginPt + (availableWidth - drawWidth) / 2;
        const drawY = marginPt + (availableHeight - drawHeight) / 2;

        newPage.drawImage(image, {
          x: drawX,
          y: drawY,
          width: drawWidth,
          height: drawHeight,
        });
      }

      setProgress("Generating PDF...");
      const pdfBytes = await doc.save();
      const baseName =
        files.length === 1
          ? files[0].name.replace(/\.(heic|heif)$/i, "")
          : "heic-images";
      downloadBlob(new Uint8Array(pdfBytes), `${baseName}.pdf`);

      setProgress(null);
      setProcessing(false);
      handleClear();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while creating the PDF."
      );
      setProgress(null);
      setProcessing(false);
    }
  }, [files, pageSize, orientation, margin]);

  // ─── Orientation label ───
  const orientationLabel = (o: OrientationOption): string => {
    switch (o) {
      case "auto":
        return dict.workspace.auto;
      case "portrait":
        return dict.workspace.portrait;
      case "landscape":
        return dict.workspace.landscape;
    }
  };

  // ─── Margin label ───
  const marginLabel = (m: MarginOption): string => {
    switch (m) {
      case "none":
        return dict.workspace.marginNone;
      case "small":
        return dict.workspace.marginSmall;
      case "medium":
        return dict.workspace.marginMedium;
      case "large":
        return dict.workspace.marginLarge;
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
        {files.length > 0 && (
          <button
            onClick={handleClear}
            className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
          >
            {dict.workspace.reset}
          </button>
        )}
      </div>

      {/* Dropzone */}
      {!processing && (
        <FileDropzone
          onFiles={handleFiles}
          accept=".heic,.heif"
          multiple={true}
        />
      )}

      {/* File list + options */}
      {files.length > 0 && !processing && (
        <div className="mt-4 space-y-4">
          {/* File list */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {files.length} HEIC file{files.length !== 1 ? "s" : ""}
              </p>
              <button
                onClick={handleClear}
                className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
              >
                {dict.workspace.clear}
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {files.map((f) => (
                <div
                  key={f.id}
                  className="group relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex h-full w-full items-center justify-center text-2xl text-gray-400">
                    🖼️
                  </div>
                  <button
                    onClick={() => handleRemoveFile(f.id)}
                    className="absolute right-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/50 text-xs text-white opacity-0 transition-opacity hover:bg-red-600 group-hover:opacity-100"
                    title={dict.workspace.remove}
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 truncate bg-black/40 px-1 py-0.5 text-[10px] text-white">
                    {f.name}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Total: {(files.reduce((sum, f) => sum + f.size, 0) / 1024 / 1024).toFixed(2)}{" "}
              {dict.workspace.mb}
            </p>
          </div>

          {/* Page size */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.pageSize}
            </p>
            <div className="flex gap-2">
              {(["A4", "Letter", "Original"] as PageSizeOption[]).map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setPageSize(opt)}
                    className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                      pageSize === opt
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                    }`}
                >
                  {opt === "A4" ? dict.workspace.a4 : opt === "Letter" ? dict.workspace.letter : dict.workspace.original}
                  </button>
                )
              )}
            </div>
            {pageSize === "A4" && (
              <p className="mt-2 text-[11px] text-gray-400">210 × 297 mm</p>
            )}
            {pageSize === "Letter" && (
              <p className="mt-2 text-[11px] text-gray-400">216 × 279 mm</p>
            )}
            {pageSize === "Original" && (
              <p className="mt-2 text-[11px] text-gray-400">
                {dict.workspace.original}
              </p>
            )}
          </div>

          {/* Orientation */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.orientation}
            </p>
            <div className="flex gap-2">
              {(["auto", "portrait", "landscape"] as OrientationOption[]).map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setOrientation(opt)}
                    className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                      orientation === opt
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                    }`}
                  >
                    {orientationLabel(opt)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Margins */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.margins}
            </p>
            <div className="flex gap-2">
              {(["none", "small", "medium", "large"] as MarginOption[]).map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setMargin(opt)}
                    className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                      margin === opt
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                        : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                    }`}
                  >
                    {marginLabel(opt)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Convert button */}
          <button
            onClick={handleConvert}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02]"
          >
            Create PDF ({files.length} {dict.workspace.files})
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
      {files.length === 0 && !processing && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}
