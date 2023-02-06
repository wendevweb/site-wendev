const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
    colors: {
      white: "#EDF2F4",
      black: "#242621",
      pink: "#FF7ECF",
      pinkDark: "#FF00ED",
      purple: "#7E42E1",
      purpleDark: "#421059",
    },
    plugins: [],
  },
};
