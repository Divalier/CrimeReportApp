/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        rectangle1: "url('/src/image/rectangle12.png')",
        signBg: "url('/src/image/police.png')",
        wom1: "url('/src/image/remo.png')",
        wom2: "url('/src/image/result.png')",
        report: "url('/src/image/Report.png')",
      }),
    },
  },
  plugins: [],
};
