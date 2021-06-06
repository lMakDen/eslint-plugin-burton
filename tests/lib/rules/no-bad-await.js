const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-bad-await');
const locale = require('../../../utils/locale');
const { RULES } = require('../../../utils/const');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2021 } });
const message = locale[RULES.NO_BAD_AWAIT].message;

ruleTester.run('no-bad-await', rule, {
  valid: [
    // {
    //   code:
    //     `async function testFunc() {
    //       return 1;
    //      };
    //     async function testFunc2() {
    //       const a = await testFunc();
    //     }`
    // },
    // {
    //   code:
    //     `const a = null;
    //      async function testFunc() {
    //        return 1;
    //      }
    //      async function testFunc2() {
    //        a = await testFunc();
    //      }`
    // },
  ],

  invalid: [
    // {
    //   code:
    //     `async function testFunc() {
    //        return 1;
    //      }
    //      async function testFunc2() {
    //        return await testFunc();
    //      }`,
    //   errors: [{ message }],
    // },
    // {
    //   code:
    //     `async function testFunc() {
    //        return 1;
    //      }
    //      async function testFunc2() {
    //        1 + await testFunc();
    //      }`,
    //   errors: [{ message }],
    // },
    // {
    //   code:
    //     `async function testFunc() {
    //        return 1;
    //      }
    //      function testSyncFunc() {
    //        return
    //      }
    //      async function testFunc2() {
    //        const testVariable = testSyncFunc(await testFunc());
    //      }`,
    //   errors: [{ message }],
    // },
    // {
    //   code:
    //     `async function testFunc() {
    //        return 1;
    //      }
    //      async function testFunc2() {
    //        const testVariable = {x: foo(), z: await testFunc()}
    //      }`,
    //   errors: [{ message }],
    // },
  ]
});