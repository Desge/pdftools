// ─── Rotate PDF Workspace ───
// Interactive PDF rotator: select angle (90°/180°/270°), rotate, and download
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";
import { t } from "@/lib/i18n";

const ANGLE_OPTIONS = [90, 180, 270] as const;
type RotateAngle = (typeof ANGLE_OPTIONS)[number];

export function RotatePdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState<RotateAngle>(90);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  // ─── Handle file selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setError(null);
  }, []);

  // ─── Rotate and download ───
  const handleRotate = useCallback(async () => {
    if (!file) return;
    setProcessing(true);
    setError(null);

    try {
      const { PDFDocument, degrees } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const doc = await PDFDocument.load(buf);
      const pages = doc.getPages();

      for (const page of pages) {
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + angle));
      }

      const resultBytes = await doc.save();
      const baseName = file.name.replace(/\.pdf$/i, "");
      downloadBlob(resultBytes, `${baseName}_rotated_${angle}.pdf`);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.processingFailed);
    }

    setProcessing(false);
  }, [file, angle]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
  }, []);

  // ─── Translate angle to i18n key ───
  const angleLabel = (a: RotateAngle): string => {
    switch (a) {
      case 90: return dict.workspace.rotate90;
      case 180: return dict.workspace.rotate180;
      case 270: return dict.workspace.rotate270;
    }
  };

  return (
    <div>
      {/* Header */}
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
      {!file && <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />}

      {/* File info and rotation controls */}
      {file && !processing && !error && (
        <div className="space-y-4">
          {/* File info */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
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
          </div>

          {/* Angle selection */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.rotateAngle}
            </p>
            <div className="flex gap-2">
              {ANGLE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAngle(opt)}
                  className={`flex-1 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                    angle === opt
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "border-2 border-gray-200 bg-gray-50 text-gray-600 hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:bg-purple-950/30"
                  }`}
                >
                  {angleLabel(opt)}
                </button>
              ))}
            </div>
          </div>

          {/* Rotate button */}
          <button
            onClick={handleRotate}
            disabled={processing}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {dict.workspace.processFiles}
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
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button
            onClick={handleClear}
            className="mt-2 text-xs font-medium text-red-600 hover:underline"
          >
            {dict.workspace.tryAgain}
          </button>
        </div>
      )}
    </div>
  );
}
