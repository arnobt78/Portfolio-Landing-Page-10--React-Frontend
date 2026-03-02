// PostCSS runs after Tailwind: tailwindcss generates utilities, autoprefixer adds vendor prefixes
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
