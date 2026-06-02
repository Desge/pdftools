// ─── About Page (server component) ───
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function AboutPage({
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
          <span className="text-gray-900 dark:text-white" aria-current="page">{dict.pages.about.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{dict.pages.about.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.about.subtitle}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-8 dark:border-purple-900 dark:from-purple-950/20 dark:to-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{dict.pages.about.missionTitle}</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">{dict.pages.about.missionDesc}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 pb-16 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.about.value1Title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.about.value1Desc}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.about.value2Title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.about.value2Desc}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.about.value3Title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.about.value3Desc}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.about.value4Title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.about.value4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-16 pt-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">{dict.pages.about.storyTitle}</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">{dict.pages.about.storyDesc}</p>
          </div>
        </div>
      </section>
    </>
  );
}
