/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#f6f6f6",
        abyss: "#ede9f2",
        slate: "#281a39",
        glass: "rgba(40, 26, 57, 0.04)",
        brand: {
          DEFAULT: "#c9a820",
          light: "#dec328",
          dark: "#8a7218",
          subtle: "#f4eab8",
        },
        accent: {
          DEFAULT: "#2061b7",
          light: "#bde9fb",
          dark: "#103f72",
        },
        ink: {
          DEFAULT: "#281a39",
          soft: "#4a4156",
          muted: "#7a7285",
          inverse: "#ffffff",
          "inverse-soft": "#e8e4ec",
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', "Georgia", "serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
        mono: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(40, 26, 57, 0.08), 0 4px 16px rgba(40, 26, 57, 0.06)",
        cardHover: "0 4px 12px rgba(40, 26, 57, 0.1), 0 8px 24px rgba(40, 26, 57, 0.08)",
        nav: "0 1px 0 rgba(40, 26, 57, 0.06), 0 4px 12px rgba(40, 26, 57, 0.04)",
        logo: "0 2px 12px rgba(40, 26, 57, 0.1)",
      },
    },
  },
  plugins: [],
};
