/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#eb5b53',
        primary: '#fefaf9',
        secondary: '#172554'
      }
    },
  },
  plugins: [],
}

