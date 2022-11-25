import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        {...rest}
        className={twMerge(
          'textarea-bordered textarea-primary textarea w-full',
          error && 'textarea-error',
          className
        )}
      />
    )
  }
)
