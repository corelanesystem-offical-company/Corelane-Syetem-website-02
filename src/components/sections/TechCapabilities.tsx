import SectionHeader from '@/components/ui/SectionHeader'
import { techCategories } from '@/data/techStack'

export default function TechCapabilities() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="tech-heading">
      <div className="container-content">
        <SectionHeader
          eyebrow="Technology capabilities"
          title="Our Technology Stack"
          subtitle="We work with the technologies that make the most sense for your requirements — not the ones we happen to prefer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-card"
            >
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg
                      border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
