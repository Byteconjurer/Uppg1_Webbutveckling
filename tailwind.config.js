/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors
        'header-full': '#272e3a',
        'header-small': '#28a4af',
        'header-small-border': '#185d63',
      },
      screens: {
        'sm': '0px',
        'full': '940px'
    },
    },
  },
  plugins: [],
}

