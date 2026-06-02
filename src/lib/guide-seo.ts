// ─── SEO Utilities for Guides ───
import type { Metadata } from "next";
import { SITE_URL, hreflangAlternates, ogLocale } from "./seo";
import type { GuideEntry } from "./guides";

/** SEO metadata for a guide page */
export function guideMeta(guide: GuideEntry, locale: string = "en"): Metadata {
  const content = guide.content[locale] || guide.content.en;
  const title = content.title;
  const desc = content.description;
  const url = `${SITE_URL}/${locale}/guides/${guide.slug}/`;

  return {
    title,
    description: desc,
    keywords: content.keywords,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/guides/${guide.slug}/`, locale),
    },
    openGraph: {
      title: `${title} | toolconv`,
      description: desc,
      url,
      locale: ogLocale(locale),
      type: "article",
      images: [{ url: `${SITE_URL}/og/${guide.slug}.png`, width: 1200, height: 630 }], // Generate OG images at /public/og/{slug}.png
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [`${SITE_URL}/og/${guide.slug}.png`],
    },
  };
}

/** SEO metadata for the guides listing page */
export function guidesListMeta(locale: string = "en"): Metadata {
  const title = "Guides & Tutorials — Free Online Tips | toolconv";
  const desc = "Browse our collection of step-by-step guides and tutorials for image and PDF processing. Learn tips and best practices.";
  const url = `${SITE_URL}/${locale}/guides/`;

  return {
    title,
    description: desc,
    keywords: ["guides", "tutorials", "image processing tips", "PDF guides", "online tools guides"],
    alternates: {
      canonical: url,
      languages: hreflangAlternates("/guides/", locale),
    },
    openGraph: {
      title: `Guides & Tutorials | toolconv`,
      description: desc,
      url,
      locale: ogLocale(locale),
      type: "website",
      images: [{ url: `${SITE_URL}/og/default.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Guides & Tutorials | toolconv",
      description: desc,
      images: [`${SITE_URL}/og/default.png`],
    },
  };
}
