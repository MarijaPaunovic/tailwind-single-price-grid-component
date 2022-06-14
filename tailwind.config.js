/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      screens: {
        xs: '375px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: {
          dark: 'hsl(179, 62%, 43%)', //	#2ab2af - dark green
          light: 'hsl(179, 47%, 52%)' // #4abebd - light green 
        },
        secondary: 'hsl(71, 73%, 54%)', // #c0df34 - yellow
        lightGray: 'hsl(204, 43%, 93%)', // #e5eff5 - background
        grayishBlue: 'hsl(218, 22%, 67%)' // #98a6bd - text color
      },
      fontFamily: {
        body: ['Karla']
      }
    },
  },
  plugins: [],
}
