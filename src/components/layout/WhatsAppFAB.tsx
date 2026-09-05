import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

export default function WhatsAppFAB() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      className={cn(
        'fixed bottom-6 right-6 z-[60] transition-all duration-300',
        scrolled ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      )}
    >
      <div className="relative group flex items-center">
        {/* Tooltip for desktop */}
        <div className="absolute right-full mr-4 bg-surface-dark text-text-inverse text-sm font-medium py-2 px-4 rounded-lg shadow-elevated opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 hidden md:block whitespace-nowrap">
          Chat with our engineering team
          <div className="absolute top-1/2 left-full -translate-y-1/2 -ml-[1px] border-4 border-transparent border-l-surface-dark" />
        </div>

        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('cta_whatsapp', { source: 'floating_button' })}
          className="flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-card hover:shadow-elevated hover:scale-105 active:scale-95 transition-all duration-300 w-14 h-14 sm:w-auto sm:h-12 sm:px-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          aria-label="Chat with us on WhatsApp"
          title="WhatsApp Us"
        >
          <MessageCircle size={24} className="flex-shrink-0" />
          <span className="text-sm font-bold ml-2 hidden sm:block tracking-wide">WhatsApp Us</span>
        </a>
      </div>
    </div>
  )
}
