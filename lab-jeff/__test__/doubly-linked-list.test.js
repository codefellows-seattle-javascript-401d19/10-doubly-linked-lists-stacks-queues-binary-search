'use strict';

const DoublyLinkedList = require('../lib/doubly-linked-list');

describe('doubly-linked-list.js',() => {
  test('A list with a single element, should have a value and no next', () => {
    let result = new DoublyLinkedList(5);
    expect(result.value).toEqual(5);
    expect(result.next).toEqual(null);
    expect(result.previous).toEqual(null);
  });

  test('append should properly modify the next and previous property', () => {
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
  test('remove should update the next and previous property of surrounding elements such that the passed in node is no longer referenced.  Testing remove middle node.', () => {
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

  test('remove should update the next and previous property of surrounding elements such that the passed in node is no longer referenced.  Testing remove first node.', () => {
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

    first.remove(first);

    expect(second.previous).toEqual(null);
  });

  test('remove should throw error if called on something that is not an instance of DoublyLinkedList.', () => {
    let first = 10;

    expect(() => {
      first.remove(first);
    }).toThrow();
  });

  test('remove should update the next and previous property of surrounding elements such that the passed in node is no longer referenced.  Testing remove last node.', () => {
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

    first.remove(third);

    expect(first.next.next).toEqual(null);
  });

  test('find should return the node containing a given value.  Testing middle node', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.find(20)).toEqual(second);
  });

  test('find should return null if value is not in list', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.find(40)).toBeNull();
  });

  test('find should return the node containing a given value.  Testing first node.', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.find(10)).toEqual(first);
  });

  test('find should return the node containing a given value.  Testing last node.', () => {
    let first = new DoublyLinkedList(10);
    let second = new DoublyLinkedList(20);
    let third = new DoublyLinkedList(30);

    first.append(second);
    first.append(third);

    expect(first.find(30)).toEqual(third);
  });


});
