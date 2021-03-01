/* eslint-disable prettier/prettier */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      'desktop': '30%',
      'tablet': '45%',
      'mobile': '90%',
      'full': '100%',
     },
     maxWidth: {
      'desktop': '35%',
     },
    gradientColorStops: theme => ({
      ...theme('colors'),
     }),
    fontFamily: {
      sans: ['Montserrat']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
