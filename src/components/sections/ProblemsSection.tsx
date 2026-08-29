import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { problems } from '@/data/problems'

export default function ProblemsSection() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="problems-heading">
      <div className="container-content">
        <SectionHeader
          eyebrow="Why businesses choose us"
          title="Technology Should Solve Business Problems."
          subtitle="Businesses need technology that fits their workflows, customers, and goals—not technology for the sake of technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.id}
                className="group bg-white rounded-xl p-6 border border-slate-200 shadow-card
                  hover:shadow-card-hover hover:border-teal-100 transition-all duration-300"
              >
                {/* Problem */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-800 leading-snug">
                    {problem.problem}
                  </h3>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  {problem.description}
                </p>

                {/* Divider */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm text-teal-dark font-medium leading-relaxed mb-3">
                    → {problem.solution}
                  </p>
                  <Link
                    to={`/services/${problem.serviceSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal
                      hover:text-teal-dark transition-colors duration-200"
                  >
                    {problem.service}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
