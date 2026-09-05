import { Code2, Cloud, Database, Cpu } from 'lucide-react'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import { Card, CardContent } from '@/components/ui/Card'

export default function TrustSection() {
  const capabilities = [
    { title: 'Software Engineering', icon: Code2 },
    { title: 'Cloud & DevOps', icon: Cloud },
    { title: 'Data Engineering', icon: Database },
    { title: 'Business Automation', icon: Cpu },
  ]

  return (
    <Section variant="muted" className="py-12 md:py-16 border-t border-border">
      <Container>
        <p className="text-center text-text-secondary font-medium text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          From custom software to cloud infrastructure, we build and operate technology systems for ambitious businesses.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <Card key={i} className="bg-surface border-transparent shadow-sm hover:shadow-card transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center text-brand">
                  <cap.icon size={20} />
                </div>
                <span className="font-semibold text-text-primary text-sm">
                  {cap.title}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
