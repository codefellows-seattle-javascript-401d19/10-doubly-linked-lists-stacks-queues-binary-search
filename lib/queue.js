'use strict';

const DoublyLinkedList = require('./doubly-linked-list');

class Queue{


  enqueue(value){
    DoublyLinkedList.append(value);
  }

  dequeue(){

    if(!this.previous) {
      this.next = this;
      this.previous = null;
    }

    if(!this.next)
      return this;

    // else
    //   this.next.daqueue();

    return DoublyLinkedList.remove(this);
  }

}

module.exports = Queue;
