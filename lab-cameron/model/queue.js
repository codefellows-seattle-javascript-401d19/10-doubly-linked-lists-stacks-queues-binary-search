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

  this.getLength = () => {
    let returnValue = null;

    items ?
      returnValue = items.getLength() :
      returnValue = 0;

    return returnValue;
  };
};

module.exports = Queue;
