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
          DEFAULT:"#de3151",
        },
        light:{
          DEFAULT:"#4B5563",
        }
      }
    },
    fontFamily:{
      sans: ["Inter","Roboto", "sans-serif"],
    },
    textColor:{
      primary: "#00bcd4",
      secondary: "#de3151"
    }
  },
  plugins: [],
}
