// ─── Category Tabs Component (locale-aware) ───
"use client";

import { useParams } from "next/navigation";
import { t } from "@/lib/i18n";
import type { ToolCategory } from "@/lib/types";

interface CategoryTabsProps {
  active: ToolCategory | "all";
  onChange: (category: ToolCategory | "all") => void;
}

const CATEGORIES: (ToolCategory | "all")[] = [
  "all",
  "organize",
  "optimize",
  "convert",
  "edit",
  "security",
  "intelligence",
  "workflow",
];

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const dict = t(locale);

  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => {
        const label = cat === "all" ? dict.category.all : dict.category[cat];
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-purple-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
