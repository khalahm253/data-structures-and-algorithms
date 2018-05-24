
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  mergeLists(listB) {
    let currentA = this.head;
    let nextA = currentA.next;
    let currentB = listB.head;
    let nextB = currentB.next;

    while (currentA.next !== null && currentB.next !== null) {
      currentB.next = nextA;
      currentA.next = currentB;
      currentA = nextA;
      nextA = nextA.next;
      currentB = nextB;
      nextB = nextB.next;
    }
    if (currentA.next === null) {
      currentA.next = currentB;
    } else if (currentB.next === null) {
      currentA.next = currentB;
      currentB.next = nextA;
    }
    return this;
  }
};