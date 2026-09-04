import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export default function CTASection({ 
  title = "Ready to solve your business challenge?", 
  subtitle = "Partner with Corelane Systems to build technology that drives results." 
}: CTASectionProps) {
  return (
    <section className="relative py-24 bg-teal overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute -top-[100%] -right-[10%] w-[80%] h-[200%] bg-white rotate-12 origin-center transform" />
      </div>
      
      <div className="container-content relative z-10">
        <div className="max-w-3xl bg-navy p-10 md:p-16 rounded-3xl shadow-2xl border border-navy-800">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl">
            {subtitle}
          </p>
          <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: 'footer_cta' })}>
            <Button size="lg" className="w-full sm:w-auto h-14 px-10 bg-white text-navy hover:bg-slate-100 hover:text-teal-dark border-transparent font-bold">
              Start a Project
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
