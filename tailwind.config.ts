import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-white':     '#d4dcff',
        'background-color': '#1F2A3A',
        'card-color':       '#263E5F',
        'container-bg':     '#172D4E',
        'blue-gray':        '#1E3B66',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};

export default config;
