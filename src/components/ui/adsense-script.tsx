"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

function isAdAllowedPath(pathname: string | null) {
  if (!pathname) return false;
  return /^\/[a-z]{2}(?:\/tools\/|\/convert\/|\/guides(?:\/|$))/.test(pathname);
}

/** Google AdSense — loaded after page is interactive, errors are non-critical */
export function AdSenseScript() {
  const pathname = usePathname();

  if (!isAdAllowedPath(pathname)) return null;

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3840385382533387"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onError={() => {
        // AdSense script failed to load — non-critical, site works without it
      }}
    />
  );
}
