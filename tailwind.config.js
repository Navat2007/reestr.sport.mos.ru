/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Gotham Pro', 'sans-serif'],
      heading: ['Mossport', 'sans-serif'],
    },
    extend: {
      colors: {
        bgColor: '#ffffff',
        bgSecondaryColor: '#F3F3F3',
        bgAccentColor: '#2A3B4D',
        main: '#e22b36',
        mainHover: '#c11a24',
        textMain: '#2A3B4D',
        textSecondary: '#687482',
        textAccent: '#ffffff',
        icon: '#6D7885',
        iconAccent: '#ffffff',
        error: '#e22b36',
        info: '#334CEB',
        divider: 'rgba(0, 0, 0, 0.15)',
        linkHover: 'rgba(0, 0, 0, 0.04)',
      },
      fontSize: {
        '3xs': '8px',
        '2xs': '10px',
        heading: '44px',
        modalHeading: 'clamp(1.5rem, 1.1479rem + 1.5023vw, 2.5rem)',
      },
      width: {
        viewport: '90em',
      },
      spacing: {
        main: 'clamp(1rem, -1.25rem + 6.25vw, 4.375rem)',
        section: 'clamp(1.75rem, 0.8257rem + 3.9437vw, 4.375rem)',
      },
      boxShadow: {
        button: '0px 1px 2px 0px rgba(0, 0, 0, 0.20)',
        authButton: 'rgba(0, 0, 0, 0.04) 0px 0.5px 1.75px, rgba(0, 0, 0, 0.19) 0px 1.85px 6.25px',
        footer: '0px 10px 36px 0px rgba(0, 0, 0, 0.19), 0px 3px 13px 0px rgba(0, 0, 0, 0.04)',
        footerApp: '0px 0px 15px 0px rgba(0, 0, 0, 0.15)',
        card: '0px 1.85px 6.25px 0px rgba(0, 0, 0, 0.19)',
        cardHover: '0px 3px 13px 0px rgba(0, 0, 0, 0.04), 0px 10px 36px 0px rgba(0, 0, 0, 0.19)',
        filter: '0px 3px 13px 0px rgba(0, 0, 0, 0.04), 0px 10px 36px 0px rgba(0, 0, 0, 0.19)',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
}
