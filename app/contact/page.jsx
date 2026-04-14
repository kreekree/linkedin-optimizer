export const metadata = {
  title: 'Contact — LinkedIn Optimizer',
  description: 'Contact the LinkedIn Optimizer team with questions, feedback, or partnership enquiries.',
  alternates: { canonical: 'https://linkedinoptimizer.com/contact' },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-500 mb-10">
        Questions, feedback, or partnership enquiries — reach us at the email below.
        We read every message and respond within 2 business days.
      </p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">

        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
          <a
            href="mailto:hello@linkedinoptimizer.com"
            className="text-base font-semibold text-indigo-600 hover:underline"
          >
            hello@linkedinoptimizer.com
          </a>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Common questions</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>🛠 Bug reports or tool feedback → include your browser and OS</li>
            <li>📊 Keyword accuracy questions → include your role title</li>
            <li>🤝 Partnership or affiliate enquiries → tell us about your audience</li>
            <li>📰 Press or media → include your publication name and deadline</li>
          </ul>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500">
            LinkedIn Optimizer is built by TrendChaser. This is a small team — we appreciate
            concise, specific messages. We do not respond to unsolicited sales pitches.
          </p>
        </div>

      </div>
    </main>
  );
}
