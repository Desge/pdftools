// ─── Contact Page (server component) ───
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function ContactPage({
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
          <span className="text-gray-900 dark:text-white" aria-current="page">{dict.pages.contact.title}</span>
        </nav>
      </div>

      {/* Header */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">{dict.pages.contact.title}</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">{dict.pages.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Email Support */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.contact.emailTitle}</h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{dict.pages.contact.emailDesc}</p>
              <a
                href={`mailto:${dict.pages.contact.supportEmail}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                {dict.pages.contact.supportEmail} →
              </a>
            </div>

            {/* Feature Requests */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.contact.featureTitle}</h2>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{dict.pages.contact.featureDesc}</p>
              <a
                href={`mailto:${dict.pages.contact.supportEmail}?subject=Feature Request`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
              >
                {dict.pages.contact.supportEmail} →
              </a>
            </div>

            {/* Response Time */}
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{dict.pages.contact.responseTitle}</h2>
              <p className="mt-auto text-sm text-gray-600 dark:text-gray-400">{dict.pages.contact.responseDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
