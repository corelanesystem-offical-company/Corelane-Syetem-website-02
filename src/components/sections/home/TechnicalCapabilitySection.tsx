import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TechnicalCapabilitySection() {
  const categories = [
    {
      name: 'Frontend',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js']
    },
    {
      name: 'Backend & APIs',
      techs: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Python']
    },
    {
      name: 'Infrastructure & DevOps',
      techs: ['AWS', 'Docker', 'CI/CD Pipelines', 'Linux', 'Nginx']
    },
    {
      name: 'Data & Databases',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Data Warehousing']
    }
  ]

  return (
    <Section variant="dark" className="bg-surface-dark py-24 border-y border-border-dark">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeader
              align="left"
              light
              eyebrow="Technology Stack"
              title="Modern, scalable engineering."
              subtitle="We build on proven, enterprise-grade technologies to ensure your systems are secure, performant, and maintainable for the long term."
              className="mb-8"
            />
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {categories.map((cat, i) => (
                <div key={i}>
                  <h4 className="text-sm font-bold text-text-inverse uppercase tracking-widest mb-4 border-b border-border-dark pb-2">
                    {cat.name}
                  </h4>
                  <ul className="space-y-2.5">
                    {cat.techs.map((tech, j) => (
                      <li key={j} className="text-text-muted text-sm font-medium flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-accent rounded-full shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Architecture Visual */}
          <div className="hidden lg:block bg-surface-dark-muted rounded-2xl p-8 border border-border-dark relative overflow-hidden">
            {/* Visual background lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            <div className="relative z-10 flex flex-col gap-6">
              {/* Layer 1: Client/Frontend */}
              <div className="flex gap-4">
                <div className="flex-1 bg-surface-dark border border-brand/30 rounded-lg p-4 text-center">
                  <span className="text-xs font-bold text-text-inverse uppercase tracking-wider">Client Interface</span>
                </div>
                <div className="flex-1 bg-surface-dark border border-brand/30 rounded-lg p-4 text-center">
                  <span className="text-xs font-bold text-text-inverse uppercase tracking-wider">Mobile Web</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="w-px h-6 bg-brand-accent mx-auto" />

              {/* Layer 2: API Gateway */}
              <div className="bg-brand/10 border border-brand/40 rounded-lg p-4 text-center">
                <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">API Gateway & Load Balancing</span>
              </div>

              {/* Arrow */}
              <div className="w-px h-6 bg-brand-accent mx-auto" />

              {/* Layer 3: Services */}
              <div className="flex gap-4">
                <div className="flex-1 bg-surface-dark border border-border-dark rounded-lg p-4 text-center">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Auth Service</span>
                </div>
                <div className="flex-[2] bg-surface-dark border border-border-dark rounded-lg p-4 text-center">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Core Logic Services</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="w-px h-6 bg-brand-accent mx-auto" />

              {/* Layer 4: Data */}
              <div className="flex gap-4">
                <div className="flex-1 bg-surface-dark border border-border-dark rounded-lg p-4 text-center flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-text-muted flex items-center justify-center">
                    <span className="text-[10px] text-text-muted">SQL</span>
                  </div>
                </div>
                <div className="flex-1 bg-surface-dark border border-border-dark rounded-lg p-4 text-center flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-text-muted flex items-center justify-center">
                    <span className="text-[10px] text-text-muted">NoSQL</span>
                  </div>
                </div>
                <div className="flex-1 bg-surface-dark border border-border-dark rounded-lg p-4 text-center flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-text-muted flex items-center justify-center">
                    <span className="text-[10px] text-text-muted">Cache</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
