import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import { CONTACT } from '@/utils/cn'
import { trackEvent } from '@/utils/analytics'

export default function FinalCTASection() {
  return (
    <Section variant="dark" className="bg-surface-dark border-t border-border-dark py-24 md:py-32">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-text-inverse mb-6 text-balance">
            Have a software or technology challenge?
          </h2>
          
          <p className="text-lg md:text-xl text-text-muted mb-10 text-balance leading-relaxed">
            Let's discuss what you're trying to build, improve, automate, or scale. 
            Our engineering team is ready to help you scope your project.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              onClick={() => trackEvent('cta_start_project', { source: 'home_final_cta' })}
              className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
            >
              <Button size="lg" className="w-full bg-brand hover:bg-brand-hover text-white">
                Start a Project
                <ArrowRight size={18} />
              </Button>
            </Link>
            
            <a 
              href={CONTACT.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_whatsapp', { source: 'home_final_cta' })}
              className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
            >
              <Button variant="dark" size="lg" className="w-full border-border-dark hover:bg-surface-dark-muted">
                <MessageCircle size={18} />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
