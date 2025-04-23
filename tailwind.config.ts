/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.5s ease-out forwards',
      },
    },
  },
  plugins: [
    require["tailwindcss-animate"],
  ],
};

// tailwind.config.js
module.exports = {
  // …
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'text-green-500',
        'hover:text-green-400',
        'bg-green-500',
        'w-0',
        'w-full',
        'group-hover:w-full'
      ],
    },
  },
  // …
}
