/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins"]
      },
      backgroundImage: {
        "bg_card_tenis": "url('/src/assets/bg.png')"
      }
    },
  },
  plugins: [],
}

