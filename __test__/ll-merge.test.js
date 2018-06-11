'use strict';

const LinkedList = require('../ll-merge/ll-merge');

test('#ll-merge equal lists', () => {
  const listA = new LinkedList();
  const listB = new LinkedList();

  listA.insertAtHead(2);
  listA.insertAtHead(3);
  listA.insertAtHead(1);

  listB.insertAtHead(4);
  listB.insertAtHead(9);
  listB.insertAtHead(5);

  const result = listA.mergeLists(listB);
  // head -> 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> X

  expect(result.head.value).toEqual(1);
  expect(result.head.next.value).toEqual(5);
  expect(result.head.next.next.value).toEqual(3);
  expect(result.head.next.next.next.value).toEqual(9);
  expect(result.head.next.next.next.next.value).toEqual(2);
  expect(result.head.next.next.next.next.next.value).toEqual(4);
  expect(result.head.next.next.next.next.next.next).toBeNull();
});
test('#ll-merge listA is longer', () => {
  const listA = new LinkedList();
  const listB = new LinkedList();

  listA.insertAtHead(2);
  listA.insertAtHead(3);
  listA.insertAtHead(1);

  listB.insertAtHead(4);

  const result = listA.mergeLists(listB);
  // head -> 1 -> 4 -> 3 -> 2 -> X

  expect(result.head.value).toEqual(1);
  expect(result.head.next.value).toEqual(4);
  expect(result.head.next.next.value).toEqual(3);
  expect(result.head.next.next.next.value).toEqual(2);
  expect(result.head.next.next.next.next).toBeNull();
});

test('#ll-merge listB is longer', () => {
  const listA = new LinkedList();
  const listB = new LinkedList();

  listA.insertAtHead(3);
  listA.insertAtHead(1);

  listB.insertAtHead(4);
  listB.insertAtHead(9);
  listB.insertAtHead(5);


  const result = listA.mergeLists(listB);
  // head -> 1 -> 5 -> 3 -> 9 -> 4 -> X

  expect(result.head.value).toEqual(1);
  expect(result.head.next.value).toEqual(5);
  expect(result.head.next.next.value).toEqual(3);
  expect(result.head.next.next.next.value).toEqual(9);
  expect(result.head.next.next.next.next.value).toEqual(4);
  expect(result.head.next.next.next.next.next).toBeNull();
});