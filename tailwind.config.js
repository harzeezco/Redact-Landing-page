/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "1xl": "1.7rem",
        "4xl": "2.6rem",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        fadeWhite: "#FDFDFD",
        grayDark: "#1E2A39",
        grayLight: "#60687D",
        gray: "#B6BCC5",
        lightPurple: "#917AEB",
        deepPurple: "#250441",
        darkPurple: "#1F1A33",
      },
    },
  },
  plugins: [],
};
