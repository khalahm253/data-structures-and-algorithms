'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  insertBefore(value, newValue) {
    const node = new Node(newValue);

    if (!this.head) {
      return new Error('__ERROR__ The list is empty');
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.value === value) {
        currentNode.value = node;
      }
    }
    return this;
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    
    if (!this.head) {
      return new Error('__ERROR__ The list is empty');
    }
    
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
      }
      currentNode.next = node;
    }
    return this;
  }
};