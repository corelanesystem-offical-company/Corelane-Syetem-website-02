import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Server, Cloud, Database, Network } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import Reveal from '@/components/animations/Reveal'
import Parallax from '@/components/animations/Parallax'

export default function HeroSection() {
  return (
    <Section variant="default" className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden relative">
      {/* Subtle Premium Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Background Subtle Grid Pattern with Parallax */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <Parallax speed={0.5} className="w-full h-[120%] -mt-[10%]">
          <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </Parallax>
      </div>
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Content */}
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-4">
                Engineering-First Solutions
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h1 className="text-display font-bold text-text-primary text-balance mb-6">
                We build software & technology infrastructure.
              </h1>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="text-body-lg text-text-secondary text-balance mb-8">
                Corelane Systems helps businesses operate, automate, and scale. From custom business applications and API integrations to robust cloud environments.
              </p>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
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
            </Reveal>
          </div>

          {/* Technical Visual */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              {/* Central Node */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-surface rounded-2xl shadow-elevated border border-border flex items-center justify-center z-20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center text-brand">
                  <Server size={32} />
                </div>
              </motion.div>
              
              {/* Outer Nodes */}
              <motion.div 
                className="absolute top-[15%] left-[20%] w-16 h-16 bg-surface rounded-xl shadow-card border border-border flex items-center justify-center z-20"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Database size={24} className="text-text-secondary" />
              </motion.div>
              <motion.div 
                className="absolute top-[20%] right-[15%] w-16 h-16 bg-surface rounded-xl shadow-card border border-border flex items-center justify-center z-20"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Cloud size={24} className="text-text-secondary" />
              </motion.div>
              <motion.div 
                className="absolute bottom-[20%] left-[25%] w-16 h-16 bg-surface rounded-xl shadow-card border border-border flex items-center justify-center z-20"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Network size={24} className="text-text-secondary" />
              </motion.div>
              
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
          </motion.div>
          
        </div>
      </Container>
    </Section>
  )
}
