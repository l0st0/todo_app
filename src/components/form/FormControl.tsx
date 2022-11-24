import React from 'react'
import { twMerge } from 'tailwind-merge'

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormControl = ({ children, className, ...rest }: FormControlProps) => {
  return (
    <div {...rest} className={twMerge('form-control w-full', className)}>
      {children}
    </div>
  )
}

export default FormControl
