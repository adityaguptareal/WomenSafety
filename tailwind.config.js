/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['"Roboto", sans-serif;'],
        Montserrat: ['"Montserrat", sans-serif;'],
        Poppins: ['"Poppins", sans-serif;']
         // Add your custom font
      },
      colors:{
        heroPink:"#fff3f7",
        skyBlueCircle:"#97ddfe",
        tealCard:"#e4fbff",
        purpleCard:"#f7e7fc",
        orangeCard:"#ffecd3",
        redCard:"#ffdbdb"
      },
    },
  },
  plugins: [],
}