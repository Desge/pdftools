import "./globals.css";

/// Root layout — minimal shell for the redirect page (/).
/// The actual app layout (Header, Footer, etc.) lives in [locale]/layout.tsx.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
