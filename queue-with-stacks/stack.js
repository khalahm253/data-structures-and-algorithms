'use strict';


module.exports = class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(value) {
    this.storage[this.count] = value;
    this.count += 1;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count -= 1;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};