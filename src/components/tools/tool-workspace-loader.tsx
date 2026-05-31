// ─── ToolWorkspaceLoader ───
// Client component wrapper: routes each tool slug to the correct workspace component.
// All components are dynamically imported with ssr:false to avoid DOMMatrix SSR issues.
"use client";

import dynamic from "next/dynamic";

const LoadingSkeleton = () => (
  <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-800 dark:bg-gray-900">
    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
    <p className="text-sm text-gray-500">Loading tool...</p>
  </div>
);

const GenericWorkspace = dynamic(
  () => import("@/components/tools/tool-workspace").then((m) => ({ default: m.ToolWorkspace })),
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

const EditPdfWorkspace = dynamic(
  () => import("@/components/tools/edit-pdf-workspace").then((m) => ({ default: m.EditPdfWorkspace })),
  { ssr: false, loading: LoadingSkeleton }
);

// ─── Slug → Component mapping ───
const SPECIALIZED_WORKSPACES: Record<string, React.ComponentType<any>> = {};

// We resolve this at render time via the props
function getWorkspace(slug: string): React.ComponentType<any> {
  switch (slug) {
    case "organize-pdf":
      return OrganizePdfWorkspace;
    case "crop-pdf":
      return CropPdfWorkspace;
    case "edit-pdf":
      return EditPdfWorkspace;
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
