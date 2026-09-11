import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container, Section } from '@/components/ui/LayoutPrimitives'
import SectionHeader from '@/components/ui/SectionHeader'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const steps = [
    { num: '01', title: 'Discover', desc: 'Understand business requirements, constraints, and objectives.' },
    { num: '02', title: 'Plan', desc: 'Define architecture, technology stack, scope, and execution approach.' },
    { num: '03', title: 'Build', desc: 'Develop the solution iteratively with clean, maintainable engineering.' },
    { num: '04', title: 'Test', desc: 'Validate functionality, performance, and security across environments.' },
    { num: '05', title: 'Deploy', desc: 'Ship the solution to production with automated CI/CD pipelines.' },
    { num: '06', title: 'Improve', desc: 'Monitor, support, and scale the infrastructure as the business grows.' }
  ]

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const wrapper = scrollWrapperRef.current
          if (!wrapper) return

          // Calculate how far to scroll based on the wrapper width
          const scrollDistance = wrapper.scrollWidth - window.innerWidth + 100 // add some padding

          gsap.to(wrapper, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top", // Pin when section hits top
              end: `+=${scrollDistance}`, // Unpin after scrolling the calculated distance
              pin: true,
              scrub: 1, // Smooth scrubbing
              invalidateOnRefresh: true,
            }
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <Section variant="alt" className="border-y border-border overflow-hidden">
        {/* 
          On mobile: Normal vertical padding and container
          On desktop: We use a custom container structure to allow horizontal overflow 
        */}
        <div className="lg:h-screen lg:flex lg:flex-col lg:justify-center">
          <Container className="mb-12">
            <SectionHeader
              align="left"
              eyebrow="Our Process"
              title="How we execute."
              subtitle="A disciplined engineering process designed to eliminate risks, ensure quality, and deliver working software predictably."
              className="mb-0"
            />
          </Container>

          {/* 
            Mobile: CSS Grid 
            Desktop: Flex container that extends off-screen for GSAP to move it 
          */}
          <div className="px-6 lg:px-0">
            <div 
              ref={scrollWrapperRef} 
              className="grid md:grid-cols-2 lg:flex lg:flex-nowrap gap-6 lg:gap-8 max-w-5xl lg:max-w-none mx-auto lg:mx-0 lg:px-6 lg:pl-[10%]"
            >
              {steps.map((step, i) => (
                <div 
                  key={i} 
                  className="bg-surface p-8 lg:p-10 rounded-2xl border border-border shadow-sm hover:shadow-card transition-shadow lg:w-[400px] lg:shrink-0 lg:min-h-[300px] flex flex-col justify-center"
                >
                  <div className="text-4xl lg:text-5xl font-black text-brand-light mb-6 font-mono opacity-50">
                    {step.num}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
