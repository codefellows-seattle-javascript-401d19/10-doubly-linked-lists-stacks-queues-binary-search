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
    let toPop;

    if (!this.next) {
      toPop = this.value;
      this.value = null;
      return toPop;
    } 

    if (!this.next.next) {
      toPop = this.next.value;      
      this.next = null;
      return 'hello?';
    }

    this.next.pop();
  }
}

module.exports = Stack;