import { cn } from '@/utils/cn'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'

    const variants = {
      primary:
        'bg-teal text-white hover:bg-teal-dark shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-300 border border-transparent',
      secondary:
        'border border-slate-300 text-slate-700 bg-white hover:border-teal hover:text-teal shadow-sm hover:shadow hover:-translate-y-px transition-all duration-300',
      ghost:
        'text-slate-600 hover:text-teal hover:bg-slate-50 transition-colors duration-300',
      whatsapp:
        'bg-[#25D366] text-white hover:bg-[#1EBE55] shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-300 border border-transparent',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-sm font-semibold',
      lg: 'px-8 py-3.5 text-base font-semibold',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
