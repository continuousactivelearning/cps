/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              // Ensure these or similar styles are present for inline code
              backgroundColor: theme('colors.gray.500'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontWeight: theme('fontWeight.normal'),
              color: theme('colors.gray.100'),
            },
            'code::before': {
              content: '""', // To remove default quotation marks if any
            },
            'code::after': {
              content: '""', // To remove default quotation marks if any
            },
          },
        }}),
      animation: {
        fadeInScale: "fadeInScale 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
