/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#dfdfdf",
          200: "#bbbcbd",
          300: "#989a9b",
          400: "#77797b",
          500: "#393d40",
          600: "#333739",
          700: "#181819",
          800: "rgb(19,19,19)",
          900: "#0e0e0e",
        },
        yellow: {
          500: "#FAD200",
          600: "#FFDA2A",
          700: "#EAD13D",
          800: "#E8BD00",
          900: "#EA9C00",
        },
        white: {
          900: "#ffffff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontHorizontal: {
        "writing-mode": "vertical-rl",
      },
    },
    screens: {
      "wide-tablet": { max: "1450px" },
      "tablet": { max: "1100px" },
      "mobile": { max: "768px" },
      "min-mobile": { max: "527px" },
    },
  },
  plugins: [],
};
