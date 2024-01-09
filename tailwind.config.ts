/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#131313',
        secondary: '#ECECEC',
        secondaryDark: '#D8D8D8',
        secondaryDarker: '#6C7072',
        socialBorder: '#4B4E4F',
        hoverBackground: '#1C1C1C',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), typography],
};
