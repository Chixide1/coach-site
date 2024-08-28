/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9F5F2',
        secondary: '#282825',
        accent: '#91A8ED',
      }
    },
  },
  plugins: [],
}

