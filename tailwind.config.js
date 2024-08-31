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
        accent: '#52514e',
        'accent-2': '#007560'
      }
    },
  },
  plugins: [],
}

