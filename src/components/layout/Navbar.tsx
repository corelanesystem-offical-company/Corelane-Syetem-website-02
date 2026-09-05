import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react'
import { cn, CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import Button from '@/components/ui/Button'
import { services } from '@/data/services'
import { industries } from '@/data/industries'

// Standardized nav item type
type NavItemType = {
  label: string
  href: string
}

function DropdownMenu({
  label,
  items,
  overviewHref,
  overviewLabel
}: {
  label: string
  items: NavItemType[]
  overviewHref?: string
  overviewLabel?: string
}) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <div
      className="relative group"
      ref={containerRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
          open || location.pathname.includes(label.toLowerCase()) ? 'text-brand' : 'text-text-primary hover:text-brand'
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
        <div className="absolute top-full left-0 pt-2 z-50 w-64">
          <div className="bg-surface rounded-xl border border-border shadow-elevated p-2 animate-fade-up origin-top">
            {overviewHref && (
              <Link
                to={overviewHref}
                className="block px-4 py-2 text-sm font-bold text-text-primary hover:bg-surface-alt hover:text-brand rounded-md mb-2 transition-colors border-b border-border pb-3"
              >
                {overviewLabel || `All ${label}`}
              </Link>
            )}
            <div className="flex flex-col space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block px-4 py-2 text-sm font-medium text-text-secondary hover:bg-surface-alt hover:text-brand rounded-md transition-colors"
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

function DesktopNavLink({ to, label }: { to: string, label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
          isActive ? 'text-brand' : 'text-text-primary hover:text-brand'
        )
      }
    >
      {label}
    </NavLink>
  )
}

function MobileLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'block px-4 py-3 text-base font-semibold rounded-lg transition-colors',
        isActive ? 'bg-brand-light text-brand' : 'text-text-primary hover:bg-surface-alt hover:text-brand'
      )}
    >
      {label}
    </Link>
  )
}

function MobileDropdown({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-1">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold rounded-lg text-text-primary hover:bg-surface-alt hover:text-brand transition-colors"
      >
        <span>{title}</span>
        <ChevronDown size={18} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pl-4 mt-1 border-l-2 border-border ml-6 space-y-1 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Scroll handler
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  // Escape key support for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-surface',
        scrolled ? 'border-b border-border shadow-sm py-2' : 'border-b border-transparent py-4'
      )}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* LEFT: Logo */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md p-1 -ml-1" 
            aria-label="Corelane Systems home"
          >
            <img
              src="/logo.png"
              alt="Corelane Systems"
              className="h-16 md:h-20 w-auto transform group-hover:scale-105 transition-transform object-contain"
            />
          </Link>

          {/* CENTER: Primary Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            <DesktopNavLink to="/" label="Home" />
            <DropdownMenu
              label="Services"
              items={services.map(s => ({ label: s.title, href: `/services/${s.slug}` }))}
              overviewHref="/services"
              overviewLabel="All Services"
            />
            <DesktopNavLink to="/solutions" label="Solutions" />
            <DropdownMenu
              label="Industries"
              items={industries.map(i => ({ label: i.title, href: `/industries/${i.slug}` }))}
              overviewHref="/industries"
              overviewLabel="All Industries"
            />
            <DesktopNavLink to="/case-studies" label="Projects" />
            <DesktopNavLink to="/about" label="About" />
            <DesktopNavLink to="/contact" label="Contact" />
          </nav>

          {/* RIGHT: Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={CONTACT.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_whatsapp', { source: 'navbar' })}
              className="flex items-center gap-2 text-text-primary hover:text-brand transition-colors text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md px-2 py-1"
              aria-label="WhatsApp Us"
            >
              <MessageCircle size={18} />
              <span className="hidden xl:inline">WhatsApp Us</span>
            </a>
            <Link 
              to="/contact" 
              onClick={() => trackEvent('cta_start_project', { source: 'navbar' })}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-lg"
            >
              <Button size="md" variant="primary">
                Start a Project
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-text-primary hover:text-brand transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div 
          className="lg:hidden fixed left-0 w-full bottom-0 bg-surface z-40 overflow-y-auto animate-fade-in border-t border-border"
          style={{ top: scrolled ? '96px' : '112px' }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-content py-6 space-y-2">
            <MobileLink to="/" label="Home" onClick={() => setMobileOpen(false)} />
            
            <MobileDropdown title="Services">
              {services.map(s => (
                <MobileLink key={s.slug} to={`/services/${s.slug}`} label={s.title} onClick={() => setMobileOpen(false)} />
              ))}
              <MobileLink to="/services" label="View All Services" onClick={() => setMobileOpen(false)} />
            </MobileDropdown>

            <MobileLink to="/solutions" label="Solutions" onClick={() => setMobileOpen(false)} />
            
            <MobileDropdown title="Industries">
              {industries.map(i => (
                <MobileLink key={i.slug} to={`/industries/${i.slug}`} label={i.title} onClick={() => setMobileOpen(false)} />
              ))}
              <MobileLink to="/industries" label="View All Industries" onClick={() => setMobileOpen(false)} />
            </MobileDropdown>

            <MobileLink to="/case-studies" label="Projects" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/about" label="About" onClick={() => setMobileOpen(false)} />
            <MobileLink to="/contact" label="Contact" onClick={() => setMobileOpen(false)} />

            <div className="pt-8 mt-4 border-t border-border flex flex-col gap-4">
              <Link 
                to="/contact" 
                className="w-full"
                onClick={() => {
                  trackEvent('cta_start_project', { source: 'mobile_nav' })
                  setMobileOpen(false)
                }}
              >
                <Button size="lg" className="w-full justify-center">
                  Start a Project
                </Button>
              </Link>
              <a 
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer" 
                onClick={() => {
                  trackEvent('cta_whatsapp', { source: 'mobile_nav' })
                  setMobileOpen(false)
                }}
                className="w-full"
              >
                <Button size="lg" variant="secondary" className="w-full justify-center">
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
