module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D83A56",
          gray: "#9e9e9e",
        },
        secondary: {
          DEFAULT:"#FF616D",
        },
        tertiary:{
          DEFAULT:"#FFEAC9",
        },
        fourth:{
          DEFAULT:"#66DE93",
        },
        dark:{
          DEFAULT:"#374151",
        }
      }
    },
    fontFamily:{
      sans: ["Inter","Roboto", "sans-serif"],
    },
  },
  plugins: [],
}
