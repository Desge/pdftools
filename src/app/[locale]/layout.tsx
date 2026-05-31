import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { baseMeta, hreflangAlternates } from "@/lib/seo";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import "@/app/globals.css";

// System font stack (no external font loading needed)

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
        // For the homepage, locale-specific alternates are just locale prefixes
        ...(lang === "en"
          ? { zh: "https://pdf.toolconv.com/zh/" }
          : { en: "https://pdf.toolconv.com/en/" }),
      },
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
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
