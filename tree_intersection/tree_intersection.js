'use strict';

const traversalA = (rootNode, map) => {
  if (!rootNode) {
    return undefined;
  }

  map.set(rootNode.value, 1);
  traversalA(rootNode.left, map);
  traversalA(rootNode.right, map);

  return undefined;
};

const traversalB = (rootNode, map, intersections) => {
  if (!rootNode) {
    return undefined;
  }

  if (map.get(rootNode.value)) {
    intersections.push(rootNode.value);
  }
  traversalB(rootNode.left, map, intersections);
  traversalB(rootNode.right, map, intersections);

  return undefined;
};

const treeIntersection = (treeA, treeB) => {
  const map = new Map();
  const intersections = [];
  
  traversalA(treeA.root, map);
  traversalB(treeB.root, map, intersections);

  return intersections;
};

export default treeIntersection;