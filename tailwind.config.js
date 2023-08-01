/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
