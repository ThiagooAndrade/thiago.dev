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
        openingModal: {
          "0%": { width: "0px" },
          "100%": { width: "100px" }
        },
        closingModal: {
          "0%": { width: "100px" },
          "100%": { width: "0px" }
        },
        slideTech: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      colors: {
        primary: "#43B581",
        secondary: "#3498DB",
        accent: "#FFC107",
        success: "#2ECC71",
        warning: "#F1C40F",
        danger: "#E74C3C",
        dark_mode: "#191919",
        light_mode: "#f5f1f1",
        darkContent: "#A7A7A7",
        darkContentHover: "#413f3f",
        darkText: "#D9D9D9",
        lightText: "#42446E"
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
        openingModal: "openingModal 0.5s ease-in forwards",
        closingModal: "closingModal 0.5s ease-in-out forwards",
        slideTech: "slideTech 5s linear infinite",
        spin: "spin 3s linear infinite",
      },
      boxShadow: {
        'projectContainer': '0 0px 100px -50px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}