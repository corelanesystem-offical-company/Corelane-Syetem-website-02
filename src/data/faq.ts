export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'general' | 'process' | 'pricing' | 'technical'
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What type of businesses does Corelane Systems work with?',
    answer: 'We work with startups, SMEs, professional services, and growing businesses globally. Our clients come from various industries, including real estate, law firms, healthcare, and e-commerce, seeking robust technology solutions to solve real business challenges.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'What types of websites do you build?',
    answer: 'We build professional, conversion-focused B2B websites, corporate platforms, landing pages, and complex digital experiences. All our websites are custom-designed, fully responsive, and optimized for performance and SEO.',
    category: 'technical',
  },
  {
    id: 'faq-3',
    question: 'Can you build custom web applications?',
    answer: 'Yes. A significant part of our work involves building bespoke web applications, including internal dashboards, customer portals, SaaS platforms, and operational tools tailored to your unique workflows.',
    category: 'technical',
  },
  {
    id: 'faq-4',
    question: 'Do you provide cloud and DevOps services?',
    answer: 'Absolutely. We architect, migrate, and manage cloud infrastructure on platforms like AWS, Azure, and Google Cloud. We also set up CI/CD pipelines and implement DevOps best practices to ensure your applications run reliably and securely.',
    category: 'technical',
  },
  {
    id: 'faq-5',
    question: 'How do we start a project?',
    answer: 'It starts with a conversation. You can reach out via email, WhatsApp, or our contact form to discuss your business challenge. We\'ll schedule a discovery call to understand your needs, outline a solution, and provide a clear plan and scope before development begins.',
    category: 'process',
  },
]
