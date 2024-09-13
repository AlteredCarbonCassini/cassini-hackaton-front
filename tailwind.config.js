/** @type {import('tailwindcss').Config} */

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: `${breakpoints.mobile}px`,
      md: `${breakpoints.tablet}px`,
      xl: `${breakpoints.desktop}px`,
    },

    extend: {},
  },

  plugins: [],
};
