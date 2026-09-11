import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, MessageCircle, BarChart3, Users, Calendar, PenTool, Search, Zap, Repeat, Target, Eye } from 'lucide-react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import { getServiceBySlug } from '@/data/services'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import Reveal from '@/components/animations/Reveal'
import Parallax from '@/components/animations/Parallax'
import { trackEvent } from '@/utils/analytics'
import { CONTACT, cn } from '@/utils/cn'
import { organizationSchema, breadcrumbSchema } from '@/components/seo/SEO'

gsap.registerPlugin(ScrollTrigger)

export default function SocialMediaManagement() {
  const service = getServiceBySlug('social-media-management')!
  const contentEngineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ctx = gsap.context(() => {
      // Content Engine sequential lighting
      const steps = gsap.utils.toArray<HTMLElement>('.workflow-step')
      
      steps.forEach((step, i) => {
        gsap.fromTo(step, 
          { opacity: 0.2, scale: 0.95 },
          { 
            opacity: 1, 
            scale: 1,
            scrollTrigger: {
              trigger: step,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: true,
            }
          }
        )
      })
    }, contentEngineRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://corelanesystems.com/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([{ name: 'Services', url: '/services' }, { name: service.title, url: `/services/${service.slug}` }]))}
        </script>
      </Helmet>

      {/* 1. HERO */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <Parallax speed={0.4} className="w-full h-[120%] -mt-[10%]">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
          </Parallax>
        </div>
        
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center gap-2 text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">
              <service.icon size={16} />
              <span>Service Capability</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
              {service.h1}
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              From strategy and content to publishing, engagement, and analytics, Corelane helps businesses build a consistent and measurable social media presence.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                onClick={() => trackEvent('cta_start_project', { source: 'smm_hero' })}
                className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              >
                <Button size="lg" className="w-full bg-brand hover:bg-brand-hover text-white">
                  Start a Project
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a 
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('cta_whatsapp', { source: 'smm_hero' })}
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="secondary" className="w-full bg-surface-dark-muted text-text-inverse hover:text-brand-accent border-border-dark">
                  Talk to Our Team
                </Button>
              </a>
            </div>
          </Reveal>

          {/* Technical Visual */}
          <Reveal delay={0.6}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-mono text-text-muted">
              <span className="px-3 py-1 border border-border-dark rounded-md bg-surface-dark-muted">Content</span>
              <ArrowRight size={14} className="text-brand-accent opacity-50" />
              <span className="px-3 py-1 border border-border-dark rounded-md bg-surface-dark-muted">Publishing</span>
              <ArrowRight size={14} className="text-brand-accent opacity-50" />
              <span className="px-3 py-1 border border-border-dark rounded-md bg-surface-dark-muted">Engagement</span>
              <ArrowRight size={14} className="text-brand-accent opacity-50" />
              <span className="px-3 py-1 border border-border-dark rounded-md bg-brand-light text-brand border-brand/20">Analytics</span>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 2. THE SOCIAL MEDIA CHALLENGE */}
      <Section variant="alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <SectionHeader
                  align="left"
                  eyebrow="The Challenge"
                  title="Social media is a system. Most treat it like a chore."
                  subtitle="Growing businesses eventually hit a ceiling when their social channels operate independently without a unified timeline or strategy."
                  className="mb-8"
                />
              </Reveal>
              
              <div className="space-y-4">
                {service.problems.map((prob, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-4 bg-surface p-4 rounded-xl border border-border shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-1">
                        <Zap size={16} />
                      </div>
                      <div>
                        <span className="font-semibold text-text-primary block mb-1">{prob.title}</span>
                        <span className="text-sm text-text-secondary">{prob.description}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.3}>
              <div className="bg-surface-dark rounded-2xl p-8 border border-border-dark shadow-elevated">
                <h3 className="text-xl font-bold text-text-inverse mb-6">The System Approach</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-brand-accent shrink-0" />
                    <div>
                      <h4 className="text-text-inverse font-bold mb-1">Structured Calendar</h4>
                      <p className="text-text-muted text-sm">Monthly planning, organization, and platform-specific publishing logic.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-brand-accent shrink-0" />
                    <div>
                      <h4 className="text-text-inverse font-bold mb-1">Measurable Results</h4>
                      <p className="text-text-muted text-sm">Track performance and turn social attention into tangible business value.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3. OUR APPROACH / WHAT WE MANAGE */}
      <Section variant="default">
        <Container>
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Capabilities"
              title="What We Manage"
              subtitle="A complete, end-to-end operational structure for your social presence."
            />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Search, title: 'Strategy', desc: 'Audience research, positioning, and content pillars.' },
              { icon: PenTool, title: 'Content', desc: 'Educational, promotional, and thought leadership.' },
              { icon: Calendar, title: 'Calendar', desc: 'Monthly planning and campaign organization.' },
              { icon: Zap, title: 'Publishing', desc: 'Scheduled content and platform-specific workflows.' },
              { icon: Users, title: 'Community', desc: 'Comment monitoring and audience engagement.' },
              { icon: BarChart3, title: 'Analytics', desc: 'Reach, engagement, and website click tracking.' },
              { icon: Target, title: 'Optimization', desc: 'Using analytics to guide future content decisions.' },
              { icon: Eye, title: 'Social Listening', desc: 'Brand mentions, trends, and audience signals.' }
            ].map((capability, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-surface-alt p-6 rounded-xl border border-border h-full hover:border-brand transition-colors group">
                  <capability.icon size={24} className="text-brand mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-text-primary mb-2">{capability.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{capability.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. CONTENT ENGINE WORKFLOW */}
      <Section variant="dark" className="bg-surface-dark border-y border-border-dark">
        <Container>
          <div ref={contentEngineRef}>
            <Reveal>
              <SectionHeader
                align="left"
                eyebrow="The Pipeline"
                title="The Content Engine"
                subtitle="We run your social media like a deployment pipeline. Predictable, structured, and continuous."
                className="mb-12 dark-mode-header"
              />
            </Reveal>

            <div className="max-w-4xl border-l-2 border-border-dark pl-8 ml-4 space-y-12 relative">
              {[
                { phase: 'Research & Ideas', desc: 'Audience signals and industry trends feed the engine.' },
                { phase: 'Content Draft', desc: 'Educational and promotional posts are developed.' },
                { phase: 'Review & Approval', desc: 'Client oversight ensures brand alignment.' },
                { phase: 'Schedule & Publish', desc: 'Automated distribution across target platforms.' },
                { phase: 'Analyze & Improve', desc: 'Data-driven feedback loop for the next cycle.' }
              ].map((step, i) => (
                <div key={i} className="workflow-step relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-surface-dark bg-brand-accent shadow-[0_0_15px_rgba(20,184,166,0.5)]" />
                  <h3 className="text-xl font-bold text-text-inverse mb-2">Phase 0{i + 1}: {step.phase}</h3>
                  <p className="text-text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. PLATFORMS & AI WORKFLOW */}
      <Section variant="alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Platform Strategy */}
            <div>
              <Reveal>
                <h2 className="text-2xl font-bold text-text-primary mb-6">Platform Strategy</h2>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  We deploy content natively to the platforms where your target audience operates.
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((platform, i) => (
                    <span key={i} className="px-4 py-2 bg-surface rounded-lg text-sm font-semibold border border-border text-text-primary shadow-sm">
                      {platform}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* AI Workflow */}
            <div>
              <Reveal delay={0.2}>
                <div className="bg-surface p-8 rounded-2xl border border-brand/20 shadow-elevated relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-full -z-10 opacity-50" />
                  <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
                    <Zap size={24} className="text-brand" />
                    AI-Powered Workflows
                  </h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    We use AI-assisted workflows for rapid topic research, content variations, and performance analysis. 
                    <strong> This is an accelerator, not an autopilot.</strong> Every post receives human oversight, strategic review, and your final approval.
                  </p>
                  <ul className="space-y-2 text-sm font-medium text-text-primary">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Accelerated content ideation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Intelligent repurposing</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand" /> Sentiment & trend analysis</li>
                  </ul>
                </div>
              </Reveal>
            </div>

          </div>
        </Container>
      </Section>

      {/* 6. ANALYTICS VISUAL */}
      <Section variant="default" className="border-b border-border overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Measurable Value"
              title="Analytics & Optimization"
              subtitle="Social media must generate business value. We track the metrics that indicate growth and brand awareness."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-5xl mx-auto mt-12 bg-surface-dark rounded-2xl border border-border-dark p-6 shadow-elevated relative">
              <div className="flex items-center gap-2 mb-8 border-b border-border-dark pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs font-mono text-text-muted">social_metrics_dashboard.ui</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Total Reach', value: 'Audience Size' },
                  { label: 'Engagement Rate', value: 'Interactions' },
                  { label: 'Website Clicks', value: 'Traffic Gen' },
                  { label: 'Follower Growth', value: 'Brand Trust' },
                ].map((metric, i) => (
                  <div key={i} className="bg-surface-dark-muted p-4 rounded-lg border border-border-dark">
                    <span className="block text-text-muted text-xs font-mono mb-2 uppercase">{metric.label}</span>
                    <span className="block text-text-inverse font-bold">{metric.value}</span>
                  </div>
                ))}
              </div>
              
              {/* Illustrative Chart Bar */}
              <div className="mt-8 pt-8 border-t border-border-dark">
                <span className="block text-text-muted text-xs font-mono mb-4 uppercase">Campaign Performance (Illustrative)</span>
                <div className="h-4 w-full bg-surface-dark-muted rounded-full overflow-hidden flex">
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '65%' }} 
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full bg-brand" 
                  />
                  <motion.div 
                    initial={{ width: 0 }} 
                    whileInView={{ width: '20%' }} 
                    transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full bg-brand-accent" 
                  />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-text-muted mt-4">
              *Dashboard is illustrative. We provide detailed monthly reporting based on your actual account data.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 7. IDEAL BUSINESSES */}
      <Section variant="alt">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">Engineered For Growing Businesses</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {service.whoItsFor.map((industry, i) => {
              const slug = industry.toLowerCase().replace(' ', '-').replace('/', '-')
              // Link to existing industry pages if they exist
              const hasIndustryPage = ['startups', 'smes', 'ecommerce', 'professional-services', 'real-estate'].some(p => slug.includes(p))
              
              return (
                <Reveal key={i} delay={i * 0.05}>
                  {hasIndustryPage ? (
                    <Link to={`/industries/${hasIndustryPage ? slug.split(' ')[0] : slug}`}>
                      <span className="px-5 py-3 bg-surface rounded-full text-sm font-semibold border border-border text-text-secondary shadow-sm hover:border-brand hover:text-brand transition-colors block">
                        {industry}
                      </span>
                    </Link>
                  ) : (
                    <span className="px-5 py-3 bg-surface rounded-full text-sm font-semibold border border-border text-text-secondary shadow-sm block">
                      {industry}
                    </span>
                  )}
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* 8. CTA */}
      <CTASection 
        title="Ready to systemize your social presence?"
        subtitle="Let's build a content strategy that drives measurable business outcomes."
      />
    </>
  )
}
