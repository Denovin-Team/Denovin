/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./index.html"],
  theme: {
    extend: {
      colors: {
        "secondary": "#1E2D48",
        "gold": "#D1AF89"
      },
      fontFamily:{
        "Dana-black":"Dana-Black"
      }
    },
    plugins: [],
  }
}