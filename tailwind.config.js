/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins"]
      },
      backgroundImage: {
        "bg_card_tenis": "url('../src/assets/bg.png')"
      },
      keyframes: {
        floatRight: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(8px)" },
          "100%": { transform: "translatey(0px)" },
        }
      },
      animation: {
        floatRight: "floatRight 2.5s infinite"
      }
    },
  },
  plugins: [],
}

