// ─── Site Header (locale-aware) ───
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { t } from "@/lib/i18n";
import type { LangDict, Locale } from "@/lib/i18n";

export function Header({
  locale: _locale,
  dict: _dict,
}: {
  locale?: string;
  dict?: LangDict;
}) {
  // Fallback to "en" — locale is typically passed from the server layout
  const locale = (_locale || "en") as Locale;
  const dict = _dict ?? t(locale);
  const prefix = `/${locale}`;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // ─── Theme initialization ───
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Esc key closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

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
          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            className="ms-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-600 hover:border-purple-300 hover:text-purple-600 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
            aria-label="Toggle dark mode"
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              /* Sun icon */
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon icon */
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          {/* Locale switcher */}
          <LocaleSwitcher current={locale} />
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-800" aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

const LOCALE_LABELS: Record<string, string> = {
  en: "EN",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  es: "ES",
  fr: "FR",
  de: "DE",
  pt: "PT",
  ru: "RU",
  ar: "AR",
  hi: "HI",
  it: "IT",
};

function LocaleSwitcher({ current }: { current: string }) {
  // Remove locale prefix from current path, handling both /en and /en/ cases
  const path =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/^\/(en|zh|ja|ko|es|fr|de|pt|ru|ar|hi|it)(\/|$)/, "/").replace(/\/+$/, "") || "/"
      : "/";
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // 写入共享 cookie（所有 toolconv.com 子域可读取）
    try {
      localStorage.setItem('toolconv_lang', newLocale);
      document.cookie = `toolconv_lang=${newLocale};domain=.toolconv.com;path=/;max-age=31536000;SameSite=Lax`;
    } catch { /* ignore */ }
    const newPath = path === "/" ? `/${newLocale}/` : `/${newLocale}${path.startsWith("/") ? path : "/" + path}`;
    window.location.href = newPath;
  };
  return (
    <select
      value={current}
      onChange={handleChange}
      className="ms-2 rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 hover:border-purple-300 focus:border-purple-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700"
    >
      {Object.entries(LOCALE_LABELS).map(([code, label]) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
