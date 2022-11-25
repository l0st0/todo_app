import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  displayArrow?: boolean
}

interface CollapseTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}
interface CollapseDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Collapse = ({
  className,
  displayArrow = true,
  children,
  ...rest
}: CollapseProps) => {
  return (
    <div
      {...rest}
      className={twMerge('collapse w-full', displayArrow && 'collapse-arrow')}
    >
      <input type="checkbox" />
      {children}
    </div>
  )
}

export const CollapseTitle = ({
  children,
  className,
  ...rest
}: CollapseTitleProps) => {
  return (
    <p {...rest} className={twMerge('collapse-title font-semibold', className)}>
      {children}
    </p>
  )
}

export const CollapseDescription = ({
  children,
  className,
  ...rest
}: CollapseDescriptionProps) => {
  return (
    <p {...rest} className={twMerge('collapse-content', className)}>
      {children}
    </p>
  )
}
