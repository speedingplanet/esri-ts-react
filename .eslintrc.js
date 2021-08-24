module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  plugins: [ '@typescript-eslint' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
    // requireConfigFile: false,
  },

  extends: [
    'standard',
    'standard-with-typescript',
    // 'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    // '@typescript-eslint/array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    '@typescript-eslint/comma-dangle': [ 'error', 'always-multiline' ],
    indent: [ 'error', 2, { MemberExpression: 1 } ],
    '@typescript-eslint/indent': [ 'error', 2, { MemberExpression: 1 } ],
    'max-len': [ 'error', { code: 90, comments: 120 } ],
    // '@typescript-eslint/max-len': [ 'error', { code: 90, comments: 120 } ],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 } ],
    /*
    '@typescript-eslint/newline-per-chained-call': [
      'error',
      { ignoreChainWithDepth: 2 },
    ],
    */
    'object-curly-spacing': [ 'error', 'always' ],
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    /*
    '@typescript-eslint/object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    */
    'prefer-const': 'off',
    '@typescript-eslint/prefer-const': 'off',
    semi: [ 'error', 'always' ],
    '@typescript-eslint/semi': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    '@typescript-eslint/space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'always' ],
    // '@typescript-eslint/space-in-parens': [ 'error', 'always' ],
    // '@babel/semi': 'warn',
  },
  ignorePatterns: [ 'node_modules' ],
};
