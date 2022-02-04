module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00bcd4",
          gray: "#9e9e9e",
        },
        secondary: {
          DEFAULT:"#de3151"
        }
      }
    },
    textColor:{
      primary: "#00bcd4",
      secondary: "#de3151"
    }
  },
  plugins: [],
}
