/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vitro: "VitroCore",
      },
      colors: {
        "main-dark": "#202020",
      },
    },
  },
  plugins: [],
};
