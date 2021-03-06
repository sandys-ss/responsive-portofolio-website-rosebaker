module.exports = {
  //purge: ["./*.html"],
  purge: {
    enabled: false,
    content: ['./*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#FFE8EE',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'roboto', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
