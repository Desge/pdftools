"use client";
import { useEffect } from "react";

const LOCALE_MAP: Record<string, string> = {
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  zh: "zh",
  "zh-cn": "zh",
  "zh-tw": "zh",
  "zh-hk": "zh",
  ja: "ja",
  ko: "ko",
  es: "es",
  "es-es": "es",
  "es-mx": "es",
  "es-ar": "es",
  fr: "fr",
  "fr-fr": "fr",
  "fr-ca": "fr",
  de: "de",
  "de-de": "de",
  "de-at": "de",
  "de-ch": "de",
  pt: "pt",
  "pt-br": "pt",
  "pt-pt": "pt",
  ru: "ru",
  ar: "ar",
  "ar-sa": "ar",
  "ar-eg": "ar",
  hi: "hi",
  it: "it",
  "it-it": "it",
};

const SUPPORTED = [
  "en",
  "zh",
  "ja",
  "ko",
  "es",
  "fr",
  "de",
  "pt",
  "ru",
  "ar",
  "hi",
  "it",
];

function detectLocale(): string {
  if (typeof window === "undefined") return "en";
  // 1. localStorage preference
  const saved = localStorage.getItem("locale");
  if (saved && SUPPORTED.includes(saved)) return saved;
  // 2. navigator.language
  const langs = navigator.languages || [navigator.language];
  for (const lang of langs) {
    const lower = lang.toLowerCase();
    if (LOCALE_MAP[lower]) return LOCALE_MAP[lower];
    const prefix = lower.split("-")[0];
    if (SUPPORTED.includes(prefix)) return prefix;
  }
  return "en";
}

export default function RootPage() {
  useEffect(() => {
    const locale = detectLocale();
    window.location.replace(`/${locale}/`);
  }, []);
  return null;
}
