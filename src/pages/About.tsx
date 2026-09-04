import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import LocationCard from '@/components/cards/LocationCard'
import { locations } from '@/data/locations'
import { Target, Users, Globe2, ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="About Corelane Systems | Software Development & Cloud Engineering"
        description="Learn about Corelane Systems — a technology company helping startups, SMEs, and growing businesses build software, web applications, and cloud infrastructure."
        canonical="/about"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'About' }]} light className="mb-8" />
          <h1 className="text-h1 font-bold text-white text-balance mb-6">About Corelane Systems</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We are a technology partner for businesses that need serious software, not just another vendor.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white overflow-hidden">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <SectionHeader title="Our Mission" align="left" className="mb-8 md:mb-8" />
              <p className="text-xl text-slate-600 leading-relaxed">
                We exist to help businesses of every size compete through technology. We solve real business problems with thoughtfully designed, well-engineered software — delivered with professionalism and clarity.
              </p>
            </div>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Team collaborating on technology" 
                  className="w-full h-[400px] object-cover"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Engineering Excellence</h3>
              <p className="text-slate-600">We don't cut corners. We build scalable, secure, and maintainable software that acts as a long-term asset for your business.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Business Focus</h3>
              <p className="text-slate-600">Technology is a means to an end. We focus on solving your actual business challenges, increasing revenue, and reducing costs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">International Delivery</h3>
              <p className="text-slate-600">We serve clients globally, combining international quality standards with transparent communication and structured processes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader title="Our Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={32} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Quality</h3>
              <p className="text-slate-600 text-sm">We build things right the first time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Target size={32} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Transparency</h3>
              <p className="text-slate-600 text-sm">No surprises in scoping, pricing, or delivery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Partnership</h3>
              <p className="text-slate-600 text-sm">We treat your business as our own.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-4">
                <Globe2 size={32} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Reliability</h3>
              <p className="text-slate-600 text-sm">We deliver what we promise, on time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <SectionHeader title="Where We Work" subtitle="We serve clients in North America, Europe, the Middle East, and South Asia." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <LocationCard
                key={loc.slug}
                slug={loc.slug}
                country={loc.country}
                flag={loc.flag}
                tagline={loc.tagline}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
