'use strict';

const LinkedList = require('../ll-kth-end/ll-kth-end');

test('#kth-from-end', () => {
  const list = new LinkedList();

  list.insertAtHead(2);
  list.insertAtHead(8);
  list.insertAtHead(3);
  list.insertAtHead(1);

  expect((list.kthFromEnd(0).value)).toEqual(2);
  expect((list.kthFromEnd(1).value)).toEqual(8);
  expect((list.kthFromEnd(2).value)).toEqual(3);
  expect((list.kthFromEnd(3).value)).toEqual(1);
});