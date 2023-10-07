/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kayra-orange': '#DC6601',
        'foundation': '#595959',
      },
      borderRadius: {
        'lg': '10px',
      },
    },
  },
  plugins: [],
}