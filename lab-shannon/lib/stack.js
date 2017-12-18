'use strict';

class Stack{
  constructor(value){
    this.value = value,
    this.next = null,
    this.previous = null,
  }

// add something to the top of the stack
  push(node){
    // if(!(node instanceof Stack)){
    //   throw new TypeError(`To add a value to the stack you must provide an instance of Stack`);
    // }

    if(this.value === undefined){
      throw new Error(`The stack does not exist. You must create one before pushing a new value`);
    }

    if(this.next === null){
      this.next = node;
      node.previous = this;
    }else{
      this.next.push(node);
    }

    return this;
  }

// remove something from the top of the stack
  pop(){
    
  }
}
