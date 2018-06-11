'use strict';

const shift = require('../array_shift/array_shift');

describe('shift-array.test.js', () => {
  test('Should add new value to middle of array with odd number of elements', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
  });
  test('Should add new value to middle of array with even number of elements', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4, 5, 6], 7)).toEqual([1, 2, 3, 7, 4, 5, 6]);
  });
  test('Should add new value to empty array', () => {
    expect(shift.insertShiftArray([], 7)).toEqual([7]);
  });
});