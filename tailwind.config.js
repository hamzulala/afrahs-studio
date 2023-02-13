/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      light1 : '#DDD5D0',
      light2 : '#CFC0BD',
      light3 : '#B8B8AA',
      dark1 : '#586F6B',
      dark2 : '#7F9183'
    },
    extend: {},
  },
  plugins: [],
}
