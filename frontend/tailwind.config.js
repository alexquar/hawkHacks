/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors:{
        words : '#0a1111',
        background: '#f3f8f7',
        primary: '#66a2a1',
        secondary: '#43d9d2',
        accent:'40d0db'
        },
    },
  },
  plugins: [],
}

