/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'very-dark': '#18171F',
          'dark-grey': '#24232C',
          'grey': '#817D92',
          'neon-green': '#A4FFAF',
          'strength-red': '#F64A4A',
          'strength-orange': '#FB7C58',
          'strength-yellow': '#F8CD65',
        },
        fontFamily: {
          'mono': ['JetBrains Mono', 'monospace'],
        }
      },
    },
    plugins: [],
  }