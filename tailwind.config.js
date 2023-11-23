/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: "true",
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#017f9e",
        dark: "#0f172a",
        "picton-blue": {
          50: "#f1fafe",
          100: "#e1f5fd",
          200: "#bdebfa",
          300: "#82dcf7",
          400: "#3fcaf1",
          500: "#20bde9",
          600: "#0993c0",
          700: "#09749b",
          800: "#0c6380",
          900: "#10516a",
          950: "#0a3547",
        },
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
