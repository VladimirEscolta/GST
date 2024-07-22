/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui',
    },
    extend: {
      colors: {
        'gst-text': '#0B0A33',
        'gst-main': '#0F86D9',
        'gst-second': '#113E7C'
      },
      borderRadius: {
        'gst3': '3px',
        'gst20': '20px'
      },
      fontSize: {
        'gst15': '15px',
        'gst22': '22px',
        'gst56': '56px',
        'gst64': '64px'
      },
      lineHeight: {
        'gst42': '42px',
        'gst56': '56px',
        'gst70': '70px'
      }
    },
  },
  plugins: [],
}

