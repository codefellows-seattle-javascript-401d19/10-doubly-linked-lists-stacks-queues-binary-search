'use strict';
let DoublyLinkedList = require(`./doublyLinkedList`);

class Stack {
  constructor() {
    this.list = null;
  }
  // add something to the top of the stack
  push(value){
    if(this.list === null) {
      this.list = new DoublyLinkedList(value);
      return;
    }
    else{
      this.list.append(new DoublyLinkedList(value));
    }
  }

  // remove something from the top of the stack
  pop(){
    if(this.list === null){
      return null;
    }
    else if(this.list.next === null){
      return this.list.remove(this.value);
    }else{
      console.log(this.list.next);
      // this.list.next.pop();
    }
  }
};

module.exports = Stack;
