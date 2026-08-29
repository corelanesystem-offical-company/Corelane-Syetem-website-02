import SEO from '@/components/seo/SEO'
import SectionHeader from '@/components/ui/SectionHeader'
import Breadcrumb from '@/components/ui/Breadcrumb'
import CTASection from '@/components/sections/CTASection'
import ProcessStepCard from '@/components/cards/ProcessStepCard'
import { processSteps } from '@/data/process'
import { CheckCircle2 } from 'lucide-react'

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process | Corelane Systems"
        description="How Corelane Systems works: a structured 4-phase process — Discover, Design, Build, Launch. Clear deliverables, no surprises."
        canonical="/process"
      />

      <section className="bg-navy pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-content">
          <Breadcrumb items={[{ label: 'Process' }]} light className="mb-8" />
          <h1 className="text-h1 font-bold text-white text-balance mb-6">Our Process</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            A structured approach from discovery to launch — so you always know where the project is.
          </p>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-content max-w-5xl">
          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <ProcessStepCard
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isLast={true}
                  />
                </div>
                <div className="md:col-span-7 bg-white p-8 rounded-xl border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-4 uppercase tracking-wider text-sm">Deliverables</h4>
                  <ul className="space-y-4">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-slate-600">
                        <CheckCircle2 size={20} className="text-teal flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content max-w-4xl">
          <SectionHeader title="What you can expect from us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2">Clear Scope</h3>
              <p className="text-slate-600 text-sm">We define exactly what will be built, how much it will cost, and when it will be delivered before we start.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2">Regular Updates</h3>
              <p className="text-slate-600 text-sm">We communicate proactively. You won't have to ask for a status update.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2">Documented Delivery</h3>
              <p className="text-slate-600 text-sm">We provide full documentation and source code handover at project completion.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2">No Surprises</h3>
              <p className="text-slate-600 text-sm">If a requirement changes or an issue arises, we communicate it immediately with a proposed solution.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
