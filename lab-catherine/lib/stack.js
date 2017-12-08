'use strict';

let stack = module.exports = {};

stack.createStack = () => {

  let data = [];

  return {
    push: (value) => {
      data.push(value);
    },
    pop: () => {
      return data.pop();
    },
  };
};