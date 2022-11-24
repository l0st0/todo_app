import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CheckBox = ({ className, ...rest }: CheckBoxProps) => {
  return (
    <input
      {...rest}
      type="checkbox"
      className={twMerge('checkbox', className)}
    />
  )
}

export default CheckBox
