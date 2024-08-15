/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#212121",
        customBlack2: "#282929",
        customGray: "#808080",
        customPurple: "#A600FC",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
      },
      textColor: {
        default: "#ffffff", // Add a default text color
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        body: {
          color: "#ffffff",
          fontFamily: "Poppins, sans-serif",
          backgroundColor: "#212121",
        },
      });
    },
  ],
};
