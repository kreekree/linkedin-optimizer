import { AdUnit } from '@/components/AdUnit';
import { ProfileOptimizer } from '@/components/ProfileOptimizer';

export const metadata = {
  title: 'LinkedIn Profile Optimizer — Get Found by Recruiters in 2026',
  description:
    'Free tool: Paste your LinkedIn About section and get a discoverability score, missing keywords, and an optimized rewrite. Built for the 2026 quiet hiring market.',
  alternates: { canonical: 'https://linkedinoptimizer.com/' },
};

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">

      {/* Hero */}
      <div className="pt-10 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
          Get Found by Recruiters in 2026
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          Paste your LinkedIn About section. Get a Discoverability Score, keyword gap analysis,
          and an optimized rewrite — in seconds.
        </p>
        <div className="mt-3 inline-block bg-amber-50 text-amber-700 text-xs font-semibold
                        px-3 py-1.5 rounded-full border border-amber-100">
          ✦ Built for the 2026 Quiet Hiring market
        </div>
      </div>

      {/* Ad 1 — below hero */}
      <AdUnit slot="1234567890" />

      {/* Main tool */}
      <ProfileOptimizer />

    </main>
  );
}
