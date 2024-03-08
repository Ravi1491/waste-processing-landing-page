import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#101828',
        white: '#FFFFFF',
        primary: '#016A70',
        alert: {
          error: '#F04438',
          success: '#12B76A',
        },
      },
    },
  },
  plugins: [],
};
export default config;
