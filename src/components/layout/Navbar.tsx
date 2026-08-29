import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ExternalLink, MessageCircle } from 'lucide-react'
import { cn } from '@/utils/cn'
import { services } from '@/data/services'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import Button from '@/components/ui/Button'

const serviceLinks = services.map((s) => ({
  label: s.shortTitle,
  href: `/services/${s.slug}`,
}))

const industryLinks = [
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Law Firms', href: '/industries/law-firms' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'E-commerce', href: '/industries/ecommerce' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'Startups', href: '/industries/startups' },
  { label: 'SMEs', href: '/industries/smes' },
]

const locationLinks = [
  { label: '🇵🇰 Pakistan', href: '/locations/pakistan' },
  { label: '🇦🇪 UAE', href: '/locations/uae' },
  { label: '🇬🇧 United Kingdom', href: '/locations/uk' },
  { label: '🇺🇸 United States', href: '/locations/usa' },
  { label: '🇨🇦 Canada', href: '/locations/canada' },
]

interface DropdownMenuProps {
  label: string
  items: { label: string; href: string }[]
  overviewHref?: string
  overviewLabel?: string
  cols?: number
}

function DropdownMenu({ label, items, overviewHref, overviewLabel, cols = 1 }: DropdownMenuProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600',
          'hover:text-teal transition-colors duration-200 rounded-md',
          open && 'text-teal'
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div
          className={cn(
            'absolute top-full left-0 pt-2 z-50',
            cols === 2 ? 'w-96' : 'w-56'
          )}
        >
          <div className="bg-white rounded-xl border border-slate-200 shadow-card-hover p-3">
            {overviewHref && (
              <Link
                to={overviewHref}
                className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800
                  hover:bg-teal-50 hover:text-teal rounded-lg mb-1 transition-colors duration-150"
              >
                {overviewLabel || `All ${label}`}
                <ExternalLink size={12} className="text-slate-400" />
              </Link>
            )}
            <div className={cn('grid gap-0.5', cols === 2 && 'grid-cols-2')}>
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-3 py-2 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal
                    rounded-lg transition-colors duration-150"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-navy/95 backdrop-blur-lg border-navy-800 py-3 shadow-md'
          : 'bg-navy border-transparent py-5'
      )}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Corelane Systems home">
            <img
              src="/logo.png"
              alt="Corelane Systems"
              className="h-8 w-auto"
            />
            <span className="text-white font-semibold text-sm hidden sm:block leading-tight">
              Corelane<br />
              <span className="text-teal text-xs tracking-widest uppercase font-medium">Systems</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            <DropdownMenu
              label="Services"
              items={serviceLinks}
              overviewHref="/services"
              overviewLabel="All Services"
              cols={2}
            />
            <DropdownMenu
              label="Industries"
              items={industryLinks}
              overviewHref="/industries"
              overviewLabel="All Industries"
            />
            <NavLink
              to="/process"
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                  isActive ? 'text-teal' : 'text-slate-300 hover:text-white'
                )
              }
            >
              Solutions
            </NavLink>
            <DropdownMenu
              label="Locations"
              items={locationLinks}
              overviewHref="/locations"
              overviewLabel="All Locations"
            />
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                  isActive ? 'text-teal' : 'text-slate-300 hover:text-white'
                )
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                  isActive ? 'text-teal' : 'text-slate-300 hover:text-white'
                )
              }
            >
              About
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={CONTACT.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_whatsapp', { source: 'navbar' })}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              <MessageCircle size={18} />
              <span className="hidden xl:inline">WhatsApp Us</span>
            </a>
            <Link to="/contact" onClick={() => trackEvent('cta_start_project', { source: 'navbar' })}>
              <Button size="md" className="shadow-sm">
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200 rounded-md"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-700 bg-navy">
          <div className="container-content py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <MobileNavSection title="Company">
              <MobileLink to="/about" label="About" />
              <MobileLink to="/process" label="Our Process" />
              <MobileLink to="/case-studies" label="Work & Case Studies" />
              <MobileLink to="/blog" label="Blog" />
            </MobileNavSection>

            <MobileNavSection title="Services">
              <MobileLink to="/services" label="All Services" highlight />
              {serviceLinks.map((s) => (
                <MobileLink key={s.href} to={s.href} label={s.label} />
              ))}
            </MobileNavSection>

            <MobileNavSection title="Industries">
              <MobileLink to="/industries" label="All Industries" highlight />
              {industryLinks.map((i) => (
                <MobileLink key={i.href} to={i.href} label={i.label} />
              ))}
            </MobileNavSection>

            <MobileNavSection title="Locations">
              {locationLinks.map((l) => (
                <MobileLink key={l.href} to={l.href} label={l.label} />
              ))}
            </MobileNavSection>

            <div className="pt-4 pb-2 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center py-3 bg-teal text-white font-medium rounded-lg hover:bg-teal-dark transition-colors"
              >
                Start a Project
              </Link>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#20ba59] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileNavSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-400"
      >
        {title}
        <ChevronDown size={14} className={cn('transition-transform duration-200', open && 'rotate-180')} />
      </button>
      {open && <div className="pl-2 pb-2 space-y-0.5">{children}</div>}
    </div>
  )
}

function MobileLink({ to, label, highlight = false }: { to: string; label: string; highlight?: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        'block px-3 py-2.5 text-sm rounded-lg transition-colors duration-150',
        highlight
          ? 'text-teal font-semibold hover:bg-navy-800'
          : 'text-slate-300 hover:text-white hover:bg-navy-800'
      )}
    >
      {label}
    </Link>
  )
}
