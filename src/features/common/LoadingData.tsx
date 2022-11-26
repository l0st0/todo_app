import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Spinner } from '@/components'

interface LoadingDataProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: boolean
}

const LoadingData = ({
  children,
  className,
  display = true,
  ...rest
}: LoadingDataProps) => {
  return (
    <div
      {...rest}
      className={twMerge(
        'my-2 flex flex-col items-center gap-2',
        !display && 'hidden',
        className
      )}
    >
      <Spinner />
      {children}
    </div>
  )
}

export default LoadingData
