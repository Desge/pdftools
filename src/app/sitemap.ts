import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";
import { ALL_CONVERSIONS } from "@/lib/formats";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { GUIDES } from "@/lib/guides";

const SITE_URL = "https://pdf.toolconv.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    const prefix = `/${locale}`;

    // Homepage
    entries.push({
      url: `${SITE_URL}${prefix}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "x-default": `${SITE_URL}`,
          ...Object.fromEntries(SUPPORTED_LOCALES.map((l) => [l, `${SITE_URL}/${l}`])),
        },
      },
    });

    // Pricing
    entries.push({
      url: `${SITE_URL}${prefix}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });

    // About
    entries.push({
      url: `${SITE_URL}${prefix}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });

    // Privacy
    entries.push({
      url: `${SITE_URL}${prefix}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    });

    // Terms
    entries.push({
      url: `${SITE_URL}${prefix}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    });

    // Contact
    entries.push({
      url: `${SITE_URL}${prefix}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    });

    // Tool pages
    for (const tool of TOOLS) {
      entries.push({
        url: `${SITE_URL}${prefix}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
        alternates: {
          languages: {
            "x-default": `${SITE_URL}/tools/${tool.slug}`,
            ...Object.fromEntries(SUPPORTED_LOCALES.map((l) => [l, `${SITE_URL}/${l}/tools/${tool.slug}`])),
          },
        },
      });
    }

    // Top conversion pages
    const topConversions = ALL_CONVERSIONS.filter((c) => c.clientSide && c.quality >= 3).slice(0, 200);
    for (const conv of topConversions) {
      entries.push({
        url: `${SITE_URL}${prefix}/convert/${conv.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            "x-default": `${SITE_URL}/convert/${conv.slug}`,
            ...Object.fromEntries(SUPPORTED_LOCALES.map((l) => [l, `${SITE_URL}/${l}/convert/${conv.slug}`])),
          },
        },
      });
    }

    // Guide listing page
    entries.push({
      url: `${SITE_URL}${prefix}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });

    // Guide pages
    for (const guide of GUIDES) {
      entries.push({
        url: `${SITE_URL}${prefix}/guides/${guide.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            "x-default": `${SITE_URL}/guides/${guide.slug}`,
            ...Object.fromEntries(SUPPORTED_LOCALES.map((l) => [l, `${SITE_URL}/${l}/guides/${guide.slug}`])),
          },
        },
      });
    }
  }

  return entries;
}
