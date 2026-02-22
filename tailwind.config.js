module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    fontFamily: {
      oswald: ['var(--font-oswald)'],
    }
  } },
  plugins: [require("tailwind-scrollbar-hide")],
};