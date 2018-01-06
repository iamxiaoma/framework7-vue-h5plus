// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'coremail',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'never'],
    //'semi': [0],
    //'indent': ['error', 'tab'],
    'indent': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 'off',
    'no-empty': 'off',
    'no-multi-spaces': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': [2, 'never'],
    'no-mixed-spaces-and-tabs': 'off',
    'no-unused-vars': 0,
    'operator-linebreak': 'off',
    'comma-dangle': 0,
    'comma-style': 0,
    'comma-spacing': 0
  }
}