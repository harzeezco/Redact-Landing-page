/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: "62.5%",
    },
    extend: {
      colors: {
        colorGrayLight: "#60687D",
      },
    },
  },
  plugins: [],
};
