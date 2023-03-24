const { colors } = require(`tailwindcss/defaultTheme`);
const defaultTheme = require('tailwindcss/defaultTheme')

const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    './src/pages/**/*.{html,js,ts,tsx}',
    './src/components/**/*.{html,js,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato']
      },
      screens: {
        'xs': '340px',
        ...defaultTheme.screens,
      },
      colors: {
        primary: colors.indigo,
        blue: colors.blue,
      },
      container: {
        center: true,
        padding: {

          DEFAULT: '1rem',
          sm: '1rem',
          lg: '5rem',
          xl: '9rem',
          '2xl': '10rem',
        },
      },
    },
  },
});
