/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'primary':'#F7AB0A',
        'secondary':'#F7AB0A',
        'tertiary':'#F7AB0A',
        'accent':'#F7AB0A',
        'neutral':'#F7AB0A',
        'base-100':'#F7AB0A',
        'base-200':'#F7AB0A',
        'base-300':'#F7AB0A',
        'base-content':'#F7AB0A',
        'info':'#F7AB0A',
        'success':'#F7AB0A',
        'warning':'#F7AB0A',
      }
    },
  },
  plugins: [],
};
