/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "day-00": "#FFFFFF",
        "day-50": "rgba(48, 42, 42, 0.05)",
        "day-1000": "#302A2A"
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      spacing: {
        1: "2px",
        2: "4px",
        3: "6px",
        6: "12px",
        12: "24px",
        16: "32px",
        18: "36px",
        20: "40px",
        50: "100px",
        
      }
    },

  },
  plugins: [],
}
