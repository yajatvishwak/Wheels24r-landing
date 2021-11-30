module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#EA5455",
        sortofprimary: "#2D4059",
        danger: "#e3342f",
      },
      colors: {
        primary: "#EA5455",
        sortofprimary: "#2D4059",
      },
      spacing: {
        sortofscreen: "90vh",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
