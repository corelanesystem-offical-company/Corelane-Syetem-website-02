import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'

interface LocationCardProps {
  slug: string
  country: string
  flag: string
  tagline: string
  className?: string
}

export default function LocationCard({
  slug,
  country,
  flag,
  tagline,
  className,
}: LocationCardProps) {
  return (
    <Link
      to={`/locations/${slug}`}
      className={cn(
        'group flex flex-col p-6 bg-white rounded-xl border border-slate-200',
        'shadow-card hover:shadow-card-hover hover:border-teal-100',
        'transition-all duration-300',
        className
      )}
    >
      <div className="text-4xl mb-4" aria-hidden="true">{flag}</div>
      <h3 className="text-base font-semibold text-slate-800 mb-2 group-hover:text-teal transition-colors duration-200">
        {country}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{tagline}</p>
      <div className="mt-4 flex items-center gap-1 text-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Learn more</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  )
}
