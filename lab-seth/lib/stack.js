'use strict';


class Stack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  
  push(node) {
    if(!this.next){
      this.next = node;
      return;
    }

    this.next.push(node);
    return;
  }

  pop() {
    let popped = this.value;

    if(!this.next) {
      this.value = null;
      return popped;
    }

    if(!this.next.next) {
      popped = this.next.value;
      this.next = null;
      return popped;
    }
    return this.next.pop();
  }
}

module.exports = Stack;

