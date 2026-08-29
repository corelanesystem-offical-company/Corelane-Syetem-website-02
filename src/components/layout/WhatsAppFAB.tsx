import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/utils/cn'

export default function WhatsAppFAB() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5
        bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl
        px-4 py-3 hover:bg-[#20ba59] transition-all duration-300
        hover:scale-105 active:scale-100 group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={20} className="flex-shrink-0" />
      <span className="text-sm font-medium hidden sm:block">Talk to Us</span>
    </a>
  )
}
