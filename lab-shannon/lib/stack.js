'use strict';
let DoublyLinkedList = require(`./doublyLinkedList`);

class Stack {
  constructor(value) {
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
    let node = this.list;
    while(node.next !== null){
      node = node.next;
    }
    // return this.list.remove(node.value);    // not sure about this line
    return node.value;    // do I just want the node?
  }
};

module.exports = Stack;
