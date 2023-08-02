/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5a38fd',
        secondary: '#d4f717',
        gray: '#ecf1f2',
        'primary-text': '#545479',
        'secondary-text': '#24244f',
        'secondary-gray': '#cfdbde',
      },

      fontFamily: {
        'CabinetGrotesk-Variable': ['CabinetGrotesk-Variable', 'sans-serif'],
        'CabinetGrotesk-Thin': ['CabinetGrotesk-Thin', 'sans-serif'],
        'CabinetGrotesk-Extralight': [
          'CabinetGrotesk-Extralight',
          'sans-serif',
        ],
        'CabinetGrotesk-Light': ['CabinetGrotesk-Light', 'sans-serif'],
        'CabinetGrotesk-Regular': ['CabinetGrotesk-Regular', 'sans-serif'],
        'CabinetGrotesk-Medium': ['CabinetGrotesk-Medium', 'sans-serif'],
        'CabinetGrotesk-Bold': ['CabinetGrotesk-Bold', 'sans-serif'],
        'CabinetGrotesk-Extrabold': ['CabinetGrotesk-Extrabold', 'sans-serif'],
        'CabinetGrotesk-Black': ['CabinetGrotesk-Black', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        hero: 'linear-gradient(rgba(90,56,253,.4),transparent 70%,transparent)',
      },

      screens: {
        'small-lg': '990px',
      },
    },
  },
  plugins: [],
};
