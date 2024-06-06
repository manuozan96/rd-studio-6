/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        rojo: "#f94940",
        "off-white": "#ededed",
        charcoal: "#0a0e0b",
      },
      spacing: {},
      fontFamily: {
        "desktop-cta": "'DM Sans'",
        "mobile-h4-regular": "'Instrument Serif'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      "2xl": "21px",
      "23xl": "42px",
      "15xl": "34px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
