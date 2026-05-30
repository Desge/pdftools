// ─── Organize PDF Workspace ───
// Visual drag-and-drop page reorder with thumbnail previews
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";

// ─── Types ───
interface PageItem {
  index: number; // original index
  id: string; // unique drag ID
  thumbnail: string; // data URL
  label: string;
  selected: boolean;
}

// ─── Inline pdfjs import ───
let pdfjsLib: typeof import("pdfjs-dist") | null = null;
async function getPdfjs() {
  if (!pdfjsLib) {
    pdfjsLib = await import("pdfjs-dist");
    (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
      `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${(pdfjsLib as any).version}/pdf.worker.min.mjs`;
  }
  return pdfjsLib;
}

// ─── Component ───
export function OrganizePdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const dragItem = useRef<string | null>(null);
  const dragOverPos = useRef<"before" | "after" | null>(null);

  // Load PDF and render thumbnails
  const handleFile = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const pdfjs = await getPdfjs();
      const buf = await f.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const numPages = pdf.numPages;
      const items: PageItem[] = [];

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 0.3 }); // small thumbnails
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await (page.render as any)({ canvasContext: ctx, viewport }).promise;

        items.push({
          index: i - 1,
          id: `page-${i}`,
          thumbnail: canvas.toDataURL("image/jpeg", 0.7),
          label: `Page ${i}`,
          selected: false,
        });
      }

      setPages(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load PDF");
    }
    setLoading(false);
  }, []);

  // Delete a page
  const deletePage = useCallback((id: string) => {
    setPages((prev) => prev.filter((p) => p.id !== id));
  }, []);

  // Toggle select
  const toggleSelect = useCallback((id: string) => {
    setPages((prev) => prev.map((p) => p.id === id ? { ...p, selected: !p.selected } : p));
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
    // Determine position (before/after)
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

    setPages((prev) => {
      const newPages = [...prev];
      const sourceIdx = newPages.findIndex((p) => p.id === sourceId);
      const targetIdx = newPages.findIndex((p) => p.id === targetId);
      if (sourceIdx === -1 || targetIdx === -1) return prev;

      const [moved] = newPages.splice(sourceIdx, 1);
      const insertAt = dragOverPos.current === "before" ? targetIdx : targetIdx + 1;
      // Adjust if source was before target
      const finalIdx = sourceIdx < targetIdx ? insertAt - 1 : insertAt;
      newPages.splice(finalIdx >= 0 ? finalIdx : 0, 0, moved);
      return newPages;
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

  // Process reordered pages into new PDF
  const handleProcess = useCallback(async () => {
    if (!file || pages.length === 0) return;
    setProcessing(true);
    setError(null);

    try {
      const { PDFDocument } = await import("pdf-lib");
      const buf = await file.arrayBuffer();
      const src = await PDFDocument.load(buf);
      const dst = await PDFDocument.create();

      const newOrder = pages.map((p) => p.index);
      const copied = await dst.copyPages(src, newOrder);
      copied.forEach((pg) => dst.addPage(pg));

      const result = await dst.save();
      setResult(result);
      downloadBlob(result, file.name.replace(/\.pdf$/i, "") + "_organized.pdf");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Processing failed");
    }
    setProcessing(false);
  }, [file, pages]);

  const handleClear = () => {
    setFile(null);
    setPages([]);
    setResult(null);
    setError(null);
  };

  // ─── Render ───
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          No upload — drag & drop pages right in your browser
        </span>
        {pages.length > 0 && (
          <button onClick={handleClear} className="text-xs font-medium text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400">
            Reset
          </button>
        )}
      </div>

      {/* Dropzone */}
      {!file && (
        <FileDropzone onFiles={handleFile} accept=".pdf" multiple={false} />
      )}

      {/* Loading state */}
      {loading && (
        <PagesLoadingSkeleton />
      )}

      {/* Page thumbnails & drag UI */}
      {pages.length > 0 && !loading && (
        <div className="space-y-6">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {pages.length} page{pages.length !== 1 ? "s" : ""} — drag to reorder, click to delete
            </span>
          </div>

          {/* Page grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {pages.map((page) => (
              <div
                key={page.id}
                draggable
                onDragStart={(e) => onDragStart(e, page.id)}
                onDragOver={(e) => onDragOver(e, page.id)}
                onDragLeave={onDragLeave}
                onDrop={(e) => onDrop(e, page.id)}
                onDragEnd={onDragEnd}
                className={`group relative cursor-grab active:cursor-grabbing rounded-xl border-2 transition-all duration-150 ${
                  dragOverId === page.id
                    ? dragOverPos.current === "before"
                      ? "border-t-purple-500 shadow-lg"
                      : "border-b-purple-500 shadow-lg"
                    : "border-transparent hover:border-purple-300 hover:shadow-md"
                }`}
              >
                {/* Delete button */}
                <button
                  onClick={(e) => { e.stopPropagation(); deletePage(page.id); }}
                  className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                  title="Remove page"
                >
                  ✕
                </button>

                {/* Thumbnail */}
                <img
                  src={page.thumbnail}
                  alt={page.label}
                  className="h-auto w-full rounded-xl shadow-sm"
                  draggable={false}
                />

                {/* Label */}
                <p className="mt-1.5 text-center text-xs font-medium text-gray-600 dark:text-gray-400">
                  {page.label}
                </p>

                {/* Drag-over indicator */}
                {dragOverId === page.id && (
                  <div className={`absolute inset-0 rounded-xl bg-purple-500/10 ring-2 ring-purple-500 ring-offset-2`} />
                )}
              </div>
            ))}
          </div>

          {/* Process button */}
          <button
            onClick={handleProcess}
            disabled={processing}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? "Processing..." : `Save New Order (${pages.length} pages)`}
          </button>

          {processing && (
            <div className="flex items-center justify-center gap-3 text-sm text-purple-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
              Reorganizing pages...
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button onClick={handleClear} className="mt-2 text-xs font-medium text-red-600 hover:underline">Try Again</button>
        </div>
      )}
    </div>
  );
}

function PagesLoadingSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800">
          <div className="aspect-[3/4] rounded-xl bg-gray-200 dark:bg-gray-700" />
          <div className="mx-auto mt-2 h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
}
