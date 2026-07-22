/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          neonGreen: '#10B981',
          electricBlue: '#3B82F6',
          vibrantOrange: '#F97316',
          gold: '#F59E0B',
          purple: '#8B5CF6',
        },
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        morphLogo: {
          '0%': { borderRadius: '50%' },
          '50%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '100%': { borderRadius: '50%' },
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite ease-in-out',
        'float': 'float 4s infinite ease-in-out',
        'morph': 'morphLogo 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
