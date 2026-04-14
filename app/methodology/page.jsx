import Link from 'next/link';

export const metadata = {
  title: 'Methodology — LinkedIn Optimizer',
  description:
    'How the LinkedIn Discoverability Score is calculated: data sources, keyword bank construction, scoring logic, and the assumptions behind the rewrite generator.',
  alternates: { canonical: 'https://linkedinoptimizer.com/methodology' },
};

export default function MethodologyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Methodology</h1>
      <p className="text-xs text-gray-400 mb-8">Last updated: April 2026</p>

      <div className="space-y-8 text-[15px] text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
          <p>
            The LinkedIn Optimizer uses a keyword-frequency scoring model to estimate how discoverable
            a LinkedIn About section is for a given role family. The score is a ratio: the number of
            role-relevant keywords present in the About section divided by the total number of keywords
            in that role's keyword bank, expressed as a percentage. The tool is 100% client-side —
            no text is transmitted to any server.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Data Sources</h2>
          <p className="mb-3">
            Keyword banks were constructed from three primary sources:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>LinkedIn Talent Solutions published guidance</strong> — LinkedIn regularly
              publishes recruiter search behaviour data, Boolean search best practices, and in-demand
              skill reports through the LinkedIn Economic Graph. These were used as the primary signal
              for which terms appear most frequently in recruiter searches.
              Source:{' '}
              <a href="https://business.linkedin.com/talent-solutions" target="_blank" rel="noopener noreferrer"
                className="text-indigo-600 hover:underline">
                LinkedIn Talent Solutions
              </a>
            </li>
            <li>
              <strong>World Economic Forum Future of Jobs Report 2025</strong> — Skill demand data
              across 12 major occupational categories was used to validate and extend keyword selection,
              particularly for emerging technical skills and cross-functional competencies.
              Source:{' '}
              <a href="https://www.weforum.org/reports/the-future-of-jobs-report-2025" target="_blank"
                rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                WEF Future of Jobs 2025
              </a>
            </li>
            <li>
              <strong>US Bureau of Labor Statistics Occupational Outlook Handbook</strong> — Role
              definitions and skill taxonomies from the OOH were used to ensure role families are
              categorised consistently and that keyword banks accurately reflect industry-standard
              role requirements.
              Source:{' '}
              <a href="https://www.bls.gov/ooh/" target="_blank" rel="noopener noreferrer"
                className="text-indigo-600 hover:underline">
                BLS Occupational Outlook Handbook
              </a>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Role Family Classification</h2>
          <p>
            The tool classifies user-entered job titles into one of 12 role families using keyword
            matching against a curated mapping table. Role families are: Software Engineering, Data,
            Product Management, Operations, Account Management, Marketing, Sales, Finance,
            HR & People Ops, Design, Project Management, and Customer Success.
          </p>
          <p className="mt-3">
            If a job title does not match any role family mapping — for example, a niche or hybrid
            title — the tool falls back to a merged keyword set drawing from all 12 role families,
            deduplicated. This provides broad coverage for unusual roles while slightly reducing the
            precision of missing keyword recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Scoring Logic</h2>
          <p>
            Scoring uses a simple ratio model:
          </p>
          <pre className="bg-gray-100 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto mt-3 mb-3">
{`score = Math.round(
  (matchedKeywords.length / totalKeywords.length) * 100
)`}
          </pre>
          <p>
            Matching is case-insensitive and substring-based. A keyword is counted as matched if it
            appears anywhere in the lowercased About text. Multi-word phrases (e.g. "data pipeline,"
            "cold outreach") are matched as full phrases, not word-by-word. This avoids false positives
            from partial matches.
          </p>
          <p className="mt-3">
            Score thresholds:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>0–40:</strong> Weak — significant keyword gaps, low likelihood of appearing in filtered recruiter searches</li>
            <li><strong>41–70:</strong> Moderate — some keyword coverage, but missing terms that affect search ranking</li>
            <li><strong>71–100:</strong> Strong — high keyword coverage, well-positioned for recruiter discovery</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Rewrite Generator</h2>
          <p>
            The rewrite generator takes the original About text and appends a closing paragraph that
            weaves in the top five missing keywords. The paragraph follows a role-specific template
            that varies in language and framing depending on the detected role family. For example,
            sales-family rewrites emphasise revenue and pipeline language; design-family rewrites
            use craft and systems terminology.
          </p>
          <p className="mt-3">
            The original text is preserved verbatim. Only the closing paragraph is generated. This
            is by design: the goal is to give users a starting point for editing, not a replacement
            for their authentic voice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Limitations and Assumptions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The Discoverability Score is a relative indicator, not an official LinkedIn metric.
              LinkedIn does not publish the full weighting of its search ranking algorithm.
            </li>
            <li>
              Keyword banks are curated for the most common role definitions in 2025–2026. Niche
              specialisations, regional variations, and emerging roles may not be fully represented.
            </li>
            <li>
              The tool does not account for LinkedIn profile sections outside the About field
              (headline, experience bullets, skills endorsements), which also influence search ranking.
            </li>
            <li>
              Keyword presence is necessary but not sufficient for high recruiter search ranking.
              Profile completeness, connection graph, and engagement signals also matter.
            </li>
          </ul>
        </section>

        <div className="pt-4">
          <p className="text-sm text-gray-500">
            Questions about the methodology?{' '}
            <Link href="/contact" className="text-indigo-600 hover:underline">Contact us</Link>.
            Ready to check your score?{' '}
            <Link href="/" className="text-indigo-600 hover:underline">Use the tool →</Link>
          </p>
        </div>

      </div>
    </main>
  );
}
