/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#333",
        "main-contra": "#FEFEFE",
        sub: "#000000",
        "sub-contra": "#FFFFFF",

        // General Palette
        basic: "#F0F0F0",
        "basic-active": "#F0F0F0",
        "basic-contra": "#000000",
        default: "#d4d4d4",
        "default-active": "#e6e6e6",
        "default-contra": "#131313",
        primary: "#1266F1",
        "primary-active": "#0c56d0",
        "primary-contra": "#FFFFFF",
        secondary: "#B23CFD",
        "secondary-active": "#a316fd",
        "secondary-contra": "#FFFFFF",
        success: "#00B74A",
        "success-active": "#00913b",
        "success-contra": "#FFFFFF",
        info: "#39C0ED",
        "info-active": "#16b5ea",
        "info-contra": "#ffffff",
        warning: "#FFA900",
        "warning-active": "#d99000",
        "warning-contra": "#ffffff",
        danger: "#F93154",
        "danger-active": "#f80c35",
        "danger-contra": "#ffffff",
        link: "#39C0ED",
        "link-active": "#39C0ED",
        "link-contra": "#ffffff",
        light: "#FBFBFB",
        "light-active": "#e6e6e6",
        "light-contra": "#262626",
        dark: "#262626",
        "dark-active": "#131313",
        "dark-contra": "#FBFBFB",

        ...defaultColors,
      },
    }, // END::Extend
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      jm: { max: "479px" },
      xs: { max: "319px" },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("custom-variant", "& *", "& + *");
    },
  ],
};
