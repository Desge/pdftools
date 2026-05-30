import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for zero-cost hosting (Cloudflare Pages, GitHub Pages, etc.)
  output: "export",

  // Static export doesn't support next/image optimization
  images: { unoptimized: true },
};

export default nextConfig;
