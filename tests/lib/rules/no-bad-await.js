const RuleTester = require('eslint').RuleTester;
const rules = require('../../../lib/rules/no-bad-await');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2021 } });

ruleTester.run('no-bad-await', rules['no-bad-await'], {
  valid: [
    {
      code: [
        'async function testFunc() {',
        '  return 1;',
        '}',
        'async function testFunc2() {',
        '  const a = await testFunc();',
        '}',
      ].join('\n')
    },
    {
      code: [
        'const a = null;',
        'async function testFunc() {',
        '  return 1;',
        '}',
        'async function testFunc2() {',
        '  a = await testFunc();',
        '}',
      ].join('\n')
    },
  ],

  invalid: [
    {
      code: [
        'async function testFunc() {',
        '  return 1;',
        '}',
        'async function testFunc2() {',
        '  return await testFunc();',
        '}',
      ].join('\n'),
      errors: [{ message: 'Не используйте await в выражениях.' }],
    },
    {
      code: [
        'async function testFunc() {',
        '  return 1;',
        '}',
        'async function testFunc2() {',
        '  1 + await testFunc();',
        '}',
      ].join('\n'),
      errors: [{ message: 'Не используйте await в выражениях.' }],
    },
    {
      code: [
        'async function testFunc() {',
        '  return 1;',
        '}',
        'function testSyncFunc() {',
        '  return',
        '}',
        'async function testFunc2() {',
        '  const testVariable = testSyncFunc(await testFunc());',
        '}',
      ].join('\n'),
      errors: [{ message: 'Не используйте await в выражениях.' }],
    },
    {
      code: [
        'async function testFunc() {',
        '  return 1;',
        '}',
        'async function testFunc2() {',
        '  const testVariable = {x: foo(), z: await testFunc()}',
        '}',
      ].join('\n'),
      errors: [{ message: 'Не используйте await в выражениях.' }],
    },
  ]
});