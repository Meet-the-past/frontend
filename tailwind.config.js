module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-(red|gray|blue)-(400|600)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: "#B49C72",
        textColor: "#6A5B3D",
        navbarColorToggle: "#FFD8A9",
        mainPageBackground: "#A68F66",
        formBoxColor: "#B49C72",
      },
      height: {
        footer: "calc(100vh - 3.5rem)",
      },
    },
  },
  plugins: [],
};
