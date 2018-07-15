'use strict';

const hashmaps = require('../left_join/left-join');

describe('left join of two hashmaps', () => {
  const mapA = {
    fond: 'enamored',
    outfit: 'garb',
  };
  const mapB = {
    fond: 'averse',
  };

  const mapC = {
    kind: 'nice',
    tasty: 'yummy',
    far: 'distant',
  };
  const mapD = {};


  test('Left join of mapA and mapB', () => {
    expect(hashmaps.leftJoin(mapA, mapB)).toEqual({
      fond: ['enamored', 'averse'],
      outfit: ['garb', null],
    });
  });
  test('Left join of mapC and mapD', () => {
    expect(hashmaps.leftJoin(mapC, mapD)).toEqual({
      kind: ['nice', null],
      tasty: ['yummy', null],
      far: ['distant', null],
    });
  });
  test('Should return empty hashmap if first hashmap is empty', () => {
    expect(hashmaps.leftJoin(mapD, mapB)).toEqual({});
  });
});