import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#CBFC01',
      'base-100': '#151515',
      'white': "#fff",
      'black': "#000"
    },
    extend: {
    lineHeight: {
      '12': '90px'
    },
    backgroundImage: {
      'comments': 'url("/CommentsBackground.png")'
    }
    }
  },
  plugins: [],
};
export default config;
