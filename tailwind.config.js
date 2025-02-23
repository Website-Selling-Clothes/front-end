// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        victor: ['"Victor Mono"', 'monospace'],
        vidaloka: ['Vidaloka', 'serif'],
    },
  },
  },
  plugins: [
    require('daisyui'),
  ],
}
