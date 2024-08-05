/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['"Karla"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          cyan: "#2ab2af",
          brightYellow: "#c0df34",
        },
        lightGray: "#e5eff5",
        grayishBlue: "#99a7bd",
        lightCyan: "#2ab2b0ce",
      },
    },
  },
  plugins: [],
};
