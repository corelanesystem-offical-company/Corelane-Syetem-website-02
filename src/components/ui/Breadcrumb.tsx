import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/utils/cn'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  light?: boolean
  className?: string
}

export default function Breadcrumb({ items, light = false, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center gap-1.5 text-sm', className)}
    >
      <Link
        to="/"
        className={cn(
          'flex items-center gap-1 transition-colors duration-200',
          light
            ? 'text-slate-400 hover:text-white'
            : 'text-slate-500 hover:text-teal'
        )}
        aria-label="Home"
      >
        <Home size={14} />
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="flex items-center gap-1.5">
            <ChevronRight
              size={14}
              className={cn(light ? 'text-slate-500' : 'text-slate-400')}
              aria-hidden
            />
            {isLast || !item.href ? (
              <span
                className={cn(
                  'font-medium',
                  light ? 'text-white' : 'text-slate-800'
                )}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  'transition-colors duration-200',
                  light
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-500 hover:text-teal'
                )}
              >
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
