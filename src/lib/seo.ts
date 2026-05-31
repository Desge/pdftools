// ─── SEO Utilities: metadata, JSON-LD, titles ───
import type { Metadata } from "next";
import type { ToolMeta, ConversionPair } from "./types";

const SITE_NAME = "PDFlikes — Free Online PDF Tools";
const SITE_URL = "https://pdf.toolconv.com";
const SITE_DESCRIPTION =
  "Free online PDF tools that run entirely in your browser. Merge, split, compress, convert, and edit PDFs — no upload, no sign-up, 100% private.";

/** Base metadata for the entire site */
export function baseMeta(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_NAME,
      template: `%s | PDFlikes`,
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
    authors: [{ name: "PDFlikes" }],
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** SEO metadata for a tool page */
export function toolMeta(tool: ToolMeta): Metadata {
  const title = tool.title;
  const desc = tool.description;
  const url = `${SITE_URL}/tools/${tool.slug}/`;

  return {
    title,
    description: desc,
    keywords: tool.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — Free Online PDF Tool | PDFlikes`,
      description: desc,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}

/** SEO metadata for a conversion page */
export function conversionMeta(pair: ConversionPair): Metadata {
  const title = `${pair.from.name} to ${pair.to.name}`;
  const desc = `Convert ${pair.from.name} to ${pair.to.name} online, free, and 100% private. No upload required — all processing happens in your browser.`;
  const url = `${SITE_URL}/convert/${pair.slug}/`;

  return {
    title: `${title} Converter`,
    description: desc,
    keywords: [
      `${pair.from.ext} to ${pair.to.ext}`,
      `${pair.from.name.toLowerCase()} to ${pair.to.name.toLowerCase()} converter`,
      `convert ${pair.from.name.toLowerCase()} to ${pair.to.name.toLowerCase()}`,
      `free ${pair.from.name.toLowerCase()} to ${pair.to.name.toLowerCase()} converter`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} Converter — Free Online | PDFlikes`,
      description: desc,
      url,
      type: "website",
    },
  };
}

/** JSON-LD WebApplication schema for a tool page */
export function toolJsonLd(tool: ToolMeta): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title,
    description: tool.longDescription,
    url: `${SITE_URL}/tools/${tool.slug}/`,
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
