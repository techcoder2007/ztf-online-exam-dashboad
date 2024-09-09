/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}", "index.html", "./node_modules/flowbite/**/*.js" ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

