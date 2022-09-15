/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        titlefont: ["Poppins"],
      },
      colors: {
        regalBlue: "#9672FF",
        primaryRed: "#FD6D61",
        selectedBlue: "#693de7",
        mutedGray: "#f4f1ff",
        scaledDownWhite: "#f2f2f2",
        coral: "#fd6d61",
        backWhite: "#FFFFFF",
        textBlack: "#222222",
        lineOrange: "#FD6D61",
      },

      borderRadius: {
        some: "40px",
      },
      boxShadow: {
        box: "0 0 24px 1px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
