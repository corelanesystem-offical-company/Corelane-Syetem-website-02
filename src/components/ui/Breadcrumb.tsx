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
          'flex items-center gap-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm',
          light
            ? 'text-text-muted hover:text-text-inverse'
            : 'text-text-secondary hover:text-brand'
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
              className={cn(light ? 'text-surface-dark-muted' : 'text-text-muted')}
              aria-hidden
            />
            {isLast || !item.href ? (
              <span
                className={cn(
                  'font-medium truncate max-w-[200px] sm:max-w-none',
                  light ? 'text-text-inverse' : 'text-text-primary'
                )}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className={cn(
                  'transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm truncate max-w-[150px] sm:max-w-none',
                  light
                    ? 'text-text-muted hover:text-text-inverse'
                    : 'text-text-secondary hover:text-brand'
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
