'use strict';

// require in the linked lists

const LinkedLists = require('./doubly-linked-lists');

class Queue{
  constructor(){
    this.__data = [];
  }

  enqueue(value){
    this.__data.push(value);
  }

  dequeue(){
    return this.__data.shift();
  }
}

module.exports = Queue;