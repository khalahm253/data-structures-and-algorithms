'use strict';

import BinaryTree from '../binary-tree';
import Node from '../node';
import breadthFirstTraversal from '../breadth-first-traversal';

const one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const seven = new Node(7);
const eight = new Node(8);
const fifteen = new Node(15);
const seventeen = new Node(17);

describe('#breadthFirstTraversal', () => {
  test('should return undefined is no tree', () => {
    const emptyTree = new BinaryTree(null);
    expect(breadthFirstTraversal(emptyTree)).toEqual(undefined);
  });

  test('should return ', () => {
    const testTree = new BinaryTree(one);
    
    one.left = three;
    one.right = five;

    three.left = seven;
    three.right = eight;

    five.left = fifteen;
    five.right = seventeen;

    console.log(testTree);
    expect(breadthFirstTraversal(testTree)).toEqual('135781517');

    expect(typeof breadthFirstTraversal(testTree)).toEqual('string');
  });
});