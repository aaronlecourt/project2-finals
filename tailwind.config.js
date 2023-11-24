/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'valorant': ['VALORANT', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'tungsten': ['Tungsten-Bold'],
      },
    },
  },
  plugins: [],
}

