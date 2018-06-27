'use strict';

const repeatedWord = (string) => {
  if (string === '') {
    return undefined;
  }
  const array = string.match(/\w+/g);
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else if (map[array[i]]) {
      map[array[i]] += 1;
      return array[i];
    }
  }
  return undefined;
};

export default repeatedWord;