import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  iconStart?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, className, iconStart, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={twMerge(
          'btn',
          iconStart && 'gap-2',
          isLoading && 'loading gap-0',
          className
        )}
      >
        {!isLoading && iconStart}
        {children}
      </button>
    )
  }
)

export default Button
