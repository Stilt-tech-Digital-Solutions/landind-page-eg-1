/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1fcf9",
          100: "#d1f6ef",
          200: "#a3ece0",
          300: "#6cdccc",
          400: "#3ec3b5",
          500: "#25a79c",
          600: "#1b867f",
          700: "#1a6b67",
          800: "#195653",
          900: "#174240",
          950: "#082b2b",
        },
      },
    },
  },
  plugins: [],
};
