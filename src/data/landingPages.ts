export interface LandingPageConfig {
  slug: string
  campaignName: string
  metaTitle: string
  metaDescription: string
  noIndex?: boolean
  hero: {
    badge: string
    headline: string
    subheadline: string
    primaryCTA: string
    secondaryCTA: string
  }
  problem: {
    title: string
    description: string
    points: { title: string; desc: string }[]
  }
  solution: {
    title: string
    description: string
    points: { title: string; desc: string }[]
  }
  capabilities: {
    title: string
    items: { title: string; description: string }[]
  }
  technology: {
    title: string
    items: { category: string; description: string }[]
  }
  process: {
    title: string
    steps: { title: string; description: string }[]
  }
  industries: {
    title: string
    tags: string[]
  }
  faq: {
    q: string
    a: string
  }[]
  cta: {
    title: string
    subtitle: string
    buttonText: string
  }
}

export const landingPages: LandingPageConfig[] = [
  {
    slug: 'custom-software',
    campaignName: 'Custom Business Software',
    metaTitle: 'Custom Business Software Development | Corelane Systems',
    metaDescription: 'Replace disconnected spreadsheets and manual workflows with custom software built exactly for your business operations.',
    hero: {
      badge: 'Engineering Partner',
      headline: 'Custom Business Software Built Around Your Workflow',
      subheadline: 'Replace disconnected spreadsheets and manual processes with software designed exactly for how your business operates.',
      primaryCTA: 'Discuss Your Project',
      secondaryCTA: 'Talk on WhatsApp',
    },
    problem: {
      title: 'The Cost of Generic Software',
      description: 'Off-the-shelf software forces you to change your business to fit the tool. This creates operational friction, disconnected data, and expensive manual workarounds.',
      points: [
        { title: 'Spreadsheet Dependency', desc: 'Critical business data trapped in Excel files that break easily.' },
        { title: 'Disconnected Systems', desc: 'Your CRM, accounting, and operations tools do not talk to each other.' },
        { title: 'Manual Workarounds', desc: 'Employees spend hours copying data between systems.' }
      ]
    },
    solution: {
      title: 'Software Built for You',
      description: 'We engineer custom systems that map directly to your existing workflows, giving you total ownership and control over your digital operations.',
      points: [
        { title: 'Total Ownership', desc: 'No vendor lock-in or per-user monthly SaaS fees.' },
        { title: 'Seamless Integration', desc: 'We connect your new software to the tools you already use via APIs.' },
        { title: 'Scalable Architecture', desc: 'Built on modern cloud infrastructure that grows with your business.' }
      ]
    },
    capabilities: {
      title: 'What We Build',
      items: [
        { title: 'Business Portals', description: 'Secure access for your clients, partners, or employees.' },
        { title: 'Internal Management Systems', description: 'Centralized operations, ERPs, and custom CRMs.' },
        { title: 'Operational Dashboards', description: 'Real-time visibility into your business metrics.' },
        { title: 'Workflow Automation Systems', description: 'Automate repetitive approvals and data entries.' }
      ]
    },
    technology: {
      title: 'Technical Foundation',
      items: [
        { category: 'Frontend', description: 'React, TypeScript, Tailwind CSS' },
        { category: 'Backend', description: 'Node.js, Python, Go' },
        { category: 'Database', description: 'PostgreSQL, MongoDB, Redis' },
        { category: 'Cloud Infrastructure', description: 'AWS, Azure, Docker, CI/CD pipelines' }
      ]
    },
    process: {
      title: 'Our Engineering Approach',
      steps: [
        { title: 'Discovery & Requirements', description: 'We analyze your workflows and define exact project scope.' },
        { title: 'Architecture Design', description: 'We design the database, API, and cloud infrastructure.' },
        { title: 'Development & CI/CD', description: 'Agile sprints with automated testing and deployment.' },
        { title: 'Testing & Handover', description: 'Rigorous QA before handing over a fully tested system.' }
      ]
    },
    industries: {
      title: 'Industries We Support',
      tags: ['Real Estate', 'Healthcare', 'Logistics', 'Financial Services', 'E-commerce', 'Professional Services']
    },
    faq: [
      { q: 'How long does a custom software project take?', a: 'Most MVP (Minimum Viable Product) phases take 8-12 weeks, depending on complexity. We focus on delivering core business value first.' },
      { q: 'Do we own the source code?', a: 'Yes. Once the project is complete and fully paid, you own 100% of the intellectual property and source code.' },
      { q: 'Can you integrate with our existing systems?', a: 'Yes, provided your existing systems have modern APIs (REST, GraphQL) or secure database access.' },
      { q: 'Do you provide ongoing support?', a: 'Absolutely. We offer tailored maintenance and SLA packages to ensure your system remains secure and performant.' }
    ],
    cta: {
      title: 'Have a Business System You Need Built?',
      subtitle: 'Schedule a technical consultation to explore solutions and architecture options.',
      buttonText: 'Discuss Your Project'
    }
  }
]
