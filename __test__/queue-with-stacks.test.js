'use strict';

const Stack = require('../queue-with-stacks/stack');
const Queue = require('../queue-with-stacks/queue-with-stacks');

describe('stack.js', () => {
  const stack = new Stack();
  test('push(value) and pop()', () => {
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    expect(stack.storage[0]).toEqual(3);
    expect(stack.storage[1]).toEqual(4);
    expect(stack.storage[2]).toEqual(5);
    expect(stack.storage[3]).toEqual(6);
    expect(stack.storage[4]).toEqual(7);
    expect(stack.pop()).toEqual(7);
    expect(stack.pop()).toEqual(6);
    expect(stack.pop()).toEqual(5);
    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
  });
});

describe('queue-with-stacks.js', () => {
  const queue = new Queue();
  test('push(value)', () => {
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);

    // queue contents: 7 6 5 4 3

    expect(queue.stackA.storage[0]).toEqual(3);
    expect(queue.stackA.storage[1]).toEqual(4);
    expect(queue.stackA.storage[2]).toEqual(5);
    expect(queue.stackA.storage[3]).toEqual(6);
    expect(queue.stackA.storage[4]).toEqual(7);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);

    // queue contents: 7 6

    queue.enqueue(30);
    queue.enqueue(40);
    queue.enqueue(50);
    // queue contents: 50 40 30 7 6

    expect(queue.stackA.storage[0]).toEqual(6);
    expect(queue.stackA.storage[1]).toEqual(7);
    expect(queue.stackA.storage[2]).toEqual(30);
    expect(queue.stackA.storage[3]).toEqual(40);
    expect(queue.stackA.storage[4]).toEqual(50);
  });
});