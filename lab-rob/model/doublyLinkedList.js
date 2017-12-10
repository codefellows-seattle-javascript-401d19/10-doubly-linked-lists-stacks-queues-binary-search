'use strict';

class DoublyLinkedList {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

module.exports = DoublyLinkedList;