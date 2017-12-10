'use strict';

const DoublyLinkedList = require('../model/doubly-linked-list');

describe('linked-list.js', () => {
  test('A list with a single element, should have a value and no next', () => {
    const result = new DoublyLinkedList(5);

    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.prev).toEqual(null);
  });

  test('Should throw an error if list is appended with non-node', () => {
    const result = new DoublyLinkedList(5);
    const testList = 'not a node';

    expect(() => {
      result.append(testList);
    }).toThrow();
  });

  test('insertion should properly modify the next property', () => {
    const result = new DoublyLinkedList(5);
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
    const result = new DoublyLinkedList(5);
    const testList = new DoublyLinkedList(4);

    result.append(testList);
    expect(result.next.value).toEqual(4);
    expect(result.next.next).toEqual(null);

    expect(result.remove(result)).toEqual(testList);

    result.append(testList);
    expect(result.remove(testList)).toEqual(result);
    expect(result.remove(result)).toEqual(null);
  });

  test('getTail should return the DoublyLinkedLists tail node', () => {
    const result = new DoublyLinkedList(5);
    const testList = new DoublyLinkedList(4);

    expect(result.getTail()).toEqual(result);

    result.append(testList);
    expect(result.getTail()).toEqual(testList);
    expect(result.remove(result.getTail())).toEqual(result);
    expect(result.remove(result.getTail())).toEqual(null);
  });

  test('getHead should return the head of the DoublyLinkedList', () => {
    const result = new DoublyLinkedList(5);
    const testList = new DoublyLinkedList(4);

    expect(result.getHead()).toEqual(result);
    expect(testList.getHead()).toEqual(testList);

    result.append(testList);
    expect(result.getHead().next).toEqual(testList);
  });

  test('getLength should return the length of the DoublyLinkedList', () => {
    const result = new DoublyLinkedList(5);
    const testList = new DoublyLinkedList(4);

    expect(result.getLength()).toEqual(1);

    result.append(testList);
    expect(result.getLength()).toEqual(2);
  });
});
