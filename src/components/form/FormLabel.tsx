import React from 'react'
import { twMerge } from 'tailwind-merge'

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const FormLabel = ({
  children,
  className,
  required,
  ...rest
}: FormLabelProps) => {
  return (
    <label {...rest} className={twMerge('label-text label', className)}>
      <span>
        {children} {required && <span className="text-red-500">*</span>}
      </span>
    </label>
  )
}

export default FormLabel
