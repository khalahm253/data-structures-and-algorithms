'use strict';

const validation = require('../multi-bracket-val/multi-bracket-val');

test('#multiBracketValidation', () => {
  expect(validation.multiBracketValidation('{}')).toEqual(true);
  expect(validation.multiBracketValidation('{}(){}')).toEqual(true);
  expect(validation.multiBracketValidation('()[[Extra Characters]1234]')).toEqual(true);
  expect(validation.multiBracketValidation('(){}[[]]')).toEqual(true);
  expect(validation.multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
  expect(validation.multiBracketValidation('[({}]')).toEqual(false);
  expect(validation.multiBracketValidation('(](')).toEqual(false);
  expect(validation.multiBracketValidation('No Brackets Here')).toEqual(true);
  expect(validation.multiBracketValidation('')).toEqual(true);
  expect(validation.multiBracketValidation('[(])')).toEqual(false);
  expect(validation.multiBracketValidation('}{')).toEqual(false);
});