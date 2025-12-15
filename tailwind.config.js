/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - dark blue theme
        brand: {
          50:  '#f4f8f6',
          100: '#e6eeea',
          200: '#cddcd4',
          300: '#b3c9be',
          400: '#9bb7aa',
          500: '#7f9f92', // main brand color
          600: '#67877a',
          700: '#526e63',
          800: '#3f554c',
          900: '#2d3c36',
        },
      // Alternative brand color - light blue theme
      //   brand: {
      //   50:  '#f2f7f8',
      //   100: '#e3edef',
      //   200: '#c8dadd',
      //   300: '#adc6ca',
      //   400: '#93b1b6',
      //   500: '#789aa0', // main brand color
      //   600: '#5f8187',
      //   700: '#4a676c',
      //   800: '#364e52',
      //   900: '#243639',
      // },
        // Neutral colors for text and backgrounds
        neutral: {
          50:  '#fafbf9',
          100: '#f3f5f2',
          200: '#e4e8e3',
          300: '#d1d6d0',
          400: '#a8b0a8',
          500: '#7c857e',
          600: '#5f6a63',
          700: '#49544e',
          800: '#343d38',
          900: '#202724',
        },
      },
    },
  },
  plugins: [],
}

