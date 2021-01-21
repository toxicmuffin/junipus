// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    // typography config
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-typography
    require('@tailwindcss/typography'),
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
  