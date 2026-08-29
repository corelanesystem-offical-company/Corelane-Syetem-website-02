import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, X } from 'lucide-react'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'

export default function FloatingActions() {
  const [showSticky, setShowSticky] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating WhatsApp Button (All Screens) */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <div className="relative group">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cta_whatsapp', { source: 'floating_button' })}
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            aria-label="WhatsApp Us"
          >
            <MessageCircle size={28} />
          </a>
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1.5 bg-navy text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity hidden md:block">
            Chat with our engineering team
            <div className="absolute top-1/2 left-full -translate-y-1/2 -ml-[1px] border-4 border-transparent border-l-navy" />
          </div>
        </div>
      </div>
    </>
  )
}
