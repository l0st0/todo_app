import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        {...rest}
        type="checkbox"
        className={twMerge('checkbox', className)}
      />
    )
  }
)
