// ─── i18n entry point ───
// Re-exports the LangDict interface, constants, and t() function.
// All language dictionaries are statically imported for SSG.
// Import path: @/lib/i18n  (resolves to this file via index.ts)

import type { Locale } from "./types";
export type { Locale, LangDict } from "./types";

import en from "./en";
import zh from "./zh";
import ja from "./ja";
import ko from "./ko";
import es from "./es";
import fr from "./fr";
import de from "./de";
import pt from "./pt";
import ru from "./ru";
import ar from "./ar";
import hi from "./hi";
import it from "./it";

export const DEFAULT_LOCALE: Locale = "en";
export const SUPPORTED_LOCALES: Locale[] = ["en", "zh", "ja", "ko", "es", "fr", "de", "pt", "ru", "ar", "hi", "it"];

const dicts: Record<Locale, import("./types").LangDict> = {
  en,
  zh,
  ja,
  ko,
  es,
  fr,
  de,
  pt,
  ru,
  ar,
  hi,
  it,
};

/** Get the dictionary for a locale. Falls back to English. */
export function t(locale: string): import("./types").LangDict {
  return dicts[locale as Locale] ?? dicts[DEFAULT_LOCALE];
}
