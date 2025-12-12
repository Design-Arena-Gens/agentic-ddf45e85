"use client";

const stack = [
  {
    pillar: "Productized Services",
    income: "$900/mo",
    description:
      "Deliver recurring value for solopreneurs and SMBs by using AI copilots to automate content, outreach, and reporting. Focus on subscription retainers ($300 each) to stabilize cashflow.",
    actions: [
      "Launch two high-impact retainers: (1) Weekly LinkedIn ghostwriting + repurposing, (2) Lead list research with AI-personalized cold emails.",
      "Deliver using free tooling: Notion for project hubs, Airtable free tier for CRM, and Make.com's free plan for light automations.",
      "Anchor offers in measurable outcomes (profile views, meeting bookings) and publish a transparent portfolio site.",
    ],
  },
  {
    pillar: "AI Micro-Products",
    income: "$650/mo",
    description:
      "Ship bite-sized digital products (prompt packs, templates, micro-courses) that solve immediate pains for AI-curious operators. Focus on one new drop every 3 weeks.",
    actions: [
      "Use Google Docs + Gumroad free tier to publish, run checkout, and gather customer emails.",
      "Leverage Hugging Face Spaces (free) to host simple AI-powered calculators or ideation tools that point to upsells.",
      "Create a free newsletter as the top-of-funnel asset; convert 3–5% of subscribers with limited-time launch bundles.",
    ],
  },
  {
    pillar: "Performance-Based Partnerships",
    income: "$450/mo",
    description:
      "Support bootstrapped SaaS founders with AI-enhanced growth sprints in exchange for revenue share or affiliate commissions. Target evergreen funnels so income compounds.",
    actions: [
      "Identify 10 micro-SaaS tools on Product Hunt each month; pitch AI-aided content + support packages using Loom (free).",
      "Offer to run support chatbots (via ChatGPT API credits granted by partners) or create documentation using Notion AI free trial credits.",
      "Negotiate tiered commissions (e.g., 15% for first 50 customers driven); ensure tracking via free tools like Rewardful's free tier or manual spreadsheet logs.",
    ],
  },
];

const timeline = [
  {
    phase: "Week 1: Foundation Sprint",
    focus:
      "Define personal positioning, set up operating system, and publish credibility assets so pitches land immediately.",
    steps: [
      "Craft positioning: \"AI leverage partner\" for solopreneurs. Build one-page portfolio in Notion with case-style copy.",
      "Set up operations: Notion workspace (CRM, content calendar), Zapier free tier for lead capture, Google Drive folders.",
      "Research 30 prospects using LinkedIn Sales Navigator free trial; tag segments (coaches, micro-SaaS, agencies).",
      "Create 3 proof assets: Loom teardown of a target's funnel, sample AI-assisted newsletter draft, quick-start SOP template.",
    ],
  },
  {
    phase: "Weeks 2-4: Client Acquisition Engine",
    focus:
      "Book three discovery calls and close first $300 retainer while prepping first micro-product.",
    steps: [
      "Daily outbound: 15 personalized DMs using ChatGPT custom GPT (free) to draft hooks; track in Airtable CRM.",
      "Social proof loop: Share behind-the-scenes build threads on LinkedIn/Twitter 5x weekly; repurpose to Reddit/Indie Hackers.",
      "Host one live co-working session (Google Meet) to showcase AI workflow; invite signups to waitlist via Tally form (free).",
      "Design micro-product #1 (\"30-Day AI Content Sprint Kit\") in Google Docs; build landing page in Notion, integrate Gumroad checkout.",
    ],
  },
  {
    phase: "Month 2: Scale Systems",
    focus:
      "Lock in two retainers, launch second micro-product, and onboard first revenue share partner.",
    steps: [
      "Automate delivery: Build SOPs with Notion AI, set recurring tasks with Trello free tier, and create reporting dashboards in Google Looker Studio.",
      "Referral flywheel: Launch \"AI audit\" lead magnet; ask current clients for intro swaps; share monthly impact snapshots on socials.",
      "Micro-product #2 (\"AI Sales Ops Toolkit\"): include prompt library, auto-generated email sequences (using Mailmeteor free), and Loom tutorials.",
      "Shortlist 5 micro-SaaS partners; send tailored proposals showing projected lift using calculator built in Google Sheets + GPT formulas.",
    ],
  },
  {
    phase: "Month 3: Optimization & Leverage",
    focus:
      "Raise average contract value, build audience assets, and add compounding income streams.",
    steps: [
      "Upsell existing clients to premium tier: add KPI dashboard, competitor monitoring (Perplexity free), and community office hours.",
      "Launch weekly newsletter on Beehiiv free plan; include segmented CTAs pointing to retainers and products.",
      "Create free AI tool using Replit + GPT-4o mini (free tier) that generates outreach angles; gate with email capture.",
      "Secure second partnership with clear performance goals; integrate analytics via Plausible free trial or Fathom referral.",
    ],
  },
];

const weeklyRoutine = [
  {
    label: "Monday",
    tasks: [
      "Prospecting 60 minutes: update lead list, qualify via LinkedIn/Crunchbase.",
      "Delivery: Draft long-form client asset with Claude.ai or Gemini (free tiers).",
      "Ship velocity asset: publish LinkedIn post + cross-post to Threads.",
    ],
  },
  {
    label: "Tuesday",
    tasks: [
      "Client meetings: 2 discovery calls via Calendly free + Google Meet.",
      "Build micro-product module (1 hour) using Canva, Docs, and Loom.",
      "Partnership outreach: 5 targeted emails using GMass free quota.",
    ],
  },
  {
    label: "Wednesday",
    tasks: [
      "Deep work: automate client workflow in Make.com or Zapier free tier.",
      "Community presence: answer 3 questions in Reddit/Indie Hackers sharing AI workflows.",
      "Newsletter drafting with Notion AI; schedule in Beehiiv.",
    ],
  },
  {
    label: "Thursday",
    tasks: [
      "Analytics review: Update KPI sheets, prepare client update Looms.",
      "Launch/test AI mini-tool; collect feedback via Tally forms.",
      "Audience growth: host live teardown or office hours (YouTube Live).",
    ],
  },
  {
    label: "Friday",
    tasks: [
      "Retrospective: note wins, blockers, experiments; update Notion dashboard.",
      "Iterate product roadmap; outline next drop and promotional plan.",
      "Follow-ups + invoicing using Wave Accounting (free).",
    ],
  },
  {
    label: "Weekend (Optional)",
    tasks: [
      "Skill stacking: complete 2 AI playbooks or prompt engineering guides.",
      "Record tutorial clips for future launches.",
      "Prep content batches so weekdays stay client-focused.",
    ],
  },
];

const metrics = [
  { target: "Qualified outreach", cadence: "15 personalized messages/day", tool: "ChatGPT custom GPT, Clay free trial exports" },
  { target: "Discovery calls", cadence: "5 booked per week", tool: "Calendly + Google Meet" },
  { target: "Retainer clients", cadence: "3 active by end of Month 2", tool: "Notion CRM" },
  { target: "Micro-product revenue", cadence: "$350 per launch", tool: "Gumroad + ConvertKit free (1k subs)" },
  { target: "Partner revenue share", cadence: "$150/mo per partner", tool: "Manual spreadsheet tracking" },
  { target: "Audience growth", cadence: "500 new subscribers/quarter", tool: "Beehiiv + Tally forms" },
];

const safeguards = [
  "Limit scope creep by issuing crystal-clear deliverable checklists and turnaround times inside Notion client hub.",
  "Maintain zero-cost stack by tracking trial expiry dates; rotate through available credits (OpenRouter, Perplexity, Poe, Claude).",
  "Document every workflow with Loom; enables delegation or packaging into future micro-products.",
  "Adopt 30/30/30 allocation: 30% time acquisition, 30% delivery, 30% product building, 10% buffer.",
  "Run monthly financial review: ensure average hourly rate stays above $50 by time-block tracking in Toggl Track (free).",
];

export default function Page() {
  return (
    <main className="page">
      <header className="header">
        <span className="pill">Goal: $2,000/month via free AI tools</span>
        <h1>90-Day Operator Plan for Free AI-Powered Income</h1>
        <p>
          Execute this roadmap to compound three complementary revenue streams without paid software. The playbook
          blends productized services, scalable micro-products, and performance partnerships so every weekly sprint
          builds both cashflow and leverage.
        </p>
      </header>

      <section className="grid">
        {stack.map((item) => (
          <article key={item.pillar} className="card">
            <h2>{item.pillar}</h2>
            <p>
              <strong>Income Target:</strong> {item.income}
            </p>
            <p>{item.description}</p>
            <div className="list">
              <h3>Execution Keys</h3>
              <ul>
                {item.actions.map((action) => (
                  <li key={action}>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="card">
        <h2>Daily Operating Rhythm</h2>
        <p>Stay inside this cadence to compound pipeline, delivery quality, and product velocity without burnout.</p>
        <div className="list">
          <ul>
            {weeklyRoutine.map((day) => (
              <li key={day.label}>
                <strong>{day.label}</strong>
                <span>
                  {day.tasks.map((task, index) => (
                    <span key={task}>
                      {task}
                      {index < day.tasks.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Milestone Timeline (90 Days)</h2>
        <div className="timeline">
          {timeline.map((block) => (
            <div key={block.phase} className="timeline-block">
              <h4>{block.phase}</h4>
              <p>
                <strong>Focus:</strong> {block.focus}
              </p>
              <div className="list">
                <ol>
                  {block.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>North Star Metrics & Tools</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Target Metric</th>
              <th>Cadence</th>
              <th>Free Tool Stack</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <tr key={metric.target}>
                <td>{metric.target}</td>
                <td>{metric.cadence}</td>
                <td>{metric.tool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>Risk Controls & Quality Guardrails</h2>
        <div className="list">
          <ul>
            {safeguards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Leverage Compounding Extensions</h2>
        <div className="list">
          <ul>
            <li>
              Launch an invite-only referral circle with complementary operators (designers, copywriters) to swap leads
              and bundle offers; manage via Circle&apos;s free community tier alternative (Mighty Networks trial + Notion).
            </li>
            <li>
              Convert micro-products into evergreen email sequences inside Beehiiv; add GPT-generated dynamic content
              that adapts to subscriber goals using conditional logic.
            </li>
            <li>
              Package delivery SOPs into a cohort-based workshop every quarter; host on Google Meet + Notion resources,
              upsell into retainers or templates.
            </li>
            <li>
              Reinvest first $500 into paid automation credits only after hitting $2,000/month consistently; document the
              before/after to justify premium pricing later.
            </li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <h2>Your Next Moves in the Next 48 Hours</h2>
        <p>
          Publish your positioning page, book five discovery calls, and announce the first micro-product waitlist. Work
          the daily rhythm and iterate aggressively—momentum compounds fast when every action feeds acquisition,
          delivery, and product leverage simultaneously.
        </p>
      </section>
    </main>
  );
}
