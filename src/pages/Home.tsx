import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import CTASection from '@/components/sections/CTASection'
import Button from '@/components/ui/Button'
import { ArrowRight, Server, Database, Cloud, Cog, Lock, Zap } from 'lucide-react'
import { cn } from '@/utils/cn'
import { blogPosts } from '@/data/blogPosts'

export default function Home() {
  const featuredInsights = blogPosts.slice(0, 3)

  return (
    <>
      <SEO
        title="Corelane Systems — Software Development & Cloud Engineering"
        description="Corelane Systems builds professional websites, web applications, custom software, and cloud infrastructure for startups, SMEs, and growing businesses in Pakistan and internationally."
        canonical="/"
        ogType="website"
      />

      {/* 1. HERO */}
      <section className="relative bg-navy pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" aria-hidden>
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 bg-grid-navy-pattern"></div>
          {/* Extremely faint gradient glow to break up flatness without looking cheap */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

            {/* Hero Text */}
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
                <div className="h-px w-8 bg-teal" />
                <span className="text-teal text-xs md:text-sm font-semibold tracking-widest uppercase">
                  Enterprise Software & Cloud Engineering
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight text-balance mb-6 animate-fade-up delay-100">
                Technology Built Around Your Business.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl text-balance animate-fade-up delay-200">
                Corelane Systems engineers scalable software, cloud infrastructure, and operational solutions for startups, SMEs, and enterprise clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 shadow-md">
                    Start a Project
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 border-slate-700 bg-transparent text-white hover:bg-white hover:text-navy transition-all duration-300">
                    Explore Capabilities
                  </Button>
                </Link>
              </div>
            </div>

            {/* Premium Architectural Visual */}
            <div className="relative h-[400px] md:h-[500px] w-full hidden lg:block animate-fade-in delay-500" aria-hidden>
              {/* Central Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-teal/30 bg-teal/5 rounded-full flex items-center justify-center animate-pulse-slow">
                <div className="w-32 h-32 border border-teal/40 bg-teal/10 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal shadow-glow-lg rounded-full flex items-center justify-center text-navy font-bold">
                    <Cloud size={24} />
                  </div>
                </div>
              </div>

              {/* Orbital Nodes */}
              <div className="absolute top-[20%] left-[20%] p-4 border border-slate-700 bg-navy-800 rounded-xl shadow-xl flex items-center gap-3 animate-float delay-100">
                <Server className="text-teal" size={20} />
                <span className="text-white text-xs font-semibold tracking-wider">INFRASTRUCTURE</span>
              </div>
              <div className="absolute top-[15%] right-[15%] p-4 border border-slate-700 bg-navy-800 rounded-xl shadow-xl flex items-center gap-3 animate-float delay-200">
                <Database className="text-teal" size={20} />
                <span className="text-white text-xs font-semibold tracking-wider">DATA</span>
              </div>
              <div className="absolute bottom-[25%] left-[10%] p-4 border border-slate-700 bg-navy-800 rounded-xl shadow-xl flex items-center gap-3 animate-float delay-300">
                <Cog className="text-teal" size={20} />
                <span className="text-white text-xs font-semibold tracking-wider">AUTOMATION</span>
              </div>
              <div className="absolute bottom-[15%] right-[20%] p-4 border border-slate-700 bg-navy-800 rounded-xl shadow-xl flex items-center gap-3 animate-float delay-400">
                <Zap className="text-teal" size={20} />
                <span className="text-white text-xs font-semibold tracking-wider">APPLICATIONS</span>
              </div>

              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="rgba(20,184,166,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="rgba(20,184,166,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="20%" y1="75%" x2="50%" y2="50%" stroke="rgba(20,184,166,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="rgba(20,184,166,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-navy py-6 border-b border-navy-800 hidden md:block">
        <div className="container-content">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-semibold tracking-[0.25em] text-slate-500">
            <span>SOFTWARE DEVELOPMENT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>CLOUD ENGINEERING</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>DEVOPS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>DATA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>AUTOMATION</span>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM -> SOLUTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight text-balance mb-6">
                Technology Should Solve Business Problems.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We don't write code for the sake of it. We engineer systems that eliminate bottlenecks, reduce overhead, and scale operations securely.
              </p>
              <Link to="/process" className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors">
                Read about our engineering process <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              {[
                { p: "OUTDATED DIGITAL PRESENCE", s: "Modern business website" },
                { p: "MANUAL WORKFLOWS", s: "Business automation" },
                { p: "DISCONNECTED SYSTEMS", s: "Integrated applications" },
                { p: "SCALING CHALLENGES", s: "Cloud infrastructure" },
                { p: "DATA COMPLEXITY", s: "Data engineering & analytics" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                  <div className="text-sm font-bold text-slate-400 tracking-wider flex-1 sm:text-right">
                    {item.p}
                  </div>
                  <div className="hidden sm:block text-teal">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                  <div className="text-xl font-bold text-slate-900 flex-1">
                    {item.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-200" aria-labelledby="services-heading">
        <div className="container-content">
          <div className="max-w-3xl mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Technology Solutions That Move Your Business Forward
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured Service */}
            <Link to="/services/custom-software" className="group lg:col-span-8 bg-navy p-10 md:p-14 rounded-2xl flex flex-col justify-between border border-navy-800 shadow-sm hover:shadow-lg hover:border-teal/30 transition-all duration-300">
              <div className="text-teal font-mono text-sm tracking-widest uppercase mb-12">01 — Core Capability</div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Custom Software Engineering</h3>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">
                  Bespoke operational systems, internal tools, and high-performance SaaS platforms engineered for security, speed, and massive scale.
                </p>
                <div className="inline-flex items-center gap-3 text-teal font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Custom Software <ArrowRight size={18} />
                </div>
              </div>
            </Link>
            
            {/* Secondary Services */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {[
                { num: "02", title: "Cloud Engineering", desc: "Design and build resilient, auto-scaling cloud environments.", href: "/services/cloud-engineering" },
                { num: "03", title: "Web Applications", desc: "Interactive customer portals and advanced enterprise dashboards.", href: "/services/web-app-development" }
              ].map((s, i) => (
                <Link key={i} to={s.href} className="group flex-1 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                  <div className="text-slate-400 font-mono text-sm tracking-wider mb-6 group-hover:text-teal transition-colors duration-300">{s.num}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                    <div className="inline-flex items-center gap-2 text-teal font-semibold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Explore Capability <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { num: "04", title: "Web Development", href: "/services/web-development" },
              { num: "05", title: "DevOps", href: "/services/devops" },
              { num: "06", title: "Data Engineering", href: "/services/data-engineering" },
              { num: "07", title: "Business Automation", href: "/services/business-automation" }
            ].map((s, i) => (
              <Link key={i} to={s.href} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal transition-all">
                <div className="text-slate-400 font-mono text-xs tracking-wider mb-3 group-hover:text-teal transition-colors">{s.num}</div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal transition-colors">{s.title}</h3>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CORELANE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Engineering With a Business-First Mindset.
            </h2>
            <p className="text-lg text-slate-600">
              We do not just write code. We act as technical partners invested in the long-term operational success of your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { num: "01", title: "Business Understanding", desc: "Every project starts with a deep dive into your operational bottlenecks, revenue goals, and market context before architecture begins." },
              { num: "02", title: "Modern Engineering", desc: "We utilize modern frameworks like React, cloud-native deployments, and headless architectures to ensure fast, secure delivery." },
              { num: "03", title: "Scalable Architecture", desc: "Systems are engineered to handle 10x traffic without rewriting the foundation, utilizing microservices and decoupled layers." },
              { num: "04", title: "Long-Term Thinking", desc: "Clean codebases, extensive documentation, and automated testing ensure your software is maintainable for years to come." }
            ].map((pillar, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-teal font-mono text-lg font-bold mb-4">{pillar.num}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES */}
      <section className="py-20 md:py-32 bg-navy text-white">
        <div className="container-content">
          <div className="flex flex-col lg:flex-row gap-16 justify-between items-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
              Specialized Solutions Across Key Industries
            </h2>
            <Link to="/industries">
              <Button variant="secondary" className="border-slate-700 bg-transparent text-white hover:bg-white hover:text-navy transition-all duration-300">
                View All Industries <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-navy-800 rounded-2xl overflow-hidden bg-navy-800/50">
            {[
              { title: "Real Estate", desc: "PropTech platforms and CRM integrations.", slug: "real-estate" },
              { title: "Healthcare", desc: "Secure portals and telemedicine infrastructure.", slug: "healthcare" },
              { title: "Startups", desc: "MVP development and scalable cloud architecture.", slug: "startups" },
              { title: "SMEs", desc: "Digital transformation and business automation.", slug: "smes" },
              { title: "Law Firms", desc: "Document management and secure client portals.", slug: "law-firms" },
              { title: "E-commerce", desc: "High-performance headless stores and logic.", slug: "ecommerce" },
              { title: "Professional Services", desc: "Bespoke operations and client management.", slug: "professional-services" },
              { title: "Architecture", desc: "Portfolio platforms and ERP solutions.", slug: "architecture-construction" }
            ].map((ind, i) => (
              <Link key={i} to={`/industries/${ind.slug}`} className="group p-8 border-r border-b border-navy-800/50 bg-navy hover:bg-navy-700/50 transition-all duration-300 flex flex-col h-full min-h-[220px]">
                <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight group-hover:text-teal transition-colors duration-300">{ind.title}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-1">{ind.desc}</p>
                <div className="inline-flex text-teal mt-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL / LOCATIONS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Technology Without Borders.
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Corelane Systems works with businesses in Pakistan and international markets through modern remote collaboration, asynchronous workflows, and rigorous communication.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Pakistan', 'UAE', 'UK', 'USA', 'Canada'].map((loc, i) => (
              <Link key={i} to={`/locations/${loc.toLowerCase()}`} className="text-xl font-bold text-slate-400 hover:text-teal transition-colors">
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROCESS */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container-content">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            From Challenge to Solution
          </h2>
          
          <div className="relative">
            {/* Desktop horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-slate-200" />
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {[
                { step: "01", name: "Discover" },
                { step: "02", name: "Define" },
                { step: "03", name: "Design" },
                { step: "04", name: "Develop" },
                { step: "05", name: "Deploy" },
                { step: "06", name: "Improve" },
              ].map((p, i) => (
                <div key={i} className="relative flex md:flex-col items-center md:items-start gap-6 md:gap-4">
                  {/* Vertical line mobile */}
                  {i !== 5 && <div className="md:hidden absolute left-[15px] top-[30px] bottom-[-40px] w-px bg-slate-200" />}
                  
                  <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-teal flex items-center justify-center text-xs font-bold text-teal z-10 relative">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg md:text-base md:mt-4">{p.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CASE STUDIES / WHAT WE BUILD */}
      <section className="py-20 md:py-32 bg-navy text-white">
        <div className="container-content">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
              <p className="text-slate-400 text-lg max-w-2xl">
                A selection of modern digital products, internal applications, and scalable platforms engineered by our team.
              </p>
            </div>
            <Link to="/case-studies">
              <Button variant="secondary" className="border-slate-700 bg-transparent text-white hover:bg-white hover:text-navy transition-all duration-300">
                View Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Logistics ERP System",
                tech: "React, Node.js, AWS, PostgreSQL",
                purpose: "Replace 4 disconnected SaaS tools with one centralized source of truth for driver routing and invoicing.",
              },
              {
                title: "Enterprise CRM System",
                tech: "React, TypeScript, Node.js",
                purpose: "A scalable CRM platform tailored for complex B2B sales pipelines, featuring automated lead tracking and integrations.",
              },
              {
                title: "Comprehensive HRM System",
                tech: "React, Python, AWS",
                purpose: "An all-in-one HR portal to manage employee onboarding, payroll processing, performance evaluations, and leave tracking.",
              },
              {
                title: "Scalable LMS Platform",
                tech: "React, Vercel, Supabase",
                purpose: "A high-performance e-learning platform with interactive course modules, progress tracking, and secure assessments.",
              }
            ].map((project, i) => (
              <div key={i} className="bg-navy-800 border border-navy-700 p-8 rounded-2xl">
                <div className="text-teal text-xs font-mono tracking-widest uppercase mb-4">{project.tech}</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.purpose}
                </p>
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-teal cursor-pointer transition-colors">
                  View Technical Details <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CONTENT / INSIGHTS */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container-content">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Insights for Modern Businesses</h2>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-teal font-semibold hover:text-teal-dark">
              View All Insights <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal hover:shadow-lg transition-all flex flex-col h-full">
                <span className="text-teal text-xs font-bold uppercase tracking-wider mb-4 block">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">{post.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-teal font-semibold text-sm">
                  Read Article <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
          <Link to="/blog" className="mt-8 flex md:hidden items-center justify-center gap-2 text-teal font-semibold">
            View All Insights <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <CTASection 
        title="Have a Business Challenge?"
        subtitle="Let's discuss the technology solution that fits your goals."
      />
    </>
  )
}
