'use strict';

class DoublyLinkedList{
  //new LinkedList()...
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }


  append(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if (!this.next) {
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);

    return this;
  }
  remove(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if(this === node){
      if(!this.next){
        return null;
      }else{
        this.next.previous = null;
        return this.next;
      }
    }

    if (this.next === node) {
      if (!this.next.next) {
        this.next = null;
        return this;
      }
      else {
        this.next = this.next.next;
        this.next.previous = this;
      }
    } else {
      this.next.remove(node);
    }
  }

  find(value){
    if(this.value === value) {
      return this;
    }else{
      return this.next.find(value);
    }
  }
}

module.exports = DoublyLinkedList;