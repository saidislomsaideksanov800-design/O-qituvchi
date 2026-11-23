/** Design tokens — black, yellow, white. Yellow is a fill (buttons, active, tiles) with black text on top. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: { nav: '960px' },
      colors: {
        // Yellow: never used as text on white (too low contrast) — only as a background under black text.
        primary: { DEFAULT: '#FFC700', 600: '#F2B900', 700: '#E0A800', 50: '#FFF7D1', 100: '#FFEC99' },
        ink: '#111111', // black: main text, dark sections (on yellow: 12.6:1)
        muted: '#575757', // secondary text (7.2:1 on white)
        line: '#E6E6E1', // borders
        surface: '#FDE8EF', // page background (light pink); secondary text on it is 6.1:1
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
        focus: '0 0 0 3px rgba(255,199,0,.7)',
      },
      maxWidth: { page: '1248px', prose: '720px' },
    },
  },
  plugins: [],
}
