const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  // important: '#__next',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#77C159',
          50: '#e8ede6',
          100: '#d1decc',
          200: '#a6cc97',
          300: '#94c97f',
          400: '#85c46c',
          500: '#77C159',
          600: '#5bb038',
          700: '#49a324',
          800: '#348214',
          900: '#276b0b',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-border-gradient-radius'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      })
    }),
  ],
}
