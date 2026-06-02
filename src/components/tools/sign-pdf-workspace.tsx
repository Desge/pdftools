// ─── Sign PDF Workspace ───
// Draw, type, or upload a signature and place it on a PDF page.
// Supports mouse and touch drawing, text signature typing, image upload,
// click-to-place on PDF preview, drag-to-reposition, and pdf-lib embedding.
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { downloadBlob } from "@/lib/pdf-render";
import { getPdfjs } from "@/lib/pdfjs-singleton";
import { t } from "@/lib/i18n";
import { PDFDocument } from "pdf-lib";

type SignatureMode = "draw" | "type" | "upload";

const FONT_STYLES = [
  { value: "cursive", label: "Cursive", fontFamily: "'Brush Script MT', 'Great Vibes', cursive" },
  { value: "handwriting", label: "Handwriting", fontFamily: "'Segoe Print', 'Comic Sans MS', cursive" },
  { value: "elegant", label: "Elegant", fontFamily: "'Georgia', 'Palatino Linotype', serif" },
  { value: "simple", label: "Simple", fontFamily: "'Arial', sans-serif" },
];

export function SignPdfWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<SignatureMode>("draw");
  const [pages, setPages] = useState<{ dataUrl: string; width: number; height: number }[]>([]);
  const [activePage, setActivePage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const [fontStyle, setFontStyle] = useState("cursive");
  const [placedSignature, setPlacedSignature] = useState<{
    x: number; y: number; width: number; height: number;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadPreviewUrl, setUploadPreviewUrl] = useState<string | null>(null);

  const drawCanvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const signatureStartPos = useRef<{ x: number; y: number } | null>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  // ─── Handle file selection ───
  const handleFile = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    setFile(files[0]);
    setError(null);
    setLoading(true);
    setPlacedSignature(null);
    setSignatureDataUrl(null);

    try {
      const pdfjs = await getPdfjs();
      const buf = await files[0].arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const SCALE = 1.5;
      const renderedPages: { dataUrl: string; width: number; height: number }[] = [];

      for (let i = 1; i <= Math.min(pdf.numPages, 1); i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: SCALE });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext("2d")!;
        await (page.render as any)({ canvasContext: ctx, viewport }).promise;
        renderedPages.push({
          dataUrl: canvas.toDataURL("image/jpeg", 0.85),
          width: viewport.width,
          height: viewport.height,
        });
      }

      setPages(renderedPages);
      setActivePage(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.failedToLoad);
    }
    setLoading(false);
  }, []);

  // ─── Drawing handlers for signature canvas ───
  const getCanvasCoords = (e: React.MouseEvent | React.TouchEvent): { x: number; y: number } | null => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      const touch = e.touches[0];
      if (!touch) return null;
      return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const startDrawing = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    isDrawing.current = true;
    const coords = getCanvasCoords(e);
    if (coords) {
      lastPoint.current = coords;
    }
  }, []);

  const draw = useCallback((e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const coords = getCanvasCoords(e);
    if (!coords) return;

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#000000";

    if (lastPoint.current) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
    }

    lastPoint.current = coords;
  }, []);

  const stopDrawing = useCallback(() => {
    isDrawing.current = false;
    lastPoint.current = null;
    // Update signature data URL
    const canvas = drawCanvasRef.current;
    if (canvas) {
      setSignatureDataUrl(canvas.toDataURL("image/png"));
    }
  }, []);

  // ─── Draw typed signature on hidden canvas ───
  useEffect(() => {
    if (mode !== "type" || !typedText.trim()) {
      // Only clear if we haven't drawn
      return;
    }
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and draw typed text
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const style = FONT_STYLES.find((s) => s.value === fontStyle) || FONT_STYLES[0];
    ctx.font = `48px ${style.fontFamily}`;
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(typedText, canvas.width / 2, canvas.height / 2);

    setSignatureDataUrl(canvas.toDataURL("image/png"));
  }, [typedText, fontStyle, mode]);

  // ─── Handle upload ───
  const handleUploadSignature = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    const url = URL.createObjectURL(file);
    setUploadPreviewUrl(url);

    // Draw onto the canvas
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Maintain aspect ratio
      const maxW = canvas.width * 0.9;
      const maxH = canvas.height * 0.9;
      let w = img.width;
      let h = img.height;
      if (w > maxW) { h = h * maxW / w; w = maxW; }
      if (h > maxH) { w = w * maxH / h; h = maxH; }
      const x = (canvas.width - w) / 2;
      const y = (canvas.height - h) / 2;
      ctx.drawImage(img, x, y, w, h);
      setSignatureDataUrl(canvas.toDataURL("image/png"));
    };
    img.src = url;
  }, []);

  // ─── Clear signature canvas ───
  const clearSignature = useCallback(() => {
    const canvas = drawCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureDataUrl(null);
    setPlacedSignature(null);
    setTypedText("");
    setUploadedFile(null);
    setUploadPreviewUrl(null);
  }, []);

  // ─── Place signature on preview by clicking ───
  const handlePreviewClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!signatureDataUrl || !previewContainerRef.current) return;
    const rect = previewContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPlacedSignature({
      x: x - 75, // center the signature on click
      y: y - 25,
      width: 150,
      height: 50,
    });
  }, [signatureDataUrl]);

  // ─── Drag handlers for placed signature ───
  const handleSignatureMouseDown = useCallback((e: React.MouseEvent) => {
    if (!placedSignature) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    signatureStartPos.current = { x: placedSignature.x, y: placedSignature.y };
  }, [placedSignature]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragStart.current || !signatureStartPos.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPlacedSignature((prev) => prev ? {
      ...prev,
      x: signatureStartPos.current!.x + dx,
      y: signatureStartPos.current!.y + dy,
    } : null);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStart.current = null;
    signatureStartPos.current = null;
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // ─── Sign & Download ───
  const handleSignAndDownload = useCallback(async () => {
    if (!file || !signatureDataUrl || !placedSignature) return;
    setProcessing(true);
    setError(null);

    try {
      const pdfBuffer = await file.arrayBuffer();
      const doc = await PDFDocument.load(pdfBuffer);
      const pdfPages = doc.getPages();
      const firstPage = pdfPages[0];
      const { width: pageWidth, height: pageHeight } = firstPage.getSize();

      // Get the preview dimensions for coordinate mapping
      const previewPage = pages[0];
      const previewWidth = previewPage?.width || pageWidth;
      const previewHeight = previewPage?.height || pageHeight;

      // Map preview coordinates to PDF coordinates
      const scaleX = pageWidth / previewWidth;
      const scaleY = pageHeight / previewHeight;

      // Convert signature data URL to PNG and embed
      const imgData = signatureDataUrl.split(",")[1];
      const imgBytes = Uint8Array.from(atob(imgData), (c) => c.charCodeAt(0));
      const embeddedImage = await doc.embedPng(imgBytes);

      // Calculate position (PDF coordinates start from bottom-left)
      const pdfX = placedSignature.x * scaleX;
      const pdfY = pageHeight - (placedSignature.y + placedSignature.height) * scaleY;
      const pdfWidth = placedSignature.width * scaleX;
      const pdfHeight = placedSignature.height * scaleY;

      firstPage.drawImage(embeddedImage, {
        x: pdfX,
        y: pdfY,
        width: pdfWidth,
        height: pdfHeight,
        opacity: 0.85,
      });

      const signedPdf = await doc.save();
      const baseName = file.name.replace(/\.pdf$/i, "");
      downloadBlob(signedPdf, `${baseName}_signed.pdf`);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.workspace.processingFailed);
    }
    setProcessing(false);
  }, [file, signatureDataUrl, placedSignature]);

  // ─── Reset ───
  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
    setPages([]);
    setActivePage(0);
    clearSignature();
  }, [clearSignature]);

  // ─── Render ───
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

      {/* Loading state */}
      {loading && (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-purple-200 bg-purple-50/50 py-16 text-center dark:border-purple-800 dark:bg-purple-950/20">
          <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
          <p className="text-sm text-purple-600 dark:text-purple-400">{dict.workspace.loadingPages}</p>
        </div>
      )}

      {/* Main workspace */}
      {file && !loading && (
        <div className="space-y-4">
          {/* File info */}
          <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">{file.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} {dict.workspace.mb}
                </p>
              </div>
            </div>
          </div>

          {/* PDF Preview */}
          {pages.length > 0 && (
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-600 dark:text-gray-400">
                PDF Preview — {dict.workspace.signPlaceOnPage}
              </label>
              <div
                ref={previewContainerRef}
                className="relative overflow-auto rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-950 cursor-crosshair"
                onClick={handlePreviewClick}
                style={{ maxHeight: "500px" }}
              >
                <img
                  src={pages[activePage].dataUrl}
                  alt="PDF Preview"
                  className="mx-auto block max-w-full"
                  style={{ width: pages[activePage].width, height: "auto" }}
                  draggable={false}
                />
                {/* Placed signature overlay */}
                {placedSignature && signatureDataUrl && (
                  <div
                    className="absolute cursor-move"
                    style={{
                      left: placedSignature.x,
                      top: placedSignature.y,
                      width: placedSignature.width,
                      height: placedSignature.height,
                    }}
                    onMouseDown={handleSignatureMouseDown}
                  >
                    <img
                      src={signatureDataUrl}
                      alt="Signature"
                      className="h-full w-full object-contain pointer-events-none"
                      draggable={false}
                    />
                  </div>
                )}
              </div>
              {placedSignature && (
                <p className="mt-1 text-[10px] text-gray-400">
                  {dict.workspace.signPlaceOnPage}
                </p>
              )}
            </div>
          )}

          {/* Signature Creation Area */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            {/* Tabs */}
            <div className="mb-3 flex gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
              <button
                onClick={() => { setMode("draw"); setTypedText(""); }}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  mode === "draw"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                }`}
              >
                {dict.workspace.signDrawTab}
              </button>
              <button
                onClick={() => setMode("type")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  mode === "type"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                }`}
              >
                {dict.workspace.signTypeTab}
              </button>
              <button
                onClick={() => setMode("upload")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  mode === "upload"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                }`}
              >
                {dict.workspace.signUploadTab}
              </button>
            </div>

            {/* Draw mode */}
            {mode === "draw" && (
              <div>
                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                  {dict.workspace.signDrawHint}
                </p>
                <div className="flex justify-center">
                  <canvas
                    ref={drawCanvasRef}
                    width={300}
                    height={120}
                    className="rounded-lg border-2 border-dashed border-gray-300 bg-white touch-none"
                    style={{ cursor: "crosshair" }}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                  />
                </div>
              </div>
            )}

            {/* Type mode */}
            {mode === "type" && (
              <div className="space-y-3">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {dict.workspace.signTypeHint}
                </p>
                <input
                  type="text"
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                  placeholder="Type your signature..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-purple-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder:text-gray-500"
                  maxLength={50}
                />
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-600 dark:text-gray-400">
                    {dict.workspace.signFontSelector}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {FONT_STYLES.map((style) => (
                      <button
                        key={style.value}
                        onClick={() => setFontStyle(style.value)}
                        className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                          fontStyle === style.value
                            ? "bg-purple-600 text-white"
                            : "border border-gray-300 bg-white text-gray-600 hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-purple-600"
                        }`}
                        style={{ fontFamily: style.fontFamily }}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Live preview of typed signature */}
                {typedText.trim() && (
                  <div className="flex justify-center rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                    <span
                      className="text-4xl text-gray-900 dark:text-gray-100"
                      style={{ fontFamily: FONT_STYLES.find((s) => s.value === fontStyle)?.fontFamily }}
                    >
                      {typedText}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Upload mode */}
            {mode === "upload" && (
              <div>
                <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                  Upload a signature image (PNG or JPG with transparent or white background)
                </p>
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.gif,.webp"
                  onChange={handleUploadSignature}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-purple-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-purple-700 hover:file:bg-purple-100 dark:text-gray-400 dark:file:bg-purple-900/30 dark:file:text-purple-300"
                />
                {uploadPreviewUrl && (
                  <div className="mt-3 flex justify-center">
                    <img
                      src={uploadPreviewUrl}
                      alt="Uploaded signature"
                      className="max-h-24 rounded-lg border border-gray-200 object-contain"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={clearSignature}
                disabled={!signatureDataUrl && !typedText && !uploadedFile}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-red-300 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-red-700 dark:hover:text-red-400"
              >
                {dict.workspace.signClearSignature}
              </button>
            </div>
          </div>

          {/* Sign & Download button */}
          <button
            onClick={handleSignAndDownload}
            disabled={processing || !signatureDataUrl || !placedSignature}
            className="gradient-brand w-full rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {processing ? dict.workspace.processing : dict.workspace.signSignAndDownload}
          </button>

          {processing && (
            <div className="flex items-center justify-center gap-3 text-sm text-purple-600">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-200 border-t-purple-600" />
              {dict.workspace.processing}
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50/50 p-4 text-center dark:border-red-800 dark:bg-red-950/20">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
          <button onClick={handleClear} className="mt-2 text-xs font-medium text-red-600 hover:underline">
            {dict.workspace.tryAgain}
          </button>
        </div>
      )}
    </div>
  );
}
