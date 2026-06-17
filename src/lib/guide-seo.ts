// ─── SEO Utilities for Guides ───
import type { Metadata } from "next";
import { SITE_URL, hreflangAlternates, ogLocale } from "./seo";
import { getGuideLocales, hasGuideLocale, type GuideEntry } from "./guides";

function guideHreflangAlternates(guide: GuideEntry): NonNullable<Metadata["alternates"]>["languages"] {
  const path = `/guides/${guide.slug}/`;
  return {
    "x-default": `${SITE_URL}/en${path}`,
    ...Object.fromEntries(getGuideLocales(guide).map((loc) => [loc, `${SITE_URL}/${loc}${path}`])),
  };
}

/** SEO metadata for a guide page */
export function guideMeta(guide: GuideEntry, locale: string = "en"): Metadata {
  const content = guide.content[locale] || guide.content.en;
  const isLocalized = hasGuideLocale(guide, locale);
  const title = content.title;
  const desc = content.description;
  const url = isLocalized
    ? `${SITE_URL}/${locale}/guides/${guide.slug}/`
    : `${SITE_URL}/en/guides/${guide.slug}/`;

  return {
    title,
    description: desc,
    keywords: content.keywords,
    robots: { index: isLocalized, follow: true },
    alternates: {
      canonical: url,
      languages: guideHreflangAlternates(guide),
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
