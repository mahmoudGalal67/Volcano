/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#00070D',
        'yellow':'#FED831',
        "fade":' rgba(0, 0, 0, 0.37)',
        'dark-blue':'#0B0C19',
        'light-blue':'#252842',
        'light':'#C2C2C2',
        'light-yellow':'#42412d',
      },
    },
    screens:{
      'toggle':'1165px',
      'sm':'640px',
      'md':'760px'
    }
  },
  plugins: [],
}
