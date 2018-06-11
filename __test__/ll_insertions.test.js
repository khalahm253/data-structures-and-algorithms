'use strict';

const LinkedList = require('../ll_insertions/ll_insertions');


describe('ll_insertions.js', () => {
  it('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('#append', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);

    testList.append(6);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);

    testList.append(7);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });

  // test('#insertBefore', () => {
  //   const testList = new LinkedList();

  //   testList.append(5);
  //   testList.insertBefore(8);
  //   expect()
  // });
});