import { formatDistance } from 'date-fns'

export const tDynamicString = (msg = '') =>
  msg as unknown as TemplateStringsArray

export const dateTimeAgo = (date: Date, addSuffix = true) =>
  formatDistance(new Date(date), new Date(), {
    addSuffix,
  })

export const includesString = (str1?: string, str2?: string) => {
  if (!str1 || !str2) return false
  return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase())
}
