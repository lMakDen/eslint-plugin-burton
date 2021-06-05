const locale = require('../../utils/locale');
const RULES = require('../../utils/const');

module.exports = {
  meta: {
    docs: {
      description: locale[RULES.NO_BAD_AWAIT].description,
      category: locale[RULES.NO_BAD_AWAIT].category,
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: context => {
    const allowedAncestors = [
      'VariableDeclarator',
      'ExpressionStatement',
      'AssignmentExpression'
    ];

    return {
      AwaitExpression: node => {
        const ancestors = context.getAncestors(node),
          last = ancestors[ancestors.length - 1];
        if (!allowedAncestors.includes(last.type)) {
          context.report({
            node,
            message: locale[RULES.NO_BAD_AWAIT].message
          });
        }
      }
    };
  }
};