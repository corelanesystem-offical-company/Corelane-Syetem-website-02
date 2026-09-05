import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import type { Industry } from '@/data/industries'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

interface IndustryDetailPageProps {
  industry: Industry
}

export default function IndustryDetailPage({ industry }: IndustryDetailPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <>
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <link rel="canonical" href={`https://corelanesystems.com/industries/${industry.slug}`} />
      </Helmet>

      {/* 1. Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-brand-accent transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-text-inverse font-medium">{industry.title}</span>
          </div>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-dark-muted border border-border-dark text-brand-accent mb-8 shadow-sm">
            <industry.icon size={32} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse mb-6 text-balance leading-tight">
            {industry.h1}
          </h1>
          
          <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-3xl mx-auto">
            {industry.longDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              onClick={() => trackEvent('cta_start_project', { source: 'industry_hero', industry: industry.slug })}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-brand hover:bg-brand-hover text-white border-transparent">
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Button>
            </Link>
            
            <a 
              href={CONTACT.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_whatsapp', { source: 'industry_hero', industry: industry.slug })}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg w-full sm:w-auto"
            >
              <Button variant="dark" size="lg" className="w-full border-border-dark hover:bg-surface-dark-muted">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </Container>
      </Section>

      {/* 2. Operational Challenges */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Operational Problems"
            subtitle={`Common technical bottlenecks experienced within the ${industry.title} sector.`}
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industry.challenges.map((challenge, i) => (
              <div key={i} className="bg-surface border border-border p-6 rounded-xl shadow-sm hover:border-brand/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="text-brand shrink-0" size={20} />
                  <h3 className="font-bold text-text-primary text-sm">{challenge.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Solutions & Opportunities */}
      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                align="left"
                title="Relevant Solutions"
                subtitle="How we engineer systems to address these specific operational challenges."
                className="mb-8"
              />
              <div className="space-y-6">
                {industry.exampleSolutions.map((sol, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{sol.title}</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">{sol.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-surface-alt p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-6">Business Outcomes</h3>
              <div className="space-y-4">
                {industry.opportunities.map((opp, i) => (
                  <div key={i} className="bg-surface p-5 rounded-xl border border-border">
                    <h4 className="font-bold text-sm text-text-primary mb-2">{opp.title}</h4>
                    <p className="text-sm text-text-secondary">{opp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Cross-linking: Relevant Services */}
      {industry.relevantServices && industry.relevantServices.length > 0 && (
        <Section variant="alt" className="border-t border-border">
          <Container>
            <SectionHeader
              title="Engineering Capabilities"
              subtitle={`The technical services we frequently deploy for ${industry.title} operations.`}
              align="center"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
              {industry.relevantServices.map((rel, i) => (
                <Link key={i} to={`/services/${rel.slug}`} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl">
                  <div className="bg-surface border border-border p-5 rounded-xl shadow-sm hover:border-brand hover:shadow-card transition-all text-center h-full flex flex-col items-center justify-center gap-3">
                    <span className="font-semibold text-text-secondary group-hover:text-brand">{rel.title}</span>
                    <ArrowRight size={16} className="text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. FAQ */}
      {industry.faq && industry.faq.length > 0 && (
        <Section variant="default" className="border-t border-border">
          <Container className="max-w-3xl">
            <SectionHeader title="Common Questions" align="center" />
            <div className="space-y-4 mt-8">
              {industry.faq.map((faq, index) => {
                const id = `faq-${index}`
                const isOpen = openFaqId === id
                return (
                  <div key={id} className="border border-border rounded-xl bg-surface overflow-hidden shadow-sm hover:border-brand/30 transition-colors">
                    <button
                      onClick={() => toggleFaq(id)}
                      className="w-full flex items-center justify-between p-5 text-left focus-visible:outline-none focus-visible:bg-surface-alt"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-text-primary">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={cn('text-text-muted transition-transform shrink-0 ml-4', isOpen && 'rotate-180 text-brand')}
                      />
                    </button>
                    <div className={cn('overflow-hidden transition-all duration-300 ease-in-out', isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
                      <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed pt-2 border-t border-border mt-2">{faq.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Final CTA */}
      <CTASection 
        title={`Looking for technical solutions in ${industry.title}?`}
        subtitle="Let's review your operational bottlenecks and engineer a reliable system."
      />
    </>
  )
}
