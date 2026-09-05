import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Terminal, Server, Code2, Database } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import { caseStudies } from '@/data/caseStudies'
import CTASection from '@/components/sections/CTASection'
import Badge from '@/components/ui/Badge'
import { trackEvent } from '@/utils/analytics'
import Button from '@/components/ui/Button'

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>Engineering Case Studies | Corelane Systems</title>
        <meta name="description" content="Explore Corelane Systems' technical portfolio, demonstrating our capabilities in custom software, cloud architecture, and data engineering." />
        <link rel="canonical" href="https://corelanesystems.com/case-studies" />
      </Helmet>

      {/* Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Engineering Proof
          </p>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance animate-fade-up" style={{ animationDelay: '100ms' }}>
            Technical implementations & architectural case studies.
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            We demonstrate our capabilities through actual engineering projects, proof-of-concepts, and architectural deployments.
          </p>
        </Container>
      </Section>

      {/* Engineering Capabilities Map */}
      <Section variant="alt" className="border-b border-border py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-70">
            <div className="flex items-center gap-2 font-mono text-sm text-text-secondary"><Code2 size={16}/> Application Engineering</div>
            <div className="flex items-center gap-2 font-mono text-sm text-text-secondary"><Server size={16}/> Cloud Infrastructure</div>
            <div className="flex items-center gap-2 font-mono text-sm text-text-secondary"><Terminal size={16}/> DevOps / CI-CD</div>
            <div className="flex items-center gap-2 font-mono text-sm text-text-secondary"><Database size={16}/> Data Pipelines</div>
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section variant="default">
        <Container>
          <div className="bg-surface-alt border border-border text-text-secondary p-4 rounded-xl mb-12 text-center text-sm font-medium max-w-3xl mx-auto">
            These technical case studies represent internal engineering, proof-of-concepts, and portfolio projects demonstrating our architectural standards.
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-brand/50 hover:shadow-card transition-all duration-300 flex flex-col"
              >
                {/* Abstract Visual Header */}
                <div className="relative h-48 bg-surface-alt flex items-center justify-center border-b border-border overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand to-transparent" />
                  
                  {/* Decorative nodes */}
                  <div className="flex items-center gap-4 relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center shadow-sm">
                      <Code2 className="text-text-muted group-hover:text-brand transition-colors" />
                    </div>
                    <div className="h-px w-12 bg-border relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    </div>
                    <div className="w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center shadow-sm">
                      <Database className="text-text-muted group-hover:text-brand transition-colors" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <Badge variant="dark" className="text-[10px] tracking-wider uppercase font-bold bg-surface-dark/90 backdrop-blur-sm border-border-dark">
                      {cs.projectType}
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="text-[10px] font-bold text-brand uppercase tracking-wider mb-2">
                    {cs.industry}
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-brand transition-colors">
                    {cs.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                    {cs.shortDescription}
                  </p>
                  
                  <div className="pt-6 border-t border-border flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2 max-w-[60%]">
                      {cs.capabilities.slice(0, 2).map((cap, i) => (
                        <span key={i} className="text-[10px] bg-surface-alt px-2 py-1 rounded text-text-secondary font-medium">
                          {cap}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/case-studies/${cs.slug}`}
                      onClick={() => trackEvent('blog_cta_click', { project: cs.slug })} // Reusing analytics appropriately
                      className="text-sm font-bold text-brand flex items-center gap-1 group/link"
                    >
                      View Case Study
                      <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Have an engineering project in mind?" 
        subtitle="Let's discuss how our technical capabilities apply to your operational requirements."
      />
    </>
  )
}
