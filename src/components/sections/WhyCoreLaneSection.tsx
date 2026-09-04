import { Briefcase, Code, Network, Cloud, MessageSquare, Wrench, Handshake } from 'lucide-react'

export default function WhyCoreLaneSection() {
  const reasons = [
    { title: 'Business-First Thinking', icon: Briefcase, desc: 'We align our engineering decisions with your revenue and operational goals.' },
    { title: 'Engineering Excellence', icon: Code, desc: 'Clean, maintainable, and rigorously tested code that acts as an asset.' },
    { title: 'Scalable Architecture', icon: Network, desc: 'Systems designed to grow with your user base without expensive rebuilds.' },
    { title: 'Modern Cloud Practices', icon: Cloud, desc: 'Secure, high-availability deployments leveraging top-tier cloud infrastructure.' },
    { title: 'Transparent Communication', icon: MessageSquare, desc: 'No technical jargon. Clear updates, predictable timelines, and absolute honesty.' },
    { title: 'Practical Solutions', icon: Wrench, desc: 'We do not over-engineer. We build exactly what solves the problem efficiently.' },
    { title: 'Long-Term Partnership', icon: Handshake, desc: 'We act as your dedicated engineering arm, supporting your long-term roadmap.' },
  ]

  return (
    <section className="py-24 bg-teal-50/50 border-b border-slate-200">
      <div className="container-content">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">
          Why Businesses Choose Corelane Systems
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div key={i} className="flex-auto min-w-[280px] max-w-[380px] bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:border-teal/50 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-teal" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
