/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'image': '0px 0px 24px -4px rgba(0, 0, 0, 0.3)',
        'image-light': '0px 0px 16px -4px rgba(0, 0, 0, 0.125)',
        'button': '0px 0px 0px 2px inset',
      }
    },
  },
  plugins: [],
}



