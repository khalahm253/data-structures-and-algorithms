'use strict';

import BinaryTree from '../max-value/binary-tree';
import Node from '../max-value/node';
import findMaxValue from '../max-value/find-max-value';

const one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const seven = new Node(7);
const eight = new Node(8);
const fifteen = new Node(15);
const seventeen = new Node(17);

describe('#findMaxValue', () => {
  test('should return undefined if no tree', () => {
    const emptyTree = new BinaryTree(null);
    expect(findMaxValue(emptyTree)).toEqual(undefined);
  });

  test('should return 17 as max value', () => {
    const testTree = new BinaryTree(one);
    
    one.left = three;
    one.right = five;

    three.left = seven;
    three.right = eight;

    five.left = fifteen;
    five.right = seventeen;

    expect(findMaxValue(testTree)).toEqual(17);
  });

  test('should return ', () => {
    const testTree = new BinaryTree(one);
    
    one.left = five;
    one.right = seven;

    three.left = seventeen;
    three.right = eight;

    five.left = fifteen;
    five.right = three;

    expect(findMaxValue(testTree)).toEqual(17);
  });
});