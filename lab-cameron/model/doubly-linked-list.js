'use strict';

class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  append(node) {
    if (!(node instanceof DoublyLinkedList)) {
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    }

    if (!this.next) {
      this.next = node;
      node.prev = this;
    } else {
      this.next.append(node);
    }

    return this;
  }

  remove(node) {
    if (!(node instanceof DoublyLinkedList)) {
      throw new TypeError('<node> should be an instance of DoublyLinkedList');
    }

    if (this.prev === null && this.next === null && node === this) {
      return null;
    }


    if (this.value === node.value) {
      if (this.prev) {
        this.prev.next = this.next;
      }
      if (this.next) {
        this.next.prev = this.prev;
      }
    } else if (!this.next) {
      return this;
    } else {
      this.next.remove(node);
    }

    return this;
  }
}

module.exports = DoublyLinkedList;
