module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: [
          'Syne Mono', 'monospace'
        ]
      }
    },
  },
  plugins: [require("daisyui")],
}