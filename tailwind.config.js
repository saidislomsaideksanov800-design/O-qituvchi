/** Design tokens — copied 1:1 from the design style guide (styleguide.html). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Breakpoints: mobile first (390 base) → md 768 → lg 1024 → xl 1280 (1440 frame).
      // "nav" is where the desktop menu replaces the hamburger.
      screens: { nav: '1100px' },

      colors: {
        ink: '#1F2430', // main text (graphite)
        // Secondary text. On #F5F6F8 sections it switches to #656C79 for AA contrast (see index.css).
        slate: 'rgb(var(--slate) / <alpha-value>)',
        'gray-light': '#F5F6F8',
        pink: { 100: '#FDE8EF', 200: '#F9D5E2' },
        green: { 1: '#B6F36B', 2: '#7EE08A' },
        error: '#B42318',
      },

      backgroundImage: {
        'grad-green': 'linear-gradient(135deg, #B6F36B 0%, #7EE08A 100%)',
        'grad-green-hover': 'linear-gradient(135deg, #C3F682 0%, #8CE697 100%)',
        'grad-green-active': 'linear-gradient(135deg, #A4E654 0%, #6CD27A 100%)',
        'grad-pink': 'linear-gradient(135deg, #FDE8EF 0%, #F9D5E2 100%)',
      },

      fontFamily: {
        head: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        h1: ['64px', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        'h1-m': ['36px', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        h2: ['44px', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        'h2-m': ['28px', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        h3: ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'h3-m': ['20px', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        h4: ['18px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        lead: ['18px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.6' }],
      },

      // 8px grid additions (Tailwind already has 2=8, 4=16, 6=24, 8=32 ...)
      spacing: { 18: '72px', 30: '120px' },

      borderRadius: {
        card: '24px', // cards
        btn: '16px', // buttons, inputs
        sm: '12px', // small buttons
        tile: '20px', // rows, badges
        frame: '32px', // portrait frame
      },

      boxShadow: {
        sm: '0 1px 2px rgba(31,36,48,.04), 0 4px 16px rgba(31,36,48,.04)',
        md: '0 0 0 1px rgba(31,36,48,.03), 0 2px 4px rgba(31,36,48,.03), 0 16px 40px rgba(31,36,48,.06)',
        lg: '0 0 0 1px rgba(31,36,48,.03), 0 24px 64px rgba(31,36,48,.10)',
        glass: '0 0 0 1px rgba(31,36,48,.03), 0 2px 4px rgba(31,36,48,.03), 0 16px 40px rgba(31,36,48,.06), inset 0 1px 0 rgba(255,255,255,.8)',
        'glass-lg': '0 0 0 1px rgba(31,36,48,.03), 0 24px 64px rgba(31,36,48,.10), inset 0 1px 0 rgba(255,255,255,.8)',
        'glass-btn': '0 1px 2px rgba(31,36,48,.04), 0 4px 16px rgba(31,36,48,.04), inset 0 0 0 1px rgba(31,36,48,.08)',
        green: '0 8px 24px rgba(126,224,138,.40), inset 0 1px 0 rgba(255,255,255,.55)',
        'green-lg': '0 12px 32px rgba(126,224,138,.50), inset 0 1px 0 rgba(255,255,255,.55)',
        'green-sm': '0 4px 12px rgba(126,224,138,.35), inset 0 1px 0 rgba(255,255,255,.5)',
        focus: '0 0 0 4px rgba(182,243,107,.55)',
      },

      maxWidth: { page: '1248px' }, // 1200 content + 2 × 24 gutter

      transitionTimingFunction: { soft: 'cubic-bezier(.2,.7,.2,1)' },

      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
}
