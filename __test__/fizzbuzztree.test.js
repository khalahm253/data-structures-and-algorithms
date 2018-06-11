'use strict';

import BinaryTree from '../fizzbuzztree/binary-tree';
import Node from '../fizzbuzztree/node';
import FizzBuzzTree from '../fizzbuzztree/fizzbuzztree';

const one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const seven = new Node(7);
const eight = new Node(8);
const fifteen = new Node(15);
const seventeen = new Node(17);

describe('#FizzBuzzTree', () => {
  test('should return undefined is no tree', () => {
    const emptyTree = new BinaryTree(null);
    expect(FizzBuzzTree(emptyTree.root)).toEqual(undefined);
  });

  test('should return Fizz in lieu of 3', () => {
    const testTree = new BinaryTree(one);
    
    one.left = three;
    one.right = five;

    three.left = seven;
    three.right = eight;

    five.left = fifteen;
    five.right = seventeen;

    FizzBuzzTree(testTree);

    expect(one.left.value).toEqual('Fizz');
  });

  test('should return Buzz in lieu of 5', () => {
    const testTree = new BinaryTree(one);
    
    one.left = three;
    one.right = five;

    three.left = seven;
    three.right = eight;

    five.left = fifteen;
    five.right = seventeen;

    FizzBuzzTree(testTree);

    expect(one.right.value).toEqual('Buzz');
  });

  test('should return FizzBuzz in lieu of 15', () => {
    const testTree = new BinaryTree(one);
    
    one.left = three;
    one.right = five;

    three.left = seven;
    three.right = eight;

    five.left = fifteen;
    five.right = seventeen;

    FizzBuzzTree(testTree);

    expect(five.left.value).toEqual('FizzBuzz');
  });
});