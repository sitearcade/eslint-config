// export

module.exports = {
  plugins: ['jest-formatting'],

  env: {
    jest: true,
  },

  rules: {
    'jest-formatting/padding-around-after-all-blocks': 1,
    'jest-formatting/padding-around-after-each-blocks': 1,
    'jest-formatting/padding-around-before-all-blocks': 1,
    'jest-formatting/padding-around-before-each-blocks': 1,
    'jest-formatting/padding-around-expect-groups': 1,
    'jest-formatting/padding-around-describe-blocks': 1,
    'jest-formatting/padding-around-test-blocks': 1,
    'jest-formatting/padding-around-all': 0,
  },
};
