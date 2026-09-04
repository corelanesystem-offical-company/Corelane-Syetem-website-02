import { Layers, Database, Globe, Lock, Code2 } from 'lucide-react'

export default function TechCapabilities() {
  const capabilities = [
    {
      title: 'Frontend Engineering',
      icon: Globe,
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      desc: 'High-performance, responsive single-page applications and static sites.'
    },
    {
      title: 'Backend Systems',
      icon: Code2,
      tech: ['Node.js', 'Python', 'REST APIs', 'GraphQL'],
      desc: 'Scalable server-side architectures handling complex business logic.'
    },
    {
      title: 'Data & Storage',
      icon: Database,
      tech: ['PostgreSQL', 'Redis', 'S3', 'Snowflake'],
      desc: 'Secure, relational, and unstructured data management pipelines.'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Layers,
      tech: ['AWS', 'Docker', 'CI/CD', 'Vercel'],
      desc: 'Automated deployments and resilient cloud infrastructure.'
    },
    {
      title: 'Security & Compliance',
      icon: Lock,
      tech: ['OAuth', 'JWT', 'Encryption', 'RBAC'],
      desc: 'Enterprise-grade security practices embedded at every layer.'
    }
  ]

  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="container-content">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Technology Capabilities
          </h2>
          <p className="text-lg text-slate-600">
            We use a modern, proven technology stack to build software that is fast, secure, and maintainable. We do not chase hype; we choose the right tool for your specific business problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-teal/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <Icon size={24} className="text-teal" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-900">{cap.title}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-1">
                  {cap.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-teal-dark bg-teal-50 border border-teal-100 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
