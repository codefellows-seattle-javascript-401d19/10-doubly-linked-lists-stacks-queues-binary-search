'use strict';

class DoublyLinkedList {
  //new LinkedList()...
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    // vinicio - we know we are at the last element if there is no next
    if (!this.next) {
      this.next = node;
      node.previous = this;
    }
    else
      this.next.append(node);

    return this;
  }

  find(value) {
    if (this.next === null && this.value !== value)
      return null;
    if (this.value === value)
      return this;
    else
      return this.next.find(value);
  }

  remove(node) {
    if (!(node instanceof DoublyLinkedList))
      throw new TypeError('<node> should be an instance of DoublyLinkedList');

    // vinicio - we know we are at the last element if there is no next
    if (!this.next) {
      return this;
    }
    if (this.next === node) {
      this.next = this.next.next;
      if (this.next) {
        this.next.previous = this;
      }
    }
    else
      this.next.remove(node);

    return this;
  }
}

module.exports = DoublyLinkedList;