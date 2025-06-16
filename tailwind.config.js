/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eeff',
          200: '#c0ddff',
          300: '#a1ccff',
          400: '#81bbff',
          500: '#3392ff',
          600: '#1a7fff',
          700: '#0066ff',
          800: '#0052cc',
          900: '#003d99',
        },
        secondary: {
          50: '#f2fcf9',
          100: '#e6f9f3',
          200: '#bff0e0',
          300: '#99e7cd',
          400: '#73deba',
          500: '#4dd5a7',
          600: '#26cc94',
          700: '#00c381',
          800: '#009c67',
          900: '#00754d',
        },
        accent: {
          50: '#fff6e6',
          100: '#ffedcc',
          200: '#ffdb99',
          300: '#ffca66',
          400: '#ffb833',
          500: '#ffa600',
          600: '#cc8500',
          700: '#996300',
          800: '#664200',
          900: '#332100',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};