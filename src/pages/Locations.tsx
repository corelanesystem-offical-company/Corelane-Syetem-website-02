import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, MonitorSmartphone, CloudCog, ShieldCheck, Database } from 'lucide-react'

import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { locations } from '@/data/locations'
import { trackEvent } from '@/utils/analytics'

export default function Locations() {
  return (
    <>
      <Helmet>
        <title>International Engineering Services | Corelane Systems</title>
        <meta name="description" content="Corelane Systems provides software engineering, cloud, and data solutions for businesses in Pakistan, the US, UK, Canada, and the UAE." />
        <link rel="canonical" href="https://corelanesystem.com/locations" />
      </Helmet>

      {/* Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <Container className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-text-muted mb-8">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-inverse font-medium">Locations</span>
          </div>

          <Badge variant="dark" className="mb-6 tracking-widest uppercase bg-brand-light/10 text-brand-accent border-brand/30">
            Global Delivery
          </Badge>
          <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
            Software engineering for businesses across markets.
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed max-w-3xl">
            Corelane Systems provides software development, cloud infrastructure, DevOps, and data capabilities for businesses in Pakistan and international markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: 'locations_hero' })}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Markets We Serve */}
      <Section variant="default" className="border-b border-border">
        <Container>
          <SectionHeader
            title="Markets We Support"
            subtitle="We engineer solutions tailored to the business environment and technical requirements of these regions."
            align="center"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-surface border border-border rounded-2xl p-8 shadow-sm flex flex-col group hover:border-brand/50 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl" aria-hidden="true">{loc.flag}</div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-brand transition-colors">{loc.country}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">{loc.region}</span>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                  {loc.tagline}
                </p>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <Link to={`/locations/${loc.slug}`}>
                    <Button variant="outline" className="w-full justify-center group-hover:border-brand/50">
                      Explore {loc.country} Services
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* International Delivery Approach */}
      <Section variant="alt" className="border-b border-border">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6">Remote Collaboration</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 text-balance">
                How we support distributed businesses
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Modern software engineering doesn't require a local presence—it requires structured execution, transparent communication, and deep technical expertise.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Async-Friendly Communication', desc: 'We align workflows to minimize timezone bottlenecks while maintaining daily overlap for strategic alignment.' },
                  { title: 'Structured Process', desc: 'Every project follows a defined engineering lifecycle, from discovery and architecture to deployment.' },
                  { title: 'Technical Transparency', desc: 'Clear documentation, version control (Git), and continuous visibility into the development pipeline.' }
                ].map((item, i) => (
                  <li key={i}>
                    <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/process">
                  <Button variant="secondary">
                    View Our Delivery Process
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-text-primary mb-6">Core Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: MonitorSmartphone, title: 'Applications', desc: 'Web & Custom Software' },
                  { icon: CloudCog, title: 'Cloud', desc: 'Infrastructure & DevOps' },
                  { icon: Database, title: 'Data', desc: 'Pipelines & Analytics' },
                  { icon: ShieldCheck, title: 'Automation', desc: 'Business Systems' }
                ].map((cap, i) => (
                  <div key={i} className="p-4 border border-border rounded-xl">
                    <cap.icon size={24} className="text-brand mb-3" />
                    <h4 className="font-bold text-text-primary text-sm">{cap.title}</h4>
                    <span className="text-xs text-text-muted">{cap.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection 
        title="Ready to discuss your technology requirements?"
        subtitle="We engineer solutions for organizations that need serious software."
      />
    </>
  )
}
