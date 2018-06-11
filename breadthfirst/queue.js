'use strict';

class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    const length = this.stackA.length;
    for (let i = 0; i < length; i++) {
      const temp = this.stackA.pop();
      this.stackB.push(temp);
    }
    const popped = this.stackB.pop();

    const length2 = this.stackB.length;
    for (let i = 0; i < length2; i++) {
      const temp2 = this.stackB.pop();
      this.stackA.push(temp2);
    }
    return popped;
  }
}

module.exports = Queue;