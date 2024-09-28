import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import typographyPlugin from '@tailwindcss/typography';

const config: Config = {
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
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [typographyPlugin, daisyui],
  daisyui: {
    themes: [
      {
        custom: {
          primary: '#e63946',
          'primary-focus': '#d62828',
          'primary-content': '#ffffff',
          secondary: '#f5f5f5',
          'secondary-focus': '#c0c0c0',
          'secondary-content': '#000000',
          accent: '#ffffff',
          'accent-focus': '#f0f0f0',
          'accent-content': '#000000',
          neutral: '#1e1e1e',
          'neutral-focus': '#333333',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#e5e5e5',
          'base-300': '#b0b0b0',
          'base-content': '#000000',
          info: '#00bcd4',
          success: '#4caf50',
          warning: '#ff9800',
          error: '#f44336',
          '--rounded-box': '1.5rem',
          '--rounded-btn': '.75rem',
          '--rounded-badge': '1.5rem',
          '--animation-btn': '.3s',
          '--animation-input': '.3s',
          '--btn-text-case': 'lowercase',
          '--navbar-padding': '.8rem',
          '--border-btn': '2px solid #000000',
        },
      },
    ],
  },
};
export default config;
