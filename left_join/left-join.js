'use strict';

const hashmaps = module.exports = {};

hashmaps.leftJoin = (map1, map2) => {
  const outputMap = {};
  const keys = Object.keys(map1);

  for (let i = 0; i < keys.length; i++) {
    const word = keys[i];
    const synonym = map1[word];
    let antonym = null;
    if (map2[word]) {
      antonym = map2[word];
    }
    outputMap[word] = [synonym, antonym];
  }
  return outputMap;
};