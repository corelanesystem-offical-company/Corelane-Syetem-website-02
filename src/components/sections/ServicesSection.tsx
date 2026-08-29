import { Link } from 'react-router-dom'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/cards/ServiceCard'
import { services } from '@/data/services'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-content">
        <SectionHeader
          eyebrow="What we build"
          title="Technology Solutions for Modern Businesses"
          subtitle="From custom software and web applications to cloud infrastructure and data engineering — we cover the full technology stack your business needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="secondary" size="md">
              View All Services
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
