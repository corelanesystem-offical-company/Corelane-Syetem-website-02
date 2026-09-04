import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Globe } from 'lucide-react'
import { CONTACT } from '@/utils/cn'

export default function Footer() {
  const year = new Date().getFullYear()

  const serviceLinks = [
    { label: 'Website Development', href: '/services/web-development' },
    { label: 'Web Applications', href: '/services/web-app-development' },
    { label: 'Custom Software', href: '/services/custom-software' },
    { label: 'Cloud & DevOps', href: '/services/cloud-engineering' },
    { label: 'Data Engineering', href: '/services/data-engineering' },
    { label: 'Business Automation', href: '/services/business-automation' },
  ]

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Projects', href: '/case-studies' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-navy text-white pt-20 pb-10" aria-label="Site footer">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="lg:pr-8">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group" aria-label="Corelane Systems home">
              <img src="/logo.png" alt="Corelane Systems" className="h-8 w-auto transform group-hover:scale-105 transition-transform" />
              <div>
                <div className="text-white font-semibold text-sm leading-tight">Corelane</div>
                <div className="text-teal text-[10px] tracking-widest uppercase font-bold">Systems</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Technology solutions built around your business. We engineer software that solves problems and drives growth.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-6">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200">
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/corelane-system/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200">
                  <Globe size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/corelanesystem/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200">
                  <Globe size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/Corelane-Offical/61593068332489/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#14B8A6] transition-colors duration-200">
                  <Globe size={16} /> Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {year} Corelane Systems. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-slate-600">Privacy Policy</span>
            <span className="text-xs text-slate-600">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
