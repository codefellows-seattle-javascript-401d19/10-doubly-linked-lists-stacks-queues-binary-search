'use strict';

const DoublyLinkedList = require('../lib/doubly-linked-list');

describe('doubly-linked-list.js', () => {
  test('A list with a single element, should have no value and no next', () => {
    let result = DoublyLinkedList(7);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

});
