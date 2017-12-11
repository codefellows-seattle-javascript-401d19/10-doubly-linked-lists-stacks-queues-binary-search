'use strict';

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