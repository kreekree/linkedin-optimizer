'use client';

import { useEffect, useRef } from 'react';

const CIRCUMFERENCE = 364.42; // 2 * π * 58

export function ScoreRing({ score }) {
  const arcRef  = useRef(null);
  const numRef  = useRef(null);

  useEffect(() => {
    if (!arcRef.current || !numRef.current) return;

    // Color
    const color =
      score < 40  ? '#ef4444' :
      score <= 70 ? '#f59e0b' :
                    '#22c55e';

    arcRef.current.setAttribute('stroke', color);

    // Animate ring
    const finalOffset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (arcRef.current) arcRef.current.style.strokeDashoffset = finalOffset;
      });
    });

    // Animate number count-up
    const el = numRef.current;
    let current = 0;
    const steps = 60;
    const increment = score / steps;
    const timer = setInterval(() => {
      current = Math.min(current + increment, score);
      el.textContent = Math.round(current);
      if (current >= score) clearInterval(timer);
    }, 17);

    return () => clearInterval(timer);
  }, [score]);

  const label =
    score < 40  ? 'Weak — Low recruiter discoverability' :
    score <= 70 ? 'Moderate — Some keywords missing' :
                  'Strong — Well-optimized for recruiter search';

  const labelColor =
    score < 40  ? 'text-red-500' :
    score <= 70 ? 'text-amber-500' :
                  'text-green-500';

  const desc =
    score < 40
      ? 'Your profile is missing most of the keywords recruiters search for. The optimized rewrite below will help you close the gap fast.'
      : score <= 70
      ? "You're on the radar but not at the top of searches. Add the missing keywords below to move from occasional to consistent recruiter discovery."
      : 'Your profile is well-positioned for recruiter searches. Focus on quantified outcomes and metrics to maximise interview conversion.';

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
      {/* SVG Ring */}
      <div className="flex-shrink-0">
        <svg width="148" height="148" viewBox="0 0 148 148" aria-label="Discoverability Score">
          <circle cx="74" cy="74" r="58" fill="none" stroke="#e5e7eb" strokeWidth="13" />
          <circle
            ref={arcRef}
            cx="74" cy="74" r="58"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            transform="rotate(-90 74 74)"
            style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(0.34,1.56,0.64,1)' }}
          />
          <text
            ref={numRef}
            x="74" y="68"
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="30"
            fontWeight="800"
            fill="#111827"
          >
            0
          </text>
          <text
            x="74" y="88"
            textAnchor="middle"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="13"
            fontWeight="500"
            fill="#9ca3af"
          >
            / 100
          </text>
        </svg>
      </div>

      {/* Labels */}
      <div className="text-center sm:text-left flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
          Discoverability Score
        </p>
        <p className={`text-2xl font-extrabold mb-2 ${labelColor}`}>{label}</p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  );
}
