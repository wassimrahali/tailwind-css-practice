/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {
      colors:{
        primary:'#F92647',
        secandary:{
          100:'#38BDF8',
          200:'#F98647'
        }
      },
      fontFamily:{
        nunito: ['Nunito']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  ],
}