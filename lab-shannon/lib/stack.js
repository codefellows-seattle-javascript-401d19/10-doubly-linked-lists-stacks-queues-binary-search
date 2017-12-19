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
    console.log(this.list);
    if(this.list === null){
      return null;
    }
    else if(this.list.next === null){
      return this.list;
    }
    let node = this.list;
    while(node.next.next !== null){
      node = node.next;
    }
    // return this.list.remove(node.value);    // Do I even need this? The two lines below seem to work fine
    let poppedNode = node.next;
    node.next = null;
    return poppedNode;
  }
};

module.exports = Stack;
