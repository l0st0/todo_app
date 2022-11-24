import { formatDistance } from 'date-fns'

export const tDynamicString = (msg = '') =>
  msg as unknown as TemplateStringsArray

export const dateTimeAgo = (date: Date, addSuffix = true) =>
  formatDistance(new Date(date), new Date(), {
    addSuffix,
  })
