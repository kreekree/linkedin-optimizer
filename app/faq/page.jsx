import Link from 'next/link';

export const metadata = {
  title: 'FAQ — LinkedIn Profile Optimizer',
  description:
    'Answers to the most common questions about LinkedIn discoverability, recruiter keyword search, quiet hiring in 2026, and how to optimize your About section.',
  alternates: { canonical: 'https://linkedinoptimizer.com/faq' },
};

const faqs = [
  {
    q: 'What is a LinkedIn Discoverability Score?',
    a: `A LinkedIn Discoverability Score is a measure of how likely your profile is to appear in LinkedIn Recruiter keyword searches for your target role. It is calculated by comparing the keywords in your LinkedIn About section against the terms recruiters most commonly search for in your role family. A higher score means more of your target keywords are present, which increases the probability of appearing in filtered recruiter searches. Our tool generates a score from 0 to 100, where 0–40 is considered weak, 41–70 is moderate, and 71–100 is strong. This score is a relative indicator based on keyword matching — it is not an official LinkedIn metric. LinkedIn does not publish its internal ranking algorithm, but keyword presence in profile text is a well-documented signal in LinkedIn's search ranking for recruiter tools.`,
  },
  {
    q: 'How do LinkedIn recruiters actually search for candidates?',
    a: `LinkedIn Recruiter — the professional tool used by corporate recruiters and talent acquisition teams — operates on Boolean keyword logic. Recruiters enter search queries using job titles, skills, tool names, and industry terms. LinkedIn surfaces profiles that contain those exact terms in the headline, About section, experience descriptions, and skills list. The About section is one of the most heavily weighted text fields because it contains the most unique, candidate-authored content. Recruiters also use filters for location, years of experience, education, and connection degree. In 2026, many companies additionally use LinkedIn Talent Insights to identify passive candidates in specific markets, which makes keyword presence even more important for candidates who are not actively applying.`,
  },
  {
    q: 'What keywords should I include in my LinkedIn About section?',
    a: `The right keywords depend entirely on your target role family. Software engineers should prioritise specific languages (JavaScript, Python, TypeScript), frameworks (React, Node.js), cloud platforms (AWS), and methodologies (CI/CD, agile). Data professionals should name their tools explicitly: SQL, Python, Tableau, Power BI, dbt, and Snowflake. Product managers should include roadmap, OKRs, A/B testing, cross-functional, and the specific tools they use (JIRA, Figma, Amplitude). Sales professionals must include pipeline, quota, ARR, their CRM (Salesforce), and their sales motion (outbound, discovery calls). Use our free LinkedIn Profile Optimizer to get a customised list of the keywords missing from your specific About section based on your target role.`,
  },
  {
    q: 'How long should my LinkedIn About section be?',
    a: `LinkedIn allows up to 2,600 characters in the About section. The optimal length for discoverability and conversion is typically 200–400 words — long enough to include the keywords that matter, but short enough that a recruiter can read it in under a minute. A very short About section (under 100 words) often lacks the keyword density needed to score well in recruiter searches. A very long About section (over 500 words) risks burying important keywords in content that recruiters won't fully read. The key is front-loading: put your most important keywords and your strongest impact statements in the first two sentences, which are visible before the reader clicks "See more." The rest of the section can be more expansive.`,
  },
  {
    q: 'Does LinkedIn keyword optimization actually work?',
    a: `Yes — and the evidence is consistent across recruiter testimony, LinkedIn's own published guidance, and third-party talent acquisition research. LinkedIn Recruiter is a keyword-driven search tool. Profiles that contain the search terms a recruiter enters rank higher in results. The effect is most pronounced for passive candidates — people who are not actively applying — because keyword search is the primary way recruiters find people who aren't in their immediate network. Independent career coaches and recruiters have consistently documented cases where candidates updated their LinkedIn About sections with specific keywords and saw a measurable increase in InMail outreach within days. Keyword optimisation is not a guarantee, but it is one of the highest-leverage changes a job seeker can make to their LinkedIn profile.`,
  },
  {
    q: 'What is quiet hiring, and how does it affect my LinkedIn strategy?',
    a: `Quiet hiring is the practice of filling roles by approaching and redeploying talent — often from existing employees or passive external candidates found via LinkedIn — rather than posting public job listings. It accelerated significantly in 2024–2026 as companies sought to reduce recruiting costs and time-to-hire. For job seekers, quiet hiring means that many roles are filled before they are ever posted publicly. The candidates who get approached are those whose LinkedIn profiles surface in recruiter keyword searches. If your profile is not optimised for your target role's keywords, you will not appear in these searches, and you will never know the opportunity existed. Optimising your About section for keyword discoverability is the most direct counter-strategy to the quiet hiring dynamic.`,
  },
  {
    q: 'How often should I update my LinkedIn About section?',
    a: `You should update your LinkedIn About section whenever you change your target role or when your skills stack changes materially. For active job seekers, updating every 2–3 months is reasonable — both to refresh keywords for changing market conditions and to reflect skills you are actively building. For passive candidates who want to remain discoverable without signalling an active job search, a quarterly review is sufficient. There is also evidence that LinkedIn's algorithm gives some recency weight to recently edited profiles, so updating your About when you are open to new roles can modestly increase your search appearance rate. You do not need to change the content substantially — even minor edits that add or update keywords can be effective.`,
  },
  {
    q: 'What is the difference between my LinkedIn About section and my headline?',
    a: `Your LinkedIn headline is the short text directly below your name, visible on all search results, messages, and connection requests. It is the highest-visibility text on your profile and should contain your job title and one or two key differentiators. Your About section is a longer narrative field — up to 2,600 characters — that appears further down your profile. Both fields are indexed by LinkedIn Recruiter search, but they serve different purposes. The headline anchors your professional identity and drives first impressions in search results. The About section provides the keyword depth that determines whether you appear in specific filtered searches. Both must be optimised, but optimising them for different goals: the headline for immediate impact, the About section for keyword coverage and discoverability.`,
  },
  {
    q: "How does LinkedIn's algorithm rank profiles in recruiter searches?",
    a: `LinkedIn has not publicly disclosed the full details of its recruiter search ranking algorithm, but several factors are well-documented. Keyword relevance — the presence and frequency of search terms in the profile — is a primary ranking factor. Profile completeness score also matters: profiles with all major fields filled in (headline, About, experience, skills, education) rank higher than incomplete profiles. Connection degree influences search visibility for non-recruiter users, though LinkedIn Recruiter seats can expand this reach. Skills endorsements from connections add signal weight to specific competencies. Open to Work signals (especially the private "Open to Work" mode visible only to recruiters) can boost appearance in talent searches. Recency of profile updates may carry a small positive weight for fresh content.`,
  },
  {
    q: 'Should I write my LinkedIn About in first person or third person?',
    a: `Write in first person — "I," not "She" or "John is a product manager." First person is the current standard across LinkedIn because it reads as authentic and direct. Third person sounds formal and dated, more like a press release than a professional introduction. LinkedIn itself recommends first-person voice in its profile optimisation guidance. The key is to combine the conversational tone of first person with the keyword density of an optimised document. You can achieve this by opening with a strong positioning statement ("I build scalable data pipelines that reduce reporting time by half"), followed by a keyword-rich description of your skills and tools, and closing with a brief statement of what kinds of roles you are currently interested in.`,
  },
  {
    q: 'What is LinkedIn Premium and is it worth it for job seekers?',
    a: `LinkedIn Premium Career is a paid tier that gives job seekers access to several features: InMail credits to message recruiters directly, visibility into who viewed your profile (up to 90 days), "Featured Applicant" badge on applications, AI-powered job matching, and salary benchmark data for target roles. For active job seekers, Premium can be worth the cost — especially the profile view data, which tells you which recruiters and companies are already noticing your profile, and the InMail credits, which allow direct outreach to decision-makers. For passive candidates, the value proposition is lower. Keyword-optimising your About section first is a higher-leverage free action. LinkedIn regularly offers free 30-day Premium trials, which is a low-risk way to evaluate whether the features meaningfully accelerate your search.`,
  },
  {
    q: 'How do I know if recruiters are finding my LinkedIn profile?',
    a: `The clearest signal is the "Who viewed your profile" feature — available in full for LinkedIn Premium users, and partially for free users (recent viewers only). Look for viewers with titles like "Recruiter," "Talent Acquisition," "HR Director," or "Hiring Manager" at companies in your target industry. A spike in recruiter profile views after updating your About section is a reliable indicator that your keyword optimisation is working. You can also monitor InMail volume — an uptick in recruiter messages after a profile update strongly suggests improved search ranking. Free users can see a count of profile views over the past 7 days and total search appearances over 90 days in LinkedIn's analytics section. Baseline this number, update your About with missing keywords, and check again after 2 weeks to measure impact.`,
  },
];

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h1>
      <p className="text-gray-500 mb-10">
        Everything you need to know about LinkedIn profile discoverability, recruiter search, and the 2026
        quiet hiring market. Can't find your answer?{' '}
        <Link href="/contact" className="text-indigo-600 hover:underline">Contact us</Link>.
      </p>

      <div className="space-y-0 divide-y divide-gray-100">
        {faqs.map((faq, i) => (
          <details key={i} className="group py-5">
            <summary className="flex items-start justify-between cursor-pointer list-none gap-4">
              <span className="text-base font-semibold text-gray-900 group-open:text-indigo-600 transition">
                {faq.q}
              </span>
              <span className="mt-0.5 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform text-lg leading-none">
                ↓
              </span>
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
        <p className="text-sm font-bold text-gray-900 mb-2">Ready to check your score?</p>
        <p className="text-sm text-gray-500 mb-4">
          Use our free tool to get your LinkedIn Discoverability Score and a keyword-optimized rewrite
          of your About section in under 2 minutes.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold
                     hover:bg-indigo-700 transition"
        >
          Analyze My Profile →
        </Link>
      </div>
    </main>
  );
}
