const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/function-parameters-limit');
const locale = require('../../../utils/locale');
const RULES = require('../../../utils/const');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2021 } });

ruleTester.run(RULES.FUNCTION_PARAMETERS_LIMIT, rule, {
  valid: [
    {
      code:
      `function testFunc(a, b) {
           return 1;
      }`
    },
  ],

  invalid: [
    {
      code:
      `function testFunc(a, b, c, d, e, f, g) {
           return 1;
       }`,
      errors: [{ message: locale[RULES.FUNCTION_PARAMETERS_LIMIT].message }],
    },
  ]
});