/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'rotate-clockwise': 'rotateCW 12s infinite linear',
        'rotate-counter': 'rotateCCW 12s infinite linear',
      },
      keyframes: {
        rotateCW: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        rotateCCW: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        nitroRed: '#E80000',
      },
    },
  },
  plugins: [],
}

