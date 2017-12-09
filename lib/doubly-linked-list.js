'use strict';

class DoublyLinkedList {

  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if(!this.next){
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);

    return this;
  }

  remove(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if(!this.next)
      return this;

    if(this.next === node) {
      this.next = this.next.next;
      this.next.previous = this;
    }
    else
      this.next.remove(node);

    return this;
  }

  // add one more array method TODO
}

module.exports = DoublyLinkedList;
