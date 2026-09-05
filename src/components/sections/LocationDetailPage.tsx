import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { breadcrumbSchema, faqSchema, organizationSchema } from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { type Location, locations } from '@/data/locations'
import { ChevronDown, ArrowRight, Lightbulb, MapPin, CheckCircle2 } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'
import { cn, SITE_URL } from '@/utils/cn'
import { Helmet } from 'react-helmet-async'

interface LocationDetailPageProps {
  location: Location
}

const remoteProcessSteps = [
  { title: 'Discovery Call', desc: 'Understand the business, goals and requirements.' },
  { title: 'Scope & Proposal', desc: 'Define project scope, deliverables and timeline.' },
  { title: 'Design & Development', desc: 'Build the agreed solution.' },
  { title: 'Testing', desc: 'Review functionality and quality.' },
  { title: 'Deployment', desc: 'Deploy the solution to the appropriate environment.' },
  { title: 'Ongoing Support', desc: 'Discuss maintenance and future improvements where required.' },
]

export default function LocationDetailPage({ location }: LocationDetailPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id)

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`/locations/${location.slug}`}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Locations', url: '/locations' },
            { name: location.country, url: `/locations/${location.slug}` }
          ]),
          ...(location.faq.length > 0 ? [faqSchema(location.faq)] : [])
        ]}
      />
      
      {/* Hreflang Tags */}
      <Helmet>
        {locations.map((loc) => (
          <link key={loc.hreflang} rel="alternate" hrefLang={loc.hreflang} href={`${SITE_URL}/locations/${loc.slug}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/locations`} />
      </Helmet>

      {/* 1. Hero */}
      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb 
            items={[
              { label: 'Locations', href: '/locations' },
              { label: location.country }
            ]} 
            light 
            className="mb-8"
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl" aria-hidden="true">{location.flag}</div>
            <h1 className="text-h1 font-bold text-white text-balance">{location.h1}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {location.intro}
          </p>
          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            {location.marketContext}
          </p>
        </div>
      </section>

      {/* 2. Why businesses need digital solutions */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-5xl">
          <SectionHeader title="Why Digital Solutions Matter" subtitle={`How technology drives growth for businesses in ${location.country}.`} align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {location.whyDigital.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3">
                <Lightbulb className="text-teal" size={24} />
                <h3 className="font-semibold text-slate-800 text-lg">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. Corelane services & Industry solutions */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Corelane Services</h2>
              <p className="text-slate-600 mb-8">
                Professional engineering services tailored to your business needs.
              </p>
              <div className="flex flex-col gap-3">
                {location.relevantServices.map((service, i) => (
                  <Link key={i} to={`/services/${service.slug}`} className="group block">
                    <div className="bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl flex items-center justify-between group-hover:border-teal transition-colors">
                      <span className="font-semibold text-slate-700 group-hover:text-teal">{service.title}</span>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-teal transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Industry Solutions</h2>
              <p className="text-slate-600 mb-8">
                Technology solutions built for specific industry workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {location.industries.map((ind, i) => (
                  <Link key={i} to={`/industries/${ind.slug}`} className="group">
                    <Badge variant="default" className="px-4 py-2.5 text-sm hover:bg-teal hover:text-white hover:border-teal transition-colors flex items-center gap-2">
                      {ind.title}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5 & 6. How We Work With International Businesses (Project Process) */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How We Work With International Businesses</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our remote collaboration framework ensures clear communication, structured delivery, and high-quality results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remoteProcessSteps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="text-teal font-bold mb-3 font-mono text-sm">0{i + 1}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      {location.faq && location.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-content max-w-3xl">
            <SectionHeader title="Frequently Asked Questions" />
            <div className="space-y-3">
              {location.faq.map((faq, index) => {
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

      {/* 8. CTA */}
      <CTASection 
        title={`Discuss Your Project in ${location.country}`}
        subtitle="Let's discuss your business and technology requirements."
      />
    </>
  )
}
