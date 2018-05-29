'use strict';




const moveAll = (stack, otherStack) => {
  let currentValue = stack.pop();
  while (currentValue) {
    otherStack.push(currentValue);
    currentValue = stack.pop();
  }
};
module.exports = class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    moveAll(this.stackB, this.stackA);
    this.stackA.push(value);
  }
  dequeue() {
    moveAll(this.stackA, this.stackB);
    return this.stackB.pop();
  }
};