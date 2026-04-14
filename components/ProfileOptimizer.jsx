'use client';

import { useState, useRef } from 'react';
import { ScoreRing } from './ScoreRing';
import { AdUnit } from './AdUnit';
import { detectRoleFamily, generateRewrite, ROLE_KEYWORDS, ROLE_TIPS } from '@/lib/keywords';

// ─── Proper nouns / sentence-starters to skip when extracting live terms ───
const SKIP_WORDS = new Set([
  'The','A','An','And','Or','But','In','On','At','To','For','Of','With','By','From',
  'Is','Are','Was','Were','Be','Been','Being','Have','Has','Had','Do','Does','Did',
  'Will','Would','Could','Should','May','Might','Must','Can','This','That','These',
  'Those','It','Its','You','We','They','Our','Your','Their','What','Which','Who',
  'How','All','More','Other','New','Also','Than','Then','When','Where','Such','Not',
  'As','If','About','Up','Out','So','Into','Through','During','Before','After',
  'Above','Below','Between','Each','Both','Few','Any','Most','Some','Only','Same',
  'Including','Like','Well','Across','Within','While','Per','Over','Under',
  // Generic job-description words that aren't useful keywords
  'Experience','Strong','Excellent','Ability','Skills','Knowledge','Proven',
  'Demonstrated','Required','Preferred','Position','Role','Team','Company',
  'Environment','Job','Candidate','Bachelor','Master','Degree','Years','Please',
  'Apply','Good','Great','Here','There','Join','Help','Work','Working','Build',
  'Ensure','Manage','Lead','Drive','Develop','Support','Partner','Use','Using',
  'Responsible','Opportunity','Ability','Minimum','Plus','Must','Excellent',
  'Highly','Fast','Based','Full','Time','Remote','Hybrid','Office','Location',
]);

// ─── Extract live keywords from SerpApi job descriptions ───────────────────
function buildLiveKeywords(descriptions, roleFamily) {
  const staticList =
    roleFamily && ROLE_KEYWORDS[roleFamily]
      ? [...ROLE_KEYWORDS[roleFamily]]
      : [...new Set(Object.values(ROLE_KEYWORDS).flat())];

  // Score each static keyword by how many descriptions contain it
  const scored = staticList
    .map(kw => ({
      kw,
      count: descriptions.filter(d => d.toLowerCase().includes(kw.toLowerCase())).length,
    }))
    .sort((a, b) => b.count - a.count);

  // Extract additional capitalized terms (tool names, frameworks) appearing in 2+ descriptions
  const existingLower = new Set(staticList.map(k => k.toLowerCase()));
  const termFreq      = {};

  for (const desc of descriptions) {
    // Unique capitalized tokens per description (avoid inflating count for long postings)
    const tokens = new Set(desc.match(/\b[A-Z][a-zA-Z0-9\+\#\.]{1,}\b/g) || []);
    for (const token of tokens) {
      if (token.length < 2 || SKIP_WORDS.has(token)) continue;
      termFreq[token] = (termFreq[token] || 0) + 1;
    }
  }

  const extras = Object.entries(termFreq)
    .filter(([t, c]) => c >= 2 && !existingLower.has(t.toLowerCase()))
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([t]) => t);

  // Return: static keywords sorted by live frequency, then extras
  return [...scored.map(s => s.kw), ...extras];
}

// ─── Score a keyword list against about text ───────────────────────────────
function computeScore(aboutText, keywords) {
  const text    = aboutText.toLowerCase();
  const matched = keywords.filter(kw => text.includes(kw.toLowerCase()));
  const missing = keywords.filter(kw => !text.includes(kw.toLowerCase()));
  const score   = Math.round((matched.length / keywords.length) * 100);
  return { score, matched, missing };
}

// ─── Pill component ────────────────────────────────────────────────────────
function Pill({ label, variant }) {
  const cls =
    variant === 'green'
      ? 'bg-green-50 text-green-700 border border-green-200'
      : 'bg-red-50 text-red-700 border border-red-200';
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium m-0.5 ${cls}`}>
      {label}
    </span>
  );
}

// ─── Freshness badge ───────────────────────────────────────────────────────
function FreshnessBadge({ source, jobCount }) {
  if (!source) return null;
  if (source === 'live') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700
                       bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
        ✦ Live — based on {jobCount} real job posting{jobCount !== 1 ? 's' : ''}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700
                     bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
      ⚠ Cached data
    </span>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export function ProfileOptimizer() {
  const [roleInput,   setRoleInput]   = useState('');
  const [aboutInput,  setAboutInput]  = useState('');
  const [warning,     setWarning]     = useState(false);
  const [isLoading,   setIsLoading]   = useState(false);
  const [dataSource,  setDataSource]  = useState(null);   // 'live' | 'cached' | null
  const [liveJobCount,setLiveJobCount]= useState(0);
  const [result,      setResult]      = useState(null);
  const [copied,      setCopied]      = useState(false);
  const scoreCardRef = useRef(null);

  async function analyze() {
    if (aboutInput.trim().length < 50) { setWarning(true); return; }
    setWarning(false);

    const family = detectRoleFamily(roleInput);
    let keywords = null;
    let source   = 'cached';
    let jobCount = 0;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/jobs?q=${encodeURIComponent(roleInput)}`);
      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();

      if (data.descriptions && data.descriptions.length > 0) {
        keywords = buildLiveKeywords(data.descriptions, family);
        jobCount = data.count;
        source   = 'live';
      }
    } catch {
      // fall through to static fallback
    } finally {
      setIsLoading(false);
    }

    // Static fallback
    if (!keywords) {
      keywords =
        family && ROLE_KEYWORDS[family]
          ? ROLE_KEYWORDS[family]
          : [...new Set(Object.values(ROLE_KEYWORDS).flat())];
    }

    const { score, matched, missing } = computeScore(aboutInput, keywords);
    const rewrite = generateRewrite(aboutInput, missing, family);
    const tips    = (family && ROLE_TIPS[family]) ? ROLE_TIPS[family] : ROLE_TIPS['product-management'];

    setDataSource(source);
    setLiveJobCount(jobCount);
    setResult({ score, matched, missing, rewrite, tips });

    setTimeout(() => {
      scoreCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }

  function reset() {
    setRoleInput('');
    setAboutInput('');
    setWarning(false);
    setResult(null);
    setDataSource(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function copyRewrite() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.rewrite);
    } catch {
      const ta = Object.assign(document.createElement('textarea'), { value: result.rewrite });
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <div className="space-y-6">

      {/* ── INPUT CARD ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Analyze Your LinkedIn Profile</h2>

        <div className="mb-5">
          <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
            Your Target Job Title
          </label>
          <input
            id="role"
            type="text"
            value={roleInput}
            onChange={e => setRoleInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !isLoading && analyze()}
            placeholder="e.g. Product Manager, Data Analyst, Account Executive"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="about" className="block text-sm font-semibold text-gray-700 mb-2">
            Your LinkedIn About Section
          </label>
          <textarea
            id="about"
            rows={7}
            value={aboutInput}
            onChange={e => setAboutInput(e.target.value)}
            placeholder="Paste your LinkedIn About section here..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900
                       focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none
                       transition resize-none"
          />
          {warning && (
            <p className="mt-2 text-sm text-amber-600 font-medium">
              ⚠ Your About section seems short — paste at least a few sentences for the best results.
            </p>
          )}
        </div>

        {/* ── ANALYZE BUTTON ── */}
        <button
          onClick={analyze}
          disabled={isLoading}
          className={`w-full rounded-lg px-6 py-3.5 font-semibold text-base transition cursor-pointer
            ${isLoading
              ? 'bg-indigo-400 text-white cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800'
            }`}
        >
          {isLoading ? (
            <span className="flex flex-col items-center gap-0.5">
              <span className="flex items-center gap-2">
                <span className="inline-block animate-spin">⟳</span>
                Fetching live job data...
              </span>
              {roleInput && (
                <span className="text-xs font-normal text-indigo-200">
                  Scanning real postings for &quot;{roleInput}&quot;
                </span>
              )}
            </span>
          ) : (
            'Analyze My Profile →'
          )}
        </button>
      </div>

      {/* ── RESULTS ── */}
      {result && (
        <>
          {/* SCORE CARD */}
          <div ref={scoreCardRef} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <ScoreRing score={result.score} />
          </div>

          {/* AD 2 */}
          <AdUnit slot="0987654321" />

          {/* KEYWORD GAP */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
              <h3 className="text-base font-bold text-gray-900">Keyword Gap Analysis</h3>
              <FreshnessBadge source={dataSource} jobCount={liveJobCount} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Found */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-green-500 text-sm">✅</span>
                  <span className="text-sm font-semibold text-gray-700">Keywords You Have</span>
                  <span className="ml-auto text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                    {result.matched.length} found
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {result.matched.length === 0
                    ? <p className="text-sm text-gray-400 italic">No matching keywords found yet.</p>
                    : result.matched.map(kw => <Pill key={kw} label={kw} variant="green" />)
                  }
                </div>
              </div>

              {/* Missing */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-red-400 text-sm">❌</span>
                  <span className="text-sm font-semibold text-gray-700">Missing Keywords</span>
                  <span className="ml-auto text-xs font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                    {result.missing.length} missing
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {result.missing.length === 0
                    ? <p className="text-sm text-gray-400 italic">No missing keywords — great work!</p>
                    : result.missing.map(kw => <Pill key={kw} label={kw} variant="red" />)
                  }
                </div>
              </div>
            </div>
          </div>

          {/* REWRITE */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <h3 className="text-base font-bold text-gray-900">Your Keyword-Optimized Rewrite</h3>
              <button
                onClick={copyRewrite}
                className={`border rounded-lg px-4 py-2 text-sm font-medium transition cursor-pointer
                  ${copied
                    ? 'border-green-300 bg-green-50 text-green-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {copied ? 'Copied! ✓' : 'Copy to Clipboard'}
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-5 text-sm text-gray-700 leading-relaxed
                            whitespace-pre-wrap border border-gray-200 max-h-96 overflow-y-auto">
              {result.rewrite}
            </div>
            <p className="text-xs text-gray-400 mt-3">
              ✦ A closing paragraph has been appended to naturally weave in your top missing keywords.
            </p>
          </div>

          {/* TIPS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h3 className="text-base font-bold text-gray-900 mb-5">3 Quick-Win Profile Tips</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {result.tips.map((tip, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <div className="text-3xl mb-3">{tip.icon}</div>
                  <p className="text-sm font-bold text-gray-900 mb-2">{tip.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AFFILIATE CTA */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Want recruiters to find you even faster?</p>
                  <p className="text-sm text-gray-500">
                    LinkedIn Premium unlocks who viewed your profile, InMail credits, and featured applicant placement.
                  </p>
                </div>
                <a
                  href="https://linkedin.com/premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-indigo-600 text-white rounded-lg px-5 py-2.5 text-sm font-semibold
                             hover:bg-indigo-700 transition whitespace-nowrap"
                >
                  Try Premium Free →
                </a>
              </div>
              <div className="border-t border-indigo-200 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-sm text-gray-500">
                  Or get a professionally written LinkedIn profile from a certified career coach.
                </p>
                <a
                  href="#"
                  className="flex-shrink-0 border border-indigo-300 text-indigo-700 rounded-lg px-5 py-2.5
                             text-sm font-semibold hover:bg-indigo-100 transition whitespace-nowrap"
                >
                  Find a Coach →
                </a>
              </div>
            </div>
          </div>

          {/* AD 3 */}
          <AdUnit slot="1122334455" />

          {/* RESET */}
          <div className="flex justify-center pb-2">
            <button
              onClick={reset}
              className="border border-gray-300 text-gray-600 rounded-lg px-8 py-3 text-sm font-medium
                         hover:bg-white transition cursor-pointer"
            >
              ← Analyze Another Profile
            </button>
          </div>
        </>
      )}
    </div>
  );
}
