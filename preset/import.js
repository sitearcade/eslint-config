// import

const path = require('path');

const find = require('find-config');
const globby = require('globby');

const R = require('ramda');

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
  'newlines-between': 'always',
  'alphabetize': {
    order: 'asc',
  },
  'groups': [
    'builtin',
    'external',
    'internal',
    'parent',
    'sibling',
    'index',
    'unknown',
  ],
  'pathGroups': [
    {
      pattern: '@arc/**',
      group: 'external',
      position: 'after',
    },
  ],
  'pathGroupsExcludedImportTypes': ['builtin'],
};

// config

const lernaDir = path.parse(find('lerna.json')).dir;

const lernaParents = R.pipe(
  find.require,
  R.propOr([], 'packages'),
  // lists all packages...
  R.map((loc) => globby.sync(loc, {
    cwd: lernaDir,
    onlyDirectories: true,
    expandDirectories: false,
  })),
  R.flatten,
  R.map((loc) => path.resolve(lernaDir, loc)),
  // reduces down to parent directories...
  R.map((loc) => loc.replace(/(\/|^)[^/]+$/, '')),
  R.uniq,
)('lerna.json');

// export

module.exports = {
  plugins: ['import'],

  settings: {
    'import/resolver': {
      'node': {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
        moduleDirectory: ['node_modules', '.'],
      },
      'eslint-import-resolver-lerna': {
        packages: lernaParents,
      },
    },
    'import/core-modules': ['electron'],
    'import/ignore': [/\.es\.js$/],
    'import/cache': {
      lifetime: 15,
    },
  },

  rules: {
    'import/default': 2,
    'import/dynamic-import-chunkname': 1,
    'import/export': 1,
    'import/exports-last': 0,
    'import/extensions': [1, extOpts],
    'import/first': [1, 'absolute-first'],
    'import/group-exports': 0,
    'import/max-dependencies': 0,
    // 'import/named': 2,
    // 'import/namespace': [2, {allowComputed: true}],
    'import/newline-after-import': 1,
    'import/no-absolute-path': 0,
    'import/no-amd': 2,
    'import/no-anonymous-default-export': [1, anonOpts],
    'import/no-commonjs': 0,
    'import/no-cycle': 2,
    'import/no-default-export': 0,
    // 'import/no-deprecated': 1,
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

  overrides: [
    {
      files: ['*.story.{js,mdx}'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
