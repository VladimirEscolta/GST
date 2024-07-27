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
        'gst5': '5px',
        'gst7': '7px',
        'gst20': '20px'
      },
      fontSize: {
        'gst15': '15px',
        'gst22': '22px',
        'gst28': '28px',
        'gst56': '56px',
        'gst64': '64px'
      },
      lineHeight: {
        'gst42': '42px',
        'gst56': '56px',
        'gst70': '70px'
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(180deg, #0F86D9 0%, #006EBB 100%)',
        'aksioma-gradient': 'linear-gradient(177.32deg, #0F86D9 15.71%, #113E7C 172.91%)',
        'about-gradient': 'linear-gradient(98.53deg, #0F86D9 12.05%, #113E7C 97.83%)',
        'service-gradient': 'linear-gradient(305.94deg, #0F86D9 33.75%, #113E7C 90.8%)'
}
    },
  },
  plugins: [],
}

