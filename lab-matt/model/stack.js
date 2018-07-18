'use strict';

class Stack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  push(node) {
    if (!this.next) {
      this.next = node;
      return;
    }

    this.next.push(node);
    return;
  }

  pop() {
    let toPop = this.value;
    
    if (!this.next) {
      this.value = null;
      return toPop;
    } 

    if (!this.next.next) {
      toPop = this.next.value;      
      this.next = null;
      return toPop;
    }

    return this.next.pop();
  }
}

module.exports = Stack;