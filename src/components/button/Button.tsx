import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  iconOnly?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading,
      className,
      icon,
      iconPosition = 'start',
      iconOnly,
      ...rest
    },
    ref
  ) => {
    const displayIcon = !isLoading ? icon : null

    return (
      <button
        ref={ref}
        {...rest}
        className={twMerge(
          'btn',
          icon && 'gap-2',
          iconOnly && 'btn-square',
          isLoading && 'loading gap-0',
          className
        )}
      >
        {iconPosition === 'start' && displayIcon}
        {children}
        {iconPosition === 'end' && displayIcon}
      </button>
    )
  }
)
