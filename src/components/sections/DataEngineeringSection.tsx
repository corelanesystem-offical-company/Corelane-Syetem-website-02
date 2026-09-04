import { Database, Filter, Cpu, Server, LineChart, Target, ArrowDown } from 'lucide-react'

export default function DataEngineeringSection() {
  const steps = [
    { name: 'Data Sources', icon: Database },
    { name: 'ETL / ELT', icon: Filter },
    { name: 'Data Processing', icon: Cpu },
    { name: 'Data Warehouse', icon: Server },
    { name: 'Analytics', icon: LineChart },
    { name: 'Business Decisions', icon: Target },
  ]

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Data Engineering & Analytics
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We design resilient data pipelines and scalable warehouses that turn fragmented information into actionable business intelligence. From raw extraction to visual analytics, we build the infrastructure required for data-driven organizations.
            </p>
            <ul className="space-y-4">
              {['Centralized data warehouses', 'Real-time and batch processing', 'Automated reporting dashboards', 'Secure data governance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative group">
                    <div className="flex items-center gap-6 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-teal/50 hover:shadow-md transition-all">
                      <div className="w-12 h-12 bg-teal/5 rounded-lg border border-teal/10 flex items-center justify-center">
                        <Icon size={24} className="text-teal" />
                      </div>
                      <span className="font-bold text-slate-800 tracking-wide text-sm">{step.name}</span>
                    </div>
                    {/* Connecting line to next item */}
                    {i < steps.length - 1 && (
                      <div className="flex justify-center py-2 text-slate-300">
                        <ArrowDown size={20} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
