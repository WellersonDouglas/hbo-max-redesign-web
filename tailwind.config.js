/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'spider-man': "url('/src/assets/background.jpg')",
        rrr: "url('/src/assets/movie/background.jpg')",
      },
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [
    // Teste
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwind-scrollbar-hide'),
  ],
}
