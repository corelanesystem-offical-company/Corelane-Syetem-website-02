import { Link } from 'react-router-dom'
import { ArrowRight, Server, Database, Cloud, Cog, Zap, Code, ShieldCheck, Target, Box, GitMerge, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/utils/analytics'
import { CONTACT } from '@/utils/cn'

export default function HeroSection() {
  return (
    <section className="relative bg-white pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-grid-slate-pattern opacity-50"></div>
        <div className="absolute top-0 right-0 w-3/4 h-[600px] bg-teal-50/50 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
              <div className="h-px w-8 bg-teal" />
              <span className="text-teal text-xs md:text-sm font-bold tracking-widest uppercase">
                Corelane Systems
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-navy leading-tight tracking-tight text-balance mb-6 animate-fade-up delay-100">
              Technology Solutions <span className="text-teal font-extrabold tracking-tight">Built Around Your Business.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl text-balance animate-fade-up delay-200">
              Corelane Systems helps startups, SMEs and growing businesses build modern websites, web applications, custom software, cloud infrastructure and digital solutions designed around real business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: 'hero' })}>
                <Button size="lg" className="w-full sm:w-auto px-8">
                  Start a Project
                </Button>
              </Link>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('cta_whatsapp', { source: 'hero' })}>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 bg-white text-slate-900 border-slate-200 hover:border-teal">
                  <MessageCircle size={18} /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Right Technical Visual (Business -> API -> Cloud -> Data) */}
          <div className="relative h-[450px] md:h-[550px] w-full hidden lg:block animate-fade-in delay-500" aria-hidden>
            
            {/* Business Layer */}
            <div className="absolute top-[10%] left-[10%] p-5 border border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center gap-4 animate-float">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                <Target className="text-slate-600" size={24} />
              </div>
              <div>
                <span className="text-slate-900 text-sm font-bold block mb-1">Business Goals</span>
                <span className="text-slate-500 text-xs font-mono">Scale & Optimize</span>
              </div>
            </div>

            {/* Application / API Layer */}
            <div className="absolute top-[40%] left-[30%] p-5 border border-teal-100 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgb(15,118,110,0.1)] flex items-center gap-4 animate-float delay-100 z-10">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100">
                <Box className="text-teal" size={24} />
              </div>
              <div>
                <span className="text-slate-900 text-sm font-bold block mb-1">Software Platform</span>
                <span className="text-teal text-xs font-mono">REST API / GraphQL</span>
              </div>
            </div>

            {/* Cloud / DevOps Layer */}
            <div className="absolute top-[20%] right-[10%] p-5 border border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center gap-4 animate-float delay-200">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                <Cloud className="text-slate-600" size={24} />
              </div>
              <div>
                <span className="text-slate-900 text-sm font-bold block mb-1">Cloud Infrastructure</span>
                <span className="text-slate-500 text-xs font-mono">Auto-Scaling</span>
              </div>
            </div>

            {/* Data Layer */}
            <div className="absolute bottom-[15%] right-[25%] p-5 border border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center gap-4 animate-float delay-300">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                <Database className="text-slate-600" size={24} />
              </div>
              <div>
                <span className="text-slate-900 text-sm font-bold block mb-1">Data Engineering</span>
                <span className="text-slate-500 text-xs font-mono">Secure & Reliable</span>
              </div>
            </div>

            {/* Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <path d="M 25% 18% Q 40% 18% 40% 45%" fill="none" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse-slow" />
              <path d="M 50% 48% Q 75% 48% 75% 28%" fill="none" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse-slow delay-100" />
              <path d="M 50% 48% Q 65% 48% 65% 75%" fill="none" stroke="rgba(20, 184, 166, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="animate-pulse-slow delay-200" />
            </svg>
            
          </div>
        </div>
      </div>
    </section>
  )
}
