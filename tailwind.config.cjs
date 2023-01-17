/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {},
    fontFamily: {
      cardo: ["Cardo", "Georgia"],
      roboto: ["Roboto", "Helvetica", "Arial"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(6 78 59)",

          secondary: "#463AA1",

          accent: "#C149AD",

          neutral: "#021431",

          "base-100": "#FFFFFF",

          info: "#93E6FB",

          success: "#80CED1",

          warning: "#EFD8BD",

          error: "#E58B8B",
        },
      },
    ],
  },
};
