module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56"
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
