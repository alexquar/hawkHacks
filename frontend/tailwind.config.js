/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        basic : '#08080a',
        secondary: '#40434E',
        primary: '#97bdeb',
        accent: '#fb4c88',
        },
    },
  },
  plugins: [],
}

