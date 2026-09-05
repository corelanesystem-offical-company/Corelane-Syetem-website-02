import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, AlertCircle, CheckCircle2, ChevronDown, Workflow, Building2, CloudCog, DatabaseZap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import type { Solution } from '@/data/solutions'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

interface SolutionDetailPageProps {
  solution: Solution
}

// Generate an abstract conceptual visual based on the solution
function SolutionVisual({ slug }: { slug: string }) {
  if (slug === 'custom-business-systems') {
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="px-6 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-sm text-text-inverse font-bold">Users</div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-4 bg-brand/20 border border-brand/50 rounded-xl text-brand-light font-bold">Custom Application</div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-4 bg-surface-dark-muted border border-border-dark rounded-xl text-text-inverse font-bold">Core Business Logic</div>
        <div className="flex gap-8 mt-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-px h-6 bg-brand-accent" />
            <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded-lg text-xs text-text-muted">Database</div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-px h-6 bg-brand-accent" />
            <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded-lg text-xs text-text-muted">Reports</div>
          </div>
        </div>
      </div>
    )
  }

  if (slug === 'business-automation') {
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="px-6 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-sm text-text-inverse font-bold">Event / Trigger</div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-4 bg-brand/20 border border-brand/50 rounded-xl text-brand-light font-bold">Automated Workflow</div>
        <div className="w-px h-6 bg-brand" />
        <div className="flex gap-8">
          <div className="px-6 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-sm text-text-muted font-bold">CRM API</div>
          <div className="px-6 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-sm text-text-muted font-bold">ERP API</div>
        </div>
      </div>
    )
  }

  if (slug === 'cloud-solutions') {
    return (
      <div className="flex flex-col items-center gap-4 py-8 w-full max-w-sm mx-auto">
        <div className="px-8 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-sm text-text-inverse font-bold w-full text-center">Load Balancer</div>
        <div className="w-px h-6 bg-brand" />
        <div className="flex justify-between w-full gap-4">
          <div className="flex-1 py-4 bg-brand/20 border border-brand/50 rounded-xl text-brand-light font-bold text-center text-sm">Compute A</div>
          <div className="flex-1 py-4 bg-brand/20 border border-brand/50 rounded-xl text-brand-light font-bold text-center text-sm">Compute B</div>
        </div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-sm text-text-muted font-bold w-full text-center">Managed Storage / Database</div>
      </div>
    )
  }

  if (slug === 'data-solutions') {
    return (
      <div className="flex flex-col items-center gap-4 py-8 w-full max-w-sm mx-auto">
        <div className="flex justify-between w-full gap-4">
          <div className="flex-1 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-xs text-text-muted text-center">Source 1</div>
          <div className="flex-1 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-xs text-text-muted text-center">Source 2</div>
          <div className="flex-1 py-3 bg-surface-dark-muted border border-border-dark rounded-lg text-xs text-text-muted text-center">Source 3</div>
        </div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-3 bg-brand/20 border border-brand/50 rounded-xl text-brand-light font-bold w-full text-center text-sm">ETL Pipeline (Transformation)</div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-4 bg-surface-dark-muted border border-border-dark rounded-xl text-text-inverse font-bold w-full text-center">Data Warehouse</div>
        <div className="w-px h-6 bg-brand" />
        <div className="px-8 py-3 bg-brand-light border border-brand rounded-lg text-brand font-bold w-full text-center text-sm">BI Analytics Dashboard</div>
      </div>
    )
  }

  // Fallback
  return (
    <div className="w-full aspect-square border border-border-dark rounded-full flex items-center justify-center opacity-50">
      <Building2 size={48} className="text-brand" />
    </div>
  )
}

export default function SolutionDetailPage({ solution }: SolutionDetailPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <>
      <Helmet>
        <title>{solution.metaTitle}</title>
        <meta name="description" content={solution.metaDescription} />
        <link rel="canonical" href={`https://corelanesystems.com/solutions/${solution.slug}`} />
      </Helmet>

      {/* 1. Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-text-muted mb-6">
                <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
                <span>/</span>
                <Link to="/solutions" className="hover:text-brand-accent transition-colors">Solutions</Link>
                <span>/</span>
                <span className="text-text-inverse font-medium">{solution.title}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">
                <solution.icon size={16} />
                <span>{solution.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse mb-6 text-balance leading-tight">
                {solution.h1}
              </h1>
              
              <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl">
                {solution.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  onClick={() => trackEvent('cta_start_project', { source: 'solution_hero', solution: solution.slug })}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full bg-brand hover:bg-brand-hover text-white border-transparent">
                    Discuss Your Problem
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                
                <a 
                  href={CONTACT.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cta_whatsapp', { source: 'solution_hero', solution: solution.slug })}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg w-full sm:w-auto"
                >
                  <Button variant="dark" size="lg" className="w-full border-border-dark hover:bg-surface-dark-muted">
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center p-8 bg-surface-dark-muted rounded-2xl border border-border-dark">
              <SolutionVisual slug={solution.slug} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Business Problem & Solution Overview */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeader
                align="left"
                eyebrow="The Challenge"
                title="Operational friction points."
                subtitle="Businesses typically approach us when they experience these symptoms:"
                className="mb-8"
              />
              <div className="space-y-4">
                {solution.businessProblems.map((prob, i) => (
                  <div key={i} className="bg-surface p-5 rounded-xl border border-border flex gap-4">
                    <AlertCircle className="text-brand shrink-0 mt-0.5" size={20} />
                    <p className="font-medium text-text-secondary leading-relaxed">{prob}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-surface p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-center">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} className="text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">The Solution</h3>
              <p className="text-lg text-text-secondary leading-relaxed font-medium">
                {solution.solutionOverview}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. What We Build & Capabilities */}
      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                align="left"
                title="Deliverables"
                subtitle="What we actually build and deploy into your environment."
                className="mb-8"
              />
              <ul className="space-y-4">
                {solution.whatWeBuild.map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary font-medium items-center">
                    <div className="w-8 h-8 rounded-lg bg-surface-alt border border-border flex items-center justify-center shrink-0">
                      <ArrowRight size={16} className="text-brand" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <SectionHeader
                align="left"
                title="Capabilities"
                subtitle="The technical engineering skills we apply to this solution."
                className="mb-8"
              />
              <div className="flex flex-wrap gap-2">
                {solution.capabilities.map((cap, i) => (
                  <Badge key={i} variant="default" className="py-2 px-4 text-sm bg-surface border-border hover:border-brand/30">
                    {cap}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Use Cases */}
      <Section variant="alt" className="border-y border-border">
        <Container>
          <SectionHeader
            title="Real-World Use Cases"
            subtitle="How our clients apply these solutions in practice."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {solution.useCases.map((uc, i) => (
              <div key={i} className="bg-surface border border-border p-8 rounded-2xl shadow-sm hover:shadow-card transition-shadow">
                <h3 className="text-xl font-bold text-text-primary mb-3">{uc.title}</h3>
                <p className="text-text-secondary leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Technology Stack */}
      <Section variant="dark" className="bg-surface-dark py-20 border-b border-border-dark text-center">
        <Container className="max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest uppercase text-text-inverse mb-8">Technology Foundation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {solution.techFoundation.map((tech, i) => (
              <span key={i} className="px-6 py-3 bg-surface-dark-muted rounded-xl text-sm font-semibold border border-border-dark text-text-muted">
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Context (Industries & Related) */}
      <Section variant="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            
            {/* Industries */}
            <div className="bg-surface-alt p-8 rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-6">Relevant Industries</h3>
              <div className="space-y-3">
                {solution.relevantIndustries.map((rel, i) => (
                  <Link key={i} to={`/industries/${rel.slug}`} className="group flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-brand transition-colors shadow-sm">
                    <span className="font-medium text-text-secondary group-hover:text-brand">{rel.title}</span>
                    <ArrowRight size={16} className="text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-surface-alt p-8 rounded-2xl border border-border">
              <h3 className="text-lg font-bold text-text-primary mb-6">Related Engineering Services</h3>
              <div className="space-y-3">
                {solution.relatedServices.map((rel, i) => (
                  <Link key={i} to={`/services/${rel.slug}`} className="group flex items-center justify-between p-4 bg-surface rounded-xl border border-transparent hover:border-brand transition-colors shadow-sm">
                    <span className="font-medium text-text-secondary group-hover:text-brand">{rel.title}</span>
                    <ArrowRight size={16} className="text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 7. FAQ */}
      {solution.faq && solution.faq.length > 0 && (
        <Section variant="alt" className="border-t border-border">
          <Container className="max-w-3xl">
            <SectionHeader title="Common Questions" align="center" />
            <div className="space-y-4 mt-8">
              {solution.faq.map((faq, index) => {
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

      {/* 8. Final CTA */}
      <CTASection 
        title="Ready to solve this problem?"
        subtitle="Let's engineer a solution that fits your exact operational requirements."
      />
    </>
  )
}
