// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "pixelated-sans": ["Pixelated MS Sans Serif", "sans-serif"],
    },
    extend: {
      fontFamily: {
        default: ["Pixelated MS Sans Serif", "sans-serif", "!important"],
      },
      button: {}, // disable all default button styles
    },
  },
  plugins: [],
};
