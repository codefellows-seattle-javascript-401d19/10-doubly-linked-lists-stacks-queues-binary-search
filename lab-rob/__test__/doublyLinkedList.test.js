'use strict';

const DoublyLinkedList = require('../model/doublyLinkedList');

describe('doublyLinkedList.js', () => {
  let head;
  beforeEach(() => {
    head = new DoublyLinkedList(0);
  });
  test('Instantiating a new object should return a node with a value and null previous/next properties.', () => {
    expect(head.previous).toBeNull();
    expect(head.value).toEqual(0);
    expect(head.next).toBeNull();
  });
});