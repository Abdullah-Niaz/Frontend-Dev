/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Tailwind_CSS/Day1/index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'red'
      },
      fontSize:{
        'myfont':'2rem'
      },
      fontFamily:{
        'myfam':['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

