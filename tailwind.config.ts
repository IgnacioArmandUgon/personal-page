import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulseLittle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.01)' },
        },
        bounceLittle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        },
        moveLeft: {
          '0%': {},
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 7s ease-in-out infinite',
        pulseLittle: 'pulseLittle 4s ease-in-out infinite',
        bounceLittle: 'bounceLittle 2s ease-in-out infinite',
        moveLeft: 'moveLeft 2s ease-in-out initial',
      },
    },
  },
  plugins: [],
};
export default config;
