// export

module.exports = {
  plugins: ['babel'],

  parser: 'babel-eslint',

  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: true,
    requireConfigFile: false,
  },

  globals: {
    preval: true,
  },

  rules: {
    'babel/camelcase': 0,
    'babel/new-cap': 1,
    'babel/no-invalid-this': 2,
    // 'babel/no-unused-expressions': [1, {allowTaggedTemplates: true}],
    // TODO: until pipeline-related bug is fixed...
    'babel/no-unused-expressions': 0,
    'babel/object-curly-spacing': [1, 'never'],
    'babel/quotes': [1, 'single', {avoidEscape: true}], // prefer backticks?
    'babel/semi': [1, 'always'],
    'babel/valid-typeof': [2, {requireStringLiterals: true}],
  },
};
