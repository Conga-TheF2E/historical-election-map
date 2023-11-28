/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      genseki: ["Genseki", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green300: "#70BF85",
        green400: "#4DAD67",
        green500: "#3E8952",
        green600: "#2C5E39",
        blue300: "#536ECE",
        blue400: "#294AC1",
        blue500: "#2540A2",
        blue600: "#152A77",
        orange500: "#D08871",
        gray100: "#D3D3D3",
        gray900: "#282828",
        green: {
          200: "#CAE9D2",
          300: "#70BF85",
          400: "#4DAD67",
          500: "#3E8952",
          600: "#2C5E39",
        },
        blue: {
          200: "#9DADE6",
          300: "#536ECE",
          400: "#294AC1",
          500: "#2540A2",
          600: "#152A77",
        },
        orange: {
          200: "#DFBDB3",
          300: "#D08871",
          400: "#C86140",
          500: "#A04122",
          600: "#602B1A",
        },
      },
      fontFamily: {
        "GenSekiGothic-B": "Genseki gothic TW-B",
        "GenSekiGothic-H": "Genseki gothic TW-H",
        "GenSekiGothic-L": "Genseki gothic TW-L",
        "GenSekiGothic-M": "Genseki gothic TW-M",
        "GenSekiGothic-R": "Genseki gothic TW-R",
        "M-PLUS-1p-B": "M PLUS 1p-B",
      },
      willChange: {
        "right-top-transform": "right, top, transform",
        fill: "fill",
      },
      // delay
      transitionDelay: {
        75: "75ms",
        250: "250ms",
        275: "275ms",
        325: "325ms",
        350: "350ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
