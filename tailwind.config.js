/** @type {import('tailwindcss').Config} */
const {fontFamily} = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#090B10",
        light: "#F5F7FA",
        primary: "#2C5FD0",
        primaryDark: "#4F8CFF",
        card: "#111722",
        muted: "#5C6675",
      },
    },
    screens: {
      "2xl": {max: "1535px"},
      xl: {max: "1279px"},
      lg: {max: "1023px"},
      md: {max: "767px"},
      sm: {max: "639px"},
      xs: {max: "479px"},
    },
  },
  plugins: [
    function ({addVariant}) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
