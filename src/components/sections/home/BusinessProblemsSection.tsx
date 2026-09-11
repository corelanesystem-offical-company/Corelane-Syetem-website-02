import { useRef, useLayoutEffect } from 'react'
import { ServerCrash, FileSpreadsheet, Unplug, LayoutGrid, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'

gsap.registerPlugin(ScrollTrigger)

export default function BusinessProblemsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)

  const problems = [
    { title: 'Disconnected systems', icon: Unplug },
    { title: 'Manual workflows', icon: FileSpreadsheet },
    { title: 'Slow or unreliable applications', icon: ServerCrash },
    { title: 'Infrastructure complexity', icon: LayoutGrid },
  ]

  const approach = [
    { title: 'Software', desc: 'Custom applications built specifically for your exact business requirements, eliminating the need for awkward off-the-shelf software.' },
    { title: 'Automation', desc: 'Replacing manual data entry and repetitive tasks with seamless programmatic workflows and robust background workers.' },
    { title: 'Cloud', desc: 'Scalable, secure, and cost-effective cloud architectures deployed on AWS, Azure, or GCP using infrastructure-as-code.' },
    { title: 'Data', desc: 'Centralized data pipelines that turn fragmented spreadsheets into unified analytics dashboards for real-time decision making.' },
    { title: 'Integration', desc: 'Connecting your CRM, ERP, and payment gateways through secure REST and GraphQL APIs.' }
  ]

  useLayoutEffect(() => {
    // Respect user's system preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return
    
    // Only apply pinning on desktop where it makes sense
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top+=100",
            end: "bottom bottom",
            pin: leftColRef.current,
            pinSpacing: false,
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative">
      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Pinned Left Column (Problems) */}
            <div ref={leftColRef} className="lg:pr-8">
              <SectionHeader
                align="left"
                title="Technology shouldn't hold your business back."
                subtitle="Growing businesses eventually hit a ceiling when their tools stop scaling with their operations."
                className="mb-8"
              />
              
              <div className="space-y-4">
                {problems.map((prob, i) => (
                  <div key={i} className="flex items-center gap-4 bg-surface-alt p-4 rounded-xl border border-border">
                    <div className="w-10 h-10 bg-surface rounded-lg border border-border shadow-sm flex items-center justify-center shrink-0">
                      <prob.icon size={20} className="text-text-muted" />
                    </div>
                    <span className="font-semibold text-text-primary">{prob.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrolling Right Column (Approach / Solutions) */}
            <div className="space-y-8 pb-12 lg:pb-0 pt-8 lg:pt-0">
              <div className="bg-surface-dark rounded-2xl p-8 border border-border-dark shadow-elevated mb-8 sticky top-32 z-10">
                <h3 className="text-2xl font-bold text-text-inverse mb-3">The Corelane Approach</h3>
                <p className="text-text-muted leading-relaxed">
                  We replace fragmented tools and manual processes with unified, automated, and scalable engineering solutions.
                </p>
              </div>

              {approach.map((item, i) => (
                <div key={i} className="bg-surface p-8 rounded-2xl border border-border shadow-sm hover:shadow-card transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={24} className="text-brand" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-2">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </Section>
    </div>
  )
}
