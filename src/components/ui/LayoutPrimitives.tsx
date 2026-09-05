import * as React from 'react'
import { cn } from '@/utils/cn'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  variant?: 'default' | 'muted' | 'alt' | 'dark'
}

export function Section({
  as: Component = 'section',
  variant = 'default',
  className,
  ...props
}: SectionProps) {
  const variants = {
    default: 'bg-surface text-text-secondary border-b border-border',
    muted: 'bg-surface-muted text-text-secondary border-b border-border',
    alt: 'bg-surface-alt text-text-secondary border-b border-border',
    dark: 'bg-surface-dark text-text-inverse border-b border-border-dark',
  }

  return (
    <Component
      className={cn('py-20 md:py-28 overflow-hidden', variants[variant], className)}
      {...props}
    />
  )
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  const sizes = {
    default: 'max-w-content',
    narrow: 'max-w-3xl',
    wide: 'max-w-[1440px]',
  }

  return (
    <div
      className={cn('w-full mx-auto px-5 sm:px-8 lg:px-10', sizes[size], className)}
      {...props}
    />
  )
}
