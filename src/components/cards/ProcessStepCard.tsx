import { type LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  icon: LucideIcon
  isLast?: boolean
  className?: string
}

export default function ProcessStepCard({
  number,
  title,
  description,
  icon: Icon,
  isLast = false,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn('relative flex gap-5 md:flex-col md:gap-4', className)}>
      {/* Connector line (desktop horizontal, mobile vertical) */}
      {!isLast && (
        <div className="absolute top-6 left-6 w-px h-full bg-slate-200 md:top-6 md:left-auto md:right-0 md:w-1/2 md:h-px md:translate-x-full" />
      )}

      {/* Step number + icon */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-teal flex items-center justify-center shadow-sm">
          <Icon size={20} className="text-white" />
        </div>
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center">
          {number}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-h3 font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
