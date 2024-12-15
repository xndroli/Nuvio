import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        skyBlue: "#C3EBFA",
        skyBlueLight: "#EDF9FD",
        flowerPurple: "#CFCEFF",
        flowerPurpleLight: "#F1F0FF",
        sunYellow: "#FAE27C",
        sunYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
} satisfies Config;
