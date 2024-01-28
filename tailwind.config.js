/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDE5CB',
        accent: '#FFCAC2',
        accentl: '#F4DAC7',
        accentd: '#DDB0AA',
        unamed: {
           50: '#F5F5F5',
          100: '#EDE5CB',
          150: '#E3DBC3',
          200: '#D8D1BA',
          300: '#C3BDA8',
          300: '#AEA897',
          200: '#AEA897',
          400: '#999486',
          500: '#858074',
          600: '#706C63',
          700: '#5B5752',
          800: '#464340',
          900: '#312F2F',
          950: '#1F1E1E',
        },
      },
      typography: ({ theme }) => ({
        unamed: {
          css: {
            '--tw-prose-body': theme('colors.unamed[50]'),
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-lead': theme('colors.accent'),
            '--tw-prose-links': theme('colors.accent'),
            '--tw-prose-bold': theme('colors.primary'),
            '--tw-prose-counters': theme('colors.accent'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.primary'),
            '--tw-prose-quotes': theme('colors.primary'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.accent'),
            '--tw-prose-code': theme('colors.accent'),
            '--tw-prose-pre-code': theme('colors.unamed[50]'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.primary'),
            '--tw-prose-td-borders': theme('colors.primary'),
          },
        },
      }),
      fontFamily: {
        'sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'xs': '520px',
      },
      keyframes: {
        funnyJokeKeyFrames: {
          '0%': { transform: 'translateY(0px) rotate(0turn)', animationTimingFunction: 'ease-in' },
          '50%': { transform: 'translateY(0px) rotate(25turn)', animationTimingFunction: 'linear'  },
          '100%': { transform: 'translateY(-300px) rotate(50turn)' },
        },
      },
      animation: {
        funnyJoke: 'funnyJokeKeyFrames 10s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}

