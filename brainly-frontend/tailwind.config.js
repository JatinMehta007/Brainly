/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all component files in src
  ],
  theme: {
    extend: {
      colors: {
        gray:{
          50  : "rgba(255,0,0,0.5)",
          100 : "#eeeeef",
          200 : "#e6e9ed",
          600 : "#95989c"
        },
        purple:{
            300 : "#e0e7fe",
            400 : "#3e38a7",
            600 : "#5046e4",
        }
      },
    },
  },
  plugins: [],
};