import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface FormControlProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const FormControl = ({
  children,
  className,
  ...rest
}: FormControlProps) => {
  return (
    <div {...rest} className={twMerge('form-control w-full', className)}>
      {children}
    </div>
  )
}
