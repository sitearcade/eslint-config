// export

module.exports = {
  plugins: ['promise'],

  rules: {
    'promise/always-return': 0,
    'promise/avoid-new': 0,
    'promise/catch-or-return': 0,
    'promise/no-callback-in-promise': 1,
    'promise/no-native': 0,
    'promise/no-nesting': 0,
    'promise/no-new-statics': 2,
    'promise/no-promise-in-callback': 1,
    'promise/no-return-in-finally': 2,
    'promise/no-return-wrap': [2, {allowReject: true}],
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 0,
    'promise/valid-params': 2,
  },
};
