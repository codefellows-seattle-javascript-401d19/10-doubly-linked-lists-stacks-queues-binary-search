'use strict';

const DoublyLinkedList = require('../lib/doubly-linked-list');

describe('linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

  test('insertion should properly modify the next property', () => {
    let result = new DoublyLinkedList(5);
    result.append(new DoublyLinkedList(4));
    result.append(new DoublyLinkedList(10));

    expect(result.value).toEqual(5);
    expect(result.previous).toEqual(null);

    expect(result.next.value).toEqual(4);
    expect(result.next.previous.value).toEqual(5);

    expect(result.next.next.value).toEqual(10);
    expect(result.next.next.previous.value).toEqual(4);

    expect(result.next.next.next).toEqual(null);
  });

  test('remove should update the next and previous property and erase an element', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.value).toEqual(10);
    expect(first.previous).toEqual(null);

    expect(first.next.value).toEqual(20);
    expect(first.next.previous.value).toEqual(10);

    expect(first.next.next.value).toEqual(30);
    expect(first.next.next.previous.previous.value).toEqual(10);

    expect(first.next.next.next).toEqual(null);

    first.remove(second);

    expect(first.value).toEqual(10);
    expect(first.next.value).toEqual(30);
    expect(first.next.previous.value).toEqual(10);
    expect(first.next.next).toEqual(null);

  });
});