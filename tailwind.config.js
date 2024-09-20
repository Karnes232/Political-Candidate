/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-bg-color": "var(--primary-bg-color)",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [require("tailwindcss-text-fill")],
  extend: {
    backgroundImage: {
      "gradient-text":
        "linear-gradient(90deg, #009557, #00c09a, #00d084, #007d50, #004d40);",
    },
  },
};
