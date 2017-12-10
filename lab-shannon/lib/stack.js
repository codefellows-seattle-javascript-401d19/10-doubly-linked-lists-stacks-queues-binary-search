'use strict';

let stack = module.exports = {};

// Add and remove elements ONLY from the top of the stack

stack.createStack = () => {
  let data = [];

  return {
    push: (element) => {                 // adds an element to the end of the array
      data.push(element);
    },
    pop: () => {                        // removes an element from the end of the array & returns that element
      return data.pop();
    }
  }
}
