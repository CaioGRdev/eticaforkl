/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'etica-blue': '#1B00BE',
        'primary-orange': '#FF8D5C',
      },
      keyframes: {
        discreteFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kayacAnime: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-60%)' }, // Ajustado para dar o looping perfeito na nova distribuição
        },
      },
      animation: {
        'discrete-fade-in': 'discreteFadeIn 1s ease-out forwards',
        'kayac-bg': 'kayacAnime 4s ease-in-out infinite', // <--- Alterado de 17.5s para 4s (Ficou muito mais rápido!)
      },
      animationDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}