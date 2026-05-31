// ─── Converter Client Loader ───
// Client component wrapper: dynamically imports ConverterClient with ssr:false
// Required because next/dynamic with ssr:false is not allowed in Server Components
"use client";

import dynamic from "next/dynamic";
import type { ConversionPair } from "@/lib/types";

const ConverterClient = dynamic(
  () => import("./ConverterClient").then((m) => ({ default: m.ConverterClient })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />
        <p className="text-sm text-gray-500">Loading converter...</p>
      </div>
    ),
  }
);

export function ConverterClientLoader({ pair, locale }: { pair: ConversionPair; locale: string }) {
  return <ConverterClient pair={pair} locale={locale} />;
}
