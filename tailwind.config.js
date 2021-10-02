module.exports = {
  mode:"jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "app":{
          "blue":"#3DBEFF",
          "yellow":"#FFD302",
          "white":"#FFFBF8",
          "teal":"#9DDBCC",
          "teal2":"#90D4C5",
          "pale":{"light":"#FE8071","dark":"#FE6F61"}
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}
