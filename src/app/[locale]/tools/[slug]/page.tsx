// ─── Locale-aware Tool Page: /[locale]/tools/[slug] ───
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { VISIBLE_TOOLS, getTool } from "@/lib/tools";
import { toolJsonLd, breadcrumbJsonLd, faqJsonLd, howToJsonLd } from "@/lib/seo";
import { ToolCard } from "@/components/ui/tool-card";
import { ToolWorkspaceLoader } from "@/components/tools/tool-workspace-loader";
import { t, SUPPORTED_LOCALES } from "@/lib/i18n";
import { AdBanner } from "@/components/ads/AdBanner";
import { getPdfToolGuideContent } from "@/lib/tool-content";

// ─── generateStaticParams for SSG (all locales × all tools) ───
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const tool of VISIBLE_TOOLS) {
      params.push({ locale, slug: tool.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool || tool.requiresServer) return {};
  const dict = t(locale);
  // Use localized title from dictionary, falling back to English tool.title
  const tTitle = dict.toolItems[slug]?.title || tool.title;
  const tDesc = dict.toolItems[slug]?.description || tool.description;
  const url = `https://pdf.toolconv.com/${locale}/tools/${tool.slug}/`;

  return {
    title: tTitle,
    description: tDesc,
    keywords: tool.keywords,
    alternates: {
      canonical: url,
      languages: (() => {
        const SUPPORTED = ["en", "zh", "ja", "ko", "es", "fr", "de", "pt", "ru", "ar", "hi", "it"];
        const languages: Record<string, string> = { "x-default": `https://pdf.toolconv.com/tools/${tool.slug}/` };
        for (const loc of SUPPORTED) {
          languages[loc] = `https://pdf.toolconv.com/${loc}/tools/${tool.slug}/`;
        }
        return languages;
      })(),
    },
    openGraph: {
      title: `${tTitle} — Free Online PDF Tool | toolconv`,
      description: tDesc,
      url,
      locale: (() => {
        const map: Record<string, string> = {
          en: "en_US", zh: "zh_CN", ja: "ja_JP", ko: "ko_KR",
          es: "es_ES", fr: "fr_FR", de: "de_DE", pt: "pt_BR",
          ru: "ru_RU", ar: "ar_SA", hi: "hi_IN", it: "it_IT",
        };
        return map[locale] || "en_US";
      })(),
      type: "website" as const,
      images: [{ url: `https://pdf.toolconv.com/og/${tool.slug}.png`, width: 1200, height: 630 }], // Generate OG images at /public/og/{slug}.png
    },
    twitter: {
      card: "summary_large_image",
      title: tTitle,
      description: tDesc,
      images: [`https://pdf.toolconv.com/og/${tool.slug}.png`],
    },
  };
}

// ─── FAQ per tool ───
function getFAQs(tool: ReturnType<typeof getTool>, dict: ReturnType<typeof t>): { q: string; a: string }[] {
  if (!tool) return [];
  return [
    { q: dict.toolPage.faqQFree, a: dict.toolPage.faqAFree },
    { q: dict.toolPage.faqQSafe, a: dict.toolPage.faqASafe },
    { q: dict.toolPage.faqQSignup, a: dict.toolPage.faqASignup },
  ];
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool || tool.requiresServer) notFound();

  const dict = t(locale);
  const tTitle = dict.toolItems[slug]?.title || tool.title;
  const tLongDesc = dict.toolItems[slug]?.longDescription || tool.longDescription;
  const guide = getPdfToolGuideContent(tool);
  const faqs = [...guide.faqs, ...getFAQs(tool, dict)];
  const related = VISIBLE_TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 4);
  const prefix = `/${locale}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      toolJsonLd(tool, locale),
      breadcrumbJsonLd([
        { name: dict.toolPage.breadcrumbHome, url: `${prefix}/` },
        { name: tTitle, url: `${prefix}/tools/${tool.slug}/` },
      ]),
      faqJsonLd(faqs),
      howToJsonLd(tTitle, guide.steps),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <nav className="flex text-sm text-gray-500 dark:text-gray-400">
          <a href={prefix} className="hover:text-purple-600">{dict.toolPage.breadcrumbHome}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white" aria-current="page">{tTitle}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-4 text-4xl">{tool.icon}</div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{tTitle}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{tLongDesc}</p>
        </div>
      </section>

      {/* Workspace */}
      <section className="pb-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ToolWorkspaceLoader slug={tool.slug} />
        </div>
      </section>

      {/* 广告位 - 工作区下方 */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AdBanner slot="4444444444" format="rectangle" className="my-8" />
      </div>

      {/* Practical guide */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">Practical guide for {tTitle}</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Example use case</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{guide.example}</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Settings explained</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {guide.settings.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Limitations</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {guide.limitations.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Troubleshooting</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {guide.troubleshooting.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white">{dict.toolPage.howItWorks}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {guide.steps.map((item, index) => (
              <div key={item.name} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">{index + 1}</div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white">{dict.toolPage.faqHeading}</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                <summary className="cursor-pointer font-medium text-gray-900 group-open:text-purple-600 dark:text-white dark:group-open:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:rounded-lg">{faq.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">{dict.toolPage.relatedTools}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((t) => <ToolCard key={t.slug} tool={t} locale={locale} dict={dict} />)}
            </div>
          </div>
        </section>
      )}

      {/* 广告位 - 相关工具下方 */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <AdBanner slot="5555555555" format="rectangle" className="my-8" />
      </div>
    </>
  );
}
