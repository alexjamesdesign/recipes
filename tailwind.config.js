module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    extend: {
      borderRadius: {
       'xl': '1rem',
       '2xl': '2.2rem',
      },
      colors: {
        'primary': '#3A857E',
        'secondary': '#F8F3E8',
        'tertiary': '#FF4233',
      },
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
        anton: [
          'Anton',
        ],
      },
    }
  },
  corePlugins: {
    container: false
  }
}