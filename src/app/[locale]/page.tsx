// ─── Locale-aware Homepage (server component) ───
// Only the interactive category tabs + tool grid are client-side.
import { VISIBLE_TOOLS, getToolsByCategory } from "@/lib/tools";
import { t, DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/i18n";
import { siteJsonLd } from "@/lib/seo";
import type { LangDict } from "@/lib/i18n";
import { InteractiveTools } from "./home-interactive";
import { AdBanner } from "@/components/ads/AdBanner";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = t(locale as any);
  const prefix = `/${locale}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()) }} />
      <HeroSection dict={dict} locale={locale} toolCount={VISIBLE_TOOLS.length} />
      {/* 广告位 - 首页横幅 */}
      <AdBanner slot="6666666666" format="horizontal" className="my-6" />
      <InteractiveTools locale={locale} />
      <PrivacySection dict={dict} />
    </>
  );
}

function HeroSection({ dict, locale, toolCount }: { dict: LangDict; locale: string; toolCount: number }) {
  const prefix = `/${locale}`;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 dark:from-purple-950/20 dark:to-gray-950 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-200 opacity-30 blur-3xl dark:bg-purple-800" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-3xl dark:bg-pink-800" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          {dict.hero.line1}
          <br />
          <span className="text-gradient">{dict.hero.line2}</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {dict.hero.subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={`${prefix}/tools/merge-pdf`} className="gradient-brand rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-transform hover:scale-105">{dict.hero.ctaMerge}</a>
          <a href={`${prefix}/tools/compress-pdf`} className="rounded-xl border-2 border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-700 transition-transform hover:scale-105 dark:border-purple-800 dark:bg-gray-900 dark:text-purple-400">{dict.hero.ctaCompress}</a>
          <a href="#all-tools" className="rounded-xl px-6 py-3 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">{dict.hero.ctaAll}</a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-500">
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeNoUpload}</span>
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeFree}</span>
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeNoReg}</span>
          <span className="flex items-center gap-1.5"><span className="flex h-2 w-2 rounded-full bg-green-500" />{dict.hero.badgeOffline}</span>
        </div>
        <div className="mt-6">
          <a href={`${prefix}/guides/`} className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-5 py-2 text-sm font-semibold text-purple-700 transition-colors hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-950/40 dark:text-purple-400 dark:hover:bg-purple-900/60">
            📚 {dict.guides.title} →
          </a>
        </div>
      </div>
    </section>
  );
}

function PrivacySection({ dict }: { dict: LangDict }) {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-4 text-4xl">🔒</div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {dict.footer.privacy}
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">{dict.footer.privacyLine}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✅ {dict.hero.badgeNoUpload}</span>
          <span>✅ {dict.footer.privacy}</span>
          <span>✅ {dict.hero.badgeOffline}</span>
          <span>✅ 100%</span>
        </div>
      </div>
    </section>
  );
}
