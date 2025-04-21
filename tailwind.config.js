/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        darkCard: '#1e1e1e',
        darkText: '#f3f4f6',
        lightBg: '#ffffff',
        lightCard: '#f3f4f6',
        lightText: '#1f2937',
      },
      keyframes: {
        'attention-zoom': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      animation: {
        'attention-zoom': 'attention-zoom 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
