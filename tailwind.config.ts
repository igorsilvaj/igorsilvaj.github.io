/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "0px",
      // => @media (min-width: 0px) { ... }

      md: "720px",
      // => @media (min-width: 720px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        bounce: "bounce 0.5s infinite ease-in-out",
      },
      backgroundImage: {
        my_bg_image: "url('/public/bg.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
