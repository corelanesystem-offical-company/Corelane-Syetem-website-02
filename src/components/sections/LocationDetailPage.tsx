import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Terminal, CheckCircle2, CloudCog, Shield, Database, Layout } from 'lucide-react'

import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { type Location } from '@/data/locations'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

interface LocationDetailPageProps {
  location: Location
}

export default function LocationDetailPage({ location }: LocationDetailPageProps) {
  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.corelanesystems.com/' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.corelanesystems.com/locations' },
      { '@type': 'ListItem', position: 3, name: location.country, item: `https://www.corelanesystems.com/locations/${location.slug}` }
    ]
  }

  return (
    <>
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={`https://www.corelanesystems.com/locations/${location.slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* 1. Location Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/locations" className="hover:text-brand-accent transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-text-inverse font-medium">{location.country}</span>
          </div>

          <Badge variant="dark" className="mb-6 tracking-widest uppercase bg-brand-light/10 text-brand-accent border-brand/30 flex items-center gap-2 w-fit">
            <span aria-hidden="true" className="text-lg">{location.flag}</span>
            {location.region}
          </Badge>
          
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
            {location.h1}
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-3xl">
            {location.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: `location_hero_${location.slug}` })}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="dark" size="lg" className="w-full sm:w-auto border-border-dark">
                View Capabilities
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 2. Business Technology Context */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                align="left"
                eyebrow={`Business Context: ${location.country}`}
                title="The Engineering Approach"
                className="mb-6"
              />
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {location.marketContext}
              </p>
              <div className="pt-6 border-t border-border">
                <Link to="/process" className="text-brand font-bold text-sm inline-flex items-center gap-1 group">
                  View our delivery process
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="bg-surface-alt border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-text-primary mb-6">Why work with Corelane?</h3>
              <ul className="space-y-6">
                {location.whyDigital.map((item, i) => (
                  <li key={i}>
                    <h4 className="font-bold text-text-primary mb-1 text-sm flex items-center gap-2">
                      <Terminal size={16} className="text-brand" /> {item.title}
                    </h4>
                    <p className="text-sm text-text-secondary pl-6">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Relevant Services & Industries */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Services */}
            <div>
              <SectionHeader align="left" title="Relevant Capabilities" className="mb-8" />
              <div className="grid sm:grid-cols-2 gap-4">
                {location.relevantServices.map(service => (
                  <Link 
                    key={service.slug} 
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-brand hover:shadow-sm transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                      <Layout size={16} className="text-brand group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-bold text-sm text-text-primary group-hover:text-brand transition-colors">{service.title}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/services">
                  <Button variant="outline" size="sm">View All Services</Button>
                </Link>
              </div>
            </div>

            {/* Industries */}
            <div>
              <SectionHeader align="left" title="Industries Supported" className="mb-8" />
              <div className="flex flex-wrap gap-3">
                {location.industries.map(industry => (
                  <Link 
                    key={industry.slug} 
                    to={`/industries/${industry.slug}`}
                    className="px-4 py-2 bg-surface border border-border rounded-full hover:border-brand transition-colors text-sm font-bold text-text-secondary hover:text-brand shadow-sm"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 4. Delivery Approach */}
      <Section variant="dark" className="border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-4xl">
          <SectionHeader
            title="Remote Engineering Excellence"
            subtitle="How we deliver software for distributed businesses."
            align="center"
            className="text-text-inverse mb-12"
          />
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-surface-dark-muted border border-border-dark p-6 rounded-xl text-left">
              <Shield size={24} className="text-brand-accent mb-4" />
              <h4 className="font-bold text-text-inverse mb-2">Structured Process</h4>
              <p className="text-sm text-text-muted">Rigorous planning and architectural design before any code is written.</p>
            </div>
            <div className="bg-surface-dark-muted border border-border-dark p-6 rounded-xl text-left">
              <CloudCog size={24} className="text-brand-accent mb-4" />
              <h4 className="font-bold text-text-inverse mb-2">Cloud-Native</h4>
              <p className="text-sm text-text-muted">Solutions deployed securely to scalable infrastructure (AWS/Azure/GCP).</p>
            </div>
            <div className="bg-surface-dark-muted border border-border-dark p-6 rounded-xl text-left">
              <Database size={24} className="text-brand-accent mb-4" />
              <h4 className="font-bold text-text-inverse mb-2">Transparency</h4>
              <p className="text-sm text-text-muted">Clear documentation, version control visibility, and async-friendly updates.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. FAQ */}
      {location.faq && location.faq.length > 0 && (
        <Section variant="default" className="border-b border-border">
          <Container>
            <SectionHeader
              title={`Common Questions: ${location.country}`}
              subtitle="Details on how we collaborate with businesses in this region."
              align="center"
            />
            
            <div className="mt-12 max-w-3xl mx-auto space-y-6">
              {location.faq.map((faq, i) => (
                <div key={i} className="bg-surface-alt p-6 rounded-xl border border-border shadow-sm">
                  <h4 className="font-bold text-text-primary mb-2 text-sm">{faq.q}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CTASection 
        title="Ready to build?"
        subtitle={`Let's discuss how we can support your business in ${location.country}.`}
      />
    </>
  )
}
