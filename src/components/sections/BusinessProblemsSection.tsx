import { ArrowRight, Globe, Layers, Link as LinkIcon, Cloud, Database, BarChart } from 'lucide-react'

export default function BusinessProblemsSection() {
  const problems = [
    {
      before: "Outdated Digital Presence",
      after: "Modern Business Website",
      icon: Globe
    },
    {
      before: "Manual Workflows",
      after: "Business Automation",
      icon: Layers
    },
    {
      before: "Disconnected Systems",
      after: "API Integration",
      icon: LinkIcon
    },
    {
      before: "Scaling Challenges",
      after: "Cloud Engineering",
      icon: Cloud
    },
    {
      before: "Data Complexity",
      after: "Data Engineering",
      icon: Database
    },
    {
      before: "Guesswork Decisions",
      after: "Data Analytics",
      icon: BarChart
    }
  ]

  return (
    <section className="py-24 bg-teal-50/50 overflow-hidden border-b border-slate-200">
      <div className="container-content">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Technology That Solves Real Business Problems
          </h2>
          <p className="text-lg text-slate-600">
            We don't build software just for the sake of writing code. We engineer systems that eliminate bottlenecks, reduce overhead, and scale operations securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, i) => {
            const Icon = prob.icon
            return (
              <div key={i} className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 relative overflow-hidden group hover:border-teal hover:shadow-md transition-all">
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  <Icon size={120} className="text-teal" />
                </div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="text-sm font-bold text-slate-500 tracking-wide mb-4">
                    {prob.before}
                  </div>
                  
                  <div className="my-2">
                    <ArrowRight size={20} className="text-teal" />
                  </div>
                  
                  <div className="text-xl font-bold text-slate-900 mt-4 group-hover:text-teal transition-colors">
                    {prob.after}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
