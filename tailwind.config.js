/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      boxShadow: {
        'image': '0px 0px 24px -4px rgba(0, 0, 0, 0.3)',
        'image-dm': '0px 0px 24px -4px rgba(0, 0, 0, 0.75)',
        'image-light': '0px 0px 16px -4px rgba(0, 0, 0, 0.125)',
        'image-light-dm': '0px 0px 16px -4px rgba(0, 0, 0, 0.5)',
        'button': '0px 0px 0px 2px inset',
        'button-dm': '0px 0px 0px 1.5px inset',
      },
      backgroundImage: {
        'dots-light': 'radial-gradient(lightgray 1.25px, transparent 0)',
        'dots-dark': 'radial-gradient(#3f3f46 1.25px, transparent 0)',
        'gradient-bottom': 'linear-gradient(180deg, rgba(243,244,246, 0) 0%, rgba(243,244,246, 1) 100%);',
        'gradient-top': 'linear-gradient(0deg, rgba(243,244,246, 0) 0%, rgba(243,244,246, 1) 100%);',
        'gradient-dm-bottom': 'linear-gradient(180deg, rgba(35,40,50,0) 0%, rgba(35,40,50,1) 100%);',
        'gradient-dm-top': 'linear-gradient(0deg, rgba(35,40,50,0) 0%, rgba(35,40,50,1) 100%);'
      },
      colors: {
        'dark-2': '#232832',
        'dark-1': '#181a21',
        'dark-3': '#353b49',
        'dark-red-hover': '#421818'
      }
    },
  },
  plugins: [],
}



