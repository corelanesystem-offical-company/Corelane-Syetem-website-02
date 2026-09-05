import { CheckCircle } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'

export default function WhyCorelaneSection() {
  const principles = [
    {
      title: 'Engineering-first thinking',
      desc: 'We don\'t just write code; we design scalable architectures that solve actual business problems.'
    },
    {
      title: 'Business-aware solutions',
      desc: 'Technology is only valuable if it drives revenue, reduces costs, or improves operational efficiency.'
    },
    {
      title: 'Practical architecture',
      desc: 'We avoid over-engineering. We use the right tool for the job, prioritizing reliability and maintainability.'
    },
    {
      title: 'Scalable foundations',
      desc: 'Our systems are built to grow with your business, handling increased loads without requiring constant rewrites.'
    }
  ]

  return (
    <Section variant="default">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why partner with Corelane?
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              We bridge the gap between complex software engineering and practical business execution. 
              Our focus is entirely on building reliable technology that you can depend on.
            </p>
            
            <div className="space-y-6">
              {principles.map((p, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-brand shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{p.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual abstract representation */}
          <div className="hidden lg:block">
            <div className="bg-surface-alt rounded-2xl p-8 border border-border shadow-sm h-full flex flex-col justify-center gap-6">
              <div className="flex gap-4">
                <div className="h-2 flex-1 bg-brand rounded-full opacity-20" />
                <div className="h-2 flex-[2] bg-brand rounded-full" />
              </div>
              <div className="flex gap-4">
                <div className="h-2 flex-[2] bg-text-muted rounded-full opacity-20" />
                <div className="h-2 flex-1 bg-text-muted rounded-full opacity-40" />
                <div className="h-2 flex-[1] bg-text-muted rounded-full opacity-60" />
              </div>
              <div className="flex gap-4">
                <div className="h-2 flex-1 bg-brand rounded-full" />
                <div className="h-2 flex-1 bg-brand rounded-full opacity-40" />
              </div>
              <div className="h-2 w-3/4 bg-text-muted rounded-full opacity-30 mt-4" />
              <div className="h-2 w-1/2 bg-text-muted rounded-full opacity-20" />
            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
