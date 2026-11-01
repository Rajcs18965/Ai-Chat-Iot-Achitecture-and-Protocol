/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iot: {
          darkest: '#050a17',
          dark: '#070d20',
          card: '#0c1737',
          cardHover: '#101e47',
          cardBorder: '#172755',
          cardBorderHover: '#233d83',
          border: '#15244d',
          cyan: '#00f2fe',
          cyanGlow: '#00c6ff',
          teal: '#00d2ff',
          emerald: '#10b981',
          gold: '#f59e0b',
          purple: '#a855f7',
          muted: '#8ba2c8',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace']
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -3px rgba(0, 242, 254, 0.35)',
        'neon-cyan-lg': '0 0 30px -2px rgba(0, 242, 254, 0.45)',
        'neon-card': '0 8px 32px 0 rgba(0, 10, 30, 0.37)',
        'glow-active': '0 0 0 1.5px #00f2fe, 0 0 16px -2px rgba(0, 242, 254, 0.45)'
      },
      backgroundImage: {
        'cyan-gradient': 'linear-gradient(135deg, #00f2fe 0%, #0099ff 100%)',
        'btn-gradient': 'linear-gradient(90deg, #00f2fe 0%, #00c6ff 100%)',
        'badge-gradient': 'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(0, 153, 255, 0.05) 100%)'
      }
    },
  },
  plugins: [],
}
