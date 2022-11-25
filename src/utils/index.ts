export * from './date'

export const tDynamicString = (msg = '') =>
  msg as unknown as TemplateStringsArray

export const includesString = (str1?: string, str2?: string) => {
  if (!str1 || !str2) return false
  return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase())
}
