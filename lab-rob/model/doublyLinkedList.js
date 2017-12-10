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

}


module.exports = DoublyLinkedList;

let isNode = node => {
  if(!(node instanceof DoublyLinkedList))
    throw new TypeError('<node> must be an instance of DoublyLinkedList');
};

// let head = new DoublyLinkedList(0);
// let firstLink = new DoublyLinkedList(1);
// let secondLink = new DoublyLinkedList(2);
// let thirdLink = new DoublyLinkedList(3);

// head.append(firstLink).append(secondLink);
// firstLink.append(thirdLink);
// console.log(thirdLink.previous.previous.previous.previous);