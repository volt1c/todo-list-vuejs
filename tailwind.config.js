/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {}
    },
    fontFamily: {
      sans: ['"Courier New"', 'monospace']
    }
  },
  variants: {},
  plugins: []
}
