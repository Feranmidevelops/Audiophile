/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D87D4A',
          light: '#F8AF85',
        },
        dark: '#101010',
        light: '#F1F1F1',
        offwhite: '#FAFAFA',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '58px', letterSpacing: '2px' }],
        'h2': ['40px', { lineHeight: '44px', letterSpacing: '1.5px' }],
        'h3': ['32px', { lineHeight: '36px', letterSpacing: '1.5px' }],
        'h4': ['28px', { lineHeight: '38px', letterSpacing: '2px' }],
        'h5': ['24px', { lineHeight: '33px', letterSpacing: '1.7px' }],
        'h6': ['18px', { lineHeight: '24px', letterSpacing: '1.3px' }],
        'overline': ['14px', { lineHeight: '19px', letterSpacing: '10px' }],
        'subtitle': ['13px', { lineHeight: '25px', letterSpacing: '1px' }],
      },
      letterSpacing: {
        'h1': '2px',
        'h2': '1.5px',
        'h3': '1.5px',
        'h4': '2px',
        'h5': '1.7px',
        'h6': '1.3px',
        'overline': '10px',
        'subtitle': '1px',
      },
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

