/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#374151',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};