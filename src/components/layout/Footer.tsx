import { Link } from 'react-router-dom'
import { Mail, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/utils/cn'

const serviceLinks = [
  { label: 'Website Development', href: '/services/web-development' },
  { label: 'Web Applications', href: '/services/web-app-development' },
  { label: 'Custom Software', href: '/services/custom-software' },
  { label: 'Mobile Development', href: '/services/mobile-development' },
  { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  { label: 'Cloud Engineering', href: '/services/cloud-engineering' },
  { label: 'DevOps', href: '/services/devops' },
  { label: 'Data Engineering', href: '/services/data-engineering' },
  { label: 'Data Analytics', href: '/services/data-analytics' },
  { label: 'Business Automation', href: '/services/business-automation' },
]

const industryLinks = [
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Law Firms', href: '/industries/law-firms' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-commerce', href: '/industries/ecommerce' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'Startups', href: '/industries/startups' },
  { label: 'SMEs', href: '/industries/smes' },
  { label: 'Architecture & Construction', href: '/industries/architecture-construction' },
]

const locationLinks = [
  { label: 'Pakistan', href: '/locations/pakistan' },
  { label: 'UAE', href: '/locations/uae' },
  { label: 'United Kingdom', href: '/locations/uk' },
  { label: 'United States', href: '/locations/usa' },
  { label: 'Canada', href: '/locations/canada' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5" aria-label="Corelane Systems home">
              <img src="/logo.png" alt="Corelane Systems" className="h-9 w-auto" />
              <div>
                <div className="text-white font-semibold text-sm">Corelane</div>
                <div className="text-teal text-xs tracking-widest uppercase font-medium">Systems</div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Software Development & Cloud Engineering
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={15} />
                Email
              </a>
              <div className="flex flex-wrap gap-4 mt-2">
                <a href="https://corelanesystem.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-teal">Website</a>
                <a href="https://www.linkedin.com/company/corelane-system/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-teal">LinkedIn</a>
                <a href="https://www.instagram.com/corelanesystem/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-teal">Instagram</a>
                <a href="https://www.facebook.com/people/Corelane-Offical/61593068332489/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-teal">Facebook</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Industries</h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Locations</h3>
            <ul className="space-y-2.5">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="container-content py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {year} Corelane Systems. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Technology built around your business.
          </p>
        </div>
      </div>
    </footer>
  )
}
