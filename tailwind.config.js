const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Flexo", "sans-serif", ...defaultTheme.fontFamily.sans],
      heading: ["Gotham", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-red": "#620A22",
        "brand-red-light": "#FDB9B9",
        "brand-khaki": "#C49779",
        "brand-khaki-light": "#F3D8C3",
        "brand-lavanda": "#DFC4C3",
        "brand-lavanda-light": "#F0E6E6",
        "brand-green": "#1C2B22",
        "brand-green-light": "#B2D8D5",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
