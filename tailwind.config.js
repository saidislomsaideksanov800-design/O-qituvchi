/** Design tokens — clean public-service style (blue, white, light gray). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: { nav: '960px' },
      colors: {
        primary: { DEFAULT: '#1B5BD3', 600: '#174FB8', 700: '#123F94', 50: '#EEF4FF', 100: '#DCE8FF' },
        ink: '#0E1A2B', // main text
        muted: '#566173', // secondary text (6.3:1 on white)
        line: '#E2E8F0', // borders
        surface: '#F4F7FB', // page background
        success: { DEFAULT: '#0B7A43', 50: '#E7F6EE' },
        danger: { DEFAULT: '#B42318', 50: '#FDECEA' },
        warn: { DEFAULT: '#8A5200', 50: '#FFF4E0' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h1-m': ['28px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        h2: ['28px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h2-m': ['22px', { lineHeight: '1.3' }],
        h3: ['18px', { lineHeight: '1.4' }],
      },
      borderRadius: { card: '16px', btn: '12px' },
      boxShadow: {
        card: '0 1px 2px rgba(14,26,43,.04), 0 1px 3px rgba(14,26,43,.06)',
        'card-hover': '0 6px 20px rgba(14,26,43,.08)',
        focus: '0 0 0 3px rgba(27,91,211,.35)',
      },
      maxWidth: { page: '1248px', prose: '720px' },
    },
  },
  plugins: [],
}
