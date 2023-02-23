/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["BR Firma", "sans-serif"],
      },
      colors: {
        primaryBg: "#F8F9FB",
        primary: "#372AA4",
      },
      textColor: {
        primary: "#372AA4",
        secondary: "#2F2F2F",
        secondary2: "#6C757D",
      },
    },
  },
  plugins: [],
};
