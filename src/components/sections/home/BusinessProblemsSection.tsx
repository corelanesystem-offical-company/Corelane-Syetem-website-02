import { ServerCrash, FileSpreadsheet, Unplug, LayoutGrid, CheckCircle2 } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'

export default function BusinessProblemsSection() {
  const problems = [
    { title: 'Disconnected systems', icon: Unplug },
    { title: 'Manual workflows', icon: FileSpreadsheet },
    { title: 'Slow or unreliable applications', icon: ServerCrash },
    { title: 'Infrastructure complexity', icon: LayoutGrid },
  ]

  const approach = [
    'Software',
    'Automation',
    'Cloud',
    'Data',
    'Integration'
  ]

  return (
    <Section variant="default">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Problems */}
          <div>
            <SectionHeader
              align="left"
              title="Technology shouldn't hold your business back."
              subtitle="Growing businesses eventually hit a ceiling when their tools stop scaling with their operations."
              className="mb-8"
            />
            
            <div className="space-y-4">
              {problems.map((prob, i) => (
                <div key={i} className="flex items-center gap-4 bg-surface-alt p-4 rounded-xl border border-border">
                  <div className="w-10 h-10 bg-surface rounded-lg border border-border shadow-sm flex items-center justify-center shrink-0">
                    <prob.icon size={20} className="text-text-muted" />
                  </div>
                  <span className="font-semibold text-text-primary">{prob.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="bg-surface-dark rounded-2xl p-8 md:p-12 border border-border-dark shadow-elevated">
            <h3 className="text-xl font-bold text-text-inverse mb-3">The Corelane Approach</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              We replace fragmented tools and manual processes with unified, automated, and scalable engineering solutions.
            </p>
            
            <div className="space-y-4">
              {approach.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                  <span className="text-text-inverse font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
