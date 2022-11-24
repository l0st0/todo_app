import React from 'react'
import { twMerge } from 'tailwind-merge'

interface MessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const ErrorMessage = ({ children, className, ...rest }: MessageProps) => {
  return (
    <p {...rest} className={twMerge('mt-2 text-error', className)}>
      {children}
    </p>
  )
}

export default ErrorMessage
