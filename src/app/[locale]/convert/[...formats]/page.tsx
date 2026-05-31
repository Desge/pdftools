// ─── Locale-aware Conversion Page: /[locale]/convert/[...formats] ───
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_CONVERSIONS } from "@/lib/formats";
import { conversionMeta, breadcrumbJsonLd } from "@/lib/seo";
import { t, DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n";
import type { ConversionPair } from "@/lib/types";
import { ConverterClient } from "./ConverterClient";

// ─── generateStaticParams: all locales × top 200 conversions ───
const STATIC_CONVERSIONS = ALL_CONVERSIONS.filter((c) => c.clientSide && c.quality >= 3).slice(0, 200);

export function generateStaticParams() {
  const params: { locale: string; formats: string[] }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const conv of STATIC_CONVERSIONS) {
      params.push({ locale, formats: [conv.slug] });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; formats: string[] }>;
}) {
  const { formats } = await params;
  const slug = formats.join("-to-");
  const pair = ALL_CONVERSIONS.find((c) => c.slug === slug);
  return pair ? conversionMeta(pair) : {};
}

export default async function ConversionPage({
  params,
}: {
  params: Promise<{ locale: string; formats: string[] }>;
}) {
  const { locale, formats } = await params;
  const slug = formats.join("-to-");
  const pair = ALL_CONVERSIONS.find((c) => c.slug === slug);
  if (!pair) notFound();

  const dict = t(locale);
  const prefix = `/${locale}`;

  const jsonLd = breadcrumbJsonLd([
    { name: dict.toolPage.breadcrumbHome, url: prefix },
    { name: dict.header.convert, url: `${prefix}/convert` },
    { name: `${pair.from.name} to ${pair.to.name}`, url: `${prefix}/convert/${pair.slug}` },
  ]);

  const faqAns = pair.quality >= 4 ? dict.convert.faqQualityAns4
    : pair.quality >= 3 ? dict.convert.faqQualityAns3
    : dict.convert.faqQualityAns2;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <nav className="flex text-sm text-gray-500 dark:text-gray-400">
          <a href={prefix} className="hover:text-purple-600">{dict.toolPage.breadcrumbHome}</a>
          <span className="mx-2">/</span>
          <a href={`${prefix}/convert`} className="hover:text-purple-600">{dict.header.convert}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">{pair.from.name} → {pair.to.name}</span>
        </nav>
      </div>

      <section className="pb-8 pt-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            {pair.from.name} to {pair.to.name} {dict.convert.converter}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {dict.convert.subtitle(pair.from.name, pair.to.ext)}
            {pair.clientSide ? ` ${dict.convert.noUpload}.` : ` ${dict.convert.comingSoonDesc}`}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            {pair.clientSide && pair.quality >= 4 ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/40 dark:text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />{dict.convert.browserBased}
              </span>
            ) : pair.clientSide ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400">{dict.convert.experimental}</span>
            ) : null}
            <span className="text-xs text-gray-400">{dict.convert.quality}: {"★".repeat(pair.quality)}{"☆".repeat(5 - pair.quality)}</span>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ConverterClient pair={pair} locale={locale} />
        </div>
      </section>

      <section className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">{dict.convert.about(pair.from.name, pair.to.name)}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{pair.from.name} ({pair.from.ext.toUpperCase()})</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{dict.convert.category}: {pair.from.category} · {dict.convert.mime}: {pair.from.mime}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{pair.to.name} ({pair.to.ext.toUpperCase()})</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{dict.convert.category}: {pair.to.category} · {dict.convert.mime}: {pair.to.mime}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">{dict.toolPage.faqHeading}</h2>
          <div className="space-y-3">
            <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer font-medium text-gray-900 group-open:text-purple-600 dark:text-white dark:group-open:text-purple-400">
                {dict.convert.faqIsFree(pair.from.name, pair.to.name)}
              </summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Yes, this {pair.from.name} to {pair.to.name} converter {dict.convert.faqIsFreeAns}</p>
            </details>
            <details className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <summary className="cursor-pointer font-medium text-gray-900 group-open:text-purple-600 dark:text-white dark:group-open:text-purple-400">{dict.convert.faqQuality}</summary>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{faqAns}</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900 dark:text-white">{dict.convert.relatedConversions}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {ALL_CONVERSIONS.filter((c) => c.slug !== pair.slug && (c.from.ext === pair.from.ext || c.to.ext === pair.to.ext))
              .slice(0, 12)
              .map((c) => (
                <a key={c.slug} href={`${prefix}/convert/${c.slug}`} className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400">
                  {c.from.name} → {c.to.name}
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
