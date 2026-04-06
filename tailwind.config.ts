import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          50:  '#fdf6ee',
          100: '#f7e5cc',
          200: '#edc898',
          300: '#d4a96a',
          400: '#c4913f',
          500: '#b87333',
          600: '#9a5e28',
          700: '#7c4a1e',
          800: '#5e3716',
          900: '#3d2810',
        },
        dark: {
          50:  '#2a1a08',
          100: '#1e1208',
          200: '#160d05',
          300: '#100800',
          400: '#0f0a00',
          500: '#080500',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #b87333 0%, #d4a96a 50%, #b87333 100%)',
        'dark-gradient':   'linear-gradient(135deg, #0f0a00 0%, #1e1208 50%, #0f0a00 100%)',
        'grid-pattern':    'linear-gradient(rgba(184,115,51,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,115,51,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'shimmer':    'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'copper':    '0 0 20px rgba(184,115,51,0.3)',
        'copper-lg': '0 0 40px rgba(184,115,51,0.4)',
        'card':      '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
