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
}

module.exports = DoublyLinkedList;

let isNode = node => {
  if(!(node instanceof DoublyLinkedList))
    throw new TypeError('<node> must be an instance of DoublyLinkedList');
};