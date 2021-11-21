const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    gray: colors.trueGray,
    red: colors.red,
    blue: colors.sky,
    yellow: colors.amber,
    green: colors.green,
    pink: colors.pink,
    purple: colors.purple,
    orange: colors.orange,
    lime: colors.lime,
    teal: colors.teal,
    indigo: colors.indigo,
    violet: colors.violet,
    fuchsia: colors.fuchsia,
    rose: colors.rose,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
