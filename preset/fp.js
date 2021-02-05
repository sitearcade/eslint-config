// vars

const allowedObjects = [
  '_',
  'R',
  'form',
  'router',
  'Router',
  'git',
  'control',
];

// export

module.exports = {
  plugins: ['fp'],

  rules: {
    'fp/no-arguments': 1,
    'fp/no-class': 0,
    'fp/no-delete': 1,
    'fp/no-events': 1,
    'fp/no-get-set': 1,
    'fp/no-let': 0,
    'fp/no-loops': 1,
    'fp/no-mutating-assign': 1,
    'fp/no-mutating-methods': [1, {allowedObjects}],
    'fp/no-mutation': 0,
    'fp/no-nil': 0,
    'fp/no-proxy': 1,
    'fp/no-rest-parameters': 0,
    'fp/no-this': 0,
    'fp/no-throw': 0,
    'fp/no-unused-expression': 0,
    'fp/no-valueof-field': 1,
  },
};
