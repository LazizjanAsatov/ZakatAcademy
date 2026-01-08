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
        'za-emerald-light': '#0F5132',
        'za-emerald-dark': '#05251C',
        'za-forest': '#0F5132',
        'za-gold': '#C9A227',
        'za-gold-light': '#E5B84A',
        'za-ink': '#0F172A',
        'za-ink-light': '#1E293B',
        'za-slate': '#64748B',
        'za-slate-light': '#94A3B8',
        'za-slate-dark': '#334155',
        'za-line': 'rgba(11,61,46,0.15)',
        'za-line-light': 'rgba(11,61,46,0.08)',
        'za-beige': '#E8DCC6',
        'za-beige-light': '#F4EDE0',
        'za-error': '#DC2626',
        'za-error-light': '#FEE2E2',
        'za-success': '#059669',
        'za-success-light': '#D1FAE5',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(11, 61, 46, 0.08), 0 10px 20px -2px rgba(11, 61, 46, 0.04)',
        'soft-md': '0 4px 20px -2px rgba(11, 61, 46, 0.12), 0 8px 25px -3px rgba(11, 61, 46, 0.06)',
      },
    },
  },
  plugins: [],
}

