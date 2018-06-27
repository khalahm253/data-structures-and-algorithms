'use strict';

import BinaryTree from '../tree_intersection/binary-tree';
import Node from '../tree_intersection/node';
import treeIntersection from '../tree_intersection/tree_intersection';

const one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const ten = new Node(10);
const fifteen = new Node(15);
const seventeen = new Node(17);


const threeB = new Node(3);
const fiveB = new Node(5);
const fifteenB = new Node(15);

describe('#treeIntersection', () => {
  test('should return undefined if no trees', () => {
    const emptyTreeA = new BinaryTree(null);
    const emptyTreeB = new BinaryTree(null);    
    expect(treeIntersection(emptyTreeA, emptyTreeB)).toEqual([]);
  });

  // test('should return a map of testTreeA', () => {
  //   const testTreeA = new BinaryTree(one);

  //   one.left = seven;
  //   one.right = five;

  //   seven.left = fifteen;
  //   seven.right = eight;

  //   five.left = three;

  //   const testTreeB = new BinaryTree(threeB);

  //   threeB.left = seventeen;
  //   threeB.right = fiveB;

  //   seventeen.left = fifteen;
  //   seventeen.right = nine;

  //   fifteenB.left = ten;

  //   treeIntersection(testTreeA, testTreeB);
  //   expect(typeof treeIntersection(testTreeA, testTreeB)).toEqual('array');
  // });

  test('should return an array of match values', () => {
    const testTreeA = new BinaryTree(one);

    one.left = seven;
    one.right = five;

    seven.left = fifteen;
    seven.right = eight;

    five.left = three;

    const testTreeB = new BinaryTree(threeB);

    threeB.left = seventeen;
    threeB.right = fiveB;

    seventeen.left = fifteen;
    seventeen.right = nine;

    fifteenB.left = ten;

    expect(treeIntersection(testTreeA, testTreeB)).toEqual([3, 15, 5]);
    expect(typeof treeIntersection(testTreeA, testTreeB)).toEqual('object');    
  });
});