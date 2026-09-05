import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import { industries } from '@/data/industries'
import { trackEvent } from '@/utils/analytics'

export default function IndustriesSection() {
  return (
    <Section variant="default">
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Technology solutions for your sector."
          subtitle="We build specialized software and digital infrastructure adapted to the operational realities of different business verticals."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              to={`/industries/${industry.slug}`}
              onClick={() => trackEvent('industry_cta_click', { industry: industry.slug, source: 'home' })}
              className="group block p-6 bg-surface-alt rounded-xl border border-border hover:border-brand hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <div className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center mb-4 text-text-secondary group-hover:text-brand transition-colors">
                <industry.icon size={20} />
              </div>
              <h3 className="font-semibold text-text-primary mb-2 group-hover:text-brand transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm font-medium text-text-muted flex items-center gap-1 group-hover:text-brand-hover transition-colors">
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
