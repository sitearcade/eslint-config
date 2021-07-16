// vars

const extOpts = {
  js: 'never',
  jsx: 'never',
  json: 'always',
  css: 'always',
  svg: 'always',
};

const anonOpts = {
  allowArray: true,
  allowObject: true,
  allowLiteral: true,
};

const orderOpts = {
  'pathGroupsExcludedImportTypes': ['builtin'],
  'newlines-between': 'always',
  'alphabetize': {order: 'asc'},

  'groups': [
    'type',
    'builtin',
    'external',
    'internal',
    'parent',
    'sibling',
    'index',
    'object',
    'unknown',
  ],

  'pathGroups': [{
    pattern: '@secretarcade/**',
    group: 'internal',
    position: 'before',
  }, {
    pattern: '@sitearcade/**',
    group: 'internal',
    position: 'before',
  }, {
    pattern: '@arc/**',
    group: 'internal',
    position: 'before',
  }],
};

// export

module.exports = {
  plugins: ['import'],

  settings: {
    'import/core-modules': ['electron'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },

  rules: {
    'import/default': 2,
    'import/dynamic-import-chunkname': 1,
    'import/export': 1,
    'import/exports-last': 0,
    'import/extensions': [1, extOpts],
    'import/first': 1,
    'import/group-exports': 0,
    'import/max-dependencies': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/newline-after-import': 1,
    'import/no-absolute-path': 0,
    'import/no-amd': 2,
    'import/no-anonymous-default-export': [1, anonOpts],
    'import/no-commonjs': 0,
    'import/no-cycle': 2,
    'import/no-default-export': 0,
    'import/no-deprecated': 1,
    'import/no-duplicates': 1,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 2,
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 2,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 1,
    'import/no-named-default': 1,
    'import/no-named-export': 0,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/no-relative-parent-imports': 0,
    'import/no-restricted-paths': 0,
    'import/no-self-import': 2,
    'import/no-unassigned-import': 0,
    'import/no-unresolved': [2],
    'import/no-useless-path-segments': 1,
    'import/no-webpack-loader-syntax': 2,
    'import/order': [1, orderOpts],
    'import/prefer-default-export': 0,
    'import/unambiguous': 1,
  },
};
