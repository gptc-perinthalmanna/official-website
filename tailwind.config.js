const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './common/*.ts',
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
      spacing: {
        
        '108': '27rem',
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
