const locale = require('../../utils/locale');
const RULES = require('../../utils/const');

module.exports = {
  meta: {
    docs: {
      description: locale[RULES.FUNCTION_PARAMETERS_LIMIT].description,
      category: locale[RULES.FUNCTION_PARAMETERS_LIMIT].category,
      recommended: false
    },
    fixable: null,// or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },
  create: context => {
    return {
      FunctionDeclaration: node => {
        if (node.params.length > 3) {
          context.report({
            node,
            message: locale[RULES.FUNCTION_PARAMETERS_LIMIT].message
          });
        }
      }
    };
  }
};
