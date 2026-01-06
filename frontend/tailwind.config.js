/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'za-sand': '#F6F1E7',
        'za-ivory': '#FFFCF6',
        'za-emerald': '#0B3D2E',
        'za-forest': '#0F5132',
        'za-gold': '#C9A227',
        'za-ink': '#0F172A',
        'za-slate': '#475569',
        'za-line': 'rgba(11,61,46,0.15)',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

