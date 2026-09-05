import { Link } from 'react-router-dom'
import { ArrowRight, Server, Database, Code2, Terminal, CheckCircle2, CloudCog, Shield, Monitor } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import type { CaseStudy } from '@/data/caseStudies'

interface CaseStudyDetailPageProps {
  caseStudy: CaseStudy
}

export default function CaseStudyDetailPage({ caseStudy }: CaseStudyDetailPageProps) {
  return (
    <>
      <Helmet>
        <title>{caseStudy.metaTitle}</title>
        <meta name="description" content={caseStudy.metaDescription} />
        <link rel="canonical" href={`https://corelanesystems.com/case-studies/${caseStudy.slug}`} />
      </Helmet>

      {/* 1. Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-text-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-text-inverse font-medium">{caseStudy.shortTitle}</span>
          </div>

          <Badge variant="dark" className="mb-6 tracking-widest uppercase bg-brand-light/10 text-brand-accent border-brand/30">
            {caseStudy.projectType}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse mb-6 text-balance leading-tight">
            {caseStudy.title}
          </h1>
          
          <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-3xl mx-auto">
            {caseStudy.shortDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="px-4 py-2 rounded-lg bg-surface-dark-muted border border-border-dark text-sm text-text-muted">
              <span className="text-text-inverse font-semibold block mb-1">Domain</span>
              {caseStudy.industry}
            </div>
            <div className="px-4 py-2 rounded-lg bg-surface-dark-muted border border-border-dark text-sm text-text-muted">
              <span className="text-text-inverse font-semibold block mb-1">Primary Tech</span>
              {caseStudy.architecture.frontend?.[0] || caseStudy.architecture.cloud?.[0] || caseStudy.architecture.backend?.[0]}
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Challenge & Solution Overview */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeader
                align="left"
                eyebrow="The Challenge"
                title="Engineering Context"
                className="mb-6"
              />
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="bg-surface-alt p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-text-primary mb-4">Implementation Approach</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {caseStudy.solution}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-border">
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-4">Core Capabilities Applied</h4>
                {caseStudy.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                    <CheckCircle2 size={16} className="text-brand shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Technology Architecture Visuals */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Technical Architecture"
            subtitle="Conceptual overview of the system design and data flow."
            align="center"
          />
          
          <div className="mt-12 max-w-4xl mx-auto bg-surface border border-border rounded-2xl p-8 lg:p-16 shadow-sm overflow-x-auto">
            <div className="min-w-[600px] flex flex-col items-center">
              
              <div className="px-6 py-3 bg-surface-alt border border-border rounded-lg text-sm font-bold text-text-secondary flex items-center gap-2">
                <Monitor size={16} /> Client / Source
              </div>
              
              <div className="h-10 w-px bg-brand relative">
                <div className="absolute inset-0 bg-brand-light animate-[pulse_2s_infinite]" />
              </div>
              
              <div className="flex gap-8 w-full justify-center">
                <div className="flex-1 max-w-[200px] px-6 py-4 bg-surface border-2 border-brand/20 rounded-xl text-center shadow-sm relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface px-2 text-[10px] font-bold tracking-wider text-brand uppercase">Layer 1</div>
                  <Code2 size={24} className="mx-auto mb-2 text-text-primary" />
                  <div className="text-sm font-bold text-text-primary">
                    {caseStudy.architecture.frontend?.[0] || 'Ingestion / Webhook'}
                  </div>
                </div>
                
                <div className="flex-1 max-w-[200px] px-6 py-4 bg-surface border-2 border-brand/20 rounded-xl text-center shadow-sm relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface px-2 text-[10px] font-bold tracking-wider text-brand uppercase">Layer 2</div>
                  <Server size={24} className="mx-auto mb-2 text-text-primary" />
                  <div className="text-sm font-bold text-text-primary">
                    {caseStudy.architecture.backend?.[0] || caseStudy.architecture.cloud?.[0] || 'Compute / API'}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-8 w-full justify-center mt-4">
                <div className="h-10 w-px bg-brand/50 relative" />
                <div className="h-10 w-px bg-brand/50 relative" />
              </div>

              <div className="w-full max-w-[432px] h-px bg-brand/50" />
              <div className="h-6 w-px bg-brand/50" />

              <div className="px-8 py-5 bg-surface-dark text-text-inverse rounded-xl text-center shadow-md border border-border-dark flex items-center justify-center gap-3">
                <Database size={24} className="text-brand-accent" />
                <div className="text-sm font-bold">
                  {caseStudy.architecture.database?.[0] || caseStudy.architecture.cloud?.[1] || 'Data Persistence'}
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Technology Stack List */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Technology Stack"
            subtitle="The specific tools and frameworks utilized in this implementation."
            align="center"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {Object.entries(caseStudy.architecture).map(([category, techs]) => {
              if (!techs || techs.length === 0) return null;
              
              let Icon = Terminal;
              if (category === 'frontend') Icon = Monitor;
              if (category === 'backend') Icon = Server;
              if (category === 'database') Icon = Database;
              if (category === 'cloud') Icon = CloudCog;
              if (category === 'devops') Icon = Shield;

              return (
                <div key={category} className="bg-surface-alt p-6 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-4 text-brand">
                    <Icon size={20} />
                    <h4 className="font-bold uppercase tracking-wider text-xs">{category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {techs.map((tech, i) => (
                      <li key={i} className="text-sm font-medium text-text-secondary">{tech}</li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* 5. Results & Current State */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Implementation State"
              subtitle="The verified technical results of the engineering phase."
              align="center"
            />
            <div className="mt-10 space-y-4">
              {caseStudy.outcomes.map((outcome, i) => (
                <div key={i} className="bg-surface p-6 rounded-xl border border-border shadow-sm flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-brand" />
                  </div>
                  <p className="font-medium text-text-primary leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Context (Cross Linking) */}
      <Section variant="default">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-6">Related Services</h3>
              <div className="space-y-3">
                {caseStudy.relatedServices.map((rel, i) => (
                  <Link key={i} to={`/services/${rel.slug}`} className="group flex items-center justify-between p-4 bg-surface-alt rounded-xl border border-transparent hover:border-brand transition-colors">
                    <span className="text-sm font-medium text-text-secondary group-hover:text-brand">{rel.title}</span>
                    <ArrowRight size={14} className="text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-6">Related Solutions</h3>
              <div className="space-y-3">
                {caseStudy.relatedSolutions.map((rel, i) => (
                  <Link key={i} to={`/solutions/${rel.slug}`} className="group flex items-center justify-between p-4 bg-surface-alt rounded-xl border border-transparent hover:border-brand transition-colors">
                    <span className="text-sm font-medium text-text-secondary group-hover:text-brand">{rel.title}</span>
                    <ArrowRight size={14} className="text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-6">Related Industries</h3>
              <div className="space-y-3">
                {caseStudy.relatedIndustries.map((rel, i) => (
                  <Link key={i} to={`/industries/${rel.slug}`} className="group flex items-center justify-between p-4 bg-surface-alt rounded-xl border border-transparent hover:border-brand transition-colors">
                    <span className="text-sm font-medium text-text-secondary group-hover:text-brand">{rel.title}</span>
                    <ArrowRight size={14} className="text-text-muted group-hover:text-brand transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      <CTASection 
        title="Have a similar project in mind?"
        subtitle="Let's discuss your technical requirements and see if our engineering capabilities align."
      />
    </>
  )
}
