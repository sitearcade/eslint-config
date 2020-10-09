// import

const path = require('path');

// export

module.exports = {
  root: true,

  globals: {
    globalThis: false,
  },

  extends: [
    './preset/eslint.js',
    './preset/babel.js',
    './preset/eslint-comments.js',
    './preset/fp.js',
    './preset/import.js',
    './preset/jsx-a11y.js',
    // './preset/lodash.js',
    './preset/optimize-regex.js',
    './preset/promise.js',
    './preset/ramda.js',
    './preset/react-hooks.js',
    './preset/react.js',
    './preset/styled-components.js',
  ].map((loc) => path.resolve(__dirname, loc)),

  rules: {},

  overrides: [
    {
      files: ['**/*.test.{js,ts,jsx,tsx,mjs}'],

      extends: [
        './preset/jest.js',
        './preset/jest-formatting.js',
      ].map((loc) => path.resolve(__dirname, loc)),
    },
    {
      files: ['**/*.story.{js,ts,jsx,tsx,mjs}'],

      rules: {
        'react/jsx-sort-props': 0,
      },
    },
    {
      files: [
        'cdk.{js,ts,jsx,tsx,mjs}',
        '{class,model,stack,struct}/**/*.{js,ts,jsx,tsx,mjs}',
      ],

      rules: {
        'fp/no-class': 0,
        'fp/no-this': 0,
        'no-new': 0,
        'max-classes-per-file': 0,
      },
    },
  ],
};
