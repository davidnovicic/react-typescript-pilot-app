/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        myBlue: "#0A32B3",
        myPink: "#BD365D",
      },
      backgroundImage: (theme) => ({
        pattern:
          "url('https://img.freepik.com/premium-vector/seamless-pattern-with-social-media-vector-illustration-wallpaper_153454-5389.jpg')",
      }),
    },
  },
  plugins: [],
};
