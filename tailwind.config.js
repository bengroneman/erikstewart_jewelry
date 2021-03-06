let THEME_DATA = require("./data/theme.json")

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        'blue-gray-e': '#8B91A0',
        'gray-e': '#E3E3E3',
        'dark-gray-e': '#464646',
        'm-gray-e': '#676665',
        'light-gray-e': '#F5F7F7'
      },
      fontFamily: {
        display: [THEME_DATA['font_display'], 'serif'],
        body: [THEME_DATA['font_body'], 'sans-serif']
      },
      fontSize: {
        h1: '7.5rem',
        h2: '3rem',
        h3: '2rem',
        p: '0.875rem'
      },
      letterSpacing: {
        h1: '0.125rem',
        h2: '0.05rem',
        h3: '0.033rem',
        p: '0.014rem'
      }
    },
  },
  variants: {
    textColor: ['hover'],
    backgroundColor: ['hover']
  },
  plugins: [],
}
// TODO: upgrade Tailwindcss to V2.0
// @RESOURCE: https://tailwindcss.com/docs/upgrading-to-v2
