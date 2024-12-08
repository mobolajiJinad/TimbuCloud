import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#056050",
        "opaque-white": "#000000B2",
      },
      screens: {
        xsm: "395px",
      },
    },
  },
  plugins: [],
};
export default config;
