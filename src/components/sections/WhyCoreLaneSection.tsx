import SectionHeader from '@/components/ui/SectionHeader'
import { CheckCircle2 } from 'lucide-react'

export default function WhyCoreLaneSection() {
  const valuePoints = [
    {
      title: 'Business-first thinking',
      description: 'We focus on solving your actual business challenges and driving measurable results.',
    },
    {
      title: 'Modern engineering practices',
      description: 'We build using the latest frameworks, robust testing, and clean architecture principles.',
    },
    {
      title: 'Scalable technology foundations',
      description: 'Our solutions are engineered to grow with your user base and data volume seamlessly.',
    },
    {
      title: 'One technology partner',
      description: 'We bring together Software Development, UI/UX, Cloud, DevOps, and Data under one roof.',
    },
  ]

  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <SectionHeader
              eyebrow="Why Corelane Systems"
              title="More Than a Development Team."
              subtitle="Corelane Systems brings together Software Development, UI/UX, Cloud, DevOps, and Data."
              align="left"
            />

            <ul className="space-y-6">
              {valuePoints.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={20} className="text-teal" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Visual block */}
          <div className="bg-navy rounded-2xl p-8 lg:p-10 flex flex-col justify-center h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-16 bg-teal rounded-full" />
              <blockquote className="text-white text-xl md:text-2xl font-bold leading-snug">
                "We don't just build software. We solve business problems with technology."
              </blockquote>
            </div>

            <p className="text-slate-400 leading-relaxed text-lg">
              Every project starts with understanding your actual business challenge. We design technology solutions around your goals, not the other way around. From architecture to deployment, we ensure our work drives your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
