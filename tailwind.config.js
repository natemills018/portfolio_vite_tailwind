/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
      themes: ["light", "bumblebee", "valentine","lemonade"]
    },
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('daisyui')
  ],
}

