// ─── Merge PDF Workspace ───
// Drag-and-drop file reordering with page count preview

"use client";

import { useState, useCallback, useRef } from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { mergePDFs } from "@/lib/pdf-utils";
import { useParams } from "next/navigation";
import { t } from "@/lib/i18n";

// ─── Types ───
interface FileItem {
  id: string;
  file: File;
  pageCount: number | null;
  loading: boolean;
}

export function MergePdfWorkspace() {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const dragItem = useRef<string | null>(null);
  const dragOverPos = useRef<"before" | "after" | null>(null);

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  // Handle file upload
  const handleFiles = useCallback(async (newFiles: File[]) => {
    const items: FileItem[] = newFiles.map((f, i) => ({
      id: `file-${Date.now()}-${i}`,
      file: f,
      pageCount: null,
      loading: true,
    }));
    setFiles((prev) => [...prev, ...items]);
    setError(null);

    // Load page counts asynchronously
    const d = t(locale);
    for (const item of items) {
      try {
        const pdfjs = await getPdfjs();
        const buf = await item.file.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: buf }).promise;
        setFiles((prev) =>
          prev.map((p) =>
            p.id === item.id ? { ...p, pageCount: pdf.numPages, loading: false } : p
          )
        );
      } catch {
        setFiles((prev) =>
          prev.map((p) =>
            p.id === item.id ? { ...p, pageCount: 0, loading: false } : p
          )
        );
      }
    }
  }, [locale]);

  // Remove a file
  const removeFile = useCallback((id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  // ─── Drag & Drop handlers ───
  const onDragStart = (e: React.DragEvent, id: string) => {
    dragItem.current = id;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  };

  const onDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (dragItem.current === id) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    dragOverPos.current = e.clientY < midY ? "before" : "after";
    setDragOverId(id);
  };

  const onDragLeave = () => {
    setDragOverId(null);
    dragOverPos.current = null;
  };

  const onDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const sourceId = dragItem.current;
    if (!sourceId || sourceId === targetId) {
      setDragOverId(null);
      return;
    }

    setFiles((prev) => {
      const newList = [...prev];
      const sourceIdx = newList.findIndex((p) => p.id === sourceId);
      const targetIdx = newList.findIndex((p) => p.id === targetId);
      if (sourceIdx === -1 || targetIdx === -1) return prev;

      const [moved] = newList.splice(sourceIdx, 1);
      const insertAt = dragOverPos.current === "before" ? targetIdx : targetIdx + 1;
      const finalIdx = sourceIdx < targetIdx ? insertAt - 1 : insertAt;
      newList.splice(finalIdx >= 0 ? finalIdx : 0, 0, moved);
      return newList;
    });

    dragItem.current = null;
    setDragOverId(null);
    dragOverPos.current = null;
  };

  const onDragEnd = () => {
    dragItem.current = null;
    setDragOverId(null);
    dragOverPos.current = null;
  };

  // Process merge
  const handleMerge = useCallback(async () => {
    if (files.length < 2) return;
    setProcessing(true);
    setError(null);

    try {
      const buffers = await Promise.all(files.map((f) => f.file.arrayBuffer()));
      const result = await mergePDFs(buffers);
      downloadBlob(result, "merged.pdf");
    } catch (err) {
      setError(err instanceof Error ? err.message : t(locale).workspace.processingFailed);
    }
    setProcessing(false);
  }, [files, locale]);

  const handleClear = () => {
    setFiles([]);
    setError(null);
  };

  const totalPages = files.reduce((sum, f) => sum + (f.pageCount ?? 0), 0);
  const totalSizeMB = files.reduce((sum, f) => sum + f.file.size, 0) / (1024 * 1024);

  // ─── Render ───
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

      {/* Dropzone — show when no files yet */}
      {files.length === 0 && !processing && (
        <FileDropzone onFiles={handleFiles} accept=".pdf" multiple />
      )}

      {/* Large file warning */}
      {files.some((f) => f.file.size > 50 * 1024 * 1024) && (
        <p className="mb-3 text-xs text-amber-600 dark:text-amber-400">
          ⚠ {dict.workspace.largeFileWarning}
        </p>
      )}

      {/* File list with drag-and-drop */}
      {files.length > 0 && !processing && (
        <div className="space-y-6">
          {/* Merge Order header */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {dict.workspace.mergeOrder} ({files.length} {dict.workspace.files})
            </span>
            <span className="text-xs text-gray-500">
              {totalPages} {dict.workspace.pages} · {totalSizeMB.toFixed(1)} {dict.workspace.mb}
            </span>
          </div>

          {/* Subtle hint */}
          <p className="text-xs text-gray-400">
            {dict.workspace.dragToReorder}
          </p>

          {/* File items */}
          <div className="space-y-2">
            {files.map((item, index) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => onDragStart(e, item.id)}
                onDragOver={(e) => onDragOver(e, item.id)}
                onDragLeave={onDragLeave}
                onDrop={(e) => onDrop(e, item.id)}
                onDragEnd={onDragEnd}
                className={`group relative flex items-center gap-3 rounded-xl border-2 bg-white p-3 transition-all duration-150 dark:bg-gray-900 ${
                  dragOverId === item.id
                    ? dragOverPos.current === "before"
                      ? "border-t-purple-500 shadow-lg"
                      : "border-b-purple-500 shadow-lg"
                    : "cursor-grab border-gray-200 hover:border-purple-300 hover:shadow-md active:cursor-grabbing dark:border-gray-800 dark:hover:border-purple-700"
                }`}
              >
                {/* Drag handle */}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <circle cx="5" cy="3" r="1.5" />
                    <circle cx="11" cy="3" r="1.5" />
                    <circle cx="5" cy="8" r="1.5" />
                    <circle cx="11" cy="8" r="1.5" />
                    <circle cx="5" cy="13" r="1.5" />
                    <circle cx="11" cy="13" r="1.5" />
                  </svg>
                </span>

                {/* Order number */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-400">
                  {index + 1}
                </span>

                {/* File info */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">
                    {item.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.loading ? (
                      <span className="inline-flex items-center gap-1">
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-purple-600" />
                        {dict.workspace.loadingPages}
                      </span>
                    ) : (
                      <>
                        {item.pageCount ?? 0} {dict.workspace.pages}
                        {" · "}
                        {(item.file.size / 1024 / 1024).toFixed(2)} {dict.workspace.mb}
                      </>
                    )}
                  </p>
                </div>

                {/* Remove button */}
                <button
                  onClick={(e) => { e.stopPropagation(); removeFile(item.id); }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs text-red-600 opacity-0 transition-opacity hover:bg-red-200 group-hover:opacity-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                  title={dict.workspace.removeFile}
                >
                  ✕
                </button>

                {/* Drag-over indicator */}
                {dragOverId === item.id && (
                  <div className={`absolute inset-0 rounded-xl bg-purple-500/10 ring-2 ring-purple-500 ring-offset-2`} />
                )}
              </div>
            ))}
          </div>

          {/* Add more files button */}
          <div className="flex justify-center">
            <label className="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 px-4 py-2 text-sm text-gray-500 transition-colors hover:border-purple-400 hover:text-purple-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-purple-600 dark:hover:text-purple-400">
              + {dict.workspace.addMore}
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                multiple
                onChange={(e) => {
                  if (e.target.files) handleFiles(Array.from(e.target.files));
                  e.target.value = "";
                }}
              />
            </label>
          </div>

          {/* Merge button */}
          <button
            onClick={handleMerge}
            disabled={processing || files.length < 2 || files.some((f) => f.loading)}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {dict.workspace.mergeAndDownload}
          </button>

          {files.length < 2 && (
            <p className="text-center text-xs text-amber-600 dark:text-amber-400">
              {dict.workspace.needAtLeastTwo}
            </p>
          )}
        </div>
      )}

      {/* Processing state */}
      {processing && (
        <div className="flex flex-col items-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-12 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-lg font-medium text-purple-700 dark:text-purple-400">
            {dict.workspace.mergingFiles}
          </p>
          <p className="mt-2 text-sm text-purple-500">
            {files.length} {dict.workspace.files} · {totalPages} {dict.workspace.pages}
          </p>
        </div>
      )}

      {/* Error */}
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

      {/* Empty hint */}
      {files.length === 0 && !processing && !error && (
        <p className="mt-3 text-center text-xs text-gray-400">
          {dict.workspace.selectHint}
        </p>
      )}
    </div>
  );
}
