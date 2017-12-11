'use strict';

let stackFactory = module.exports = {};

stackFactory.createStack = () =>{
  let data = [];

  return {
    push: (value) =>{
      data.push(value);
    },
    pop: () => {
      return data.pop();
    },
  };

};




//notes
class Queue{
  constructor(){
    this._data = [];//tells everyone not to touch it but doesnt prevent pepople from touching it

  }
  enqueue(value){
    this._data.push(value);
  }
  dequeue(){
    this._data.shift();
  }
}

module.exports = Queue;
