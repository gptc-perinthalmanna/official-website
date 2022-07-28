module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./common/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        108: "27rem",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
