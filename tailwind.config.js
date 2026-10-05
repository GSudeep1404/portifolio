/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#faf8f5', // Main warm background
          150: '#f6f2ea',
          200: '#f1ebd8',
          250: '#ede4cf',
          300: '#e5d9bf',
          400: '#d7c5a3',
          500: '#bfa780',
        },
        brown: {
          50: '#faf7f4',
          100: '#f2ece4',
          200: '#e3d6c7',
          300: '#d0baa4',
          400: '#b89a7f',
          500: '#9d7c60',
          600: '#7c5f47',
          700: '#5e4634',
          800: '#453225',
          850: '#38281e',
          900: '#2b1e17', // Rich roast espresso
          950: '#1d140f', // Darkest chocolate espresso
        },
        espresso: {
          light: '#543f32',
          DEFAULT: '#36261d',
          dark: '#241711',
          black: '#170e0a',
        },
        terracotta: {
          light: '#ea580c',
          DEFAULT: '#c2410c',
          dark: '#9a3412',
        },
        sand: {
          50: '#f9f8f4',
          100: '#f3efe6',
          200: '#e7e0d1',
          300: '#d6caa6',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-gentle': 'floatGentle 8s ease-in-out infinite',
        'float-gentle-reverse': 'floatGentleReverse 9s ease-in-out infinite',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatGentleReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(6px)' },
        },
      }
    },
  },
  plugins: [],
}
