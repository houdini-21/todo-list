module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 'off',
//    'import/no-cycle': [2, { maxDepth: 1 }],
  },
};
