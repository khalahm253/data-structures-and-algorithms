'use strict';

const breadthFirstTraversal = (tree) => {
  if (!tree.root) {
    return undefined;
  }
  let treeString = '';
  const treeQueue = [];
  treeQueue.push(tree.root);

  while (treeQueue.length > 0) {
    const temp = treeQueue.shift();
    console.log(temp.value);
    treeString += temp.value;

    if (temp.left !== null) {
      treeQueue.push(temp.left);
    }

    if (temp.right !== null) {
      treeQueue.push(temp.right);
    }
  }

  return treeString;
};

export default breadthFirstTraversal;