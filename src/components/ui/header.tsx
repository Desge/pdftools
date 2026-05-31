// ─── Site Header (locale-aware) ───
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { t } from "@/lib/i18n";

export function Header() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const prefix = `/${locale}`;
  const dict = t(locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-gray-800 dark:bg-gray-950/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={prefix} className="flex items-center gap-2 text-xl font-bold">
          <span className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-2 py-1 text-white">PDF</span>
          <span className="text-gray-900 dark:text-white">toolconv</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link href={`${prefix}/tools/merge-pdf`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">{dict.header.mergePdf}</Link>
          <Link href={`${prefix}/tools/split-pdf`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">{dict.header.splitPdf}</Link>
          <Link href={`${prefix}/tools/compress-pdf`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">{dict.header.compressPdf}</Link>
          <Link href={`${prefix}/convert/pdf-to-jpg`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">{dict.header.convert}</Link>
          <Link href={`${prefix}/#all-tools`} className="rounded-lg px-3 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-900/30">{dict.header.allTools}</Link>
          {/* Locale switcher */}
          <LocaleSwitcher current={locale} />
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-800" aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>
      {mobileOpen && (
        <div className="border-t border-gray-200 px-4 pb-4 md:hidden dark:border-gray-800">
          <div className="flex flex-col gap-1 pt-3">
            <Link href={`${prefix}/tools/merge-pdf`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">{dict.header.mergePdf}</Link>
            <Link href={`${prefix}/tools/split-pdf`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">{dict.header.splitPdf}</Link>
            <Link href={`${prefix}/tools/compress-pdf`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">{dict.header.compressPdf}</Link>
            <Link href={`${prefix}/convert/pdf-to-jpg`} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">{dict.header.convert}</Link>
            <Link href={`${prefix}/#all-tools`} className="rounded-lg px-3 py-2 text-sm font-medium text-purple-600 dark:text-purple-400">{dict.header.allTools} →</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function LocaleSwitcher({ current }: { current: string }) {
  const path = typeof window !== "undefined" ? window.location.pathname.replace(/^\/(en|zh)\//, "/") : "/";
  return (
    <div className="ml-2 flex gap-1">
      {current !== "en" && <a href={`/en${path}`} className="rounded px-2 py-1 text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">EN</a>}
      {current !== "zh" && <a href={`/zh${path}`} className="rounded px-2 py-1 text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">中文</a>}
    </div>
  );
}
