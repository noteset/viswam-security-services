/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        background: {
          light: '#f8fafc', // Light mode background
          dark: '#0f172a', // Dark mode background (darker shade)
        },
        text: {
          light: '#1e293b', // Light mode text color
          dark: '#0f172a', // Dark mode text color (matches dark background)
        },
      },
    },
  },
  plugins: [],
};
