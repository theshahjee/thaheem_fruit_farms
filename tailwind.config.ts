import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mango: {
          50: "#FFF8E6",
          100: "#FFEDB8",
          200: "#FFDF85",
          300: "#FFCF52",
          400: "#FFC02E",
          500: "#F5A623", // primary mango yellow
          600: "#D98C16",
          700: "#A86A0E",
          800: "#7A4C08",
          900: "#4F3105",
        },
        farm: {
          50: "#EEF4EA",
          100: "#D6E5CC",
          200: "#AECB99",
          300: "#85B167",
          400: "#5C9740",
          500: "#3D7A2A", // deep farm green
          600: "#2F5F21",
          700: "#234718",
          800: "#173010",
          900: "#0D1B08",
        },
        khaki: {
          50: "#FAF6EC",
          100: "#F0E6C8",
          200: "#E4D29A",
          300: "#D6BC6E",
          400: "#C7A445",
          500: "#B58E2C",
        },
        cream: {
          DEFAULT: "#FBF5E6",
          50: "#FFFCF4",
          100: "#FBF5E6",
          200: "#F5EBCD",
        },
        gold: {
          DEFAULT: "#C9A227",
          soft: "#E0BF55",
        },
        bark: "#2A1A0C", // deep brown used in logo border
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.45 0 0 0 0 0.15 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        "radial-mango":
          "radial-gradient(ellipse at top, rgba(245,166,35,0.18), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(42, 26, 12, 0.18)",
        glow: "0 0 0 1px rgba(245,166,35,0.2), 0 20px 50px -20px rgba(245,166,35,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
