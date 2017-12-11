'use strict';

const DoublyLinkedList = require('../lib/doubly-linked-lists');

describe('linked-lists.js', () => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(7);
    expect(result.value).toEqual(7);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

  test('insert should properly modify the next property', () => {
    let result = new DoublyLinkedList(7);
    result.append(new DoublyLinkedList(9));
    result.append(new DoublyLinkedList(11));
    
    expect(result.value).toEqual(7);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(9);
    expect(result.next.previous).toEqual(7);

    expect(result.next.next.value).toEqual(11);
    expect(result.next.previous.previous).toEqual(7);

    expect(result.next.next.next).toEqual(null);    
  });
});