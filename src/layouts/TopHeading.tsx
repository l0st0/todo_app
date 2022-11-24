import React from 'react'

interface TopHeadingProps extends React.HTMLAttributes<HTMLDivElement> {}

const TopHeading = ({ children }: TopHeadingProps) => {
  return <div className={'mt-6 mb-8 sm:mt-8 sm:mb-10'}>{children}</div>
}

export default TopHeading
