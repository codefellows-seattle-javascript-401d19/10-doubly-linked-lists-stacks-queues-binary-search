'use strict';
let DoublyLinkedList = require(`./doublyLinkedList`);

let stack = module.exports = {};

stack.createStack = () => {

  return {
    // add something to the top of the stack
    push: (value) => {
      console.log(DoublyLinkedList);
      DoublyLinkedList.append(value);
    },

    // remove something from the top of the stack
    pop: () => {
      if(this.next === null){
        DoublyLinkedList.remove(this);
      }
    },
  };
};
