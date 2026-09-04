import { UserCircle, GitBranch, Settings, Box, Cloud, Monitor, Activity, ArrowRight } from 'lucide-react'

export default function CloudDevopsSection() {
  const pipeline = [
    { name: 'Developer', icon: UserCircle },
    { name: 'Git', icon: GitBranch },
    { name: 'CI/CD', icon: Settings },
    { name: 'Docker', icon: Box },
    { name: 'Cloud Infrastructure', icon: Cloud },
    { name: 'Application', icon: Monitor },
    { name: 'Monitoring', icon: Activity },
  ]

  return (
    <section className="py-24 bg-navy border-t border-navy-700 overflow-hidden">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build, Deploy & Scale With Confidence
          </h2>
          <p className="text-lg text-slate-400">
            We implement rigorous DevOps practices, automated testing, and scalable cloud architectures to ensure your application remains fast, secure, and highly available.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:flex items-center justify-between relative z-10">
            {pipeline.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex flex-col items-center group relative">
                  <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:bg-teal/10 group-hover:border-teal/30 group-hover:shadow-[0_0_20px_rgb(15,118,110,0.3)] transition-all duration-300">
                    <Icon size={24} className="text-slate-300 group-hover:text-teal transition-colors" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center group-hover:text-white transition-colors">
                    {step.name}
                  </div>
                  
                  {/* Arrow to next item */}
                  {i < pipeline.length - 1 && (
                    <div className="absolute top-8 left-[100%] ml-4 text-slate-700 -translate-y-1/2">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile view */}
          <div className="lg:hidden flex flex-col gap-4">
            {pipeline.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="flex items-center gap-4 bg-slate-800 border border-slate-700 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                    <Icon size={20} className="text-teal" />
                  </div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">
                    {step.name}
                  </div>
                  {i < pipeline.length - 1 && (
                    <ArrowRight size={16} className="text-slate-500 ml-auto" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
