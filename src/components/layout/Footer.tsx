import { Link } from 'react-router-dom'
import { MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react'
import { CONTACT } from '@/utils/cn'
import { services } from '@/data/services'
import { industries } from '@/data/industries'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/utils/analytics'

export default function Footer() {
  const year = new Date().getFullYear()

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Projects', href: '/case-studies' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-surface-dark text-text-inverse pt-20 pb-10" aria-label="Site footer">
      <div className="container-content">
        
        {/* FOOTER CTA AREA */}
        <div className="bg-surface-dark-muted rounded-2xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-border-dark">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-text-inverse">
              Have a project in mind?
            </h2>
            <p className="text-text-muted text-lg">
              Let's discuss your requirements and build technology that drives results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <a 
              href={CONTACT.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_whatsapp', { source: 'footer_cta' })}
              className="w-full sm:w-auto"
            >
              <Button variant="dark" size="lg" className="w-full border-border-dark">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
            <Link 
              to="/contact"
              onClick={() => trackEvent('cta_start_project', { source: 'footer_cta' })}
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full">
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit" aria-label="Corelane Systems home">
              <img src="/logo.png" alt="Corelane Systems" className="h-8 w-auto transform group-hover:scale-105 transition-transform" />
              <div>
                <div className="text-text-inverse font-bold text-sm leading-tight">Corelane</div>
                <div className="text-brand-light text-[10px] tracking-widest uppercase font-semibold">Systems</div>
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Technology solutions built around your business. We engineer software that solves problems and drives growth.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold text-text-inverse uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.slug}>
                  <Link
                    to={`/services/${link.slug}`}
                    className="text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions / Industries */}
          <div>
            <h3 className="text-xs font-bold text-text-inverse uppercase tracking-widest mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.slug}>
                  <Link
                    to={`/industries/${link.slug}`}
                    className="text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & Connect */}
          <div>
            <h3 className="text-xs font-bold text-text-inverse uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-bold text-text-inverse uppercase tracking-widest mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit">
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/corelane-system/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit">
                  <Globe size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/corelanesystem/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit">
                  <Globe size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/Corelane-Offical/61593068332489/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-brand-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm w-fit">
                  <Globe size={16} /> Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {year} Corelane Systems. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-text-muted hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-text-muted hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
