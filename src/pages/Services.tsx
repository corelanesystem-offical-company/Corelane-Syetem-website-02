import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Cloud, Database, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/data/services'
import { trackEvent } from '@/utils/analytics'
import CTASection from '@/components/sections/CTASection'
import Reveal from '@/components/animations/Reveal'
import Parallax from '@/components/animations/Parallax'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Engineering Services | Corelane Systems</title>
        <meta name="description" content="Corelane Systems provides custom software development, web applications, cloud engineering, and data solutions for growing businesses." />
        <link rel="canonical" href="https://corelanesystems.com/services" />
      </Helmet>

      {/* Hero */}
      <Section variant="dark" className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border-dark bg-surface-dark relative overflow-hidden">
        {/* Subtle grid background with Parallax */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <Parallax speed={0.4} className="w-full h-[120%] -mt-[10%]">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px]" />
          </Parallax>
        </div>
        
        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <p className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4">
              Our Capabilities
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-display font-bold text-text-inverse mb-6 text-balance">
              Technology solutions engineered for business impact.
            </h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We design, build, and operate custom software, web platforms, and cloud infrastructure that help ambitious companies automate operations and scale.
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                onClick={() => trackEvent('cta_start_project', { source: 'services_hero' })}
                className="w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-lg"
              >
                <Button size="lg" className="w-full bg-brand hover:bg-brand-hover text-white">
                  Start a Project
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Featured Engineering Disciplines */}
      <Section variant="muted" className="border-b border-border">
        <Container>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {[
              { icon: Code2, title: 'Software Engineering', desc: 'Custom web applications, business portals, and robust backend systems built for your exact operational requirements.' },
              { icon: Cloud, title: 'Cloud & DevOps', desc: 'Scalable AWS/Azure infrastructure, automated CI/CD pipelines, and reliable containerized deployments.' },
              { icon: Database, title: 'Data Solutions', desc: 'Data warehouses, automated ETL pipelines, and business intelligence dashboards for operational clarity.' },
              { icon: Cpu, title: 'Business Automation', desc: 'API integrations and custom middleware that eliminate manual data entry across disparate SaaS systems.' }
            ].map((discipline, i) => (
              <motion.div key={i} variants={fadeUpItem} className="bg-surface p-6 rounded-xl border border-border shadow-sm">
                <discipline.icon size={24} className="text-brand mb-4" />
                <h3 className="font-bold text-text-primary mb-2">{discipline.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{discipline.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Full Services Grid */}
      <Section variant="default">
        <Container>
          <Reveal>
            <SectionHeader
              align="left"
              title="Comprehensive Services"
              subtitle="Explore our specialized engineering and development capabilities."
              className="mb-12"
            />
          </Reveal>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {services.map((service) => (
              <motion.div key={service.slug} variants={fadeUpItem} className="h-full">
                <Link 
                  to={`/services/${service.slug}`}
                  onClick={() => trackEvent('service_cta_click', { service: service.slug, source: 'services_index' })}
                  className="group flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-2xl"
                >
                  <div className="bg-surface-alt border border-border rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-300 group-hover:bg-surface group-hover:border-brand group-hover:shadow-card">
                    <div className="w-12 h-12 bg-brand-light text-brand rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="text-sm font-semibold text-brand flex items-center gap-2 mt-auto">
                      View Capabilities
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <CTASection 
        title="Ready to engineer your solution?"
        subtitle="Let's discuss your technical requirements and business objectives."
      />
    </>
  )
}
