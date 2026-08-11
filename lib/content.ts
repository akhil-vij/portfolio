// Typed content module — ported verbatim from the design handoff's renderVals().
// All copy is real (résumé + product briefs). Do not paraphrase.

export type Theme = "dark" | "light";

export type Social = {
  label: string;
  href: string;
  handle: string;
};

export type Project = {
  n: string;
  name: string;
  url: string;
  urlLabel: string;
  statusLabel: string;
  /** CSS var token for the project's status color, e.g. "var(--st-build)" */
  tone: string;
  tagline: string;
  desc: string;
  signature: string;
  stack: string[];
  role: string;
  focus: string[];
};

export type Metric = { v: string; l: string };

export type Experience = {
  company: string;
  role: string;
  period: string;
  metrics: Metric[];
  points: string[];
};

export type StackGroup = {
  group: string;
  items: string[];
};

export const email = "akhilvij@gmail.com";

/** Résumé served by the "Download résumé" button. */
export const resumeHref = "/Akhil-Vij-Resume.pdf";

export const socials: Social[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akhil-vij-50b68085/",
    handle: "in/akhil-vij",
  },
  { label: "GitHub", href: "https://github.com/akhil-vij", handle: "akhil-vij" },
];

export const projects: Project[] = [
  {
    n: "01",
    name: "MatchMyCard",
    url: "https://matchmycard.com",
    urlLabel: "matchmycard.com",
    statusLabel: "In build",
    tone: "var(--st-build)",
    tagline: "UAE credit-card matching · net-value scoring",
    desc: "Ranks UAE credit cards by real net value — in dirhams, for your actual spending — through a gamified quiz that profiles how you spend, surfaces a “Money Personality,” and shares bank commission back with users. Under the hood it is two systems: an AI pipeline that turns bank product pages and Schedule-of-Charges PDFs into structured card data, and a scoring engine that computes each card’s net annual value against your habits.",
    signature:
      "Every scored number traces to a verbatim quote in a dated, content-addressed snapshot.",
    stack: ["Next.js", "TypeScript", "Zod", "Python", "LLM extraction", "Postgres"],
    role: "Co-founder · lead engineer",
    focus: ["Scoring engine", "Extraction pipeline", "Bitemporal data model"],
  },
  {
    n: "02",
    name: "ClinicKhata",
    url: "https://clinickhata.com",
    urlLabel: "clinickhata.com",
    statusLabel: "In pilot",
    tone: "var(--st-pilot)",
    tagline: "Practice management for small Indian dental clinics",
    desc: "A patient-ledger SaaS built on a sharp wedge: AI reads a clinic’s existing handwritten registers and slips, so they get a digital record with zero data migration. Competitors added AI to help humans do data entry faster — ClinicKhata removes the data entry. Currently in pilot with a West Delhi clinic.",
    signature:
      "The onboarding cost that kills most clinic software is the one thing designed away.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Anthropic API",
      "WhatsApp API",
    ],
    role: "Founder · engineer",
    focus: ["Extraction wedge", "Zero-migration onboarding", "Patient ledger"],
  },
  {
    n: "03",
    name: "BehindScale",
    url: "https://behindscale.com",
    urlLabel: "behindscale.com",
    statusLabel: "Live",
    tone: "var(--st-live)",
    tagline: "System-design learning for staff-level engineers",
    desc: "Deeply-researched case studies of real architectures and production outages, each paired with an interactive simulation you can actually poke — set the fault, watch the failure mode, then see the fix. Built to teach the judgment behind staff-level system design, not just the vocabulary.",
    signature: "Every case ships with a runnable model of its own failure.",
    stack: ["React", "Interactive simulations", "JSON-driven content"],
    role: "Author · engineer",
    focus: ["Case-study research", "Runnable failure models", "Editorial"],
  },
];

export const experience: Experience[] = [
  {
    company: "Agoda",
    role: "Staff Software Engineer · Full Stack",
    period: "Jun 2024 – May 2026",
    metrics: [
      { v: "30+", l: "partner products" },
      { v: "$230M+", l: "annual revenue" },
      { v: "90d→7d", l: "onboarding time" },
    ],
    points: [
      "Tech lead on a 10-engineer platform team owning Agoda’s white-label booking experience — one shared frontend embedded in 30+ partner products, powering $230M+ a year.",
      "Isolated every partner’s theming on a single shared codebase via CSS Custom Properties and an in-house design-token system: distinct identities, zero style leakage, no per-partner forks.",
      "Automated partner onboarding to scale the roster from 3–4 to 30+; enterprise launches went from ~90 days to 2–3 weeks, and simpler partners now launch in 7.",
      "Built a11y-fixer, a Claude-based agentic SDLC skill that emits targeted accessibility fixes from a ticket ID — ~60% resolved one-shot, ~85% yielding a high-quality starting PR.",
    ],
  },
  {
    company: "Informatica",
    role: "Lead → Principal Software Engineer",
    period: "Oct 2018 – Jun 2024",
    metrics: [
      { v: "45", l: "production components" },
      { v: "25+", l: "SaaS products" },
      { v: "1→6", l: "team grown & led" },
    ],
    points: [
      "Founding engineer of Droplets, Informatica’s company-wide React + TypeScript design system; grew the India team from one (me) to five engineers and a manager.",
      "Shipped 45 production components consumed by 25+ SaaS products — every new product launched on Droplets by the time I left.",
      "Built and reviewed Lit-based Web Components (Shadow DOM, Custom Elements) so consumers got native primitives that embed cleanly outside React.",
      "Drove the company-wide WCAG 2.1 AA accessibility initiative across all 25+ products — a prerequisite for enterprise and government B2B sales.",
    ],
  },
];

export const stackGroups: StackGroup[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    group: "Backend & Data",
    items: ["Node.js", "Python", "PostgreSQL / Supabase", "Zod", "Bitemporal modeling"],
  },
  {
    group: "AI & LLM systems",
    items: ["Anthropic API", "LLM extraction", "Prompt engineering", "Agent orchestration"],
  },
  {
    group: "Infra & tooling",
    items: ["Vercel", "Git", "WhatsApp Business API", "Exotel"],
  },
];
