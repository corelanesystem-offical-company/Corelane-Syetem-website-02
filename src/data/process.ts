import { Search, Map, Lightbulb, Code2, Rocket, TrendingUp, type LucideIcon } from 'lucide-react'

export interface ProcessStep {
  number: string
  title: string
  description: string
  details: string[]
  icon: LucideIcon
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business challenge and goals.',
    details: [
      'In-depth discovery session with your team',
      'Business process and requirements mapping',
      'Technical audit (if existing systems are involved)',
    ],
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define scope, architecture, and roadmap.',
    details: [
      'Solution architecture and technology recommendation',
      'Technical specification document',
      'Project timeline and milestone plan',
    ],
    icon: Map,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create the user experience and product structure.',
    details: [
      'UI/UX wireframes and design mockups',
      'Interactive prototypes for feedback',
      'Design system creation',
    ],
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build the software solution.',
    details: [
      'Agile development in structured sprints',
      'Regular progress updates and sprint reviews',
      'Continuous testing throughout development',
    ],
    icon: Code2,
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Release the solution into its production environment.',
    details: [
      'Production deployment and go-live support',
      'Performance and security verification',
      'Team handover and documentation',
    ],
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Maintain, optimize, and scale the solution.',
    details: [
      'Post-launch monitoring and support',
      'Iterative feature development',
      'Performance optimization and scaling',
    ],
    icon: TrendingUp,
  },
]
