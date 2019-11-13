module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-fontpath')({ checkFiles: true, ie8Fix: true }),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [require('@fullhuman/postcss-purgecss')]
      : [],
  ],
}
