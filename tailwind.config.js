/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#3550e0',
        'primary-ink': '#2238b8',
        secondary: '#c6f432',
        lime: '#c6f432',
        'lime-soft': '#e9fbb0',
        ink: '#0b0f1a',
        'ink-2': '#151b2b',
        'ink-soft': '#4a5368',
        line: '#e4e8f0',
        'bg-soft': '#f3f5f9',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(14,23,38,.05), 0 4px 14px rgba(14,23,38,.05)',
        'card': '0 6px 24px rgba(14,23,38,.08), 0 2px 6px rgba(14,23,38,.05)',
        'hero': '0 24px 60px rgba(53,80,224,.12), 0 8px 20px rgba(11,15,26,.06)',
        'lime': '0 10px 40px rgba(198,244,50,.35)',
      },
    },
  },
  plugins: [],
}
