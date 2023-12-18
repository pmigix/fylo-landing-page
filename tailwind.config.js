/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      "very-dark-blue": "hsl(243, 87%, 12%)",
      "desaturated-blue": "hsl(238, 22%, 44%)",
      "bright-blue": "hsl(224, 93%, 58%)",
      "light-bright-blue": "hsl(221, 100%, 71%)",
      "moderate-cyan": "hsl(170, 45%, 43%)",
      "cornflower-blue": "hsl(231, 40%, 59%)",
      "light-cyan": "hsl(170, 62%, 68%)",
      "light-grayish-blue": "hsl(240, 75%, 98%)",
      "light-gray": "hsl(0, 0%, 75%)",
    },
    fontFamily: {
      raleway: ["Raleway", "Arial", "sans-serif"],
    },
    fontSize: {
      para: "clamp(0.75rem, 4vw, 1.125rem)",
      heading1: "clamp(1.5rem, 5vw, 2.5rem)",
      heading2: "clamp(1rem, 5vw, 2.5rem)",
      heading3: "clamp(1rem, 5vw, 2rem)",
    },
    content: {
      arrow: 'url("./images/icon-arrow.svg")',
      phone: 'url("./images/icon-phone.svg")',
      email: 'url("./images/icon-email.svg")',
    },
    backgroundSize: {
      stretch: "450% 100%",
    },
  },
};
