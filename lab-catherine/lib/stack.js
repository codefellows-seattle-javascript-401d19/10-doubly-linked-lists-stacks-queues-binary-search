'use strict';

const DoublyLinkedList = require('./doubly-linked-list');

let stack = module.exports = {};

stack.createStack = () => {

  return {
    push: (value) => {
      DoublyLinkedList.append(value);
    },
    pop: (value) => {
      while(this.next) {
        if(!this.next) {
          this.previous = this;
          this.next.remove(value);
        }
        return this;
      }
      return DoublyLinkedList.remove(value);
    },
  };
};