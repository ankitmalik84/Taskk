/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#212121",
        customBlack2: "#282929",
        customGray: "#4E4E4E",
        customPurple: "#A600FC",
      },
      backgroundImage: {
        "texture-gradient": "url('/assets/hero.png')",
        "conic-gradient":
          "conic-gradient(from 90deg at 50% 0%, #A600FC, #212121,#212121, #212121);",
        "conic-gradient2":
          "conic-gradient(from 270deg at 50% 0%,#212121, #212121, #212121,  #A600FC);",
        "conic-gradient3":
          "conic-gradient(from 90deg at 20% 0%, #A600FC, #212121,#212121, #212121);",
        "conic-gradient4":
          "conic-gradient(from 270deg at 80% 0%,#212121, #212121, #212121,  #A600FC);",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default sans-serif font
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
