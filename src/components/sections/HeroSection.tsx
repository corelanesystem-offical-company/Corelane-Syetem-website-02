import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Briefcase, Code, Cloud, Database, TrendingUp } from 'lucide-react'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/utils/cn'

export default function HeroSection() {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3AAFB9 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal to-transparent" aria-hidden />

      <div className="container-content relative py-20 md:py-32 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-teal" aria-hidden />
            <span className="text-teal text-sm font-semibold tracking-wider uppercase">
              SOFTWARE DEVELOPMENT & CLOUD ENGINEERING
            </span>
          </div>

          <h1 className="text-display font-bold text-white text-balance leading-tight mb-6">
            Technology Built Around{' '}
            <span className="text-teal">Your Business.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
            Corelane Systems helps startups, SMEs, and growing businesses build modern software, web applications, cloud infrastructure, and digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg">
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </Link>

            <Link to="/services">
              <Button variant="secondary" size="lg">
                Explore Services
              </Button>
            </Link>

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle size={18} />
                Talk to Us
              </Button>
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden lg:flex justify-end items-center relative">
          <div className="absolute inset-0 bg-teal/10 blur-[100px] rounded-full w-3/4 h-3/4 m-auto" aria-hidden />
          <div className="relative z-10 w-full max-w-lg">
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Business', icon: Briefcase },
                { label: 'Software', icon: Code },
                { label: 'Cloud', icon: Cloud },
                { label: 'Data', icon: Database },
                { label: 'Growth', icon: TrendingUp },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-navy-800 border border-navy-700 rounded-xl flex items-center justify-center text-teal shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <step.icon size={24} />
                  </div>
                  {idx < 4 && (
                    <div className="absolute left-7 top-[3.5rem] w-px h-10 bg-teal/30 -z-10" style={{ transform: `translateY(${idx * 72}px)` }} />
                  )}
                  <div className="bg-navy-800/80 backdrop-blur-sm border border-navy-700 px-6 py-4 rounded-xl flex-1 transform group-hover:border-teal/50 transition-colors duration-300">
                    <span className="text-white font-medium tracking-wide uppercase text-sm">{step.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
