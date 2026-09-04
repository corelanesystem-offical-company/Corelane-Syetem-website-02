import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Layout, Code, Cloud, GitMerge, Database, BarChart3, Workflow, Network } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'Website Development',
      slug: 'web-development',
      icon: Globe,
      desc: 'High-performance, SEO-optimized business websites designed to generate leads and establish enterprise credibility.',
      tags: ['React', 'Next.js', 'CMS'],
    },
    {
      num: '02',
      title: 'Web Applications',
      slug: 'web-app-development',
      icon: Layout,
      desc: 'Complex web platforms, portals, and SaaS products with rich interactivity and secure user management.',
      tags: ['TypeScript', 'Node.js', 'React'],
    },
    {
      num: '03',
      title: 'Custom Software',
      slug: 'custom-software',
      icon: Code,
      desc: 'Bespoke internal tools, ERP modules, and operational software built to solve your unique bottlenecks.',
      tags: ['Python', 'PostgreSQL', 'AWS'],
    },
    {
      num: '04',
      title: 'Cloud Engineering',
      slug: 'cloud-engineering',
      icon: Cloud,
      desc: 'Secure, auto-scaling cloud infrastructure design and migration for modern enterprise workloads.',
      tags: ['AWS', 'Azure', 'GCP'],
    },
    {
      num: '05',
      title: 'DevOps & Infrastructure',
      slug: 'devops',
      icon: GitMerge,
      desc: 'Automated CI/CD pipelines, containerization, and infrastructure-as-code to speed up safe deployments.',
      tags: ['Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      num: '06',
      title: 'Data Engineering',
      slug: 'data-engineering',
      icon: Database,
      desc: 'Robust data pipelines, ETL processes, and centralized data warehouses for reliable business intelligence.',
      tags: ['Snowflake', 'Airflow', 'SQL'],
    },
    {
      num: '07',
      title: 'Data Analytics',
      slug: 'data-analytics',
      icon: BarChart3,
      desc: 'Actionable dashboards, reporting systems, and advanced analytics to turn raw data into strategic insights.',
      tags: ['PowerBI', 'Tableau', 'Python'],
    },
    {
      num: '08',
      title: 'Business Automation',
      slug: 'business-automation',
      icon: Workflow,
      desc: 'Automate repetitive workflows and manual data entry across your organization to save time and reduce errors.',
      tags: ['Make', 'Zapier', 'Custom Scripts'],
    },
    {
      num: '09',
      title: 'API Integration',
      slug: 'custom-software', // Mapping to custom software since API page might not exist, but usually it fits there. Or maybe we link to contact.
      icon: Network,
      desc: 'Connect disconnected SaaS tools, internal databases, and third-party services into one unified ecosystem.',
      tags: ['REST', 'GraphQL', 'Webhooks'],
    },
  ]

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container-content">
        <SectionHeader 
          title="What We Build" 
          subtitle="Enterprise-grade technology solutions engineered for scale, security, and performance." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <Link 
                key={svc.num} 
                to={`/services/${svc.slug}`} 
                className="group bg-white border border-slate-200 shadow-sm rounded-2xl p-8 hover:border-teal hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-100 group-hover:border-teal-200 transition-colors">
                    <Icon size={26} className="text-teal group-hover:text-teal-dark transition-colors" />
                  </div>
                  <span className="text-3xl font-bold text-slate-100 group-hover:text-teal-100 transition-colors pointer-events-none select-none">
                    {svc.num}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal transition-colors">
                  {svc.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1">
                  {svc.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-teal transition-colors">
                    Explore Service <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
