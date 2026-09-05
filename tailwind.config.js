/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Token System
        brand: {
          DEFAULT: '#0F766E', // Primary Brand
          hover: '#115E59',   // Slightly darker for hover
          light: '#CCFBF1',   // Light Accent
          accent: '#14B8A6',  // Primary Accent
        },
        surface: {
          DEFAULT: '#FFFFFF', // Primary Background
          muted: '#F8FAFC',   // Secondary Background
          alt: '#F1F5F9',     // Tertiary Background
          dark: '#0F172A',    // Primary Dark (For dark sections)
          'dark-muted': '#1E293B', // Secondary Dark
        },
        text: {
          primary: '#0F172A', // Dark text for light bg
          secondary: '#475569', // Body Text
          muted: '#64748B',   // Muted Text
          inverse: '#FFFFFF', // Text on dark backgrounds
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#334155',
        },
        status: {
          success: '#16a34a',
          warning: '#d97706',
          error: '#dc2626',
        },
        
        // Retain original map structures where necessary so as not to break existing component hardcodes
        // But force them to align with our semantic tokens.
        navy: {
          DEFAULT: '#0F172A',
          900: '#020617',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        },
        teal: {
          DEFAULT: '#0F766E',
          dark: '#115E59',
          accent: '#14B8A6',
          light: '#CCFBF1',
          50: '#F0FDFA',
          100: '#CCFBF1',
          500: '#14B8A6',
          700: '#0F766E',
          800: '#115E59',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'pill': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'card': '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'elevated': '0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)',
        'grid-pattern-dark': 'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
