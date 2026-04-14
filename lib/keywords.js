export const ROLE_KEYWORDS = {
  'software-engineering': [
    'JavaScript','React','Node.js','Python','APIs','cloud','AWS',
    'microservices','CI/CD','agile','full-stack','TypeScript','SQL','Git','system design',
  ],
  'data': [
    'SQL','Python','data analysis','dashboards','Power BI','Tableau','ETL',
    'data pipeline','machine learning','Excel','analytics','KPIs','reporting','data modeling',
  ],
  'product-management': [
    'roadmap','product strategy','cross-functional','OKRs','user research',
    'stakeholder','go-to-market','agile','sprint','prioritization',
    'product lifecycle','metrics','A/B testing',
  ],
  'operations': [
    'process improvement','SOP','cross-functional','vendor management','KPIs',
    'efficiency','workflow','logistics','project management','scaling',
    'cost reduction','ops strategy',
  ],
  'account-management': [
    'client success','relationship management','upsell','retention','CRM',
    'Salesforce','renewals','QBRs','account growth','B2B',
    'stakeholder management','revenue',
  ],
  'marketing': [
    'campaign management','SEO','content strategy','paid media','Google Ads',
    'Meta Ads','demand generation','funnel','conversion','brand',
    'HubSpot','analytics','email marketing',
  ],
  'sales': [
    'pipeline','quota','B2B','outbound','cold outreach','CRM','Salesforce',
    'discovery calls','closing','revenue','SaaS sales','SDR',
    'account executive','ARR',
  ],
  'finance': [
    'financial modeling','FP&A','Excel','budgeting','forecasting',
    'variance analysis','P&L','GAAP','ERP','QuickBooks',
    'cash flow','reporting','cost analysis',
  ],
  'hr-people-ops': [
    'talent acquisition','onboarding','HRIS','employee engagement',
    'performance management','recruiting','compensation','benefits',
    'culture','DEI','workforce planning',
  ],
  'design': [
    'Figma','UX','UI','user research','wireframes','prototyping',
    'design system','accessibility','user flows','responsive design',
    'visual design','Sketch',
  ],
  'project-management': [
    'PMP','Agile','Scrum','stakeholder management','risk management','JIRA',
    'resource planning','milestones','budget management','cross-functional','delivery',
  ],
  'customer-success': [
    'onboarding','retention','NPS','churn','client success','upsell','QBRs',
    'health scores','CRM','SaaS','product adoption','escalation management',
  ],
};

export const ROLE_TIPS = {
  'software-engineering': [
    {
      icon: '⚡',
      title: 'List your full stack explicitly',
      tip: "Don't assume recruiters infer your skills. Name every language, framework, and cloud platform — 'React, Node.js, TypeScript, AWS, PostgreSQL.' These are the exact Boolean search terms LinkedIn Recruiter filters by before reading a word of your bio.",
    },
    {
      icon: '📐',
      title: 'Mention system scale',
      tip: "Phrases like 'served 10M+ daily requests' or 'reduced API latency by 40%' signal real engineering scope. Without scale signals, even strong engineers appear junior in keyword-filtered searches. One number changes everything.",
    },
    {
      icon: '🔗',
      title: 'Include CI/CD and agile signals',
      tip: "Recruiters at scaling companies filter for 'CI/CD,' 'agile,' and 'microservices.' If you've worked with these practices, they must appear in your About — not buried in bullet points under roles from two jobs ago.",
    },
  ],
  'data': [
    {
      icon: '📊',
      title: "Name every tool you've touched",
      tip: "Tableau, Power BI, Looker, dbt, Spark, Snowflake — name them all. Recruiters run Boolean searches on exact tool names. If it's not written in your About, you don't surface in filtered searches. Tool visibility is non-negotiable.",
    },
    {
      icon: '🎯',
      title: 'Lead with a business impact line',
      tip: "Open with 'I help organizations turn raw data into revenue decisions' or 'I've built pipelines that cut reporting time by 60%.' Impact-first language consistently outperforms job description copying in both ATS scans and recruiter attention.",
    },
    {
      icon: '🧪',
      title: 'Surface ML and statistical expertise clearly',
      tip: "'Machine learning,' 'predictive modeling,' and 'A/B testing' are high-value filters. Even if analysis is a small fraction of your role, include it — recruiters searching for data scientists will surface your profile before others.",
    },
  ],
  'product-management': [
    {
      icon: '🎯',
      title: 'Lead with outcomes, not duties',
      tip: "Replace 'Responsible for roadmap' with 'Drove 3x user growth by rebuilding product roadmap around retention.' Recruiters search for impact. Duties are invisible to algorithms and forgettable to humans skimming 40 profiles.",
    },
    {
      icon: '🔑',
      title: 'Name your tools explicitly',
      tip: "Add JIRA, Figma, Notion, and Amplitude to your About. Recruiters filter by tool names in LinkedIn searches — they're looking for PMs who already know their stack and won't need onboarding time for basic tooling.",
    },
    {
      icon: '📊',
      title: 'Include a metrics sentence',
      tip: "Add one line with a real number: 'Launched features used by 500K+ users' or 'Reduced churn by 18% QoQ.' Numbers anchor recruiter memory and signal you think in outcomes — the single most valued PM trait in 2026 hiring.",
    },
  ],
  'operations': [
    {
      icon: '⚙️',
      title: 'Quantify every process improvement',
      tip: "Vague ops language kills discoverability. Write 'Reduced fulfillment cycle time by 32%' or 'Designed SOPs adopted across 5 regional teams.' Recruiters search 'process improvement' — the exact phrase must appear in your About.",
    },
    {
      icon: '🗂️',
      title: 'Mention cross-functional leadership',
      tip: "'Cross-functional' is one of the most-searched ops keywords. If you've coordinated between departments, say it explicitly: 'Led cross-functional teams across sales, product, and finance to execute a unified ops strategy.'",
    },
    {
      icon: '📉',
      title: 'Surface your cost or efficiency impact',
      tip: "Write 'Identified $2M in cost savings through vendor renegotiation' or 'Improved workflow efficiency by 45%.' Cost reduction is a top signal for ops hiring managers. Even rough numbers make your profile stand out in filters.",
    },
  ],
  'account-management': [
    {
      icon: '💼',
      title: 'Name your CRM stack',
      tip: "Salesforce, HubSpot, Gainsight — name every CRM tool you've touched. These are searchable and filterable. Recruiters use tool filters to shortlist candidates before reading a word of your bio. Don't be invisible.",
    },
    {
      icon: '📈',
      title: 'Mention revenue metrics directly',
      tip: "Write 'Managed a $4M book of business' or 'Drove 120% net revenue retention.' Revenue language maps to what hiring managers need to see before passing a profile to the final round. Numbers close the credibility gap instantly.",
    },
    {
      icon: '🤝',
      title: 'Highlight QBRs and retention strategy',
      tip: "'QBRs,' 'renewals,' and 'upsell' are high-value recruiter search terms for AM roles. If your day-to-day included these motions, they must appear in your About section — not just implied by your job title.",
    },
  ],
  'marketing': [
    {
      icon: '📣',
      title: "Call out every channel you've owned",
      tip: "Paid search, SEO, email, Meta Ads, demand gen — list every channel. Marketing recruiters search by channel specialty. Generalist language makes you invisible to the channel-specific filters that most job reqs use.",
    },
    {
      icon: '🔢',
      title: 'Include funnel metrics',
      tip: "'Conversion rate,' 'CAC,' 'ROAS,' and 'pipeline contribution' pass ATS filters and catch recruiter attention. Add one hard number: 'Scaled paid to $500K/mo at 4.2x ROAS.' That one line changes your discoverability.",
    },
    {
      icon: '🛠️',
      title: 'Name your martech stack',
      tip: "HubSpot, Marketo, Google Analytics, Klaviyo — tools are searchable. If a recruiter is filling a HubSpot-heavy role and your profile doesn't say HubSpot, you don't appear in their results. Be explicit, always.",
    },
  ],
  'sales': [
    {
      icon: '💰',
      title: 'Lead with revenue and quota attainment',
      tip: "Recruiters filter for 'quota,' 'pipeline,' and 'ARR.' Your first two lines must include a number: 'Consistently at 120% quota' or 'Built pipeline from $0 to $3M ARR in 14 months.' Revenue language is non-negotiable.",
    },
    {
      icon: '📞',
      title: 'Clarify your sales motion',
      tip: "'Outbound,' 'cold outreach,' 'discovery calls,' and 'SDR' are Boolean search terms. Be explicit about your motion so recruiters targeting inbound vs. outbound teams can find you. Ambiguity means you match fewer searches.",
    },
    {
      icon: '🏷️',
      title: 'Name your segment and deal size',
      tip: "SMB, mid-market, enterprise, SaaS — these are filter terms. Write 'Focused on enterprise SaaS deals averaging $120K ACV' to surface in the exact searches that match your experience tier. Segment specificity signals maturity.",
    },
  ],
  'finance': [
    {
      icon: '📋',
      title: 'Mention FP&A and modeling explicitly',
      tip: "'Financial modeling,' 'FP&A,' and 'variance analysis' are the top keywords finance recruiters search. If you do any of these, they must appear as exact phrases in your About — not just implied by your job title.",
    },
    {
      icon: '📁',
      title: 'Name your ERP and finance tools',
      tip: "SAP, Oracle, QuickBooks, Hyperion, Adaptive Insights — finance tool stacks are highly searchable. Name every system. Recruiters filter by tool familiarity before reviewing résumés, especially at large enterprises.",
    },
    {
      icon: '📊',
      title: 'Include a financial scale signal',
      tip: "Write 'Supported $400M in annual budgeting cycles' or 'Built P&L models across 12 business units.' Financial scale communicates experience level instantly and anchors you in the right tier of recruiter searches.",
    },
  ],
  'hr-people-ops': [
    {
      icon: '🧩',
      title: 'Name your HRIS systems',
      tip: "Workday, ADP, BambooHR, Rippling — recruiters filter by platform. If you've owned an HRIS migration or managed HR ops in a specific system, name it explicitly. It's a direct search term that separates you from generalist profiles.",
    },
    {
      icon: '🌱',
      title: 'Highlight DEI and culture work',
      tip: "'DEI,' 'culture,' and 'employee engagement' are increasingly filtered keywords in people ops searches. If you've led ERGs, launched engagement surveys, or built inclusion programs, say so. These signal modern HR leadership.",
    },
    {
      icon: '📋',
      title: 'Signal talent acquisition scope',
      tip: "Write 'Sourced and closed 80+ hires across engineering and GTM in 12 months.' Volume, role type, and time separate talent ops generalists from high-impact recruiters. Numbers make your scope real and searchable.",
    },
  ],
  'design': [
    {
      icon: '🖌️',
      title: 'Lead with Figma — always',
      tip: "'Figma' is the single most searched tool by design recruiters in 2026. It must appear in your first paragraph. Follow it with your other tools: Principle, Framer, Sketch, or After Effects. Tool visibility is not optional.",
    },
    {
      icon: '🔬',
      title: 'Surface your research practice',
      tip: "'User research,' 'usability testing,' and 'user flows' separate UX-led designers from pure visual designers. If you've run research sessions or synthesized insights, call it out — it dramatically expands which searches you appear in.",
    },
    {
      icon: '♿',
      title: 'Mention accessibility and design systems',
      tip: "'Design system' and 'accessibility' are fast-rising filter terms in 2026 design searches. Recruiters building product teams specifically look for these signals. Even one sentence — 'Built an accessible component library' — changes your results.",
    },
  ],
  'project-management': [
    {
      icon: '📌',
      title: 'Lead with your certification or methodology',
      tip: "'PMP,' 'Agile,' 'Scrum,' and 'Prince2' are Boolean-searched constantly. If you're certified, it must be in your About — not just a credential section. Recruiters search first, then verify credentials. Show up before they look.",
    },
    {
      icon: '🗓️',
      title: 'Mention JIRA and your PM toolstack',
      tip: "JIRA, Asana, Monday.com, Smartsheet — name your tools. Project teams often hire for tool compatibility and immediate productivity. If you can't be found by tool name, you're invisible to a major slice of PM searches.",
    },
    {
      icon: '⚖️',
      title: 'Quantify delivery scope and performance',
      tip: "Write 'Managed $8M program across 12 workstreams' or 'Delivered 95% on-time across 3 fiscal years.' Scope and delivery rate are the hardest signals to fake — which is exactly why recruiters search for them first.",
    },
  ],
  'customer-success': [
    {
      icon: '💚',
      title: 'Lead with retention and NPS',
      tip: "'NPS,' 'retention,' 'churn,' and 'health scores' are the top CS recruiter search terms. Open with a stat: 'Maintained 95%+ gross retention across a $6M portfolio.' That one line changes your discoverability in a crowded CS market.",
    },
    {
      icon: '🔄',
      title: 'Include upsell and expansion language',
      tip: "'Upsell,' 'expansion revenue,' and 'QBRs' signal you operate as a revenue function — not just support. CS leaders at growth-stage SaaS companies actively filter for expansion motion experience. Make it explicit.",
    },
    {
      icon: '🛠️',
      title: 'Name your CS tech stack',
      tip: "Gainsight, Totango, ChurnZero, Salesforce, JIRA — CS tools are highly searchable. Recruiters at SaaS companies often filter by platform before reading anything. Name your stack early and explicitly in your About section.",
    },
  ],
};

const ROLE_MAPPINGS = [
  { family: 'software-engineering', terms: ['software engineer','software developer','frontend','front end','front-end','backend','back end','back-end','full stack','full-stack','developer','web dev','swe','ios developer','android developer','mobile dev','devops','site reliability','sre','platform engineer','cloud engineer'] },
  { family: 'data',                 terms: ['data analyst','data scientist','data engineer','bi analyst','business intelligence','analytics engineer','machine learning','ml engineer','analytics manager','data manager','data lead','data warehouse','data platform'] },
  { family: 'product-management',   terms: ['product manager','product management','head of product','vp product','director of product','product lead','product owner','product strategy','chief product','cpo'] },
  { family: 'operations',           terms: ['operations','ops manager','operations manager','business operations','revenue operations','revops','supply chain','logistics','process manager','biz ops','chief of staff'] },
  { family: 'account-management',   terms: ['account manager','account management','client success manager','client manager','key account','relationship manager','partner manager','global account'] },
  { family: 'marketing',            terms: ['marketing','growth marketer','content marketer','demand gen','demand generation','seo specialist','paid media','performance marketer','brand manager','email marketer','social media manager','content strategist','growth manager'] },
  { family: 'sales',                terms: ['sales','account executive','ae','sdr','bdr','business development','sales rep','sales manager','sales director','inside sales','field sales','enterprise sales'] },
  { family: 'finance',              terms: ['finance','financial analyst','fp&a','accountant','controller','cfo','treasurer','budget analyst','financial planning','corporate finance','investment analyst'] },
  { family: 'hr-people-ops',        terms: ['hr','human resources','people ops','recruiter','talent acquisition','people operations','hrbp','hr business partner','people partner','talent manager','head of people','recruiting manager'] },
  { family: 'design',               terms: ['designer','ux','ui','product designer','visual designer','graphic designer','interaction designer','design lead','creative director','brand designer','motion designer'] },
  { family: 'project-management',   terms: ['project manager','project management','program manager','scrum master','delivery manager','pmo','pmp','portfolio manager','agile coach'] },
  { family: 'customer-success',     terms: ['customer success','customer success manager','csm','client success','customer experience','customer enablement','customer outcomes','post-sales'] },
];

export function detectRoleFamily(targetRole) {
  const r = targetRole.toLowerCase().trim();
  for (const m of ROLE_MAPPINGS) {
    for (const term of m.terms) {
      if (r.includes(term)) return m.family;
    }
  }
  return null;
}

export function scoreProfile(aboutText, roleFamily) {
  const text = aboutText.toLowerCase();
  let keywords;

  if (roleFamily && ROLE_KEYWORDS[roleFamily]) {
    keywords = ROLE_KEYWORDS[roleFamily];
  } else {
    const all = Object.values(ROLE_KEYWORDS).flat();
    keywords = [...new Set(all)];
  }

  const matched = [];
  const missing = [];

  for (const kw of keywords) {
    if (text.includes(kw.toLowerCase())) {
      matched.push(kw);
    } else {
      missing.push(kw);
    }
  }

  const score = Math.round((matched.length / keywords.length) * 100);
  return { score, matched, missing };
}

export function generateRewrite(aboutText, missing, roleFamily) {
  const top5 = missing.slice(0, 5);

  if (top5.length === 0) {
    return (
      aboutText +
      '\n\n[Your About section is already well-optimized for recruiter keyword searches. Focus on adding quantified outcomes and metrics to maximise interview conversion.]'
    );
  }

  const k = (i) => top5[i] || '';

  let para = '';

  if (roleFamily === 'sales') {
    para = `\n\nThroughout my career, I've built and managed ${k(0)} with a disciplined focus on ${k(1)} generation and ${k(2)} motions. I bring hands-on experience in ${k(3)} and a track record of ${k(4)} high-value deals. I'm currently open to high-growth roles where I can drive measurable revenue impact with a data-informed approach.`;
  } else if (roleFamily === 'design') {
    para = `\n\nMy craft spans ${k(0)} and ${k(1)}, with deep experience in ${k(2)} thinking and ${k(3)}. I approach every project with ${k(4)} and systems-level design rigour at the core. I'm open to roles where design quality and user advocacy are central to the team's mission.`;
  } else if (roleFamily === 'finance') {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} and ${k(1)}, with hands-on experience in ${k(2)} and ${k(3)}. I bring a rigorous, data-driven approach to ${k(4)} and financial decision-making at scale. I'm open to roles where analytical depth and business partnering are equally valued.`;
  } else if (roleFamily === 'marketing') {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} and ${k(1)}, with hands-on experience in ${k(2)} and ${k(3)}. I bring a ${k(4)}-focused mindset to every channel and campaign I own. I'm open to roles where I can apply this skill set to a high-growth marketing team.`;
  } else if (roleFamily === 'customer-success') {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} strategy and ${k(1)}, with hands-on experience in ${k(2)} programs and ${k(3)} monitoring. I apply ${k(4)} frameworks to reduce churn and unlock expansion revenue. I'm open to CS roles in high-growth SaaS environments.`;
  } else if (roleFamily === 'software-engineering') {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} and ${k(1)}, with hands-on experience building production systems using ${k(2)} and ${k(3)}. I bring a strong foundation in ${k(4)} and a bias for clean, scalable architecture. I'm open to engineering roles where I can work on technically challenging, high-impact problems.`;
  } else if (roleFamily === 'data') {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} and ${k(1)}, with hands-on experience building ${k(2)} and ${k(3)} solutions. I apply ${k(4)} thinking to every analysis I run, connecting raw data to business decisions. I'm open to data roles where analytical rigour and cross-functional impact are equally valued.`;
  } else if (roleFamily === 'hr-people-ops') {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} and ${k(1)}, with hands-on experience in ${k(2)} and ${k(3)}. I bring a people-first approach to ${k(4)} and organisational design. I'm open to HR and people ops roles where culture-building and talent excellence are strategic priorities.`;
  } else {
    para = `\n\nIn my work, I've developed expertise across ${k(0)} and ${k(1)}, with hands-on experience in ${k(2)} and ${k(3)}. I bring a structured, data-driven approach to ${k(4)} and team performance. I'm currently open to roles where I can bring this skill set to a collaborative, high-impact organisation.`;
  }

  return aboutText.trimEnd() + para;
}
