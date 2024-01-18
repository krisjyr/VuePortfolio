/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        mono: [
          '"Source Code Pro"',
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          '"Consolas"',
          "Liberation Mono",
          '"Courier New"',
        ],
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        krisjyr: {
          primary: "#6D32EC",
          secondary: "#3F0CAC",
          accent: "#C200CC",
          neutral: "#ffffff",
          "base-100": "#020313",
          info: "#22d3ee",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#e11d48",
        },
      },
      "dark",
      "coffee",
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
