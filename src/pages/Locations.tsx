import SEO from '@/components/seo/SEO'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import { locations } from '@/data/locations'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Locations() {
  return (
    <>
      <SEO
        title="International Software Development Services | Corelane Systems"
        description="Corelane Systems provides software development, cloud engineering, and digital solutions for businesses in Pakistan, UAE, UK, USA, and Canada."
        canonical="/locations"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Locations' }]} light className="mb-8" />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center">
              <Globe size={24} className="text-teal" />
            </div>
            <h1 className="text-h1 font-bold text-white text-balance">
              Software Development & Cloud Engineering Services
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Corelane Systems works with businesses in Pakistan and international markets to build modern software, web applications, cloud infrastructure, DevOps and data solutions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl" aria-hidden="true">{location.flag}</div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">{location.country}</h2>
                    <span className="text-sm font-medium text-slate-500">{location.region}</span>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                  {location.tagline}
                </p>

                <div>
                  <Link to={`/locations/${location.slug}`}>
                    <Button variant="secondary" className="w-full justify-center">
                      View {location.country} Services
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Have a project in mind?"
        subtitle="Let's discuss your business and technology requirements."
      />
    </>
  )
}
