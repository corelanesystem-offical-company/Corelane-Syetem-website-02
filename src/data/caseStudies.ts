import { Server, Database, Globe, Network, Shield, Cpu, Code2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface CaseStudy {
  slug: string
  title: string
  shortTitle: string
  projectType: 'Client Project' | 'Internal Engineering Project' | 'Portfolio Project' | 'Proof-of-Concept' | 'Educational Project'
  industry: string
  shortDescription: string
  challenge: string
  solution: string
  architecture: {
    frontend?: string[]
    backend?: string[]
    cloud?: string[]
    database?: string[]
    devops?: string[]
  }
  capabilities: string[]
  outcomes: string[]
  relatedServices: { slug: string; title: string }[]
  relatedSolutions: { slug: string; title: string }[]
  relatedIndustries: { slug: string; title: string }[]
  metaTitle: string
  metaDescription: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'real-estate-crm-portal',
    title: 'Digital Transformation for Real Estate Lead Workflows',
    shortTitle: 'Real Estate CRM Portal',
    projectType: 'Portfolio Project',
    industry: 'Real Estate',
    shortDescription: 'A scalable property portal integrated with CRM and automated lead nurturing workflows.',
    challenge: 'Property management agencies often rely on outdated listing platforms that do not synchronize with their internal CRM. This creates manual data entry bottlenecks, delayed response times for inquiries, and a fragmented user experience for potential buyers.',
    solution: 'Engineered a modern web portal connected via REST API to a central property database. The application captures user inquiries and routes them directly into an automated sales pipeline. Webhooks trigger immediate email and SMS notifications to agents.',
    architecture: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'REST API'],
      database: ['PostgreSQL'],
      devops: ['Docker', 'GitHub Actions']
    },
    capabilities: [
      'API Integration',
      'Data Synchronization',
      'Lead Automation',
      'Property Search Filtering'
    ],
    outcomes: [
      'Automated lead ingestion pipeline implemented.',
      'Real-time property listing synchronization established.',
      'Containerized deployment workflow configured.'
    ],
    relatedServices: [
      { slug: 'web-app-development', title: 'Web App Development' },
      { slug: 'business-automation', title: 'Business Automation' }
    ],
    relatedSolutions: [
      { slug: 'custom-business-systems', title: 'Custom Business Systems' }
    ],
    relatedIndustries: [
      { slug: 'real-estate', title: 'Real Estate' }
    ],
    metaTitle: 'Real Estate CRM Portal Project | Corelane Systems',
    metaDescription: 'Portfolio engineering project demonstrating automated property lead workflows, custom CRM integration, and React-based web portals.'
  },
  {
    slug: 'professional-services-operations-platform',
    title: 'Custom Operations Management System',
    shortTitle: 'Operations Platform',
    projectType: 'Portfolio Project',
    industry: 'Professional Services',
    shortDescription: 'A bespoke operations and client management platform designed to replace disconnected spreadsheets.',
    challenge: 'Service firms often manage project timelines, resource allocation, and client communication across multiple disconnected tools. This results in data silos, making it difficult to gain a holistic view of operational efficiency and resource utilization.',
    solution: 'Designed and built a centralized operations dashboard. The architecture utilizes a relational database to link clients, projects, and employees. The frontend provides Role-Based Access Control (RBAC), ensuring that project managers, staff, and clients only see their authorized views.',
    architecture: {
      frontend: ['React Context API', 'Component Library'],
      backend: ['Python / FastAPI'],
      database: ['PostgreSQL', 'Redis Caching'],
      cloud: ['AWS EC2', 'AWS RDS']
    },
    capabilities: [
      'Role-Based Access Control (RBAC)',
      'Relational Database Design',
      'Real-time Status Dashboards',
      'Resource Allocation Logic'
    ],
    outcomes: [
      'Centralized operational database schema deployed.',
      'Secure multi-role authentication system built.',
      'API-driven reporting dashboard implemented.'
    ],
    relatedServices: [
      { slug: 'custom-software', title: 'Custom Software Development' }
    ],
    relatedSolutions: [
      { slug: 'custom-business-systems', title: 'Custom Business Systems' }
    ],
    relatedIndustries: [
      { slug: 'professional-services', title: 'Professional Services' },
      { slug: 'smes', title: 'SMEs' }
    ],
    metaTitle: 'Custom Operations Management System | Corelane Systems',
    metaDescription: 'Engineering portfolio project showcasing a custom operations platform built to consolidate data silos into a unified dashboard.'
  },
  {
    slug: 'saas-cloud-infrastructure-migration',
    title: 'Cloud Infrastructure Migration & CI/CD',
    shortTitle: 'Cloud Migration',
    projectType: 'Portfolio Project',
    industry: 'Technology / SaaS',
    shortDescription: 'Migration of a monolithic infrastructure to scalable AWS environments with automated CI/CD pipelines.',
    challenge: 'A legacy monolithic application hosted on manual virtual private servers was suffering from deployment bottlenecks and scaling limitations. Updates required manual intervention and caused application downtime, severely impacting release velocity.',
    solution: 'Re-architected the deployment strategy using Infrastructure as Code (IaC). The application was containerized using Docker and orchestrated within a managed cloud environment. We established a CI/CD pipeline in GitHub Actions to automate testing and zero-downtime deployments.',
    architecture: {
      cloud: ['AWS ECS', 'Application Load Balancer'],
      devops: ['Terraform', 'Docker', 'GitHub Actions'],
      database: ['Managed RDS Multi-AZ']
    },
    capabilities: [
      'Infrastructure as Code (IaC)',
      'Containerization',
      'Continuous Integration / Continuous Deployment (CI/CD)',
      'Load Balancing'
    ],
    outcomes: [
      'Containerized deployment workflow implemented.',
      'Automated CI/CD pipeline configured.',
      'Infrastructure provisioning documented via Terraform.'
    ],
    relatedServices: [
      { slug: 'cloud-engineering', title: 'Cloud Engineering' },
      { slug: 'devops', title: 'DevOps' }
    ],
    relatedSolutions: [
      { slug: 'cloud-solutions', title: 'Cloud Solutions' }
    ],
    relatedIndustries: [
      { slug: 'startups', title: 'Startups' }
    ],
    metaTitle: 'Cloud Infrastructure Migration Project | Corelane Systems',
    metaDescription: 'Technical portfolio project demonstrating AWS cloud migration, Docker containerization, and automated CI/CD deployment pipelines.'
  },
  {
    slug: 'enterprise-data-pipeline',
    title: 'Automated Enterprise Data Pipeline',
    shortTitle: 'Data Pipeline',
    projectType: 'Proof-of-Concept',
    industry: 'Data & Analytics',
    shortDescription: 'An automated ETL data pipeline built to consolidate analytics from multiple business APIs into a central warehouse.',
    challenge: 'Business intelligence efforts were blocked by fragmented data sources. Compiling reports required manually exporting CSVs from Stripe, Salesforce, and internal databases, then merging them in Excel.',
    solution: 'Engineered a secure, automated data ingestion pipeline. Serverless functions run on a cron schedule to extract data from third-party APIs. The data is transformed, sanitized, and loaded into a central data warehouse, enabling real-time analytics tools to query a single source of truth.',
    architecture: {
      cloud: ['AWS Lambda', 'Amazon EventBridge'],
      database: ['Snowflake / BigQuery'],
      backend: ['Node.js (ETL Scripts)'],
      devops: ['AWS CloudWatch']
    },
    capabilities: [
      'ETL/ELT Processing',
      'Third-party API Orchestration',
      'Serverless Compute',
      'Data Warehousing'
    ],
    outcomes: [
      'Automated data ingestion pipeline completed.',
      'Secure API connection architecture established.',
      'Centralized data repository structured for BI queries.'
    ],
    relatedServices: [
      { slug: 'data-engineering', title: 'Data Engineering' },
      { slug: 'business-automation', title: 'Business Automation' }
    ],
    relatedSolutions: [
      { slug: 'data-solutions', title: 'Data Solutions' }
    ],
    relatedIndustries: [
      { slug: 'ecommerce', title: 'E-commerce' },
      { slug: 'smes', title: 'SMEs' }
    ],
    metaTitle: 'Automated Enterprise Data Pipeline | Corelane Systems',
    metaDescription: 'Proof-of-concept engineering project demonstrating secure ETL data pipelines and serverless API integrations.'
  }
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug)
}
