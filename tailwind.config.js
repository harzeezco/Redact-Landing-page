/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        grayDark: "#1E2A39",
        grayLight: "#60687D",
        lightPurple: "#917AEB",
      },
    },
  },
  plugins: [],
};
