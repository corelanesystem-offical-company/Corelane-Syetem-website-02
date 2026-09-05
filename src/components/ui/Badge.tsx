import { cn } from '@/utils/cn'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'dark'
}

export default function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors'
  
  const variants = {
    default: 'bg-surface-alt text-text-muted border border-border',
    brand: 'bg-brand-light text-brand-hover border border-brand/20',
    success: 'bg-green-100 text-status-success border border-green-200',
    warning: 'bg-amber-100 text-status-warning border border-amber-200',
    dark: 'bg-surface-dark text-white border border-surface-dark-muted',
  }

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  )
}
