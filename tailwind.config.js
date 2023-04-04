/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem'
      },
      letterSpacing: {
        tightest: '-.06em',
      },
      gradientColorStops: {
        'start': '#007CF0',
        'end': '#00DFD8',
      },
      colors: {
        'blue-1': '#00b0e3',
        'blue-2': '#00DFD8',
      }
    },
    fontFamily: {
      'inter': ['Inter'],
    },
    
  },
  plugins: [],
}

