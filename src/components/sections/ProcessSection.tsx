import { Link } from 'react-router-dom'
import SectionHeader from '@/components/ui/SectionHeader'
import ProcessStepCard from '@/components/cards/ProcessStepCard'
import { processSteps } from '@/data/process'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="process-heading">
      <div className="container-content">
        <SectionHeader
          eyebrow="How we work"
          title="From Business Challenge to Technology Solution"
          subtitle="A structured approach from discovery to launch — so you always know where the project is."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mb-12">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/process">
            <Button variant="ghost">
              Learn More About Our Process
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
