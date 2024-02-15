import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFC634",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        rocksalt: ["var(--font-rocksalt)"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0rem) scaleY(1)", opacity: "0.1" },
          "50%": {
            transform: "translateY(0.5rem) scaleY(2.25)",
            opacity: "0.4",
          },

          "100%": { transform: "translateY(0rem) scaleY(1)", opacity: "0.1" },
        },
      },
      animation: {
        scroll: "scroll 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
