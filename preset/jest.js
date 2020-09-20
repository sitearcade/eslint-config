// export

module.exports = {
  plugins: ['jest'],

  env: {
    jest: true,
  },

  rules: {
    'jest/consistent-test-it': 1,
    'jest/expect-expect': 1,
    'jest/lowercase-name': [1, {ignore: ['test', 'describe']}],
    'jest/no-alias-methods': 1,
    'jest/no-disabled-tests': 1,
    'jest/no-focused-tests': 1,
    'jest/no-hooks': 0,
    'jest/no-identical-title': 1,
    'jest/no-jasmine-globals': 1,
    'jest/no-jest-import': 1,
    'jest/no-large-snapshots': [1, {maxSize: 50}],
    'jest/no-done-callback': 1,
    'jest/no-test-prefixes': 2,
    'jest/no-test-return-statement': 1,
    'jest/no-truthy-falsy': 1,
    'jest/prefer-expect-assertions': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/prefer-spy-on': 1,
    'jest/prefer-strict-equal': 1,
    'jest/prefer-to-be-null': 1,
    'jest/prefer-to-be-undefined': 1,
    'jest/prefer-to-contain': 1,
    'jest/prefer-to-have-length': 1,
    'jest/valid-describe': 1,
    'jest/valid-expect': 1,
    'jest/valid-expect-in-promise': 1,
  },
};
