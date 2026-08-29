import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'teal' | 'navy' | 'slate'
  className?: string
}

export default function Badge({ children, variant = 'teal', className }: BadgeProps) {
  const variants = {
    teal: 'bg-teal-50 text-teal-dark border border-teal-100',
    navy: 'bg-navy text-white',
    slate: 'bg-slate-100 text-slate-600 border border-slate-200',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
