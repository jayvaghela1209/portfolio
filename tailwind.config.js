/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1026',
        surface: '#181A3A',
        surface2: '#20234D',
        border: '#33356B',
        violet: '#7C6FFF',
        coral: '#FF6B5C',
        teal: '#2DD4BF',
        amber: '#FBBF24',
        mist: '#A8A6C4',
        paper: '#F5F3FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        pulseNode: {
          '0%, 100%': { opacity: 0.35, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.15)' },
        },
        flowDash: {
          to: { strokeDashoffset: -24 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pulseNode: 'pulseNode 2.4s ease-in-out infinite',
        flowDash: 'flowDash 1.2s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
