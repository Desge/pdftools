"use client";

import Script from "next/script";

/** Google AdSense — loaded after page is interactive, errors are non-critical */
export function AdSenseScript() {
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
