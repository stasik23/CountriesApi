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
      },
      fontFamily: {
        bungee: ['Bungee', 'cursive'],
      },
      keyframes: {
        lock: {
          '0%': { top: '-45px' },
          '65%': { top: '-45px' },
          '100%': { top: '-30px' },
        },
        spin: {
          '0%': { transform: 'scaleX(-1)', left: 'calc(50% - 30px)' },
          '65%': { transform: 'scaleX(1)', left: 'calc(50% - 12.5px)' },
        },
        dip: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        alarmOn: {
          '0%, 100%': { fill: '#e62326' },
          '50%': { fill: 'darkred' },
        },
      },
      animation: {
        lock: 'lock 2s',
        spin: 'spin 2s',
        dip: 'dip 1s',
        'alarm-on': 'alarmOn 0.5s infinite',
      },
    }
  },
  plugins: [],
}
