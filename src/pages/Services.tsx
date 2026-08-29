import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import { services } from '@/data/services'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Services() {
  return (
    <>
      <SEO
        title="Software Development & Cloud Engineering Services | Corelane Systems"
        description="Explore Corelane Systems services including web development, web applications, custom software, cloud engineering, DevOps, data engineering, analytics and automation."
        canonical="/services"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Services' }]} light className="mb-8" />
          <h1 className="text-h1 font-bold text-white text-balance mb-6">
            Technology Solutions Built Around Your Business
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            From websites and web applications to cloud infrastructure, DevOps and data solutions, Corelane Systems helps businesses turn technology requirements into practical digital solutions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.slug} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-teal" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">{service.title}</h2>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-5 mb-6 flex-1">
                    <div className="mb-4">
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Problem</span>
                      <span className="text-sm text-slate-700">{service.businessProblem}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-teal uppercase tracking-wider mb-1">Solution</span>
                      <span className="text-sm text-slate-800 font-medium">{service.solution}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="secondary" className="w-full justify-center">
                        Explore Service
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
