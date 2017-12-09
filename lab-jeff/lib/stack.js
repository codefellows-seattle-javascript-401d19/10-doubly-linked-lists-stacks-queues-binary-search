'use strict';

let stack = module.exports = {};

const dll = require('./doubly-linked-list');

stack.createStack = () => {


  return {
    push: (value) => {
      dll.append(value);
    },
    pop: () => {
      while(this.next){
        this.previous = this;
        if(!this.next)
          return this;
      }

      return dll.remove(this);
    },
  };
};
