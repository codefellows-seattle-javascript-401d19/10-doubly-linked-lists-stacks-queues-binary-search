'use strict';

class DoublyLinkedList{
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

  preappend(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    if(!this.previous){
      this.previous = node;
      node.next = this;
    }
    else
      this.previous.append(node);
    return this;
  }

  remove(node){
    if(!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    if(!this.previous){ // if there isn't a previous node
      if(this === node){  // if this is the node
        if(this.next){  // node found at beginning of doubly linked list.
          this.next.previous = null;
          this.next = null;
          return this;
        } else {  // if node does not exist
          return null;
        }
      } else {
        if(this.next){
          return this.next.remove(node);
        } else {
          return null;
        }
      }
    } else {  // if there is a previous node
      if(this === node){
        if(this.next){
          this.next.previous = this.previous;
          this.previous.next = this.next;
          this.next = null;
          this.previous = null;
          return this;
        } else {  // if not a next
          this.previous.next = null;
          return this;
        }
      } else {  // if not the node, there is a previous and a next.
        if(this.next){
          return this.next.remove(node);
        } else {  // if there is not a next, node does not exist
          return null;
        }
      }
    }
  }
}

module.exports = DoublyLinkedList;
