import * as React from 'react'
import { cn } from '@/utils/cn'

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  error?: string
  helperText?: string
  htmlFor?: string
  required?: boolean
}

export function FormField({
  label,
  error,
  helperText,
  htmlFor,
  required,
  className,
  children,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn('flex flex-col space-y-1.5', className)} {...props}>
      <label
        htmlFor={htmlFor}
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          error ? 'text-status-error' : 'text-text-primary'
        )}
      >
        {label}
        {required && <span className="text-status-error ml-1" aria-hidden="true">*</span>}
      </label>
      
      {/* Clone children to pass error prop if it's an Input/Textarea/Select */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...(child.props as any),
            id: htmlFor,
            error: !!error,
            'aria-invalid': !!error,
            'aria-describedby': cn(
              error ? `${htmlFor}-error` : '',
              helperText ? `${htmlFor}-helper` : ''
            ).trim() || undefined,
          })
        }
        return child
      })}

      {helperText && !error && (
        <p id={`${htmlFor}-helper`} className="text-[0.8rem] text-text-muted mt-1.5">
          {helperText}
        </p>
      )}
      
      {error && (
        <p id={`${htmlFor}-error`} className="text-[0.8rem] font-medium text-status-error mt-1.5">
          {error}
        </p>
      )}
    </div>
  )
}
