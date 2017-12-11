'use strict';

class DoublyLinkedList{
  constructor(value){
    this.id = DoublyLinkedList.counter;
    DoublyLinkedList.counter++;
    this.value = value;
    this.next = null;
    this.previous = null;
  }
  append(node){
    if(!node){
      throw new Error('need to input a lined list');
    }
    if(!this.next){
      this.next=node;
      node.previous = this;
    }else{
      return this.next.append(node);
    }

  }
  remove(node){
    if(this.next === node);
    this.next = this.next.next;
    this.next.previous = this;
  }
}
DoublyLinkedList.counter = 0;


module.exports = DoublyLinkedList;
