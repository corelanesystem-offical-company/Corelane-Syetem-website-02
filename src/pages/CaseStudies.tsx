import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import { Folder } from 'lucide-react'

// Placeholder case study cards
const caseStudies = [
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
  {
    id: 'cs-4',
    title: 'Enterprise Customer Relationship Management (CRM) System',
    industry: 'Sales & Professional Services',
    service: 'Custom Software Development',
    summary:
      'Developed a scalable CRM platform tailored for complex B2B sales pipelines, featuring automated lead tracking, reporting dashboards, and third-party API integrations.',
    outcome: 'Streamlined lead tracking and increased sales conversions',
  },
  {
    id: 'cs-5',
    title: 'Comprehensive Human Resource Management (HRM) System',
    industry: 'Corporate & Enterprise',
    service: 'Web Application Development',
    summary:
      'Built an all-in-one HR portal to manage employee onboarding, payroll processing, performance evaluations, and leave tracking securely.',
    outcome: 'Automated core HR workflows and reduced administrative overhead',
  },
  {
    id: 'cs-6',
    title: 'Scalable Learning Management System (LMS)',
    industry: 'Education & Corporate Training',
    service: 'Web Application Development',
    summary:
      'Engineered a high-performance e-learning platform with interactive course modules, progress tracking, secure assessments, and real-time analytics.',
    outcome: 'Enhanced user engagement and seamless training delivery',
  },
]

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Corelane Systems"
        description="How Corelane Systems has helped businesses solve technology challenges. Real projects, real outcomes."
        canonical="/case-studies"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Case Studies' }]} light className="mb-8" />
          <h1 className="text-h1 font-bold text-white text-balance mb-6">Our Work</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Projects we've delivered. Problems we've solved.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="bg-blue-50 border border-blue-100 text-blue-800 p-4 rounded-xl mb-10 text-center text-sm font-medium">
            Case studies will be updated with detailed project documentation as we make content available.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-card flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Folder size={16} className="text-teal" />
                  </div>
                  <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                    {cs.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-snug">
                  {cs.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {cs.summary}
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Service</span>
                    <span className="text-sm text-slate-700">{cs.service}</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Outcome</span>
                    <span className="text-sm font-medium text-teal-dark">{cs.outcome}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a project in mind?" />
    </>
  )
}
