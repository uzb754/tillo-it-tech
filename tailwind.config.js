/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0d0f17',
        'card-bg': '#161926',
        'card-hover': '#1e2238',
        'primary-glow': '#7928ca',
        'secondary-glow': '#00dfd8',
        'accent-blue': '#0070f3',
        'text-muted': '#a1a1aa',
      },
    },
  },
  plugins: [],
}