'use strict';

const DoublyLinkedList = require('./doubly-linked-list');

const Stack = function() {
  let items = null;

  this.push = value => {
    const node = new DoublyLinkedList(value);

    items ?
      items.append(node) :
      items = node;
  };

  this.pop = () => {
    let returnValue = null;

    items ?
      returnValue = items.remove(items.getTail()) :
      returnValue = null;

    return returnValue;
  };

  this.getLength = () => {
    let returnValue = null;
    items ?
      returnValue = items.getLength() :
      returnValue = 0;

    return returnValue;
  };
};

module.exports = Stack;
