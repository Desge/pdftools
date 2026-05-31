import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";
import { ALL_CONVERSIONS } from "@/lib/formats";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

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
          "x-default": `${SITE_URL}/en`,
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

    // Tool pages
    for (const tool of TOOLS) {
      entries.push({
        url: `${SITE_URL}${prefix}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
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
      });
    }
  }

  return entries;
}
