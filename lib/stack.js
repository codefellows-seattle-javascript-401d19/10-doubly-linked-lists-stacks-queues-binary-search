'use strict';

let stack = module.exports = {};

stack.createStack = () => {

  // TODO replace array with doubly linked list
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
