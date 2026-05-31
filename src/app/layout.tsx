import "./globals.css";

/// Root layout — minimal shell for the redirect page (/).
/// The actual app layout (Header, Footer, etc.) lives in [locale]/layout.tsx.
/// We omit <html>/<body> here so [locale]/layout.tsx can set lang dynamically.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
