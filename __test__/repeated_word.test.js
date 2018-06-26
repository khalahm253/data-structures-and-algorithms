'use strict';

import repeatedWord from '../repeated_word/repeated_word.js';

describe('#repeatedWord', () => {
  it('should return undefined if string was empty', () => {
    expect(repeatedWord('')).toEqual(undefined);
  });
  it('should return undefined is no repeated words', () => {
    expect(repeatedWord('This will not work')).toEqual(undefined);
  });
  it('should return first repeated word', () => {
    expect(repeatedWord('This is a test of is')).toEqual('is');
  });
});