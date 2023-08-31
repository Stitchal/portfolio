/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "custom-white": "#d4dcff",
        "background-color": "#1F2A3A",
        "card-color": "#263E5F",
        "container-bg": "#172D4E",
        "blue-gray": "#1E3B66",
      },
    },
  },
  plugins: [],
};
