import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={twMerge(
          'btn-primary btn',
          isLoading && 'loading',
          className
        )}
      >
        {children}
      </button>
    )
  }
)

export default Button
