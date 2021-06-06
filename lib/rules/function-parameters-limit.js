const locale = require('../../utils/locale');
const { RULES, TYPES } = require('../../utils/const');

module.exports = {
  meta: {
    type: TYPES.suggestion,
    docs: {
      description: locale[RULES.FUNCTION_PARAMETERS_LIMIT].description,
      category: locale[RULES.FUNCTION_PARAMETERS_LIMIT].category,
      recommended: true
    },
    fixable: true
  },
  create: context => {
    return {
      FunctionDeclaration: node => {
        if (node.params.length > 3) {
          context.report({
            node,
            message: locale[RULES.FUNCTION_PARAMETERS_LIMIT].message,
            fix: (fixer) => {
              const sourceCode = context.getSourceCode();
              const nodeSource = sourceCode.getText(node);

              const regExp = /\(\s*([^)]+?)\s*\)/;
              const cutCode = nodeSource.split(regExp);

              if (cutCode.length < 3) {
                return
              }

              return fixer.replaceText(node, `${cutCode[0]} ({${cutCode[1]}}) ${cutCode[2]}`);
            }
          });
        }
      },
      ArrowFunctionExpression: node => {
        if (node.params.length > 3) {
          context.report({
            node,
            message: locale[RULES.FUNCTION_PARAMETERS_LIMIT].message,
            fix: (fixer) => {
              const sourceCode = context.getSourceCode();
              const nodeSource = sourceCode.getText(node);

              const regExp = /\(\s*([^)]+?)\s*\)/;
              const cutCode = nodeSource.split(regExp);

              if (cutCode.length < 3) {
                return
              }

              return fixer.replaceText(node, `({${cutCode[1]}})${cutCode[2]}`);
            }
          })
        }
      },
    };
  }
};
