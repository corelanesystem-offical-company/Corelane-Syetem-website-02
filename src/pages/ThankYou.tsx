import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import SEO from '@/components/seo/SEO'
import Button from '@/components/ui/Button'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'

export default function ThankYou() {
  useEffect(() => {
    trackEvent('thank_you_view')

    // Check for pending lead to avoid duplicate conversion fires on reload
    if (sessionStorage.getItem('pending_lead') === 'true') {
      const source = sessionStorage.getItem('pending_lead_source') || 'unknown'
      trackEvent('lead_generated', { source })
      
      // Clear flag to prevent duplicate events
      sessionStorage.removeItem('pending_lead')
      sessionStorage.removeItem('pending_lead_source')
    }
  }, [])

  return (
    <>
      <SEO 
        title="Thank You | Corelane Systems" 
        description="Thank you for reaching out to Corelane Systems. We will be in touch shortly." 
        canonical="/thank-you" 
      />

      <section className="bg-slate-50 min-h-[70vh] flex items-center pt-24 pb-16">
        <div className="container-content text-center max-w-2xl">
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Thank You — We've Received Your Request.
          </h1>
          <p className="text-lg text-slate-600 mb-12">
            Thanks for reaching out to Corelane Systems. We'll review your requirements and get back to you shortly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Return Home
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Services <ArrowRight size={18} />
              </Button>
            </Link>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="bg-[#25D366] hover:bg-[#1EBE55] text-white border-transparent w-full sm:w-auto">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
