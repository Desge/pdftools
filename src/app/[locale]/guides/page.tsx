// ─── Guides & Tutorials Listing Page ───
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";
import { GUIDES } from "@/lib/guides";
import { guidesListMeta } from "@/lib/guide-seo";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return guidesListMeta(locale);
}

export default async function GuidesListPage({
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
          <span className="text-gray-900 dark:text-white" aria-current="page">{dict.guides.breadcrumbGuides}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{dict.guides.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{dict.guides.description}</p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => {
              const content = guide.content[locale] || guide.content.en;
              return (
                <a
                  key={guide.slug}
                  href={`${prefix}/guides/${guide.slug}/`}
                  className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 text-4xl">{guide.icon}</div>
                  <h2 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                    {content.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {content.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-purple-600 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300">
                    {dict.guides.readGuide}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
