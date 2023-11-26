/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
       'sm' : '640px',
       'md' : '768px',
       'lg' : '1024px',
       'xl' : '1280px',
      },
      colors : {
        buttonColor : '#A259FF',
        themeColor  : '#2B2B2B',
        topColor    : '#3B3B3B'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

