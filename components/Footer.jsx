import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Tool</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/"            className="hover:text-gray-900 transition">Profile Optimizer</Link></li>
              <li><Link href="/faq"         className="hover:text-gray-900 transition">FAQ</Link></li>
              <li><Link href="/blog"        className="hover:text-gray-900 transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Info</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/about"       className="hover:text-gray-900 transition">About</Link></li>
              <li><Link href="/methodology" className="hover:text-gray-900 transition">Methodology</Link></li>
              <li><Link href="/contact"     className="hover:text-gray-900 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy"     className="hover:text-gray-900 transition">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-3">Upgrade</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="https://linkedin.com/premium" target="_blank" rel="noopener noreferrer"
                  className="hover:text-gray-900 transition">
                  LinkedIn Premium →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© {year} LinkedIn Optimizer. All rights reserved.</p>
          <p className="text-xs text-gray-400 text-center sm:text-right max-w-md">
            This site is for informational purposes only. Not legal, financial, or professional advice.
            Keywords based on observed recruiter search behaviour in 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
