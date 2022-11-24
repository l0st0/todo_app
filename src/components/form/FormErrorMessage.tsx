import React from 'react'
import { twMerge } from 'tailwind-merge'

interface FormErrorMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  display: boolean
}

const FormErrorMessage = ({
  children,
  className,
  display,
  ...rest
}: FormErrorMessageProps) => {
  return (
    <p
      {...rest}
      className={twMerge(
        'mt-2 text-sm text-error',
        !display && 'hidden',
        className
      )}
    >
      {children}
    </p>
  )
}

export default FormErrorMessage
