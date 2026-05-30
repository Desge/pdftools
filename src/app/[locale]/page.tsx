// ─── Locale-aware Homepage ───
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { TOOLS, getToolsByCategory } from "@/lib/tools";
import { ToolCard } from "@/components/ui/tool-card";
import { CategoryTabs } from "@/components/ui/category-tabs";
import { t, DEFAULT_LOCALE, type LangDict } from "@/lib/i18n";
import type { ToolCategory } from "@/lib/types";

export default function HomePage() {
  const params = useParams();
  const locale = (params?.locale as string) ?? DEFAULT_LOCALE;
  const dict = t(locale);
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "all">("all");
  const tools = activeCategory === "all" ? TOOLS : getToolsByCategory(activeCategory);

  return (
    <>
      <HeroSection dict={dict} toolCount={TOOLS.length} />
      <ToolsSection dict={dict} tools={tools} activeCategory={activeCategory} onChange={setActiveCategory} />
      <PrivacySection dict={dict} />
    </>
  );
}

function HeroSection({ dict, toolCount }: { dict: LangDict; toolCount: number }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 dark:from-purple-950/20 dark:to-gray-950 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200 opacity-30 blur-3xl dark:bg-purple-800" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-3xl dark:bg-pink-800" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          {dict.hero.line1}
          <br />
          <span className="text-gradient">{dict.hero.line2}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {dict.hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="tools/merge-pdf" className="gradient-brand rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-transform hover:scale-105">{dict.hero.ctaMerge}</a>
          <a href="tools/compress-pdf" className="rounded-xl border-2 border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-700 transition-transform hover:scale-105 dark:border-purple-800 dark:bg-gray-900 dark:text-purple-400">{dict.hero.ctaCompress}</a>
          <a href="#all-tools" className="rounded-xl px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.hero.ctaAll}</a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-500">
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeNoUpload}</span>
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeFree}</span>
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeNoReg}</span>
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeOffline}</span>
        </div>
      </div>
    </section>
  );
}

function ToolsSection({
  dict,
  tools,
  activeCategory,
  onChange,
}: {
  dict: LangDict;
  tools: typeof TOOLS;
  activeCategory: ToolCategory | "all";
  onChange: (c: ToolCategory | "all") => void;
}) {
  return (
    <section id="all-tools" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{dict.tools.heading}</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{dict.tools.countLabel(tools.length)}</p>
          </div>
          <CategoryTabs active={activeCategory} onChange={onChange} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacySection({ dict }: { dict: LangDict }) {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-4 text-4xl">🔒</div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {dict.footer.privacy}
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">{dict.footer.privacyLine}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✅ {dict.hero.badgeNoUpload}</span>
          <span>✅ {dict.footer.privacy}</span>
          <span>✅ {dict.hero.badgeOffline}</span>
          <span>✅ 100%</span>
        </div>
      </div>
    </section>
  );
}
