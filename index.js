// import

const path = require('path');

// fns

const resolvePaths = (paths) =>
  paths.map((loc) => path.resolve(__dirname, loc));

// export

module.exports = {
  root: true,

  globals: {
    globalThis: false,
  },

  extends: resolvePaths([
    './preset/eslint.js',
    './preset/babel.js',
    './preset/eslint-comments.js',
    './preset/fp.js',
    './preset/import.js',
    './preset/jsx-a11y.js',
    './preset/optimize-regex.js',
    './preset/promise.js',
    './preset/ramda.js',
    './preset/react-hooks.js',
    './preset/react.js',
    './preset/styled-components.js',
  ]),

  rules: {},

  overrides: [
    // typescript
    {
      files: ['**/*.{ts,tsx}'],

      extends: resolvePaths(['./preset/typescript.js']),

      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: [
              process.cwd(),
              'packages/*/tsconfig.json',
            ],
          },
        },
      },

      rules: {
        'import/unambiguous': 0,
      },
    },

    // jest
    {
      files: ['**/*.test.{js,jsx,ts,tsx,mjs}'],

      extends: resolvePaths([
        './preset/jest.js',
        './preset/jest-formatting.js',
      ]),
    },

    // storybook
    {
      files: ['**/*.story.{js,jsx,ts,tsx,mjs}'],

      rules: {
        'react/jsx-sort-props': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },

    // OOP where needed
    {
      files: [
        'cdk.{js,ts,jsx,tsx,mjs}',
        '{class,model,stack,struct}/**/*.{js,jsx,ts,tsx,mjs}',
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
