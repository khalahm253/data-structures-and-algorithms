'use strict';

const findMaxValue = (tree) => {
  if (!tree.root) {
    return undefined;
  }
  
  let max = 0;

  const preOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }

    if (rootNode.value > max) {
      max = rootNode.value;
    }

    preOrderTraversal(rootNode.left);
    preOrderTraversal(rootNode.right);

    return undefined;
  };

  preOrderTraversal(tree.root);
  return max;
};

export default findMaxValue;