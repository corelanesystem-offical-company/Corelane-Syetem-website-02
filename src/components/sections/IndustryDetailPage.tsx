import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { breadcrumbSchema, faqSchema } from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CTASection from '@/components/sections/CTASection'
import { type Industry } from '@/data/industries'
import { AlertCircle, Lightbulb, CheckCircle2, ChevronDown, Code, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'
import { cn } from '@/utils/cn'

interface IndustryDetailPageProps {
  industry: Industry
}

export default function IndustryDetailPage({ industry }: IndustryDetailPageProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id)

  const Icon = industry.icon

  return (
    <>
      <SEO
        title={industry.metaTitle}
        description={industry.metaDescription}
        canonical={`/industries/${industry.slug}`}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Industries', url: '/industries' },
            { name: industry.title, url: `/industries/${industry.slug}` }
          ]),
          ...(industry.faq.length > 0 ? [faqSchema(industry.faq)] : [])
        ]}
      />

      {/* 1 & 2. Breadcrumb & Hero */}
      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb 
            items={[
              { label: 'Industries', href: '/industries' },
              { label: industry.title }
            ]} 
            light 
            className="mb-8"
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center">
              <Icon size={24} className="text-teal" />
            </div>
            <h1 className="text-h1 font-bold text-white text-balance">{industry.h1}</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {industry.longDescription}
          </p>
          <Link to="/contact" onClick={() => trackEvent('industry_cta_click', { industry: industry.title, location: 'hero' })}>
            <Button size="lg" className="mt-4">
              Discuss Your {industry.title} Project
            </Button>
          </Link>
        </div>
      </section>

      {/* 3 & 4. Industry Challenges & Digital Opportunities */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Industry Challenges</h2>
              <div className="space-y-4">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4">
                    <AlertCircle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{challenge.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{challenge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Digital Opportunities</h2>
              <div className="space-y-4">
                {industry.opportunities.map((opp, i) => (
                  <div key={i} className="bg-teal-50/50 p-5 rounded-xl border border-teal-100 flex gap-4">
                    <Lightbulb className="text-teal flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{opp.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{opp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="py-12 bg-navy border-y border-navy-800">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have a {industry.title.toLowerCase()} technology requirement?</h2>
          <Link to="/contact" onClick={() => trackEvent('industry_cta_click', { industry: industry.title, location: 'midpage' })}>
            <Button variant="secondary" size="md" className="border-teal text-teal hover:bg-teal hover:text-white">
              Discuss Your {industry.title} Project
            </Button>
          </Link>
        </div>
      </section>

      {/* 6. Example solutions */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-5xl">
          <SectionHeader title="Example Solutions" subtitle={`Technology Corelane Systems can build for ${industry.title.toLowerCase()} businesses.`} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.exampleSolutions.map((solution, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4">
                <CheckCircle2 className="text-teal flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{solution.title}</h3>
                  <p className="text-sm text-slate-600">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 8. Relevant Services & Technology Capabilities */}
      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Tech Stack */}
            <div className="bg-navy rounded-2xl p-8 md:p-12 text-center text-white">
              <Code size={40} className="text-teal mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-6">Recommended Technologies</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {industry.techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-navy-700 rounded-lg text-sm font-medium border border-navy-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Relevant Services */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Relevant Services</h2>
              <p className="text-slate-600 mb-8">
                We combine business understanding with technical expertise. Here are the core services we provide to this industry:
              </p>
              <div className="flex flex-col gap-3">
                {industry.relevantServices.map((service, i) => (
                  <Link key={i} to={`/services/${service.slug}`} className="group block">
                    <div className="bg-white border border-slate-200 px-5 py-4 rounded-xl flex items-center justify-between group-hover:border-teal transition-colors shadow-sm">
                      <span className="font-semibold text-slate-700 group-hover:text-teal">{service.title}</span>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-teal transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      {industry.faq && industry.faq.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-content max-w-3xl">
            <SectionHeader title="Frequently Asked Questions" />
            <div className="space-y-3">
              {industry.faq.map((faq, index) => {
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
        title={`Looking to improve your ${industry.title.toLowerCase()}'s digital experience?`}
        subtitle="Let's discuss a solution built around your business requirements."
      />
    </>
  )
}
