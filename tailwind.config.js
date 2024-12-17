module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#F7F7F9',
        primary: '#002285',
        primary900: '#00060F',
        primary800: '#000D2D',
        primary700: '#00144A',
        primary600: '#001B68',
        primary500: '#002285',// Azul escuro personalizado
        primary400: '#4A59E5', // Azul claro personalizado
        primary300: '#4A59E5',
        primary200: '#A4ACF0',
        primary100: '#D1D6F5',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // Adiciona a fonte Outfit
      },
      fontSize: {
        h1: '40px',
        h2: '36px',
        h3: '32px',
        big: '24px',
        medium: '20px',
        default: '16px',
        small: '12px',
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}