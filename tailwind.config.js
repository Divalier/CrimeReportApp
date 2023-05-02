/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        rectangle1: "url('/src/image/rectangle12.png')",
        signBg: "url('/src/image/police.png')",
        signBg2: "url('/src/image/police2.png')",
        wom1: "url('/src/image/remo.png')",
        wom2: "url('/src/image/result.png')",
        report: "url('/src/image/report.png')",
        mountCurv: "url('/src/image/Group.png')",
        letus: "url('/src/image/Rectangle.png')",
        letfil: "url('/src/image/pexels.png')",
        about: "url('/src/image/About.png')",
        filter: "url('/src/image/Rectangle34.svg')",
        reportsvg: "url('/src/image/Ellipse.png')",
        reportsvg2: "url('/src/image/Ellipse2.png')",
        reportsvg3: "url('/src/image/Ellipse3.png')",
        reportsvg4: "url('/src/image/Ellipse4.png')",
        public: "url('/src/image/image 7.png')",
      }),
    },
  },
  plugins: [],
};
