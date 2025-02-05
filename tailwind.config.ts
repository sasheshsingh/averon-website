
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "background": '#000000', 
      "primary": '#FFFFFF',
      "secondary": '#B7B7B7',
      "edges": "#515151",
      "main": "#A8A8FF",
    },
    extend: {
    },
  },
  plugins: [require('flowbite/plugin')],
};
