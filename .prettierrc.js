const pluginSortImports = require('@trivago/prettier-plugin-sort-imports')
const pluginTailwindcss = require('prettier-plugin-tailwindcss')

const bothParser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse,
}

/** @type {import("prettier").Plugin}  */
const mixedPlugin = {
  parsers: {
    typescript: bothParser,
  },
}

module.exports = {
  plugins: [mixedPlugin],
  arrowParens: 'always',
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  importOrder: [
    '^react',
    '^next/(.*)$',
    '^lodash/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSortSpecifiers: true,
}
