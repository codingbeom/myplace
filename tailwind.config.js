module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
    "./src/views/**/*.{js,ts,vue}",
    "./src/components/**/*.{js,ts,vue}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
