import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/utils/cn'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CTASection({
  title = 'Have a Business Challenge?',
  subtitle = "Let's discuss the technology solution that fits your goals.",
  primaryLabel = 'Start a Project',
  primaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="bg-navy section-padding" aria-labelledby="cta-heading">
      <div className="container-content text-center">
        {/* Accent line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-navy-700" aria-hidden />
          <span className="text-teal text-sm font-semibold uppercase tracking-widest">Get in touch</span>
          <div className="h-px w-16 bg-navy-700" aria-hidden />
        </div>

        <h2 id="cta-heading" className="text-h1 font-bold text-white mb-4 text-balance">
          {title}
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryHref}>
            <Button size="lg">
              {primaryLabel}
              <ArrowRight size={18} />
            </Button>
          </Link>

          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="lg">
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
