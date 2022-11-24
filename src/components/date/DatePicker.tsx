import React from 'react'
import ReactDatePicker, {
  CalendarContainer,
  CalendarContainerProps,
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { getDate, getMonth } from 'date-fns'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const ExampleCustomInput = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ value, onClick }, ref) => (
  <button
    className="input-bordered input-primary input w-full"
    onClick={onClick}
    type="button"
    ref={ref}
  >
    {value}
  </button>
))

const CalendarHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <div className="flex items-center justify-between bg-base-content">
      <button
        className="btn-ghost btn-square btn"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        type="button"
      >
        <ChevronLeftIcon className="w-5" />
      </button>

      <span className="font-semibold">{months[getMonth(date)]}</span>

      <button
        className="btn-ghost btn-square btn"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        type="button"
      >
        <ChevronRightIcon className="w-5" />
      </button>
    </div>
  )
}

const renderDayContents = (dayOfMonth: number, date: Date | undefined) => {
  return <span>{getDate(date || new Date())}</span>
}

const CustomCalendarContainer = ({
  className,
  children,
}: CalendarContainerProps) => {
  return (
    <div className="bg-neutral">
      <CalendarContainer className={className}>
        <div className="relative">{children}</div>
      </CalendarContainer>
    </div>
  )
}

const DatePicker = ({ ...rest }: ReactDatePickerProps) => {
  return (
    <ReactDatePicker
      customInput={<ExampleCustomInput />}
      calendarContainer={CustomCalendarContainer}
      renderCustomHeader={CalendarHeader}
      renderDayContents={renderDayContents}
      {...rest}
    />
  )
}

export default DatePicker
