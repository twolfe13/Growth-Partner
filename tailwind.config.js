/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1700px",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        gray: "#767676",
        green: " #266C48",
        lightGreen: "#53EB9F",
      },
      // fontFamily: ["Poppins-Rg"],
    },
    fontFamily: {
      "primary-rg": ["Poppins-Rg"],
      "primary-md": ["Poppins-Md"],
      "primary-bd": ["Poppins-Bd"],
      "primary-Ex-bd": ["Poppins-ExBd"],
    },
  },
  plugins: [],
  variants: {
    space: ["responsive", "direction"],
  },
};
