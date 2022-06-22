/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'gray': 'hsl(234, 15%, 66%)',
      'gray-dark': 'hsl(234, 18%, 51%)',
      'gray-shadow': 'hsla(234, 39%, 89%, 70%)',
      'green': 'hsl(151, 60%, 53%)',
      'blue': 'hsl(227, 90%, 62%)',
      'blue-light': 'hsl(234, 37%, 94%)',
      'blue-gray': 'hsl(234, 40%, 74%)',
      'blue-gray-light': 'hsl(205, 22%, 96%)',
      'blue-dark': 'hsl(234, 73%, 23%)',
      'blue-dark-saturated': 'hsl(227, 100%, 47%)',
      'blue-overlay': 'hsl(234, 73%, 23%)',
      'red': 'hsl(348, 99%, 47%)',
      'salmon': 'hsl(360, 92%, 69%)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
};
