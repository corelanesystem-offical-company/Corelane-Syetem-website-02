export interface Location {
  slug: string
  country: string
  flag: string
  region: string
  tagline: string
  intro: string
  marketContext: string
  relevantServices: { slug: string; title: string }[]
  industries: { slug: string; title: string }[]
  whyDigital: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  hreflang: string
  h1: string
  metaTitle: string
  metaDescription: string
}

export const locations: Location[] = [
  {
    slug: 'pakistan',
    country: 'Pakistan',
    flag: '🇵🇰',
    region: 'South Asia',
    hreflang: 'en-PK',
    tagline: 'Building technology for Pakistan\'s growing digital economy.',
    intro: 'Pakistan has one of the world\'s youngest and fastest-growing technology markets. With a rapidly expanding startup ecosystem, the demand for quality software development and digital transformation has never been higher.',
    marketContext: 'Corelane Systems works with Pakistani businesses — startups, SMEs, and professional service firms — to build modern digital infrastructure. From Karachi and Lahore to Islamabad and beyond, we understand the local market, the business culture, and the technology landscape.',
    h1: 'Software Development & Technology Solutions in Pakistan',
    metaTitle: 'Software Development Company in Pakistan | Corelane Systems',
    metaDescription: 'Corelane Systems provides website development, web applications, custom software, cloud engineering, DevOps and data solutions for businesses in Pakistan.',
    whyDigital: [
      { title: 'Digital Transformation', desc: 'Modernize legacy systems and move operations to the cloud for better efficiency.' },
      { title: 'Local Expertise', desc: 'Work with a technology partner who understands the local business landscape.' },
      { title: 'Scalable Growth', desc: 'Build software platforms that can grow alongside your business.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Website Development' },
      { slug: 'web-app-development', title: 'Web Applications' },
      { slug: 'custom-software', title: 'Custom Software' },
      { slug: 'ui-ux-design', title: 'UI/UX' },
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' },
      { slug: 'data-engineering', title: 'Data Engineering' },
      { slug: 'data-analytics', title: 'Data Analytics' },
      { slug: 'business-automation', title: 'Automation' },
    ],
    industries: [
      { slug: 'real-estate', title: 'Real Estate' },
      { slug: 'law-firms', title: 'Law Firms' },
      { slug: 'healthcare', title: 'Healthcare' },
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'professional-services', title: 'Professional Services' },
      { slug: 'architecture-construction', title: 'Architecture & Construction' },
    ],
    faq: [
      { q: 'Do you work with startups in Pakistan?', a: 'Yes, we provide end-to-end engineering for Pakistani startups, from MVP development to cloud infrastructure.' },
      { q: 'What industries do you serve in Pakistan?', a: 'We work across multiple sectors including real estate, healthcare, professional services, e-commerce, and construction.' },
      { q: 'Can you help digitalize a traditional SME?', a: 'Yes. We specialize in helping traditional businesses transition to digital workflows through custom software and business automation.' },
      { q: 'How does communication work?', a: 'We communicate directly in English and Urdu via WhatsApp, email, and video calls, ensuring clear alignment.' }
    ]
  },
  {
    slug: 'uae',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    region: 'Middle East',
    hreflang: 'en-AE',
    tagline: 'Technology solutions for businesses in the UAE market.',
    intro: 'The UAE is one of the most technology-forward economies in the world. With Vision 2031 driving digital transformation across every sector, businesses in the UAE need technology partners who understand both enterprise standards and agile delivery.',
    marketContext: 'We serve businesses across the UAE looking to build professional software, modernise their digital operations, or develop custom technology for the regional market. We facilitate smooth remote collaboration for digital products, business applications, and cloud infrastructure.',
    h1: 'Software Development & Cloud Engineering for UAE Businesses',
    metaTitle: 'Software Development & Cloud Engineering in UAE | Corelane Systems',
    metaDescription: 'Corelane Systems provides software development, web applications, cloud engineering, DevOps and digital solutions for businesses in the UAE.',
    whyDigital: [
      { title: 'Rapid Modernization', desc: 'Keep pace with the UAE\'s fast-moving digital economy.' },
      { title: 'Enterprise Standards', desc: 'Secure, scalable architecture designed for high-growth markets.' },
      { title: 'Operational Efficiency', desc: 'Automate internal workflows to reduce overhead and improve service delivery.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Website Development' },
      { slug: 'web-app-development', title: 'Web Applications' },
      { slug: 'custom-software', title: 'Custom Software' },
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' },
      { slug: 'data-analytics', title: 'Data Analytics' },
    ],
    industries: [
      { slug: 'real-estate', title: 'Real Estate' },
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'professional-services', title: 'Professional Services' },
      { slug: 'startups', title: 'Startups' },
      { slug: 'smes', title: 'SMEs' },
    ],
    faq: [
      { q: 'Do you work with businesses in Dubai and Abu Dhabi?', a: 'Yes, we provide remote software development and cloud engineering services for businesses across the UAE.' },
      { q: 'What is the time difference?', a: 'Gulf Standard Time (GST) is highly compatible with our engineering team, ensuring minimal scheduling friction for daily communications.' },
      { q: 'Can you build custom business applications?', a: 'Yes, we engineer bespoke web applications and operational dashboards tailored to your specific workflows.' },
      { q: 'How do you handle project management remotely?', a: 'We use structured discovery calls, clear documentation, and daily async updates to ensure complete project visibility.' }
    ]
  },
  {
    slug: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    hreflang: 'en-GB',
    tagline: 'Reliable technology delivery for UK businesses.',
    intro: 'The United Kingdom has one of the world\'s most mature technology markets, with high standards for quality, security, and delivery. UK businesses increasingly work with international technology partners to access quality engineering at competitive rates.',
    marketContext: 'Corelane Systems serves UK businesses that need a reliable, professional technology partner. We align with UK business standards, communicate clearly, and deliver to international quality benchmarks for business websites, custom software, and cloud infrastructure.',
    h1: 'Software Development & Cloud Engineering for UK Businesses',
    metaTitle: 'Software Development Services for UK Businesses | Corelane Systems',
    metaDescription: 'Corelane Systems provides web development, custom software, cloud engineering, DevOps and data solutions for UK businesses.',
    whyDigital: [
      { title: 'Technical Reliability', desc: 'Engineered solutions that prioritize stability, security, and compliance.' },
      { title: 'Scalable Cloud Infrastructure', desc: 'Cloud-native architecture designed to handle peak loads efficiently.' },
      { title: 'Automated Operations', desc: 'Reduce manual tasks with custom automation and integrated systems.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Website Development' },
      { slug: 'web-app-development', title: 'Web Applications' },
      { slug: 'custom-software', title: 'Custom Software' },
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' },
      { slug: 'data-engineering', title: 'Data Engineering' },
      { slug: 'business-automation', title: 'Automation' },
    ],
    industries: [
      { slug: 'professional-services', title: 'Professional Services' },
      { slug: 'startups', title: 'Startups' },
      { slug: 'smes', title: 'SMEs' },
      { slug: 'law-firms', title: 'Law Firms' },
      { slug: 'ecommerce', title: 'E-commerce' },
    ],
    faq: [
      { q: 'How does remote collaboration work with UK businesses?', a: 'We operate with an overlap during the UK morning and early afternoon, allowing for real-time meetings alongside structured asynchronous updates.' },
      { q: 'Do you build cloud infrastructure?', a: 'Yes, we provide end-to-end cloud engineering and DevOps services to ensure your applications run securely and efficiently.' },
      { q: 'Can you develop custom software for our specific processes?', a: 'Absolutely. We specialize in mapping out complex business requirements and translating them into robust custom software.' },
      { q: 'How do you ensure code quality?', a: 'We employ rigorous testing, code reviews, and modern CI/CD pipelines to maintain international quality standards.' }
    ]
  },
  {
    slug: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    hreflang: 'en-US',
    tagline: 'Serious technology delivery for US businesses.',
    intro: 'American businesses operate in one of the world\'s most competitive technology markets. Whether you\'re a US startup building a product, an SME automating operations, or an established company needing a reliable development partner, technical quality is non-negotiable.',
    marketContext: 'Corelane Systems works remotely with US-based businesses that need quality technology delivery. We operate on structured project delivery with clear documentation, regular updates, and async-friendly communication designed for US timezones.',
    h1: 'Software Development & Cloud Engineering for US Businesses',
    metaTitle: 'Software Development & Cloud Engineering for US Businesses | Corelane Systems',
    metaDescription: 'Corelane Systems helps businesses build websites, web applications, custom software, cloud infrastructure, DevOps and data solutions.',
    whyDigital: [
      { title: 'Competitive Advantage', desc: 'Launch digital products faster with dedicated engineering capacity.' },
      { title: 'Data-Driven Insights', desc: 'Implement data engineering pipelines that provide real-time business intelligence.' },
      { title: 'Cost-Effective Scaling', desc: 'Access high-quality international engineering talent to scale your technology initiatives.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Website Development' },
      { slug: 'web-app-development', title: 'Web Applications' },
      { slug: 'custom-software', title: 'Custom Software' },
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' },
      { slug: 'data-engineering', title: 'Data Engineering' },
      { slug: 'business-automation', title: 'Automation' },
    ],
    industries: [
      { slug: 'startups', title: 'Startups' },
      { slug: 'smes', title: 'SMEs' },
      { slug: 'healthcare', title: 'Healthcare' },
      { slug: 'real-estate', title: 'Real Estate' },
      { slug: 'professional-services', title: 'Professional Services' },
    ],
    faq: [
      { q: 'How do you handle the time zone difference with the US?', a: 'We use an async-first workflow with scheduled overlap sessions for daily standups and sprint planning, ensuring continuous progress without communication bottlenecks.' },
      { q: 'Do you work with early-stage startups?', a: 'Yes, we act as a technical partner for startups, building MVPs, scaling architectures, and implementing DevOps pipelines.' },
      { q: 'Can you migrate our legacy systems to the cloud?', a: 'Yes, we provide cloud engineering services to securely migrate, optimize, and manage your infrastructure.' },
      { q: 'What is your project process?', a: 'We follow a structured methodology: Discovery, Scope & Proposal, Design & Development, Testing, Deployment, and Ongoing Support.' }
    ]
  },
  {
    slug: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    hreflang: 'en-CA',
    tagline: 'Technology partnerships for Canadian businesses.',
    intro: 'Canada\'s technology sector is growing rapidly. Canadian businesses value quality, reliability, and clear communication — and increasingly look to international technology partners for specialized development capacity.',
    marketContext: 'We work remotely with Canadian businesses across all provinces. Our team delivers to high quality standards — with clear project documentation, regular communication, and structured delivery processes for modern websites, custom software, and cloud infrastructure.',
    h1: 'Software Development & Technology Solutions for Canadian Businesses',
    metaTitle: 'Software Development Services for Canadian Businesses | Corelane Systems',
    metaDescription: 'Corelane Systems provides web development, custom software, cloud engineering, DevOps and data solutions for Canadian businesses.',
    whyDigital: [
      { title: 'Operational Automation', desc: 'Replace manual processes with custom software to improve efficiency.' },
      { title: 'Robust Web Applications', desc: 'Build scalable platforms that deliver exceptional user experiences.' },
      { title: 'Secure Infrastructure', desc: 'Ensure your data is handled with strict security and privacy standards.' }
    ],
    relevantServices: [
      { slug: 'web-development', title: 'Website Development' },
      { slug: 'web-app-development', title: 'Web Applications' },
      { slug: 'custom-software', title: 'Custom Software' },
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' },
      { slug: 'data-engineering', title: 'Data Engineering' },
      { slug: 'business-automation', title: 'Automation' },
    ],
    industries: [
      { slug: 'startups', title: 'Startups' },
      { slug: 'smes', title: 'SMEs' },
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'professional-services', title: 'Professional Services' },
      { slug: 'architecture-construction', title: 'Architecture & Construction' },
    ],
    faq: [
      { q: 'How do you collaborate with Canadian clients?', a: 'We utilize a remote-first methodology, combining async communication tools like Slack and Loom with scheduled synchronous meetings for strategic alignment.' },
      { q: 'Can you build custom dashboards and reporting tools?', a: 'Yes, our data engineering and custom software teams specialize in building operational dashboards that provide real-time business visibility.' },
      { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer ongoing support and maintenance packages after deployment to ensure your applications remain secure and up-to-date.' },
      { q: 'How do you approach software security?', a: 'Security is integrated from day one, utilizing secure coding practices, modern authentication methods, and robust cloud infrastructure configurations.' }
    ]
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
