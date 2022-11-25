import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, error, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        {...rest}
        className={twMerge(
          'input-bordered input-primary input w-full',
          error && 'input-error',
          className
        )}
      />
    )
  }
)
