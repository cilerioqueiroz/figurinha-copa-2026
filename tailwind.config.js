/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        copa: {
          yellow: "#FFD700",
          blue: "#1C3A8A",
          green: "#2e7d32",
          cyan: "#4DD0E1",
        }
      },
      fontFamily: {
        bangers: ["Bangers", "cursive"],
        nunito: ["Nunito", "sans-serif"],
      }
    }
  },
  plugins: []
}
