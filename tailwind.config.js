module.exports = {
  content: ["./views/*","./views/layouts/*","./views/partials/*"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
