'use strict';

function findMidpoint(start, end) {
  return Math.ceil(start + ((end - start) / 2));
}
function BinarySearch(array, key) { //eslint-disable-line
  let startIndex = 0;
  let endIndex = array.length - 1;
  let midpoint = Math.ceil((array.length - 1) / 2);
  if (key === array[midpoint]) {
    return midpoint;
  }
  while (key !== array[midpoint]) {
    if (key === array[midpoint]) {
      return midpoint;
    } else if (key > array[midpoint]) {
      startIndex = midpoint + 1;
      midpoint = findMidpoint(startIndex, endIndex);
    } else if (key < array[midpoint]) {
      endIndex = midpoint - 1;
      midpoint = findMidpoint(startIndex, endIndex);
    }
    if (key === array[midpoint]) {
      return midpoint;
    }
    if (key < array[startIndex] || key > array[endIndex]) {
      return -1;
    }
  }
  if (startIndex === endIndex) {
    return startIndex;
  }
}