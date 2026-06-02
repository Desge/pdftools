// ─── Tool Card Component (locale-aware, server component) ───
import Link from "next/link";
import { t } from "@/lib/i18n";
import type { ToolMeta } from "@/lib/types";
import type { LangDict, Locale } from "@/lib/i18n";

export function ToolCard({
  tool,
  locale = "en",
  dict: _dict,
}: {
  tool: ToolMeta;
  locale?: string;
  dict?: LangDict;
}) {
  const safeLocale = locale as Locale;
  const dict = _dict ?? t(safeLocale);
  const prefix = `/${safeLocale}`;

  const tTitle = dict.toolItems[tool.slug]?.title || tool.title;
  const tDesc = dict.toolItems[tool.slug]?.description || tool.description;

  return (
    <Link
      href={`${prefix}/tools/${tool.slug}`}
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-700"
    >
      <div className="absolute top-3 end-3 flex gap-1">
        {tool.isNew && <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-400">{dict.toolCard.new}</span>}
        {tool.isPro && <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-400">{dict.toolCard.pro}</span>}
      </div>
      <div className="mb-4 text-3xl">{tool.icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">{tTitle}</h3>
      <p className="mt-auto text-sm leading-relaxed text-gray-600 dark:text-gray-400">{tDesc}</p>
    </Link>
  );
}
