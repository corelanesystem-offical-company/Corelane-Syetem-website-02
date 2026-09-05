import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  light?: boolean // for use on dark backgrounds
  id?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  light = false,
  id,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-widest mb-3',
            light ? 'text-brand-light' : 'text-brand'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-h2 font-bold text-balance',
          light ? 'text-text-inverse' : 'text-text-primary',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-body-lg leading-relaxed text-balance',
            light ? 'text-text-muted' : 'text-text-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
