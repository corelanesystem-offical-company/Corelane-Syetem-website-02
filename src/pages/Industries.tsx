import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import { industries } from '@/data/industries'
import CTASection from '@/components/sections/CTASection'
import { trackEvent } from '@/utils/analytics'
import Badge from '@/components/ui/Badge'

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries & Applications | Corelane Systems</title>
        <meta name="description" content="Corelane Systems provides engineered technology solutions for modern operational environments across diverse business sectors." />
        <link rel="canonical" href="https://corelanesystems.com/industries" />
      </Helmet>

      {/* Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Industry Context
          </p>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance animate-fade-up" style={{ animationDelay: '100ms' }}>
            Technology built around your operational realities.
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            We engineer software and infrastructure solutions adapted to the unique workflows, compliance requirements, and scaling challenges of your specific industry.
          </p>
        </Container>
      </Section>

      {/* Industries Grid */}
      <Section variant="default">
        <Container>
          <SectionHeader
            align="left"
            title="Relevant Applications"
            subtitle="Our engineering capabilities translate into practical solutions for businesses in these sectors."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.slug} 
                to={`/industries/${industry.slug}`}
                onClick={() => trackEvent('industry_cta_click', { industry: industry.slug, source: 'industries_index' })}
                className="group flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-2xl"
              >
                <div className="bg-surface-alt border border-border rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 group-hover:bg-surface group-hover:border-brand group-hover:shadow-card">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-xl flex items-center justify-center transition-transform group-hover:-translate-y-1 shrink-0">
                      <industry.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-3">Key Challenges Solved</div>
                    <ul className="space-y-2">
                      {industry.challenges.slice(0, 2).map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 size={14} className="text-brand shrink-0 mt-0.5" />
                          <span>{challenge.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-sm font-semibold text-brand flex items-center gap-2 mt-auto">
                    Explore Solutions
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTASection 
        title="Don't see your specific industry?"
        subtitle="Corelane Systems builds custom engineering solutions that adapt to any complex operational environment. Let's discuss your requirements."
      />
    </>
  )
}
