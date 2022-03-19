module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'league' : ['"League Gothic"', 'sans-serif'],
        'staatliches': ['Staatliches', 'sans-serif'],
      },
      colors:{
        'dark-blue': '#142850',
      },
      fontSize:{
        '10xl': '10rem',
      },
    },
  },
  plugins: [],
}
