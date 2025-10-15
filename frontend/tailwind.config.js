// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'slide-bg': 'slide 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-75%)' },
        },
      },
    },
  },
  plugins: [],
};
