import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — no Node.js server, pure HTML/CSS/JS output
  output: "export",

  // Enable gzip/brotli compression for static assets
  compress: true,

  // Optimize image handling for static export
  images: { unoptimized: true },

  // Security & performance
  poweredByHeader: false,
  reactStrictMode: true,
  generateEtags: true,

  // Skip trailing slash redirect (faster, avoids extra 308)
  skipTrailingSlashRedirect: true,

  // Ensure all URLs include trailing slashes for SEO consistency
  trailingSlash: true,
};

export default nextConfig;
