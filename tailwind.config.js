/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,ts,jsx,tsx}", "./utils/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ffde59',
        'secondary': "#FFEDA3",
        'buttons': "#fff0b5",
        'game1': "#87D4A6",
        'game2': "#3DA3D5",
        'game3': "#E06666",
        'game4': "#FFDE59",
        'memory': "#B8F4D0",
        'board1': "#C4EAFA",
        'board2': "#3DA3D5",
        'slider1': "#EB7F7F",
        'slider2': "#F79C9C",
        'sliderknob': "#E06666",
        "tip1": "#B8F4D0",
        "tip2": "#FD9090",
        "tip3": "#C4EAFA",
        "tip4": "#FFDE59",
      },	
      fontFamily: {
        caveat: ['Caveat Brush', 'cursive'],
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      }
    }
  },
  plugins: [],
}
