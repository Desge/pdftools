import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { SwRegistration } from "@/components/ui/sw-registration";
import { AdSenseScript } from "@/components/ui/adsense-script";
import { baseMeta, hreflangAlternates } from "@/lib/seo";
import { SUPPORTED_LOCALES, t } from "@/lib/i18n";
import "@/app/globals.css";

// System font stack — no external font loading needed

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = SUPPORTED_LOCALES.includes(locale as any) ? locale : "en";
  return {
    ...baseMeta(),
    alternates: {
      languages: {
        ...hreflangAlternates("/"),
        ...(lang === "en"
          ? { zh: "https://pdf.toolconv.com/zh/" }
          : { en: "https://pdf.toolconv.com/en/" }),
      },
    },
    // Preload critical assets
    other: {
      "preconnect-to": [
        // Preconnect for static assets — keep empty since everything is local
        // Add analytics/CDN origins here if any are added in the future
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const lang = SUPPORTED_LOCALES.includes(locale as any) ? locale : "en";
  const dict = t(lang as any);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className="h-full antialiased">
      <head>
        {/* PWA — manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />

        {/* PWA — iOS home screen icon */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Preconnect to sibling domains used in footer links (no critical resources, but helps navigation) */}
        <link rel="preconnect" href="https://image.toolconv.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unit.toolconv.com" crossOrigin="anonymous" />

        {/* DNS prefetch for faster origin resolution */}
        <link rel="dns-prefetch" href="https://image.toolconv.com" />
        <link rel="dns-prefetch" href="https://unit.toolconv.com" />

        {/* Preload the PDF worker (loaded lazily, but hint helps) */}
        <link rel="prefetch" href="/pdf.worker.min.mjs" as="script" crossOrigin="anonymous" />

        {/* Google AdSense */}
        <AdSenseScript />
      </head>
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <SwRegistration />
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
