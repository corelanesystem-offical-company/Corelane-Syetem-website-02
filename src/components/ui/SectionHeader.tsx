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
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-widest mb-3',
            light ? 'text-teal-light' : 'text-teal'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-h2 font-bold text-balance',
          light ? 'text-white' : 'text-slate-800',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg max-w-2xl leading-relaxed',
            align === 'center' && 'mx-auto',
            light ? 'text-slate-400' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
