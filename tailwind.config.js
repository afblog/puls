/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "2md" : "900px"
      },
      boxShadow: {
        "main" : "rgba(0, 0, 0, 0.1) 0px 4px 10px;",
        "main2" : "0px 6px 22px -2px #9B9B9B",
        "main3" : "rgba(180, 185, 209, 0.384) 0px 4px 10px"
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
