module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'no-debugger': 'error',
    'no-extra-semi': 'error',
    'no-empty': 'error',
    'no-unexpected-multiline': 'error',
    'no-empty-pattern': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'no-multi-spaces': 'error',
    'block-spacing': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'spaced-comment': ['error', 'always'],
    'no-spaced-func': 'error',
    'indent': ['error', 2]
  },
};
