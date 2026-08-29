import SEO from '@/components/seo/SEO'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import { industries } from '@/data/industries'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve | Corelane Systems"
        description="Explore technology solutions from Corelane Systems for real estate, law firms, healthcare, e-commerce, professional services, startups, SMEs and growing businesses."
        canonical="/industries"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Industries' }]} light className="mb-8" />
          <h1 className="text-h1 font-bold text-white text-balance mb-6">
            Technology Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Different industries have different workflows, customers and technology requirements. Corelane Systems builds digital solutions around the needs of each business.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div key={industry.slug} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center">
                      <Icon size={24} className={industry.color.replace('text-', 'text-').replace('-500', '-600')} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800">{industry.title}</h2>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                    {industry.description}
                  </p>

                  <div className="mb-8">
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Relevant Solutions</span>
                    <div className="flex flex-wrap gap-2">
                      {industry.relevantServices.slice(0, 3).map((service, i) => (
                        <Badge key={i} variant="slate">{service.title}</Badge>
                      ))}
                      {industry.relevantServices.length > 3 && (
                        <Badge variant="slate">+{industry.relevantServices.length - 3} more</Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <Link to={`/industries/${industry.slug}`}>
                      <Button variant="secondary" className="w-full justify-center">
                        Explore {industry.title}
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
