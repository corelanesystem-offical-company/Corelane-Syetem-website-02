import { Link } from 'react-router-dom'
import SectionHeader from '@/components/ui/SectionHeader'
import IndustryCard from '@/components/cards/IndustryCard'
import { industries } from '@/data/industries'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-navy" aria-labelledby="industries-heading">
      <div className="container-content">
        <SectionHeader
          eyebrow="Who we work with"
          title="Solutions Across Industries"
          subtitle="We bring technology expertise and business understanding to the sectors where our clients operate."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              slug={industry.slug}
              title={industry.title}
              description={industry.tagline}
              icon={industry.icon}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/industries">
            <Button variant="secondary" size="md" className="border-slate-500 text-slate-300 hover:border-teal hover:text-white hover:bg-transparent">
              View All Industries
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
