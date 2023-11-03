/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'second-red': '#E03754'
      },
      width: {
        'container-resp': 'min(100%, 40rem)'
      },
      backgroundImage: {
        'bars': "url('/src/img/bars.svg')"
      }
    },
  },
  plugins: [],
}