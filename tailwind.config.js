/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'spider-man': "url('/src/assets/background.jpg')",
      },
      fontFamily: {
        gilroy: ['Gilroy-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
