import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Server, Cloud, Database, Network } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'

export default function HeroSection() {
  return (
    <Section variant="default" className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden relative">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up">
              Engineering-First Solutions
            </p>
            
            <h1 className="text-display font-bold text-text-primary text-balance mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
              We build software & technology infrastructure.
            </h1>
            
            <p className="text-body-lg text-text-secondary text-balance mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Corelane Systems helps businesses operate, automate, and scale. From custom business applications and API integrations to robust cloud environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link 
                to="/contact" 
                onClick={() => trackEvent('cta_start_project', { source: 'hero' })}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Start a Project
                  <ArrowRight size={18} />
                </Button>
              </Link>
              
              <a 
                href={CONTACT.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent('cta_whatsapp', { source: 'hero' })}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              >
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-surface hover:bg-surface-alt">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Technical Visual */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-surface rounded-2xl shadow-elevated border border-border flex items-center justify-center z-20">
                <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center text-brand">
                  <Server size={32} />
                </div>
              </div>
              
              {/* Outer Nodes */}
              <div className="absolute top-[15%] left-[20%] w-16 h-16 bg-surface rounded-xl shadow-card border border-border flex items-center justify-center z-20 hover:-translate-y-1 transition-transform">
                <Database size={24} className="text-text-secondary" />
              </div>
              <div className="absolute top-[20%] right-[15%] w-16 h-16 bg-surface rounded-xl shadow-card border border-border flex items-center justify-center z-20 hover:-translate-y-1 transition-transform">
                <Cloud size={24} className="text-text-secondary" />
              </div>
              <div className="absolute bottom-[20%] left-[25%] w-16 h-16 bg-surface rounded-xl shadow-card border border-border flex items-center justify-center z-20 hover:-translate-y-1 transition-transform">
                <Network size={24} className="text-text-secondary" />
              </div>
              
              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{ opacity: 0.2 }}>
                <path d="M 125,125 C 180,180 200,200 250,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand" />
                <path d="M 375,150 C 320,180 300,200 250,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand" />
                <path d="M 175,375 C 200,320 220,300 250,250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-brand" />
              </svg>
              
              {/* Accent decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-brand/10 rounded-full animate-[spin_30s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] border border-brand/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
