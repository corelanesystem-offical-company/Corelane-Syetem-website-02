import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import Reveal from '@/components/animations/Reveal'
import { services } from '@/data/services'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
}

export default function ServicesSection() {
  return (
    <Section variant="alt">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Capabilities"
            title="What We Build"
            subtitle="Comprehensive engineering services covering the entire software lifecycle, from initial architecture to cloud deployment."
          />
        </Reveal>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => {
            const isTechnical = ['cloud-engineering', 'devops', 'data-engineering'].includes(service.slug)
            
            return (
              <motion.div key={service.slug} variants={itemVariants} className="h-full">
                <Link 
                  to={`/services/${service.slug}`}
                  onClick={() => trackEvent('service_cta_click', { service: service.slug, source: 'home' })}
                  className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl block h-full"
                >
                <Card 
                  className={cn(
                    'h-full p-6 flex flex-col border transition-all duration-300 group-hover:-translate-y-1',
                    isTechnical 
                      ? 'bg-surface-dark border-border-dark hover:border-brand/50' 
                      : 'bg-surface border-border hover:border-brand hover:shadow-card'
                  )}
                >
                  <div className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-6',
                    isTechnical ? 'bg-surface-dark-muted text-brand-light' : 'bg-brand-light text-brand'
                  )}>
                    <service.icon size={24} />
                  </div>
                  
                  <h3 className={cn(
                    'text-lg font-bold mb-3',
                    isTechnical ? 'text-text-inverse' : 'text-text-primary'
                  )}>
                    {service.title}
                  </h3>
                  
                  <p className={cn(
                    'text-sm leading-relaxed mb-6 flex-grow',
                    isTechnical ? 'text-text-muted' : 'text-text-secondary'
                  )}>
                    {service.description}
                  </p>
                  
                  <div className={cn(
                    'flex items-center gap-2 text-sm font-semibold mt-auto',
                    isTechnical ? 'text-brand-accent group-hover:text-white' : 'text-brand group-hover:text-brand-hover'
                  )}>
                    Explore Service
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
