/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inter: ['Inter'],
        assistant: ["Assistant"],
      },
      shapeRendering: {
        shapeAuto: 'shape-rendering: auto',
      },
    },
  },
  plugins: [],
}

