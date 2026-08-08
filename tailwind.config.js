/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#12081c",
        abyss: "#1c1229",
        slate: "#281a39",
        glass: "rgba(255,255,255,0.04)",
        brand: {
          DEFAULT: "#dec328",
          light: "#ffcb05",
          dark: "#8a7218",
          subtle: "#f4ea7a",
        },
        accent: {
          DEFAULT: "#97deff",
          light: "#bde9fb",
          dark: "#2061b7",
        },
        ink: {
          DEFAULT: "#f6f6f6",
          soft: "#c5bfc7",
          muted: "#8f8898",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      animation: {
        aurora: "aurora 12s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        spinSlow: "spin 20s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(222, 195, 40, 0.22), 0 0 60px rgba(151, 222, 255, 0.08)",
        neonSm: "0 0 12px rgba(255, 203, 5, 0.18)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4)",
        logo: "0 4px 24px rgba(222, 195, 40, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
