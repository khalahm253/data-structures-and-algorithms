'use strict';

const validation = module.exports = {};

validation.multiBracketValidation = (input) => {
  const bracketOrder = [];
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '(' || char === '[' || char === '{') {
      bracketOrder.push(char);
    } else if (char === ')') {
      if (bracketOrder.pop() !== '(') {
        return false;
      }
    } else if (char === ']') {
      if (bracketOrder.pop() !== '[') {
        return false;
      }
    } else if (char === '}') {
      if (bracketOrder.pop() !== '{') {
        return false;
      }
    }
  }
  return true;
};