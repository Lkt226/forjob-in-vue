module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white:  { DEFAULT: '#ffffff', dark: '#F5F5F5' },
        gray:  { light: '#E5E5E5', DEFAULT: '#C4C4C4' },
        black:  { DEFAULT: '#4E4E4E' },

        purple: { light: '#9F8DFF', DEFAULT: '#7B61FF' },
        red:    { DEFAULT: '#B00020', dark: '#93001B' },
        green:  { DEFAULT: '#018786' }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
