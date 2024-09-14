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

    extend: {
      backgroundImage: {
        "detailed-gradient":
          "linear-gradient(to bottom, #bd0000, #ff0000, #ff9900, #ffff00, #00ff77, #00ffff, #0088ff, #0000ff, #000080)",
      },
    },
  },

  plugins: [],
};
