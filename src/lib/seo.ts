// ─── SEO Utilities: metadata, JSON-LD, titles ───
import type { Metadata } from "next";
import type { ToolMeta, ConversionPair } from "./types";
import { SUPPORTED_LOCALES } from "./i18n";

const SITE_NAME = "toolconv — Free Online PDF Tools";
const SITE_URL = "https://pdf.toolconv.com";
const SITE_DESCRIPTION =
  "Free online PDF tools that run entirely in your browser. Merge, split, compress, convert, and edit PDFs — no upload, no sign-up, 100% private.";

/** Default OG image path */
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/** Build hreflang alternates for a given path (e.g. "/tools/merge-pdf") */
export function hreflangAlternates(path: string = "", locale: string = "en"): NonNullable<Metadata["alternates"]>["languages"] {
  const languages: Record<string, string> = {
    "x-default": `${SITE_URL}/en${path}`,
  };
  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}${path}`;
  }
  return languages;
}

/** Base metadata for the entire site */
export function baseMeta(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_NAME,
      template: `%s | toolconv`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
      "pdf tools",
      "free pdf editor",
      "merge pdf",
      "compress pdf",
      "pdf converter",
      "online pdf tools",
      "no upload pdf tools",
    ],
    authors: [{ name: "toolconv" }],
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      images: [OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

/** SEO metadata for a tool page */
export function toolMeta(tool: ToolMeta, locale: string = "en"): Metadata {
  const title = tool.title;
  const desc = tool.description;
  const url = `${SITE_URL}/${locale}/tools/${tool.slug}/`;

  return {
    title,
    description: desc,
    keywords: tool.keywords,
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/tools/${tool.slug}/`, locale),
    },
    openGraph: {
      title: `${title} — Free Online PDF Tool | toolconv`,
      description: desc,
      url,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [OG_IMAGE],
    },
  };
}

/** SEO metadata for a conversion page */
export function conversionMeta(pair: ConversionPair, locale: string = "en"): Metadata {
  const title = `${pair.from.name} to ${pair.to.name} Converter`;
  const desc = `Convert ${pair.from.name} to ${pair.to.name} online, free, and 100% private. No upload required — all processing happens in your browser.`;
  const url = `${SITE_URL}/${locale}/convert/${pair.slug}/`;

  return {
    title,
    description: desc,
    keywords: [
      `${pair.from.ext} to ${pair.to.ext}`,
      `${pair.from.name.toLowerCase()} to ${pair.to.name.toLowerCase()} converter`,
      `convert ${pair.from.name.toLowerCase()} to ${pair.to.name.toLowerCase()}`,
      `free ${pair.from.name.toLowerCase()} to ${pair.to.name.toLowerCase()} converter`,
    ],
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/convert/${pair.slug}/`, locale),
    },
    openGraph: {
      title: `${title} — Free Online | toolconv`,
      description: desc,
      url,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [OG_IMAGE],
    },
  };
}

/** JSON-LD WebApplication schema for a tool page */
export function toolJsonLd(tool: ToolMeta, locale: string = "en"): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    description: tool.longDescription,
    url: `${SITE_URL}/${locale}/tools/${tool.slug}/`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

/** JSON-LD BreadcrumbList */
export function breadcrumbJsonLd(items: { name: string; url: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** JSON-LD FAQPage schema */
export function faqJsonLd(questions: { q: string; a: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.a,
      },
    })),
  };
}

/** JSON-LD HowTo schema for tool pages */
export function howToJsonLd(name: string, steps: { name: string; text: string }[]): object {
  return {
    "@type": "HowTo",
    name,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

/** JSON-LD WebSite + Organization schemas (for homepage) */
export function siteJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "toolconv",
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/en/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "toolconv",
        url: SITE_URL,
        logo: OG_IMAGE,
        description: SITE_DESCRIPTION,
      },
    ],
  };
}
