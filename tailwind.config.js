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
        secondary:"#4D5562",
        btnBlue: "#3662E3",
        lightBlue: "#7CA9F3",
        lighter: "#F9FAFB",
        tDark: "#040711",
        txtColor:"#4D5562"

      },
      backgroundImage:{
        "heroImg":"url('images/hero_img.jpg')",
      },
    },

    borderRadius: {
      "custom-lg":"20px",
      "custom-sz":"10px"
    }
  },
  plugins: [],
}

