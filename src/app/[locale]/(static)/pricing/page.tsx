// ─── Pricing Page (server component) ───
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = t(locale);
  const prefix = `/${locale}`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <nav className="flex text-sm text-gray-500 dark:text-gray-400">
          <a href={prefix} className="hover:text-purple-600">{dict.toolPage.breadcrumbHome}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white" aria-current="page">{dict.pages.pricing.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{dict.pages.pricing.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.pricing.subtitle}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Free Tier */}
            <div className="relative flex flex-col rounded-2xl border-2 border-purple-200 bg-white p-8 shadow-lg dark:border-purple-800 dark:bg-gray-900">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                  {dict.toolCard.new}
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{dict.pages.pricing.freeTier}</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{dict.pages.pricing.freeDesc}</p>
              <ul className="mb-8 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">✓</span>
                  <span>{dict.pages.pricing.freeFeature1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">✓</span>
                  <span>{dict.pages.pricing.freeFeature2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">✓</span>
                  <span>{dict.pages.pricing.freeFeature3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-green-500">✓</span>
                  <span>{dict.pages.pricing.freeFeature4}</span>
                </li>
              </ul>
              <div className="mt-auto">
                <a
                  href={prefix}
                  className="gradient-brand block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-transform hover:scale-105"
                >
                  {dict.footer.home}
                </a>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="relative flex flex-col rounded-2xl border-2 border-purple-400 bg-purple-50 p-8 shadow-lg dark:border-purple-600 dark:bg-purple-950/30">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  {dict.toolCard.pro}
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{dict.pages.pricing.proTier}</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-400">{dict.pages.pricing.proDesc}</p>
              <div className="mb-8 rounded-xl border border-purple-200 bg-white p-4 dark:border-purple-700 dark:bg-gray-900">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-purple-700 dark:text-purple-400">🔍 {dict.toolItems["ocr-pdf"]?.title || "OCR PDF"}:</span>{" "}
                  {dict.pages.pricing.ocrNote}
                </p>
              </div>
              <div className="mt-auto">
                <span className="block w-full cursor-not-allowed rounded-xl border-2 border-purple-300 bg-white px-6 py-3 text-center text-sm font-semibold text-purple-400 dark:border-purple-700 dark:bg-gray-900 dark:text-purple-500">
                  {dict.workspace.comingSoon}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 pb-16 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">{dict.toolPage.faqHeading}</h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{dict.pages.pricing.faqQ1}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.pricing.faqA1}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{dict.pages.pricing.faqQ2}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.pricing.faqA2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
