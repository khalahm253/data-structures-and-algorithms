'use strict';

const FizzBuzzTree = (tree) => {
  if (!tree) {
    return undefined;
  }
  
  const preOrderTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }

    if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
      rootNode.value = 'FizzBuzz';
    }
    
    if (rootNode.value % 3 === 0) {
      rootNode.value = 'Fizz';
    }

    if (rootNode.value % 5 === 0) {
      rootNode.value = 'Buzz';
    }

    preOrderTraversal(rootNode.left);
    preOrderTraversal(rootNode.right);

    return tree;
  };

  preOrderTraversal(tree.root);
};

export default FizzBuzzTree;