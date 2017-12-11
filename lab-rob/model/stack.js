'use strict';

class SinglyLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this._data = new SinglyLinkedList(undefined);
    this._stackLength = 0;
    this._first = true;
  }

  push(value) {
    if(value === undefined)
      throw new TypeError('<value> is undefined');
    if(this._first) {
      this._data.value = value;
      this._first = false;
    } else {
      let newStack = new SinglyLinkedList(value);
      newStack.next = this._data;
      this._data = newStack;
    }
    this._stackLength++;
    return this._stackLength;
  }

  pop() {
    if(this._stackLength === 0)
      return undefined;
    let topValue = this._data.value;
    if(this._data.next) {
      this._data = this._data.next;
    } else {
      this._data.value = undefined;
      this.first = true;
    }
    this._stackLength--;
    return topValue;
  }
}

module.exports = Stack;