// ─── Root redirect: / → /en/ ───
"use client";
import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace("/en/");
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
    </div>
  );
}
