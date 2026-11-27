/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        highlight: '#6ac9a2',
        accent: {
          DEFAULT: '#10996d',
          dark: '#6ac9a2',
        },
        surface: {
          light: '#ffffff',
          canvas: '#f8f9f7',
          dark: '#10201b',
          darkCanvas: '#091411',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 46, 35, 0.04), 0 8px 24px -12px rgba(11, 46, 35, 0.08)',
        cardHover: '0 2px 4px rgba(11, 46, 35, 0.06), 0 16px 32px -12px rgba(11, 46, 35, 0.14)',
      },
    },
  },
  plugins: [],
};
