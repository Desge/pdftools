// ─── Site Footer ───
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Product */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</Link></li>
              <li><Link href="/#all-tools" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">All Tools</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Popular Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/merge-pdf" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Merge PDF</Link></li>
              <li><Link href="/tools/compress-pdf" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Compress PDF</Link></li>
              <li><Link href="/tools/pdf-to-word" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">PDF to Word</Link></li>
              <li><Link href="/tools/jpg-to-pdf" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">JPG to PDF</Link></li>
            </ul>
          </div>

          {/* Convert */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Convert</h3>
            <ul className="space-y-2">
              <li><Link href="/convert/pdf-to-jpg" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">PDF to JPG</Link></li>
              <li><Link href="/convert/heic-to-pdf" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">HEIC to PDF</Link></li>
              <li><Link href="/convert/markdown-to-pdf" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Markdown to PDF</Link></li>
              <li><Link href="/convert/html-to-pdf" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">HTML to PDF</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Terms</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PDFlikes. All PDF processing happens entirely in your browser.
            Your files are never uploaded to any server. &middot; 100% Privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
