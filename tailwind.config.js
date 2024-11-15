/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: [
        "bg-green-500",
        "bg-lime-500",
        "bg-yellow-500",
        "bg-orange-500",
        "bg-red-500",
      ],
    },
  },
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
