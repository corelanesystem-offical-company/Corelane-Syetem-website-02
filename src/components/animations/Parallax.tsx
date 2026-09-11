import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxProps {
  children: ReactNode
  speed?: number // 1 is default, > 1 is faster, < 1 is slower
  className?: string
}

export default function Parallax({ children, speed = 1, className = '' }: ParallaxProps) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Respect user's system preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (!triggerRef.current || !targetRef.current) return

    const yVal = speed * 100 // Adjust multiplier for strength

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true, // Smooth scrub
      }
    })

    // Initial positioning based on speed (negative y if moving slower, positive if faster)
    tl.fromTo(targetRef.current, 
      { y: -yVal }, 
      { y: yVal, ease: 'none' }
    )

    return () => {
      tl.kill()
    }
  }, [speed])

  return (
    <div ref={triggerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={targetRef} className="h-full w-full">
        {children}
      </div>
    </div>
  )
}
