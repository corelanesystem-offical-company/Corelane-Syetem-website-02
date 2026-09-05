import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, AlertCircle, CheckCircle2, ChevronDown, Server, Cloud, Code, GitBranch, Database, Workflow, Shield, Monitor, BarChart3, Zap } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import type { Service } from '@/data/services'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

interface ServiceDetailPageProps {
  service: Service
}

// Generate a lightweight technical visual based on service type
function ServiceVisual({ slug }: { slug: string }) {
  const isCloud = slug.includes('cloud') || slug.includes('devops')
  const isData = slug.includes('data')
  const isAutomation = slug.includes('automation')

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto opacity-90">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Central Base Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-surface-dark-muted rounded-2xl border border-brand/30 flex items-center justify-center z-20">
        {isData ? <Database size={32} className="text-brand-accent" /> :
         isCloud ? <Cloud size={32} className="text-brand-accent" /> :
         isAutomation ? <Workflow size={32} className="text-brand-accent" /> :
         <Code size={32} className="text-brand-accent" />}
      </div>

      {/* Dynamic Floating Nodes */}
      <div className="absolute top-[15%] left-[20%] w-12 h-12 bg-surface-dark rounded-xl border border-border-dark flex items-center justify-center z-20 animate-pulse" style={{ animationDelay: '0s' }}>
        {isData ? <BarChart3 size={20} className="text-text-muted" /> : <Server size={20} className="text-text-muted" />}
      </div>
      <div className="absolute top-[25%] right-[15%] w-12 h-12 bg-surface-dark rounded-xl border border-border-dark flex items-center justify-center z-20 animate-pulse" style={{ animationDelay: '1s' }}>
        {isCloud ? <Shield size={20} className="text-text-muted" /> : <Monitor size={20} className="text-text-muted" />}
      </div>
      <div className="absolute bottom-[20%] left-[30%] w-12 h-12 bg-surface-dark rounded-xl border border-border-dark flex items-center justify-center z-20 animate-pulse" style={{ animationDelay: '2s' }}>
        {isAutomation ? <Zap size={20} className="text-text-muted" /> : <GitBranch size={20} className="text-text-muted" />}
      </div>

      {/* SVG Connecting Paths */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ opacity: 0.15 }}>
        <path d="M 100,100 C 150,150 180,180 200,200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand-accent" />
        <path d="M 300,120 C 260,160 220,180 200,200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand-accent" />
        <path d="M 150,300 C 180,260 190,220 200,200" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand-accent" />
      </svg>
      
      {/* Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-accent/20 rounded-full animate-[spin_30s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-brand/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
    </div>
  )
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  // Schema for rich snippets
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Corelane Systems',
      url: 'https://corelanesystems.com'
    },
    description: service.description,
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://corelanesystems.com/services/${service.slug}`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
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
                <Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link>
                <span>/</span>
                <span className="text-text-inverse font-medium">{service.shortTitle}</span>
              </div>

              <div className="inline-flex items-center gap-2 text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">
                <service.icon size={16} />
                <span>{service.shortTitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse mb-6 text-balance leading-tight">
                {service.h1}
              </h1>
              
              <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-xl">
                {service.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  onClick={() => trackEvent('cta_start_project', { source: 'service_hero', service: service.slug })}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg w-full sm:w-auto"
                >
                  <Button size="lg" className="w-full bg-brand hover:bg-brand-hover text-white border-transparent">
                    Start a Project
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                
                <a 
                  href={CONTACT.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('cta_whatsapp', { source: 'service_hero', service: service.slug })}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg w-full sm:w-auto"
                >
                  <Button variant="dark" size="lg" className="w-full border-border-dark hover:bg-surface-dark-muted">
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <ServiceVisual slug={service.slug} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Business Challenge */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">The Business Challenge</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.businessProblem}
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {service.problems.map((prob, i) => (
                  <div key={i} className="bg-surface p-5 rounded-xl border border-border flex gap-4">
                    <AlertCircle className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-bold text-text-primary mb-1 text-sm">{prob.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{prob.description}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                eyebrow="Deliverables"
                title="What We Build"
                subtitle={service.solution}
                className="mb-8"
              />
              <ul className="space-y-4">
                {service.whatWeProvide.map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary font-medium">
                    <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-surface-alt p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-text-primary mb-6">Core Capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <Badge key={i} variant="brand" className="bg-surface border-border text-text-secondary hover:text-brand hover:border-brand/30 py-1.5 px-3">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Process */}
      <Section variant="alt" className="border-y border-border">
        <Container>
          <SectionHeader
            eyebrow="Execution"
            title="How We Work"
            subtitle={`Our disciplined engineering process for delivering ${service.title.toLowerCase()}.`}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {service.process.map((step, i) => (
              <div key={i} className="bg-surface p-6 rounded-xl border border-border shadow-sm">
                <div className="text-brand font-mono font-bold mb-3 bg-brand-light w-10 h-10 flex items-center justify-center rounded-lg">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Technology Stack */}
      <Section variant="dark" className="bg-surface-dark border-b border-border-dark py-20">
        <Container className="text-center max-w-4xl">
          <Code size={40} className="text-brand-accent mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-text-inverse mb-8">Technology Capabilities</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-surface-dark-muted rounded-lg text-sm font-medium border border-border-dark text-text-muted hover:border-brand-accent hover:text-text-inverse transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Who It's For (Industries) & 7. Related */}
      <Section variant="default">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Industries */}
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">Common Applications</h3>
              <p className="text-text-secondary mb-6">
                We frequently implement {service.title.toLowerCase()} solutions for the following operational environments:
              </p>
              <div className="space-y-3">
                {service.whoItsFor.map((item, i) => (
                  <div key={i} className="flex gap-3 bg-surface-alt p-4 rounded-lg border border-border items-center">
                    <div className="w-2 h-2 rounded-full bg-brand" />
                    <span className="font-medium text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            {service.relatedServices && service.relatedServices.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-6">Related Services</h3>
                <div className="grid gap-3">
                  {service.relatedServices.map((rel, i) => (
                    <Link key={i} to={`/services/${rel.slug}`} className="group">
                      <div className="bg-surface border border-border px-5 py-4 rounded-lg flex items-center justify-between group-hover:border-brand transition-colors shadow-sm">
                        <span className="font-semibold text-text-secondary group-hover:text-brand">{rel.title}</span>
                        <ArrowRight size={18} className="text-text-muted group-hover:text-brand" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </Container>
      </Section>

      {/* 8. FAQ */}
      {service.faq && service.faq.length > 0 && (
        <Section variant="alt" className="border-t border-border">
          <Container className="max-w-3xl">
            <SectionHeader title="Common Questions" align="center" />
            <div className="space-y-4 mt-8">
              {service.faq.map((faq, index) => {
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

      {/* 9. Final CTA */}
      <CTASection 
        title={`Ready to discuss ${service.shortTitle}?`}
        subtitle="Let's align on your business goals and technical requirements."
      />
    </>
  )
}
