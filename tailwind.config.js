/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'green300':'#70BF85',
        'green400':'#4DAD67',
        'green500':'#3E8952',
        'green600':'#2C5E39',
        'blue300':'#536ECE',
        'blue300':'#294AC1',
        'blue300':'#2540A2',
        'blue300':'#152A77',
        'orange500':'#D08871',
        'gray100':'#D3D3D3',
        'gray900':'#282828',
      },
      fontFamily:{
        'GenSekiGothic-B':'Genseki gothic TW-B',
        'GenSekiGothic-H':'Genseki gothic TW-H',
        'GenSekiGothic-L':'Genseki gothic TW-L',
        'GenSekiGothic-M':'Genseki gothic TW-M',
        'GenSekiGothic-R':'Genseki gothic TW-R',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}