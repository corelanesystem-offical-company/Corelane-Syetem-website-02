/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A', // Slate 900
          900: '#020617', // Slate 950
          800: '#0F172A',
          700: '#1E293B', // Slate 800
          600: '#334155',
        },
        teal: {
          DEFAULT: '#0F766E', // Primary
          dark: '#115E59',    // Primary Dark
          accent: '#14B8A6',  // Accent
          light: '#CCFBF1',   // Primary Light
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          700: '#0F766E',
          800: '#115E59',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(15, 118, 110, 0.3)',
        'glow-lg': '0 0 30px rgba(15, 118, 110, 0.4)',
      },
      backgroundImage: {
        'grid-slate': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
        'grid-navy': 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
