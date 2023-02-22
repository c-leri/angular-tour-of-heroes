/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#1669c4",
          "primary-content": "#ffffff",
          "secondary": "#c026d3",
          "accent": "#34d399",
          "neutral": "#1c1917",
          "base-100": "#303030",
          "info": "#3ABFF8",
          "success": "#84cc16",
          "warning": "#facc15",
          "error": "#dd0031",
        },
      },
      {
        light: {
          "primary": "#1669c4",
          "primary-content": "#ffffff",
          "secondary": "#c026d3",
          "accent": "#34d399",
          "neutral": "#374151",
          "base-100": "#f3f4f6",
          "info": "#3ABFF8",
          "success": "#84cc16",
          "warning": "#facc15",
          "error": "#dd0031",
        }
      }
    ],
  },
  plugins: [require('daisyui')],
}
