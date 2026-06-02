// ─── ToolWorkspaceLoader ───
// Client component wrapper: routes each tool slug to the correct workspace component.
// All components are dynamically imported with ssr:false to avoid DOMMatrix SSR issues.
"use client";

import dynamic from "next/dynamic";

const LoadingSkeleton = () => (
  <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-800 dark:bg-gray-900" aria-busy="true" role="status">
    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
    <p className="text-sm text-gray-500">Loading tool...</p>
  </div>
);

const GenericWorkspace = dynamic(
  () => import("@/components/tools/tool-workspace").then((m) => ({ default: m.ToolWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const SplitPdfWorkspace = dynamic(
  () => import("@/components/tools/split-pdf-workspace").then((m) => ({ default: m.SplitPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const OrganizePdfWorkspace = dynamic(
  () => import("@/components/tools/organize-pdf-workspace").then((m) => ({ default: m.OrganizePdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const CropPdfWorkspace = dynamic(
  () => import("@/components/tools/crop-pdf-workspace").then((m) => ({ default: m.CropPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const SignPdfWorkspace = dynamic(
  () => import("@/components/tools/sign-pdf-workspace").then((m) => ({ default: m.SignPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const EditPdfWorkspace = dynamic(
  () => import("@/components/tools/edit-pdf-workspace").then((m) => ({ default: m.EditPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const RotatePdfWorkspace = dynamic(
  () => import("@/components/tools/rotate-pdf-workspace").then((m) => ({ default: m.RotatePdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const WatermarkPdfWorkspace = dynamic(
  () => import("@/components/tools/watermark-pdf-workspace").then((m) => ({ default: m.WatermarkPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const ProtectPdfWorkspace = dynamic(
  () => import("@/components/tools/protect-pdf-workspace").then((m) => ({ default: m.ProtectPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const UnlockPdfWorkspace = dynamic(
  () => import("@/components/tools/unlock-pdf-workspace").then((m) => ({ default: m.UnlockPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const PdfToImage = dynamic(
  () => import("@/components/tools/pdf-to-image").then((m) => ({ default: m.PdfToImage })),
  { ssr: false, loading: LoadingSkeleton }
);

const CompressPdfWorkspace = dynamic(
  () => import("@/components/tools/compress-pdf-workspace").then((m) => ({ default: m.CompressPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const MergePdfWorkspace = dynamic(
  () => import("@/components/tools/merge-pdf-workspace").then((m) => ({ default: m.MergePdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const WordToPdfWorkspace = dynamic(
  () => import("@/components/tools/word-to-pdf-workspace").then((m) => ({ default: m.WordToPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const ExcelToPdfWorkspace = dynamic(
  () => import("@/components/tools/excel-to-pdf-workspace").then((m) => ({ default: m.ExcelToPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const HtmlToPdfWorkspace = dynamic(
  () => import("@/components/tools/html-to-pdf-workspace").then((m) => ({ default: m.HtmlToPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const MarkdownToPdfWorkspace = dynamic(
  () => import("@/components/tools/markdown-to-pdf-workspace").then((m) => ({ default: m.MarkdownToPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const PdfToJpgWorkspace = dynamic(
  () => import("@/components/tools/pdf-to-jpg-workspace").then((m) => ({ default: m.PdfToJpgWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const PdfToPngWorkspace = dynamic(
  () => import("@/components/tools/pdf-to-png-workspace").then((m) => ({ default: m.PdfToPngWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const JpgToPdfWorkspace = dynamic(
  () => import("@/components/tools/jpg-to-pdf-workspace").then((m) => ({ default: m.JpgToPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const PageNumbersWorkspace = dynamic(
  () => import("@/components/tools/page-numbers-workspace").then((m) => ({ default: m.PageNumbersWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const HeicToPdfWorkspace = dynamic(
  () => import("@/components/tools/heic-to-pdf-workspace").then((m) => ({ default: m.HeicToPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const OcrPdfWorkspace = dynamic(
  () => import("@/components/tools/ocr-pdf-workspace").then((m) => ({ default: m.OcrPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

const PdfToWordWorkspace = dynamic(
  () => import("@/components/tools/pdf-to-word-workspace").then((m) => ({ default: m.PdfToWordWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

// ─── Slug → Component mapping ───

function getWorkspace(slug: string): React.ComponentType<any> {
  switch (slug) {
    case "split-pdf":
      return SplitPdfWorkspace;
    case "organize-pdf":
      return OrganizePdfWorkspace;
    case "crop-pdf":
      return CropPdfWorkspace;
    case "sign-pdf":
      return SignPdfWorkspace;
    case "edit-pdf":
      return EditPdfWorkspace;
    case "rotate-pdf":
      return RotatePdfWorkspace;
    case "watermark-pdf":
      return WatermarkPdfWorkspace;
    case "protect-pdf":
      return ProtectPdfWorkspace;
    case "unlock-pdf":
      return UnlockPdfWorkspace;
    case "pdf-to-image":
      return PdfToImage;
    case "compress-pdf":
      return CompressPdfWorkspace;
    case "merge-pdf":
      return MergePdfWorkspace;
    case "word-to-pdf":
      return WordToPdfWorkspace;
    case "excel-to-pdf":
      return ExcelToPdfWorkspace;
    case "html-to-pdf":
      return HtmlToPdfWorkspace;
    case "markdown-to-pdf":
      return MarkdownToPdfWorkspace;
    case "pdf-to-jpg":
      return PdfToJpgWorkspace;
    case "pdf-to-png":
      return PdfToPngWorkspace;
    case "jpg-to-pdf":
      return JpgToPdfWorkspace;
    case "page-numbers":
      return PageNumbersWorkspace;
    case "heic-to-pdf":
      return HeicToPdfWorkspace;
    case "ocr-pdf":
      return OcrPdfWorkspace;
    case "pdf-to-word":
      return PdfToWordWorkspace;
    default:
      return GenericWorkspace;
  }
}

export function ToolWorkspaceLoader(props: {
  slug: string;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
}) {
  const Workspace = getWorkspace(props.slug);
  return <Workspace {...props} />;
}