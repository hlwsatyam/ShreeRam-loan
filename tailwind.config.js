/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homefrontbg: "url(https://ujjawalawomenfinance.online/images/bg.jpeg)",
        homefrontbg1:"url(https://www.ltfs.com/images/default-source/new-banner/consumer-loan/webp/Personal-Loans-Product-Desktop-Banner---1920px.webp)",
        homefrontbg2:"url(https://files.cholamandalam.com/CV_Homepage_Banner_1b948837e4.webp)",
        homefrontbg3:"url(https://files.cholamandalam.com/SME_Homepage_Desktop_banner_20373abf99.webp)",
        homefrontbg4:"url(https://files.cholamandalam.com/CV_a2c3079bc2.webp)",
        homefrontbg5:"url(https://files.cholamandalam.com/CSEL_673668254d.webp)",
        homefrontbg6:"url(https://files.cholamandalam.com/HL_bb62b5d1d2.webp)",
        homefrontbg7:"url(https://files.cholamandalam.com/TW_f8f382e631.webp)",
      },
      
      },
      colors: {
        primary: {
          start: "#3A8EF6",
          end: "#6F3AFA ",
        },
        secondary: "#00BFA5",
        para: "#6c87a3",
        "button-primary": "#D9CAB3",
        "button-primary-hover": "#B9CAB8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
    
  },
  plugins: [],
};
