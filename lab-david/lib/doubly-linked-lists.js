'use strict';

class DoublyLinkedLists{
  constructor(value){
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  append(node){
    if(!(node instanceof DoublyLinkedLists))
      throw new TypeError(`<node> should be an instance of DoublyLinkedLists`);

    if(!this.next){
      this.next = node;
      node.previous = this;
    }
    else 
      this.next.append(node);

      return this;
  }
}

module.exports = DoublyLinkedLists;