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
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cs-2',
    title: 'Custom Operations Management System for a Professional Services Firm',
    industry: 'Professional Services',
    service: 'Custom Software Development',
    summary:
      'Built a bespoke operations and client management platform to replace a complex web of spreadsheets and disconnected tools.',
    outcome: 'Significant reduction in manual administrative work',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cs-3',
    title: 'Cloud Infrastructure Migration for a Growing SaaS Business',
    industry: 'Technology',
    service: 'Cloud Engineering & DevOps',
    summary:
      'Migrated a legacy infrastructure to AWS, implemented auto-scaling, and established a CI/CD pipeline for continuous, safe deployments.',
    outcome: 'Improved uptime and faster deployment cycles',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cs-4',
    title: 'Enterprise Customer Relationship Management (CRM) System',
    industry: 'Sales & Professional Services',
    service: 'Custom Software Development',
    summary:
      'Developed a scalable CRM platform tailored for complex B2B sales pipelines, featuring automated lead tracking, reporting dashboards, and third-party API integrations.',
    outcome: 'Streamlined lead tracking and increased sales conversions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cs-5',
    title: 'Comprehensive Human Resource Management (HRM) System',
    industry: 'Corporate & Enterprise',
    service: 'Web Application Development',
    summary:
      'Built an all-in-one HR portal to manage employee onboarding, payroll processing, performance evaluations, and leave tracking securely.',
    outcome: 'Automated core HR workflows and reduced administrative overhead',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cs-6',
    title: 'Scalable Learning Management System (LMS)',
    industry: 'Education & Corporate Training',
    service: 'Web Application Development',
    summary:
      'Engineered a high-performance e-learning platform with interactive course modules, progress tracking, secure assessments, and real-time analytics.',
    outcome: 'Enhanced user engagement and seamless training delivery',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/5 transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                    <Folder size={14} className="text-teal" />
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                      {cs.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-teal transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {cs.summary}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Service</span>
                      <span className="text-sm font-medium text-slate-700">{cs.service}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Outcome</span>
                      <span className="text-sm font-bold text-teal">{cs.outcome}</span>
                    </div>
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
