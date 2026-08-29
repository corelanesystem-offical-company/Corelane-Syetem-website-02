import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { serviceSchema, breadcrumbSchema, faqSchema } from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { type Service } from '@/data/services'
import { trackEvent } from '@/utils/analytics'
import { AlertCircle, CheckCircle2, ChevronDown, Code, Map, ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ServiceDetailPageProps {
  service: Service
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id)

  const Icon = service.icon

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}`}
        jsonLd={[
          serviceSchema(service.title, service.description, `/services/${service.slug}`),
          breadcrumbSchema([
            { name: 'Services', url: '/services' },
            { name: service.title, url: `/services/${service.slug}` }
          ]),
          ...(service.faq.length > 0 ? [faqSchema(service.faq)] : [])
        ]}
      />

      {/* 1 & 2. Breadcrumb & Hero */}
      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title }
            ]} 
            light 
            className="mb-8"
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center">
              <Icon size={24} className="text-teal" />
            </div>
            <h1 className="text-h1 font-bold text-white text-balance">{service.h1}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {service.longDescription}
          </p>
          <Link to="/contact" onClick={() => trackEvent('service_cta_click', { service: service.title, location: 'hero' })}>
            <Button size="lg" className="mt-4">
              Discuss Your {service.title}
            </Button>
          </Link>
        </div>
      </section>

      {/* 3. Business Problem */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-5xl">
          <SectionHeader title="The Business Challenge" subtitle="The common issues our clients face before working with us." align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.problems.map((prob, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 flex gap-4">
                <AlertCircle className="text-amber-500 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{prob.title}</h3>
                  <p className="text-sm text-slate-600">{prob.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-12 bg-navy border-y border-navy-800">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a specific {service.title.toLowerCase()} requirement?</h2>
          <Link to="/contact" onClick={() => trackEvent('service_cta_click', { service: service.title, location: 'midpage' })}>
            <Button variant="secondary" size="md" className="border-teal text-teal hover:bg-teal hover:text-white">
              Talk to Our Team
            </Button>
          </Link>
        </div>
      </section>

      {/* 4 & 5. What we provide & Features/capabilities */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">What We Provide</h2>
              <ul className="space-y-4">
                {service.whatWeProvide.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Capabilities</h2>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <Badge key={i} variant="teal">{feature}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who this service is for */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-4xl text-center">
          <SectionHeader title="Who is this for?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.whoItsFor.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our process */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-5xl">
          <SectionHeader title="Our Process" subtitle="How we deliver from start to finish." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-teal font-bold mb-2">0{i + 1} — {step.title}</div>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technology capabilities */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-4xl">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center text-white">
            <Code size={40} className="text-teal mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.techStack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-navy-700 rounded-lg text-sm font-medium border border-navy-600">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Related services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-content max-w-5xl text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.relatedServices.map((rel, i) => (
                <Link key={i} to={`/services/${rel.slug}`} className="group">
                  <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-xl flex items-center gap-3 group-hover:border-teal transition-colors">
                    <span className="font-semibold text-slate-700 group-hover:text-teal">{rel.title}</span>
                    <ArrowRight size={16} className="text-slate-400 group-hover:text-teal" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-content max-w-3xl">
            <SectionHeader title="Frequently Asked Questions" />
            <div className="space-y-3">
              {service.faq.map((faq, index) => {
                const id = `faq-${index}`
                const isOpen = openFaqId === id
                return (
                  <div key={id} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
                    <button
                      onClick={() => toggleFaq(id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-slate-800 text-sm">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={cn('text-slate-400 transition-transform', isOpen && 'rotate-180 text-teal')}
                      />
                    </button>
                    <div className={cn('overflow-hidden transition-all', isOpen ? 'max-h-96' : 'max-h-0')}>
                      <p className="px-5 pb-5 text-sm text-slate-600">{faq.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 11. CTA */}
      <CTASection 
        title="Ready to Discuss Your Project?"
        subtitle="Tell us about your business challenge and let's discuss the right technology approach."
      />
    </>
  )
}
