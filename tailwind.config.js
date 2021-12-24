/* eslint-disable no-undef */
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      sans: ['"Courier New"', 'monospace'],
    },
  },
  variants: {},
  plugins: [],
};
