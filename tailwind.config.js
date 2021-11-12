module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-red": "#900503",
        "brand-red-light": "#FDB9B9",
        "brand-khaki": "#C49779",
        "brand-khaki-light": "#F3D8C3",
        "brand-lavanda": "#DFC4C3",
        "brand-lavanda-light": "#F0E6E6",
        "brand-green": "#1E726B",
        "brand-green-light": "#B2D8D5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
