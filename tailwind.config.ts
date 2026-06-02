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
        paper: {
          DEFAULT: "#F5EBD0",
          50: "#FDF8E8",
          100: "#F8EFD7",
          200: "#F2E4BD",
          300: "#E6D49A",
        },
        cream: {
          DEFAULT: "#FBF5E6",
          50: "#FFFCF4",
          100: "#FBF5E6",
          200: "#F5EBCD",
        },
        gold: { DEFAULT: "#C9A227", soft: "#E0BF55" },
        bark: "#2A1A0C",
        ink: "#1A1208",
        punch: "#C2410C", // rare hot accent
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        stamp: ["var(--font-stamp)", "ui-monospace", "monospace"],
        urdu: ["var(--font-urdu)", "serif"],
      },
      letterSpacing: {
        stamp: "0.32em",
        wide2: "0.18em",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(42, 26, 12, 0.18)",
        ink: "0 1px 0 rgba(42,26,12,0.08), 0 30px 60px -30px rgba(42,26,12,0.35)",
        seal: "inset 0 0 0 1px rgba(42,26,12,0.18), 0 18px 40px -18px rgba(42,26,12,0.4)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sealspin: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        sealspin: "sealspin 22s ease-in-out infinite",
        "rise-in": "riseIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
