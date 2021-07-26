module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.md',
    './src/**/*.njk',
  ],
  theme: {
    fontFamily: {
      'serif': ['Vollkorn', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'caps': ['"Vollkorn SC"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'hand': ['"Amatic SC"', 'sans-serif']
    },
    extend: {

    }
  },
  variants: {},
  plugins: []
}
