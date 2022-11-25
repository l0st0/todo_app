// @ts-check
const path = require('path')

/**
 * @type {import('next-i18next').UserConfig}
 */

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localePath: path.resolve('./src/locales'),
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
