import { useParams, Navigate, Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown, MonitorSmartphone, Code2, Database, Cloud, Cog, Server } from 'lucide-react'

import { landingPages } from '@/data/landingPages'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import { trackEvent, setPendingLead, captureUTMs } from '@/utils/analytics'
import { SITE_URL } from '@/utils/cn'

export default function LandingPage() {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams] = useSearchParams()
  const config = landingPages.find(p => p.slug === slug)

  useEffect(() => {
    if (config) {
      captureUTMs(searchParams)
      const utm_source = searchParams.get('utm_source')
      const utm_medium = searchParams.get('utm_medium')
      const utm_campaign = searchParams.get('utm_campaign')
      
      trackEvent('landing_view', { 
        campaign: config.slug,
        utm_source,
        utm_medium,
        utm_campaign
      })
    }
  }, [config, searchParams])

  if (!config) {
    return <Navigate to="/404" replace />
  }

  const handleHeroCTA = () => {
    trackEvent('landing_hero_cta', { campaign: config.slug })
    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-surface min-h-screen font-sans text-text-primary selection:bg-brand/20">
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDescription} />
        {config.noIndex && <meta name="robots" content="noindex, nofollow" />}
        <link rel="canonical" href={`${SITE_URL}/landing/${config.slug}`} />
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:url" content={`${SITE_URL}/landing/${config.slug}`} />
      </Helmet>

      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
        <div className="max-w-content mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm">
            <img src="/logo.png" alt="Corelane Systems" className="h-8 md:h-10" />
            <span className="font-bold text-lg md:text-xl text-text-primary hidden sm:block">Corelane Systems</span>
          </Link>
          <Button variant="primary" size="sm" onClick={handleHeroCTA}>
            {config.hero.primaryCTA}
          </Button>
        </div>
      </header>

      <main>
        {/* A. Hero */}
        <Section variant="dark" className="pt-16 pb-20 md:pt-24 md:pb-32 bg-surface-dark border-b border-border-dark relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
          <Container className="relative z-10 max-w-4xl text-center">
            <Badge variant="dark" className="mb-6 mx-auto bg-brand-light/10 text-brand-accent border-brand/30">
              {config.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse mb-6 text-balance leading-tight">
              {config.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              {config.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base" onClick={handleHeroCTA}>
                {config.hero.primaryCTA}
              </Button>
              <a 
                href="https://wa.me/923360492823" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent('landing_whatsapp_click', { campaign: config.slug })}
                className="w-full sm:w-auto"
              >
                <Button variant="dark" size="lg" className="w-full sm:w-auto border-border-dark text-base">
                  {config.hero.secondaryCTA}
                </Button>
              </a>
            </div>
          </Container>
        </Section>

        {/* B. Problem & Solution */}
        <Section variant="default" className="py-20 border-b border-border">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-surface-alt border border-border p-8 md:p-12 rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{config.problem.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-8">{config.problem.description}</p>
                <ul className="space-y-6">
                  {config.problem.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-status-error/10 text-status-error flex items-center justify-center shrink-0 mt-0.5 text-sm">✕</span>
                      <div>
                        <strong className="block text-text-primary mb-1">{pt.title}</strong>
                        <span className="text-sm text-text-secondary leading-relaxed">{pt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand/5 border border-brand/20 p-8 md:p-12 rounded-3xl">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-hover mb-4">{config.solution.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-8">{config.solution.description}</p>
                <ul className="space-y-6">
                  {config.solution.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={24} />
                      <div>
                        <strong className="block text-text-primary mb-1">{pt.title}</strong>
                        <span className="text-sm text-text-secondary leading-relaxed">{pt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* C. Capabilities */}
        <Section variant="alt" className="py-20 border-b border-border">
          <Container>
            <SectionHeader align="center" title={config.capabilities.title} className="mb-16" />
            <div className="grid md:grid-cols-2 gap-6">
              {config.capabilities.items.map((item, i) => (
                <div key={i} className="bg-surface border border-border p-6 rounded-2xl flex items-start gap-4">
                  <MonitorSmartphone className="text-brand shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* D. Technical Foundation */}
        <Section variant="dark" className="py-20 bg-surface-dark border-b border-border-dark">
          <Container>
            <SectionHeader align="center" title={config.technology.title} className="mb-16 text-text-inverse" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.technology.items.map((tech, i) => {
                const Icon = i === 0 ? Code2 : i === 1 ? Server : i === 2 ? Database : Cloud;
                return (
                  <div key={i} className="bg-surface-dark-muted border border-border-dark p-6 rounded-2xl">
                    <Icon className="text-brand-accent mb-4" size={28} />
                    <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2">{tech.category}</div>
                    <p className="text-text-inverse font-medium">{tech.description}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>

        {/* E. Process & Industries */}
        <Section variant="default" className="py-20 border-b border-border">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <SectionHeader align="left" title={config.process.title} className="mb-8" />
                <div className="space-y-6">
                  {config.process.steps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center shrink-0 font-bold text-text-muted">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">{step.title}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-surface-alt border border-border p-8 rounded-3xl h-full">
                  <h3 className="text-xl font-bold text-text-primary mb-6">{config.industries.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {config.industries.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-surface border border-border rounded-full text-sm font-semibold text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* F. Form & CTA Section */}
        <Section id="contact-form-section" variant="alt" className="py-20">
          <Container className="max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 text-brand bg-brand/10 border-brand/20">Let's Talk</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  {config.cta.title}
                </h2>
                <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                  {config.cta.subtitle}
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand shrink-0 mt-1" size={20} />
                    <p className="text-sm text-text-secondary">Direct communication with senior engineers, not sales reps.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand shrink-0 mt-1" size={20} />
                    <p className="text-sm text-text-secondary">Transparent technical architecture discussion.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface border border-border p-8 md:p-10 rounded-3xl shadow-sm">
                <form 
                  name="landing-contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  action="/thank-you"
                  onSubmit={() => {
                    trackEvent('landing_form_submit', { campaign: config.slug })
                    setPendingLead(`landing_${config.slug}`)
                  }}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="landing-contact" />
                  <input type="hidden" name="campaign" value={config.slug} />
                  <div hidden>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1" htmlFor="name">Name <span className="text-status-error">*</span></label>
                    <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt focus:bg-surface focus:ring-2 focus:ring-brand outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1" htmlFor="email">Business Email <span className="text-status-error">*</span></label>
                    <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt focus:bg-surface focus:ring-2 focus:ring-brand outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1" htmlFor="phone">Phone / WhatsApp</label>
                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt focus:bg-surface focus:ring-2 focus:ring-brand outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-1" htmlFor="requirements">What do you need? <span className="text-status-error">*</span></label>
                    <textarea required id="requirements" name="requirements" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-surface-alt focus:bg-surface focus:ring-2 focus:ring-brand outline-none transition-all resize-none"></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="w-full py-4 text-base mt-2">
                    {config.cta.buttonText}
                  </Button>
                </form>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-surface-dark border-t border-border-dark py-8 text-center text-sm text-text-muted">
        <Container>
          <p>&copy; {new Date().getFullYear()} Corelane Systems. All rights reserved.</p>
        </Container>
      </footer>

      <WhatsAppFAB />
    </div>
  )
}
