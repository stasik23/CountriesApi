/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: "var(--color-primary)",
        theme: "var(--color-theme)",
        text: "var(--color-text)",
        background: "var(--color-background)"
      }
    }
  },
  plugins: [],
}
