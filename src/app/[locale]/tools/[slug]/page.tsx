// ─── Locale-aware Tool Page: /[locale]/tools/[slug] ───
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOOLS, getTool } from "@/lib/tools";
import { toolMeta, toolJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { ToolCard } from "@/components/ui/tool-card";
import { ToolWorkspaceLoader } from "@/components/tools/tool-workspace-loader";
import { t, DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n";

// ─── generateStaticParams for SSG (all locales × all tools) ───
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const tool of TOOLS) {
      params.push({ locale, slug: tool.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  return tool ? toolMeta(tool) : {};
}

// ─── FAQ per tool ───
function getFAQs(tool: ReturnType<typeof getTool>, dict: ReturnType<typeof t>): { q: string; a: string }[] {
  if (!tool) return [];
  return [{
    q: `Is ${tool.title} free to use?`,
    a: `Yes! ${tool.title} is completely free. No sign-up, no limits, no watermarks. All processing happens locally in your browser.`,
  }, {
    q: "Do my files leave my device?",
    a: "No. All toolconv tools process files entirely in your browser. Nothing is ever uploaded to any server.",
  }];
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const dict = t(locale);
  const faqs = getFAQs(tool, dict);
  const related = TOOLS.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 4);
  const prefix = `/${locale}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      toolJsonLd(tool),
      breadcrumbJsonLd([
        { name: dict.toolPage.breadcrumbHome, url: prefix },
        { name: tool.title, url: `${prefix}/tools/${tool.slug}` },
      ]),
      faqJsonLd(faqs),
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
          <span className="text-gray-900 dark:text-white">{tool.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-4 text-4xl">{tool.icon}</div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{tool.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{tool.longDescription}</p>
        </div>
      </section>

      {/* Workspace */}
      <section className="pb-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ToolWorkspaceLoader slug={tool.slug} />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 dark:text-white">{dict.toolPage.howItWorks}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: dict.toolPage.step1Title, desc: dict.toolPage.step1Desc },
              { step: "2", title: dict.toolPage.step2Title, desc: dict.toolPage.step2Desc },
              { step: "3", title: dict.toolPage.step3Title, desc: dict.toolPage.step3Desc },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-lg font-bold text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">{item.step}</div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
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
                <summary className="cursor-pointer font-medium text-gray-900 group-open:text-purple-600 dark:text-white dark:group-open:text-purple-400">{faq.q}</summary>
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
              {related.map((t) => <ToolCard key={t.slug} tool={t} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
