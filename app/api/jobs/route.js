import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q      = searchParams.get('q');
  // Prefer user-supplied key; fall back to the site owner's server-side key
  const apiKey = searchParams.get('api_key') || process.env.SERPAPI_KEY;

  if (!q || !apiKey) {
    // Return empty result so the client falls back to static data silently (no console error)
    return NextResponse.json({ descriptions: [], count: 0 });
  }

  const url = new URL('https://serpapi.com/search.json');
  url.searchParams.set('engine', 'google_jobs');
  url.searchParams.set('q', q);
  url.searchParams.set('api_key', apiKey);
  url.searchParams.set('num', '10');

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return NextResponse.json(
        { error: `SerpApi returned ${res.status}`, detail: text },
        { status: 502 }
      );
    }

    const data = await res.json();
    const jobs = (data.jobs_results || []).slice(0, 10);

    if (jobs.length === 0) {
      return NextResponse.json({ descriptions: [], count: 0 });
    }

    const descriptions = jobs.map(job => {
      const desc       = job.description || '';
      const highlights = (job.job_highlights || [])
        .flatMap(h => h.items || [])
        .join(' ');
      return `${desc} ${highlights}`;
    });

    return NextResponse.json({ descriptions, count: descriptions.length });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
