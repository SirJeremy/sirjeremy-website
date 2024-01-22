/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FFCAC2',
        unamed: {
           50: '#F5F5F5',
          100: '#EDE5CB',
          150: '#E3DBC3',
          200: '#D8D1BA',
          300: '#C3BDA8',
          300: '#AEA897',
          200: '#AEA897',
          400: '#999486',
          500: '#858074',
          600: '#706C63',
          700: '#5B5752',
          800: '#464340',
          900: '#312F2F',
          950: '#1F1E1E',
        },
      }
    },
  },
  plugins: [],
}

