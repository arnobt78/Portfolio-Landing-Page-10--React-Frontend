/** @type {import('tailwindcss').Config} */
// content: paths Tailwind scans for class names (only these files get CSS)
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
