import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainCol: "#353130",
        secondaryCol: "#ebe7d8",
        darkerCol: "#986845",
        lighterCol: "#ffc21e",
        formCol: "#65534e",
      },
    },
  },
  plugins: [],
};
export default config;
