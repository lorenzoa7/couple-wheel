/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  safelist: [
    {
      pattern: /(bg)-./,
      variants: ['hover']
    },
    {
      pattern: /(scrollbar)-(thumb|track)-./,
    },
    {
      pattern: /(text)-./,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

