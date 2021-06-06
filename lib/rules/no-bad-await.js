const locale = require('../../utils/locale');
const { RULES, TYPES } = require('../../utils/const');

module.exports = {
  meta: {
    type: TYPES.problem,
    docs: {
      description: locale[RULES.NO_BAD_AWAIT].description,
      category: locale[RULES.NO_BAD_AWAIT].category,
      recommended: false
    },
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