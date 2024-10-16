/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#80AF81',
        black: '#1E1E1E'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #80AF81 34%, #88D66C 100%)',
      },
    },
  },
  plugins: [],
}

