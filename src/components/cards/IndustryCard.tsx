import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface IndustryCardProps {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export default function IndustryCard({
  slug,
  title,
  description,
  icon: Icon,
  className,
}: IndustryCardProps) {
  return (
    <Link
      to={`/industries/${slug}`}
      className={cn(
        'group flex flex-col p-6 bg-navy-800 rounded-xl border border-navy-700',
        'hover:border-teal transition-all duration-300',
        className
      )}
    >
      <div className="w-11 h-11 rounded-lg bg-navy-700 flex items-center justify-center mb-4
        group-hover:bg-teal transition-all duration-300">
        <Icon size={20} className="text-teal group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-base font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-4 flex items-center gap-1 text-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Explore</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  )
}
