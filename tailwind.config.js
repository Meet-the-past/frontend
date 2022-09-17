module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /bg-(red|gray|blue)-(300|400|600|800)/,

      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: "#B49C72",
        textColor: "#6A5B3D",
        navbarHoverColor: "#CCB284",
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
