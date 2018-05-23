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
  kthFromEnd(k) {
    let len = 1;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      len += 1;
    }
    if (k >= len) throw new Error('Node not found.');
    currentNode = this.head;
    for (let i = 1; i < (len - k); i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
};