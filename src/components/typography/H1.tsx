import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export const H1 = ({ children, className, ...rest }: H1Props) => {
  return (
    <h1
      {...rest}
      className={twMerge('text-4xl md:text-5xl xl:text-6xl', className)}
    >
      {children}
    </h1>
  )
}
