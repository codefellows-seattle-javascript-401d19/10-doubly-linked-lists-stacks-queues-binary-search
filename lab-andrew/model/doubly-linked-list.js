'use strict';

class DoublyLinkedList{

  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if(!this.next){
      this.next = node;
      node.prev = this;
    }
    else
      this.next.append(node);

    return this;
  }

  delete(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    if(node.value === this.value){
      if (this.next){
        this.value = this.next.value;
        this.next = this.next.next;
        if (this.next.next)
          this.next.next.prev = this;
      }
      if (!this.next){
        delete this.next;
        delete this.prev;
        delete this.value;
      }
      return this;
    }

    if(!this.next)
      return this;
    if(this.next === node){
      if(this.next.next){
        this.next.next.prev = this;
        this.next = this.next.next;
      } else {
        this.next = null;
      }
    } else {
      this.next.delete(node);
    }
    return this;
  }
}

module.exports = DoublyLinkedList;
