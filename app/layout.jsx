import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    default: 'LinkedIn Profile Optimizer — Get Found by Recruiters in 2026',
    template: '%s | LinkedIn Optimizer',
  },
  description:
    'Free tool: Paste your LinkedIn About section and get a discoverability score, missing keywords, and an optimized rewrite. Built for the 2026 quiet hiring market.',
  metadataBase: new URL('https://linkedinoptimizer.com'),
  openGraph: {
    siteName: 'LinkedIn Optimizer',
    type: 'website',
    title: 'LinkedIn Profile Optimizer — Get Found by Recruiters in 2026',
    description:
      'See how recruiters find you on LinkedIn — and fix it in 5 minutes. Free keyword optimizer for the 2026 job market.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinkedIn Profile Optimizer — Get Found by Recruiters in 2026',
    description: 'See how recruiters find you on LinkedIn — and fix it in 5 minutes.',
  },
  keywords: [
    'LinkedIn profile optimizer',
    'get found by recruiters',
    'quiet hiring 2026',
    'LinkedIn About section keywords',
    'LinkedIn discoverability score',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_ID && (
          <script
            defer
            src="https://umami-production-943c.up.railway.app/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_ID}
          />
        )}
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
