import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
  width?: 'fit-content' | '100%'
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  className = '',
  width = '100%'
}: RevealProps) {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
      >
        {children}
      </motion.div>
    </div>
  )
}
