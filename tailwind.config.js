/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "48rem",
      },
      colors: {
        blue: {
          50: "#2073B6", //Azul de header y el mismo azul de texto y todo: #2073B6
          100: "#2F2F51", //Azul oscuro: #2F2F51 (de equipamiento y tecnología)
          200: "#0A3A60", // Azul de footer: #0A3A60
          300: "#D9D9D9", //#D9D9D9 la barra de nav en el light
          400: "#204665", // #204665 en el modo night
        },
      },
    },
  },
  plugins: [],
};
