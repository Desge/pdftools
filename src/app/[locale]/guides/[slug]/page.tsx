// ─── Guide Article Page: /[locale]/guides/[slug] ───
import { notFound } from "next/navigation";
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";
import { GUIDES, getGuide } from "@/lib/guides";
import { guideMeta } from "@/lib/guide-seo";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const guide of GUIDES) {
      params.push({ locale, slug: guide.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  return guide ? guideMeta(guide, locale) : {};
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const dict = t(locale);
  const prefix = `/${locale}`;
  const content = guide.content[locale] || guide.content.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: content.title,
        description: content.description,
        url: `${prefix}/guides/${guide.slug}/`,
        author: { "@type": "Organization", name: "toolconv" },
      },
      breadcrumbJsonLd([
        { name: dict.toolPage.breadcrumbHome, url: `${prefix}/` },
        { name: dict.guides.breadcrumbGuides, url: `${prefix}/guides/` },
        { name: content.title, url: `${prefix}/guides/${guide.slug}/` },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-4xl px-4 pt-6 sm:px-6">
        <nav className="flex text-sm text-gray-500 dark:text-gray-400">
          <a href={prefix} className="hover:text-purple-600">{dict.toolPage.breadcrumbHome}</a>
          <span className="mx-2">/</span>
          <a href={`${prefix}/guides/`} className="hover:text-purple-600">{dict.guides.breadcrumbGuides}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white" aria-current="page">{content.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="pb-6 pt-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-4 text-5xl text-center">{guide.icon}</div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white text-center">{content.title}</h1>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-600 dark:text-gray-400">{content.description}</p>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:text-gray-900 prose-a:text-purple-600">
            {content.paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300 text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Guides */}
      <section className="border-t border-gray-200 py-8 dark:border-gray-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <a
            href={`${prefix}/guides/`}
            className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            {dict.guides.backToGuides}
          </a>
        </div>
      </section>
    </>
  );
}
