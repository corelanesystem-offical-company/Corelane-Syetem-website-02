import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import { solutions } from '@/data/solutions'
import CTASection from '@/components/sections/CTASection'
import { trackEvent } from '@/utils/analytics'
import Button from '@/components/ui/Button'

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Technology Solutions | Corelane Systems</title>
        <meta name="description" content="Corelane Systems provides custom business systems, cloud solutions, data engineering, and automation technology built around your operations." />
        <link rel="canonical" href="https://corelanesystems.com/solutions" />
      </Helmet>

      {/* Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Outcomes over Features
          </p>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance animate-fade-up" style={{ animationDelay: '100ms' }}>
            Technology solutions built around how your business operates.
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            We connect custom software, cloud infrastructure, data pipelines, and automation tools into cohesive systems that solve real operational challenges.
          </p>
        </Container>
      </Section>

      {/* Business Challenges */}
      <Section variant="alt" className="border-b border-border">
        <Container className="max-w-4xl text-center">
          <SectionHeader
            title="The Operational Reality"
            subtitle="Most businesses don't need more software. They need their existing tools to communicate, their manual processes to be automated, and their data to be visible."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 text-left">
            {[
              'Disconnected SaaS systems',
              'Manual data entry workflows',
              'Fragmented spreadsheets',
              'Legacy software limitations',
              'Cloud infrastructure complexity',
              'Lack of real-time visibility'
            ].map((challenge, i) => (
              <div key={i} className="bg-surface border border-border p-4 rounded-lg shadow-sm flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand shrink-0 mt-2" />
                <span className="text-sm font-medium text-text-secondary">{challenge}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Solutions Listing */}
      <Section variant="default">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {solutions.map((solution, index) => (
              <div key={solution.slug} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual side */}
                <div className="w-full lg:w-5/12">
                  <div className="bg-surface-alt border border-border rounded-2xl p-8 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <solution.icon size={64} className="text-brand mb-6" />
                    <h3 className="text-2xl font-bold text-text-primary mb-3 relative z-10">{solution.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xs relative z-10">{solution.tagline}</p>
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full lg:w-7/12">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{solution.h1}</h2>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-4">Core Capabilities</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {solution.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                          <CheckCircle2 size={16} className="text-brand shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={`/solutions/${solution.slug}`}
                    onClick={() => trackEvent('solution_cta_click', { solution: solution.slug })}
                  >
                    <Button variant="outline" className="group">
                      Explore Solution
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Have a business problem to solve?"
        subtitle="Let's engineer a solution that fits your exact operational requirements."
      />
    </>
  )
}
