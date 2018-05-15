'use strict';

function reverseArray(inputArray) { // eslint-disable-line
  const outputArray = [];
  let j = 0;
  for (let i = inputArray.length - 1; i >= 0; i -= 1) {
    outputArray[j] = inputArray[i];
    j += 1;
  }
  return outputArray;
}