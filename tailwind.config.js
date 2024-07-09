/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "header-gradient":
          "radial-gradient(50% 50% at 50% 50%, rgba(205, 239, 233, 0.7) 0%, rgba(41, 222, 190, 0.35) 100%)",
      },
      colors: {
        "dark-cyan": "#056050",
        "opaque-white": "#000000B2",
      },
    },
  },
  plugins: [],
};
