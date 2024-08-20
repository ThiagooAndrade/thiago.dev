import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      keyframes: {
        ringMenu: {
          "0%, 15%": { transform: "rotate(0deg)" },
          '5%': { transform: "rotate(-10deg)" },
          '10%': { transform: "rotate(10deg)" },
        },
        openingModal: {
          "0%": { width: "0px" },
          "100%": { width: "100px" }
        },
        closingModal: {
          "0%": { width: "100px" },
          "100%": { width: "0px" }
        },
      },
      colors: {
        primary: "#43B581",
        secondary: "#3498DB",
        accent: "#FFC107",
        success: "#2ECC71",
        warning: "#F1C40F",
        danger: "#E74C3C",
        dark_mode: "#191919",
        light_mode: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        }
      },
      animation: {
        ringMenu: "ringMenu 5s ease-in-out infinite",
        openingModal: "openingModal 0.5s ease-in forwards",
        closingModal: "closingModal 0.5s ease-in-out forwards",
      }
    },
  },
  plugins: [],
}