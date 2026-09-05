import { ArrowRight, Workflow, Building2, CloudCog, DatabaseZap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'

export default function SolutionsSection() {
  const solutions = [
    {
      title: 'Business Automation',
      description: 'Replace manual data entry with API integrations that connect your CRMs, accounting systems, and operational tools.',
      icon: Workflow,
      href: '/process'
    },
    {
      title: 'Custom Business Systems',
      description: 'When SaaS products don\'t fit, we build bespoke portals, dashboards, and operational software that map exactly to your workflows.',
      icon: Building2,
      href: '/process'
    },
    {
      title: 'Cloud Solutions',
      description: 'Migrate legacy applications to AWS/Azure for better reliability, or optimize existing cloud infrastructure to reduce costs.',
      icon: CloudCog,
      href: '/process'
    },
    {
      title: 'Data Solutions',
      description: 'Consolidate scattered data sources into centralized warehouses to power real-time business intelligence and reporting.',
      icon: DatabaseZap,
      href: '/process'
    }
  ]

  return (
    <Section variant="default" className="border-t border-border">
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title="Outcomes, not just code."
          subtitle="We align our engineering expertise directly with your business goals."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {solutions.map((solution, i) => (
            <div key={i} className="flex gap-4 md:gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-surface-alt border border-border flex items-center justify-center shrink-0 text-text-primary group-hover:bg-brand-light group-hover:text-brand group-hover:border-brand/20 transition-colors">
                <solution.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {solution.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {solution.description}
                </p>
                <Link 
                  to={solution.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                >
                  Learn how we solve this
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
