'use strict';

class Queue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  enqueue(node) {
    if (!this.next) {
      this.next = node;
      return;
    }

    this.next.enqueue(node);
    return;
  }

  dequeue() {
    let toRemove = this.value;
    if (this.next) {
      this.value = this.next.value;
      this.next = this.next.next;
      return toRemove;
      
    } else {
      this.value = null;
      return toRemove;
    }
  }
}

module.exports = Queue;