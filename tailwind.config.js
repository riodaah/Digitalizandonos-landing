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
        primary: '#0a5cff',
        'primary-ink': '#0037a6',
        secondary: '#00c2d4',
        ink: '#0e1726',
        'ink-soft': '#4b5563',
        line: '#e6eaf1',
        'bg-soft': '#f6f8fb',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(14,23,38,.05), 0 4px 14px rgba(14,23,38,.05)',
        'card': '0 6px 24px rgba(14,23,38,.08), 0 2px 6px rgba(14,23,38,.05)',
        'hero': '0 24px 60px rgba(10,92,255,.12), 0 8px 20px rgba(14,23,38,.06)',
      },
    },
  },
  plugins: [],
}
