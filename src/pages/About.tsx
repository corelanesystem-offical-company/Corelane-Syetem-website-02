import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, CloudCog, Shield, Database, Layout, Server, Settings, CheckCircle2, Terminal } from 'lucide-react'

import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/utils/analytics'
import { industries } from '@/data/industries'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Corelane Systems | Software & Cloud Engineering</title>
        <meta name="description" content="Corelane Systems is a modern software engineering and technology company. We build robust applications, cloud infrastructure, and data solutions for business." />
        <link rel="canonical" href="https://corelanesystems.com/about" />
      </Helmet>

      {/* 1. Company Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 max-w-4xl">
          <Badge variant="dark" className="mb-6 tracking-widest uppercase bg-brand-light/10 text-brand-accent border-brand/30">
            About Corelane Systems
          </Badge>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
            Engineering software and cloud solutions for modern businesses.
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-2xl">
            We are a technology partner for organizations that need serious software. We build scalable applications, robust infrastructure, and automated systems that solve complex operational problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: 'about_hero' })}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="dark" size="lg" className="w-full sm:w-auto border-border-dark">
                Explore Services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 2. Who We Are */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Company Overview"
                title="Technology with a Business Purpose"
                className="mb-6"
              />
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Corelane Systems builds software applications, cloud infrastructure, data solutions, and business automation systems that help organizations operate more effectively.
                </p>
                <p>
                  Technology should not be a bottleneck. We focus on engineering systems that are secure by design, scalable by default, and structured for long-term maintainability. We partner with companies globally to deliver technical excellence without the generic agency fluff.
                </p>
              </div>
            </div>
            
            <div className="relative bg-surface-alt border border-border rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code2, label: 'Software' },
                  { icon: CloudCog, label: 'Cloud' },
                  { icon: Database, label: 'Data' },
                  { icon: Settings, label: 'DevOps' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-6 bg-surface rounded-xl border border-border shadow-sm text-center group hover:border-brand/30 transition-colors">
                    <item.icon size={32} className="text-brand mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-text-primary uppercase tracking-wider text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Engineering Philosophy */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Engineering Philosophy"
            subtitle="The core principles that guide how we approach technical problems."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { num: '01', title: 'Understand the Problem', desc: 'We do not write code until we fully understand the business requirements and the operational context.' },
              { num: '02', title: 'Design Before Implementation', desc: 'Architecture dictates success. We invest in system design to prevent technical debt and structural failures.' },
              { num: '03', title: 'Build for Maintainability', desc: 'Software lives for years. We prioritize clean code, comprehensive documentation, and logical structure.' },
              { num: '04', title: 'Automate Repetitive Work', desc: 'From CI/CD pipelines to business workflows, if it happens more than twice, we engineer an automated solution.' },
              { num: '05', title: 'Secure by Design', desc: 'Security is not an afterthought. It is integrated into our architecture, deployment, and data handling from day one.' },
              { num: '06', title: 'Measure and Improve', desc: 'We rely on analytics, logging, and monitoring to validate performance and drive continuous optimization.' }
            ].map((principle, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl border border-border shadow-sm hover:border-brand/30 transition-colors">
                <span className="text-sm font-bold text-brand uppercase tracking-widest mb-4 block">Rule {principle.num}</span>
                <h3 className="text-xl font-bold text-text-primary mb-3">{principle.title}</h3>
                <p className="text-text-secondary leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Technical Capabilities (Visual) */}
      <Section variant="dark" className="border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/10 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeader
            title="Technical Capabilities"
            subtitle="Our engineering domains and the architectural layers we specialize in."
            align="center"
            className="mb-16"
          />
          
          <div className="grid lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Applications */}
            <div className="bg-surface-dark-muted border border-border-dark rounded-2xl p-8 flex flex-col items-center text-center">
              <Layout size={32} className="text-brand-accent mb-6" />
              <h3 className="text-lg font-bold text-text-inverse mb-6 uppercase tracking-wider">Applications</h3>
              <div className="w-full space-y-2">
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Frontend Interfaces</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">API Gateways</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Backend Logic</div>
              </div>
            </div>

            {/* Cloud */}
            <div className="bg-surface-dark-muted border border-border-dark rounded-2xl p-8 flex flex-col items-center text-center">
              <CloudCog size={32} className="text-brand-accent mb-6" />
              <h3 className="text-lg font-bold text-text-inverse mb-6 uppercase tracking-wider">Cloud</h3>
              <div className="w-full space-y-2">
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Infrastructure as Code</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Scalable Compute</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Managed Storage</div>
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-surface-dark-muted border border-border-dark rounded-2xl p-8 flex flex-col items-center text-center">
              <Terminal size={32} className="text-brand-accent mb-6" />
              <h3 className="text-lg font-bold text-text-inverse mb-6 uppercase tracking-wider">DevOps</h3>
              <div className="w-full space-y-2">
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Source Control</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">CI / CD Pipelines</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Containerization</div>
              </div>
            </div>

            {/* Data */}
            <div className="bg-surface-dark-muted border border-border-dark rounded-2xl p-8 flex flex-col items-center text-center">
              <Database size={32} className="text-brand-accent mb-6" />
              <h3 className="text-lg font-bold text-text-inverse mb-6 uppercase tracking-wider">Data</h3>
              <div className="w-full space-y-2">
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Data Ingestion</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">ETL Processing</div>
                <div className="h-4 w-px bg-brand/30 mx-auto" />
                <div className="px-4 py-2 bg-surface-dark border border-border-dark rounded text-sm text-text-muted font-medium">Central Warehousing</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. How We Work & Why Corelane */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* How We Work */}
            <div>
              <SectionHeader align="left" title="How We Work" className="mb-8" />
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Discovery & Architecture', desc: 'We align on business goals and define the technical blueprint before coding begins.' },
                  { step: '02', title: 'Iterative Development', desc: 'We build in structured sprints, providing transparency and regular progress demonstrations.' },
                  { step: '03', title: 'Quality Assurance', desc: 'Rigorous testing ensures the system performs reliably under real-world conditions.' },
                  { step: '04', title: 'Deployment & Support', desc: 'We handle the production rollout and provide ongoing maintenance to ensure stability.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-sm font-mono font-bold text-brand mt-1">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
                
                <div className="pt-4">
                  <Link to="/process" className="text-brand font-bold text-sm inline-flex items-center gap-1 group">
                    View our complete process
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Why Corelane */}
            <div className="bg-surface-alt p-8 lg:p-12 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Why Corelane Systems</h3>
              <p className="text-text-secondary mb-8">
                We bridge the gap between business objectives and technical execution. Our teams don't just write code; we engineer solutions that generate operational leverage.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Engineering-first mindset focused on quality',
                  'Business-aligned technical strategy',
                  'Modern, scalable, and secure technology stack',
                  'Transparent communication and predictable delivery',
                  'Cloud-native architecture experts',
                  'Maintainable systems without vendor lock-in'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                    <span className="text-text-secondary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </Container>
      </Section>

      {/* 6. Who We Serve */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Industries We Support"
            subtitle="We provide specialized engineering capabilities across multiple sectors."
            align="center"
          />
          
          <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-4xl mx-auto">
            {industries.map((ind) => (
              <Link 
                key={ind.slug} 
                to={`/industries/${ind.slug}`}
                className="px-6 py-3 bg-surface border border-border hover:border-brand hover:text-brand transition-colors rounded-full text-sm font-bold text-text-primary shadow-sm"
              >
                {ind.title}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Proof / Connection */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">See How We Build</h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              We believe our work speaks for itself. Explore our technical case studies and architectural implementations to see our engineering principles in action.
            </p>
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View Engineering Portfolio
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Have a technology problem you want to solve?"
        subtitle="Let's discuss your requirements and determine if our engineering capabilities are the right fit."
      />
    </>
  )
}
