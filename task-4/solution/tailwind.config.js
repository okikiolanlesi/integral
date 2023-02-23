/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: "#F53838",
        footer: "#F8F8F8",
      },
      textColor: {
        primary: "#0B132A",
        secondary: "#4F5665",
        brand: "#F53838",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      borderColor: {
        primary: "#F53838",
      },
      backgroundColor: {
        primary: "#F53838",
        secondary: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
