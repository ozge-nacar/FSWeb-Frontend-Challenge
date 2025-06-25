/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#4731D3",
        secondary: "#CBF281",
        textLight: "#ffffff",
        textDark: "#000000",
        bgLight: "#FAFAFA",
        bgDark: "#252128",
        customgray: "#777777",
      },
      fontFamily: {
        inter: ["Inter", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
