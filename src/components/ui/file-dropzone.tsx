// ─── File Dropzone Component ───
"use client";

import { useCallback, useState, type DragEvent } from "react";
import { useParams } from "next/navigation";
import { t } from "@/lib/i18n";

interface FileDropzoneProps {
  onFiles: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
}

export function FileDropzone({
  onFiles,
  accept = ".pdf",
  multiple = true,
  maxSizeMB = 100,
}: FileDropzoneProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = useCallback(
    async (fileList: FileList | null) => {
      if (!fileList) return;
      const files = Array.from(fileList);

      // Size validation
      const oversized = files.filter((f) => f.size > maxSizeMB * 1024 * 1024);
      if (oversized.length > 0) {
        setError(`${dict.dropzone.fileExceed} ${maxSizeMB}MB: ${oversized.map((f) => f.name).join(", ")}`);
        return;
      }

      setError(null);

      // File type validation: check PDF header for .pdf files
      if (accept.includes(".pdf")) {
        for (const file of files) {
          const buf = await file.slice(0, 5).arrayBuffer();
          const header = new TextDecoder().decode(buf);
          if (!header.startsWith("%PDF-")) {
            setError(dict.dropzone.invalidFileType);
            return;
          }
        }
      }

      onFiles(files);
    },
    [onFiles, maxSizeMB]
  );

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <div className="w-full">
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 transition-all duration-200 min-h-[200px] ${
          isDragging
            ? "border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-950/20"
            : "border-gray-300 bg-gray-50 hover:border-purple-300 hover:bg-purple-50/50 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-purple-700"
        }`}
      >
        {/* Upload icon */}
        <svg
          className={`mb-4 h-12 w-12 transition-colors ${
            isDragging ? "text-purple-500" : "text-gray-400"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>

        <p className="mb-2 text-base font-medium text-gray-700 dark:text-gray-300">
          {isDragging ? dict.dropzone.dropHere : dict.dropzone.dragDropHere}
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{dict.dropzone.orClickBrowse}</p>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          {accept.replace(/\./g, "").toUpperCase()} {dict.dropzone.filesUpTo} {maxSizeMB}MB
          {multiple ? ` ${dict.dropzone.multipleSupported}` : ""}
        </p>

        <input
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </label>

      {/* Error message */}
      {error && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
