/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'hero-pattern': "url('./src/assets/pexels-photo-1907785.jpeg')",
    },
  },
  plugins: [],
}

