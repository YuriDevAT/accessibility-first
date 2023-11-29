import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#f0e5fb',
        'accent-2': '#bf96f0',
        'accent-7': '#790BE0',
        'blue-200': '#f0e5fb',
        'blue-500': '#bf96f0',
        'blue-800': '#790BE0',
        'purple-200': '#f0e5fb',
        'purple-500': '#bf96f0',
        'purple-800': '#790BE0',
        'green-200': '#f0e5fb',
        'green-500': '#bf96f0',
        'green-800': '#790BE0',
        'red-200': '#f0e5fb',
        'red-500': '#bf96f0',
        'red-800': '#790BE0',
        'yellow-200': '#f0e5fb',
        'yellow-500': '#bf96f0',
        'yellow-800': '#790BE0',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      // lineHeight: {
      //   tight: 1.2,
      // },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        body: ['var(--font-alliance)'],
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
