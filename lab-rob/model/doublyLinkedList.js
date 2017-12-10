'use strict';

class DoublyLinkedList {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }

  append(node) {
    isNode(node);

    let currentNode = this;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    node.previous = currentNode;
    return this;
  }
  
  prepend(node) {
    isNode(node);
  
    let currentNode = this;
    while(currentNode.previous) {
      currentNode = currentNode.previous;
    }

    currentNode.previous = node;
    node.next = currentNode;
    return this;
  }

  insertAfter(node) {
    isNode(node);

    if(this.next) {
      node.next = this.next;
      node.next.previous = node;
    }

    this.next = node;
    node.previous = this;
    return this;
  }

  insertBefore(node) {
    isNode(node);

    if(this.previous) {
      node.previous = this.previous;
      node.previous.next = node;
    }

    this.previous = node;
    node.next = this;
    return this;
  }

  remove() {
    if(!this.previous && !this.next)
      return this;

    if(!this.previous) {
      this.value = this.next.value;
      this.next = this.next.next;
      return this;
    }

    if(!this.next) {
      this.previous.next = null;
      return this.previous;
    }

    this.previous.next = this.next;
    this.next.previous = this.previous;
    return this.previous;
  }
}


module.exports = DoublyLinkedList;

let isNode = node => {
  if(!(node instanceof DoublyLinkedList))
    throw new TypeError('<node> must be an instance of DoublyLinkedList');
};