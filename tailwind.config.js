/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FEFAFA',
        primary: '#35373a',
        secondary: '#002D5B',
        accent: '#EC5B53',
        'accent-2': '#007560'
      }
    },
  },
  plugins: [],
}

