import { Building2, Workflow, CloudCog, DatabaseZap, Unplug, type LucideIcon } from 'lucide-react'

export interface Solution {
  slug: string
  title: string
  h1: string
  tagline: string
  description: string
  longDescription: string
  icon: LucideIcon
  businessProblems: string[]
  solutionOverview: string
  whatWeBuild: string[]
  capabilities: string[]
  techFoundation: string[]
  relatedServices: { slug: string; title: string }[]
  relevantIndustries: { slug: string; title: string }[]
  useCases: { title: string; desc: string }[]
  faq: { q: string; a: string }[]
  metaTitle: string
  metaDescription: string
}

export const solutions: Solution[] = [
  {
    slug: 'custom-business-systems',
    title: 'Custom Business Systems',
    h1: 'Bespoke Software for Complex Business Operations',
    tagline: 'When off-the-shelf SaaS limits your growth, we build software that fits your exact workflows.',
    description: 'We engineer custom portals, operational dashboards, and internal software that align perfectly with your business logic.',
    longDescription: 'Standard software products force you to adapt your operations to their limitations. Corelane Systems builds custom business applications designed specifically for your unique processes. From internal management systems to client-facing portals, we deliver scalable software that provides complete operational control.',
    icon: Building2,
    businessProblems: [
      'Relying on massive, error-prone spreadsheets for core operations.',
      'Using multiple disconnected SaaS tools to complete a single workflow.',
      'Outgrowing off-the-shelf software limitations.',
      'Lack of centralized visibility into business performance.'
    ],
    solutionOverview: 'A unified custom software platform engineered to handle your specific business logic, integrated with your existing tools, and accessible from anywhere.',
    whatWeBuild: [
      'Internal Operational Portals',
      'Client Management Dashboards',
      'Inventory & Resource Management Systems',
      'Custom CRM & ERP Modules'
    ],
    capabilities: [
      'Requirements Analysis',
      'Custom Architecture',
      'Secure Authentication',
      'Role-based Access Control',
      'Legacy System Modernization'
    ],
    techFoundation: [
      'React & TypeScript Frontend',
      'Node.js / Python Backend',
      'PostgreSQL / NoSQL Databases',
      'AWS / Azure Hosting'
    ],
    relatedServices: [
      { slug: 'custom-software', title: 'Custom Software Development' },
      { slug: 'web-app-development', title: 'Web App Development' },
      { slug: 'ui-ux-design', title: 'UI/UX Design' }
    ],
    relevantIndustries: [
      { slug: 'real-estate', title: 'Real Estate' },
      { slug: 'healthcare', title: 'Healthcare' },
      { slug: 'architecture-construction', title: 'Architecture & Construction' },
      { slug: 'smes', title: 'SMEs' }
    ],
    useCases: [
      { title: 'Client Portals', desc: 'Secure environments for your clients to access documents, track project status, and communicate.' },
      { title: 'Operations Dashboards', desc: 'Centralized screens giving management real-time visibility into company performance.' }
    ],
    faq: [
      { q: 'Is custom software better than SaaS?', a: 'Custom software is better when standard SaaS forces you to compromise your core operations or when licensing costs scale poorly with your growth.' },
      { q: 'How long does it take to build a custom system?', a: 'Depending on complexity, an initial MVP (Minimum Viable Product) can typically be deployed within 3 to 6 months.' },
      { q: 'Will we own the software?', a: 'Yes. Corelane Systems builds the software for you, and upon project completion, you own the intellectual property and source code.' }
    ],
    metaTitle: 'Custom Business Systems & Software Solutions | Corelane Systems',
    metaDescription: 'Corelane Systems engineers bespoke business software, internal portals, and operational dashboards tailored to your exact workflows.'
  },
  {
    slug: 'business-automation',
    title: 'Business Automation',
    h1: 'Automate Manual Workflows and Connect Your Systems',
    tagline: 'Eliminate manual data entry and human error with intelligent system integrations.',
    description: 'We connect your CRM, accounting, and operational tools to create seamless, automated data pipelines.',
    longDescription: 'Manual data entry is slow, expensive, and prone to errors. We help businesses identify bottlenecks and replace them with automated workflows. By integrating your existing SaaS applications via their APIs, we ensure data flows instantly and securely across your entire organization.',
    icon: Workflow,
    businessProblems: [
      'Employees spending hours copy-pasting data between systems.',
      'High rate of human error in administrative tasks.',
      'Delayed reporting due to manual data aggregation.',
      'Lost leads due to slow response times.'
    ],
    solutionOverview: 'Robust, automated data pipelines that trigger actions across multiple platforms without human intervention.',
    whatWeBuild: [
      'API Integrations',
      'Automated Workflows',
      'Data Synchronization Scripts',
      'Custom Middleware'
    ],
    capabilities: [
      'Workflow Auditing',
      'API Development',
      'Third-party Integration',
      'Error Handling & Logging',
      'Webhook Implementation'
    ],
    techFoundation: [
      'Node.js Middleware',
      'RESTful APIs & Webhooks',
      'Serverless Functions (AWS Lambda)',
      'Integration Platforms'
    ],
    relatedServices: [
      { slug: 'business-automation', title: 'Business Automation Service' },
      { slug: 'cloud-engineering', title: 'Cloud Engineering' }
    ],
    relevantIndustries: [
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'law-firms', title: 'Law Firms' },
      { slug: 'professional-services', title: 'Professional Services' }
    ],
    useCases: [
      { title: 'Lead Automation', desc: 'Automatically routing website inquiries to your CRM and notifying sales via Slack or Teams.' },
      { title: 'Order Processing', desc: 'Syncing e-commerce orders directly into accounting software without manual data entry.' }
    ],
    faq: [
      { q: 'What systems can you integrate?', a: 'We can integrate almost any modern system that provides a REST or GraphQL API (e.g., Salesforce, Hubspot, Xero, Stripe).' },
      { q: 'Is automation secure?', a: 'Yes. We use secure API keys, OAuth protocols, and encrypted data transfer to ensure your information remains protected.' }
    ],
    metaTitle: 'Business Automation & API Integration Solutions | Corelane Systems',
    metaDescription: 'Eliminate manual data entry. Corelane Systems builds automated workflows and API integrations to connect your business tools.'
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    h1: 'Scalable and Secure Cloud Infrastructure',
    tagline: 'Modernize your infrastructure for better reliability, security, and performance.',
    description: 'We architect, migrate, and manage cloud environments on AWS and Azure to ensure your applications run flawlessly.',
    longDescription: 'Legacy servers limit agility and introduce significant risk. We help businesses migrate to the cloud and optimize their existing cloud architecture. Our cloud solutions focus on high availability, robust security, and cost efficiency, ensuring your digital infrastructure can scale on demand.',
    icon: CloudCog,
    businessProblems: [
      'Frequent application downtime or slow performance.',
      'High costs associated with maintaining on-premise hardware.',
      'Inability to scale resources quickly during traffic spikes.',
      'Security vulnerabilities in legacy infrastructure.'
    ],
    solutionOverview: 'A modernized, highly available cloud environment engineered for security, performance, and scalable growth.',
    whatWeBuild: [
      'Cloud Architecture Design',
      'Infrastructure as Code (IaC)',
      'Load Balanced Environments',
      'Disaster Recovery Systems'
    ],
    capabilities: [
      'Cloud Migration',
      'Cost Optimization',
      'Security Hardening',
      'Container Orchestration',
      'Performance Monitoring'
    ],
    techFoundation: [
      'AWS / Azure / GCP',
      'Docker & Kubernetes',
      'Terraform',
      'Linux Server Administration'
    ],
    relatedServices: [
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' }
    ],
    relevantIndustries: [
      { slug: 'startups', title: 'Startups' },
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'healthcare', title: 'Healthcare' }
    ],
    useCases: [
      { title: 'Cloud Migration', desc: 'Safely moving legacy applications from physical servers to scalable cloud environments with zero downtime.' },
      { title: 'Auto-Scaling Infrastructure', desc: 'Setting up environments that automatically add servers during peak traffic and remove them when traffic drops.' }
    ],
    faq: [
      { q: 'Will the cloud reduce our IT costs?', a: 'Often yes, by eliminating hardware maintenance and allowing you to pay only for the compute resources you actually use.' },
      { q: 'Is our data secure in the cloud?', a: 'When configured correctly by experts, cloud environments offer enterprise-grade security, encryption, and compliance controls.' }
    ],
    metaTitle: 'Cloud Solutions & Infrastructure Engineering | Corelane Systems',
    metaDescription: 'Corelane Systems provides secure cloud migration, architecture, and management services on AWS and Azure for scalable growth.'
  },
  {
    slug: 'data-solutions',
    title: 'Data Solutions',
    h1: 'Turn Fragmented Information into Business Intelligence',
    tagline: 'Consolidate your data to make faster, more accurate business decisions.',
    description: 'We build data pipelines, warehouses, and analytics dashboards that give you complete operational visibility.',
    longDescription: 'When your data is scattered across multiple CRMs, databases, and spreadsheets, making informed decisions becomes impossible. Corelane Systems engineers robust data solutions that centralize your information. We build automated pipelines that extract, transform, and load (ETL) your data into secure warehouses for real-time analysis.',
    icon: DatabaseZap,
    businessProblems: [
      'Inability to track KPIs across different business units.',
      'Reports taking days to compile manually.',
      'Inconsistent or inaccurate data between departments.',
      'Lack of historical data analysis for forecasting.'
    ],
    solutionOverview: 'A centralized data ecosystem that automatically aggregates information and presents it through intuitive dashboards.',
    whatWeBuild: [
      'Data Warehouses',
      'ETL/ELT Pipelines',
      'Business Intelligence Dashboards',
      'Custom Analytics Portals'
    ],
    capabilities: [
      'Data Strategy',
      'Pipeline Architecture',
      'Database Optimization',
      'Data Cleansing',
      'Dashboard Visualization'
    ],
    techFoundation: [
      'PostgreSQL / Snowflake / BigQuery',
      'Python / Node.js Pipelines',
      'Apache Airflow',
      'Tableau / PowerBI / Custom React Dashboards'
    ],
    relatedServices: [
      { slug: 'data-engineering', title: 'Data Engineering' },
      { slug: 'data-analytics', title: 'Data Analytics' }
    ],
    relevantIndustries: [
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'real-estate', title: 'Real Estate' },
      { slug: 'smes', title: 'SMEs' }
    ],
    useCases: [
      { title: 'Executive Dashboards', desc: 'Real-time visualizations of company-wide performance metrics, accessible from any device.' },
      { title: 'Unified Customer Views', desc: 'Merging data from sales, support, and marketing to create a complete picture of customer behavior.' }
    ],
    faq: [
      { q: 'Can you connect to our legacy database?', a: 'Yes. We can build custom extractors to pull data securely from older on-premise systems.' },
      { q: 'Who owns the data warehouse?', a: 'You do. We build the infrastructure in your cloud environment, ensuring you retain complete control over your data.' }
    ],
    metaTitle: 'Data Engineering & Analytics Solutions | Corelane Systems',
    metaDescription: 'Gain operational visibility. Corelane Systems builds data pipelines, warehouses, and custom analytics dashboards.'
  }
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
