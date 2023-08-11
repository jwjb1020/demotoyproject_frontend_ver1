/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Cafe24Shiningstar: ["Cafe24Shiningstar"],
      Myfont: ['Noto Sans KR', "sans-serif"],

    },
  },
  plugins: [ require('@tailwindcss/forms'),
  require('tailwind-scrollbar-hide')],
}

