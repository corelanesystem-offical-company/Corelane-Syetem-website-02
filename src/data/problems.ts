import { AlertTriangle, Settings, Puzzle, Code2, TrendingUp, Database, type LucideIcon } from 'lucide-react'

export interface Problem {
  id: string
  problem: string
  description: string
  solution: string
  icon: LucideIcon
  service: string
  serviceSlug: string
}

export const problems: Problem[] = [
  {
    id: 'outdated-digital-presence',
    problem: 'Outdated Digital Presence',
    description: 'An outdated or missing website can make it harder for customers to understand and engage with a business.',
    solution: 'Modern websites, landing pages, responsive experiences, and business-focused web solutions.',
    icon: AlertTriangle,
    service: 'Website Development',
    serviceSlug: 'web-development',
  },
  {
    id: 'manual-business-processes',
    problem: 'Manual Business Processes',
    description: 'Time-consuming manual tasks and workflows slow down operations and increase the risk of human error.',
    solution: 'Automated workflows, digitized operations, and business automation solutions that save time.',
    icon: Settings,
    service: 'Business Automation',
    serviceSlug: 'business-automation',
  },
  {
    id: 'disconnected-systems',
    problem: 'Disconnected Systems',
    description: 'Tools and platforms that do not communicate with each other result in isolated data and inefficiencies.',
    solution: 'API integrations, unified platforms, and seamless data flow between your essential business applications.',
    icon: Puzzle,
    service: 'Web Application Development',
    serviceSlug: 'web-app-development',
  },
  {
    id: 'custom-software-requirements',
    problem: 'Custom Software Requirements',
    description: 'Off-the-shelf software doesn\'t always align with unique business models or complex internal processes.',
    solution: 'Bespoke software solutions tailored exactly to how your team works and what your business needs.',
    icon: Code2,
    service: 'Custom Software Development',
    serviceSlug: 'custom-software',
  },
  {
    id: 'scalability-challenges',
    problem: 'Scalability Challenges',
    description: 'Existing digital infrastructure struggles to handle increased load, traffic, or data volume as the business grows.',
    solution: 'Scalable cloud infrastructure, DevOps practices, and optimized engineering for reliable growth.',
    icon: TrendingUp,
    service: 'Cloud Engineering',
    serviceSlug: 'cloud-engineering',
  },
  {
    id: 'data-reporting-challenges',
    problem: 'Data & Reporting Challenges',
    description: 'Critical business data is scattered across spreadsheets, making it difficult to generate insights or make decisions.',
    solution: 'Centralized data engineering, custom analytics dashboards, and clear reporting pipelines.',
    icon: Database,
    service: 'Data Analytics',
    serviceSlug: 'data-analytics',
  },
]
