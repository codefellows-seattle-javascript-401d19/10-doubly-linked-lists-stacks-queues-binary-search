'use strict';

class SinglyLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this._data = new SinglyLinkedList(null);
    this._stackLength = 0;
    this._first = true;
  }

  push(value) {
    if(this._first) {
      this._data.value = value;
      this._stackLength = 1;
      this._first = false;
    } else {
      let newStack = new SinglyLinkedList(value);
      newStack.next = this._data;
      this._data = newStack;
      this._stackLength++;
    }
    return this._stackLength;
  }
}

module.exports = Stack;