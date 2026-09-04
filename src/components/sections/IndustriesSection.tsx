import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/data/industries'

export default function IndustriesSection() {
  // Only display the first 6 to keep it clean on homepage, or slice if there are more
  const displayIndustries = industries.slice(0, 8)

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Technology Solutions Across Industries
            </h2>
            <p className="text-lg text-slate-600">
              Different industries have different workflows and technology requirements. We build digital solutions designed around the specific needs of your business model.
            </p>
          </div>
          <Link to="/industries" className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors whitespace-nowrap">
            View All Industries <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayIndustries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <Link 
                key={ind.slug} 
                to={`/industries/${ind.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center group-hover:bg-teal group-hover:border-teal-dark transition-colors">
                    <Icon size={24} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal transition-colors">
                    {ind.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {ind.description}
                </p>

                <div className="mt-auto">
                  <div className="w-full h-px bg-slate-100 mb-4" />
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-900 group-hover:text-teal transition-colors">
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
