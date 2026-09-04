import { Target, Code2, Layers, Cloud } from 'lucide-react'

export default function TrustSection() {
  const blocks = [
    {
      icon: Target,
      title: 'Business-Focused',
      desc: 'We map technology directly to your revenue, efficiency, and growth metrics.',
    },
    {
      icon: Code2,
      title: 'Engineering-First',
      desc: 'Clean code, modern architectures, and rigorous testing for long-term stability.',
    },
    {
      icon: Layers,
      title: 'Scalable Solutions',
      desc: 'Systems designed to handle growth without requiring constant rebuilds.',
    },
    {
      icon: Cloud,
      title: 'Modern Technology',
      desc: 'Leveraging top-tier cloud providers and proven modern frameworks.',
    },
  ]

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="container-content">
        <h2 className="text-center text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-12">
          Built Around Your Business Goals
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, i) => {
            const Icon = block.icon
            return (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors duration-300 shadow-sm">
                  <Icon size={28} className="text-slate-600 group-hover:text-teal transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{block.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[250px]">
                  {block.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
