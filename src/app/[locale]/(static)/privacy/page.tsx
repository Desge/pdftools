// ─── Privacy Policy Page (server component) ───
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function PrivacyPage({
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
          <span className="text-gray-900 dark:text-white" aria-current="page">{dict.pages.privacy.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-4 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{dict.pages.privacy.title}</h1>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{dict.pages.privacy.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Intro */}
          <div className="mb-8 rounded-xl border border-purple-100 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/20">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{dict.pages.privacy.intro}</p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.privacy.s1Title}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.privacy.s1Content}</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.privacy.s2Title}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.privacy.s2Content}</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.privacy.s3Title}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.privacy.s3Content}</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.privacy.s4Title}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.privacy.s4Content}</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.privacy.s5Title}</h2>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.privacy.s5Content}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.privacy.contact}</p>
          </div>
        </div>
      </section>
    </>
  );
}
