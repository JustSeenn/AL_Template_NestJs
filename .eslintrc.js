module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable the requirement to specify return types for exported functions
    '@typescript-eslint/no-explicit-any': 'off', // Allow the use of the 'any' type
    '@typescript-eslint/no-var-requires': 'off', // Allow the use of 'require' for imports

    // ESLint core rules
    'comma-dangle': ['error', 'always-multiline'], // Require trailing commas on multiline lists and arrays
    'no-var': 'error', // Prefer 'let' or 'const' over 'var'
    'prefer-const': 'error', // Prefer 'const' when the variable won't be reassigned

    // Other rules specific to your code style
    // ...
    // Indentation
    '@typescript-eslint/indent': ['error', 2], // 2-space indentation
    'no-tabs': 'error', // Disallow the use of tabs

    // Semicolons
    'semi': ['error', 'always'], // Require semicolons at the end of statements

    // String quotes
    'quotes': ['error', 'single'], // Use single quotes for strings

    // Whitespace
    'no-trailing-spaces': 'error', // Disallow trailing whitespace
    'no-multi-spaces': 'error', // Disallow multiple spaces

    // Commas
    'comma-spacing': 'error', // Require spaces after commas
    'comma-style': 'error', // Require commas at the end of the line

    // Parentheses
    'space-in-parens': 'error', // Require spaces inside parentheses

    // Dot
    'dot-location': ['error', 'property'], // Place the dot on the same line as the property

    // Functions
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }], // Require space before the opening parenthesis of functions

    // Objects and arrays
    'object-curly-spacing': ['error', 'always'], // Require spaces inside object braces
    'array-bracket-spacing': ['error', 'always'], // Require spaces inside array brackets

    // Comments
    'spaced-comment': ['error', 'always'], // Require space after the comment start characters

    // Variable naming
    '@typescript-eslint/naming-convention':
      - 'error'
      - {
        'selector': 'variable',
        'format': ['camelCase', 'UPPER_CASE']
      } // Use camelCase or UPPER_CASE for variable names

    // Other rules specific to your code style
    // ...
    },
};
