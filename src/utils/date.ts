import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import { DateType } from '@/types'

export const dateTimeAgo = (date?: DateType, addSuffix = true) => {
  if (!date) return undefined
  return formatDistance(new Date(date), new Date(), {
    addSuffix,
  })
}

export const dateTimeLeft = (date?: DateType, addSuffix = false) => {
  if (!date) return undefined
  return formatDistanceToNow(new Date(date), {
    addSuffix,
  })
}

export const dateInputFormat = (date: DateType) =>
  date && format(new Date(date), 'yyyy-MM-dd')

export const dateTimeInputFormat = (date: DateType) =>
  date && format(new Date(date), "yyyy-MM-dd'T'HH:mm")

export const dateToNumber = (date: DateType) => date && new Date(date).getTime()
