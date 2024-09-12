/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["DM Sans","ui-sans-serif", "system-ui"],
      },
      colors:{
        primary: "#212936cc",
      },
      backgroundImage:{
        "heroImg":"url('images/hero_img.jpg')",
      },
    },
  },
  plugins: [],
}

