'use strict';

const DoublyLinkedList = require('../model/doubly-linked-list');

describe('linked-list.js', () => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(5);

    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.prev).toEqual(null);
  });

  test('insertion should properly modify the next property', () => {
    let result = new DoublyLinkedList(5);
    result.append(new DoublyLinkedList(4));
    result.append(new DoublyLinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.prev).toEqual(null);

    expect(result.next.value).toEqual(4);
    expect(result.next.prev.value).toEqual(5);

    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.prev.value).toEqual(4);

    expect(result.next.next.next).toEqual(null);
  });

  test('deletion should properly remove specified element', () => {
    let result = new DoublyLinkedList(5);
    let testList = new DoublyLinkedList(4);

    result.append(testList);
    expect(result.next.value).toEqual(4);
    expect(result.next.next).toEqual(null);

    expect(result.remove(testList)).toEqual(result);
    expect(result.remove(result)).toEqual(null);
  });
});
