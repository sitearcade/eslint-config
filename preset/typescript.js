// import

const R = require('ramda');

const {rules: jsRules} = require('./eslint');

// fns

const extendRules = (tsRules) => Object.keys(tsRules).reduce((acc, tsRule) => {
  const jsRule = tsRule.replace('@typescript-eslint/', '');

  // skip core recommended
  return jsRule === tsRule ? acc :
    // add new rules normally
    R.isNil(jsRules[jsRule]) ? {...acc, [tsRule]: tsRules[tsRule]} :
    // disable core rules with replacements
    {
      ...acc,
      [jsRule]: 0,
      [tsRule]: jsRules[jsRule] ?? tsRules[tsRule],
    };
}, {});

// export

module.exports = {
  plugins: ['@typescript-eslint'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },

  rules: extendRules({
    // core - recommended disable

    'constructor-super': 0,
    'getter-return': 0,
    'lines-between-class-members': 0,
    'no-const-assign': 0,
    'no-dupe-args': 0,
    'no-dupe-keys': 0,
    'no-func-assign': 0,
    'no-import-assign': 0,
    'no-invalid-this': 0,
    'no-new-symbol': 0,
    'no-obj-calls': 0,
    'no-return-await': 0,
    'no-setter-return': 0,
    'no-this-before-super': 0,
    'no-undef': 0,
    'no-unreachable': 0,
    'no-unsafe-negation': 0,
    'valid-typeof': 0,

    // core - recommended enable

    'no-var': 2,
    'prefer-const': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,

    // core - replacements

    '@typescript-eslint/brace-style': 2,
    '@typescript-eslint/comma-dangle': 2,
    '@typescript-eslint/comma-spacing': 2,
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/dot-notation': 2,
    '@typescript-eslint/func-call-spacing': 2,
    '@typescript-eslint/indent': 2,
    '@typescript-eslint/init-declarations': 2,
    '@typescript-eslint/keyword-spacing': 2,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-duplicate-imports': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-extra-parens': 2,
    '@typescript-eslint/no-extra-semi': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': 2,
    '@typescript-eslint/no-redeclare': 2,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/quotes': 2,
    '@typescript-eslint/object-curly-spacing': 2,
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/semi': 2,
    '@typescript-eslint/space-before-function-paren': 2,
    '@typescript-eslint/space-infix-ops': 2,

    // typescript

    '@typescript-eslint/adjacent-overload-signatures': 1,
    '@typescript-eslint/array-type': [1, {default: 'array-simple'}],
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-tslint-comment': 2,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/class-literal-property-style': 2,
    '@typescript-eslint/consistent-indexed-object-style': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-definitions': 2,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/explicit-module-boundary-types': 2,
    '@typescript-eslint/lines-between-class-members': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/method-signature-style': 2,
    '@typescript-eslint/naming-convention': 2,
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/no-confusing-non-null-assertion': 2,
    '@typescript-eslint/no-confusing-void-expression': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-extra-non-null-assertion': 2,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-implicit-any-catch': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-invalid-this': 2,
    '@typescript-eslint/no-invalid-void-type': 2,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-namespace': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-parameter-properties': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': 2,
    '@typescript-eslint/no-type-alias': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-condition': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unnecessary-type-constraint': 2,
    '@typescript-eslint/no-unsafe-assignment': 2,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-unsafe-member-access': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/non-nullable-type-assertion-style': 2,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-literal-enum-member': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-readonly-parameter-types': 2,
    '@typescript-eslint/prefer-readonly': 2,
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/restrict-template-expressions': 2,
    '@typescript-eslint/return-await': 2,
    '@typescript-eslint/sort-type-union-intersection-members': 2,
    '@typescript-eslint/strict-boolean-expressions': 2,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/triple-slash-reference': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/typedef': 2,
    '@typescript-eslint/unbound-method': 2,
    '@typescript-eslint/unified-signatures': 2,
  }),
};
