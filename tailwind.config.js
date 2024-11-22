/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'greenBon' : '#00b289',
        'grayBon' : '#4c4d5f',
        'whiteBon' : '#fff',
        'yellowBon' : '#f8db62'
      }
    },
  },
  plugins: [],
}

