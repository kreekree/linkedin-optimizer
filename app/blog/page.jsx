import Link from 'next/link';

export const metadata = {
  title: 'Blog — LinkedIn Optimizer',
  description:
    'Guides and research on LinkedIn profile strategy, recruiter keyword search, and how to get found in the 2026 quiet hiring market.',
  alternates: { canonical: 'https://linkedinoptimizer.com/blog' },
};

const posts = [
  {
    slug: 'how-recruiters-search-linkedin-2026',
    title: 'How LinkedIn Recruiters Actually Search for Candidates in 2026',
    date: 'April 2026',
    excerpt:
      'Boolean logic, keyword filters, and profile ranking — a recruiter-perspective breakdown of exactly how LinkedIn Recruiter surfaces candidates, and what your profile needs to do to appear.',
    tag: 'Recruiter Search',
  },
  {
    slug: 'quiet-hiring-2026-guide',
    title: 'The 2026 Quiet Hiring Playbook: How to Get Found Without Applying',
    date: 'April 2026',
    excerpt:
      "Quiet hiring accelerated in 2025–2026. Companies are filling roles by finding passive candidates on LinkedIn before they ever post a job. Here's how to position your profile to be discovered.",
    tag: 'Job Strategy',
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Blog</h1>
      <p className="text-gray-500 mb-10">
        Research and strategy guides for job seekers who want to be found — not just seen.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition block"
          >
            <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50
                             border border-indigo-100 rounded-full px-2.5 py-1 mb-4">
              {post.tag}
            </span>
            <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
            <p className="text-xs text-gray-400">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
