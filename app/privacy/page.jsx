export const metadata = {
  title: 'Privacy Policy — LinkedIn Optimizer',
  description: 'Privacy policy for LinkedIn Optimizer: how we handle data, cookies, and analytics.',
  alternates: { canonical: 'https://linkedinoptimizer.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-xs text-gray-400 mb-8">Last updated: April 2026</p>

      <div className="space-y-6 text-[15px] text-gray-700 leading-relaxed">

        <p>
          LinkedIn Optimizer ("we," "us," "our") is committed to protecting your privacy.
          This policy explains what data we collect, how we use it, and your rights.
        </p>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Profile Text You Paste</h2>
          <p>
            The LinkedIn About section text you paste into the optimizer is processed entirely
            in your browser using client-side JavaScript. This text is never transmitted to
            our servers. We do not store, log, or have access to any text you enter into the tool.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Analytics</h2>
          <p>
            We use two analytics tools to understand how the site is used:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              <strong>Google Analytics 4 (GA4)</strong> — collects anonymised usage data including
              pages visited, time on page, device type, and approximate location (country/region).
              GA4 uses cookies. You can opt out using Google's{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer"
                className="text-indigo-600 hover:underline">Analytics Opt-out Browser Add-on</a>.
            </li>
            <li>
              <strong>Umami</strong> — a privacy-first, cookieless analytics tool. Umami does not
              use cookies, does not collect personally identifiable information, and is fully
              GDPR-compliant. No consent banner is required for Umami.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Cookies</h2>
          <p>
            LinkedIn Optimizer itself does not set cookies. Google Analytics 4 may set cookies for
            analytics purposes. Advertising units (Google AdSense) may set cookies related to ad
            targeting and measurement. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Advertising</h2>
          <p>
            This site may display advertisements served by Google AdSense. Google may use cookies
            and web beacons to serve ads based on prior visits to this and other websites.
            You can opt out of personalised advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
              className="text-indigo-600 hover:underline">Google Ads Settings</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Affiliate Links</h2>
          <p>
            This site contains affiliate links to third-party services (including LinkedIn Premium).
            If you click an affiliate link and make a purchase, we may earn a commission at no
            additional cost to you. We only link to services we believe are genuinely useful.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Third-Party Links</h2>
          <p>
            This site links to external websites for reference purposes. We are not responsible
            for the privacy practices of those sites. We recommend reviewing the privacy policy
            of any external site you visit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">7. Contact</h2>
          <p>
            For privacy-related questions, email us at{' '}
            <a href="mailto:hello@linkedinoptimizer.com" className="text-indigo-600 hover:underline">
              hello@linkedinoptimizer.com
            </a>.
          </p>
        </section>

      </div>
    </main>
  );
}
