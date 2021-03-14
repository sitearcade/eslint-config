// import

const R = require('ramda');

const {rules: bbRules} = require('./babel');
const {rules: jsRules} = require('./eslint');

// vars

const assertOpts = {
  assertionStyle: 'as',
  objectLiteralTypeAssertions: 'allow-as-parameter',
};

const namingOpts = [
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
];

// fns

const extendRules = (tsRules) => Object.keys(tsRules).reduce((acc, tsRule) => {
  const jsRule = tsRule.replace('@typescript-eslint/', '');
  const bbRule = `babel/${jsRule}`;

  // Disable core rules...
  return jsRule === tsRule ? {...acc, [tsRule]: tsRules[tsRule]} :
    // Use babel/RULE value where possible...
    bbRules[bbRule] ? {...acc, [tsRule]: bbRules[bbRule]} :
    // Skip TS-only rules...
    R.isNil(jsRules[jsRule]) ? {...acc, [tsRule]: tsRules[tsRule]} :
    // Prefer JS value to TS value...
    {...acc, [jsRule]: 0, [tsRule]: jsRules[jsRule] ?? tsRules[tsRule]};
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
    // disable core

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

    // replace core

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
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-extra-semi': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-loop-func': 2,
    '@typescript-eslint/no-loss-of-precision': 2,
    '@typescript-eslint/no-magic-numbers': 0, // eslint
    '@typescript-eslint/no-redeclare': 2,
    '@typescript-eslint/no-shadow': 2,
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unused-expressions': 1, // babel
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/quotes': 1, // babel
    '@typescript-eslint/object-curly-spacing': 1, // babel
    '@typescript-eslint/require-await': 0, // eslint
    '@typescript-eslint/semi': 1, // babel
    '@typescript-eslint/space-before-function-paren': 2,
    '@typescript-eslint/space-infix-ops': 2,

    // unique

    '@typescript-eslint/adjacent-overload-signatures': 1,
    '@typescript-eslint/array-type': [1, {default: 'array-simple'}],
    '@typescript-eslint/await-thenable': 0,
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/ban-tslint-comment': 1,
    '@typescript-eslint/ban-types': 1,
    // '@typescript-eslint/class-literal-property-style': 1,
    '@typescript-eslint/consistent-indexed-object-style': 1,
    '@typescript-eslint/consistent-type-assertions': [1, assertOpts],
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/consistent-type-imports': 1,
    // '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/explicit-member-accessibility': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 0,
    // '@typescript-eslint/lines-between-class-members': 1,
    '@typescript-eslint/member-delimiter-style': 1,
    // '@typescript-eslint/member-ordering': 1,
    '@typescript-eslint/method-signature-style': 1,
    // '@typescript-eslint/naming-convention': [1, ...namingOpts],
    // '@typescript-eslint/no-base-to-string': 1,
    // '@typescript-eslint/no-confusing-non-null-assertion': 1,
    // '@typescript-eslint/no-confusing-void-expression': 1,
    // '@typescript-eslint/no-dynamic-delete': 1,
    // '@typescript-eslint/no-empty-interface': 1,
    // '@typescript-eslint/no-explicit-any': [1, {fixToUnknown: true}],
    // '@typescript-eslint/no-extra-non-null-assertion': 1,
    // '@typescript-eslint/no-extraneous-class': 1,
    // '@typescript-eslint/no-floating-promises': 1,
    // '@typescript-eslint/no-for-in-array': 1,
    // '@typescript-eslint/no-implicit-any-catch': 0,
    // '@typescript-eslint/no-inferrable-types': 1,
    // '@typescript-eslint/no-invalid-this': 1,
    // '@typescript-eslint/no-invalid-void-type': 1,
    // '@typescript-eslint/no-misused-new': 1,
    // '@typescript-eslint/no-misused-promises': 1,
    // '@typescript-eslint/no-namespace': 1,
    // '@typescript-eslint/no-non-null-asserted-optional-chain': 1,
    // '@typescript-eslint/no-non-null-assertion': 1,
    // '@typescript-eslint/no-parameter-properties': 1,
    // '@typescript-eslint/no-require-imports': 1,
    // '@typescript-eslint/no-this-alias': 1,
    '@typescript-eslint/no-type-alias': 0,
    // '@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,
    // '@typescript-eslint/no-unnecessary-condition': 0,
    // '@typescript-eslint/no-unnecessary-qualifier': 1,
    // '@typescript-eslint/no-unnecessary-type-arguments': 1,
    // '@typescript-eslint/no-unnecessary-type-assertion': 1,
    // '@typescript-eslint/no-unnecessary-type-constraint': 1,
    // '@typescript-eslint/no-unsafe-assignment': 0,
    // '@typescript-eslint/no-unsafe-call': 0,
    // '@typescript-eslint/no-unsafe-member-access': 0,
    // '@typescript-eslint/no-unsafe-return': 1,
    // '@typescript-eslint/no-var-requires': 1,
    // '@typescript-eslint/non-nullable-type-assertion-style': 1,
    // '@typescript-eslint/prefer-as-const': 1,
    // '@typescript-eslint/prefer-enum-initializers': 1,
    // '@typescript-eslint/prefer-for-of': 1,
    // '@typescript-eslint/prefer-function-type': 1,
    // '@typescript-eslint/prefer-includes': 1,
    // '@typescript-eslint/prefer-literal-enum-member': 1,
    // '@typescript-eslint/prefer-namespace-keyword': 1,
    // '@typescript-eslint/prefer-nullish-coalescing': 0,
    // '@typescript-eslint/prefer-optional-chain': 1,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    // '@typescript-eslint/prefer-readonly': 1,
    // '@typescript-eslint/prefer-reduce-type-parameter': 1,
    // '@typescript-eslint/prefer-regexp-exec': 1,
    // '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/prefer-ts-expect-error': 1,
    // '@typescript-eslint/promise-function-async': 1,
    // '@typescript-eslint/require-array-sort-compare': 1,
    // '@typescript-eslint/restrict-plus-operands': 1,
    // '@typescript-eslint/restrict-template-expressions': 0,
    // '@typescript-eslint/return-await': 1,
    // '@typescript-eslint/sort-type-union-intersection-members': 1,
    '@typescript-eslint/strict-boolean-expressions': 0,
    // '@typescript-eslint/switch-exhaustiveness-check': 1,
    // '@typescript-eslint/triple-slash-reference': 1,
    // '@typescript-eslint/type-annotation-spacing': 1,
    // '@typescript-eslint/typedef': 1,
    // '@typescript-eslint/unbound-method': 1,
    // '@typescript-eslint/unified-signatures': 1,
  }),
};
