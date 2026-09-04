import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/utils/cn'

export default function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] group flex items-center">
      {/* Tooltip for desktop */}
      <div className="absolute right-full mr-3 bg-navy-800 text-white text-xs font-medium py-1.5 px-3 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 hidden sm:block whitespace-nowrap">
        Talk to our engineering team
      </div>

      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.3)] 
          hover:shadow-[0_8px_30px_rgb(37,211,102,0.5)] transition-all duration-300 
          w-14 h-14 sm:w-auto sm:h-12 sm:px-5 hover:-translate-y-1"
        aria-label="Chat with us on WhatsApp"
        title="WhatsApp Us"
      >
        <MessageCircle size={24} className="flex-shrink-0" />
        <span className="text-sm font-semibold ml-2 hidden sm:block tracking-wide">WhatsApp Us</span>
      </a>
    </div>
  )
}
