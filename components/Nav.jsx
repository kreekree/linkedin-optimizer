import Link from 'next/link';

export function Nav() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-xl">💼</span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition">
              LinkedIn Optimizer
            </span>
            <span className="text-xs text-gray-400 font-normal">
              by NoGigiddy
            </span>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/blog"        className="hover:text-gray-900 transition">Blog</Link>
          <Link href="/faq"         className="hover:text-gray-900 transition">FAQ</Link>
          <Link href="/methodology" className="hover:text-gray-900 transition">Methodology</Link>
          <Link href="/about"       className="hover:text-gray-900 transition">About</Link>
        </nav>

        <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100 whitespace-nowrap">
          Free · No Login
        </span>
      </div>
    </header>
  );
}
