const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
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
    extend: {
      
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
