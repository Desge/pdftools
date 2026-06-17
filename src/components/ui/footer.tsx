// ─── Site Footer (locale-aware, server component) ───
import Link from "next/link";
import type { LangDict, Locale } from "@/lib/i18n";
import { t } from "@/lib/i18n";

export function Footer({
  locale = "en" as Locale,
  dict: _dict,
}: {
  locale?: string;
  dict?: LangDict;
}) {
  const safeLocale = locale as Locale;
  const dict = _dict ?? t(safeLocale);
  const prefix = `/${safeLocale}`;

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Product */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">{dict.footer.product}</h3>
            <ul className="space-y-2">
              <li><Link href={prefix} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.home}</Link></li>
              <li><Link href={`${prefix}/#all-tools`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.allTools}</Link></li>
              <li><Link href={`${prefix}/pricing`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.pricing}</Link></li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">{dict.footer.popularTools}</h3>
            <ul className="space-y-2">
              <li><Link href={`${prefix}/tools/merge-pdf`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.toolItems["merge-pdf"]?.title || "Merge PDF"}</Link></li>
              <li><Link href={`${prefix}/tools/compress-pdf`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.toolItems["compress-pdf"]?.title || "Compress PDF"}</Link></li>
              <li><Link href={`${prefix}/tools/pdf-to-word`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.toolItems["pdf-to-word"]?.title || "PDF to Word"}</Link></li>
              <li><Link href={`${prefix}/tools/jpg-to-pdf`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.toolItems["jpg-to-pdf"]?.title || "JPG to PDF"}</Link></li>
            </ul>
          </div>

          {/* Convert */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">{dict.footer.convert}</h3>
            <ul className="space-y-2">
              <li><Link href={`${prefix}/convert/pdf-to-jpg`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">PDF to JPG</Link></li>
              <li><Link href={`${prefix}/convert/heic-to-pdf`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">HEIC to PDF</Link></li>
              <li><Link href={`${prefix}/convert/md-to-pdf`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Markdown to PDF</Link></li>
              <li><Link href={`${prefix}/convert/html-to-pdf`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">HTML to PDF</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">{dict.footer.company}</h3>
            <ul className="space-y-2">
              <li><Link href={`${prefix}/about`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.about}</Link></li>
              <li><Link href={`${prefix}/privacy`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.privacy}</Link></li>
              <li><Link href={`${prefix}/terms`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.terms}</Link></li>
              <li><Link href={`${prefix}/contact`} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.footer.contact}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          {/* Cross-site links */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300">{dict.footer.alsoTry}</span>
            <a href={`https://image.toolconv.com/${safeLocale}/`} className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium">{dict.footer.imageTools}</a>
            <a href={`https://unit.toolconv.com/${safeLocale}/`} className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium">{dict.footer.unitConverter}</a>
          </div>
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} toolconv. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
