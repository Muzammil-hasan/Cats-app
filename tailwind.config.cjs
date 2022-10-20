/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      accent: ['Amatic SC', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#e3e3e3',
        text: '#262626',
      },
    },
  },
  plugins: [],
};
