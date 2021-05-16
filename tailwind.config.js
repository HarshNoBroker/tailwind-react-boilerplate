const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        koho: ["KoHo", "sans-serif"],
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
