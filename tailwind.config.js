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
        lightGray: "#EBEBEB",
        darkBlack: "#333333",
        lightPink: "#FDFAFF",
        mdGray: "#6B7280",
        xlGray: "#FCFCFC",
        mdLightGray: "#808080",
        darkGreen: " #266C48",
      },
      // fontFamily: ["Poppins-Rg"],
    },
    fontFamily: {
      "primary-rg": ["Poppins-Rg"],
      "primary-md": ["Poppins-Md"],
      "primary-bd": ["Poppins-Bd"],
      "primary-Ex-bd": ["Poppins-ExBd"],
      "secondary-rg": ["KumbhSans-Rg"],
      "secondary-md": ["KumbhSans-Md"],
      "secondary-bd": ["KumbhSans-Bd"],
      "secondary-Ex-bd": ["KumbhSans-ExBd"],
    },
  },
  plugins: [],
  variants: {
    space: ["responsive", "direction"],
  },
};
