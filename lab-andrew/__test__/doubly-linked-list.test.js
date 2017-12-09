'use strict';

const DoublyLinkedList = require('../model/doubly-linked-list');

describe('doubly-linked-list.js',() => {
  test('A list with a single node, should have a value and no next or prev', () => {
    let result = new DoublyLinkedList(1);
    expect(result.value).toEqual(1);
    expect(result.next).toEqual(null);
    expect(result.prev).toEqual(null);
  });

  test('insertion should properly modify the next property and new node\'s prev should point to previous node\'s value', () => {
    let result = new DoublyLinkedList(1);
    result.append(new DoublyLinkedList(2));
    result.append(new DoublyLinkedList(3));

    expect(result.value).toEqual(1);
    expect(result.prev).toEqual(null);

    expect(result.next.value).toEqual(2);
    expect(result.next.prev.value).toEqual(1);

    expect(result.next.next.value).toEqual(3);
    expect(result.next.next.prev.value).toEqual(2);

    expect(result.next.next.next).toEqual(null);
  });
});
