import { Link } from 'react-router-dom'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { ArrowRight, Folder } from 'lucide-react'

// Placeholder case study cards — to be replaced with real content
const placeholderCaseStudies = [
  {
    id: 'cs-1',
    title: 'Digital Transformation for a Regional Real Estate Agency',
    industry: 'Real Estate',
    service: 'Web Development & CRM Integration',
    summary:
      'Replaced an outdated property portal with a modern, lead-optimised website integrated with CRM and automated lead nurturing workflows.',
    outcome: 'More efficient lead management',
  },
  {
    id: 'cs-2',
    title: 'Custom Operations Management System for a Professional Services Firm',
    industry: 'Professional Services',
    service: 'Custom Software Development',
    summary:
      'Built a bespoke operations and client management platform to replace a complex web of spreadsheets and disconnected tools.',
    outcome: 'Significant reduction in manual administrative work',
  },
  {
    id: 'cs-3',
    title: 'Cloud Infrastructure Migration for a Growing SaaS Business',
    industry: 'Technology',
    service: 'Cloud Engineering & DevOps',
    summary:
      'Migrated a legacy infrastructure to AWS, implemented auto-scaling, and established a CI/CD pipeline for continuous, safe deployments.',
    outcome: 'Improved uptime and faster deployment cycles',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-slate-50" aria-labelledby="case-studies-heading">
      <div className="container-content">
        <SectionHeader
          eyebrow="Our work"
          title="Explore What We Can Build"
          subtitle="How we've helped businesses solve technology challenges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {placeholderCaseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-card
                hover:shadow-card-hover hover:border-teal-100 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                  <Folder size={16} className="text-teal" />
                </div>
                <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                  {cs.industry}
                </span>
              </div>

              <h3 className="text-base font-semibold text-slate-800 mb-3 leading-snug">
                {cs.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                {cs.summary}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">{cs.service}</span>
                  <span className="text-xs font-medium text-teal-dark">{cs.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button variant="primary" size="md">
              Discuss Your Project
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
