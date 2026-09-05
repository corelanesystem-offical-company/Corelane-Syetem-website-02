import { cn } from '@/utils/cn'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    
    const base = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-[0.98] whitespace-nowrap'
    
    // Disabled state is handled by group/disabled pseudo classes
    const disabledStyles = 'disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100'

    const variants = {
      primary: 'bg-brand text-white hover:bg-brand-hover shadow-sm border border-transparent',
      secondary: 'bg-surface text-text-primary border border-border hover:border-brand hover:text-brand shadow-sm',
      outline: 'bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white',
      ghost: 'bg-transparent text-text-secondary hover:text-brand hover:bg-surface-alt',
      dark: 'bg-surface-dark text-white hover:bg-surface-dark-muted shadow-sm border border-transparent',
      danger: 'bg-status-error text-white hover:bg-red-700 shadow-sm border border-transparent',
    }

    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-md',
      md: 'h-11 px-6 text-sm font-semibold rounded-lg',
      lg: 'h-14 px-8 text-base font-semibold rounded-lg',
    }

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={cn(base, variants[variant], sizes[size], disabledStyles, className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
