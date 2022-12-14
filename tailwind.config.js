/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['DynaPuff', 'cursive'],
        text: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
