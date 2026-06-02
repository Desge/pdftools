// ─── Homepage Client Part — only the interactive category tabs & tool grid ───
"use client";

import { useState } from "react";
import { VISIBLE_TOOLS, getToolsByCategory } from "@/lib/tools";
import { ToolCard } from "@/components/ui/tool-card";
import { CategoryTabs } from "@/components/ui/category-tabs";
import { t, DEFAULT_LOCALE } from "@/lib/i18n";
import type { ToolCategory } from "@/lib/types";

export function InteractiveTools({
  locale,
}: {
  locale: string;
}) {
  const safeLocale = locale || DEFAULT_LOCALE;
  const dict = t(safeLocale as any);
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">("all");
  const tools = activeCategory === "all" ? VISIBLE_TOOLS : getToolsByCategory(activeCategory).filter((t) => !t.requiresServer);

  return (
    <section id="all-tools" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{dict.tools.heading}</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{dict.tools.countLabel(tools.length)}</p>
          </div>
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
