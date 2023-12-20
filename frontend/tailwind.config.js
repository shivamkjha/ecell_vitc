/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "rgba(24,25,81,255)",
      },
      backgroundImage: {
        "bcol":
          "linear-gradient(to bottom, rgba(180, 179, 224, 1), rgba(148, 147, 204, 1))",
      },
    },
  },
  plugins: [],
};
