/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: '#ffffff',
        bgSecondaryColor: '#F3F3F3',
        main: '#e22b36',
        mainHover: '#c11a24',
        textMain: '#2A3B4D',
        textSecondary: '#687482',
        textAccent: '#ffffff',
        icon: '#6D7885',
        iconAccent: '#ffffff',
        error: '#e22b36',
        info: '#334CEB',
      },
      width: {
        viewport: '90em',
        footerAddress: '45%',
        footerApp: '45%',
      },
      spacing: {
        main: '4.375em',
      },
      boxShadow: {
        footer: '0px 10px 36px 0px rgba(0, 0, 0, 0.19), 0px 3px 13px 0px rgba(0, 0, 0, 0.04);',
      },
    },
    fontFamily: {
      heading: ['Mossport', 'sans-serif'],
      sans: ['Gotham Pro', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}
