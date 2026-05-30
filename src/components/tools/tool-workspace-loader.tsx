// ─── ToolWorkspaceLoader ───
// Client component wrapper: loads ToolWorkspace dynamically with ssr:false
// This avoids the DOMMatrix SSR issue from pdfjs-dist.
"use client";

import dynamic from "next/dynamic";

const ToolWorkspaceInner = dynamic(
  () =>
    import("@/components/tools/tool-workspace").then((m) => ({
      default: m.ToolWorkspace,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
        <p className="text-sm text-gray-500">Loading tool...</p>
      </div>
    ),
  }
);

export function ToolWorkspaceLoader(props: {
  slug: string;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
}) {
  return <ToolWorkspaceInner {...props} />;
}
