'use strict';


class DoublyLinkedList{

  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList)){
      throw new TypeError(`To add a node, you must provide an instance of a doubly linked list`);
    }

    if(this.next === null){
      this.next = node;
      node.previous = this;
    }else{
      this.next.append(node);
    }

    return this;
  };

  remove(nodeValue){
    if(this.next.value === nodeValue){
      this.next.next.previous = this;
      this.next = this.next.next;
    }
  };
}

module.exports = DoublyLinkedList;
