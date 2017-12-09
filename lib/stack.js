'use strict';

const DoublyLinkedList = require('./doubly-linked-list');

let stack = module.exports = {};

stack.createStack = () => {

  return {
    push: (value) => {
      DoublyLinkedList.append(value);
    },
    pop: () => {
      return DoublyLinkedList.remove();
    },
  };
};
