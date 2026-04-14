import { NextResponse } from 'next/server';

const EMPTY = { descriptions: [], count: 0 };

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q      = searchParams.get('q');
  const apiKey = searchParams.get('api_key') || process.env.SERPAPI_KEY;

  // Always return 200 — client falls back to static silently on empty descriptions
  if (!q || !apiKey) return NextResponse.json(EMPTY);

  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_jobs');
  url.searchParams.set('q', q);
  url.searchParams.set('api_key', apiKey);

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });

    if (!res.ok) return NextResponse.json(EMPTY);

    const data = await res.json();
    const jobs = (data.jobs_results || []).slice(0, 10);

    if (!jobs.length) return NextResponse.json(EMPTY);

    const descriptions = jobs.map(job => {
      const desc       = job.description || '';
      const highlights = (job.job_highlights || [])
        .flatMap(h => h.items || [])
        .join(' ');
      return `${desc} ${highlights}`;
    });

    return NextResponse.json({ descriptions, count: descriptions.length });
  } catch {
    return NextResponse.json(EMPTY);
  }
}
