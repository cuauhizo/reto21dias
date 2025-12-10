/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
import colors from 'tailwindcss/colors';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['"nexa"', 'sans-serif'],
        'nexa-bold': ['"nexa-bold"', 'sans-serif'],
      },
      colors: {
        'tolko-red': 'rgb(204, 0, 50)',
      },
      backgroundImage: {
        'close-menu': "url('../assets/img/icon-close.svg')",
        'open-menu': "url('../assets/img/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
