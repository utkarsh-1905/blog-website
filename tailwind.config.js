module.exports = {
  content: ["./views/*","./views/layouts/*","**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
