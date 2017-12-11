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

  // TODO : add remove method that removes a node from the DLL by reference
  remove(node, value){
    if(!(node instanceof DoublyLinkedLists))
      throw new TypeError(`<node> should be an instance of DoublyLinkedLists`);
    
    if(this.value === node.value)
      this.value.next.previous = null;
      this.value === this.next.next.value;
  }

  // TODO : add a method of our choice to the constructor
}

module.exports = DoublyLinkedLists;