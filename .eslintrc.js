module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jasmine: true,
    node: true,
  },
  plugins: ['jasmine'],
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'func-names': 'off'
  },
};
