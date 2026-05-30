// ─── Tool Card Component (locale-aware) ───
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ToolMeta } from "@/lib/types";

export function ToolCard({ tool }: { tool: ToolMeta }) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const prefix = `/${locale}`;

  return (
    <Link
      href={`${prefix}/tools/${tool.slug}`}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700"
    >
      <div className="absolute top-3 right-3 flex gap-1">
        {tool.isNew && <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-400">New</span>}
        {tool.isPro && <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-400">Pro</span>}
      </div>
      <div className="mb-4 text-3xl">{tool.icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">{tool.title}</h3>
      <p className="mt-auto text-sm leading-relaxed text-gray-600 dark:text-gray-400">{tool.description}</p>
    </Link>
  );
}
