import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'blue-200': '#e6effe',
        'blue-500': '#99a8ea',
        'blue-800': '#084FD4',
        'violet-200': '#f0e5fb',
        'violet-500': '#bf96f0',
        'violet-800': '#790BE0',
        'green-200': '#ebfaf8',
        'green-500': '#86cccb',
        'green-800': '#1E6B65',
        'red-200': '#fce8f1',
        'red-500': '#ee8eb5',
        'red-800': '#D11B67',
        'brown-200': '#fffbe6',
        'brown-500': '#fff700',
        'brown-800': '#615200',
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
        xs: '475px',
        ...defaultTheme.screens,
      },
      content: {
        bug: 'url("/assets/icons/bug.svg")',
        'bug-dark': 'url("/assets/icons/bug-dark.svg")',
        dark: 'url("/assets/icons/moon.svg")',
        'dark-mode': 'url("/assets/icons/moon-dark.svg")',
        light: 'url("/assets/icons/sun.svg")',
        'light-mode': 'url("/assets/icons/sun-dark.svg")',
        system: 'url("/assets/icons/system.svg")',
        exclamation: 'url("/assets/icons/exclamation.svg")',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
