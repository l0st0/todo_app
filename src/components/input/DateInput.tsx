import React from 'react'
import { twMerge } from 'tailwind-merge'
import { DateType } from '@/types'
import { dateInputFormat, dateTimeInputFormat } from '@/utils'

export interface DateInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  dateValue: DateType
  type?: 'date' | 'datetime-local'
  onDateChange?: (date?: Date) => void
}

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    { type = 'date', className, dateValue, onChange, onDateChange, ...rest },
    ref
  ) => {
    const onCustomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      const newValue = value ? new Date(value) : undefined

      if (onDateChange) onDateChange(newValue)
      if (onChange) onChange(event)
    }

    const formatedValue = React.useMemo(() => {
      if (!dateValue) return dateValue
      if (type === 'date') return dateInputFormat(dateValue)
      if (type === 'datetime-local') return dateTimeInputFormat(dateValue)
    }, [dateValue])

    return (
      <input
        ref={ref}
        {...rest}
        value={formatedValue}
        onChange={onCustomChange}
        type={type}
        className={twMerge('input-bordered input-primary input', className)}
      />
    )
  }
)
