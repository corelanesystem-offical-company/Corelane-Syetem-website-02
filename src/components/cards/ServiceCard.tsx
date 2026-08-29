import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface ServiceCardProps {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export default function ServiceCard({
  slug,
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <Link
      to={`/services/${slug}`}
      className={cn(
        'group flex flex-col p-6 bg-white rounded-xl border border-slate-200',
        'shadow-card hover:shadow-card-hover hover:border-teal-100',
        'transition-all duration-300',
        className
      )}
    >
      <div
        className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4
          group-hover:bg-teal group-hover:text-white transition-all duration-300"
      >
        <Icon size={22} className="text-teal group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-h3 font-semibold text-slate-800 mb-2 group-hover:text-teal transition-colors duration-200">
        {title}
      </h3>

      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-4 flex items-center gap-1 text-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Learn more</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  )
}
