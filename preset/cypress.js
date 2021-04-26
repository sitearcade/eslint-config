// export

module.exports = {
  plugins: ['cypress'],

  rules: {
    'cypress/assertion-before-screenshot': 1,
    'cypress/no-assigning-return-values': 1,
    'cypress/no-async-tests': 2,
    'cypress/no-force': 1,
    'cypress/no-unnecessary-waiting': 1,
    'cypress/require-data-selectors': 1,
  },
};
