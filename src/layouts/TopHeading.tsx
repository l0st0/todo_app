import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TopHeadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopHeading = ({ children, className, ...rest }: TopHeadingProps) => {
  return (
    <div {...rest} className={twMerge('mb-6 sm:mb-8', className)}>
      {children}
    </div>
  )
}

export default TopHeading
