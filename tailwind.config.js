/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      mobile: "390px",

      tab: "820px",

      desktop: "1280px",
    },
  },
  plugins: [],
};
