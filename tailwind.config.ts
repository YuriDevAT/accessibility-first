import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        blue: {
          200: '#E6EFFE',
          500: '#99A8EA',
          800: '#084FD4',
        },
        purple: {
          200: '#F0E5FB',
          500: '#BF96F0',
          800: '#790BE0',
        },
        green: {
          200: '#EBFAF8',
          500: '#86CCCB',
          800: '#1E6B65',
        },
        red: {
          200: '#FCE8F1',
          500: '#EE8EB5',
          800: '#D11B67',
        },
        yellow: {
          200: '#FFFBE6',
          500: '#FFF700',
          800: '#615200',
        },
        accent: {
          1: '#FAFAFA',
          2: '#EAEAEA',
          3: '#333',
        },
        success: '#0070F3',
        cyan: '#79FFE1',
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
      fontFamily: {
        title: ['var(--font-openSauceBlack)', 'sans-serif'],
        heading: ['var(--font-openSauce)', 'sans-serif'],
        headingSemi: ['var(--font-openSauceSemi)', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
