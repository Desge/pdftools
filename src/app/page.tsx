// ─── Root redirect: / → /en/ ───
// Server-side 307 redirect — Google crawler friendly

import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/en/");
}
