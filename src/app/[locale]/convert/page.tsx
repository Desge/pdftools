// ─── Convert Index Page: /[locale]/convert/ ───
import { ALL_CONVERSIONS } from "@/lib/formats";
import { t, SUPPORTED_LOCALES } from "@/lib/i18n";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = t(locale as any);
  return {
    title: `${dict.header.convert} — Free Online PDF Converter | toolconv`,
    description: dict.convert.subtitleGeneric || "Convert PDF to and from various formats. Free, no upload, works in your browser.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/convert/`,
    },
  };
}

export default async function ConvertIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = t(locale as any);
  const prefix = `/${locale}`;

  // Group conversions by "from" format, only show client-side with quality >= 3
  const clientConversions = ALL_CONVERSIONS.filter((c) => c.clientSide && c.quality >= 3);
  const fromGroups = new Map<string, typeof clientConversions>();
  for (const c of clientConversions) {
    const key = c.from.ext;
    if (!fromGroups.has(key)) fromGroups.set(key, []);
    fromGroups.get(key)!.push(c);
  }

  // Sort groups: PDF first, then alphabetical
  const sortedGroups = Array.from(fromGroups.entries()).sort(([a], [b]) => {
    if (a === "pdf") return -1;
    if (b === "pdf") return 1;
    return a.localeCompare(b);
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: dict.toolPage.breadcrumbHome, url: `${prefix}/` },
        { name: dict.header.convert, url: `${prefix}/convert/` },
      ]),
      {
        "@type": "CollectionPage",
        name: `${dict.header.convert} — toolconv`,
        url: `${SITE_URL}/${locale}/convert/`,
        description: dict.convert.subtitleGeneric || "Convert PDF to and from various formats.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <nav className="flex text-sm text-gray-500 dark:text-gray-400">
          <a href={`${prefix}/`} className="hover:text-purple-600">{dict.toolPage.breadcrumbHome}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white" aria-current="page">{dict.header.convert}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            {dict.header.convert}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {dict.convert.subtitleGeneric || "Convert PDF to and from various formats. Free, no upload, works in your browser."}
          </p>
        </div>
      </section>

      {/* Conversion groups */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="space-y-8">
            {sortedGroups.map(([fromExt, conversions]) => {
              const fromName = conversions[0].from.name;
              return (
                <div key={fromExt}>
                  <h2 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                    {fromName} ({fromExt.toUpperCase()})
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {conversions.map((c) => (
                      <a
                        key={c.slug}
                        href={`${prefix}/convert/${c.slug}/`}
                        className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-purple-700 dark:hover:text-purple-400"
                      >
                        → {c.to.name} ({c.to.ext.toUpperCase()})
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
