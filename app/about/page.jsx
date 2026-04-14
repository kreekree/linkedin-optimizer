import Link from 'next/link';

export const metadata = {
  title: 'About — LinkedIn Optimizer',
  description:
    'Learn who built LinkedIn Optimizer, why it exists, and how the discoverability scoring system works for the 2026 quiet hiring market.',
  alternates: { canonical: 'https://linkedinoptimizer.com/about' },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">About LinkedIn Optimizer</h1>
      <p className="text-xs text-gray-400 mb-8">Last updated: April 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed text-[15px]">

        <p>
          LinkedIn Optimizer was built for one reason: the rules of job searching changed in 2026, and
          most job seekers have not caught up. Recruiters no longer scroll feeds or wait for applications.
          They run keyword searches — Boolean queries inside LinkedIn Recruiter — and they surface candidates
          whose profiles contain the exact terms they're looking for. If your About section doesn't contain
          those terms, you are invisible to the searches that matter most.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-2">Who Built This</h2>
        <p>
          LinkedIn Optimizer is a product of TrendChaser, a small team of builders focused on creating
          data-driven tools for the modern job market. We build tools that solve real problems: the gap
          between how candidates present themselves and how recruiters actually search. Every tool we build
          is free at the core, privacy-first, and designed to give users real, actionable intelligence —
          not vanity scores or generic advice.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-2">Why This Tool Exists</h2>
        <p>
          The 2026 job market is defined by what analysts call "quiet hiring" — companies filling roles
          by identifying and approaching passive candidates on LinkedIn, rather than posting traditional
          job listings and waiting for applications. This shift means that your LinkedIn profile is now
          your primary job application, whether you've submitted one or not.
        </p>
        <p>
          The problem is that most people write their LinkedIn About sections the way they'd write a
          personal statement: narrative, conversational, and rich in soft skills. But LinkedIn Recruiter
          operates like a search engine. It surfaces profiles that contain the exact keywords that
          recruiters enter. A beautifully written About section with zero matching keywords ranks below
          a mediocre one that hits the right terms.
        </p>
        <p>
          This tool bridges that gap. It scores your About section against a bank of 12 role-specific
          keyword sets — built from observed recruiter search behaviour — and shows you exactly what's
          missing, what's working, and how to fix it.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-2">Data Sources</h2>
        <p>
          Our keyword banks are built from three sources:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>LinkedIn Recruiter search patterns</strong> — documented patterns from LinkedIn's
            own published guidance on recruiter search behaviour and LinkedIn Talent Insights data.
            See: <a href="https://business.linkedin.com/talent-solutions" target="_blank" rel="noopener noreferrer"
              className="text-indigo-600 hover:underline">LinkedIn Talent Solutions</a>.
          </li>
          <li>
            <strong>Bureau of Labor Statistics</strong> — occupational category definitions and in-demand
            skills data used to map role families accurately.
            See: <a href="https://www.bls.gov/ooh/" target="_blank" rel="noopener noreferrer"
              className="text-indigo-600 hover:underline">BLS Occupational Outlook Handbook</a>.
          </li>
          <li>
            <strong>World Economic Forum Future of Jobs Report 2025</strong> — skills and keyword data
            derived from the WEF's analysis of in-demand skills across major job categories.
            See: <a href="https://www.weforum.org/reports/the-future-of-jobs-report-2025" target="_blank"
              rel="noopener noreferrer" className="text-indigo-600 hover:underline">WEF Future of Jobs 2025</a>.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 pt-2">What This Tool Does Not Do</h2>
        <p>
          This tool does not access your LinkedIn account. It does not store your About section text.
          All processing happens in your browser — nothing is sent to any server. We do not collect
          personally identifiable information through the optimizer. See our{' '}
          <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link> for full details.
        </p>

        <p>
          The Discoverability Score is a relative indicator based on keyword frequency matching, not an
          official LinkedIn metric. LinkedIn does not publish its exact ranking algorithm. Our scoring
          is based on the best available evidence of how recruiter search and profile ranking work in 2026.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-2">Learn More</h2>
        <p>
          Read our <Link href="/methodology" className="text-indigo-600 hover:underline">Methodology page</Link> for
          a full breakdown of how the scoring works, or visit the{' '}
          <Link href="/blog" className="text-indigo-600 hover:underline">blog</Link> for guides on LinkedIn
          profile strategy in 2026. Questions? <Link href="/contact" className="text-indigo-600 hover:underline">Contact us</Link>.
        </p>
      </div>
    </main>
  );
}
