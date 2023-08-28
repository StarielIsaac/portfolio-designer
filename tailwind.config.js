/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'zoomIn': {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'bounce-slow-mt': {  // Novo efeito 'bounce-slow-mt'
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }, // Altura de salto menor aqui
        },
        'zoomIn-mild': {
          '0%': { transform: 'scale(0.90)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      colors: {
        customBlue: '#0C1139',
        ligthBlue:'#2C5DC3',
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'zoomIn': 'zoomIn 1s',
        'bounce-slow-mt': 'bounce-slow-mt 3s infinite',
        'zoomIn-mild': 'zoomIn-mild 1s',
      },
    },
  },
  plugins: [],
}

