import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TopHeadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopHeading = ({ children }: TopHeadingProps) => {
  return <div className={twMerge('mt-8 mb-12')}>{children}</div>
}

export default TopHeading
