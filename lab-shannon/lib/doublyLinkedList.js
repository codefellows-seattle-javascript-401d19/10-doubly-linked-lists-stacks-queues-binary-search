'use strict';


class DoublyLinkedList{

  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){
    if(!(node instanceof DoublyLinkedList)){
      throw new TypeError(`To append a node, you must provide an instance of a doubly linked list`);
    }

    if(this.value === undefined){
      throw new Error(`The linked list does not exist. You must create one before appending a new node`);
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
    if(this.value === nodeValue && this.next === null){
      this.value = null;

      return this;
    }else if(this.value === nodeValue && this.next !== null){
      this.value = null;
      this.next.previous = this.previous;

      return this;
    }

    if(this.next.value === nodeValue){
      this.next.next.previous = this;
      this.next = this.next.next;

      return this;
    }

    if(this.next === null){
      throw new Error(`A node with that value does not exist`);
    }else{
      this.next.remove(nodeValue);
    }

    return this;
  };

  prepend(node){
    if(!(node instanceof DoublyLinkedList)){
      throw new TypeError(`To prepend a node, you must provide an instance of a doubly linked list`);
    }

    if(this === undefined){
      throw new Error(`The linked list does not exist. You must create one before prepending a new node`);
    }

    this.previous = node;
    node.next = this;

    return this;
  }
}

module.exports = DoublyLinkedList;
