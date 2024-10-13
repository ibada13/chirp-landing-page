import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        home: "rgb(var(--home-rgb))", 
        default: "rgb(var(--default-rgb))", 
        plan: "rgb(var(--plan-rgb))", 
        plan_border: "rgb(var(--plan-border-rgb))", 
        clients: "rgb(var(--clients-rgb))", 
        background: "rgb(var(--background-rgb))", 
        foreground: "rgb(var(--foreground-rgb))", 
        twitter: "rgb(var(--twitter-rgb))", 
        text: "rgb(var(--text-rgb))", 

      },
    },
  },
  screens: {
    xs: "480px",
  },
  plugins: [],
};

export default config;
