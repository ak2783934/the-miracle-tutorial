module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: ".60rem",
      },
      colors: {
        aboutPage: "#0B103F",
        footerBottom: "#1F1F1F",
        footerBg: "#444444",
        focus: "#5BCCF6",
        cbse: "#FF7F50",
        chse: "#F4A460",
        bse: "#68D2F3",
        notice: "#B0C4DE",
        noticeButton: "#056296",
      },
      textColor: {
        contactUs: "#00FFFF",
        hoverColor: "#ff6347",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 2px 2px 4px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 4px 4px 7px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
