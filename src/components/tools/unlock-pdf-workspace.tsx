// ─── Unlock PDF Workspace ───
// Inline password input instead of prompt() — decrypt PDF with user-supplied password
"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";
import { t } from "@/lib/i18n";

export function UnlockPdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Uint8Array | null>(null);

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  // ─── File selection ───
  const handleFile = useCallback((files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setResult(null);
    setError(null);
    setPassword("");
  }, []);

  // ─── Process (unlock) ───
  const handleProcess = useCallback(async () => {
    if (!file) return;

    if (!password) {
      setError(dict.workspace.enterPassword || "Enter password");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { PDFDocument } = await import("pdf-lib");
      const buffer = await file.arrayBuffer();

      let doc;
      try {
        doc = await (PDFDocument as any).load(buffer, { password });
      } catch {
        throw new Error(dict.workspace.incorrectPassword || "Incorrect password");
      }

      // pdf-lib doesn't have a "remove encryption" API directly.
      // Workaround: copy pages to a new unencrypted document.
      const newDoc = await PDFDocument.create();
      const indices = doc.getPageIndices();
      const pages = await newDoc.copyPages(doc, indices);
      pages.forEach((p: any) => newDoc.addPage(p));
      const resultBytes = await newDoc.save();

      setResult(resultBytes);
      const baseName = file.name.replace(/\.pdf$/i, "");
      downloadBlob(resultBytes, `${baseName}_unlocked.pdf`);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.processingFailed || "Processing failed");
    }

    setProcessing(false);
  }, [file, password]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setPassword("");
  }, []);

  // ─── Render ───
  return (
    <div>
      {/* Privacy badge */}
      <div className="mb-4 flex items-center justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          {dict.workspace.privacyBadge}
        </span>
        {file && (
          <button
            onClick={handleClear}
            className="ms-auto text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
          >
            {dict.workspace.reset || "Reset"}
          </button>
        )}
      </div>

      {/* Dropzone */}
      {!file && <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />}

      {/* Processing state */}
      {processing && (
        <div className="flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            {dict.workspace.processing}
          </p>
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
            {"PDF unlocked successfully."}
          </p>
          <button
            onClick={handleClear}
            className="gradient-brand rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-105"
          >
            {dict.workspace.startOver}
          </button>
        </div>
      )}

      {/* Error state */}
      {error && !processing && !result && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button onClick={() => setError(null)} className="mt-2 text-xs font-medium text-red-600 hover:underline">
            {dict.workspace.tryAgain}
          </button>
        </div>
      )}

      {/* File info + password form */}
      {file && !processing && !result && (
        <div className="mt-4 space-y-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          {/* File info */}
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)} {dict.workspace.kb}</p>
            </div>
          </div>

          {/* Password input */}
          <div>
            <label className="mb-1 block text-xs font-semibold text-gray-700 dark:text-gray-300">
              {dict.workspace.enterPassword || "Enter password"}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={dict.workspace.enterPassword || "Enter password"}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 pe-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword
                  ? (dict.workspace.hidePassword || "Hide")
                  : (dict.workspace.showPassword || "Show")}
              </button>
            </div>
          </div>

          {/* Unlock button */}
          <button
            onClick={handleProcess}
            disabled={processing || !password}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {dict.workspace.unlockPdf || "Unlock PDF"}
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
