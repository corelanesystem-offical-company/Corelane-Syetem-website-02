import { Search, PenTool, Code2, Rocket, RefreshCw } from 'lucide-react'

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'DISCOVER', desc: 'Understand the business.', icon: Search },
    { num: '02', title: 'PLAN', desc: 'Define requirements and architecture.', icon: PenTool },
    { num: '03', title: 'BUILD', desc: 'Develop and test.', icon: Code2 },
    { num: '04', title: 'DEPLOY', desc: 'Launch the solution.', icon: Rocket },
    { num: '05', title: 'IMPROVE', desc: 'Maintain, monitor and optimize.', icon: RefreshCw },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-content">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-20 text-center">
          How We Work
        </h2>
        
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-slate-100" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex flex-col items-center text-center relative group animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  {/* Mobile connecting line */}
                  {i !== 4 && <div className="lg:hidden absolute top-[90px] bottom-[-40px] left-1/2 -translate-x-1/2 w-0.5 bg-slate-100 z-0" />}
                  
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:border-teal/20 transition-colors duration-500">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors duration-500 text-slate-400">
                      <Icon size={24} />
                    </div>
                  </div>
                  
                  <div className="text-teal font-mono text-xs font-bold tracking-widest mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
