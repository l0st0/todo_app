import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TopHeadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopHeading = ({ children, className, ...rest }: TopHeadingProps) => {
  return (
    <div {...rest} className={twMerge('mt-6 mb-8 sm:mt-8 sm:mb-10', className)}>
      {children}
    </div>
  )
}

export default TopHeading
