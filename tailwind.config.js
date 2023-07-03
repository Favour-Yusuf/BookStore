/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'hero-pattern': "url('https://www.pexels.com/es-es/foto/1907785/')",
    },
  },
  plugins: [],
}

