import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand business requirements, constraints, and objectives.'
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Define architecture, technology stack, scope, and execution approach.'
    },
    {
      num: '03',
      title: 'Build',
      desc: 'Develop the solution iteratively with clean, maintainable engineering.'
    },
    {
      num: '04',
      title: 'Test',
      desc: 'Validate functionality, performance, and security across environments.'
    },
    {
      num: '05',
      title: 'Deploy',
      desc: 'Ship the solution to production with automated CI/CD pipelines.'
    },
    {
      num: '06',
      title: 'Improve',
      desc: 'Monitor, support, and scale the infrastructure as the business grows.'
    }
  ]

  return (
    <Section variant="alt" className="border-y border-border">
      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="How we execute."
          subtitle="A disciplined engineering process designed to eliminate risks, ensure quality, and deliver working software predictably."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="bg-surface p-6 rounded-2xl border border-border shadow-sm hover:shadow-card transition-shadow">
              <div className="text-3xl font-black text-brand-light mb-4 font-mono">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
