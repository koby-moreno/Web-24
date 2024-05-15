/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'image': '0px 0px 24px -4px rgba(0, 0, 0, 0.3)',
        'button': '0px 0px 0px 2px inset',
      }
    },
  },
  plugins: [],
}



