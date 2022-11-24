const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka_one: ['var(--font-fredoka_one)', ...fontFamily.sans],
        open_sans: ['var(--font-open_sans)', ...fontFamily.sans],
      },
      gridTemplateColumns: {
        'auto-15': 'repeat(auto-fit, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [require('daisyui')],
}
