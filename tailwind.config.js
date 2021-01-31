module.exports = {
  purge: {
    content: ['./src/**/*.js',],
    options: {
      whitelist: ['is-active'],
    }
  },
  theme: {
    extend: {
      colors: {
        green: {
          light: '#18F851',
          DEFAULT: '#18F851',
          dark: '#18F851',
        },
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