'use strict';

const DoublyLinkedList = require('./doubly-linked-list');

const Queue = function() {
  let items = null;

  this.enqueue = value => {
    const node = new DoublyLinkedList(value);

    items ?
      items.append(node) :
      items = node;
  };

  this.dequeue = () => {
    let returnValue = null;

    if (items) {
      returnValue = items.getHead();
      items = items.remove(returnValue);
    }

    return returnValue;
  };

  this.front = () => {
    let returnValue = null;

    items ?
      returnValue = items.getHead().value :
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

module.exports = Queue;
