import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Search, Map, Code2, ShieldCheck, Rocket, 
  FileText, TrendingUp, Terminal, GitBranch, CloudCog, CheckCircle2, Lightbulb 
} from 'lucide-react'

import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/utils/analytics'

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description: 'We begin by understanding the operational context before writing a single line of code.',
    details: ['Business objective alignment', 'Current system audits', 'User workflow analysis', 'Technical constraints mapping', 'Initial scope definition']
  },
  {
    number: '02',
    title: 'Planning & Architecture',
    icon: Map,
    description: 'We define the technical blueprint to ensure the system is scalable, secure, and maintainable.',
    details: ['Application architecture design', 'Database schema planning', 'API architecture', 'Infrastructure selection', 'Security considerations']
  },
  {
    number: '03',
    title: 'Design & Development',
    icon: Code2,
    description: 'Implementation occurs in structured, iterative cycles emphasizing clean, modular code.',
    details: ['Frontend/Backend development', 'API development', 'Database integration', 'Iterative progress reviews', 'Version control via Git']
  },
  {
    number: '04',
    title: 'Testing & Validation',
    icon: ShieldCheck,
    description: 'Rigorous validation ensures the system behaves correctly under expected and unexpected conditions.',
    details: ['Functional testing', 'API endpoint validation', 'Security basics check', 'Responsive testing', 'Error handling verification']
  },
  {
    number: '05',
    title: 'Deployment',
    icon: Rocket,
    description: 'We package the solution and deploy it securely to the target infrastructure.',
    details: ['CI/CD pipeline configuration', 'Containerization (Docker)', 'Cloud infrastructure setup', 'Production rollout', 'Initial monitoring']
  },
  {
    number: '06',
    title: 'Handover & Documentation',
    icon: FileText,
    description: 'We transfer knowledge and assets cleanly to ensure long-term operational success.',
    details: ['Source code delivery', 'Deployment configuration', 'Technical documentation', 'API documentation', 'Operational notes']
  },
  {
    number: '07',
    title: 'Improvement',
    description: 'Where ongoing support is required, we actively maintain and optimize the system.',
    icon: TrendingUp,
    details: ['Bug fixes & patching', 'Performance optimization', 'New feature iterations', 'Infrastructure scaling', 'Continuous monitoring']
  }
]

export default function Process() {
  return (
    <>
      <Helmet>
        <title>Engineering Process | Corelane Systems</title>
        <meta name="description" content="Discover how Corelane Systems takes a business requirement and turns it into a reliable, working software solution through structured engineering." />
        <link rel="canonical" href="https://corelanesystem.com/process" />
      </Helmet>

      {/* 1. Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-inverse font-medium">Process</span>
          </div>

          <Badge variant="dark" className="mb-6 tracking-widest uppercase bg-brand-light/10 text-brand-accent border-brand/30">
            Engineering Workflow
          </Badge>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
            From business requirements to reliable technology.
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-3xl">
            We follow a structured engineering process to understand requirements, design the technical solution, build it, validate it, and prepare it for deployment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: 'process_hero' })}>
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

      {/* 2. Process Flexibility */}
      <Section variant="default" className="border-b border-border py-12">
        <Container>
          <div className="bg-surface-alt border border-border p-6 rounded-xl text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-sm font-medium text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Process Flexibility:</strong> Every project follows the same core engineering principles, while the exact workflow adapts to the scope, complexity, and specific technical requirements of the business.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3. The 7 Steps */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Project Lifecycle"
            subtitle="How we structure engagements for maximum technical and business clarity."
            align="left"
            className="mb-16"
          />

          <div className="space-y-16">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 lg:gap-16">
                
                {/* Step Info */}
                <div className="md:w-1/3 shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                      <step.icon size={24} className="text-brand" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-1">Step {step.number}</span>
                      <h3 className="text-2xl font-bold text-text-primary leading-none">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Step Deliverables / Details */}
                <div className="md:w-2/3">
                  <div className="bg-surface-alt rounded-2xl p-6 lg:p-8 border border-border h-full flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-6">Key Activities & Deliverables</h4>
                    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-text-secondary">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

            </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Technical Workflow Visual */}
      <Section variant="dark" className="border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 pointer-events-none" />
        <Container className="relative z-10">
          <SectionHeader
            title="Technical Workflow"
            subtitle="The typical progression of code from conception to production."
            align="center"
            className="mb-16 text-text-inverse"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
              
              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand/30 -translate-y-1/2 z-0" />
              
              <div className="relative z-10 flex flex-col items-center bg-surface-dark p-4 rounded-xl border border-border-dark shadow-md w-full md:w-32">
                <FileText size={24} className="text-text-muted mb-2" />
                <span className="text-xs font-bold text-text-inverse uppercase tracking-wider text-center">Requirements</span>
              </div>
              
              <div className="md:hidden w-px h-6 bg-brand/30" />
              <ArrowRight size={16} className="hidden md:block text-brand relative z-10 bg-surface-dark" />
              
              <div className="relative z-10 flex flex-col items-center bg-surface-dark p-4 rounded-xl border border-border-dark shadow-md w-full md:w-32">
                <Map size={24} className="text-brand-accent mb-2" />
                <span className="text-xs font-bold text-text-inverse uppercase tracking-wider text-center">Architecture</span>
              </div>

              <div className="md:hidden w-px h-6 bg-brand/30" />
              <ArrowRight size={16} className="hidden md:block text-brand relative z-10 bg-surface-dark" />

              <div className="relative z-10 flex flex-col items-center bg-surface-dark p-4 rounded-xl border border-brand/50 shadow-md w-full md:w-32 ring-2 ring-brand/20">
                <Code2 size={24} className="text-brand mb-2" />
                <span className="text-xs font-bold text-text-inverse uppercase tracking-wider text-center">Development</span>
              </div>

              <div className="md:hidden w-px h-6 bg-brand/30" />
              <ArrowRight size={16} className="hidden md:block text-brand relative z-10 bg-surface-dark" />

              <div className="relative z-10 flex flex-col items-center bg-surface-dark p-4 rounded-xl border border-border-dark shadow-md w-full md:w-32">
                <GitBranch size={24} className="text-brand-light mb-2" />
                <span className="text-xs font-bold text-text-inverse uppercase tracking-wider text-center">CI / CD</span>
              </div>

              <div className="md:hidden w-px h-6 bg-brand/30" />
              <ArrowRight size={16} className="hidden md:block text-brand relative z-10 bg-surface-dark" />

              <div className="relative z-10 flex flex-col items-center bg-surface-dark p-4 rounded-xl border border-border-dark shadow-md w-full md:w-32">
                <CloudCog size={24} className="text-brand-accent mb-2" />
                <span className="text-xs font-bold text-text-inverse uppercase tracking-wider text-center">Deployment</span>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Communication & Expectations */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
              <SectionHeader align="left" title="Communication & Transparency" className="mb-8" />
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Trust is built through technical transparency and consistent communication, not empty promises.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Terminal size={18} className="text-brand" /> Clear Requirements
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">We align heavily on exactly what needs to be built before coding begins to prevent scope creep.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Terminal size={18} className="text-brand" /> Technical Transparency
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">We explain the 'why' behind important technical and architectural decisions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <Terminal size={18} className="text-brand" /> Issue Visibility
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">If technical blockers or risks arise, we surface them immediately alongside proposed solutions.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-8 lg:p-12 shadow-sm h-fit">
              <h3 className="text-2xl font-bold text-text-primary mb-6">What You Can Expect</h3>
              <ul className="space-y-4">
                {[
                  'Clear definition of project scope',
                  'Rigorous technical planning',
                  'Structured and iterative development',
                  'Functional and security testing basics',
                  'Deployment guidance and handover',
                  'Predictable, async-friendly communication',
                  'Source code documentation (where applicable)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-3">What we DO NOT do:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] bg-red-50 text-red-700 px-2 py-1 rounded border border-red-100 font-bold">Fake Guarantees</span>
                  <span className="text-[10px] bg-red-50 text-red-700 px-2 py-1 rounded border border-red-100 font-bold">100% Uptime Promises</span>
                  <span className="text-[10px] bg-red-50 text-red-700 px-2 py-1 rounded border border-red-100 font-bold">Unlimited Revisions</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 6. Ecosystem Links */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            <Link to="/services" className="group bg-surface-alt p-8 rounded-2xl border border-border hover:border-brand transition-colors text-center">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Code2 size={20} className="text-brand" />
              </div>
              <h3 className="font-bold text-text-primary mb-2">Our Services</h3>
              <p className="text-sm text-text-secondary">Explore our specific engineering capabilities.</p>
            </Link>

            <Link to="/solutions" className="group bg-surface-alt p-8 rounded-2xl border border-border hover:border-brand transition-colors text-center">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Lightbulb size={20} className="text-brand" />
              </div>
              <h3 className="font-bold text-text-primary mb-2">Business Solutions</h3>
              <p className="text-sm text-text-secondary">See how we solve business-level problems.</p>
            </Link>

            <Link to="/case-studies" className="group bg-surface-alt p-8 rounded-2xl border border-border hover:border-brand transition-colors text-center">
              <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <FileText size={20} className="text-brand" />
              </div>
              <h3 className="font-bold text-text-primary mb-2">Case Studies</h3>
              <p className="text-sm text-text-secondary">View our engineering portfolio and implementations.</p>
            </Link>

          </div>
        </Container>
      </Section>

      {/* 7. FAQ */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Common Questions"
            subtitle="Details on how we collaborate with clients."
            align="center"
          />
          
          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {[
              { q: 'How does a project officially start?', a: 'Once the scope and proposal are approved, we schedule an architecture kickoff to finalize technical direction before any development begins.' },
              { q: 'Can you work with our existing development team?', a: 'Yes. We often act as extended engineering capacity, integrating into your existing Git workflows and agile sprints.' },
              { q: 'Do you handle the final production deployment?', a: 'Yes, we configure the cloud infrastructure and CI/CD pipelines to ensure the solution is deployed securely.' },
              { q: 'How does project scope change work?', a: 'We use a formal change request process. If requirements change mid-development, we transparently assess the impact on timeline and architecture before proceeding.' }
            ].map((faq, i) => (
              <div key={i} className="bg-surface p-6 rounded-xl border border-border shadow-sm">
                <h4 className="font-bold text-text-primary mb-2 text-sm">{faq.q}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Ready to build?"
        subtitle="Let's align on your requirements and define the right technical approach."
      />
    </>
  )
}
